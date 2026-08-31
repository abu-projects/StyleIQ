from __future__ import annotations

import io
import json
from pathlib import Path

from PIL import Image
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A3, landscape
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader


ROOT = Path("/Users/aboelkheirmohamed/code/StyleIQ")
MANIFEST = ROOT / "tmp/pdfs/screen_manifest.json"
SCREENS_DIR = ROOT / "tmp/pdfs/screens"
OUTPUT = ROOT / "output/pdf/StyleIQ-al-all-screens.pdf"

PAGE_W, PAGE_H = landscape(A3)
MARGIN_X = 28
GUTTER = 16
TOP_BAR_H = 38
BOTTOM_MARGIN = 20
CELL_W = (PAGE_W - (2 * MARGIN_X) - (2 * GUTTER)) / 3
IMAGE_MAX_H = PAGE_H - TOP_BAR_H - BOTTOM_MARGIN - 8

INK = HexColor("#1B1716")
MUTED = HexColor("#756B63")
CANVAS = HexColor("#EFECE7")
GOLD = HexColor("#B8862D")
LINE = HexColor("#D8D1CA")


def fit_text(text: str, max_width: float, font: str = "Helvetica", size: float = 9) -> str:
    if stringWidth(text, font, size) <= max_width:
        return text
    suffix = "..."
    while text and stringWidth(text + suffix, font, size) > max_width:
        text = text[:-1]
    return text.rstrip() + suffix


def jpeg_reader(png_path: Path) -> tuple[ImageReader, int, int]:
    with Image.open(png_path) as source:
        rgb = source.convert("RGB")
        width, height = rgb.size
        stream = io.BytesIO()
        rgb.save(stream, format="JPEG", quality=91, optimize=True, progressive=True)
        stream.seek(0)
        return ImageReader(stream), width, height


def draw_header(c: canvas.Canvas, page_number: int, page_count: int) -> None:
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(MARGIN_X, PAGE_H - 17, "StyleIQ - Complete Screen Inventory")
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 8)
    page_label = f"al.html  |  page {page_number} of {page_count}  |  index order"
    c.drawRightString(PAGE_W - MARGIN_X, PAGE_H - 17, page_label)
    c.setStrokeColor(LINE)
    c.setLineWidth(0.5)
    c.line(MARGIN_X, PAGE_H - 25, PAGE_W - MARGIN_X, PAGE_H - 25)


def draw_screen(c: canvas.Canvas, screen: dict, column: int) -> None:
    cell_x = MARGIN_X + column * (CELL_W + GUTTER)
    label_y = PAGE_H - TOP_BAR_H - 4

    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 8.5)
    c.drawString(cell_x, label_y, f"{screen['index']:03d}  {screen['id']}")

    title_x = cell_x + 64
    title_width = CELL_W - 64
    c.setFillColor(INK)
    c.setFont("Helvetica", 9)
    c.drawString(title_x, label_y, fit_text(screen["title"], title_width))

    image, pixel_w, pixel_h = jpeg_reader(SCREENS_DIR / screen["filename"])
    aspect = pixel_w / pixel_h
    draw_h = IMAGE_MAX_H
    draw_w = draw_h * aspect
    if draw_w > CELL_W:
        draw_w = CELL_W
        draw_h = draw_w / aspect
    image_x = cell_x + (CELL_W - draw_w) / 2
    image_y = BOTTOM_MARGIN + (IMAGE_MAX_H - draw_h) / 2
    c.drawImage(image, image_x, image_y, width=draw_w, height=draw_h, mask="auto")


def main() -> None:
    payload = json.loads(MANIFEST.read_text())
    screens = payload["screens"]
    page_count = (len(screens) + 2) // 3
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)

    c = canvas.Canvas(str(OUTPUT), pagesize=(PAGE_W, PAGE_H), pageCompression=1)
    c.setTitle("StyleIQ - al.html - Complete Screen Inventory")
    c.setAuthor("StyleIQ")
    c.setSubject("All 132 StyleIQ mockups in al.html index order, three per page")

    for page_index in range(page_count):
        c.setFillColor(CANVAS)
        c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
        draw_header(c, page_index + 1, page_count)
        batch = screens[page_index * 3 : page_index * 3 + 3]
        for column, screen in enumerate(batch):
            draw_screen(c, screen, column)
        c.showPage()

    c.save()
    print(f"Created {OUTPUT}")
    print(f"Screens: {len(screens)} | Pages: {page_count} | Layout: 3 per row")


if __name__ == "__main__":
    main()
