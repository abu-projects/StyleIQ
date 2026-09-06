const sections = {
  S: "Welcome & walkthrough",
  A: "Authentication & first use",
  B: "Import & Closet creation",
  C: "Closet",
  D: "Home & daily styling",
  E: "Outfit actions",
  F: "Style Studio / Canvas",
  G: "Saved Looks",
  H: "Avatar & Virtual Try-On",
  I: "Planner & events",
  J: "Trips",
  K: "Inspiration & community",
  L: "Profile & settings",
  M: "Muse stylist",
};
const raw = {
  A: [
    ["Sign in", "Dedicated login for existing accounts."],
    ["Create account · Name", "First and last name with OAuth prefill."],
    [
      "Email sign-up",
      "Account email used for sign-in and shopping receipt recognition.",
    ],
    [
      "Verify email · OTP",
      "Six-digit OTP, resend, error, and verification state.",
    ],
    ["Choose a first goal", "Route directly to the first useful StyleIQ job."],
    [
      "Wardrobe context · compatibility alias",
      "Edit the same Womenswear, Menswear, or Both setting used at entry.",
    ],
    [
      "Style Twin · entry alias",
      "Open the canonical optional Style Twin entry.",
    ],
    ["Style Twin · photo alias", "Open the canonical photo-reference step."],
    ["First-use goal · alias", "Return to the canonical first-goal decision."],
    ["Wardrobe context · alias", "Open the canonical wardrobe-context choice."],
    ["Today · first-value alias", "Open the first useful Today destination."],
    ["Add to Closet · alias", "Open the canonical Add entry."],
    ["Closet · empty-state alias", "Open the canonical Closet."],
    ["My Looks · alias", "Open the canonical Looks collection."],
    [
      "Trip planning · alias",
      "Open the canonical natural-language Trip input.",
    ],
    [
      "Sign up",
      "Dedicated account-creation entry with Google, Apple, or email.",
    ],
  ],
  B: [
    ["Global Add sheet", "Photos, Search items, Forward receipts."],
    ["Photo picker", "Multi-image selection and automatic cleanup."],
    ["Automatic photo cleanup", "Real photo to a clean Closet item."],
    ["Import search", "Keyword or product URL."],
    ["Search results", "Image, title, source, brand."],
    ["Item review", "Editable metadata, automatic cleanup, Add, Add All."],
    ["Photo recovery", "Low-confidence retry or manual review."],
    ["Item review result", "Processed image, Retry, Add."],
    ["Receipt forwarding", "Personalized forwarding instructions."],
    ["Draft imports", "Persistent unresolved-draft counter."],
    ["Success", "Toast, Closet update, Home transformation."],
  ],
  C: [
    ["Closet grid", "Closet/Wishlist, sort, filters, categories."],
    ["Item detail", "Hero image and editable metadata."],
    ["Image tools", "Crop and photo repair."],
    [
      "Core metadata",
      "Brand, name, category, colors, seasons, fit, tags, price.",
    ],
    ["Styling metadata", "Dress codes, lengths, fabrics, styling eligibility."],
    ["Intelligence", "Saved Looks, worn count, cost-per-wear."],
    ["Style this item", "Occasion families with selected item locked."],
  ],
  D: [
    ["Before Closet data", "Import-first onboarding."],
    ["After first item", "Weather and contextual stylist prompt."],
    ["Loading", "Human recommendation wording."],
    [
      "Outfit families",
      "Business casual, party, dressy, professional, semi-formal.",
    ],
    ["Carousel", "Multiple variants per occasion."],
    ["Missing category", "Explicit missing compatible item."],
  ],
  E: [
    ["Heart", "Save Look."],
    ["Pencil", "Open Customize Outfit."],
    ["Dislike", "Capture negative feedback."],
    ["Send", "Open sharing flow."],
    ["Create Avatar", "Open Try-On or Avatar gate."],
    ["Swipe", "Move between alternatives."],
  ],
  F: [
    ["Style Studio", "Canonical Simple/Create editor."],
    [
      "Style Studio · flat-lay alias",
      "Canonical editor with Flat Lay selected.",
    ],
    ["Style Studio · Twin alias", "Canonical editor with Style Twin selected."],
    ["Style Studio · context alias", "Canonical editor context controls."],
    ["Style Studio · layers alias", "Canonical editor layer controls."],
    ["Style Studio · add-layer alias", "Canonical editor Create mode."],
    ["Style Studio · picker alias", "Canonical editor Create mode."],
    ["Style Studio · multi-select alias", "Canonical editor Create mode."],
    ["Style Studio · sources alias", "Canonical editor Create mode."],
    ["Style Studio · missing-item alias", "Canonical editor Create mode."],
    ["Style Studio · draft alias", "Same persisted canonical draft."],
  ],
  G: [
    ["My Looks", "Canonical Looks collection and filters."],
    ["Saved Look", "Canonical image-first Look detail."],
    ["Saved Look · items alias", "Canonical Saved Look detail."],
    ["Saved Look · details alias", "Canonical Saved Look detail."],
    ["Saved Look · value alias", "Canonical Saved Look detail."],
    ["Saved Look · visibility alias", "Canonical Saved Look detail."],
    ["Saved Look · activity alias", "Canonical Saved Look detail."],
    [
      "Saved Look · delete alias",
      "Canonical detail with explicit delete confirmation.",
    ],
  ],
  H: [
    ["Style Twin introduction", "Optional private visualization entry."],
    ["Photo reference · alias", "Canonical setup step 1."],
    ["Photo reference · alias", "Canonical setup step 1."],
    ["Photo reference · alias", "Canonical setup step 1."],
    ["No-photo reference", "Canonical setup step 1 with manual reference."],
    ["Basic details", "Canonical setup step 2."],
    ["Refine · alias", "Canonical setup step 3."],
    ["Refine · alias", "Canonical setup step 3."],
    ["Refine · alias", "Canonical setup step 3."],
    ["First result", "Canonical setup step 4."],
  ],
  I: [
    ["Calendar month", "Month navigation, daily Add, today."],
    ["Dashboard", "Streak, most-worn, Closet usage, journey."],
    ["Day menu", "Closet, saved Looks, Plan Event."],
    ["Add Event", "Title, date, repeat, dress code, items, notes."],
    ["Validation", "Disabled Create until complete."],
    ["Share Calendar", "Explicit sharing and privacy."],
  ],
  J: [
    ["Trips list", "Canonical empty or upcoming Trips list."],
    ["Trip input", "Canonical natural-language Trip description."],
    ["Trip input · alias", "Canonical natural-language Trip description."],
    ["Trip input · alias", "Canonical natural-language Trip description."],
    ["Trip input · alias", "Canonical natural-language Trip description."],
    ["Trip input · alias", "Canonical natural-language Trip description."],
    ["Trip input · alias", "Canonical natural-language Trip description."],
    ["Trip hub · packing", "Canonical packing state."],
    ["Trip hub · packing alias", "Canonical packing state."],
    ["Trip hub · Looks", "Canonical daily Looks state."],
    ["Trip hub · Looks alias", "Canonical daily Looks state."],
    ["Trip hub · Looks alias", "Canonical daily Looks state."],
    ["Trip hub · packing alias", "Canonical packing state."],
    ["Trip hub · packing alias", "Canonical packing state."],
  ],
  K: [
    ["Feed", "Dense image-led grid."],
    ["Unified search", "People, products, Looks, brands."],
    ["Filters", "For You, Top This Week, brands."],
    ["Look detail", "Creator, location, image, items, metrics."],
    ["Try on me", "Reuse Avatar gate."],
    ["Restyle", "Copy community Look to editable draft."],
    ["Follow/like/comment", "Representational social actions."],
    ["Report", "Reason and confirmation."],
  ],
  L: [
    ["Profile", "Photo, name, counts, member date."],
    ["Completion prompt", "Contextual and non-blocking."],
    ["Looks/Trips", "Switch output and planning."],
    ["About you", "Personal styling context."],
    ["Style preferences", "Prefer, Dislike, learned rules."],
    ["Brands", "Preferred/disliked with search."],
    ["Budget", "Per-item recommendation ranges."],
    ["Events", "Repeating styling events."],
    ["Avatar", "Private configuration and usage."],
    ["Photo originals", "Retain originals after automatic cleanup."],
    ["Standard settings", "Account, privacy, notifications, units, language."],
    ["Tutorial", "Stylist, add, style, save, feedback."],
    ["Notification settings", "Push, email, styling, social, and trip alerts."],
    ["Help center", "Guides, contact support, privacy, and account help."],
    [
      "Privacy & visibility",
      "Profile, Looks, Style Twin, data, and discovery controls.",
    ],
  ],
  M: [
    ["Ask Muse", "Personal stylist hub with contextual quick prompts."],
    [
      "Why this Look",
      "Explain the recommendation and continue to styling actions.",
    ],
    [
      "Wardrobe gap",
      "Evidence-based Closet insight without duplicate shopping.",
    ],
  ],
};
const phaseFor = (s) =>
  ["A", "B", "C", "D"].includes(s)
    ? 1
    : ["E", "F", "G", "H"].includes(s)
      ? 2
      : 3;
const entryScreens = [
  {
    id: "S-00",
    section: "S",
    title: "StyleIQ splash",
    detail: "Editorial brand introduction and the first app entry point.",
    phase: 1,
  },
  {
    id: "S-01",
    section: "S",
    title: "Meet Muse",
    detail: "Introduce the personal stylist and preview what StyleIQ can do.",
    phase: 1,
  },
  {
    id: "S-02",
    section: "S",
    title: "Who are we styling?",
    detail:
      "Choose the wardrobe StyleIQ should personalize before account setup.",
    phase: 1,
  },
];
const screens = [
  ...entryScreens,
  ...Object.entries(raw).flatMap(([section, items]) =>
    items.map((item, index) => ({
      id: `${section}-${String(index + 1).padStart(2, "0")}`,
      section,
      title: item[0],
      detail: item[1],
      phase: phaseFor(section),
    })),
  ),
];
Object.assign(
  screens.find((s) => s.id === "J-07"),
  {
    title: "Building Trip",
    detail: "Generate the draft packing list and hand off to review.",
  },
);
Object.assign(
  screens.find((s) => s.id === "J-08"),
  {
    title: "Packing review",
    detail:
      "Trip-scoped packing list with editable packed states and a clear next action.",
  },
);
Object.assign(
  screens.find((s) => s.id === "J-10"),
  {
    title: "Trip Looks",
    detail: "Plan one Look per date, explicitly inside the Trip draft.",
  },
);
Object.assign(
  screens.find((s) => s.id === "J-13"),
  {
    title: "Review & create",
    detail: "Final summary before creating the Trip.",
  },
);
Object.assign(
  screens.find((s) => s.id === "J-14"),
  {
    title: "Trip created",
    detail: "Saved Trip hub with packing, Looks, and return path.",
  },
);
Object.assign(
  screens.find((s) => s.id === "L-02"),
  {
    title: "Inline profile · compatibility alias",
    detail:
      "The canonical My Atelier profile with its editor expanded in context.",
  },
);
Object.assign(
  screens.find((s) => s.id === "L-03"),
  { title: "My content", detail: "Connected Saved Looks and Trips hub." },
);
Object.assign(
  screens.find((s) => s.id === "L-11"),
  {
    title: "Settings",
    detail: "Account, styling, privacy, app controls, and secure logout.",
  },
);
Object.assign(
  screens.find((s) => s.id === "A-12"),
  {
    title: "Closet import introduction",
    detail: "Automatic photo cleanup and classification preview.",
  },
);
Object.assign(
  screens.find((s) => s.id === "B-03"),
  {
    title: "Automatic photo cleanup",
    detail: "Canonical Add Photos path; cleanup runs in the background.",
  },
);
Object.assign(
  screens.find((s) => s.id === "B-06"),
  {
    title: "Item review",
    detail: "One compact confidence review with inline correction.",
  },
);
Object.assign(
  screens.find((s) => s.id === "B-07"),
  {
    title: "Photo recovery",
    detail: "Low-confidence retry or manual-review exception.",
  },
);
Object.assign(
  screens.find((s) => s.id === "B-08"),
  {
    title: "Item review result",
    detail: "Canonical item review result, not a separate processing stage.",
  },
);
Object.assign(
  screens.find((s) => s.id === "C-03"),
  {
    title: "Item detail · photo tools",
    detail: "Photo repair in the shared Item Detail sheet.",
  },
);
Object.assign(
  screens.find((s) => s.id === "L-10"),
  {
    title: "Photo originals",
    detail: "Original-photo retention after automatic cleanup.",
  },
);
const actionAliases = {
  "E-01": [
    "Save Look · sheet alias",
    "Opens the canonical Save sheet over the outfit.",
  ],
  "E-02": [
    "Customize · Studio alias",
    "Opens the canonical Style Studio editor.",
  ],
  "E-03": [
    "Dislike reason · sheet alias",
    "Opens the canonical feedback sheet over the outfit.",
  ],
  "E-04": [
    "Share · sheet alias",
    "Opens the canonical private-share sheet over the outfit.",
  ],
  "E-05": [
    "Style Twin · entry alias",
    "Opens the canonical optional Style Twin entry.",
  ],
  "E-06": [
    "Try On",
    "Selected Look on the existing Style Twin, with full-body views and previous/next angle controls.",
  ],
};
Object.entries(actionAliases).forEach(([id, [title, detail]]) =>
  Object.assign(
    screens.find((s) => s.id === id),
    { title, detail },
  ),
);
const compatibilityAliases = {
  "A-07": [
    "Style Twin · entry alias",
    "Opens the canonical optional Style Twin entry.",
  ],
  "A-08": [
    "Style Twin · photo alias",
    "Opens the canonical photo-reference step.",
  ],
  "A-09": [
    "First-use goal · alias",
    "Returns to the canonical first-goal decision.",
  ],
  "A-10": [
    "Wardrobe context · alias",
    "Opens the canonical wardrobe-context choice.",
  ],
  "A-11": [
    "Today · first-value alias",
    "Opens the first useful Today destination.",
  ],
  "A-12": ["Add to Closet · alias", "Opens the canonical Add entry."],
  "A-13": ["Closet · empty-state alias", "Opens the canonical Closet."],
  "A-14": ["My Looks · alias", "Opens the canonical Looks collection."],
  "A-15": [
    "Trip planning · alias",
    "Opens the canonical natural-language Trip input.",
  ],
  "F-02": [
    "Style Studio · flat-lay alias",
    "Opens the canonical Style Studio with Flat Lay selected.",
  ],
  "F-03": [
    "Style Studio · Twin alias",
    "Opens the canonical Style Studio with Style Twin selected.",
  ],
  "F-04": [
    "Style Studio · context alias",
    "Opens the canonical Style Studio context controls.",
  ],
  "F-05": [
    "Style Studio · layers alias",
    "Opens the canonical Style Studio layer controls.",
  ],
  "F-06": [
    "Style Studio · add-layer alias",
    "Opens the canonical Style Studio create mode.",
  ],
  "F-07": [
    "Style Studio · picker alias",
    "Opens the canonical Style Studio create mode.",
  ],
  "F-08": [
    "Style Studio · multi-select alias",
    "Opens the canonical Style Studio create mode.",
  ],
  "F-09": [
    "Style Studio · sources alias",
    "Opens the canonical Style Studio create mode.",
  ],
  "F-10": [
    "Style Studio · missing-item alias",
    "Opens the canonical Style Studio create mode.",
  ],
  "F-11": [
    "Style Studio · draft alias",
    "Opens the same persisted Style Studio draft.",
  ],
  "G-03": [
    "Saved Look · items alias",
    "Opens the canonical Saved Look detail.",
  ],
  "G-04": [
    "Saved Look · details alias",
    "Opens the canonical Saved Look detail.",
  ],
  "G-05": [
    "Saved Look · value alias",
    "Opens the canonical Saved Look detail.",
  ],
  "G-06": [
    "Saved Look · visibility alias",
    "Opens the canonical Saved Look detail.",
  ],
  "G-07": [
    "Saved Look · activity alias",
    "Opens the canonical Saved Look detail.",
  ],
  "G-08": [
    "Saved Look · delete alias",
    "Opens the canonical Saved Look detail and its delete confirmation.",
  ],
  "H-02": [
    "Style Twin · photo reference alias",
    "Opens step 1 of the canonical four-step setup.",
  ],
  "H-03": [
    "Style Twin · photo reference alias",
    "Opens step 1 of the canonical four-step setup.",
  ],
  "H-04": [
    "Style Twin · photo reference alias",
    "Opens step 1 of the canonical four-step setup.",
  ],
  "H-05": [
    "Style Twin · no-photo reference",
    "Opens step 1 with the manual path selected.",
  ],
  "H-06": [
    "Style Twin · basic details",
    "Opens step 2 of the canonical four-step setup.",
  ],
  "H-07": [
    "Style Twin · refine alias",
    "Opens step 3 of the canonical four-step setup.",
  ],
  "H-08": [
    "Style Twin · refine alias",
    "Opens step 3 of the canonical four-step setup.",
  ],
  "H-09": [
    "Style Twin · refine alias",
    "Opens step 3 of the canonical four-step setup.",
  ],
  "H-10": [
    "Style Twin · first result",
    "Opens step 4 of the canonical four-step setup.",
  ],
  "J-03": [
    "Trip input · alias",
    "Opens the canonical natural-language Trip input.",
  ],
  "J-04": [
    "Trip input · alias",
    "Opens the canonical natural-language Trip input.",
  ],
  "J-05": [
    "Trip input · alias",
    "Opens the canonical natural-language Trip input.",
  ],
  "J-06": [
    "Trip input · alias",
    "Opens the canonical natural-language Trip input.",
  ],
  "J-07": [
    "Trip input · alias",
    "Opens the canonical natural-language Trip input.",
  ],
  "J-09": ["Trip hub · packing alias", "Opens the canonical Trip packing hub."],
  "J-11": ["Trip hub · Looks alias", "Opens the canonical Trip Looks hub."],
  "J-12": ["Trip hub · Looks alias", "Opens the canonical Trip Looks hub."],
  "J-13": ["Trip hub · packing alias", "Opens the canonical Trip packing hub."],
  "J-14": ["Trip hub · packing alias", "Opens the canonical Trip packing hub."],
};
Object.entries(compatibilityAliases).forEach(([id, [title, detail]]) =>
  Object.assign(
    screens.find((s) => s.id === id),
    { title, detail },
  ),
);
if (
  screens.length !== 124 ||
  new Set(screens.map((screen) => screen.id)).size !== screens.length
)
  throw new Error("Screen inventory must contain 124 unique routes");
const iconMap = {
  back: "arrow-left",
  home: "sun",
  shirt: "shirt",
  plus: "plus",
  compass: "compass",
  more: "ellipsis",
  search: "search",
  bell: "bell",
  user: "user-round",
  heart: "heart",
  calendar: "calendar-days",
  bag: "shopping-bag",
  spark: "sparkles",
  gear: "settings-2",
  logout: "log-out",
  edit: "pencil",
  help: "circle-help",
  check: "check",
  send: "send",
  eye: "eye",
};
const icon = (n) =>
  `<i data-lucide="${iconMap[n] || n}" class="icon" aria-hidden="true"></i>`;
const onboardingIconMap = {
  "A-01": "log-in",
  "A-02": "user-round-plus",
  "A-03": "mail",
  "A-04": "shield-check",
  "A-05": "sparkles",
  "A-06": "shirt",
  "A-07": "scan-face",
  "A-08": "camera",
  "A-09": "message-circle-question",
  "A-10": "heart-handshake",
  "A-11": "sun",
  "A-12": "image-up",
  "A-13": "shirt",
  "A-14": "bookmark",
  "A-15": "luggage",
  "A-16": "user-round-plus",
};
const sectionIconMap = {
  S: "panels-top-left",
  A: "user-round-check",
  B: "image-up",
  C: "shirt",
  D: "sun",
  E: "mouse-pointer-click",
  F: "layers-3",
  G: "bookmark",
  H: "scan-face",
  I: "calendar-days",
  J: "luggage",
  K: "compass",
  L: "settings-2",
  M: "sparkles",
};
const screenIconName = (s) =>
  onboardingIconMap[s.id] || sectionIconMap[s.section] || "circle";
const authIcon = (provider) =>
  provider === "google"
    ? `<span class="auth-provider-icon" aria-hidden="true"><svg viewBox="0 0 18 18"><path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.91c1.7-1.57 2.69-3.88 2.69-6.62Z"/><path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.91-2.26c-.81.54-1.84.86-3.05.86-2.34 0-4.33-1.58-5.04-3.71H.96v2.33A9 9 0 0 0 9 18Z"/><path fill="#FBBC05" d="M3.96 10.71A5.4 5.4 0 0 1 3.68 9c0-.59.1-1.16.28-1.71V4.96H.96A9 9 0 0 0 0 9c0 1.45.35 2.82.96 4.04l3-2.33Z"/><path fill="#EA4335" d="M9 3.58c1.32 0 2.51.45 3.44 1.35l2.58-2.58A8.64 8.64 0 0 0 9 0 9 9 0 0 0 .96 4.96l3 2.33C4.67 5.16 6.66 3.58 9 3.58Z"/></svg></span>`
    : provider === "apple"
      ? `<span class="auth-provider-icon" aria-hidden="true"><svg viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-81.1-19.7C63.3 141.2 4 181 4 262.2c0 24 4.4 48.8 13.3 74.7 11.9 34.7 54.7 119.8 99.4 118.4 23.4-.6 40-16.6 70.5-16.6 29.6 0 45 16.6 71.1 16.6 45.1-.7 83.7-78 95-112.8-60.4-28.5-57.2-72.1-34.6-73.8Zm-55.9-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3Z"/></svg></span>`
      : `<span class="auth-provider-icon" aria-hidden="true">${icon("mail")}</span>`;
const assets = {
  top: "images/item_silk_shell.png",
  top2: "images/alta-rust-knit-top.png",
  blazer: "images/item_blazer.png",
  bottom: "images/cat_clothing.png",
  shoes: "images/cat_shoes.png",
  bag: "images/cat_bags.png",
  accessory: "images/cat_accessories.png",
  look: "images/outfit_soft_tailoring.png",
  look2: "images/outfit_dinner_classic.png",
  look3: "images/outfit_coffee_meeting.png",
  look4: "images/outfit_relaxed_structure.png",
  profile: "images/profile_woman.png",
  muse: "images/muse_portrait.png",
  body: "images/body_front.png",
  face: "images/profile_woman.png",
};
const alternatives = {
  Top: [
    ["Eyelet shirt", "StyleIQ Atelier", assets.top, false],
    ["Rust square-neck knit", "StyleIQ Atelier", assets.top2, true],
    ["Silk shell", "Aritzia", "images/item_silk_shell.png", true],
  ],
  Bottom: [
    ["Black tailored trousers", "StyleIQ Atelier", assets.bottom, false],
    ["Wide-leg trouser", "Toteme", "images/outfit_neutral_minimal.png", true],
  ],
  Outerwear: [
    ["Structured blazer", "Balmain", assets.blazer, true],
    ["Soft trench", "Massimo Dutti", "images/outfit_soft_tailoring.png", false],
  ],
  Shoes: [
    ["Tan suede loafers", "StyleIQ Atelier", assets.shoes, false],
    ["Minimal sneaker", "Veja", "images/cat_shoes.png", true],
  ],
  Bag: [
    ["Oxblood crescent bag", "StyleIQ Atelier", assets.bag, false],
    ["Leather tote", "Cuyana", "images/cat_bags.png", true],
  ],
  Accessory: [
    ["Espresso silver belt", "StyleIQ Atelier", assets.accessory, false],
    ["Gold hoops", "Mejuri", "images/cat_accessories.png", true],
  ],
};
const defaultCanvas = () => ({
  title: "Design Review",
  mode: "flat",
  studioMode: "simple",
  date: "Aug 22",
  location: "Cairo",
  feedback: "Balanced and polished",
  creationSource: "user",
  items: [
    ["Top", 0],
    ["Bottom", 0],
    ["Shoes", 0],
    ["Accessory", 0],
  ].map(([role, idx], i) => makeItem(role, idx, `${role}-${i}`)),
  history: [],
});
function makeItem(role, index, id) {
  const x = alternatives[role][index % alternatives[role].length];
  return {
    id: id || `${role}-${Date.now()}`,
    role,
    index: index % alternatives[role].length,
    name: x[0],
    brand: x[1],
    image: x[2],
    owned: x[3],
    visible: true,
  };
}
let canvasState = (() => {
  try {
    return (
      JSON.parse(localStorage.getItem("styleiqAltaCanvasV2")) || defaultCanvas()
    );
  } catch {
    return defaultCanvas();
  }
})();
const legacyCreationSources = {
  "Created by Me": "user",
  "With Muse": "muse_assisted",
  "Muse Generated": "muse_generated",
  "Recreated from Inspiration": "inspiration_recreated",
};
canvasState.creationSource =
  canvasState.creationSource ||
  legacyCreationSources[canvasState.source] ||
  "user";
canvasState.studioMode = canvasState.studioMode || "simple";
delete canvasState.source;
const defaultTripState = () => ({
  created: false,
  packed: { "Black blazer": true, "Silk shell": true, "Leather loafers": true },
  looks: [{ date: "Aug 23", title: "Arrival by the sea" }],
});
let tripState = (() => {
  try {
    return (
      JSON.parse(localStorage.getItem("styleiqTripV1")) || defaultTripState()
    );
  } catch {
    return defaultTripState();
  }
})();
let currentId = location.hash.slice(1) || "S-00",
  overlay = null,
  lightweightPanel = null,
  accountMenuOpen = false,
  notificationsOpen = false,
  navHistory = [],
  plannerEventCreated = localStorage.getItem("styleiqPlannerIntentV1") !== null,
  closetTab = "closet",
  walkthroughIndex = 0;
let feedbackReason = "",
  museContext = {
    label: "Open question",
    prompt: "Ask about your wardrobe, plans, or personal style.",
  };
let stylingContext =
  localStorage.getItem("styleiqStylingContextV1") || "Womenswear";
let onboardingComplete =
  localStorage.getItem("styleiqOnboardingCompleteV1") === "true";
let plannerIntent = (() => {
  try {
    return JSON.parse(localStorage.getItem("styleiqPlannerIntentV1")) || null;
  } catch {
    return null;
  }
})();
let nextWeekPrepared =
  localStorage.getItem("styleiqNextWeekPreparedV1") === "true";
const closetSeed = [
  {
    name: "Black tailored blazer",
    brand: "Balmain",
    image: assets.blazer,
    category: "Outerwear",
    status: "Available",
    wears: 3,
    favorite: true,
  },
  {
    name: "Ivory silk shell",
    brand: "Aritzia",
    image: assets.top,
    category: "Tops",
    status: "Available",
    wears: 8,
  },
  {
    name: "Rust square-neck knit",
    brand: "StyleIQ Atelier",
    image: assets.top2,
    category: "Tops",
    status: "Available",
    wears: 5,
  },
  {
    name: "Black straight trousers",
    brand: "Theory",
    image: assets.bottom,
    category: "Bottoms",
    status: "Available",
    wears: 11,
  },
  {
    name: "Tan suede loafers",
    brand: "Vagabond",
    image: assets.shoes,
    category: "Shoes",
    status: "Available",
    wears: 7,
  },
  {
    name: "Oxblood crescent bag",
    brand: "Cuyana",
    image: assets.bag,
    category: "Bags",
    status: "Available",
    wears: 4,
    favorite: true,
  },
  {
    name: "Gold everyday hoops",
    brand: "Mejuri",
    image: assets.accessory,
    category: "Accessories",
    status: "Available",
    wears: 14,
  },
  {
    name: "Soft camel coat",
    brand: "Max Mara",
    image: assets.blazer,
    category: "Outerwear",
    status: "Seasonal",
    wears: 2,
  },
  {
    name: "Cream weekend shirt",
    brand: "COS",
    image: assets.top,
    category: "Tops",
    status: "Laundry",
    wears: 9,
  },
  {
    name: "Navy tailored suit",
    brand: "Toteme",
    image: assets.blazer,
    category: "Dresses & Suits",
    status: "Available",
    wears: 1,
  },
  {
    name: "Minimal leather sneaker",
    brand: "Veja",
    image: assets.shoes,
    category: "Shoes",
    status: "Available",
    wears: 12,
  },
  {
    name: "Structured work tote",
    brand: "Cuyana",
    image: assets.bag,
    category: "Bags",
    status: "Repair",
    wears: 6,
  },
];
let closetState = {
    size: 12,
    query: "",
    category: "All",
    collection: "All pieces",
    sort: "Recently added",
  },
  selectedClosetItemId = "closet-1";
let closetLifecycle = (() => {
  try {
    return JSON.parse(localStorage.getItem("styleiqClosetLifecycleV1")) || {};
  } catch {
    return {};
  }
})();
let closetLocations = (() => {
  try {
    return JSON.parse(localStorage.getItem("styleiqClosetLocationsV1")) || {};
  } catch {
    return {};
  }
})();
const escapeMarkup = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        character
      ],
  );
function closetItems() {
  return Array.from({ length: closetState.size }, (_, index) => {
    const id = `closet-${index + 1}`;
    return {
      ...closetSeed[index % closetSeed.length],
      id,
      name:
        index < closetSeed.length
          ? closetSeed[index].name
          : `${closetSeed[index % closetSeed.length].name} ${Math.floor(index / closetSeed.length) + 1}`,
      lifecycle: closetLifecycle[id] || "Keep",
      location: closetLocations[id] || "",
    };
  });
}
function openClosetItem(id) {
  selectedClosetItemId = id;
  go("C-02");
}
function selectedClosetItem() {
  return (
    closetItems().find((item) => item.id === selectedClosetItemId) ||
    closetItems()[0] || {
      id: "closet-1",
      ...closetSeed[0],
      lifecycle: closetLifecycle["closet-1"] || "Keep",
    }
  );
}
function setItemLifecycle(value) {
  closetLifecycle[selectedClosetItemId] = value;
  localStorage.setItem(
    "styleiqClosetLifecycleV1",
    JSON.stringify(closetLifecycle),
  );
  render();
  toast(`Item marked ${value}`);
}
function saveItemLocation(event) {
  event.preventDefault();
  const input = event.currentTarget.querySelector("#item-storage-location"),
    value = input?.value.trim() || "";
  if (value) closetLocations[selectedClosetItemId] = value;
  else delete closetLocations[selectedClosetItemId];
  localStorage.setItem(
    "styleiqClosetLocationsV1",
    JSON.stringify(closetLocations),
  );
  render();
  toast(value ? "Storage location saved" : "Storage location cleared");
}
function storageLocationForm(item) {
  return `<form class="storage-location-card" onsubmit="saveItemLocation(event)"><div class="storage-location-head">${icon("map-pin")}<span><b>Storage location</b><small>Keep a private note so you always know where this piece lives.</small></span></div><div class="storage-location-controls"><label class="sr-only" for="item-storage-location">Where is this item kept?</label><input id="item-storage-location" class="input" list="storage-location-suggestions" value="${escapeMarkup(item.location)}" placeholder="e.g. Bedroom wardrobe · left rail" autocomplete="off"><datalist id="storage-location-suggestions"><option value="Bedroom wardrobe · left rail"><option value="Bedroom wardrobe · top shelf"><option value="Hall closet"><option value="Shoe cabinet"><option value="Accessory drawer"><option value="Storage box"></datalist><button class="btn" type="submit">Save</button></div></form>`;
}
function decorateClosetLifecycle() {
  if (currentId === "C-01") {
    const items = closetItems(),
      search = app.querySelector('input[aria-label="Search Closet"]');
    if (search) search.placeholder = "Search pieces, brands, or locations";
    app.querySelectorAll(".closet-item").forEach((button) => {
      const name = button.querySelector(".closet-item-copy b")?.textContent,
        item = items.find((candidate) => candidate.name === name);
      if (!item) return;
      button.onclick = () => openClosetItem(item.id);
      const badge = button.querySelector(".closet-item-media em");
      if (badge)
        badge.textContent =
          item.lifecycle === "Keep" ? item.status : item.lifecycle;
      const copy = button.querySelector(".closet-item-copy");
      if (copy && !copy.querySelector(".closet-item-location"))
        copy.insertAdjacentHTML(
          "beforeend",
          `<span class="closet-item-location ${item.location ? "" : "is-empty"}">${icon("map-pin")}<span>${item.location ? escapeMarkup(item.location) : "Location not set"}</span></span>`,
        );
    });
    return;
  }
  if (["C-02", "C-03", "C-04", "C-05", "C-06", "C-07"].includes(currentId)) {
    const metadata = app.querySelector(".inline-edit-grid");
    if (metadata && !app.querySelector(".storage-location-card"))
      metadata.insertAdjacentHTML(
        "afterend",
        storageLocationForm(selectedClosetItem()),
      );
  }
}
function lifecycleItemDetail() {
  const item = selectedClosetItem(),
    states = ["Keep", "Won’t wear", "Sell", "Donate", "Rent", "Archive"];
  return shell(
    "Item detail",
    `<img class="hero-img" src="${item.image}" alt="${item.name}"><div class="between" style="margin-top:14px"><span><p class="eyebrow">${item.lifecycle} · ${item.status}</p><h2 class="title">${item.name}</h2></span><button class="icon-btn" aria-label="Edit item photo" onclick="toast('Photo editor opened inline')">${icon("edit")}</button></div>${approvalCard("Ready to style", "Category and color are high confidence. Optional details stay collapsed until you need them.")}<div class="inline-edit-grid" style="margin-top:14px">${inlineEditRow("Name", item.name)}${inlineEditRow("Brand", item.brand)}${inlineEditRow("Category", item.category)}</div><details class="card progressive-card" open style="margin-top:12px"><summary><b>Item status</b><span class="small">${item.lifecycle} · one status at a time</span></summary><p class="body" style="margin-top:10px">Choose what you intend to do with this piece. Wear history and details stay intact.</p><div class="chips" role="group" aria-label="Item lifecycle status">${states.map((value) => `<button class="chip ${item.lifecycle === value ? "active" : ""}" aria-pressed="${item.lifecycle === value}" onclick="setItemLifecycle(&quot;${value}&quot;)">${value}</button>`).join("")}</div></details><details class="card progressive-card" style="margin-top:10px"><summary><b>Styling details</b><span class="small">${item.category} · All seasons</span></summary><div class="chips" style="margin-top:12px"><button class="chip active">Warm neutral</button><button class="chip">All seasons</button><button class="chip">Business casual</button></div></details><details class="card progressive-card" style="margin-top:10px"><summary><b>Wear & value</b><span class="small">Worn ${item.wears} times</span></summary><p class="body" style="margin-top:10px">Wear history is retained when this status changes.</p></details><button class="btn primary wide" style="margin-top:14px" onclick="go('C-07')">Style this item</button>`,
    { active: "closet" },
  );
}
function decorateConsolidatedItemDetail() {
  if (!["C-02", "C-03", "C-04", "C-05", "C-06", "C-07"].includes(currentId))
    return;
  const content = app.querySelector(".content"),
    heading = content?.querySelector(".between"),
    item = selectedClosetItem();
  if (!content || !heading) return;
  const oldStyle = [...content.querySelectorAll("button")].find(
    (button) => button.textContent.trim() === "Style this item",
  );
  oldStyle?.remove();
  heading.insertAdjacentHTML(
    "afterend",
    `<button class="btn primary wide item-primary" onclick="go('D-04')">Style this item</button>`,
  );
  const photo = content.querySelector('button[aria-label="Edit item photo"]');
  if (photo) photo.onclick = () => openLightweightPanel("image");
  const wear = [...content.querySelectorAll("details")].find((section) =>
    section.querySelector("summary")?.textContent.includes("Wear & value"),
  );
  if (wear) {
    wear.querySelector(".body")?.remove();
    wear.insertAdjacentHTML(
      "beforeend",
      `<div class="item-metrics"><span class="item-metric"><b>${item.wears}×</b><small>Worn</small></span><span class="item-metric"><b>$${Math.max(48, Math.round(1890 / Math.max(item.wears, 1)))}</b><small>Cost / wear</small></span><span class="item-metric"><b>4</b><small>Compatible Looks</small></span></div>`,
    );
  }
  content.insertAdjacentHTML(
    "beforeend",
    `<details class="card progressive-card" style="margin-top:10px"><summary><b>Item actions</b><span class="small">Photo and lifecycle</span></summary><div class="row" style="margin-top:12px"><button class="btn grow" onclick="openLightweightPanel('image')">Edit photo</button><button class="btn grow" onclick="setItemLifecycle('Archive')">Archive item</button></div></details>`,
  );
}
function updateClosetQuery(value) {
  closetState.query = value;
  render();
  requestAnimationFrame(() => {
    const input = app.querySelector('input[aria-label="Search Closet"]');
    if (input) {
      input.focus();
      input.setSelectionRange(value.length, value.length);
    }
  });
}
function setClosetCategory(value) {
  closetState.category = value;
  render();
}
function setClosetCollection(value) {
  closetState.collection = value;
  render();
}
window.resetClosetFilters = function () {
  closetState.query = "";
  closetState.category = "All";
  closetState.collection = "All pieces";
  if (currentId === "C-01") render();
};
function cycleClosetSort() {
  const sorts = ["Recently added", "Most worn", "A–Z"];
  closetState.sort =
    sorts[(sorts.indexOf(closetState.sort) + 1) % sorts.length];
  render();
}
window.setClosetDemoSize = function (size) {
  closetState.size = Math.max(0, Math.floor(Number(size) || 0));
  closetState.query = "";
  closetState.category = "All";
  closetState.collection = "All pieces";
  if (currentId === "C-01") render();
};
function scalableCloset() {
  if (closetTab === "wishlist")
    return shell(
      "Closet",
      `<div class="closet-results-head" style="margin-top:2px"><span><p class="eyebrow">Saved for later</p><h3>Wishlist</h3></span><button class="text-action" onclick="setClosetTab('closet')">Back to Closet</button></div><div class="closet-grid"><button class="closet-item" onclick="go('K-04')"><span class="closet-item-media"><img src="${assets.bag}" alt="Leather shoulder bag"><em>Suggested</em></span><span class="closet-item-copy"><b>Leather shoulder bag</b><small>Fills one wardrobe gap</small></span></button><button class="closet-item" onclick="go('M-03')"><span class="closet-item-media"><img src="${assets.top2}" alt="Warm lightweight knit"><em>Useful in 6 Looks</em></span><span class="closet-item-copy"><b>Warm lightweight knit</b><small>Matches your saved palette</small></span></button></div>`,
      { active: "closet" },
    );
  const all = closetItems(),
    q = closetState.query.trim().toLowerCase();
  const collectionTests = {
    "All pieces": () => true,
    Favorites: (item) => item.favorite === true,
    Underused: (item) => item.wears <= 2,
    "Ready to wear": (item) =>
      item.status === "Available" && item.lifecycle === "Keep",
    "Most worn": (item) => item.wears >= 8,
    "Needs attention": (item) => item.status !== "Available",
    "Needs location": (item) => !item.location,
    "Won’t wear": (item) => item.lifecycle === "Won’t wear",
    Sell: (item) => item.lifecycle === "Sell",
    Donate: (item) => item.lifecycle === "Donate",
    Rent: (item) => item.lifecycle === "Rent",
    "Moving on": (item) =>
      ["Won’t wear", "Sell", "Donate"].includes(item.lifecycle),
    Archived: (item) => item.lifecycle === "Archive",
  };
  let visible = all.filter(
    (item) =>
      (closetState.category === "All" ||
        item.category === closetState.category) &&
      (collectionTests[closetState.collection]?.(item) ?? true) &&
      (!q ||
        `${item.name} ${item.brand} ${item.category} ${item.location}`
          .toLowerCase()
          .includes(q)),
  );
  if (closetState.sort === "Most worn")
    visible.sort((a, b) => b.wears - a.wears);
  else if (closetState.sort === "A–Z")
    visible.sort((a, b) => a.name.localeCompare(b.name));
  if (!all.length)
    return shell(
      "Closet",
      `<div class="mirror-page-head"><span><p class="eyebrow">Wardrobe · 0 pieces</p><h2 class="mirror-title">Closet</h2></span></div><section class="closet-empty"><div><div class="closet-empty-art"><img src="${assets.blazer}" alt="A tailored piece ready to photograph"></div><h2>Start with one piece.</h2><p class="body">A single photo is enough. StyleIQ will organize it and start building outfits around what you own.</p><button class="btn primary wide" onclick="go('B-01')">Add your first item</button><button class="btn wide" style="margin-top:8px" onclick="go('B-09')">Import purchases</button><button class="text-action" style="margin-top:8px" onclick="setClosetTab('wishlist')">Open Wishlist</button></div></section>`,
      { active: "closet" },
    );
  const collections = [
    "All pieces",
    "Favorites",
    "Underused",
    "Ready to wear",
    "Most worn",
    "Needs attention",
    "Needs location",
    "Won’t wear",
    "Sell",
    "Donate",
    "Rent",
    "Archived",
  ].map((name) => [name, all.filter(collectionTests[name]).length]);
  const categories = [
    "All",
    "Tops",
    "Bottoms",
    "Dresses & Suits",
    "Outerwear",
    "Shoes",
    "Bags",
    "Accessories",
  ];
  return shell(
    "Closet",
    `<div class="mirror-page-head"><span><p class="eyebrow">Wardrobe · ${all.length} ${all.length === 1 ? "piece" : "pieces"}</p><h2 class="mirror-title">Closet</h2></span><button class="mirror-circle-action" onclick="go('B-01')" aria-label="Add an item">${icon("plus")}</button></div><div class="closet-toolbar"><label class="closet-search">${icon("search")}<span class="sr-only">Search Closet</span><input aria-label="Search Closet" type="search" value="${closetState.query.replace(/&/g, "&amp;").replace(/"/g, "&quot;")}" placeholder="Search pieces or brands" oninput="updateClosetQuery(this.value)"></label><button class="closet-sort" aria-label="Sort: ${closetState.sort}" onclick="cycleClosetSort()">${icon("arrow-up-down")}</button></div><div class="closet-collections" role="group" aria-label="Smart collections">${collections.map(([name, count]) => `<button class="closet-collection" aria-pressed="${closetState.collection === name}" onclick="setClosetCollection('${name}')"><b>${name}</b><small>${count} ${count === 1 ? "piece" : "pieces"}</small></button>`).join("")}</div><div class="closet-category-rail" role="group" aria-label="Closet categories">${categories.map((name) => `<button class="chip ${closetState.category === name ? "active" : ""}" aria-pressed="${closetState.category === name}" onclick="setClosetCategory('${name}')">${name}</button>`).join("")}</div><div class="closet-results-head"><span><p class="eyebrow">${closetState.collection}</p><h3>${visible.length} ${visible.length === 1 ? "piece" : "pieces"}</h3></span><small>${closetState.sort}</small></div><div class="closet-grid">${visible.length ? visible.map((item) => `<button class="closet-item" onclick="go('C-02')"><span class="closet-item-media"><img src="${item.image}" alt="${item.name}"><em>${item.status}</em></span><span class="closet-item-copy"><b>${item.name}</b><small>${item.brand} · worn ${item.wears}×</small></span></button>`).join("") : `<div class="closet-no-results"><b>No matching pieces</b><small>Try another category, collection, or search.</small><button class="btn small-btn" style="margin-top:12px" onclick="resetClosetFilters()">Clear filters</button></div>`}</div>`,
    { active: "closet" },
  );
}
const app = document.getElementById("app"),
  notes = document.getElementById("notes");
function persist() {
  localStorage.setItem("styleiqAltaCanvasV2", JSON.stringify(canvasState));
}
function persistTrip() {
  localStorage.setItem("styleiqTripV1", JSON.stringify(tripState));
}
function toast(message) {
  const el = document.getElementById("toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.t);
  toast.t = setTimeout(() => el.classList.remove("show"), 1800);
}
function setClosetTab(tab) {
  closetTab = tab;
  if (currentId === "C-01") render();
  else go("C-01");
}
const backRoutes = {
  "B-01": "D-02",
  "B-02": "B-01",
  "B-03": "A-12",
  "B-04": "B-01",
  "B-05": "B-04",
  "B-06": "B-02",
  "B-07": "B-06",
  "B-08": "B-07",
  "B-09": "B-01",
  "B-10": "B-09",
  "B-11": "C-01",
  "C-01": "D-02",
  "C-02": "C-01",
  "C-03": "C-02",
  "C-04": "C-02",
  "C-05": "C-02",
  "C-06": "C-02",
  "C-07": "C-02",
  "D-01": "A-10",
  "D-02": "D-02",
  "D-03": "D-02",
  "D-04": "D-02",
  "D-05": "D-04",
  "D-06": "D-04",
  "E-01": "D-04",
  "E-02": "D-04",
  "E-03": "D-04",
  "E-04": "D-04",
  "E-05": "D-04",
  "E-06": "D-04",
  "E-07": "D-04",
  "F-01": "D-04",
  "F-02": "F-01",
  "F-03": "F-01",
  "F-04": "F-01",
  "F-05": "F-01",
  "F-06": "F-01",
  "F-07": "F-01",
  "F-08": "F-01",
  "F-09": "F-01",
  "F-10": "F-01",
  "F-11": "F-01",
  "F-12": "F-01",
  "F-13": "F-01",
  "F-14": "F-01",
  "F-15": "F-01",
  "F-16": "F-01",
  "F-17": "F-01",
  "F-18": "F-01",
  "F-19": "F-01",
  "F-20": "F-01",
  "F-21": "F-01",
  "F-22": "F-01",
  "F-23": "F-01",
  "F-24": "F-01",
  "G-01": "L-01",
  "G-02": "G-01",
  "G-03": "G-02",
  "G-04": "G-02",
  "G-05": "G-02",
  "G-06": "G-02",
  "G-07": "G-02",
  "G-08": "G-02",
  "H-01": "F-01",
  "H-02": "H-01",
  "H-03": "H-02",
  "H-04": "H-03",
  "H-05": "H-04",
  "H-06": "H-05",
  "H-07": "H-06",
  "H-08": "H-07",
  "H-09": "H-08",
  "H-10": "H-09",
  "I-01": "L-01",
  "I-02": "I-01",
  "I-03": "I-01",
  "I-04": "I-03",
  "I-05": "I-04",
  "I-06": "I-01",
  "J-01": "L-01",
  "J-02": "J-01",
  "J-03": "J-02",
  "J-04": "J-03",
  "J-05": "J-04",
  "J-06": "J-05",
  "J-07": "J-06",
  "J-08": "J-07",
  "J-09": "J-08",
  "J-10": "J-08",
  "J-11": "J-10",
  "J-12": "J-11",
  "J-13": "J-10",
  "J-14": "J-13",
  "K-01": "D-02",
  "K-02": "K-01",
  "K-03": "K-01",
  "K-04": "K-01",
  "K-05": "K-04",
  "K-06": "K-04",
  "K-07": "K-04",
  "K-08": "K-04",
  "L-01": "D-02",
  "L-02": "L-01",
  "L-03": "L-01",
  "L-04": "L-11",
  "L-05": "L-11",
  "L-06": "L-11",
  "L-07": "L-11",
  "L-08": "L-11",
  "L-09": "L-11",
  "L-10": "L-11",
  "L-11": "L-01",
  "L-12": "L-11",
  "L-13": "L-11",
  "L-14": "L-12",
  "L-15": "L-11",
  "M-01": "D-02",
  "M-02": "M-01",
  "M-03": "M-01",
};
function fallbackBack(id) {
  if (id === "S-00") return "S-00";
  if (id === "S-01") return "S-00";
  if (id === "S-02") return "S-01";
  if (id === "A-01") return "S-02";
  if (id.startsWith("A-"))
    return `A-${String(Math.max(1, Number(id.slice(2)) - 1)).padStart(2, "0")}`;
  return backRoutes[id] || "D-02";
}
const museContexts = {
  D: "Today’s Look and weather",
  C: "this Closet item",
  F: "the current Look draft",
  G: "this saved Look",
  H: "the current Style Twin result",
  I: "this Planner day",
  J: "the Alexandria Trip",
  K: "this Discover Look",
  L: "your style profile",
  M: "an open styling question",
};
function museContextFor(id = currentId) {
  const section = id.charAt(0),
    label = museContexts[section] || "the current screen";
  const prompts = {
    D: "How should I adapt today’s Look?",
    C: "What works with this item?",
    F: "Improve this draft without replacing everything.",
    G: "Give me another way to wear this saved Look.",
    H: "Refine this Style Twin result.",
    I: "Style this day around my real plans.",
    J: "Check this Trip for gaps or duplicates.",
    K: "Recreate this inspiration from my Closet.",
    L: "What has my style profile learned?",
    M: "Ask about your wardrobe, plans, or personal style.",
  };
  return { label, prompt: prompts[section] || prompts.M, origin: id };
}
function openMuse(context = museContextFor()) {
  museContext =
    typeof context === "string"
      ? {
          label: context,
          prompt: `Help me with ${context}.`,
          origin: currentId,
        }
      : context;
  go("M-01");
}
function go(id, { record = true } = {}) {
  if (!screens.some((s) => s.id === id)) return;
  if (id === currentId) {
    presentStudioRoute(true);
    return;
  }
  if (
    pendingTryOn &&
    currentId.startsWith("H-") &&
    !id.startsWith("H-") &&
    id !== "E-06"
  )
    clearPendingTryOn();
  if (record) {
    navHistory.push(currentId);
    if (navHistory.length > 80) navHistory.shift();
  }
  currentId = id;
  location.hash = id;
  overlay = null;
  lightweightPanel = null;
  accountMenuOpen = false;
  notificationsOpen = false;
  render();
  document
    .querySelector(`[data-id="${id}"]`)
    ?.scrollIntoView({ block: "nearest" });
}
function backScreen() {
  if (currentId === "E-06") {
    leaveTryOn();
    return;
  }
  if (currentId === "H-01" && pendingTryOn) {
    const target = pendingTryOn.returnTo;
    clearPendingTryOn();
    go(target, { record: false });
    return;
  }
  if (lightweightPanel) {
    closeLightweightPanel();
    return;
  }
  if (overlay) {
    closeOverlay();
    return;
  }
  if (accountMenuOpen) {
    closeAccountMenu();
    return;
  }
  if (notificationsOpen) {
    closeNotifications();
    return;
  }
  let target = "";
  while (navHistory.length && !target) {
    const candidate = navHistory.pop();
    if (candidate !== currentId && screens.some((s) => s.id === candidate))
      target = candidate;
  }
  target = target || fallbackBack(currentId);
  if (target !== currentId) go(target, { record: false });
}
function openNextInventoryScreen() {
  const i = screens.findIndex((s) => s.id === currentId);
  go(screens[Math.min(i + 1, screens.length - 1)].id);
}
function openPreviousInventoryScreen() {
  const i = screens.findIndex((s) => s.id === currentId);
  go(screens[Math.max(i - 1, 0)].id);
}
function brandLockup(mode = "") {
  return `<span class="brand-lockup ${mode}"><span class="brand-lockup-name">StyleIQ</span></span>`;
}
function head(title) {
  const root = ["D-02", "C-01", "I-01", "K-01", "L-01"].includes(currentId);
  if (!root)
    return `<header class="screen-head"><button class="icon-btn" aria-label="Back" onclick="backScreen()">${icon("back")}</button><div class="screen-head-title"><h1>${title}</h1></div><button class="head-muse" aria-label="Ask Muse about this screen" onclick="openMuse()">${icon("spark")}</button></header>`;
  if (currentId === "D-02")
    return `<header class="screen-head root-head root-head-today"><button class="root-wordmark" aria-label="Go to Today" onclick="go('D-02')">StyleIQ</button><button class="root-profile-control" aria-label="Open profile" onclick="go('L-01')"><img src="${assets.profile}" alt="Amelia Hart"><span class="notification-dot" aria-hidden="true"></span></button></header>`;
  const configs = {
    "C-01": {
      label: "Wardrobe",
      title: "Closet",
      actions: `<button class="root-action" onclick="openMuse()" aria-label="Ask Muse about Closet">${icon("spark")}</button><button class="root-action" onclick="go('K-02')" aria-label="Search Closet">${icon("search")}</button><button class="root-action" onclick="go('B-01')" aria-label="Add an item">${icon("plus")}</button>`,
    },
    "I-01": {
      label: "October 12–18",
      title: "Planner",
      actions: `<button class="root-action" onclick="openMuse()" aria-label="Ask Muse about Planner">${icon("spark")}</button><button class="root-action" onclick="go('I-03')" aria-label="Plan a new Look">${icon("plus")}</button>`,
    },
    "K-01": {
      label: "Ideas selected for you",
      title: "Discover",
      actions: `<button class="root-action" onclick="openMuse()" aria-label="Ask Muse about Discover">${icon("spark")}</button><button class="root-action" onclick="setClosetTab('wishlist')" aria-label="Open Wishlist">${icon("bookmark")}</button>`,
    },
    "L-01": {
      label: "Personal profile",
      title: "My Atelier",
      actions: `<button class="root-action" onclick="openMuse()" aria-label="Ask Muse about profile">${icon("spark")}</button><button class="root-action" onclick="go('L-11')" aria-label="Open settings">${icon("settings-2")}</button>`,
    },
  };
  const c = configs[currentId];
  return `<header class="screen-head root-head"><div class="root-title-block"><p>${c.label}</p><h1>${c.title}</h1></div><div class="root-actions">${c.actions}</div></header>`;
}
function ensureAppNavigation() {
  if (["S", "A"].includes(currentId.split("-")[0])) {
    app.querySelectorAll(".bottom-nav").forEach((nav) => nav.remove());
    return;
  }
  const screen = app.querySelector(".screen");
  if (!screen) return;
  screen.classList.add("has-app-navigation");
  if (!screen.querySelector(".bottom-nav"))
    screen.insertAdjacentHTML("beforeend", nav());
  if (accountMenuOpen && !screen.querySelector(".account-menu-layer"))
    screen.insertAdjacentHTML("beforeend", accountMenuV2());
  if (overlay === "logout" && !screen.querySelector("#logout-title"))
    screen.insertAdjacentHTML("beforeend", logoutDialog());
}
function installLiquidNav(previous) {
  const bar = app.querySelector(".bottom-nav");
  if (!bar) return;
  const selected = bar.querySelector(".nav-btn.active");
  if (!selected) return;
  bar
    .querySelectorAll(".nav-btn")
    .forEach((button) =>
      button.setAttribute(
        "aria-current",
        button === selected ? "page" : "false",
      ),
    );
  const lens = document.createElement("span");
  lens.className = "nav-liquid-indicator";
  lens.setAttribute("aria-hidden", "true");
  bar.append(lens);
  lens.style.left = selected.offsetLeft + "px";
  lens.style.top = selected.offsetTop + "px";
  lens.style.width = selected.offsetWidth + "px";
  lens.style.height = selected.offsetHeight + "px";
  const destination = lens.getBoundingClientRect();
  if (!previous || matchMedia("(prefers-reduced-motion: reduce)").matches)
    return;
  const dx = previous.left - destination.left,
    dy = previous.top - destination.top;
  if (Math.abs(dx) < 1 && Math.abs(dy) < 1) return;
  const stretch = Math.min(1.32, 1 + Math.abs(dx) / 600);
  lens.animate(
    [
      {
        transform: `translate(${dx}px,${dy}px) scale(${previous.width / destination.width},1)`,
        offset: 0,
      },
      {
        transform: `translate(${dx * 0.58}px,${dy * 0.58}px) scale(${stretch},.88)`,
        offset: 0.3,
      },
      {
        transform: `translate(${-Math.sign(dx) * 3}px,0) scale(.97,1.03)`,
        offset: 0.78,
      },
      { transform: "translate(0,0) scale(1)", offset: 1 },
    ],
    { duration: 540, easing: "cubic-bezier(.22,.7,.25,1)" },
  );
}
function nav(active = "home") {
  const resolved = currentId.startsWith("C-")
    ? "closet"
    : currentId.startsWith("I-")
      ? "planner"
      : currentId.startsWith("K-")
        ? "discover"
        : currentId.startsWith("D-")
          ? "home"
          : "profile";
  return `<nav class="bottom-nav" aria-label="Primary navigation"><button class="nav-btn ${resolved === "home" ? "active" : ""}" onclick="go('D-02')">${icon("home")}Today</button><button class="nav-btn ${resolved === "closet" ? "active" : ""}" onclick="go('C-01')">${icon("shirt")}Closet</button><button class="nav-btn ${resolved === "planner" ? "active" : ""}" onclick="go('I-01')">${icon("calendar")}Planner</button><button class="nav-btn ${resolved === "discover" ? "active" : ""}" onclick="go('K-01')">${icon("compass")}Discover</button><button class="nav-btn more ${resolved === "profile" ? "active" : ""}" aria-label="Open More menu" onclick="toggleAccountMenu()">${icon("more")}More</button></nav>`;
}
function notificationsPanel() {
  if (!notificationsOpen) return "";
  const items = [
    ["spark", "Your new outfit edit is ready.", "Just now", "D-04"],
    ["heart", "Noor saved your tailored Look.", "18 min", "G-02"],
    ["bag", "Alexandria packing list has two updates.", "2 hr", "J-08"],
  ];
  return `<div class="notifications-layer"><button class="account-menu-scrim" aria-label="Close notifications" onclick="closeNotifications()"></button><section class="notifications-sheet" aria-label="Notifications"><div class="grab"></div><div class="between"><div><p class="eyebrow">Updates</p><h3 class="title">Notifications</h3></div><button class="icon-btn" aria-label="Close notifications" onclick="closeNotifications()">×</button></div>${items.map(([ico, text, time, id]) => `<button class="notification-row" onclick="go('${id}')"><span class="icon-wrap">${icon(ico)}</span><span><b>${text}</b></span><time>${time}</time></button>`).join("")}</section></div>`;
}
function shell(
  title,
  body,
  {
    active = "home",
    action = "",
    dark = false,
    noNav = false,
    surfaceClass = "",
  } = {},
) {
  return `<section class="screen ${dark ? "studio-screen" : ""} ${surfaceClass}">${head(title)}<div class="content ${noNav ? "no-nav" : ""}">${body}</div>${noNav ? "" : nav(active)}${lensEntry()}${accountMenuV2()}${notificationsPanel()}${logoutDialog()}${lightweightPanelMarkup()}${lensLayerMarkup()}</section>`;
}
function logoutDialog() {
  if (overlay !== "logout") return "";
  return `<div class="overlay" role="presentation"><div class="modal" role="alertdialog" aria-modal="true" aria-labelledby="logout-title" aria-describedby="logout-description"><div class="confirm-copy"><span class="settings-hero-icon">${icon("logout")}</span><h2 id="logout-title" class="title">Log out of StyleIQ?</h2><p id="logout-description" class="body">Your Closet, saved Looks, Trips, and Style Twin stay safely attached to this account.</p></div><div class="stack"><button class="btn danger wide" onclick="confirmLogout()">Log out</button><button class="btn wide" onclick="closeOverlay()">Stay signed in</button></div></div></div>`;
}
function inlineEditRow(label, value, extra = "") {
  const id = `inline-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return `<div class="inline-edit-row"><label for="${id}">${label}</label><input id="${id}" class="input" value="${value}" ${extra}></div>`;
}
function approvalCard(title, description) {
  return `<div class="approval-card"><span class="icon-wrap">${icon("check")}</span><span><b>${title}</b><small>${description}</small></span></div>`;
}
function openLightweightPanel(kind) {
  overlay = null;
  accountMenuOpen = false;
  notificationsOpen = false;
  lightweightPanel = kind;
  if (kind === "feedback") feedbackReason = "";
  render();
}
function closeLightweightPanel() {
  lightweightPanel = null;
  if (currentId === "G-08") {
    go("G-02");
    return;
  }
  if (["E-01", "E-03", "E-04"].includes(currentId)) {
    go("D-04");
    return;
  }
  render();
}
function selectChip(button) {
  const group = button.closest('[role="group"],.chips,.mirror-filters');
  group?.querySelectorAll("button").forEach((option) => {
    const selected = option === button;
    option.classList.toggle("active", selected);
    option.setAttribute("aria-pressed", String(selected));
  });
}
function chooseFeedbackReason(reason) {
  feedbackReason = reason;
  render();
}
function approveLightweightPanel(kind) {
  if (kind === "learn" && photoLearningStage === "picker") {
    photoLearningStage = "review";
    render();
    return;
  }
  if (kind === "learn") {
    const signals = [
      ...app.querySelectorAll('[data-learning-signal][aria-pressed="true"]'),
    ].map((button) => button.dataset.learningSignal);
    photoLearningState = { active: true, signals };
    localStorage.setItem(
      "styleiqPhotoLearningV1",
      JSON.stringify(photoLearningState),
    );
  }
  if (kind === "feedback") {
    const detail = app.querySelector("#feedback-other")?.value.trim() || "";
    localStorage.setItem(
      "styleiqMuseFeedbackV1",
      JSON.stringify({
        reason: feedbackReason || "Not My Style",
        detail,
        context: museContextFor("D-04"),
        at: new Date().toISOString(),
      }),
    );
  }
  if (kind === "plan") {
    const note =
      app.querySelector("#planner-intent")?.value.trim() ||
      "Client presentation at 10, drinks after work";
    plannerIntent = {
      note,
      title: "Client presentation + drinks",
      date: "Wednesday 14",
      time: "10:00 AM → evening",
      occasion: "Work to social",
      dressCode: "Polished, comfortable",
      look: "Soft tailoring",
    };
    plannerEventCreated = true;
    localStorage.setItem(
      "styleiqPlannerIntentV1",
      JSON.stringify(plannerIntent),
    );
  }
  lightweightPanel = null;
  if (["E-01", "E-03", "E-04", "G-08"].includes(currentId))
    go(currentId === "G-08" ? "G-02" : "D-04");
  else render();
  const messages = {
    save: "Look saved",
    image: "Item photo updated",
    learn: "Photo insights saved",
    inspiration: "Inspiration references saved",
    feedback: "Feedback saved · you stayed on this Look",
    share: "Private link ready",
    visibility: "Visibility kept private",
    lookManage: "Look settings updated",
    plan: "Muse is planning from this day",
    tripLook: "Muse is styling from the packing list",
  };
  toast(messages[kind] || "Done");
}
function lightweightPanelMarkup() {
  if (!lightweightPanel) return "";
  const panels = {
    save: {
      eyebrow: "Save without leaving",
      title: "Save this Look",
      body: `<div class="lightweight-preview"><img src="${assets.look3}" alt="Look being saved"><span><b>Today’s office Look</b><small>Private by default · You can edit the title later.</small></span></div>${approvalCard("Ready to save", "Muse is confident about the outfit pieces and context. One tap is enough.")}`,
      action: "Save Look",
    },
    image: {
      eyebrow: "Item photo",
      title: "Edit without leaving",
      body: `<div class="lightweight-preview"><img src="${selectedClosetItem().image}" alt="${selectedClosetItem().name}"><span><b>${selectedClosetItem().name}</b><small>The original stays available until you save.</small></span></div><div class="chips" role="group" aria-label="Photo edit" style="margin-top:14px"><button class="chip active" aria-pressed="true" onclick="selectChip(this)">Clean background</button><button class="chip" aria-pressed="false" onclick="selectChip(this)">Crop</button><button class="chip" aria-pressed="false" onclick="selectChip(this)">Original</button></div>`,
      action: "Save photo",
    },
    learn: {
      eyebrow: "Historical outfits",
      title:
        photoLearningStage === "picker"
          ? "Learn from my photos"
          : "Review inferred style",
      body:
        photoLearningStage === "picker"
          ? `<p class="body">Prototype preview: these personal outfit photos are analyzed together for repeated pieces, combinations, silhouettes, and colors.</p><div class="learning-photo-row"><img src="${assets.look}" alt="Historical work outfit"><img src="${assets.look2}" alt="Historical dinner outfit"><img src="${assets.look4}" alt="Historical weekend outfit"></div><p class="small" style="margin-top:10px">3 photos selected · private Style Intelligence input</p>`
          : `${approvalCard("4 patterns inferred", "Review or remove any signal before Muse uses it. These are style insights—not confirmed Closet items.")}<div class="chips" role="group" aria-label="Inferred photo signals" style="margin-top:14px">${["Warm neutrals", "Relaxed tailoring", "Structured layer + soft top", "Oxblood accents"].map((signal) => `<button class="chip active" data-learning-signal="${signal}" aria-pressed="true" onclick="this.classList.toggle('active');this.setAttribute('aria-pressed',String(this.getAttribute('aria-pressed')!=='true'))">${signal}</button>`).join("")}</div><details class="card progressive-card" style="margin-top:12px"><summary><b>What repeated</b><span class="small">Editable inference</span></summary><p class="body" style="margin-top:10px">A structured outer layer over a soft neutral top appeared in 2 of 3 photos. Oxblood accessories repeated twice.</p></details>`,
      action:
        photoLearningStage === "picker"
          ? "Learn from 3 photos"
          : "Use these insights",
    },
    inspiration: {
      eyebrow: "My Atelier",
      title: "Style Inspiration",
      body: inspirationPanelBody(),
      action: "Save references",
    },
    feedback: {
      eyebrow: "Help Muse learn",
      title: "What missed?",
      body: `<p class="body">Choose one concise reason. You’ll stay on this Look.</p><div class="feedback-reasons" role="group" aria-label="Feedback reasons" style="margin-top:14px">${["Too Formal", "Too Casual", "Wrong Color", "Don’t Like This Item", "Not My Style", "Other"].map((reason) => `<button class="chip ${feedbackReason === reason ? "active" : ""}" aria-pressed="${feedbackReason === reason}" onclick="chooseFeedbackReason(&quot;${reason}&quot;)">${reason}</button>`).join("")}</div>${feedbackReason === "Other" ? `<div class="field" style="margin-top:14px"><label for="feedback-other">Tell Muse more <span class="helper">Optional</span></label><input id="feedback-other" class="input" placeholder="The jacket feels too structured"></div>` : ""}`,
      action: "Save feedback",
    },
    share: {
      eyebrow: "Share intentionally",
      title: "Create a private link",
      body: `<p class="body">Only this Look is included. Your Closet, notes, Style Twin, and other saved Looks stay private.</p>${approvalCard("Private by default", "Anyone with the link can view this Look; they cannot browse your account.")}`,
      action: "Create private link",
    },
    visibility: {
      eyebrow: "Quick setting",
      title: "Who can see this Look?",
      body: `<div class="choice-list"><button class="choice selected" aria-pressed="true"><span><b>Private</b><small class="body" style="display:block">Only you</small></span>${icon("check")}</button><button class="choice" aria-pressed="false"><span><b>Followers</b><small class="body" style="display:block">People you approve</small></span></button><button class="choice" aria-pressed="false"><span><b>Public</b><small class="body" style="display:block">Anyone on Discover</small></span></button></div>`,
      action: "Keep private",
    },
    lookManage: {
      eyebrow: "Saved Look settings",
      title: "Manage this Look",
      body: `<div class="choice-list"><button class="choice" onclick="lightweightPanel='visibility';render()"><span><b>Visibility</b><small class="body" style="display:block">Private · only you</small></span><span>›</span></button><button class="choice" onclick="toast('A duplicate draft was created')"><span><b>Duplicate Look</b><small class="body" style="display:block">Keep the original unchanged</small></span><span>›</span></button></div><button class="danger-action" style="margin-top:14px" onclick="toast('Delete requires confirmation in production')">Delete Look</button>`,
      action: "Done",
    },
    plan: {
      eyebrow: "Wednesday · 16°C",
      title: "Plan this day",
      body: `<div class="field"><label for="planner-intent">Describe the day</label><textarea id="planner-intent" class="textarea" placeholder="Client dinner after work; polished but comfortable."></textarea><span class="helper">Prototype preview: Muse structures this sentence into occasion, time, and dress code.</span></div><div class="chips" role="group" aria-label="Occasion" style="margin-top:12px">${["Work", "Dinner", "Weekend", "Travel"].map((x, i) => `<button class="chip ${i === 0 ? "active" : ""}" aria-pressed="${i === 0}" onclick="selectChip(this)">${x}</button>`).join("")}</div><div class="choice-list" style="margin-top:12px"><button class="choice" onclick="closeLightweightPanel();go('G-01')"><span><b>Choose a saved Look</b><small class="body" style="display:block">Use something you already saved.</small></span>›</button><button class="choice" onclick="closeLightweightPanel();go('C-01')"><span><b>Start from my Closet</b><small class="body" style="display:block">Build around a piece you own.</small></span>›</button></div>`,
      action: "Plan from my note",
    },
    tripLook: {
      eyebrow: "Alexandria packing list",
      title: "Add a Trip Look",
      body: `<div class="choice-list"><button class="choice" onclick="closeLightweightPanel();go('G-01')"><span><b>Use a saved Look</b><small class="body" style="display:block">Keep it within the trip context.</small></span>›</button><button class="choice" onclick="closeLightweightPanel();go('F-01')"><span><b>Build from packed pieces</b><small class="body" style="display:block">Open Style Studio with trip pieces.</small></span>›</button></div>`,
      action: "Ask Muse for a Look",
    },
  };
  const panel = panels[lightweightPanel] || panels.save;
  return `<div class="lightweight-layer"><button class="lightweight-scrim" aria-label="Dismiss ${panel.title}" onclick="closeLightweightPanel()"></button><section class="lightweight-sheet" role="dialog" aria-modal="true" aria-labelledby="lightweight-title"><div class="grab" aria-hidden="true"></div><div class="lightweight-head"><span><p class="eyebrow">${panel.eyebrow}</p><h2 id="lightweight-title" class="title">${panel.title}</h2></span><button class="icon-btn" aria-label="Close ${panel.title}" onclick="closeLightweightPanel()">×</button></div>${panel.body}<button class="btn primary wide" style="margin-top:16px" onclick="approveLightweightPanel('${lightweightPanel}')">${panel.action}</button></section></div>`;
}
function decorateSettingsRows() {
  if (currentId !== "L-11") return;
  const appSection = [...app.querySelectorAll(".settings-section")].find(
    (section) =>
      section.querySelector(".settings-section-label")?.textContent === "App",
  );
  if (!appSection) return;
  const configs = [
    ["bell", "L-13"],
    ["image", "L-10"],
    ["help", "L-12"],
  ];
  appSection.querySelectorAll("button.select-row").forEach((row, index) => {
    if (index === 1) {
      const label = row.querySelector(".grow");
      if (label) label.textContent = "Photo originals";
    }
    if (!row.querySelector(".icon-wrap"))
      row.insertAdjacentHTML(
        "afterbegin",
        `<span class="icon-wrap">${icon(configs[index][0])}</span>`,
      );
    row.onclick = () => go(configs[index][1]);
  });
}
function connectPrivacySettings() {
  if (currentId !== "L-11") return;
  const accountSection = [...app.querySelectorAll(".settings-section")].find(
    (section) =>
      section.querySelector(".settings-section-label")?.textContent ===
      "Account",
  );
  const privacyRow = accountSection?.querySelectorAll("button.select-row")[1];
  if (privacyRow) privacyRow.onclick = () => go("L-15");
}
function decorateInlineEditors() {
  const content = app.querySelector(".content");
  if (!content) return;
  if (["L-01", "L-02"].includes(currentId)) {
    const header = content.querySelector(".mirror-profile-head");
    header?.insertAdjacentHTML(
      "afterend",
      `<details class="card progressive-card" ${currentId === "L-02" ? "open" : ""} style="margin-top:12px"><summary><b>Profile details</b><span class="small">Edit here</span></summary><div class="inline-edit-grid" style="margin-top:12px">${inlineEditRow("Profile name", "Amelia Hart")}${inlineEditRow("Profile location", "Cairo")}${inlineEditRow("Style note", "Relaxed tailoring")}</div></details>`,
    );
  }
  if (["G-02", "G-03", "G-04", "G-05", "G-06", "G-07"].includes(currentId)) {
    const context = [...content.querySelectorAll("details")].find((section) =>
      section.textContent.includes("Context & styling"),
    );
    context?.insertAdjacentHTML(
      "beforeend",
      `<div class="inline-edit-grid" style="margin-top:12px">${inlineEditRow("Look title", canvasState.title)}${inlineEditRow("Look location", canvasState.location)}</div>`,
    );
  }
}
function connectFieldLabels() {
  if (currentId !== "M-01") return;
  const label = [...app.querySelectorAll("label")].find(
    (node) => node.textContent.trim() === "Ask in your own words",
  );
  const textarea = label?.parentElement.querySelector("textarea");
  if (label && textarea) {
    textarea.id = "muse-natural-language";
    label.htmlFor = textarea.id;
  }
}
function decorateProgressiveSurfaces() {
  if (!["F-01", "F-02", "F-03"].includes(currentId)) return;
  const content = app.querySelector(".content"),
    dots = content?.querySelector(".mirror-look-dots"),
    filters = content?.querySelector(".mirror-filters"),
    pieces = content?.querySelector(".mirror-piece-strip");
  if (!dots || !filters || !pieces) return;
  const details = document.createElement("details");
  details.className = "card progressive-card studio-options";
  details.style.marginTop = "10px";
  details.innerHTML =
    '<summary><b>Change pieces & view</b><span class="small">Optional controls</span></summary>';
  dots.before(details);
  details.append(dots, filters, pieces);
}
function decorateChoiceChips() {
  const content = app.querySelector(".content");
  if (!content) return;
  if (currentId === "D-04") {
    const group = content.querySelector(".chips");
    if (group) {
      group.setAttribute("role", "group");
      group.setAttribute("aria-label", "Outfit occasion");
      group.querySelectorAll("button").forEach((button, index) => {
        button.setAttribute("aria-pressed", String(index === 0));
        button.onclick = () => selectChip(button);
      });
    }
  }
  if (currentId === "J-02") {
    const field = content.querySelector(".card .field");
    field?.insertAdjacentHTML(
      "afterend",
      `<div class="chips" role="group" aria-label="Trip context" style="margin-top:12px">${["City", "Coast", "Work", "Relaxed"].map((x, i) => `<button class="chip ${i === 1 ? "active" : ""}" aria-pressed="${i === 1}" onclick="selectChip(this)">${x}</button>`).join("")}</div>`,
    );
  }
  if (["F-01", "F-02", "F-03"].includes(currentId)) {
    const group = content.querySelector(".studio-options .mirror-filters");
    if (group) {
      group.setAttribute("role", "group");
      group.setAttribute("aria-label", "Piece category");
      group.querySelectorAll("button").forEach((button, index) => {
        button.setAttribute("aria-pressed", String(index === 0));
        button.onclick = () => selectChip(button);
      });
    }
  }
}
function installGestures() {
  if (currentId === "D-04") {
    const preview = app.querySelector(".outfit-preview"),
      group = app.querySelector('[aria-label="Outfit occasion"]');
    if (preview && group) {
      preview.classList.add("gesture-surface");
      preview.tabIndex = 0;
      preview.setAttribute(
        "aria-label",
        "Outfit preview. Swipe or use arrow keys for another occasion.",
      );
      preview.insertAdjacentHTML(
        "afterend",
        '<small class="gesture-hint">Swipe for another direction · occasion chips stay available</small>',
      );
      let startX = 0;
      const cycle = (step) => {
        const buttons = [...group.querySelectorAll("button")],
          index = Math.max(
            0,
            buttons.findIndex(
              (button) => button.getAttribute("aria-pressed") === "true",
            ),
          ),
          next = buttons[(index + step + buttons.length) % buttons.length];
        selectChip(next);
        toast(next.textContent.trim());
      };
      preview.addEventListener(
        "pointerdown",
        (event) => (startX = event.clientX),
      );
      preview.addEventListener("pointerup", (event) => {
        const delta = event.clientX - startX;
        if (Math.abs(delta) > 45) cycle(delta < 0 ? 1 : -1);
      });
      preview.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          cycle(event.key === "ArrowRight" ? 1 : -1);
        }
      });
    }
  }
  if (["F-01", "F-02", "F-03"].includes(currentId)) {
    const rail = app.querySelector(".studio-options .mirror-piece-strip");
    if (rail) {
      rail.insertAdjacentHTML(
        "beforebegin",
        '<small class="gesture-hint">Drag to reorder · tap any piece to select it</small>',
      );
      let dragged = null;
      rail.querySelectorAll(".mirror-piece").forEach((piece) => {
        piece.draggable = true;
        piece.addEventListener("dragstart", () => {
          dragged = piece;
          piece.classList.add("dragging");
        });
        piece.addEventListener("dragend", () =>
          piece.classList.remove("dragging"),
        );
        piece.addEventListener("dragover", (event) => event.preventDefault());
        piece.addEventListener("drop", (event) => {
          event.preventDefault();
          if (dragged && dragged !== piece) {
            rail.insertBefore(dragged, piece);
            toast("Piece order updated");
          }
        });
      });
    }
  }
  if (["G-02", "G-03", "G-04", "G-05", "G-06", "G-07"].includes(currentId)) {
    const image = app.querySelector(".hero-img"),
      actions = app.querySelector(".content>.row");
    actions?.insertAdjacentHTML(
      "afterend",
      '<button class="btn wide" style="margin-top:8px" onclick="openLightweightPanel(\'share\')">Share this Look</button>',
    );
    if (image) {
      image.classList.add("gesture-surface");
      image.tabIndex = 0;
      image.setAttribute(
        "aria-label",
        "Saved Look preview. Press and hold for quick share.",
      );
      let timer;
      image.addEventListener(
        "pointerdown",
        () => (timer = setTimeout(() => openLightweightPanel("share"), 550)),
      );
      ["pointerup", "pointercancel", "pointerleave"].forEach((type) =>
        image.addEventListener(type, () => clearTimeout(timer)),
      );
      image.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          openLightweightPanel("share");
        }
      });
    }
  }
}
function installWalkthroughGestures() {
  if (currentId !== "S-01") return;
  const story = app.querySelector(".walkthrough-story");
  let start = null;
  if (!story) return;
  story.tabIndex = 0;
  story.setAttribute(
    "aria-label",
    "StyleIQ introduction. Swipe left or right to change page.",
  );
  story.addEventListener("pointerdown", (event) => {
    if (event.target.closest("button")) return;
    start = { x: event.clientX, y: event.clientY };
    story.setPointerCapture?.(event.pointerId);
  });
  story.addEventListener("pointerup", (event) => {
    if (!start) return;
    const dx = event.clientX - start.x,
      dy = event.clientY - start.y;
    start = null;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy))
      moveWalkthrough(dx < 0 ? 1 : -1);
  });
  story.addEventListener("pointercancel", () => (start = null));
}
function guardGestureKeys() {
  app
    .querySelectorAll(".gesture-surface")
    .forEach((surface) =>
      surface.addEventListener("keydown", (event) => event.stopPropagation()),
    );
}
function contextualInsight(title, summary, detail) {
  return `<details class="card progressive-card contextual-insight" style="margin-top:12px"><summary><b>${title}</b><span class="small">${summary}</span></summary><p class="body" style="margin-top:10px">${detail}</p></details>`;
}
function decorateContextualIntelligence() {
  const content = app.querySelector(".content");
  if (!content) return;
  if (currentId === "D-02") {
    const old = content.querySelector(".signal-card");
    old?.insertAdjacentHTML(
      "beforebegin",
      contextualInsight(
        "Why this Look works",
        "18°C · Office",
        "The light layer handles the cooler morning, while the loafers and soft tailoring fit your office plan.",
      ),
    );
    old?.remove();
  }
  if (["C-02", "C-03", "C-04", "C-05", "C-06"].includes(currentId)) {
    const approval = content.querySelector(".approval-card");
    approval?.insertAdjacentHTML(
      "afterend",
      contextualInsight(
        "Useful in your wardrobe",
        "5 outfit directions",
        "This blazer connects your office, dinner, and travel pieces; no separate intelligence page is needed.",
      ),
    );
  }
  if (currentId === "K-04") {
    const image = content.querySelector("img");
    image?.insertAdjacentHTML(
      "afterend",
      contextualInsight(
        "Why it matches you",
        "3 owned pieces",
        "The silhouette matches your saved tailoring preference and can be recreated mostly from your Closet.",
      ),
    );
  }
  if (currentId === "J-14") {
    const first = content.firstElementChild;
    first?.insertAdjacentHTML(
      "afterend",
      contextualInsight(
        "Trip check",
        "12 pieces · 3 days",
        "Every activity has a compatible Look and the carry-on still has room for one weather layer.",
      ),
    );
  }
  if (currentId === "L-01") {
    const insightButton = [...content.querySelectorAll("button")].find(
      (button) => button.textContent.includes("See the wardrobe insight"),
    );
    if (insightButton) {
      insightButton.textContent = "Style the blazer now";
      insightButton.onclick = () => go("D-04");
    }
  }
}
function decorateJobLauncher() {
  if (currentId !== "D-02") return;
  const content = app.querySelector(".content"),
    actions = content?.querySelector(".mirror-actions");
  actions?.insertAdjacentHTML(
    "afterend",
    `<section aria-label="Start with your goal"><p class="eyebrow" style="margin-top:16px">What do you need?</p><div class="job-strip"><button class="job-action" onclick="go('D-04')">${icon("shirt")}<b>Dress me</b></button><button class="job-action" onclick="go('K-02')">${icon("search")}<b>Should I buy this?</b></button><button class="job-action" onclick="go('F-01')">${icon("edit")}<b>Recreate a Look</b></button><button class="job-action" onclick="go('J-01')">${icon("bag")}<b>Help me pack</b></button><button class="job-action" onclick="go('C-02')">${icon("spark")}<b>What goes with this?</b></button></div></section>`,
  );
}
function completeOnboarding(destination = "D-02") {
  onboardingComplete = true;
  localStorage.setItem("styleiqOnboardingCompleteV1", "true");
  go(destination);
}
function openStyleIQ() {
  go("S-01");
}
const walkthroughSlides = [
  {
    image: "images/onboarding-muse.png",
    alt: "Muse arranging outfit references in a sunlit wardrobe studio",
    eyebrow: "Your personal stylist",
    title: "Hi, I’m Muse.",
    body: "I learn your wardrobe, your taste, and the choices you actually make—then help you get more from every piece you own.",
  },
  {
    image: "images/onboarding-daily-style.png",
    alt: "A man choosing a navy tailored jacket in a wardrobe studio",
    eyebrow: "Daily style guidance",
    title: "Dress with purpose, every day.",
    body: "From workdays to weekends, StyleIQ helps you choose outfits that fit your plans, your lifestyle, and your personal style.",
  },
  {
    image: "images/onboarding-trip-planning.png",
    alt: "A couple packing a considered capsule wardrobe for a trip",
    eyebrow: "Trip planning",
    title: "Pack smarter for every trip.",
    body: "Plan outfits for getaways, events, and everyday travel with styling help built around the wardrobe you already own.",
  },
];
function setWalkthroughSlide(index) {
  walkthroughIndex = Math.max(0, Math.min(walkthroughSlides.length - 1, index));
  render();
}
function moveWalkthrough(step) {
  setWalkthroughSlide(walkthroughIndex + step);
}
function connectOnboardingGoals() {
  if (currentId !== "A-05") return;
  const destinations = {
    "Wear more of my Closet": "D-02",
    "Plan outfits for my week": "I-01",
    "Pack for a trip": "J-01",
    "Decide what is worth buying": "K-02",
  };
  app.querySelectorAll(".choice").forEach((button) => {
    const label = button.querySelector("b")?.textContent.trim(),
      id = destinations[label];
    if (id) button.onclick = () => completeOnboarding(id);
  });
}
function openLogout() {
  accountMenuOpen = false;
  overlay = "logout";
  render();
}
function confirmLogout() {
  overlay = null;
  navHistory = [];
  go("A-01", { record: false });
  toast("You are signed out");
}
function chooseStylingContext(value, destination) {
  stylingContext = value;
  localStorage.setItem("styleiqStylingContextV1", value);
  go(destination);
}
function stylingContextSurface(editing = false) {
  const destination = editing ? "L-04" : "A-16",
    choices = [
      ["Womenswear", "images/profile_woman.png"],
      ["Menswear", "images/profile_man.png"],
      ["Both", "images/cel_styles.png"],
    ];
  return `<section class="screen entry-screen"><div class="walkthrough-content">${editing ? `<div class="entry-top"><button class="icon-btn" aria-label="Back" onclick="backScreen()">${icon("back")}</button>${brandLockup("micro")}<span></span></div>` : `<div class="entry-top">${brandLockup("micro")}<span class="walkthrough-count">2 of 2</span></div>`}<div style="margin-top:28px"><p class="eyebrow">${editing ? "Styling context" : "Personalize StyleIQ"}</p><h1 class="display">Which wardrobe should Muse style?</h1><p class="body">Choose Womenswear, Menswear, or Both. This is styling context, not an identity question.</p></div><div class="profile-choice-grid" role="group" aria-label="Styling context">${choices.map(([label, image]) => `<button class="styling-option" aria-pressed="${stylingContext === label}" onclick="chooseStylingContext('${label}','${destination}')"><img src="${image}" alt="${label} wardrobe"><b>${label}</b></button>`).join("")}</div><p class="helper" style="margin-top:14px">Your choice is saved and can be changed later from About you.</p>${editing ? "" : `<div class="walkthrough-dots" aria-hidden="true" style="margin-top:auto"><span></span><span class="active"></span></div>`}</div></section>`;
}
function entryScreen(s) {
  if (s.id === "S-00")
    return `<section class="screen entry-screen entry-splash" role="button" tabindex="0" aria-label="Open StyleIQ" onclick="openStyleIQ()" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openStyleIQ()}"><img class="splash-media" src="images/splash-curated-wardrobe.jpg" alt="Curated wardrobe with natural light and linen drape"><div class="splash-tint" aria-hidden="true"></div><div class="splash-tag" aria-hidden="true"><span class="splash-tag-text">Styled for you ♡</span></div><div class="entry-frame"><div class="entry-top"><span class="splash-brand">StyleIQ</span></div><div class="splash-copy"><h1 class="splash-title">Your personal<br>stylist, made easier.</h1><p class="splash-body">Plan outfits, understand <u>your</u> closet, and build a wardrobe with intention.</p></div></div></section>`;
  if (s.id === "S-01") {
    const slide = walkthroughSlides[walkthroughIndex];
    return `<section class="screen entry-screen walkthrough-story"><img class="walkthrough-story-bg" src="${slide.image}" alt="${slide.alt}"><div class="walkthrough-story-shade" aria-hidden="true"></div><div class="walkthrough-story-frame"><div class="walkthrough-story-head"><span></span>${brandLockup("inverse micro")}<span class="walkthrough-count">${walkthroughIndex + 1} of ${walkthroughSlides.length}</span></div><div class="walkthrough-story-body"><article class="walkthrough-glass" aria-live="polite"><div class="walkthrough-glass-refract" aria-hidden="true"></div><div class="walkthrough-glass-tint" aria-hidden="true"></div><div class="walkthrough-glass-specular" aria-hidden="true"></div><div class="walkthrough-glass-content"><p class="eyebrow">${slide.eyebrow}</p><h1>${slide.title}</h1><p class="body">${slide.body}</p><nav class="walkthrough-nav" aria-label="Walkthrough pages"><button class="walkthrough-arrow" aria-label="Previous page" onclick="moveWalkthrough(-1)" ${walkthroughIndex === 0 ? "disabled" : ""}>${icon("back")}</button><div class="walkthrough-dots">${walkthroughSlides.map((_, index) => `<button class="${index === walkthroughIndex ? "active" : ""}" aria-label="Show page ${index + 1}" aria-current="${index === walkthroughIndex ? "step" : "false"}" onclick="setWalkthroughSlide(${index})"></button>`).join("")}</div><button class="walkthrough-arrow" aria-label="Next page" onclick="moveWalkthrough(1)" ${walkthroughIndex === walkthroughSlides.length - 1 ? "disabled" : ""}>${icon("back")}</button></nav></div></article><div class="walkthrough-story-actions"><button class="btn primary wide walkthrough-primary" onclick="go('S-02')">Choose styling context</button><button class="btn wide walkthrough-skip" onclick="completeOnboarding('D-02')">Skip to Today</button></div></div></div></section>`;
  }
  return stylingContextSurface(false);
}
function onboarding(s) {
  const commonTop = `<div class="onboard-top"><button class="icon-btn" aria-label="Back" onclick="backScreen()">${icon("back")}</button>${brandLockup("micro")}<span></span></div>`;
  let main = "";
  if (s.id === "A-01")
    main = `<div class="onboard-main auth-main"><div class="auth-heading"><p class="eyebrow">Welcome back</p><h1 class="display">Sign in to your wardrobe.</h1><p class="body">Pick up where you left off with your Closet, Looks, plans, and Muse preferences.</p></div><div class="auth-shell"><div class="auth-glass-refract" aria-hidden="true"></div><div class="auth-glass-tint" aria-hidden="true"></div><div class="auth-glass-specular" aria-hidden="true"></div><div class="auth-panel"><div class="stack auth-form"><div class="field"><div class="auth-field-label"><label for="login-email">Email address</label></div><div class="auth-input-wrap"><span class="auth-input-icon" aria-hidden="true">${icon("user-round")}</span><input id="login-email" class="input auth-screen-input" type="email" autocomplete="email" placeholder="name@email.com"></div></div><div class="field"><div class="auth-field-label"><label for="login-password">Password</label><button class="auth-inline-link" type="button" onclick="toast('Password reset link sent')">Forgot password?</button></div><div class="auth-input-wrap"><span class="auth-input-icon" aria-hidden="true">${icon("lock-keyhole")}</span><input id="login-password" class="input auth-screen-input" type="password" autocomplete="current-password" placeholder="Enter your password"></div></div><button class="btn primary wide auth-primary" type="button" onclick="completeOnboarding('D-02')">Sign in</button></div><div class="auth-divider"><span>or continue with</span></div><div class="auth-social-grid"><button class="btn auth-provider" type="button" aria-label="Sign in with Google" onclick="completeOnboarding('D-02')">${authIcon("google")}<span>Google</span></button><button class="btn auth-provider" type="button" aria-label="Sign in with Apple" onclick="completeOnboarding('D-02')">${authIcon("apple")}<span>Apple</span></button></div></div></div><div class="auth-switch"><span>Don’t have an account?</span><button class="auth-switch-action" type="button" onclick="go('A-16')">Sign up</button></div></div>`;
  else if (s.id === "A-16")
    main = `<div class="onboard-main auth-main"><div class="auth-heading"><p class="eyebrow">Your wardrobe, considered</p><h1 class="display">Create your StyleIQ.</h1><p class="body">Build a more intentional wardrobe with a personal stylist that learns from you.</p></div><div class="auth-shell"><div class="auth-glass-refract" aria-hidden="true"></div><div class="auth-glass-tint" aria-hidden="true"></div><div class="auth-glass-specular" aria-hidden="true"></div><div class="auth-panel"><div class="auth-social-grid"><button class="btn auth-provider" type="button" aria-label="Sign up with Google" onclick="go('A-05')">${authIcon("google")}<span>Google</span></button><button class="btn auth-provider" type="button" aria-label="Sign up with Apple" onclick="go('A-05')">${authIcon("apple")}<span>Apple</span></button></div><div class="auth-divider"><span>or</span></div><button class="btn primary wide auth-provider auth-primary auth-email-choice" type="button" onclick="go('A-02')">${authIcon("mail")}<span>Continue with email</span></button><p class="auth-legal">By continuing, you agree to StyleIQ’s Terms and acknowledge the Privacy Policy.</p></div></div><div class="auth-switch"><span>Already have an account?</span><button class="auth-switch-action" type="button" onclick="go('A-01')">Sign in</button></div></div>`;
  else if (s.id === "A-02")
    main = `<div class="onboard-main auth-step-main"><div class="auth-heading"><p class="eyebrow">About you</p><h1 class="display">What should we call you?</h1><p class="body">Tell us the name you would like to see across your StyleIQ wardrobe.</p></div><div class="auth-shell"><div class="auth-glass-refract" aria-hidden="true"></div><div class="auth-glass-tint" aria-hidden="true"></div><div class="auth-glass-specular" aria-hidden="true"></div><div class="auth-panel"><div class="stack auth-form"><div class="field"><div class="auth-field-label"><label for="signup-first-name">First name</label></div><div class="auth-input-wrap"><span class="auth-input-icon" aria-hidden="true">${icon("user-round")}</span><input id="signup-first-name" class="input auth-screen-input" autocomplete="given-name" value="Amelia"></div></div><div class="field"><div class="auth-field-label"><label for="signup-last-name">Last name</label></div><div class="auth-input-wrap"><span class="auth-input-icon" aria-hidden="true">${icon("user-round")}</span><input id="signup-last-name" class="input auth-screen-input" autocomplete="family-name" value="Hart"></div></div><button class="btn primary wide auth-primary" type="button" onclick="go('A-03')">Use this name</button></div></div></div></div>`;
  else if (s.id === "A-03")
    main = `<div class="onboard-main auth-step-main"><div class="auth-heading"><p class="eyebrow">Email sign-up</p><h1 class="display">Add your email.</h1><p class="body">Use this email to sign in and recognize shopping receipts you choose to forward.</p></div><div class="auth-shell"><div class="auth-glass-refract" aria-hidden="true"></div><div class="auth-glass-tint" aria-hidden="true"></div><div class="auth-glass-specular" aria-hidden="true"></div><div class="auth-panel"><div class="stack auth-form"><div class="field"><div class="auth-field-label"><label for="signup-email">Email address</label></div><div class="auth-input-wrap"><span class="auth-input-icon" aria-hidden="true">${icon("mail")}</span><input id="signup-email" class="input auth-screen-input" type="email" autocomplete="email" placeholder="name@email.com"></div><span class="helper">Used for account access and optional receipt imports.</span></div><button class="btn primary wide auth-primary" type="button" onclick="go('A-04')">Create my account</button></div></div></div></div>`;
  else if (s.id === "A-04")
    main = `<div class="onboard-main auth-step-main"><div class="auth-heading"><p class="eyebrow">Verify email</p><h1 class="display">Check your inbox.</h1><p class="body">Enter the six-digit code we sent to your email.</p></div><div class="auth-shell"><div class="auth-glass-refract" aria-hidden="true"></div><div class="auth-glass-tint" aria-hidden="true"></div><div class="auth-glass-specular" aria-hidden="true"></div><div class="auth-panel"><div class="auth-form"><div class="otp">${Array.from({ length: 6 }, (_, i) => `<input inputmode="numeric" pattern="[0-9]*" maxlength="1" aria-label="Digit ${i + 1}">`).join("")}</div><div class="between" style="margin-top:12px"><span class="helper">New code in 0:28</span><button class="auth-inline-link" type="button" onclick="toast('A new code was sent')">Resend code</button></div><button class="btn primary wide auth-primary" type="button" style="margin-top:14px" onclick="go('A-05')">Verify email</button></div></div></div></div>`;
  else if (s.id === "A-05")
    main = `<div class="onboard-main auth-step-main goal-step-main"><div class="auth-shell goal-card"><div class="goal-card-art" aria-hidden="true"></div><div class="auth-glass-refract" aria-hidden="true"></div><div class="auth-glass-tint" aria-hidden="true"></div><div class="auth-glass-specular" aria-hidden="true"></div><div class="auth-panel"><div class="auth-heading goal-card-heading"><p class="eyebrow">Start with your goal</p><h1 class="display">What should StyleIQ help with first?</h1><p class="body">Choose one. You can use everything else whenever you need it.</p></div><div class="choice-list">${[
      ["shirt", "Wear more of my Closet"],
      ["calendar", "Plan outfits for my week"],
      ["bag", "Pack for a trip"],
      ["search", "Decide what is worth buying"],
    ]
      .map(
        ([ico, label]) =>
          `<button class="choice" onclick="go('D-02')"><span class="row"><span class="icon-wrap">${icon(ico)}</span><b>${label}</b></span><span class="goal-choice-arrow" aria-hidden="true">›</span></button>`,
      )
      .join("")}</div></div></div></div>`;
  else if (s.id === "A-06") return stylingContextSurface(true);
  else return mirrorToday();
  return `<section class="screen"><div class="content no-nav"><div class="onboard">${commonTop}<div class="onboard-step-icon" aria-hidden="true">${icon(onboardingIconMap[s.id] || "sparkles")}</div>${main}</div></div></section>`;
}
let importConfidence = "high",
  batchImportActive = false,
  batchUncertainResolved = false,
  batchImportStartSize = 12,
  batchSelectedCount = 4,
  photoLearningStage = "picker";
let photoLearningState = (() => {
  try {
    return (
      JSON.parse(localStorage.getItem("styleiqPhotoLearningV1")) || {
        active: false,
        signals: [],
      }
    );
  } catch {
    return { active: false, signals: [] };
  }
})();
function openPhotoLearning() {
  photoLearningStage = "picker";
  openLightweightPanel("learn");
}
function undoPhotoLearning() {
  photoLearningState = { active: false, signals: [] };
  localStorage.removeItem("styleiqPhotoLearningV1");
  render();
  toast("Photo insights removed");
}
function decoratePhotoLearning() {
  if (!["L-01", "M-01"].includes(currentId)) return;
  const content = app.querySelector(".content");
  if (!content) return;
  content.insertAdjacentHTML(
    "beforeend",
    `<section class="card learning-entry" aria-label="Learn from my photos"><p class="eyebrow">Style intelligence</p><h3 class="title" style="font-size:20px">${photoLearningState.active ? "Photo insights are active" : "Learn from my photos"}</h3><p class="body">${photoLearningState.active ? `${photoLearningState.signals.length} editable signals learned from historical outfits.` : "Use historical outfit photos to learn recurring colors, silhouettes, pieces, and combinations—without adding them to your Closet."}</p><button class="btn primary wide" onclick="openPhotoLearning()">${photoLearningState.active ? "Review photo insights" : "Choose outfit photos"}</button>${photoLearningState.active ? `<button class="text-action" onclick="undoPhotoLearning()">Undo photo learning</button>` : ""}</section>`,
  );
}
let lensOpen = false,
  lensStage = "capture",
  lensSource = "camera",
  lensIntent = "";
const lensRootIds = ["D-02", "C-01", "I-01", "K-01", "L-01"];
function openLens() {
  lensOpen = true;
  lensStage = "capture";
  lensIntent = "";
  lightweightPanel = null;
  accountMenuOpen = false;
  render();
}
function openVisualSearch(source = "library") {
  lensOpen = true;
  lensSource = source;
  lensStage = "intent";
  lensIntent = "";
  lightweightPanel = null;
  accountMenuOpen = false;
  render();
}
function closeLens() {
  lensOpen = false;
  render();
}
function lensCapture(source) {
  lensSource = source;
  lensStage = "intent";
  render();
}
function chooseLensIntent(intent) {
  lensIntent = intent;
  lensStage = "result";
  render();
}
function lensDestination(id) {
  lensOpen = false;
  go(id);
}
function lensLikelyIntent() {
  return currentId === "C-01"
    ? "add"
    : currentId === "I-01"
      ? "suitcase"
      : currentId === "K-01"
        ? "screenshot"
        : currentId === "L-01"
          ? "recreate"
          : "improve";
}
function lensEntry() {
  return lensRootIds.includes(currentId) && !lensOpen
    ? `<button class="lens-fab" aria-label="Open StyleIQ Lens" onclick="openLens()">${icon("camera")} Lens</button>`
    : "";
}
function lensIntentPicker() {
  const likely = lensLikelyIntent(),
    intents = [
      ["add", "Add Closet items", "Find one or many garments"],
      ["buy", "Should I buy this?", "Check usefulness and duplicates"],
      [
        "recreate",
        "Recreate this outfit",
        "Translate the formula to owned pieces",
      ],
      ["improve", "Improve my outfit", "Make one useful change"],
      ["suitcase", "Check my suitcase", "Compare with this Trip"],
      ["screenshot", "Shop my Closet", "Find owned matches first"],
      ["similar", "Find owned alternatives", "Compare visual similarity"],
    ];
  return `<p class="eyebrow">Likely intent from this context</p><h2 class="title">What should Lens do?</h2><p class="body">${lensSource === "camera" ? "Camera" : lensSource === "library" ? "Photo library" : "Screenshot"} input ready. Choose the closest job; nothing is uploaded in this prototype.</p><div class="lens-intents" role="group" aria-label="Lens intent">${intents.map(([id, title, note]) => `<button class="lens-intent ${id === likely ? "recommended" : ""}" onclick="chooseLensIntent('${id}')"><b>${title}${id === likely ? " · Suggested" : ""}</b><small>${note}</small></button>`).join("")}</div>`;
}
function lensMatches() {
  return `<div class="lens-match-grid" role="region" aria-label="Owned visual matches">${[
    [assets.blazer, "Tailored blazer", "92% similar"],
    [assets.top, "Ivory shell", "86% similar"],
    [assets.shoes, "Leather loafers", "78% similar"],
  ]
    .map(
      ([image, name, note]) =>
        `<button class="lens-match" onclick="lensDestination('C-02')"><img src="${image}" alt="${name}"><b>${name}</b><small>${note}</small></button>`,
    )
    .join("")}</div>`;
}
function lensResult() {
  const results = {
    add: {
      eyebrow: "4 garments detected",
      title: "Build your Closet from this view.",
      image: "images/closet.jpeg",
      body: "Lens found four candidate pieces. The shared batch importer will clean, classify, deduplicate, and only ask about uncertainty.",
      actions: `<button class="btn primary wide" onclick="lensDestination('B-02')">Review detected items</button>`,
    },
    buy: {
      eyebrow: "Purchase check · high confidence",
      title: "Useful, but close to what you own.",
      image: assets.top2,
      body: "82% compatible · works in 6 owned Looks · high duplicate risk against your warm knit. Muse suggests comparing before buying.",
      extra: lensMatches(),
      actions: `<div class="row"><button class="btn grow primary" onclick="lensDestination('C-01')">Compare owned</button><button class="btn grow" onclick="lensDestination('D-04')">See outfit ideas</button></div>`,
    },
    recreate: {
      eyebrow: "Outfit formula detected",
      title: "Make this Look yours.",
      image: assets.look3,
      body: "Relaxed blazer + soft shell + straight trouser + low-profile loafer. Three roles have owned equivalents; the bag is optional.",
      extra: lensMatches(),
      actions: `<button class="btn primary wide" onclick="lensDestination('F-01')">Make it mine</button>`,
    },
    improve: {
      eyebrow: "One small improvement",
      title: "Swap the shoes; keep everything else.",
      image: assets.look,
      body: "Your owned leather loafers sharpen the proportion and suit today’s office context. No questionnaire needed.",
      extra: lensMatches(),
      actions: `<div class="row"><button class="btn grow primary" onclick="lensDestination('F-01')">Apply in Studio</button><button class="btn grow" onclick="lensDestination('M-01')">Ask Muse</button></div>`,
    },
    suitcase: {
      eyebrow: "Alexandria Trip · 8 categories found",
      title: "Add one light layer; remove one duplicate shoe.",
      image: assets.look4,
      body: "Lens compared the visible suitcase with your current Alexandria packing list. These are suggestions, not required corrections.",
      actions: `<button class="btn primary wide" onclick="lensDestination('J-08')">Update packing list</button>`,
    },
    screenshot: {
      eyebrow: "Owned matches first",
      title: "You already own this outfit formula.",
      image: assets.look2,
      body: "Lens extracted a tailored layer, soft neutral top, straight bottom, and leather shoe. Three close matches are already in your Closet.",
      extra: lensMatches(),
      actions: `<div class="row"><button class="btn grow primary" onclick="lensDestination('F-01')">Make it mine</button><button class="btn grow" onclick="lensDestination('C-01')">View Closet matches</button></div>`,
    },
    similar: {
      eyebrow: "Visual similarity",
      title: "Three owned alternatives found.",
      image: assets.top2,
      body: "Compared by silhouette, warmth, fabric weight, and styling role. Owned options appear before shopping suggestions.",
      extra: lensMatches(),
      actions: `<button class="btn primary wide" onclick="lensDestination('C-01')">View owned alternatives</button>`,
    },
  };
  const result = results[lensIntent] || results.screenshot;
  return `<img class="lens-result-hero" src="${result.image}" alt="Lens visual input"><p class="eyebrow" style="margin-top:14px">${result.eyebrow}</p><h2 class="title">${result.title}</h2><p class="body">${result.body}</p>${result.extra || ""}<div style="margin-top:14px">${result.actions}</div>`;
}
function lensLayerMarkup() {
  if (!lensOpen) return "";
  return `<div class="lens-layer"><button class="lens-scrim" aria-label="Close StyleIQ Lens" onclick="closeLens()"></button><section class="lens-sheet" role="dialog" aria-modal="true" aria-label="StyleIQ Lens"><header class="lens-head"><span><p class="eyebrow">StyleIQ</p><h2 class="title" style="font-size:20px">Lens</h2></span><button class="icon-btn" aria-label="Close StyleIQ Lens" onclick="closeLens()">×</button></header>${lensStage === "capture" ? `<div class="lens-capture"><img src="${assets.look3}" alt="Camera preview placeholder"><span>Show Lens what you see.</span></div><div class="lens-source-grid"><button class="lens-source" onclick="lensCapture('camera')">${icon("camera")}Camera</button><button class="lens-source" onclick="lensCapture('library')">${icon("image")}Photo library</button><button class="lens-source" onclick="lensCapture('screenshot')">${icon("scan")}Screenshot</button></div>` : lensStage === "intent" ? lensIntentPicker() : lensResult()}</section></div>`;
}
function decorateVisualSearchEntries() {
  const content = app.querySelector(".content");
  if (!content) return;
  if (currentId === "C-01") {
    const toolbar = content.querySelector(".closet-toolbar");
    if (toolbar && !content.querySelector(".visual-search-entry"))
      toolbar.insertAdjacentHTML(
        "afterend",
        `<button class="visual-search-entry" onclick="openVisualSearch('library')">${icon("camera")}<span><b>Search Closet by image</b><small>Photo or screenshot · same Lens matching</small></span></button>`,
      );
  }
  if (currentId === "K-02" && !content.querySelector(".visual-search-entry"))
    content.insertAdjacentHTML(
      "afterbegin",
      `<button class="visual-search-entry" onclick="openVisualSearch('screenshot')">${icon("image")}<span><b>Search Discover with an image</b><small>Use inspiration or a screenshot</small></span></button>`,
    );
}
const lookSourceLabels = {
  user: "Created by Me",
  muse_assisted: "With Muse",
  muse_generated: "Muse Generated",
  inspiration_recreated: "Recreated from Inspiration",
  creator_recreated: "Creator / Lens",
  lens_recreated: "Creator / Lens",
  today_saved: "Saved from Today",
  trip_generated: "Trip Generated",
  planner_generated: "Planner Generated",
};
const lookCatalog = [
  { title: "Design Review", image: assets.look, creationSource: "user" },
  {
    title: "Coffee Meeting",
    image: assets.look3,
    creationSource: "muse_assisted",
  },
  {
    title: "Dinner Classic",
    image: assets.look2,
    creationSource: "muse_generated",
  },
  {
    title: "Gallery Tailoring",
    image: assets.look4,
    creationSource: "inspiration_recreated",
  },
  { title: "Quiet Monday", image: assets.look, creationSource: "user" },
];
function lookSourceLabel(source) {
  return lookSourceLabels[source] || "Created by Me";
}
function lookMatchesFilter(look, filter) {
  if (filter === "All") return true;
  if (filter === "Created by Me") return look.creationSource === "user";
  if (filter === "With Muse")
    return ["muse_assisted", "muse_generated"].includes(look.creationSource);
  return lookSourceLabel(look.creationSource) === filter;
}
let lookFilter = "All",
  creatorReferences = [
    { name: "@lefevrediary", source: "Instagram · prototype reference" },
    { name: "Maya El-Sayed", source: "Pinterest · prototype reference" },
  ];
function setLookFilter(value) {
  lookFilter = value;
  render();
}
function myLooksGrid() {
  const visible = lookCatalog.filter((look) =>
    lookMatchesFilter(look, lookFilter),
  );
  return shell(
    "My Looks",
    `<div class="between"><span><p class="eyebrow">Canonical collection</p><h2 class="title">${lookCatalog.length} My Looks</h2></span><button class="text-action" onclick="newStudioLook()">Create Look</button></div><div class="chips" role="group" aria-label="Look creation source" style="margin-top:12px">${["All", "Created by Me", "With Muse", "Muse Generated", "Recreated from Inspiration"].map((value) => `<button class="chip ${lookFilter === value ? "active" : ""}" aria-pressed="${lookFilter === value}" onclick="setLookFilter('${value}')">${value}</button>`).join("")}</div><div class="item-grid" style="margin-top:12px">${visible.map((look) => `<button class="item-card" onclick="canvasState.creationSource='${look.creationSource}';persist();go('G-02')"><img src="${look.image}" alt="${look.title}"><span class="copy"><b>${look.title}</b><small class="body" style="display:block">${lookSourceLabel(look.creationSource)}</small></span></button>`).join("")}</div>`,
    { active: "profile" },
  );
}
function removeCreatorReference(index) {
  creatorReferences.splice(index, 1);
  render();
}
function addCreatorReference() {
  const input = app.querySelector("#creator-reference"),
    value = input?.value.trim();
  if (!value) return;
  creatorReferences.push({
    name: value,
    source: "Name, handle, or link · prototype only",
  });
  render();
}
function inspirationPanelBody() {
  return `<p class="body">Manage personal photos, screenshots, Instagram or Pinterest references, and creators or celebrities in one Style Inspiration space. External connections are simulated in this prototype.</p><div class="field" style="margin-top:14px"><label for="creator-reference">Creator, celebrity, handle, or link</label><input id="creator-reference" class="input" placeholder="@handle or pinterest.com/…"></div><button class="btn wide" style="margin-top:8px" onclick="addCreatorReference()">Add reference</button><div style="margin-top:12px">${creatorReferences.map((ref, index) => `<div class="creator-ref"><span><b>${ref.name}</b><small>${ref.source}</small></span><button class="text-action" aria-label="Remove ${ref.name}" onclick="removeCreatorReference(${index})">Remove</button></div>`).join("")}</div>`;
}
function creatorLookDetail() {
  return shell(
    "Creator inspiration",
    `<img class="hero-img" style="height:330px" src="${assets.look3}" alt="Creator coffee meeting outfit"><p class="eyebrow" style="margin-top:14px">@lefevrediary · Inspiration</p><h2 class="title">Make the formula yours.</h2><p class="body">Relaxed tailoring, soft neutral top, straight trouser, and leather loafer. You already own equivalents for 3 of 4 roles.</p>${lensMatches()}<button class="btn primary wide" style="margin-top:14px" onclick="canvasState.creationSource='creator_recreated';persist();go('F-01')">Make It Mine</button><button class="text-action" style="margin-top:8px" onclick="toast('Creator profile is secondary to your Closet translation')">View creator profile</button>`,
    { active: "discover" },
  );
}
function decorateInspirationProfile() {
  if (currentId !== "L-01") return;
  const content = app.querySelector(".content");
  if (!content) return;
  const byMe = lookCatalog.filter(
      (look) => look.creationSource === "user",
    ).length,
    withMuse = lookCatalog.filter((look) =>
      ["muse_assisted", "muse_generated"].includes(look.creationSource),
    ).length;
  content.insertAdjacentHTML(
    "beforeend",
    `<section class="card" style="margin-top:12px" aria-label="My Looks summary"><p class="eyebrow">My Looks</p><h3 class="title">${lookCatalog.length} Looks</h3><div class="profile-insight-grid"><button class="profile-insight" onclick="lookFilter='All';go('G-01')"><b>${lookCatalog.length}</b><small>Total</small></button><button class="profile-insight" onclick="lookFilter='Created by Me';go('G-01')"><b>${byMe}</b><small>Created by me</small></button><button class="profile-insight" onclick="lookFilter='With Muse';go('G-01')"><b>${withMuse}</b><small>With Muse</small></button></div></section><section class="card" style="margin-top:12px" aria-label="Style Inspiration"><p class="eyebrow">Style Inspiration</p><h3 class="title">References that shape your style</h3><p class="body">Manage photos, screenshots, Instagram, Pinterest, creators, and celebrities in one place.</p><button class="btn wide" style="margin-top:12px" onclick="openLightweightPanel('inspiration')">Manage inspiration</button></section>`,
  );
}
function decorateLookProvenance() {
  if (
    !["G-02", "G-03", "G-04", "G-05", "G-06", "G-07", "G-08"].includes(
      currentId,
    )
  )
    return;
  const eyebrow = app.querySelector(".content .eyebrow");
  if (eyebrow)
    eyebrow.textContent = lookSourceLabel(canvasState.creationSource);
}
function toggleBatchPhoto(button) {
  const selected = button.getAttribute("aria-pressed") !== "true";
  button.setAttribute("aria-pressed", String(selected));
  button.querySelector("span").textContent = selected
    ? "Selected"
    : "Not selected";
  batchSelectedCount += selected ? 1 : -1;
  const count = document.getElementById("batch-photo-count"),
    action = document.getElementById("batch-process");
  if (count)
    count.textContent = `${batchSelectedCount} photo${batchSelectedCount === 1 ? "" : "s"} selected · automatic cleanup and classification`;
  if (action) {
    action.textContent = batchSelectedCount
      ? `Process ${batchSelectedCount} photo${batchSelectedCount === 1 ? "" : "s"}`
      : "Select at least one photo";
    action.disabled = batchSelectedCount === 0;
  }
}
function startBatchImport() {
  batchImportActive = true;
  batchUncertainResolved = false;
  batchImportStartSize = closetState.size;
  go("B-10");
}
function batchPhotoImport() {
  const photos = [
    [assets.blazer, "Blazer"],
    [assets.top, "Silk top"],
    [assets.bottom, "Trousers"],
    [assets.shoes, "Loafers"],
  ];
  batchSelectedCount = 4;
  return shell(
    "Add Photos",
    `<div class="mirror-upload-intro"><p class="eyebrow">Batch import</p><h2>Add garment photos</h2><p class="body">Choose several items at once. StyleIQ processes them together and only asks about unresolved pieces.</p></div><div class="batch-photo-grid" role="group" aria-label="Selected garment photos">${photos.map(([image, name]) => `<button class="batch-photo" aria-pressed="true" onclick="toggleBatchPhoto(this)"><img src="${image}" alt="${name}"><span>Selected</span></button>`).join("")}</div><p id="batch-photo-count" class="mirror-upload-count">4 photos selected · automatic cleanup and classification</p><div class="mirror-upload-actions"><button id="batch-process" class="btn primary wide" onclick="startBatchImport()">Process 4 photos</button><button class="btn wide" onclick="importConfidence='high';go('B-06')">Review first item only</button></div>`,
    { active: "closet", noNav: true },
  );
}
function batchImportReview() {
  const ready = batchUncertainResolved ? 3 : 2;
  return shell(
    "Batch review",
    `<div class="between"><span><p class="eyebrow">Batch complete</p><h2 class="title">4 photos processed</h2></span><span class="pill gold">${ready} ready</span></div>${approvalCard(`${ready} items ready to add`, "Automatic crop, cleanup, classification, and duplicate checks are complete.")}<div class="batch-summary"><div class="pack-row"><img src="${assets.blazer}" alt="Black tailored blazer"><span><b>Black tailored blazer</b><small class="body" style="display:block">Ready · Outerwear</small></span><span class="success-badge">Ready</span></div><div class="pack-row"><img src="${assets.top}" alt="Ivory silk shell"><span><b>Ivory silk shell</b><small class="body" style="display:block">Ready · Tops</small></span><span class="success-badge">Ready</span></div>${batchUncertainResolved ? `<div class="pack-row"><img src="${assets.shoes}" alt="Tan suede loafers"><span><b>Tan suede loafers</b><small class="body" style="display:block">Resolved · Shoes</small></span><span class="success-badge">Ready</span></div>` : `<div class="pack-row"><img src="${assets.shoes}" alt="Uncertain footwear"><span><b>One item needs you</b><small class="body" style="display:block">Brand and category conflict</small></span><button class="btn small-btn" onclick="reviewUncertainImport()">Review once</button></div>`}<div class="pack-row"><img src="${assets.bottom}" alt="Duplicate trousers"><span><b>Duplicate skipped</b><small class="body" style="display:block">Matches Black straight trousers already in Closet</small></span><span class="pill">Skipped</span></div></div><button class="btn primary wide" style="margin-top:14px" onclick="go('B-11')">Add ${ready} ready items</button>`,
    { active: "closet", noNav: true },
  );
}
function batchImportSuccess() {
  const added = batchUncertainResolved ? 3 : 2;
  return shell(
    "Added",
    `<section class="closet-success"><div class="success-icon-wrap"><span>${icon("check")}</span></div><p class="success-kicker">${icon("check")} Batch complete</p><h2>${added} items added</h2><p class="body">One duplicate was skipped safely. Your new pieces are ready to style.</p><div class="row" style="margin-top:22px">${[assets.blazer, assets.top, ...(batchUncertainResolved ? [assets.shoes] : [])].map((image, index) => `<img style="width:64px;height:72px;object-fit:contain;border-radius:12px;background:var(--canvas)" src="${image}" alt="Added item ${index + 1}">`).join("")}</div><button class="btn primary wide success-action" onclick="commitBatchImport()">View updated Closet</button></section>`,
    { active: "closet" },
  );
}
function commitBatchImport() {
  const added = batchUncertainResolved ? 3 : 2;
  closetState.size = batchImportStartSize + added;
  batchImportActive = false;
  go("C-01");
  toast(`${added} items added to Closet`);
}
function decorateBatchImport() {
  if (currentId === "B-06" && batchImportActive && importConfidence === "low") {
    const button = [...app.querySelectorAll("button")].find((item) =>
      item.textContent.includes("Confirm 2 details"),
    );
    if (button)
      button.onclick = () => {
        batchUncertainResolved = true;
        importConfidence = "high";
        go("B-10");
      };
  }
}
function reviewUncertainImport() {
  importConfidence = "low";
  go("B-06");
}
function confidenceImportReview() {
  const uncertain = importConfidence === "low";
  return shell(
    "Review item",
    `<img class="hero-img" src="${assets.blazer}" alt="Black tailored blazer"><div class="stack" style="margin-top:14px">${approvalCard(uncertain ? "Two details need you" : "Processed automatically", uncertain ? "The photo is usable, but brand and category conflict. Confirm both here once." : "Prototype preview: crop, isolation, image balance, category, and brand are high confidence.")} ${uncertain ? `<div class="card"><div class="field"><label for="uncertain-brand">Brand</label><select id="uncertain-brand" class="input"><option>Balmain</option><option>Unknown</option></select></div><div class="field" style="margin-top:10px"><label for="uncertain-category">Category</label><select id="uncertain-category" class="input"><option>Outerwear</option><option>Dresses & Suits</option></select></div></div><button class="btn primary wide" onclick="go('B-11')">Confirm 2 details & add</button>` : `<button class="btn primary wide" onclick="go('B-11')">Looks right · Add</button><details class="card progressive-card"><summary><b>Edit details</b><span class="small">Only if something is wrong</span></summary><div class="inline-edit-grid" style="margin-top:12px">${inlineEditRow("Item name", "Black tailored blazer")}${inlineEditRow("Brand", "Balmain")}${inlineEditRow("Category", "Outerwear")}</div></details><details class="card progressive-card"><summary><b>What StyleIQ prepared</b><span class="small">Crop · background · metadata</span></summary><p class="body" style="margin-top:10px">Garment isolated, image normalized, category classified as Outerwear, and brand matched to Balmain.</p></details>`}</div>`,
    { noNav: true },
  );
}
function emptyState(s) {
  const map = {
    "A-11": [
      "Start with just one piece.",
      "A photo is enough to begin.",
      "Add first item",
      "B-01",
      assets.blazer,
      "One piece, many Looks",
    ],
    "A-12": [
      "Make every piece usable.",
      "We turn a photo into a clean Closet item.",
      "See how it works",
      "B-03",
      assets.top,
      "Photo to Closet",
    ],
    "A-13": [
      "Your Closet starts here.",
      "Add one piece. StyleIQ will show what it can become.",
      "Add to Closet",
      "B-01",
      assets.blazer,
      "Your first piece",
    ],
    "A-14": [
      "Keep the Looks worth repeating.",
      "Save the full outfit and return to it anytime.",
      "Create a Look",
      "F-01",
      assets.look,
      "A Look to return to",
    ],
    "A-15": [
      "See the trip before you pack.",
      "Build destination-ready Looks around what you own.",
      "Plan a Trip",
      "J-02",
      assets.look4,
      "Pack visually",
    ],
    "D-01": [
      "Start with one piece.",
      "Your first Closet photo unlocks outfit ideas.",
      "Add an item",
      "B-01",
      assets.blazer,
      "From photo to outfit",
    ],
  };
  const x = map[s.id] || [
    s.title,
    s.detail,
    "Open details",
    screens[Math.min(screens.indexOf(s) + 1, screens.length - 1)].id,
    assets.look,
    "Visual preview",
  ];
  const imageFirst = ["A-11", "A-12", "A-13", "A-14", "A-15", "D-01"].includes(
    s.id,
  );
  return shell(
    s.title,
    `<div class="empty ${imageFirst ? "image-first-empty" : ""}"><div><div class="empty-art" data-label="${x[5]}"><img src="${x[4]}" alt="${x[5]}"></div><h2 class="title" style="margin-top:24px">${x[0]}</h2><p class="body">${x[1]}</p><button class="btn primary wide" style="margin-top:22px" onclick="go('${x[3]}')">${x[2]}</button></div></div>`,
    {
      noNav: s.section === "A",
      active: s.section === "C" ? "closet" : "home",
      surfaceClass: imageFirst ? "image-first-surface" : "",
    },
  );
}
function importScreen(s) {
  if (s.id === "B-01")
    return shell(
      "Add",
      `<p class="eyebrow">Bring your wardrobe in</p><h2 class="title">Add to StyleIQ</h2><div class="stack">${[
        ["shirt", "Photos", "Choose one or many garment photos", "B-02"],
        [
          "search",
          "Search items",
          "Search by keyword or paste a product URL",
          "B-04",
        ],
        [
          "bag",
          "Forward receipts",
          "Import online purchases from email",
          "B-09",
        ],
      ]
        .map(
          (x) =>
            `<button class="choice" onclick="go('${x[3]}')"><span class="row"><span class="icon-wrap">${icon(x[0])}</span><span><b>${x[1]}</b><small class="body" style="display:block">${x[2]}</small></span></span><span>›</span></button>`,
        )
        .join("")}</div>`,
      { noNav: true },
    );
  if (s.id === "B-04")
    return shell(
      "Search items",
      `<div class="field"><label>Product or URL</label><input class="input" value="black tailored blazer" placeholder="Search or paste product URL"><span class="helper">StyleIQ searches products and infers editable metadata.</span></div><button class="btn primary wide" style="margin-top:14px" onclick="go('B-05')">Search</button><div class="card" style="margin-top:18px"><p class="eyebrow">Also works with</p><p class="body">https://shop.example.com/products/black-blazer</p></div>`,
      { noNav: true },
    );
  if (s.id === "B-05")
    return shell(
      "Search results",
      `<p class="small">18 results for “black tailored blazer”</p><div class="item-grid">${[assets.blazer, "images/screen_23_item.png", "images/screen_23_item_man.png", "images/cat_clothing.png"].map((x, i) => `<button class="item-card" onclick="importConfidence='high';go('B-06')"><img src="${x}" alt="Search result"><span class="copy"><b>${["Tailored blazer", "Single-breasted blazer", "Wool suit jacket", "Relaxed jacket"][i]}</b><small class="body" style="display:block">${["Balmain", "The Row", "Zegna", "COS"][i]}</small></span></button>`).join("")}</div>`,
      { noNav: true },
    );
  if (["B-06", "B-08"].includes(s.id)) return confidenceImportReview();
  if (s.id === "B-07")
    return shell(
      "Photo needs help",
      `<img class="hero-img" src="images/closet.jpeg" alt="Original wardrobe photo that could not be isolated"><div class="card" style="margin-top:14px"><p class="eyebrow">Low-confidence exception</p><h2 class="title">We couldn’t isolate one clear item.</h2><p class="body">Try a photo with one garment in even light, or keep the original and correct the details yourself.</p><div class="stack" style="margin-top:14px"><button class="btn primary wide" onclick="go('B-02')">Choose another photo</button><button class="btn wide" onclick="reviewUncertainImport()">Keep original and review</button></div></div>`,
      { noNav: true },
    );
  if (s.id === "B-09")
    return shell(
      "Forward receipts",
      `<div class="empty"><div><div class="empty-art">${icon("bag")}</div><h2 class="title">Forward shopping receipts</h2><p class="body">Send receipts from your verified shopping address. StyleIQ extracts items into editable drafts.</p><div class="card" style="margin-top:18px"><p class="eyebrow">Your private import address</p><b>add@styleiq.app</b></div><button class="btn primary wide" style="margin-top:14px" onclick="toast('Address copied')">Copy address</button></div></div>`,
      { noNav: true },
    );
  if (s.id === "B-10")
    return shell(
      "Import drafts",
      `<div class="between"><div><p class="eyebrow">Needs review</p><h2 class="title">2 import drafts</h2></div><span class="pill gold">2 unresolved</span></div>${[
        ["Unknown black blazer", assets.blazer],
        ["Receipt item", assets.shoes],
      ]
        .map(
          (x) =>
            `<div class="pack-row"><img src="${x[1]}" alt=""><span><b>${x[0]}</b><small class="body" style="display:block">Important details conflict</small></span><button class="btn small-btn" onclick="reviewUncertainImport()">Review once</button></div>`,
        )
        .join("")}`,
      { active: "closet" },
    );
  if (s.id === "B-11")
    return shell(
      "Added",
      `<section class="closet-success" aria-labelledby="closet-success-title"><div class="success-icon-wrap"><span>${icon("check")}</span></div><p class="success-kicker">${icon("check")} Closet updated</p><h2 id="closet-success-title">Added to your Closet</h2><p class="body">Muse can now build Looks around your newest piece.</p><div class="success-item-card"><img src="${assets.blazer}" alt="Black tailored blazer"><span><b>Black tailored blazer</b><small>Balmain · Outerwear · Ready to style</small></span><span class="success-badge">${icon("check")} Added</span></div><button class="btn primary wide success-action" onclick="go('D-02')">See what changed</button></section>`,
      { active: "closet" },
    );
  return emptyState(s);
}
function outfitPreview() {
  return `<figure class="outfit-preview"><img class="outfit-full" src="${assets.look}" alt="Espresso blazer, ivory silk top, black trousers, oxblood bag, and loafers"><span class="outfit-preview-tag">Office · Cairo</span><span class="outfit-preview-count">1 / 4</span></figure>`;
}
function homeScreen(s) {
  if (s.id === "D-01") return emptyState(s);
  if (s.id === "D-02")
    return shell(
      "Today",
      `<section class="home-greeting"><div><p class="eyebrow">Good morning</p><h2 class="display">Amelia</h2></div><button class="muse-entry" onclick="go('M-01')"><img src="${assets.muse}" alt="Muse"><span>Ask<br>Muse</span></button></section><div class="home-context"><b>28°</b><span>Office</span><span>Light breeze</span></div><section class="daily-look" aria-label="Muse daily recommendation"><img src="${assets.look3}" alt="Tailored espresso, ivory, and black outfit for an office day in Cairo"><span class="daily-look-badge">28° · Office · Cairo</span><button class="daily-look-save" aria-label="Save this Look" onclick="go('E-01')">${icon("heart")}</button><span class="daily-look-count">1 / 3</span></section><div class="closet-strip" aria-label="Pieces in this Look">${[
        ["Blazer", assets.blazer, "Owned"],
        ["Ivory top", assets.top, "Owned"],
        ["Black trousers", assets.bottom, "Owned"],
        ["Oxblood bag", assets.bag, "Suggested"],
      ]
        .map(
          ([name, image, state]) =>
            `<button class="closet-piece" onclick="go('C-02')"><span class="closet-piece-media"><img src="${image}" alt="${name}"><em>${state}</em></span><b>${name}</b><small>${state === "Owned" ? "From your Closet" : "One useful addition"}</small></button>`,
        )
        .join(
          "",
        )}</div><div class="closet-progress"><b>3 / 4 from your Closet</b><button onclick="go('C-01')">View pieces</button></div><div class="home-actions"><button class="btn primary" onclick="go('H-01')">${icon("user")} Try on</button><button class="btn" onclick="go('F-01')">${icon("shirt")} Make it mine</button></div>`,
      { active: "home" },
    );
  if (s.id === "D-03")
    return shell(
      "Today",
      `<div class="stack"><div class="skeleton" style="height:46px;width:65%"></div><div class="skeleton" style="height:280px"></div><p class="body">Considering Cairo weather, your calendar, and your newest Closet piece…</p></div>`,
      { active: "home" },
    );
  if (["D-04", "D-05"].includes(s.id)) return outfitFamilies(s.title);
  if (s.id === "D-06")
    return shell(
      "Complete the look",
      `${outfitPreview()}<div class="card" style="margin-top:14px"><p class="eyebrow">One gap</p><h2 class="title">This outfit needs shoes.</h2><p class="body">No compatible pair is currently in your Closet. Choose an owned pair or review a shopping suggestion.</p><div class="row" style="margin-top:14px"><button class="btn grow" onclick="go('F-07')">Choose from Closet</button><button class="btn grow primary" onclick="go('K-02')">See suggestions</button></div></div>`,
      { active: "home" },
    );
}
function closeOverlay() {
  overlay = null;
  render();
}
function toggleAccountMenu() {
  accountMenuOpen = !accountMenuOpen;
  notificationsOpen = false;
  render();
}
function closeAccountMenu() {
  accountMenuOpen = false;
  render();
}
function closeNotifications() {
  notificationsOpen = false;
  render();
}
function toggleLayer(id) {
  studioRenderNotice = "";
  const item = canvasState.items.find((piece) => piece.id === id);
  if (!item) return;
  item.visible = !item.visible;
  persist();
  render();
}
function setMode(mode) {
  canvasState.mode = mode;
  persist();
  render();
}
function saveLook() {
  persist();
  go("G-02");
  toast("Look saved");
}
function discoverScreen(s) {
  const idx = Number(s.id.slice(2));
  const feed = `<div class="feed">${[assets.look, assets.look2, assets.look3, "images/outfit_dinner_classic.png", "images/outfit_creative_tonal.png", "images/outfit_neutral_minimal.png"].map((x, i) => `<button class="feed-card" onclick="go('K-04')"><img src="${x}" alt="Community Look"><p><b>${["Camille", "Noor", "Mara", "Lina", "Yasmin", "Sienna"][i]}</b> · ${["Tailored ease", "Coffee meeting", "Weekend layers", "Dinner", "Tonal story", "Quiet neutrals"][i]}</p></button>`).join("")}</div>`;
  if (idx === 1)
    return shell(
      "Discover",
      `<div class="field"><input class="input" placeholder="People, products, Looks, brands…"></div><div class="chips" style="margin:12px 0"><button class="chip active">For You</button><button class="chip">Top This Week</button><button class="chip">COS</button><button class="chip">Toteme</button></div>${feed}`,
      { active: "discover" },
    );
  if (idx === 2)
    return shell(
      "Search",
      `<input class="input" value="tailored neutrals"><div class="chips" style="margin:12px 0">${["Looks", "People", "Products", "Brands"].map((x, i) => `<button class="chip ${i === 0 ? "active" : ""}">${x}</button>`).join("")}</div>${feed}`,
      { active: "discover" },
    );
  if (idx === 3)
    return shell(
      "Discover filters",
      `<h2 class="title">Shape your feed</h2><div class="choice-list">${["For You", "Top This Week", "Following", "COS", "Toteme", "Loro Piana"].map((x, i) => `<button class="choice ${i === 0 ? "selected" : ""}"><b>${x}</b>${i === 0 ? icon("check") : ""}</button>`).join("")}</div>`,
      { active: "discover" },
    );
  if (idx === 4)
    return shell(
      "Look",
      `<div class="row"><img src="images/profile_woman.png" class="thumb" style="width:44px;height:44px;border-radius:50%" alt=""><span class="grow"><b>Camille Laurent</b><small class="body" style="display:block">Paris, FR</small></span><button class="btn small-btn">Follow</button></div><img class="hero-img" style="height:350px;margin-top:12px" src="${assets.look}" alt="Community Look"><div class="between" style="margin-top:12px"><span class="row">${icon("heart")} 1.1k · 18 comments</span><button class="btn small-btn" onclick="go('K-05')">Try on me</button></div>`,
      { active: "discover" },
    );
  if (idx === 5) return canonicalTwinIntro();
  if (idx === 6)
    return shell(
      "Restyle",
      `${outfitPreview()}<div class="card" style="margin-top:12px"><h2 class="title">Make it yours.</h2><p class="body">Copy the structure into a private draft, then replace every piece.</p><button class="btn primary wide" style="margin-top:14px" onclick="go('F-01')">Open editable draft</button></div>`,
      { active: "discover" },
    );
  if (idx === 7)
    return shell(
      "Community actions",
      `<div class="choice-list">${["Follow Camille", "Like this Look", "Write a comment", "Send privately"].map((x) => `<button class="choice" onclick="toast('${x} requires explicit confirmation in production')"><b>${x}</b><span>›</span></button>`).join("")}</div>`,
      { active: "discover" },
    );
  return shell(
    "Report Look",
    `<h2 class="title">Why are you reporting this?</h2><div class="choice-list">${["Spam", "Inappropriate content", "Misleading product", "Other"].map((x) => `<button class="choice"><b>${x}</b></button>`).join("")}</div><button class="btn danger wide" style="margin-top:14px">Submit report</button>`,
    { active: "discover" },
  );
}
const styleTwinSettingRoutes = ["H-02", "H-04", "H-05", "H-07", "H-08", "H-09"];
function settingsDetail(title, rows) {
  const routes = title === "Style Twin" ? styleTwinSettingRoutes : [];
  return shell(
    title,
    `<p class="eyebrow">Preferences affect recommendations</p><h2 class="title">${title}</h2><div class="preference-rows">${rows.map((x, i) => (i === rows.length - 1 && /On/.test(x) ? `<div class="select-row"><span class="grow">${x}</span><button type="button" class="toggle on" aria-label="Toggle ${x}" onclick="this.classList.toggle('on')"><span></span></button></div>` : `<button type="button" class="select-row" style="width:100%;border-left:0;border-right:0;border-top:0;background:transparent;text-align:left"${routes[i] ? ` data-route="${routes[i]}" onclick="go('${routes[i]}')" aria-label="Open ${x}"` : ""}><span class="grow">${x}</span><span aria-hidden="true">›</span></button>`)).join("")}</div>`,
    { active: "profile" },
  );
}
function mirrorToday() {
  const look = tryOnLooks[selectedTodayLook];
  return shell(
    "Today",
    `<div class="today-visual-head"><h2>Good morning, Amelia</h2><button class="today-muse-pill" onclick="go('M-01')"><img src="${assets.muse}" alt="Muse"><span>Ask Muse</span></button></div><section class="today-hero" aria-label="Today’s recommended Look"><span class="tryon-frame-preview ${look.reference ? "reference" : ""}" role="img" aria-label="${look.title} full outfit" style="background-image:url('${look.sheet}');background-position:0 ${look.row * 100}%"></span><button class="today-save" aria-label="Save outfit" onclick="openLightweightPanel('save')">${icon("heart")}</button><div class="today-hero-panel"><span>${look.context}</span><h3>${look.title}</h3><span class="today-hero-count">${Object.keys(tryOnLooks).indexOf(look.id) + 1} / 3</span></div></section><div class="today-closet-line"><b>${look.pieces.length} pieces · from your Closet first</b><button onclick="go('C-01')">View Closet</button></div><p class="body" style="margin:8px 0 14px">${look.pieces.map((piece) => piece[1]).join(" · ")}</p><div class="today-actions"><button class="btn primary" onclick="startTryOn()">${icon("user")} Try On</button><button class="btn" onclick="makeLookMine()">${icon("shirt")} Make it mine</button></div><section class="today-more"><div class="today-more-head"><h3>More for today</h3><button onclick="go('D-04')">See all</button></div><div class="today-look-rail">${Object.values(
      tryOnLooks,
    )
      .filter((other) => other.id !== look.id)
      .map(
        (other) =>
          `<button class="today-look-card" onclick="selectTodayLook('${other.id}')"><span class="tryon-frame-preview ${other.reference ? "reference" : ""}" role="img" aria-label="${other.title}" style="background-image:url('${other.sheet}');background-position:0 ${other.row * 100}%"></span><span><b>${other.title}</b><small>${other.reference ? "From your reference" : "Office"}</small></span></button>`,
      )
      .join("")}</div></section>`,
    { active: "home", surfaceClass: "image-first-surface" },
  );
}
function mirrorPlanner() {
  const days = [
    ["M", "12"],
    ["T", "13"],
    ["W", "14"],
    ["T", "15"],
    ["F", "16"],
    ["S", "17"],
    ["S", "18"],
  ];
  const planned = plannerIntent || {
    title: "Client presentation + drinks",
    time: "10:00 AM → evening",
    dressCode: "Polished, comfortable",
  };
  return shell(
    "Planner",
    `<div class="mirror-week">${days.map(([d, n], i) => `<button class="mirror-day ${i === 2 ? "active" : ""}" onclick="openLightweightPanel('plan')"><span>${d}</span><b>${n}</b><small>${i === 2 ? "●" : "○"}</small></button>`).join("")}</div><section class="planner-intent-card"><p class="eyebrow">Wednesday · 16°C</p><h2 class="title">What are you dressing for?</h2><p class="body">Describe the real day. StyleIQ turns it into timing, context, and one useful Look.</p><button class="btn primary wide" onclick="openLightweightPanel('plan')">${plannerEventCreated ? "Update the day" : "Describe my day"}</button></section>${plannerEventCreated ? `<button class="mirror-plan" onclick="openLightweightPanel('plan')"><img src="${assets.look2}" alt="Planned client presentation and drinks outfit"><span class="mirror-plan-copy"><p class="eyebrow">Interpreted plan</p><h3>${planned.title}</h3><small class="body">${planned.time} · ${planned.dressCode}</small><b style="display:block;margin-top:13px;font-size:9px">Edit context →</b></span></button>` : ""}${
      nextWeekPrepared
        ? `<section style="margin-top:16px"><div class="between"><span><p class="eyebrow">Prepared from your recap</p><h3 class="title">Next week</h3></span><button class="text-action" onclick="go('I-02')">Review recap</button></div><div class="planner-prepared">${[
            [assets.look3, "Monday", "Office"],
            [assets.look, "Wednesday", "Client review"],
            [assets.look2, "Friday", "Dinner"],
          ]
            .map(
              ([image, day, context]) =>
                `<button onclick="openLightweightPanel('plan')"><img src="${image}" alt="${day} ${context} Look"><b>${day}</b><small>${context}</small></button>`,
            )
            .join("")}</div></section>`
        : ""
    }<button class="mirror-plan" onclick="go('J-01')"><img src="${assets.look4}" alt="Travel wardrobe"><span class="mirror-plan-copy"><p class="eyebrow">Travel</p><h3>Alexandria · 3 days</h3><small class="body">Packing Plan</small></span></button><button class="btn wide" style="margin-top:12px" onclick="go('I-02')">View weekly style recap</button>`,
    { active: "planner" },
  );
}

function tripStepNav(step) {
  return `<div class="trip-meaningful-steps" aria-label="Trip progress"><span class="${step >= 1 ? "on" : ""}">1 · Describe</span><span class="${step >= 2 ? "on" : ""}">2 · Review</span><span class="${step >= 3 ? "on" : ""}">3 · Use trip</span></div>`;
}
function tripIntentScreen() {
  return shell(
    "Plan a trip",
    `${tripStepNav(1)}<p class="eyebrow">One sentence is enough</p><h2 class="display">Where are you going?</h2><div class="field"><label for="trip-intent">Tell StyleIQ about the trip</label><textarea id="trip-intent" class="textarea">Three days in Alexandria in late August. Carry-on only, with a museum visit and dinner by the Corniche.</textarea><span class="helper">Prototype preview: the interpretation below uses sample trip data and remains editable.</span></div><div class="chips" role="group" aria-label="Trip context" style="margin-top:12px">${["Leisure", "Work", "Carry on", "Dinner"].map((x, i) => `<button class="chip ${i === 0 ? "active" : ""}" aria-pressed="${i === 0}" onclick="selectChip(this)">${x}</button>`).join("")}</div><details class="card progressive-card" style="margin-top:12px"><summary><b>Review interpreted details</b><span class="small">Optional edit</span></summary><div class="trip-context-summary"><div><b>Alexandria</b><small>Destination</small></div><div><b>Aug 23–25</b><small>3 days</small></div><div><b>Carry on</b><small>Luggage</small></div><div><b>Museum + dinner</b><small>Activities</small></div><div class="row" style="grid-column:1/-1"><input class="input" aria-label="Trip start date" value="Aug 23"><input class="input" aria-label="Trip end date" value="Aug 25"></div></div></details><button class="btn" style="margin-top:12px" onclick="toast('Trip details structured below')">Structure my trip</button><button class="btn primary wide" style="margin-top:8px" onclick="tripState.created=true;persistTrip();go('J-08')">Build packing & Looks</button>`,
    { active: "profile" },
  );
}
function tripHub(tab = "packing") {
  const packing = tab === "packing",
    items = [
      ["Black blazer", assets.blazer],
      ["Silk shell", assets.top],
      ["Leather loafers", assets.shoes],
    ];
  return shell(
    "Alexandria",
    `${tripStepNav(3)}<div class="between"><span><p class="eyebrow">Aug 23–25 · Carry on</p><h2 class="title">Your trip is ready</h2></span><span class="pill green">Saved</span></div><p class="body">12 pieces and 3 daily Looks were prepared from your description.</p><div class="trip-tabs"><button class="${packing ? "active" : ""}" onclick="go('J-08')">Packing</button><button class="${packing ? "" : "active"}" onclick="go('J-10')">Outfits</button></div>${
      packing
        ? `${items.map(([name, image]) => `<button class="pack-row trip-item-action" onclick="toggleTripItem('${name}')"><img src="${image}" alt="${name}"><span><b>${name}</b><small class="body" style="display:block">From Closet</small></span><span class="pill ${tripState.packed[name] ? "green" : ""}">${tripState.packed[name] ? "Packed" : "Pack"}</span></button>`).join("")}<button class="btn wide" style="margin-top:12px" onclick="go('J-09')">Edit packing list</button>`
        : `<div class="planner-prepared">${[
            [assets.look, "Aug 23", "Arrival"],
            [assets.look3, "Aug 24", "Museum"],
            [assets.look2, "Aug 25", "Dinner"],
          ]
            .map(
              ([image, day, context]) =>
                `<button onclick="openLightweightPanel('tripLook')"><img src="${image}" alt="${day} ${context} trip Look"><b>${day}</b><small>${context}</small></button>`,
            )
            .join(
              "",
            )}</div><button class="btn wide" style="margin-top:12px" onclick="openLightweightPanel('tripLook')">Add or replace a Look</button>`
    }<details class="card progressive-card" style="margin-top:12px"><summary><b>Trip details</b><span class="small">Edit advanced context</span></summary><div class="trip-context-summary"><div><b>Alexandria</b><small>Destination</small></div><div><b>Carry on</b><small>Luggage</small></div><div><b>Black blazer</b><small>Must-have</small></div><div><b>Museum + dinner</b><small>Activities</small></div></div></details>`,
    { active: "profile" },
  );
}

function prepareNextWeek() {
  nextWeekPrepared = true;
  plannerEventCreated = true;
  localStorage.setItem("styleiqNextWeekPreparedV1", "true");
  if (!plannerIntent) {
    plannerIntent = {
      note: "Office Monday, client review Wednesday, dinner Friday",
      title: "Three Looks prepared",
      time: "Next week",
      occasion: "Office and social",
      dressCode: "Flexible tailoring",
      look: "Three Looks",
    };
    localStorage.setItem(
      "styleiqPlannerIntentV1",
      JSON.stringify(plannerIntent),
    );
  }
  go("I-01");
  toast("3 Looks added to next week");
}
function weeklyRecap() {
  return shell(
    "Weekly recap",
    `<div class="weekly-recap-hero"><img src="${assets.look3}" alt="Favorite outfit worn this week"><span><p class="eyebrow">Aug 10–16 · sample recap</p><h2>Your wardrobe worked harder.</h2></span></div><div class="recap-metrics" aria-label="Weekly wardrobe metrics"><button class="recap-metric" onclick="go('G-01')"><b>5</b><small>outfits worn</small></button><button class="recap-metric" onclick="go('C-01')"><b>14</b><small>Closet pieces used</small></button><button class="recap-metric" onclick="go('C-02')"><b>2</b><small>underused pieces rediscovered</small></button><button class="recap-metric" onclick="go('C-02')"><b>3×</b><small>most worn · black blazer</small></button></div><section class="recap-combination"><img src="${assets.look}" alt="New blazer and silk shell combination"><span><p class="eyebrow">Useful new combination</p><h3 class="title">Blazer + silk shell</h3><p class="body">You wore this pairing twice across work and dinner without buying another layer.</p></span></section><section class="planner-intent-card"><p class="eyebrow">Next week · 3 known plans</p><h2 class="title">Looks are ready to prepare.</h2><p class="body">Office Monday, client review Wednesday, and dinner Friday—using pieces you already own.</p><button class="btn primary wide" onclick="prepareNextWeek()">${nextWeekPrepared ? "Review next week’s Looks" : "Prepare next week’s Looks"}</button></section><p class="helper" style="margin-top:12px">Recap behavior is a prototype using canonical sample Looks and Closet wear data.</p>`,
    { active: "planner" },
  );
}
function calendarShare() {
  return shell(
    "Share calendar",
    `<div class="card"><h2 class="title">Share selected plans only.</h2><p class="body">Your Closet, private photos, notes, and unselected dates stay private.</p><button class="btn primary wide" style="margin-top:15px" onclick="toast('Private calendar link created')">Create calendar link</button></div>`,
    { active: "planner" },
  );
}
function tripsList() {
  if (!tripState.created)
    return shell(
      "Trips",
      `<div class="empty"><div><img class="trip-empty-visual" src="${assets.look4}" alt="Editorial travel Look for Alexandria"><p class="eyebrow">Travel wardrobe</p><h2 class="title">Plan what to pack and wear.</h2><p class="body">Build one edited packing list and a Look for each day.</p><button class="btn primary wide" style="margin-top:18px" onclick="go('J-02')">Plan a trip</button></div></div>`,
      { active: "profile" },
    );
  return shell(
    "Trips",
    `<div class="between"><div><p class="eyebrow">Your trips</p><h2 class="title">Upcoming</h2></div><button class="icon-btn" aria-label="Plan another trip" onclick="resetTrip()">${icon("plus")}</button></div><button class="item-card" style="width:100%;margin-top:14px;text-align:left" onclick="go('J-14')"><img src="${assets.look4}" style="height:220px" alt="Alexandria trip"><span class="copy"><span class="between"><span><b>Alexandria</b><small class="body" style="display:block">Aug 23–25 · 12 pieces · ${tripState.looks.length} Looks</small></span><span class="pill green">Ready</span></span></span></button>`,
    { active: "profile" },
  );
}
function decorateWeeklyRecapEntry() {
  const content = app.querySelector(".content");
  if (!content) return;
  if (currentId === "C-01" && closetState.size > 0) {
    content
      .querySelector(".closet-toolbar")
      ?.insertAdjacentHTML(
        "beforebegin",
        `<button class="weekly-recap-hero" style="width:100%;height:128px;margin:10px 0 12px;border:0;padding:0" onclick="go('D-04')"><img src="${assets.look}" alt="Soft tailoring inspiration" style="object-position:center 42%"><span style="left:9px;right:auto;bottom:9px;padding:7px 9px"><b style="font-size:9px">Style what you own</b></span></button>`,
      );
    return;
  }
  if (currentId === "I-01" && !plannerEventCreated) {
    content
      .querySelector(".planner-intent-card")
      ?.insertAdjacentHTML(
        "afterend",
        `<button class="mirror-plan" onclick="openLightweightPanel('plan')"><img src="${assets.look}" alt="Open outfit slot"><span class="mirror-plan-copy"><p class="eyebrow">Look needed</p><h3>Wednesday</h3><small class="body">16°C · Tell us what the day holds</small><b style="display:block;margin-top:13px;font-size:9px">Plan from intent →</b></span></button>`,
      );
    return;
  }
  if (currentId !== "L-01") return;
  content.insertAdjacentHTML(
    "beforeend",
    `<button class="signal-card" style="width:100%;margin-top:12px" onclick="go('I-02')"><img src="${assets.look3}" alt="Weekly style recap" style="width:58px;height:68px;border-radius:12px;object-fit:cover"><span class="grow"><p class="eyebrow">Your week in clothes</p><b>5 outfits · 14 pieces used</b><small class="body" style="display:block">See what worked and prepare next week.</small></span><span>›</span></button>`,
  );
}
function mirrorDiscover() {
  return shell(
    "Discover",
    `<button class="mirror-search" onclick="go('K-02')">${icon("search")} Search outfits, Creators, or pieces</button><div class="mirror-filters">${["All", "Work", "Weekend", "Dinner", "Travel"].map((x, i) => `<button class="mirror-filter ${i === 0 ? "active" : ""}">${x}</button>`).join("")}</div><section class="mirror-section"><div class="mirror-section-head"><span><p class="eyebrow">For you</p><h3>Outfits for you</h3></span><small class="body">Outfits first</small></div><article class="mirror-feed-card" role="button" tabindex="0" onclick="go('K-04')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();go('K-04')}"><img src="${assets.look3}" alt="Coffee meeting outfit"><button class="mirror-save" aria-label="Save outfit" onclick="event.stopPropagation()">${icon("bookmark")}</button><div class="mirror-feed-card-copy"><b>Work · Coffee Meeting</b><small class="body" style="display:block">Toteme · COS · Theory · Vagabond</small></div></article><div class="mirror-outfit-rail"><button class="mirror-outfit-card" onclick="go('K-04')"><img src="${assets.look}" alt="Soft tailoring"><span><small>Creator</small><b>Soft tailoring</b></span></button><button class="mirror-outfit-card" onclick="go('K-04')"><img src="${assets.look2}" alt="Dinner look"><span><small>Editorial</small><b>Modern dinner</b></span></button></div></section>`,
    { active: "discover" },
  );
}
function mirrorProfile() {
  return shell(
    "My Atelier",
    `<header class="mirror-profile-head"><img src="${assets.profile}" alt="Amelia Hart"><span><p class="eyebrow">My Style Profile</p><h2>Amelia Hart</h2><small class="body">Relaxed tailoring · warm neutrals</small></span><button class="mirror-circle-action" onclick="go('M-01')" aria-label="Ask Muse">${icon("spark")}</button></header><section class="mirror-section"><div class="mirror-section-head"><span><p class="eyebrow">My Looks</p><h3>Outfits I return to</h3></span><button onclick="go('G-01')">View All</button></div><div class="mirror-outfit-rail"><button class="mirror-outfit-card" onclick="go('G-02')"><img src="${assets.look}" alt="Work outfit"><span><small>Work</small><b>Saved</b></span></button><button class="mirror-outfit-card" onclick="go('G-02')"><img src="${assets.look2}" alt="Dinner outfit"><span><small>Dinner</small><b>Worn Tue</b></span></button><button class="mirror-outfit-card" onclick="go('J-14')"><img src="${assets.look4}" alt="Weekend outfit"><span><small>Weekend</small><b>Planned</b></span></button></div></section><section class="mirror-profile-preview"><p class="eyebrow">My Closet</p><h3 class="title" style="font-size:20px">Start with what you own</h3><div class="profile-closet-row"><img src="${assets.blazer}" alt="Camel blazer"><span><b>Camel blazer</b><small class="body" style="display:block">1 owned piece</small></span><button class="btn small-btn" onclick="go('D-04')">Style</button></div></section><div class="profile-utility-grid"><button class="profile-utility" onclick="setClosetTab('wishlist')"><img src="${assets.shoes}" alt="Wishlist"><b>Wishlist</b><small>Pieces under review</small></button><button class="profile-utility" onclick="go('H-01')"><img src="${assets.profile}" alt="Style Twin"><b>Style Twin</b><small>Optional private try-on</small></button></div>`,
    { active: "profile" },
  );
}
let twinSetup = (() => {
  try {
    return (
      JSON.parse(localStorage.getItem("styleiqTwinSetupV2")) || {
        method: "photo",
        step: 1,
        complete: false,
      }
    );
  } catch {
    return { method: "photo", step: 1, complete: false };
  }
})();

// Look formula + renderer manifest. Production renderers can supply per-Twin assets here.
const tryOnLooks = {
  coffee: {
    id: "coffee",
    title: "Coffee Meeting",
    context: "18°C · Office · Rain later",
    sheet: "images/tryon-tailoring-views.png",
    row: 0,
    pieces: [
      ["Outerwear", "Black tailored blazer", assets.blazer],
      ["Top", "Ivory silk shell", assets.top],
      ["Bottom", "Black straight trousers", assets.bottom],
      ["Shoes", "Tan suede loafers", assets.shoes],
    ],
  },
  tailoring: {
    id: "tailoring",
    title: "Soft Tailoring",
    context: "18°C · Office",
    sheet: "images/tryon-tailoring-views.png",
    row: 1,
    pieces: [
      ["Outerwear", "Camel blazer", assets.blazer],
      ["Top", "Ivory silk shell", assets.top],
      ["Bottom", "Cream wide-leg trousers", assets.bottom],
      ["Shoes", "Tan pointed flats", assets.shoes],
    ],
  },
  evening: {
    id: "evening",
    title: "Asymmetric Black Dress",
    context: "Evening · Client reference",
    sheet: "images/tryon-reference-dress-views.png",
    row: 0,
    reference: true,
    pieces: [
      ["Dress", "Washed black asymmetric mini dress", null],
      ["Shoes", "Black knee-high heeled boots", null],
    ],
  },
};
function readTryOnState(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return null;
  }
}
let selectedTodayLook = localStorage.getItem("styleiqTodayLookV1") || "coffee";
if (!tryOnLooks[selectedTodayLook]) selectedTodayLook = "coffee";
let pendingTryOn = readTryOnState("styleiqPendingTryOnV1"),
  tryOnSession = readTryOnState("styleiqTryOnResultV1");
if (pendingTryOn?.intent !== "tryOn" || !tryOnLooks[pendingTryOn?.lookId])
  pendingTryOn = null;
if (!tryOnLooks[tryOnSession?.lookId]) tryOnSession = null;
const tryOnAngles = ["Front", "3/4", "Side", "Back"];
function selectTodayLook(id) {
  if (!tryOnLooks[id]) return;
  selectedTodayLook = id;
  localStorage.setItem("styleiqTodayLookV1", id);
  render();
  app
    .querySelector(".today-hero")
    ?.scrollIntoView({ block: "start", behavior: "instant" });
}
function clearPendingTryOn() {
  pendingTryOn = null;
  localStorage.removeItem("styleiqPendingTryOnV1");
}
function startTryOn(id = selectedTodayLook) {
  const look = tryOnLooks[id];
  if (!look) return;
  pendingTryOn = {
    intent: "tryOn",
    lookId: id,
    origin: currentId,
    returnTo: currentId,
    selectedLook: JSON.parse(JSON.stringify(look)),
  };
  localStorage.setItem("styleiqPendingTryOnV1", JSON.stringify(pendingTryOn));
  if (twinSetup.complete) resumeTryOn();
  else go("H-01");
}
function resumeTryOn() {
  if (!pendingTryOn || !twinSetup.complete) return;
  if (!twinSetup.id) {
    twinSetup.id = "twin-" + Date.now();
    persistTwin();
  }
  tryOnSession = {
    ...pendingTryOn,
    twinId: twinSetup.id,
    angle: 0,
    background: "neutral",
    renderer: "prepared-views",
  };
  localStorage.setItem("styleiqTryOnResultV1", JSON.stringify(tryOnSession));
  clearPendingTryOn();
  navHistory = navHistory.filter((id) => !id.startsWith("H-"));
  go("E-06", { record: false });
}
function completeTwinSetup() {
  twinSetup.step = 4;
  twinSetup.complete = true;
  persistTwin();
  if (pendingTryOn) resumeTryOn();
  else go("H-10");
}
function leaveTryOn() {
  const target = tryOnSession?.returnTo || "D-02";
  if (tryOnSession?.origin === "D-02") {
    selectedTodayLook = tryOnSession.lookId;
    localStorage.setItem("styleiqTodayLookV1", selectedTodayLook);
  }
  navHistory = navHistory.filter((id) => !id.startsWith("H-") && id !== "E-06");
  go(target, { record: false });
}
function tryAnotherLook() {
  leaveTryOn();
  app
    .querySelector(".today-more")
    ?.scrollIntoView({ block: "start", behavior: "instant" });
}
function setTryOnAngle(index) {
  if (!tryOnSession) return;
  tryOnSession.angle = (index + 4) % 4;
  localStorage.setItem("styleiqTryOnResultV1", JSON.stringify(tryOnSession));
  const frame = app.querySelector(".tryon-frame"),
    look = tryOnSession.selectedLook;
  if (frame) {
    frame.style.backgroundPosition = `${(tryOnSession.angle * 100) / 3}% ${look.row * 100}%`;
    frame.setAttribute(
      "aria-label",
      `${look.title} on your Style Twin — ${tryOnAngles[tryOnSession.angle]} view`,
    );
  }
  const status = app.querySelector("#tryon-angle-status");
  if (status)
    status.textContent = `${tryOnAngles[tryOnSession.angle]} view · ${tryOnSession.angle + 1} / 4`;
}
function installTryOnGestures() {
  const stage = app.querySelector(".tryon-stage");
  if (!stage) return;
  let start = null;
  stage.addEventListener("pointerdown", (event) => {
    if (event.target.closest("button")) return;
    start = { x: event.clientX, y: event.clientY };
    stage.setPointerCapture(event.pointerId);
  });
  stage.addEventListener("pointerup", (event) => {
    if (!start) return;
    const dx = event.clientX - start.x,
      dy = event.clientY - start.y;
    start = null;
    if (Math.abs(dx) > 35 && Math.abs(dx) > Math.abs(dy))
      setTryOnAngle(tryOnSession.angle + (dx < 0 ? 1 : -1));
  });
  stage.addEventListener("pointercancel", () => (start = null));
  stage.addEventListener("keydown", (event) => {
    if (["ArrowLeft", "ArrowRight"].includes(event.key)) {
      event.preventDefault();
      event.stopPropagation();
      setTryOnAngle(tryOnSession.angle + (event.key === "ArrowRight" ? 1 : -1));
    }
  });
}
function makeLookMine(look = tryOnLooks[selectedTodayLook]) {
  canvasState.title = look.title;
  canvasState.creationSource = "inspiration_recreated";
  canvasState.mode = "flat";
  canvasState.studioMode = "simple";
  canvasState.sourceLookId = look.id;
  canvasState.lookFormula = JSON.parse(JSON.stringify(look));
  canvasState.items = look.pieces.map(([role, name, image], i) => {
    const owned = closetItems().find(
      (item) =>
        item.name.toLowerCase() === name.toLowerCase() &&
        item.lifecycle === "Keep" &&
        item.status === "Available",
    );
    return {
      id: `${look.id}-${i}`,
      role,
      name: owned?.name || name,
      image: owned?.image || image || assets.look2,
      owned: !!owned,
      visible: true,
      index: 0,
      brand: owned?.brand || "Look reference",
      matched: !!owned,
    };
  });
  canvasState.history = [];
  persist();
  go("F-01");
}
function tryOnResult() {
  // Inventory deep links preview the same renderer without completing or restarting setup.
  if (!tryOnSession) {
    const look = tryOnLooks[selectedTodayLook];
    tryOnSession = {
      intent: "tryOn",
      lookId: look.id,
      selectedLook: JSON.parse(JSON.stringify(look)),
      origin: "D-02",
      returnTo: "D-02",
      twinId: twinSetup.id || null,
      preview: !twinSetup.complete,
      angle: 0,
      background: "neutral",
      renderer: "prepared-views",
    };
  }
  const look = tryOnSession.selectedLook,
    angle = tryOnSession.angle || 0;
  return `<section class="screen tryon-screen"><header class="tryon-head"><button class="icon-btn" aria-label="Back to selected Look" onclick="leaveTryOn()">${icon("back")}</button><b>Try On</b><span style="width:44px" aria-hidden="true"></span></header><div class="tryon-copy"><p class="eyebrow">On your Style Twin</p><h2>${escapeMarkup(look.title)}</h2><small>${escapeMarkup(look.context)}</small></div><div class="tryon-stage gesture-surface" tabindex="0" role="group" aria-label="Inspect your dressed Style Twin. Swipe or use left and right arrow keys."><div class="tryon-frame ${look.reference ? "reference" : ""}" role="img" aria-label="${escapeMarkup(look.title)} on your Style Twin — ${tryOnAngles[angle]} view" style="background-image:url('${look.sheet}');background-position:${(angle * 100) / 3}% ${look.row * 100}%"></div><button class="tryon-arrow previous" aria-label="Previous view" onclick="setTryOnAngle(tryOnSession.angle-1)">${icon("chevron-left")}</button><button class="tryon-arrow next" aria-label="Next view" onclick="setTryOnAngle(tryOnSession.angle+1)">${icon("chevron-right")}</button></div><p class="tryon-hint"><span id="tryon-angle-status" aria-live="polite">${tryOnAngles[angle]} view · ${angle + 1} / 4</span> · Swipe to explore</p><footer class="tryon-footer"><button class="btn primary wide" onclick="makeLookMine(tryOnSession.selectedLook)">Make it mine</button><button class="btn wide" onclick="tryAnotherLook()">Try another Look</button><details><summary>${look.pieces.length} pieces in this Look</summary><ul>${look.pieces.map((piece) => `<li>${escapeMarkup(piece[1])}</li>`).join("")}</ul></details><small class="small">Prepared prototype views · Neutral studio</small></footer></section>`;
}

function twinDemoControls() {
  return `<fieldset class="twin-demo-controls"><legend>Style Twin · customer scenario</legend><div class="twin-demo-options" role="group" aria-label="Customer scenario"><button aria-pressed="${!twinSetup.complete}" onclick="setTwinCustomerScenario('new')"><b>New customer</b><small>No Style Twin yet</small></button><button aria-pressed="${!!twinSetup.complete}" onclick="setTwinCustomerScenario('existing')"><b>Existing customer</b><small>Style Twin ready</small></button></div><p>Preview controls: Profile opens ${twinSetup.complete ? "your existing Twin. Today → Try On opens the result directly." : "Twin setup. Today → Try On resumes after setup."}</p></fieldset>`;
}
function setTwinCustomerScenario(scenario) {
  if (!["new", "existing"].includes(scenario)) return;
  if (twinSetup.complete)
    localStorage.setItem(
      "styleiqCompletedTwinDemoV1",
      JSON.stringify(twinSetup),
    );
  if (scenario === "new")
    twinSetup = { method: "photo", step: 1, complete: false };
  else {
    const saved = readTryOnState("styleiqCompletedTwinDemoV1");
    twinSetup = saved?.complete
      ? saved
      : { id: "demo-existing-twin", method: "photo", step: 4, complete: true };
  }
  persistTwin();
  clearPendingTryOn();
  tryOnSession = null;
  localStorage.removeItem("styleiqTryOnResultV1");
  navHistory = navHistory.filter((id) => !id.startsWith("H-") && id !== "E-06");
  if (
    currentId.startsWith("H-") ||
    ["L-09", "E-05", "E-06"].includes(currentId)
  ) {
    if (currentId === "H-01") render();
    else go("H-01", { record: false });
  } else render();
}
function twinManagement() {
  return shell(
    "Style Twin",
    `<p class="eyebrow">Private · Ready to use</p><h2 class="title">Your Style Twin</h2><div class="studio-live-preview"><img src="${assets.body}" alt="Your completed Style Twin, full body" style="display:block;width:100%;height:340px;object-fit:contain"></div><p class="body">Your Style Twin is ready. Try different Looks or refine your Twin without repeating setup.</p><div class="stack" style="margin-top:16px"><button class="btn primary wide" onclick="go('D-02')">Try a Look</button><button class="btn wide" onclick="go('H-07')">Refine Style Twin</button><button class="btn wide" onclick="canvasState.mode='avatar';persist();go('F-01')">Use in Studio</button><button class="text-action" onclick="go('L-01')">Back to Profile</button></div>`,
    { active: "profile", noNav: true },
  );
}
function persistTwin() {
  localStorage.setItem("styleiqTwinSetupV2", JSON.stringify(twinSetup));
}
function startTwinSetup(method) {
  twinSetup = { method, step: 2, complete: false };
  persistTwin();
  go(method === "photo" ? "H-02" : "H-05");
}
function twinStepBar(step) {
  return `<div class="twin-step-bar" aria-label="Style Twin setup progress"><span class="${step >= 1 ? "on" : ""}">1 · Method</span><span class="${step >= 2 ? "on" : ""}">2 · Reference</span><span class="${step >= 3 ? "on" : ""}">3 · Details</span><span class="${step >= 4 ? "on" : ""}">4 · Result</span></div>`;
}
function canonicalTwinIntro() {
  if (twinSetup.complete) return twinManagement();
  return shell(
    "Style Twin",
    `${twinStepBar(1)}<div class="mirror-upload-intro"><p class="eyebrow">Optional private visualization</p><h2>Create your Style Twin</h2><p class="body">Choose one setup method. The first preview takes four meaningful steps; fine-tuning comes later.</p></div><div class="mirror-twin-hero"><img src="${assets.profile}" alt="Style Twin preview in warm natural light"><span>Private by default</span></div><div class="mirror-twin-choices"><button class="mirror-twin-choice" onclick="startTwinSetup('photo')"><i>${icon("camera")}</i><span><b>Use my photos</b><small>Add face and body references together.</small></span>›</button><button class="mirror-twin-choice" onclick="startTwinSetup('manual')"><i>${icon("user")}</i><span><b>Create without personal photos</b><small>Use measurements and a basic avatar reference.</small></span>›</button><button class="mirror-twin-choice" onclick="go('L-01')"><i>${icon("back")}</i><span><b>Skip for now</b><small>Try On remains available whenever you return.</small></span>›</button></div>`,
    { active: "profile", noNav: true },
  );
}
function twinReference(method = twinSetup.method) {
  const photo = method === "photo";
  return shell(
    "Visual reference",
    `${twinStepBar(2)}<div class="mirror-upload-intro"><p class="eyebrow">Style Twin · reference</p><h2>${photo ? "Add face + body references" : "Set a basic avatar reference"}</h2><p class="body">${photo ? "One clear portrait and one full-body photo are enough for the first prototype preview." : "Measurements and a neutral starting reference replace personal photos."}</p></div>${photo ? `<div class="twin-reference-pair"><button class="mirror-upload-guide"><img src="${assets.face}" alt="Face photo guide"><span>Face photo · ready</span></button><button class="mirror-upload-guide"><img src="${assets.body}" alt="Body photo guide"><span>Body photo · ready</span></button></div><p class="helper">Photos remain private. Upload and image understanding are simulated in this prototype.</p>` : `<figure class="twin-editorial-visual"><img src="${assets.body}" alt="Basic no-photo Style Twin reference"><figcaption>No personal photos</figcaption></figure><div class="row" style="margin-top:12px"><div class="field grow"><label for="twin-height">Height</label><input id="twin-height" class="input" value="168 cm"></div><div class="field grow"><label for="twin-build">Build</label><select id="twin-build" class="input"><option>Average</option><option>Petite</option><option>Tall</option></select></div></div>`}<button class="btn primary wide" style="margin-top:16px" onclick="twinSetup.step=3;persistTwin();go('H-06')">Use this reference</button>`,
    { active: "profile", noNav: true },
  );
}
function twinBasicDetails() {
  return shell(
    "Basic details",
    `${twinStepBar(3)}<p class="eyebrow">Only what the first preview needs</p><h2 class="title">Confirm the basics</h2><div class="stack" style="margin-top:16px"><div class="field"><label for="twin-fit">Fit reference</label><select id="twin-fit" class="input"><option>Regular</option><option>Relaxed</option><option>Fitted</option></select></div><div class="field"><label for="twin-height-detail">Height</label><input id="twin-height-detail" class="input" value="168 cm"></div><div class="field"><label for="twin-note">One optional note</label><input id="twin-note" class="input" placeholder="Long torso, prefer relaxed proportions…"></div></div><p class="helper" style="margin-top:12px">Pose, tuck, hair, skin tone, and appearance fine-tuning move to Refine Style Twin after the first result.</p><button class="btn primary wide" style="margin-top:16px" onclick="completeTwinSetup()">Create first preview</button>`,
    { active: "profile", noNav: true },
  );
}
function twinResult() {
  if (twinSetup.complete) return twinManagement();
  return shell(
    "Style Twin",
    `${twinStepBar(4)}<figure class="twin-editorial-visual"><img src="${assets.look}" alt="First Style Twin result"><figcaption>Prototype visualization · private</figcaption></figure><p class="eyebrow" style="margin-top:16px">First result</p><h2 class="title">Your Style Twin is ready.</h2><p class="body">Use it now, or refine pose, tuck, and appearance later without repeating setup.</p><div class="row" style="margin-top:16px"><button class="btn primary grow" onclick="canvasState.mode='avatar';persist();go('F-01')">Use in Studio</button><button class="btn grow" onclick="go('H-07')">Refine Style Twin</button></div>`,
    { active: "profile", noNav: true },
  );
}
function twinRefine() {
  return shell(
    "Refine Style Twin",
    `<p class="eyebrow">Optional after first result</p><h2 class="title">Fine-tune when it matters.</h2><div class="settings-list" style="margin-top:16px">${[
      ["Pose", "Standing"],
      ["Tuck", "No preference"],
      ["Appearance", "Natural reference"],
      ["Usage details", "3 renders remaining"],
    ]
      .map(
        ([label, value]) =>
          `<button class="select-row" style="width:100%;border-left:0;border-right:0;border-top:0;background:transparent;text-align:left" onclick="toast('${label} editor opened')"><span class="grow"><b>${label}</b><small class="body" style="display:block">${value}</small></span><span>›</span></button>`,
      )
      .join(
        "",
      )}</div><button class="btn primary wide" style="margin-top:16px" onclick="go('H-10')">Back to Style Twin</button>`,
    { active: "profile" },
  );
}
function leanSavedLook() {
  if (currentId === "G-08") lightweightPanel = "lookManage";
  return shell(
    "Saved Look",
    `<img class="hero-img" style="height:330px" src="${assets.look}" alt="Saved soft tailoring outfit"><div class="between" style="margin-top:14px"><span><p class="eyebrow">${lookSourceLabel(canvasState.creationSource)}</p><h2 class="title">${canvasState.title}</h2><p class="body">${canvasState.date} · ${canvasState.location}</p></span><button class="icon-btn" aria-label="Manage this Look" onclick="openLightweightPanel('lookManage')">${icon("more")}</button></div><div class="saved-look-primary" aria-label="Saved Look actions"><button class="btn primary" onclick="toast('Marked to wear today')">Wear</button><button class="btn" onclick="go('H-01')">Try On</button><button class="btn" onclick="go('F-01')">Edit</button><button class="btn" onclick="go('I-01')">Plan</button></div><details class="card progressive-card" open style="margin-top:12px"><summary><b>Items</b><span class="small">${canvasState.items.length} pieces</span></summary>${canvasState.items
      .slice(0, 4)
      .map(
        (x) =>
          `<div class="pack-row"><img src="${x.image}" alt="${x.name}"><span><b>${x.name}</b><small class="body" style="display:block">${x.owned ? "From Closet" : "Suggested"}</small></span></div>`,
      )
      .join(
        "",
      )}</details><details class="card progressive-card" style="margin-top:10px"><summary><b>About this Look</b><span class="small">${lookSourceLabel(canvasState.creationSource)}</span></summary><p class="body" style="margin-top:10px">A softly tailored outfit saved for repeat wear. The provenance above comes from the canonical Look record.</p></details><details class="card progressive-card" style="margin-top:10px"><summary><b>Context & styling</b><span class="small">Business casual · Office</span></summary><p class="body" style="margin-top:10px">Warm neutrals · Office · Spring and autumn.</p></details><details class="card progressive-card" style="margin-top:10px"><summary><b>Activity</b><span class="small">18 likes · 3 comments</span></summary><p class="body" style="margin-top:10px">7 restyles and 11 private sends.</p></details>`,
    { active: "profile" },
  );
}
function setStudioMode(mode) {
  canvasState.studioMode = mode;
  persist();
  render();
}
function studioSwap(role) {
  if (!alternatives[role]) return;
  studioRenderNotice = "";
  const item = canvasState.items.find((piece) => piece.role === role);
  if (item) {
    const replacement = makeItem(role, item.index + 1, item.id);
    Object.assign(item, replacement);
  } else if (alternatives[role]) canvasState.items.push(makeItem(role, 0));
  persist();
  render();
  toast(`${role} updated from your Closet`);
}
function moveStudioPiece(index, direction) {
  studioRenderNotice = "";
  const target = index + direction;
  if (target < 0 || target >= canvasState.items.length) return;
  const [piece] = canvasState.items.splice(index, 1);
  canvasState.items.splice(target, 0, piece);
  persist();
  render();
}

let appliedStudioRoute = null;
function applyStudioRoute(id) {
  if (!id.startsWith("F-")) {
    appliedStudioRoute = null;
    return;
  }
  if (appliedStudioRoute === id) return;
  appliedStudioRoute = id;
  if (id === "F-02") canvasState.mode = "flat";
  if (id === "F-03") canvasState.mode = "avatar";
  if (["F-05", "F-06", "F-07", "F-08", "F-09", "F-10"].includes(id))
    canvasState.studioMode = "create";
  if (id === "F-06") studioUI.role = "Outerwear";
  if (id === "F-10")
    studioUI.role =
      ["Top", "Bottom", "Shoes"].find(
        (role) => !canvasState.items.some((piece) => piece.role === role),
      ) || studioUI.role;
  if (["F-06", "F-09", "F-10"].includes(id)) {
    studioUI.source = "All";
    studioUI.query = "";
    persistStudioUI();
  }
  persist();
}
function newStudioLook() {
  studioRenderNotice = "";
  studioUI = { role: "Top", source: "All", query: "" };
  persistStudioUI();
  canvasState = defaultCanvas();
  canvasState.title = "Untitled Look";
  canvasState.items = [];
  persist();
  if (currentId === "F-01") render();
  else go("F-01");
}
function updateStudioContext(field, value) {
  if (["title", "date", "location"].includes(field)) {
    canvasState[field] = value;
    persist();
  }
}
function chooseStudioPiece(role, index) {
  const existing = canvasState.items.find((piece) => piece.role === role);
  const piece = makeItem(role, index, existing?.id);
  if (existing) Object.assign(existing, piece);
  else canvasState.items.push(piece);
  studioUI.role = role;
  persistStudioUI();
  studioRenderNotice = "";
  persist();
  render();
  toast(`${piece.name} added to this draft`);
}
function studioRoutePanel() {
  const id = currentId;
  if (id === "F-04")
    return `<section class="studio-route-panel" aria-label="Look context"><h3>Look context</h3>${[
      ["title", "Look name"],
      ["date", "Date"],
      ["location", "Location"],
    ]
      .map(
        ([key, label]) =>
          `<div class="field"><label for="studio-${key}">${label}</label><input class="input" id="studio-${key}" value="${escapeMarkup(canvasState[key])}" onchange="updateStudioContext('${key}',this.value)"></div>`,
      )
      .join("")}</section>`;
  if (id === "F-11")
    return `<section class="studio-route-panel" aria-label="Saved draft"><h3>Your saved draft</h3><p class="body">${escapeMarkup(canvasState.title)} · ${canvasState.items.length} pieces · ${escapeMarkup(canvasState.location)}</p><button class="btn" onclick="go('F-01')">Continue editing</button></section>`;
  const titles = {
    "F-06": "Add a layer",
    "F-07": "Choose a piece",
    "F-08": "Build with several pieces",
    "F-09": "Piece sources",
    "F-10": "Complete missing pieces",
  };
  if (!titles[id]) return "";
  const missing = ["Top", "Bottom", "Shoes"].filter(
    (role) => !canvasState.items.some((piece) => piece.role === role),
  );
  const descriptions = {
    "F-06": "Choose an outer layer or accessory to add to your Look.",
    "F-07": "Select a category, then choose its replacement below.",
    "F-08":
      "Build your Look one category at a time. Your selected pieces stay in the draft.",
    "F-09": "Browse all pieces, your Closet, suggestions, Lens, or Search.",
    "F-10": missing.length
      ? `Still needed: ${missing.map((role) => (role === "Bottom" ? "Bottoms" : role)).join(", ")}. Choose a piece below.`
      : "Your essential pieces are complete. You can still add an accessory or another layer.",
  };
  return `<section class="studio-route-panel" aria-label="${titles[id]}"><h3>${titles[id]}</h3><p class="body">${descriptions[id]}</p></section>`;
}
function presentStudioRoute(entering = false) {
  if (!currentId.startsWith("F-")) return;
  const content = app.querySelector(".content");
  if (!content) return;
  const panel = content.querySelector(".studio-route-panel");
  const picker = content.querySelector(".studio-picker");
  const layers = content.querySelector(".studio-create-panel");
  if (
    panel &&
    picker &&
    ["F-06", "F-07", "F-08", "F-09", "F-10"].includes(currentId)
  )
    panel.after(picker);
  if (currentId === "F-05" && layers)
    content
      .querySelector(".studio-live-preview,.studio-starter")
      ?.before(layers);
  const target = currentId === "F-05" ? layers : panel;
  if (entering && target)
    content.scrollTop +=
      target.getBoundingClientRect().top -
      content.getBoundingClientRect().top -
      12;
}
// One view-independent picker; canonical pieces remain in canvasState.items.
let studioUI = readTryOnState("styleiqStudioUIV1") || {
  role: "Top",
  source: "All",
  query: "",
};
let studioRenderNotice = "";
const studioRoles = [
  "Top",
  "Bottom",
  "Outerwear",
  "Shoes",
  "Bag",
  "Accessory",
  "Dress",
];
if (!studioRoles.includes(studioUI.role)) studioUI.role = "Top";
if (!["All", "Owned", "Suggested", "Search"].includes(studioUI.source))
  studioUI.source = "All";
if (typeof studioUI.query !== "string") studioUI.query = "";
function persistStudioUI() {
  localStorage.setItem("styleiqStudioUIV1", JSON.stringify(studioUI));
}
function studioRefresh() {
  const scroll = app.querySelector(".content")?.scrollTop || 0;
  const categoryScroll =
    app.querySelector(".studio-category-rail")?.scrollLeft || 0;
  render();
  const content = app.querySelector(".content");
  if (content) content.scrollTop = scroll;
  const categories = app.querySelector(".studio-category-rail");
  if (categories) categories.scrollLeft = categoryScroll;
}
function selectStudioRole(role) {
  if (!studioRoles.includes(role)) return;
  studioUI.role = role;
  studioUI.query = "";
  persistStudioUI();
  studioRefresh();
}
function setStudioSource(source) {
  studioUI.source = source;
  studioUI.query = "";
  persistStudioUI();
  studioRefresh();
}
function studioQuery(value) {
  studioUI.query = value;
  persistStudioUI();
  studioRefresh();
  const input = app.querySelector("#studio-piece-search");
  input?.focus();
  input?.setSelectionRange(value.length, value.length);
}
function studioCandidates(role = studioUI.role) {
  const categories = {
    Top: "Tops",
    Bottom: "Bottoms",
    Outerwear: "Outerwear",
    Shoes: "Shoes",
    Bag: "Bags",
    Accessory: "Accessories",
    Dress: "Dresses & Suits",
  };
  const owned = closetItems()
    .filter(
      (x) =>
        x.category === categories[role] &&
        x.lifecycle === "Keep" &&
        x.status === "Available",
    )
    .map((x) => ({
      key: x.id,
      role,
      name: x.name,
      brand: x.brand,
      image: x.image,
      owned: true,
      index: 0,
      visible: true,
    }));
  const suggested = (alternatives[role] || []).map((x, index) => ({
    ...makeItem(role, index),
    key: `alt-${index}`,
  }));
  const current = canvasState.items.find((x) => x.role === role);
  const choices = [...owned, ...suggested];
  if (current && !choices.some((x) => x.name === current.name))
    choices.unshift({ ...current, key: "current" });
  return choices.filter(
    (x, index, all) => all.findIndex((y) => y.name === x.name) === index,
  );
}
function chooseStudioCandidate(key) {
  const candidate = studioCandidates().find((x) => x.key === key);
  if (!candidate) return;
  const existing = canvasState.items.find((x) => x.role === studioUI.role);
  const { key: ignored, ...piece } = candidate;
  piece.id = existing?.id || `${studioUI.role}-${Date.now()}`;
  piece.visible = true;
  if (existing) Object.assign(existing, piece);
  else canvasState.items.push(piece);
  studioRenderNotice = "";
  lensOpen = false;
  persist();
  studioRefresh();
}
function removeStudioPiece(id) {
  canvasState.items = canvasState.items.filter((x) => x.id !== id);
  studioRenderNotice = "";
  persist();
  studioRefresh();
}
function studioAnotherCombination() {
  for (const piece of canvasState.items) {
    if (alternatives[piece.role])
      Object.assign(
        piece,
        makeItem(piece.role, (piece.index || 0) + 1, piece.id),
      );
  }
  studioRenderNotice = "";
  persist();
  studioRefresh();
}
function openStudioSources() {
  studioUI.source = "All";
  studioUI.query = "";
  persistStudioUI();
  if (currentId !== "F-09") go("F-09");
  else render();
  app.querySelector(".studio-picker")?.scrollIntoView({ block: "nearest" });
}
function openStudioLens() {
  openLens();
}
function studioPieceArt(piece) {
  const name = piece.name.toLowerCase();
  let file = "",
    cell = null;
  if (/eyelet/.test(name)) file = "alta-ivory-eyelet-shirt.png";
  else if (/rust/.test(name)) file = "alta-rust-knit-top.png";
  else if (/shell/.test(name)) cell = 0;
  else if (/trench/.test(name)) cell = 3;
  else if (/camel/.test(name)) cell = 2;
  else if (/blazer|suit/.test(name)) cell = 1;
  else if (/cream.*trouser|wide-leg/.test(name)) cell = 4;
  else if (/trouser/.test(name)) file = "alta-black-tailored-trousers.png";
  else if (/sneaker/.test(name)) cell = 5;
  else if (/boot/.test(name)) cell = 9;
  else if (/flat/.test(name)) cell = 11;
  else if (/loafer/.test(name)) file = "alta-tan-suede-loafers.png";
  else if (/tote/.test(name)) cell = 6;
  else if (/bag/.test(name)) file = "alta-oxblood-crescent-bag.png";
  else if (/hoop/.test(name)) cell = 7;
  else if (/belt/.test(name)) file = "alta-espresso-silver-belt.png";
  else if (/dress/.test(name)) cell = 8;
  else if (/shirt/.test(name)) cell = 10;
  if (cell !== null)
    return `<span class="studio-product-art sprite" aria-hidden="true" style="background-position:${((cell % 4) * 100) / 3}% ${Math.floor(cell / 4) * 50}%;${cell === 5 ? "clip-path:inset(4% 4% 8% 4%)" : ""}"></span>`;
  if (file)
    return `<img class="studio-product-art" src="images/${file}" alt="" draggable="false">`;
  return `<span class="studio-product-art art-missing">${icon("shirt")}<small>Image pending</small></span>`;
}
function studioMatchingRender() {
  if (!twinSetup.complete) return null;
  const visible = canvasState.items.filter((x) => x.visible !== false);
  const normalize = (name) =>
    name
      .toLowerCase()
      .replace(/^ivory /, "")
      .replace(/^black /, "")
      .replace("straight trousers", "tailored trousers");
  return Object.values(tryOnLooks).find(
    (look) =>
      visible.length === look.pieces.length &&
      look.pieces.every(([role, name]) =>
        visible.some(
          (x) => x.role === role && normalize(x.name) === normalize(name),
        ),
      ),
  );
}
let studioRenderCache = readTryOnState("styleiqStudioRenderV1"),
  studioRenderPending = false;
function studioRenderKey() {
  return JSON.stringify({
    twin: twinSetup.id || "existing-reference",
    pieces: canvasState.items
      .filter((x) => x.visible !== false)
      .map((x) => ({ id: x.id, role: x.role, name: x.name, image: x.image })),
  });
}
function studioCachedRender() {
  return twinSetup.complete && studioRenderCache?.key === studioRenderKey()
    ? studioRenderCache
    : null;
}
async function updateStudioTryOn() {
  persist();
  if (studioRenderPending) return;
  if (!twinSetup.complete) {
    studioRenderNotice =
      "Create your Style Twin from Profile when you’re ready. Your Look is saved here.";
    studioRefresh();
    return;
  }
  if (studioMatchingRender() || studioCachedRender()) {
    studioRenderNotice = "Preview is up to date.";
    studioRefresh();
    return;
  }
  // Optional generation boundary. No synthetic timer or false successful render.
  if (typeof window.styleiqStudioRenderer !== "function") {
    studioRenderNotice =
      "Try-on generation is not connected in this prototype. Your updated pieces are saved; keep editing or retry after connecting a renderer.";
    studioRefresh();
    return;
  }
  const key = studioRenderKey(),
    request = {
      twin: JSON.parse(JSON.stringify(twinSetup)),
      look: JSON.parse(JSON.stringify(canvasState)),
    };
  studioRenderPending = true;
  studioRenderNotice = "Updating preview. You can keep editing.";
  studioRefresh();
  try {
    const result = await window.styleiqStudioRenderer(request);
    if (
      !result?.image ||
      !/^(images\/|https?:\/\/|data:image\/)/.test(result.image)
    )
      throw new Error("Invalid image");
    studioRenderCache = { key, image: result.image };
    localStorage.setItem(
      "styleiqStudioRenderV1",
      JSON.stringify(studioRenderCache),
    );
    studioRenderNotice =
      key === studioRenderKey()
        ? "Preview updated."
        : "Your Look changed while rendering. Update again for the latest pieces.";
  } catch {
    studioRenderNotice =
      "Preview could not update. Your edits are safe. Try again.";
  } finally {
    studioRenderPending = false;
    if (currentId.startsWith("F-")) studioRefresh();
  }
}
function studioPreview() {
  const visible = canvasState.items.filter((x) => x.visible !== false);
  if (!canvasState.items.length)
    return `<section class="studio-starter" aria-label="Start your Look"><div class="studio-starter-art">${studioPieceArt({ name: "Eyelet shirt" })}${studioPieceArt({ name: "Black trousers" })}${studioPieceArt({ name: "Tan suede loafers" })}</div><h3>Start your Look</h3><p>One piece is all you need.</p><button class="btn primary wide" onclick="openStudioSources()">Add first piece</button><div class="studio-starter-actions"><button onclick="studioUI.source='Owned';persistStudioUI();go('F-09')">Start from Closet</button><button onclick="openStudioLens()">Use Lens</button><button onclick="openMuse(museContextFor('F-01'))">Ask Muse</button></div></section>`;
  if (canvasState.mode === "avatar") {
    const match = studioMatchingRender(),
      cached = studioCachedRender();
    return `<div class="studio-live-preview studio-twin-canvas" aria-label="On My Twin preview">${cached ? `<img src="${escapeMarkup(cached.image)}" alt="Current Look on your Style Twin">` : match ? `<div class="tryon-frame ${match.reference ? "reference" : ""}" role="img" aria-label="${escapeMarkup(match.title)} on your Style Twin" style="background-image:url('${match.sheet}');background-position:0 ${match.row * 100}%"></div>` : `<img src="${assets.body}" alt="${twinSetup.complete ? "Your completed Style Twin reference" : "Prototype Twin reference"}" draggable="false">`}<div class="studio-worn-rail" aria-label="Current Look pieces">${visible.map((piece) => `<button aria-label="Edit ${piece.role}: ${escapeMarkup(piece.name)}" aria-pressed="${studioUI.role === piece.role}" onclick="selectStudioRole('${piece.role}')">${studioPieceArt(piece)}</button>`).join("")}</div></div>${!match && !cached ? `<div class="studio-preview-status"><span class="studio-refresh-icon">${icon("refresh-cw")}</span><span class="studio-status-copy"><b>Preview needs refresh</b><small>${twinSetup.complete ? "Your current pieces are selected below." : "Prototype reference · no completed Twin yet"}</small></span><button class="btn" onclick="updateStudioTryOn()" ${studioRenderPending ? "disabled" : ""}>${studioRenderPending ? "Updating…" : "Update Try-On"}</button></div>` : '<p class="studio-preview-note">Current Look · prepared try-on preview</p>'}${studioRenderNotice ? `<p class="studio-render-notice" role="status">${studioRenderNotice}</p>` : ""}`;
  }
  return `<div class="studio-live-preview studio-flat-canvas" aria-label="Flat Lay preview">${visible.map((piece) => `<button class="studio-flat-piece zone-${piece.role.toLowerCase()}" aria-label="Edit ${piece.role}: ${escapeMarkup(piece.name)}" aria-pressed="${studioUI.role === piece.role}" onclick="selectStudioRole('${piece.role}')">${studioPieceArt(piece)}<span>${escapeMarkup(piece.name)}</span></button>`).join("")}${visible.length ? "" : '<p class="studio-preview-note">All pieces are hidden. Show a layer below.</p>'}</div><p class="studio-preview-note">Tap a piece to change it · ${visible.length} pieces</p>`;
}
function studioCandidateRail(candidates, closeLens = false) {
  const selected = canvasState.items.find((x) => x.role === studioUI.role);
  return `<div class="studio-piece-rail" aria-label="Piece alternatives">${candidates.map((piece) => `<button class="studio-piece-option" aria-label="Choose ${escapeMarkup(piece.name)}" aria-pressed="${selected?.name === piece.name}" onclick="chooseStudioCandidate('${piece.key}')">${studioPieceArt(piece)}${selected?.name === piece.name ? `<span class="studio-selected-check">${icon("check")}</span>` : ""}<b>${escapeMarkup(piece.name)}</b><small>${piece.owned ? "Owned" : "Suggested"}${selected?.name === piece.name ? " · Selected" : ""}</small></button>`).join("")}${candidates.length ? "" : '<p class="body">No pieces match. Try another source or category.</p>'}</div>`;
}
function studioPicker() {
  const roles = studioRoles.filter(
    (x) => x !== "Dress" || canvasState.items.some((p) => p.role === "Dress"),
  );
  const candidates = studioCandidates().filter(
    (x) =>
      (studioUI.source !== "Owned" || x.owned) &&
      (studioUI.source !== "Suggested" || !x.owned) &&
      (!studioUI.query ||
        `${x.name} ${x.brand}`
          .toLowerCase()
          .includes(studioUI.query.toLowerCase())),
  );
  return `<section class="studio-picker" aria-label="Visual piece picker"><div class="studio-category-rail" role="group" aria-label="Active layer">${roles.map((role) => `<button aria-pressed="${studioUI.role === role}" onclick="selectStudioRole('${role}')">${role === "Outerwear" ? "Layer" : role === "Bottom" ? "Bottoms" : role}</button>`).join("")}</div><div class="studio-picker-heading"><span>Editing <b>${studioUI.role === "Bottom" ? "Bottoms" : studioUI.role}</b></span><button onclick="openStudioSources()">Add piece ${icon("plus")}</button></div><div class="studio-source-rail" role="group" aria-label="Piece source">${["All", "Owned", "Suggested"].map((source) => `<button aria-pressed="${studioUI.source === source}" onclick="setStudioSource('${source}')">${source === "Owned" ? "My Closet" : source}</button>`).join("")}<button onclick="openStudioLens()">${icon("camera")} Lens</button><button aria-pressed="${studioUI.source === "Search"}" onclick="setStudioSource('Search')">Search</button></div>${studioUI.source === "Search" ? `<label class="sr-only" for="studio-piece-search">Search pieces</label><input id="studio-piece-search" class="input" value="${escapeMarkup(studioUI.query)}" placeholder="Search pieces or brands" oninput="studioQuery(this.value)">` : ""}${studioCandidateRail(candidates)}</section>`;
}
function studioLensMarkup() {
  let markup = lensLayerMarkup();
  if (lensOpen && lensStage === "result") {
    const matches = studioCandidates().filter((x) => x.owned);
    markup = markup.replace(
      "</section></div>",
      `<section class="studio-lens-return"><h3>Use a match in this Look</h3><p class="body">Sample Closet matches for ${studioUI.role}. Choose a piece to return to Studio.</p>${studioCandidateRail(matches)}</section></section></div>`,
    );
  }
  return markup;
}
function canonicalStudio() {
  const twin = canvasState.mode === "avatar",
    create = canvasState.studioMode === "create";
  const simpleActions = [
    ["Swap top", "Top"],
    ["Swap bottoms", "Bottom"],
    ["Swap shoes", "Shoes"],
    ["Add layer", "Outerwear"],
    ["Add accessory", "Accessory"],
  ];
  return `<section class="screen studio-canonical"><div class="content no-nav"><header class="mirror-studio-head"><button class="mirror-circle-action" aria-label="Back" onclick="backScreen()">${icon("back")}</button><span><p class="eyebrow" style="text-align:center">Style Studio</p><h2>${canvasState.title}</h2></span><button class="mirror-circle-action studio-save" onclick="saveLook()">Save</button></header><div class="between studio-draft-row"><span class="small">Current draft</span><button class="text-action" onclick="newStudioLook()">New Look</button></div><div class="studio-experience-switch" role="group" aria-label="Studio mode"><button class="${create ? "" : "active"}" aria-pressed="${!create}" onclick="setStudioMode('simple')">${icon("spark")}<span><b>Simple</b><small>Everyday changes</small></span></button><button class="${create ? "active" : ""}" aria-pressed="${create}" onclick="setStudioMode('create')">${icon("gear")}<span><b>Create</b><small>Advanced control</small></span></button></div><div class="studio-view-row"><div class="mirror-studio-tabs" role="group" aria-label="Preview view"><button class="${twin ? "active" : ""}" aria-pressed="${twin}" onclick="setMode('avatar')">${icon("user")}<span>On My Twin</span></button><button class="${twin ? "" : "active"}" aria-pressed="${!twin}" onclick="setMode('flat')">${icon("shirt")}<span>Flat Lay</span></button></div><button class="studio-avatar-action" onclick="go('H-01')">${icon(twinSetup.complete ? "user" : "user-round-plus")}<span>${twinSetup.complete ? "My Twin" : "Create Avatar"}</span></button></div>${studioRoutePanel()}${studioPreview()}${canvasState.items.length || ["F-06", "F-07", "F-08", "F-09", "F-10"].includes(currentId) ? studioPicker() : ""}${
    create
      ? `<section class="studio-create-panel" aria-label="Advanced Look layers"><div class="between"><span><p class="eyebrow">Create mode</p><h3 class="title">Look layers</h3></span><button class="btn" onclick="openStudioSources()">Add piece ${icon("plus")}</button></div>${canvasState.items.map((piece, index) => `<details class="studio-layer-row"><summary><span class="studio-layer-thumbnail">${studioPieceArt(piece)}</span><span class="grow"><b>${index + 1}. ${piece.role === "Bottom" ? "Bottoms" : piece.role}</b><small>${escapeMarkup(piece.name)} · ${piece.visible === false ? "Hidden" : piece.owned ? "Owned" : "Suggested"}</small></span>${icon("chevron-right")}</summary><div class="studio-layer-controls"><button aria-label="Replace ${piece.role}" onclick="selectStudioRole('${piece.role}');app.querySelector('.studio-picker').scrollIntoView({block:'nearest'})">${icon("edit")}</button><button aria-label="Move ${piece.role} up" onclick="moveStudioPiece(${index},-1)">↑</button><button aria-label="Move ${piece.role} down" onclick="moveStudioPiece(${index},1)">↓</button><button aria-label="${piece.visible !== false ? "Hide" : "Show"} ${piece.role}" onclick="toggleLayer('${piece.id}')">${icon(piece.visible !== false ? "eye-off" : "eye")}</button><button aria-label="Remove ${piece.role}" onclick="removeStudioPiece('${piece.id}')">${icon("trash-2")}</button></div></details>`).join("")}</section>`
      : canvasState.items.length
        ? `<section class="studio-simple-panel" aria-label="Simple wardrobe actions"><div class="studio-quick-jobs">${[
            ["Change top", "Top"],
            ["Change bottoms", "Bottom"],
            ["Change shoes", "Shoes"],
            ["Add layer", "Outerwear"],
            ["Add accessory", "Accessory"],
          ]
            .map(
              ([label, role]) =>
                `<button onclick="selectStudioRole('${role}')">${label}</button>`,
            )
            .join(
              "",
            )}<button onclick="studioAnotherCombination()">Try another combination</button></div></section>`
        : ""
  }${canvasState.lookFormula ? `<details class="tryon-studio-formula"><summary>Source Look · ${escapeMarkup(canvasState.lookFormula.title)}</summary><p>${canvasState.items.filter((x) => x.owned).length} of ${canvasState.items.length} roles matched to available Closet items.</p>${canvasState.items.map((x) => `<div>${escapeMarkup(x.name)} · ${x.owned ? "Closet match" : "Find an alternative"}</div>`).join("")}</details>` : ""}</div>${studioLensMarkup()}</section>`;
}
function phaseOneCanonicalScreen(s) {
  if (s.id === "A-06") return stylingContextSurface(true);
  if (s.id === "L-02") return mirrorProfile();
  if (s.id === "E-01") {
    lightweightPanel = "save";
    return outfitFamilies("Today");
  }
  if (s.id === "E-03") {
    lightweightPanel = "feedback";
    return outfitFamilies("Today");
  }
  if (s.id === "E-04") {
    lightweightPanel = "share";
    return outfitFamilies("Today");
  }
  if (s.id === "E-02") return canonicalStudio();
  if (s.id === "E-05") return canonicalTwinIntro();
  return null;
}
function mirrorScreen(s) {
  if (s.id === "E-06") return tryOnResult();
  const phaseOne = phaseOneCanonicalScreen(s);
  if (phaseOne) return phaseOne;
  if (s.id === "D-02") return mirrorToday();
  if (s.id === "C-01") return scalableCloset();
  if (["C-02", "C-03", "C-04", "C-05", "C-06", "C-07"].includes(s.id))
    return lifecycleItemDetail();
  if (s.id === "A-09") return onboarding({ ...s, id: "A-05" });
  if (s.id === "A-10") return stylingContextSurface(true);
  if (s.id === "A-11") return mirrorToday();
  if (s.id === "A-12") return importScreen({ ...s, id: "B-01" });
  if (s.id === "A-13") return scalableCloset();
  if (s.id === "A-14") return myLooksGrid();
  if (s.id === "A-15") return tripIntentScreen();
  if (s.id === "I-01" || ["I-03", "I-04", "I-05"].includes(s.id))
    return mirrorPlanner();
  if (s.id === "I-02") return weeklyRecap();
  if (s.id === "I-06") return calendarShare();
  if (s.id === "J-01") return tripsList();
  if (
    s.id === "J-02" ||
    ["J-03", "J-04", "J-05", "J-06", "J-07"].includes(s.id)
  )
    return tripIntentScreen();
  if (["J-08", "J-09", "J-13", "J-14"].includes(s.id))
    return tripHub("packing");
  if (["J-10", "J-11", "J-12"].includes(s.id)) return tripHub("outfits");
  if (s.id === "K-01") return mirrorDiscover();
  if (["K-04", "K-06"].includes(s.id)) return creatorLookDetail();
  if (s.id === "K-05") return canonicalTwinIntro();
  if (s.id === "L-01") return mirrorProfile();
  if (s.id === "G-01") return myLooksGrid();
  if (s.section === "F") return canonicalStudio();
  if (["A-07", "H-01"].includes(s.id)) return canonicalTwinIntro();
  if (["A-08", "H-02", "H-03", "H-04"].includes(s.id))
    return twinReference("photo");
  if (s.id === "H-05") return twinReference("manual");
  if (s.id === "H-06") return twinBasicDetails();
  if (["H-07", "H-08", "H-09"].includes(s.id)) return twinRefine();
  if (s.id === "H-10") return twinResult();
  if (["B-02", "B-03"].includes(s.id)) return batchPhotoImport();
  if (s.id === "B-10" && batchImportActive) return batchImportReview();
  if (s.id === "B-11" && batchImportActive) return batchImportSuccess();
  if (["G-02", "G-03", "G-04", "G-05", "G-06", "G-07", "G-08"].includes(s.id))
    return leanSavedLook();
  return null;
}
function renderScreen(s) {
  const mirrored = mirrorScreen(s);
  if (mirrored) return mirrored;
  if (s.section === "S") return entryScreen(s);
  if (s.section === "A") return onboarding(s);
  if (s.section === "B") return importScreen(s);
  if (s.section === "D") return homeScreen(s);
  if (s.section === "K") return discoverScreen(s);
  if (s.section === "L") return profileScreen(s);
  return museScreen(s);
}
function renderNotes(s) {
  const managingTwin =
    twinSetup.complete && ["H-01", "H-10", "L-09", "E-05"].includes(s.id);
  notes.innerHTML = `${twinDemoControls()}<span class="phase-pill">Phase ${s.phase}</span><p class="eyebrow" style="margin-top:16px">${s.id} · ${sections[s.section]}</p><h2>${managingTwin ? "Style Twin · manage existing Twin" : s.title}</h2><p class="body">${managingTwin ? "View the completed Twin, try a Look, or refine without repeating setup." : s.detail}</p><div class="notes-grid"><div class="metric"><b>Surface</b><span>${["B-01", "I-03", "J-11"].includes(s.id) ? "Bottom sheet / menu" : s.section === "F" ? "Full-screen editor" : "Mobile screen / state"}</span></div><div class="metric"><b>Style</b><span>Warm pearl, espresso, restrained plum</span></div><div class="metric"><b>Inventory</b><span>${screens.indexOf(s) + 1} of ${screens.length}</span></div><div class="metric"><b>Keyboard</b><span><span class="kbd">←</span> <span class="kbd">→</span></span></div></div>${s.section === "F" ? "<ul><li>Editable title and persistent draft</li><li>Flat lay and optional Style Twin</li><li>Owned versus Shop provenance</li><li>Category layers, visibility, replace, remove</li><li>Closet/Wishlist selector with search and filters</li><li>Date, location, calendar, feedback, Save Look</li></ul>" : ""}<div class="row" style="margin-top:18px"><button class="btn grow" onclick="openPreviousInventoryScreen()">Previous screen</button><button class="btn primary grow" onclick="openNextInventoryScreen()">Next screen</button></div>`;
}
function renderList() {
  const q = document.getElementById("screen-search").value.toLowerCase(),
    phase = document.getElementById("phase-filter").value;
  let html = "";
  for (const [key, label] of Object.entries(sections)) {
    const subset = screens.filter(
      (s) =>
        s.section === key &&
        (phase === "all" || String(s.phase) === phase) &&
        `${s.id} ${s.title} ${s.detail}`.toLowerCase().includes(q),
    );
    if (!subset.length) continue;
    html += `<div class="section-label">${key} · ${label}</div>${subset.map((s) => `<button class="screen-link" data-id="${s.id}" aria-current="${s.id === currentId ? "page" : "false"}" onclick="go('${s.id}')"><b>${s.id}</b><span class="screen-link-icon">${icon(screenIconName(s))}</span><span class="screen-link-title">${s.title}</span></button>`).join("")}`;
  }
  document.getElementById("screen-list").innerHTML = html;
  window.lucide?.createIcons({ attrs: { "stroke-width": 1.5 } });
}
function render() {
  const previousNavLens = app
    .querySelector(".nav-liquid-indicator")
    ?.getBoundingClientRect();
  const studioEntering = appliedStudioRoute !== currentId;
  const s = screens.find((x) => x.id === currentId) || screens[0];
  currentId = s.id;
  applyStudioRoute(s.id);
  app.dataset.screen = s.id;
  const deviceStatus = document.getElementById("device-status");
  deviceStatus.classList.toggle("light", ["S-00", "S-01"].includes(s.id));
  deviceStatus.remove();
  document.getElementById("mobile-index").hidden = s.section === "S";
  app.innerHTML = renderScreen(s);
  app.querySelector(".screen")?.prepend(deviceStatus);
  decorateSettingsRows();
  connectPrivacySettings();
  decorateInlineEditors();
  connectFieldLabels();
  decorateProgressiveSurfaces();
  decorateChoiceChips();
  installGestures();
  installWalkthroughGestures();
  installTryOnGestures();
  guardGestureKeys();
  enrichCoreScreens(s);
  presentStudioRoute(studioEntering);
  decorateContextualIntelligence();
  decorateJobLauncher();
  connectOnboardingGoals();
  decorateClosetLifecycle();
  decorateConsolidatedItemDetail();
  decorateBatchImport();
  decoratePhotoLearning();
  decorateInspirationProfile();
  decorateLookProvenance();
  decorateWeeklyRecapEntry();
  decorateVisualSearchEntries();
  ensureAppNavigation();
  window.lucide?.createIcons({ attrs: { "stroke-width": 1.5 } });
  installLiquidNav(previousNavLens);
  renderNotes(s);
  const inventory = [...notes.querySelectorAll(".metric")].find(
    (x) => x.querySelector("b")?.textContent === "Inventory",
  );
  if (inventory)
    inventory.querySelector("span").textContent =
      `${screens.indexOf(s) + 1} of ${screens.length}`;
  renderList();
  document.getElementById("total-count").textContent =
    `${screens.length} / ${screens.length}`;
}
const glassInteractiveSelector =
  ".card,.signal-card,.profile-utility,.settings-list,.choice,.brand-select-card,.mirror-twin-choice,.icon-btn,.profile-control,.global-search,.root-notification,.mirror-circle-action,.mirror-save,.btn,.chip,.mirror-filter";
const phoneSurface = document.querySelector(".phone");
let glassPointerFrame = 0;
phoneSurface.addEventListener("pointermove", (event) => {
  const target = event.target.closest(glassInteractiveSelector);
  if (!target || !phoneSurface.contains(target)) return;
  const clientX = event.clientX,
    clientY = event.clientY;
  cancelAnimationFrame(glassPointerFrame);
  glassPointerFrame = requestAnimationFrame(() => {
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--glass-x", `${clientX - rect.left}px`);
    target.style.setProperty("--glass-y", `${clientY - rect.top}px`);
  });
});
phoneSurface.addEventListener("pointerout", (event) => {
  const target = event.target.closest(glassInteractiveSelector);
  if (target && !target.contains(event.relatedTarget)) {
    target.style.removeProperty("--glass-x");
    target.style.removeProperty("--glass-y");
  }
});
window.addEventListener(
  "keydown",
  (event) => {
    if (
      currentId === "S-01" &&
      ["ArrowLeft", "ArrowRight"].includes(event.key)
    ) {
      event.preventDefault();
      event.stopImmediatePropagation();
      moveWalkthrough(event.key === "ArrowRight" ? 1 : -1);
    }
  },
  true,
);
document.getElementById("screen-search").addEventListener("input", renderList);
document.getElementById("phase-filter").addEventListener("change", renderList);
document.getElementById("mobile-index").addEventListener("click", () => {
  const id = prompt("Open screen ID (S-00 to M-03)", currentId);
  if (id) go(id.toUpperCase());
});
window.addEventListener("hashchange", () => {
  const id = location.hash.slice(1);
  if (currentId === "E-06" && id.startsWith("H-")) {
    leaveTryOn();
    return;
  }
  if (pendingTryOn && currentId.startsWith("H-") && !id.startsWith("H-"))
    clearPendingTryOn();
  if (id && id !== currentId && screens.some((s) => s.id === id)) {
    navHistory.push(currentId);
    currentId = id;
    lightweightPanel = null;
    accountMenuOpen = false;
    notificationsOpen = false;
    render();
  }
});
window.addEventListener("keydown", (e) => {
  if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
  if (e.key === "ArrowRight") openNextInventoryScreen();
  if (e.key === "ArrowLeft") openPreviousInventoryScreen();
  if (e.key === "Escape" && lightweightPanel) closeLightweightPanel();
  else if (e.key === "Escape" && overlay) closeOverlay();
  else if (e.key === "Escape" && accountMenuOpen) closeAccountMenu();
  else if (e.key === "Escape" && notificationsOpen) closeNotifications();
});
if (pendingTryOn && twinSetup.complete && currentId.startsWith("H-"))
  resumeTryOn();
else render();
function toggleTripItem(name) {
  tripState.packed[name] = !tripState.packed[name];
  persistTrip();
  render();
}
function resetTrip() {
  tripState = defaultTripState();
  persistTrip();
  go("J-02");
}
function searchStyleIQ(value) {
  const menu = app.querySelector(".account-menu");
  if (!menu) return;
  const query = value.trim().toLocaleLowerCase();
  menu
    .querySelectorAll(".menu-group")
    .forEach((group) => (group.hidden = !!query));
  const results = menu.querySelector(".app-search-results");
  results.hidden = !query;
  if (!query) {
    results.innerHTML = "";
    return;
  }
  const entries = closetItems()
    .filter((item) => item.lifecycle !== "Removed")
    .map((item) => ({
      title: item.name,
      detail: `Closet · ${item.brand || ""} · ${item.location || ""}`,
      action: `openClosetItem(${JSON.stringify(item.id)})`,
    }));
  Object.entries(tryOnLooks).forEach(([key, look]) =>
    entries.push({
      title: look.title,
      detail: `Looks · ${look.occasion || ""} ${look.pieces.map((piece) => piece[1]).join(" · ")}`,
      action: `selectedTodayLook=${JSON.stringify(key)};go('D-02')`,
    }),
  );
  entries.push({
    title: canvasState.title,
    detail: "Studio · Current Look draft",
    action: "go('F-01')",
  });
  if (tripState.created)
    entries.push({
      title: "Alexandria",
      detail: "Trips · Aug 23–25 · Packing list",
      action: "go('J-14')",
    });
  const destinations = [
    ["Today", "D-02"],
    ["Closet", "C-01"],
    ["Saved Looks", "G-01"],
    ["Style Studio", "F-01"],
    ["Planner", "I-01"],
    ["Discover", "K-01"],
    ["Trips", "J-01"],
    ["Muse", "M-01"],
    ["Amelia Hart · Profile", "L-01"],
    ["Style Twin", "H-01"],
    ["About you", "L-04"],
    ["Style preferences", "L-05"],
    ["Brands", "L-06"],
    ["Budget", "L-07"],
    ["Events", "L-08"],
    ["Privacy & Settings", "L-11"],
    ["Tutorial", "L-12"],
  ];
  destinations.forEach(([title, id]) =>
    entries.push({ title, detail: "Pages", action: `go('${id}')` }),
  );
  const matches = entries.filter((entry) =>
    query
      .split(/\s+/)
      .every((term) =>
        (entry.title + " " + entry.detail).toLocaleLowerCase().includes(term),
      ),
  );
  results.innerHTML = `<p class="app-search-count" role="status">${matches.length} results across StyleIQ</p>${matches.map((entry) => `<button class="app-search-result" onclick="accountMenuOpen=false;${escapeMarkup(entry.action)};if(!accountMenuOpen)render()"><b>${escapeMarkup(entry.title)}</b><small>${escapeMarkup(entry.detail)}</small></button>`).join("") || '<p class="body">No results found. Try a piece, brand, Look, or page name.</p>'}`;
}
function accountMenuV2() {
  if (!accountMenuOpen) return "";
  const groups = [
    [
      "My Style",
      [
        ["spark", "Muse", "M-01"],
        ["user", "Profile", "L-01"],
        ["heart", "Saved Looks", "G-01"],
        ["spark", "Style Studio", "F-01"],
        ["calendar", "Planner", "I-01"],
        ["bag", "Trips", "J-01"],
      ],
    ],
    [
      "Preferences",
      [
        ["user", "About you", "L-04"],
        ["spark", "Style preferences", "L-05"],
        ["heart", "Brands", "L-06"],
        ["bag", "Budget", "L-07"],
        ["calendar", "Events", "L-08"],
        ["user", "Style Twin", "L-09"],
      ],
    ],
    [
      "Support & account",
      [
        ["eye", "Privacy", "L-11"],
        ["gear", "Settings", "L-11"],
        ["compass", "Tutorial", "L-12"],
      ],
    ],
  ];
  return `<div class="account-menu-layer"><button class="account-menu-scrim" aria-label="Close account menu" onclick="closeAccountMenu()"></button><aside class="account-menu" aria-label="Account navigation"><div class="account-menu-head"><button class="account-profile-link" aria-label="Open Amelia Hart profile" onclick="go('L-01')"><img src="${assets.profile}" alt=""><span><b>Amelia Hart</b><small class="body" style="display:block">My Atelier</small></span></button><button class="icon-btn account-menu-close" aria-label="Close account menu" onclick="closeAccountMenu()">×</button></div><label class="account-menu-search">${icon("search")}<input type="search" aria-label="Search StyleIQ" placeholder="Search pieces, Looks, brands…" oninput="searchStyleIQ(this.value)"></label><section class="app-search-results" aria-label="StyleIQ search results" hidden></section>${groups.map(([label, links]) => `<div class="menu-group"><p class="menu-group-label">${label}</p>${links.map(([ico, text, id]) => `<button class="menu-link ${currentId === id ? "current" : ""}" onclick="go('${id}')">${icon(ico)}<span>${text}</span><b>›</b></button>`).join("")}</div>`).join("")}<div class="menu-group"><button class="menu-link" onclick="openLogout()">${icon("logout")}<span>Log out</span><b>›</b></button></div></aside></div>`;
}
function outfitFamilies(title = "Today") {
  return shell(
    title,
    `<p class="eyebrow">Styled around your blazer</p><h2 class="title">Five ways to wear it</h2><div class="chips">${["Business casual", "Party", "Dressy", "Professional", "Semi-formal"].map((x, i) => `<button class="chip ${i === 0 ? "active" : ""}">${x}</button>`).join("")}</div><div style="margin-top:12px">${outfitPreview()}</div><div class="outfit-meta"><span><p class="eyebrow">Business casual</p><h3 class="title">Quiet structure</h3><p class="body">28° · Office · 3 owned pieces</p></span><button class="text-action" onclick="go('M-02')">Why this Look?</button></div><div class="outfit-primary-actions"><button class="btn primary" onclick="go('F-01')">${icon("edit")} Make it mine</button><button class="btn" onclick="go('H-01')">${icon("user")} Try on</button></div><div class="closet-strip" aria-label="Pieces in this Look">${[
      ["Blazer", assets.blazer, "Owned"],
      ["Ivory top", assets.top, "Owned"],
      ["Trousers", assets.bottom, "Owned"],
      ["Oxblood bag", assets.bag, "Suggested"],
    ]
      .map(
        ([name, image, state]) =>
          `<button class="closet-piece" onclick="go('C-02')"><span class="closet-piece-media"><img src="${image}" alt="${name}"><em>${state}</em></span><b>${name}</b><small>${state === "Owned" ? "From Closet" : "Useful addition"}</small></button>`,
      )
      .join(
        "",
      )}</div><div class="outfit-secondary-actions"><button class="action-btn" aria-label="Save Look" onclick="openLightweightPanel('save')">${icon("heart")} Save</button><button class="action-btn" aria-label="Not for me" onclick="openLightweightPanel('feedback')">× Not for me</button><button class="action-btn" aria-label="Share" onclick="openLightweightPanel('share')">↗ Share</button></div>`,
    { active: "home" },
  );
}
function profileScreen(s) {
  const idx = Number(s.id.slice(2));
  if (idx === 1)
    return shell(
      "My Atelier",
      `<div class="profile-kicker"><h2 class="title">My Style Profile</h2><button class="profile-control" aria-label="Profile settings" onclick="go('L-11')">${icon("gear")}</button></div><section class="profile-editorial"><img src="${assets.profile}" alt="Amelia Hart"><span><p class="eyebrow">My style profile</p><h3 class="title">Amelia Hart</h3><p class="body">Relaxed tailoring · warm neutrals</p></span><button class="profile-control" aria-label="Ask Muse about my profile" onclick="go('M-01')">${icon("spark")}</button></section><div class="profile-looks-head"><div><p class="eyebrow">My Looks</p><h3 class="title">Outfits I return to</h3></div><button class="text-action" onclick="go('G-01')">View all</button></div><div class="profile-look-rail"><button class="profile-look" onclick="go('G-02')"><img src="${assets.look}" alt="Espresso work Look"><span>Work<b>${canvasState.title}</b></span></button><button class="profile-look" onclick="go('G-02')"><img src="${assets.look3}" alt="Cairo office Look"><span>Office<b>Worn Tuesday</b></span></button><button class="profile-look" onclick="go('J-14')"><img src="${assets.look4}" alt="Alexandria travel Look"><span>Travel<b>Alexandria</b></span></button></div><section class="profile-closet"><p class="eyebrow">My Closet</p><h3 class="title">Start with what you own</h3><div class="profile-closet-row"><img src="${assets.blazer}" alt="Black tailored blazer"><span><b>Black tailored blazer</b><small class="body" style="display:block">1 piece · 5 styling directions</small></span><button class="btn" onclick="go('D-04')">Style</button></div></section><div class="profile-utility-grid"><button class="profile-utility" onclick="setClosetTab('wishlist')"><img src="${assets.bag}" alt="Oxblood crescent bag on Wishlist"><b>Wishlist</b><small>1 saved piece to review</small></button><button class="profile-utility" onclick="go('H-01')"><img src="${assets.body}" alt="Optional Style Twin preview"><b>Style Twin</b><small>Optional private try-on</small></button></div>`,
      { active: "profile" },
    );
  if (idx === 2)
    return shell(
      "Edit profile",
      `<div class="profile-summary"><img src="${assets.profile}" alt="Amelia Hart"><span><button class="btn small-btn" onclick="toast('Photo picker opened')">Change photo</button><p class="small" style="margin-top:7px">Visible on your Atelier profile.</p></span></div><div class="stack" style="margin-top:22px"><div class="field"><label>Display name</label><input class="input" value="Amelia Hart"></div><div class="field"><label>Location</label><input class="input" value="Cairo, Egypt"></div><div class="field"><label>Bio</label><textarea class="textarea">Product designer building a quieter, more intentional wardrobe.</textarea></div><button class="btn primary wide" onclick="go('L-01');toast('Profile updated')">Save changes</button></div>`,
      { active: "profile" },
    );
  if (idx === 3)
    return shell(
      "My content",
      `<div class="source-tabs"><button class="active" onclick="go('G-01')">Saved Looks</button><button onclick="go('J-01')">Trips</button></div><div class="item-grid" style="margin-top:14px"><button class="item-card" onclick="go('G-02')"><img src="${assets.look}" alt="Saved Look"><span class="copy"><b>${canvasState.title}</b><small class="body" style="display:block">Look</small></span></button><button class="item-card" onclick="go('J-14')"><img src="${assets.look4}" alt="Alexandria Trip"><span class="copy"><b>Alexandria</b><small class="body" style="display:block">Trip · Aug 23–25</small></span></button></div>`,
      { active: "profile" },
    );
  if (idx === 4)
    return settingsDetail("About you", [
      "Name · Amelia Hart",
      `Wardrobe · ${stylingContext}`,
      "Location · Cairo",
      "Style note · Relaxed tailoring",
    ]);
  if (idx === 5)
    return settingsDetail("Style preferences", [
      "I prefer · Tailoring, warm neutrals",
      "Dislike · Loud logos",
      "Personal rule · No low-rise fits",
      "Add a style rule",
    ]);
  if (idx === 6)
    return settingsDetail("Brands", [
      "Preferred · A.P.C., AMI Paris, COS",
      "Disliked · None",
      "Search or add brands",
    ]);
  if (idx === 7)
    return settingsDetail("Budget", [
      "Under $100",
      "$100–$250",
      "$250–$1,000",
      "$1,000+",
    ]);
  if (idx === 8)
    return settingsDetail("Events", [
      "Weekly office day",
      "Client dinner",
      "Weekend social",
      "Add repeating event",
    ]);
  if (idx === 9) return canonicalTwinIntro();
  if (idx === 10)
    return settingsDetail("Photo handling", [
      "Automatic cleanup · Always on",
      "Keep original photos · On",
    ]);
  if (idx === 13)
    return shell(
      "Notifications",
      `<div class="settings-hero"><span class="settings-hero-icon">${icon("bell")}</span><span><p class="eyebrow">App settings</p><h2 class="title">Notifications</h2><p class="body">Choose the updates that are useful to you.</p></span></div><section class="settings-section"><p class="settings-section-label">Styling</p><div class="settings-list">${["Daily styling ideas", "Look ready alerts", "Closet import updates"].map((label) => `<div class="select-row"><span class="grow">${label}</span><button class="toggle on" aria-label="Toggle ${label}" onclick="this.classList.toggle('on')"><span></span></button></div>`).join("")}</div></section><section class="settings-section"><p class="settings-section-label">Planning</p><div class="settings-list">${["Trip reminders", "Packing list changes", "Calendar events"].map((label, i) => `<div class="select-row"><span class="grow">${label}</span><button class="toggle ${i < 2 ? "on" : ""}" aria-label="Toggle ${label}" onclick="this.classList.toggle('on')"><span></span></button></div>`).join("")}</div></section><section class="settings-section"><p class="settings-section-label">Community</p><div class="settings-list"><div class="select-row"><span class="grow">Likes, comments, and follows</span><button class="toggle" aria-label="Toggle community notifications" onclick="this.classList.toggle('on')"><span></span></button></div></div></section>`,
      { active: "profile" },
    );
  if (idx === 14)
    return shell(
      "Help center",
      `<div class="settings-hero"><span class="settings-hero-icon">${icon("help")}</span><span><p class="eyebrow">Support</p><h2 class="title">How can we help?</h2><p class="body">Find a guide or contact the StyleIQ team.</p></span></div><div class="field" style="margin-top:20px"><label>Search help</label><input class="input" placeholder="Closet, Style Studio, Trips…"></div><section class="settings-section"><p class="settings-section-label">Popular guides</p><div class="settings-list">${[
        ["Import your Closet", "B-01"],
        ["Build a Look", "F-01"],
        ["Plan a Trip", "J-01"],
        ["Manage privacy", "L-11"],
      ]
        .map(
          ([label, id]) =>
            `<button class="select-row" style="width:100%;border:0;background:transparent" onclick="go('${id}')"><span class="grow">${label}</span><span>›</span></button>`,
        )
        .join(
          "",
        )}</div></section><button class="btn primary wide" style="margin-top:18px" onclick="toast('Support request started')">Contact support</button>`,
      { active: "profile" },
    );
  if (idx === 15)
    return shell(
      "Privacy & visibility",
      `<div class="settings-hero"><span class="settings-hero-icon">${icon("eye")}</span><span><p class="eyebrow">Account settings</p><h2 class="title">Privacy & visibility</h2><p class="body">Your Closet and Style Twin stay private unless you choose otherwise.</p></span></div><section class="settings-section"><p class="settings-section-label">Profile</p><div class="settings-list"><div class="select-row"><span class="grow">Private profile</span><button class="toggle on" aria-label="Toggle private profile" onclick="this.classList.toggle('on')"><span></span></button></div><div class="select-row"><span class="grow">Appear in Discover</span><button class="toggle" aria-label="Toggle Discover visibility" onclick="this.classList.toggle('on')"><span></span></button></div></div></section><section class="settings-section"><p class="settings-section-label">Content</p><div class="settings-list"><button class="select-row" style="width:100%;border:0;background:transparent" onclick="go('G-06')"><span class="grow">Default Look visibility</span><span>Private · ›</span></button><div class="select-row"><span class="grow">Style Twin visibility</span><b class="small">Only me</b></div><div class="select-row"><span class="grow">Closet visibility</span><b class="small">Only me</b></div></div></section><section class="settings-section"><p class="settings-section-label">Your data</p><div class="settings-list"><button class="select-row" style="width:100%;border:0;background:transparent" onclick="toast('Data export requested')"><span class="grow">Download my data</span><span>›</span></button></div></section>`,
      { active: "profile" },
    );
  if (idx === 11)
    return shell(
      "Settings",
      `<div class="settings-hero"><span class="settings-hero-icon">${icon("gear")}</span><span><p class="eyebrow">Account & app</p><h2 class="title">Settings</h2><p class="body">Control your profile, styling preferences, privacy, and access.</p></span></div><section class="settings-section"><p class="settings-section-label">Account</p><div class="settings-list"><button class="select-row" style="width:100%;border-left:0;border-right:0;border-top:0;background:transparent;text-align:left" onclick="go('L-01')"><span class="icon-wrap">${icon("user")}</span><span class="grow"><b>Amelia Hart</b><small class="body" style="display:block">amelia@styleiq.app</small></span><span>›</span></button><button class="select-row" style="width:100%;border:0;background:transparent;text-align:left" onclick="toast('Privacy controls opened')"><span class="icon-wrap">${icon("eye")}</span><span class="grow">Privacy & visibility</span><span>›</span></button></div></section><section class="settings-section"><p class="settings-section-label">Styling</p><div class="settings-list">${[
        ["user", "About you", "L-04"],
        ["spark", "Style preferences", "L-05"],
        ["heart", "Brands", "L-06"],
        ["bag", "Budget", "L-07"],
        ["calendar", "Events", "L-08"],
        ["user", "Style Twin", "L-09"],
      ]
        .map(
          ([ico, label, id]) =>
            `<button class="select-row" style="width:100%;border-left:0;border-right:0;border-top:0;background:transparent;text-align:left" onclick="go('${id}')"><span class="icon-wrap">${icon(ico)}</span><span class="grow">${label}</span><span>›</span></button>`,
        )
        .join(
          "",
        )}</div></section><section class="settings-section"><p class="settings-section-label">App</p><div class="settings-list"><button class="select-row" style="width:100%;border-left:0;border-right:0;border-top:0;background:transparent;text-align:left" onclick="toast('Notification preferences opened')"><span class="grow">Notifications</span><span>›</span></button><button class="select-row" style="width:100%;border-left:0;border-right:0;border-top:0;background:transparent;text-align:left" onclick="go('L-10')"><span class="grow">Photo originals</span><span>›</span></button><button class="select-row" style="width:100%;border:0;background:transparent;text-align:left" onclick="go('L-12')"><span class="grow">Tutorial & help</span><span>›</span></button></div></section><section class="settings-section"><p class="settings-section-label">Session</p><button class="danger-action" onclick="openLogout()">${icon("logout")} Log out</button></section>`,
      { active: "profile" },
    );
  return shell(
    "Tutorial",
    `<p class="eyebrow">Getting started</p><h2 class="display">StyleIQ is your stylist.</h2><img class="hero-img" src="${assets.look}" alt="StyleIQ tutorial"><div class="choice-list" style="margin-top:14px">${[
      ["Add to your Closet", "B-01"],
      ["Get styled", "D-02"],
      ["Save a Look", "G-01"],
      ["Create a Style Twin", "H-01"],
      ["Train Muse with feedback", "E-03"],
    ]
      .map(
        ([label, id]) =>
          `<button class="choice" onclick="go('${id}')"><b>${label}</b><span>›</span></button>`,
      )
      .join("")}</div>`,
    { active: "profile" },
  );
}
function enrichCoreScreens(s) {
  const content = app.querySelector(".content");
  if (!content) return;
  if (s.id === "L-01") {
    content.insertAdjacentHTML(
      "beforeend",
      `<section class="muse-profile"><div class="muse-profile-head"><img src="${assets.muse}" alt="Muse"><span class="grow"><p class="eyebrow">What Muse has learned</p><h3 class="title">Your style, in focus</h3></span><button class="btn small-btn" onclick="go('L-05')">Refine</button></div><p class="body">You lean toward warm neutrals, clean lines, and relaxed tailoring. You save structured layers but wear softer combinations most often.</p><div class="palette" aria-label="Your learned color palette"><i style="background:#241f1b"></i><i style="background:#8d623d"></i><i style="background:#d7c4a5"></i><i style="background:#eee7db"></i><i style="background:#788071"></i></div><button class="btn primary wide" onclick="go('M-01')">Open Muse profile</button></section><section class="card" style="margin-top:12px"><div class="between"><span><p class="eyebrow">Style evolution</p><b>Relaxed tailoring is up 18%</b></span><span class="pill gold">This month</span></div><div class="evolution-bar"><span></span></div><p class="body" style="margin-top:10px">Muse found 3 new combinations around your blazer without adding another purchase.</p><button class="btn wide" style="margin-top:12px" onclick="go('M-03')">See the wardrobe insight</button></section>`,
    );
  }
}
function museScreen(s) {
  if (s.id === "M-01")
    return shell(
      "Muse",
      `<div class="muse-profile-head"><img src="${assets.muse}" alt="Muse"><span><p class="eyebrow">From ${museContext.label}</p><h2 class="title">What can I style for you?</h2><p class="body">Muse is using this context with your Closet and preferences. Interpretation is simulated in this prototype.</p></span></div><div class="muse-context-card" role="status"><span class="icon-wrap">${icon("spark")}</span><span><b>Current context</b><small>${museContext.prompt}</small></span></div><div class="muse-prompt-grid"><button class="muse-prompt" onclick="canvasState.creationSource='muse_assisted';persist();go('M-02')"><span class="muse-prompt-icon">${icon("spark")}</span><b>Work from this context</b></button><button class="muse-prompt" onclick="canvasState.creationSource='muse_assisted';persist();go('F-01')"><span class="muse-prompt-icon">${icon("edit")}</span><b>Adjust the current Look</b></button><button class="muse-prompt" onclick="go('J-01')"><span class="muse-prompt-icon">${icon("bag")}</span><b>Help me pack</b></button><button class="muse-prompt" onclick="go('M-03')"><span class="muse-prompt-icon">${icon("search")}</span><b>Find a wardrobe gap</b></button></div><div class="field" style="margin-top:18px"><label>Ask in your own words</label><textarea class="textarea" placeholder="${museContext.prompt}"></textarea></div><button class="btn primary wide" style="margin-top:10px" onclick="canvasState.creationSource='muse_assisted';persist();go('M-02')">Ask Muse about this</button>`,
      { active: "home" },
    );
  if (s.id === "M-02")
    return shell(
      "Why this Look",
      `<p class="eyebrow">Muse’s recommendation</p><h2 class="display">Polished now. Easy later.</h2><img class="hero-img" src="${assets.look3}" alt="Tailored office Look recommended by Muse"><div class="reason-list"><div class="reason-row"><span class="icon-wrap">${icon("calendar")}</span><span><b>Your day</b><small class="body" style="display:block">Office-focused, with enough ease for dinner after work.</small></span></div><div class="reason-row"><span class="icon-wrap">${icon("spark")}</span><span><b>Your style</b><small class="body" style="display:block">Clean tailoring and warm neutrals match your strongest preferences.</small></span></div><div class="reason-row"><span class="icon-wrap">${icon("shirt")}</span><span><b>Your Closet</b><small class="body" style="display:block">Every piece is owned. The blazer has not been worn in 12 days.</small></span></div></div><div class="muse-actions"><button class="btn" onclick="go('D-04')">Alternatives</button><button class="btn primary" onclick="go('F-01')">Customize</button></div><button class="btn wide" style="margin-top:8px" onclick="go('E-01')">Wear & save this Look</button>`,
      { active: "home" },
    );
  return shell(
    "Wardrobe insight",
    `<div class="muse-profile-head"><img src="${assets.muse}" alt="Muse"><span><p class="eyebrow">Based on 14 saved decisions</p><h2 class="title">You don’t need another blazer.</h2></span></div><p class="body" style="margin-top:12px">Your real gap is a lightweight knit that works under the pieces you already own. It would unlock six combinations across work and weekend Looks.</p><div class="card" style="margin-top:16px"><img class="hero-img" style="height:180px" src="${assets.top2}" alt="Lightweight rust knit suggestion"><div class="between" style="margin-top:12px"><span><b>Lightweight knit</b><small class="body" style="display:block">Warm neutral · 6 possible Looks</small></span><span class="pill gold">Useful gap</span></div></div><div class="reason-list"><div class="reason-row"><span class="icon-wrap">${icon("check")}</span><span><b>No duplicate purchase</b><small class="body" style="display:block">Different role from your existing tops and layers.</small></span></div><div class="reason-row"><span class="icon-wrap">${icon("heart")}</span><span><b>High confidence</b><small class="body" style="display:block">Matches your palette, budget, and saved silhouettes.</small></span></div></div><button class="btn primary wide" onclick="go('K-02')">Review one suggestion</button><button class="btn wide" style="margin-top:8px" onclick="go('D-04')">Style without buying</button>`,
    { active: "home" },
  );
}
