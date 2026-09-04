import fs from "node:fs/promises";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outputDir = "/Users/aboelkheirmohamed/code/StyleIQ/outputs/styleiq-feedback-20260831";
await fs.mkdir(outputDir, { recursive: true });

const workbook = Workbook.create();
const tracker = workbook.worksheets.add("Feedback Tracker");
const guide = workbook.worksheets.add("How to Use");

const headers = [
  "Feedback ID",
  "Comment #",
  "Scope",
  "Screen",
  "Comment",
  "Description",
  "Our Status",
  "Project Owner",
  "Owner Approval",
  "Screen URL",
  "Screenshot URL",
];

const rows = [
  [
    "SIQ-001",
    "C-001",
    "General",
    "All screens",
    "Example feedback item — replace this row",
    "Add the reason, expected behavior, and any useful implementation details here.",
    "Backlog",
    "Project owner",
    "Not Approved",
    "https://example.com/screen",
    "https://example.com/screenshot",
  ],
  ...Array.from({ length: 19 }, () => Array(11).fill("")),
];

tracker.getRange("A1:K21").values = [headers, ...rows];
tracker.showGridLines = false;
tracker.freezePanes.freezeRows(1);
tracker.freezePanes.freezeColumns(2);

const headerFormat = {
  fill: "#F1F3F4",
  font: { bold: true, color: "#202124", size: 10 },
  verticalAlignment: "center",
  horizontalAlignment: "left",
  wrapText: true,
  borders: {
    bottom: { style: "medium", color: "#DADCE0" },
  },
};
tracker.getRange("A1:K1").format = headerFormat;
tracker.getRange("A1:K1").format.rowHeightPx = 34;

tracker.getRange("A2:K21").format = {
  font: { color: "#202124", size: 10 },
  verticalAlignment: "top",
  borders: {
    insideHorizontal: { style: "thin", color: "#E8EAED" },
  },
};
tracker.getRange("A2:K21").format.rowHeightPx = 52;
tracker.getRange("E2:F21").format.wrapText = true;
tracker.getRange("J2:K21").format.wrapText = true;
tracker.getRange("A2:C21").format.verticalAlignment = "center";
tracker.getRange("G2:I21").format.verticalAlignment = "center";

const widths = [110, 90, 125, 160, 260, 340, 125, 160, 135, 260, 260];
for (let i = 0; i < widths.length; i += 1) {
  tracker.getRangeByIndexes(0, i, 21, 1).format.columnWidthPx = widths[i];
}

tracker.getRange("C2:C21").dataValidation = {
  rule: { type: "list", values: ["General", "Specific Screen"] },
};
tracker.getRange("G2:G21").dataValidation = {
  rule: { type: "list", values: ["Backlog", "In Progress", "Done"] },
};
tracker.getRange("I2:I21").dataValidation = {
  rule: { type: "list", values: ["Approve", "Not Approved"] },
};

tracker.getRange("G2:G21").conditionalFormats.add("containsText", {
  text: "Backlog",
  format: { fill: "#FCE8E6", font: { color: "#A50E0E", bold: true } },
});
tracker.getRange("G2:G21").conditionalFormats.add("containsText", {
  text: "In Progress",
  format: { fill: "#FEF7E0", font: { color: "#B06000", bold: true } },
});
tracker.getRange("G2:G21").conditionalFormats.add("containsText", {
  text: "Done",
  format: { fill: "#E6F4EA", font: { color: "#137333", bold: true } },
});
tracker.getRange("I2:I21").conditionalFormats.add("containsText", {
  text: "Approve",
  format: { fill: "#E6F4EA", font: { color: "#137333", bold: true } },
});
tracker.getRange("I2:I21").conditionalFormats.add("containsText", {
  text: "Not Approved",
  format: { fill: "#FCE8E6", font: { color: "#A50E0E", bold: true } },
});

const feedbackTable = tracker.tables.add("A1:K21", true, "StyleIQFeedbackTable");
feedbackTable.style = "TableStyleLight1";
feedbackTable.showFilterButton = true;
feedbackTable.showBandedColumns = false;

guide.showGridLines = false;
guide.getRange("A1:B1").values = [["Style IQ Feedback Tracker", ""]];
guide.getRange("A1:B1").format = {
  fill: "#F1F3F4",
  font: { bold: true, color: "#202124", size: 16 },
  verticalAlignment: "center",
  borders: { bottom: { style: "medium", color: "#DADCE0" } },
};
guide.getRange("A1:B1").format.rowHeightPx = 44;

guide.getRange("A3:B8").values = [
  ["Workflow", "How to use it"],
  ["1. Log", "Create one row per feedback item and assign a unique Feedback ID / Comment #."],
  ["2. Classify", "Choose General or Specific Screen. Add the screen name when applicable."],
  ["3. Explain", "Keep Comment short; use Description for context, rationale, and expected behavior."],
  ["4. Track", "Our team updates status using Backlog, In Progress, or Done."],
  ["5. Review", "The Project Owner selects Approve or Not Approved and can replace the example row."],
];
guide.getRange("A3:B3").format = headerFormat;
guide.getRange("A4:B8").format = {
  font: { color: "#202124", size: 10 },
  verticalAlignment: "top",
  wrapText: true,
  borders: { insideHorizontal: { style: "thin", color: "#E8EAED" } },
};
guide.getRange("A4:A8").format.font = { bold: true, color: "#3C4043", size: 10 };
guide.getRange("A3:A8").format.columnWidthPx = 150;
guide.getRange("B3:B8").format.columnWidthPx = 620;
guide.getRange("A4:B8").format.rowHeightPx = 44;

guide.getRange("A10:B20").values = [
  ["Field", "Definition"],
  ["Feedback ID", "Internal reference number for the feedback item (for example SIQ-001)."],
  ["Comment #", "Reference number used in the original workshop or review comments."],
  ["Scope", "General when it affects the overall product; Specific Screen when it belongs to one screen."],
  ["Screen", "Screen name, or All screens for general feedback."],
  ["Comment", "The concise feedback statement."],
  ["Description", "Why it matters, expected behavior, constraints, or acceptance detail."],
  ["Our Status", "Backlog, In Progress, or Done."],
  ["Project Owner", "Name of the person responsible for the final review."],
  ["Owner Approval", "Approve or Not Approved."],
  ["URLs", "Use Screen URL for the live/design screen and Screenshot URL for visual evidence."],
];
guide.getRange("A10:B10").format = headerFormat;
guide.getRange("A11:B20").format = {
  font: { color: "#202124", size: 10 },
  verticalAlignment: "top",
  wrapText: true,
  borders: { insideHorizontal: { style: "thin", color: "#E8EAED" } },
};
guide.getRange("A11:A20").format.font = { bold: true, color: "#3C4043", size: 10 };
guide.getRange("A11:B20").format.rowHeightPx = 40;
guide.freezePanes.freezeRows(1);

const trackerInspect = await workbook.inspect({
  kind: "table",
  range: "'Feedback Tracker'!A1:K6",
  include: "values,formulas",
  tableMaxRows: 6,
  tableMaxCols: 11,
  maxChars: 6000,
});
console.log(trackerInspect.ndjson);

const errorScan = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
  summary: "final formula error scan",
});
console.log(errorScan.ndjson);

const trackerPreview = await workbook.render({
  sheetName: "Feedback Tracker",
  range: "A1:K8",
  scale: 1,
  format: "png",
});
await fs.writeFile(`${outputDir}/feedback-tracker-preview.png`, new Uint8Array(await trackerPreview.arrayBuffer()));

const guidePreview = await workbook.render({
  sheetName: "How to Use",
  range: "A1:B20",
  scale: 1,
  format: "png",
});
await fs.writeFile(`${outputDir}/how-to-use-preview.png`, new Uint8Array(await guidePreview.arrayBuffer()));

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(`${outputDir}/Style IQ Feedback Tracker.xlsx`);
