const sections = {
  S: "Welcome & walkthrough",
  A: "Authentication & first use",
  B: "Import & Closet creation",
  C: "Closet",
  D: "Home & daily styling",
  E: "Outfit actions",
  F: "Style Studio / Canvas",
  G: "Saved Looks & Wishlist",
  H: "Avatar & Virtual Try-On",
  I: "Planner & events",
  J: "Trips",
  K: "Inspiration & community",
  L: "Profile & settings",
  M: "Muse stylist",
};
const raw = {
  A: [
    ["Sign in", "Dedicated login for returning accounts."],
    ["Set up your StyleIQ", "Personalization only: wardrobe context and the first thing StyleIQ should help with."],
    [
      "Email sign-up · State → A-16",
      "Inline email account creation state inside canonical A-16.",
    ],
    [
      "Verify email · State → A-16",
      "Inline OTP verification state inside canonical A-16.",
    ],
    ["First goal · Alias → A-02", "Resolves to canonical A-02 with the First Goal section focused."],
    [
      "Build Closet · Alias → B-01",
      "Resolves to canonical B-01 universal Closet intake.",
    ],
    [
      "Style Twin · Alias → H-01",
      "Resolves to canonical H-01 Style Twin setup.",
    ],
    ["Style Twin photo · Alias → H-01", "Resolves to canonical H-01 with photo reference active."],
    ["First goal · Alias → A-02", "Resolves to canonical A-02 with First Goal focused."],
    ["Wardrobe context · Alias → A-02", "Resolves to canonical A-02 with Wardrobe Context focused."],
    ["Today · Alias → D-02", "Resolves to canonical D-02 Today screen."],
    ["Add to Closet · Alias → B-01", "Resolves to canonical B-01 universal Closet intake."],
    ["Closet zero-state · Alias → C-01", "Resolves to canonical C-01 in zero-item state."],
    ["My Looks · Alias → G-01", "Resolves to canonical G-01 My Looks."],
    [
      "Trip planning · Alias → J-02",
      "Resolves to canonical J-02 Trip Setup.",
    ],
    [
      "Sign up",
      "The single canonical account-creation surface with Google, Apple, and inline Email/OTP.",
    ],
  ],
  B: [
    ["Add to Closet", "Universal Closet intake: photo selection, inline processing, search, receipt, and drafts drawer."],
    ["Photo picker · Alias → B-01", "Resolves to canonical B-01 in Photos intake mode."],
    ["Photo processing · State → B-01", "Inline background image cleanup state within B-01."],
    ["Import search · Alias → B-01", "Resolves to canonical B-01 in Search/URL mode."],
    ["Search results · State → B-01", "Inline search results state inside B-01."],
    ["Review Items", "The single canonical review screen supporting single/batch, inline recovery, and direct Closet save."],
    ["Photo recovery · State → B-06", "Inline low-confidence recovery state inside B-06 item card."],
    ["Review result · State → B-06", "Processed image preview state inside canonical B-06."],
    ["Receipt forwarding · Alias → B-01", "Resolves to canonical B-01 in Receipt Import mode."],
    ["Draft imports · Drawer → B-01", "Resolves to canonical B-01 with Draft Imports drawer open."],
    ["Success toast · Toast → C-01", "Resolves to canonical C-01 with 'Added to your Closet' success toast."],
  ],
  C: [
    ["Closet grid", "Canonical Closet root with search, sort, and categories."],
    ["Item detail", "Canonical single item page with hero, expandable edit, styling, intelligence, and Style CTA."],
    ["Photo tools · Sheet → C-02", "Resolves to canonical C-02 with Photo Tools sheet open."],
    [
      "Edit details · Section → C-02",
      "Resolves to canonical C-02 with Edit Details section focused.",
    ],
    ["Styling details · Section → C-02", "Resolves to canonical C-02 with Styling Details section focused."],
    ["Intelligence · Section → C-02", "Resolves to canonical C-02 with Wardrobe Intelligence section focused."],
    ["Style this item · Action → F-01", "Direct action dispatching to F-01 Style Studio with item locked as context."],
  ],
  D: [
    ["Zero Closet · State → D-02", "Resolves to canonical D-02 in zero-Closet Muse Starter Look state."],
    ["Today", "The single canonical daily styling hub: recommendation, Change Look sheet, and inline missing item card."],
    ["Loading · State → D-02", "Inline loading skeleton state inside D-02."],
    [
      "Change Look · Sheet → D-02",
      "Resolves to canonical D-02 with Change Look bottom sheet open.",
    ],
    ["Alternatives · Sheet → D-02", "Resolves to canonical D-02 with Change Look alternatives carousel active."],
    ["Missing piece · Card → D-02", "Resolves to canonical D-02 with contextual missing category card highlighted."],
  ],
  E: [
    ["Save Look · Sheet → Outfit", "Opens Save sheet over originating outfit; saves with toast."],
    ["Customize · Action → F-01", "Direct action routing to F-01 Style Studio with outfit preloaded."],
    ["Dislike · Sheet → Outfit", "Opens feedback sheet over current outfit."],
    ["Share Look · Sheet → Outfit", "Opens share sheet over current outfit."],
    ["Try On · Dispatch → H-10 / H-01", "Dispatches to H-10 (existing Twin) or H-01 (setup) preserving outfit."],
    ["Next Look · Action → Outfit", "Advances to next outfit variant inline."],
  ],
  F: [
    ["Style Studio", "The single canonical outfit editor: Flat Lay / On My Twin, Simple / Create, and progressive tool sheets."],
    [
      "Flat Lay · Alias → F-01",
      "Resolves to canonical F-01 with Flat Lay view mode active.",
    ],
    ["On My Twin · Alias → F-01", "Resolves to canonical F-01 with On My Twin view mode active."],
    ["Context · Alias → F-01", "Resolves to canonical F-01 with context controls open."],
    ["Layers · Alias → F-01", "Resolves to canonical F-01 with layers panel active."],
    ["Add layer · Sheet → F-01", "Resolves to canonical F-01 with Add Layer sheet open."],
    ["Picker · Sheet → F-01", "Resolves to canonical F-01 with Item Picker sheet open."],
    ["Multi-select · State → F-01", "Resolves to canonical F-01 with multi-select active."],
    ["Sources · Sheet → F-01", "Resolves to canonical F-01 with Sources selector sheet open."],
    ["Missing item · State → F-01", "Resolves to canonical F-01 with missing-item state open."],
    ["Draft · Alias → F-01", "Resolves to canonical F-01 resuming persisted draft."],
  ],
  G: [
    ["My Looks", "Canonical Saved Looks collection."],
    ["Saved Look", "Canonical single Look detail consolidating items, about, value, visibility, and activity."],
    ["Items · Section → G-02", "Resolves to canonical G-02 with Items section focused."],
    ["About · Section → G-02", "Resolves to canonical G-02 with Details/About section focused."],
    ["Value · Section → G-02", "Resolves to canonical G-02 with Value/usage section focused."],
    ["Visibility · Sheet → G-02", "Resolves to canonical G-02 with Visibility sheet open."],
    ["Activity · Section → G-02", "Resolves to canonical G-02 with Activity section focused."],
    ["My Wishlist", "Canonical Wishlist collection."],
    ["Before You Buy", "Canonical product evaluation with purchase confirmation modal to B-06."],
  ],
  H: [
    ["Create Your Style Twin", "Step 1 of 3: Value proposition, reference photo slots, and optional manual path."],
    ["Face reference · Alias → H-01", "Resolves to canonical H-01 with face photo slot active."],
    ["Body reference · Alias → H-01", "Resolves to canonical H-01 with body photo slot active."],
    ["Full reference · Alias → H-01", "Resolves to canonical H-01 with full-length photo slot active."],
    ["No-photo mode · State → H-01", "Resolves to canonical H-01 in no-photo manual mode."],
    ["Twin Details & Adjustments", "Step 2 of 3: Required height & body data, plus collapsed fine-tuning refinements."],
    ["Hair refine · Section → H-06", "Resolves to canonical H-06 with Hair fine-tuning expanded."],
    ["Pose refine · Section → H-06", "Resolves to canonical H-06 with Pose fine-tuning expanded."],
    ["Styling refine · Section → H-06", "Resolves to canonical H-06 with Styling fine-tuning expanded."],
    ["First result", "Step 3 of 3: Canonical Style Twin result wearing originating outfit."],
    [
      "Stylist discovery",
      "Browse outfits and style inspiration from Stylists.",
    ],
    [
      "Stylist profile",
      "Curated stylist profile with style direction and featured looks.",
    ],
    [
      "Stylist look detail",
      "Stylist outfit breakdown; Make It Mine routes directly to F-01.",
    ],
  ],
  I: [
    ["Calendar month", "Canonical Planner root with Day sheet, Insights sheet, and Share sheet."],
    ["Insights · Sheet → I-01", "Resolves to canonical I-01 with Insights sheet open."],
    ["Day sheet · Sheet → I-01", "Resolves to canonical I-01 with selected date Day sheet open."],
    ["Add Event", "Single canonical event-composer screen with inline validation."],
    ["Validation · State → I-04", "Inline validation state inside canonical I-04 event form."],
    ["Share Calendar · Sheet → I-01", "Resolves to canonical I-01 with Share sheet open."],
  ],
  J: [
    ["Trips list", "Canonical Trips collection: upcoming, past, and Plan a Trip CTA."],
    ["Trip Setup", "The single canonical Trip intake screen: natural language, structured fields, and inline generation."],
    ["Destination · Section → J-02", "Resolves to canonical J-02 with Destination section focused."],
    ["Luggage · Section → J-02", "Resolves to canonical J-02 with Luggage section focused."],
    ["Must bring · Section → J-02", "Resolves to canonical J-02 with Must-Bring section focused."],
    ["Activities · Section → J-02", "Resolves to canonical J-02 with Activities section focused."],
    ["Building Trip · State → J-02", "Inline generation progress state inside J-02 auto-advancing to J-08."],
    ["Trip Hub", "The single canonical Trip destination: Packing tab, Looks tab, sheets, and review."],
    ["Packing · Tab → J-08", "Resolves to canonical J-08 with Packing tab active."],
    ["Looks · Tab → J-08", "Resolves to canonical J-08 with Looks tab active."],
    ["Add Look · Sheet → J-08", "Resolves to canonical J-08 in Looks tab with Add Look sheet open."],
    ["Ask Muse Look · Sheet → J-08", "Resolves to canonical J-08 in Looks tab with Muse sheet open."],
    ["Review Trip · Modal → J-08", "Resolves to canonical J-08 with Save Trip confirmation modal."],
    ["Trip created · State → J-08", "Resolves to canonical J-08 with Trip Created success state."],
  ],
  K: [
    ["Feed", "Canonical Inspiration feed with inline Search overlay and Filters sheet."],
    ["Search · Overlay → K-01", "Resolves to canonical K-01 with Search overlay active."],
    ["Filters · Sheet → K-01", "Resolves to canonical K-01 with Filters sheet open."],
    ["Look detail", "Canonical inspiration Look detail with comments sheet, report modal, Try On, and Restyle."],
    ["Try On Me · Dispatch → H-10 / H-01", "Dispatches to H-10 (existing Twin) or H-01 (new Twin) with Look context."],
    ["Restyle · Action → F-01", "Direct action routing to F-01 Style Studio with Look preloaded."],
    ["Comments · Sheet → K-04", "Resolves to canonical K-04 with Comments sheet open."],
    ["Report · Modal → K-04", "Resolves to canonical K-04 with Report modal open."],
  ],
  L: [
    ["Profile", "Canonical Profile / My Atelier with inline completion card and content links."],
    ["Completion prompt · Card → L-01", "Inline completion prompt card inside canonical L-01."],
    ["My content · Section → L-01", "My Content section inside canonical L-01 linking to Looks and Trips."],
    ["Profile & Style Preferences", "Canonical identity, style preferences, and Brands & Fit settings."],
    ["Style preferences · Section → L-04", "Resolves to canonical L-04 with Style Preferences section focused."],
    ["Brands · Section → L-04", "Resolves to canonical L-04 with Brands section focused."],
    ["Shopping budget · Section → G-08", "Resolves to canonical Wishlist with Shopping Budget focused."],
    ["Recurring events · Section → I-01", "Resolves to canonical Planner with Recurring Events focused."],
    ["Avatar · Dispatch → H-10 / H-01", "Dispatches to H-10 (existing Twin) or H-01 (setup)."],
    ["Original photos · Section → L-11", "Resolves to canonical L-11 with Original Photos setting focused."],
    ["Settings", "Canonical Settings consolidating account, privacy, notifications, and media."],
    ["Tutorial", "Interactive tutorial for stylist, add, style, save, and feedback."],
    ["Notifications · Section → L-11", "Resolves to canonical L-11 with Notification settings focused."],
    ["Help center", "Help guides, support contact, and privacy help."],
    [
      "Privacy · Section → L-11",
      "Resolves to canonical L-11 with Privacy & Visibility focused.",
    ],
  ],
  M: [
    ["Ask Muse", "The single canonical Muse stylist destination: answers and wardrobe gaps inline."],
    [
      "Why this Look · Sheet → Source",
      "Opens explanation sheet over originating outfit or M-01.",
    ],
    [
      "Wardrobe gap · Context → M-01",
      "Resolves to canonical M-01 with Wardrobe Gap context active.",
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
];
// Keep the complete route catalog for old hashes and compatibility states.
// Only `screens` below is the visible prototype inventory.
const routeScreens = [
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
const canonicalVisualScreenIds = new Set([
  "S-00", "S-01",
  "A-01", "A-02", "A-16",
  "B-01", "B-06",
  "C-01", "C-02",
  "D-02",
  "F-01",
  "G-01", "G-02", "G-08", "G-09",
  "H-01", "H-06", "H-10", "H-11", "H-12", "H-13",
  "I-01", "I-04",
  "J-01", "J-02", "J-08",
  "K-01", "K-04",
  "L-01", "L-04", "L-11", "L-12", "L-14",
  "M-01",
]);
const screens = routeScreens.filter((screen) =>
  canonicalVisualScreenIds.has(screen.id),
);
Object.assign(
  routeScreens.find((s) => s.id === "J-07"),
  {
    title: "Building Trip",
    detail: "Generate the draft packing list and hand off to review.",
  },
);
Object.assign(
  routeScreens.find((s) => s.id === "J-08"),
  {
    title: "Packing review",
    detail:
      "Trip-scoped packing list with editable packed states and a clear next action.",
  },
);
Object.assign(
  routeScreens.find((s) => s.id === "J-10"),
  {
    title: "Trip Looks",
    detail: "Plan one Look per date, explicitly inside the Trip draft.",
  },
);
Object.assign(
  routeScreens.find((s) => s.id === "J-13"),
  {
    title: "Review & create",
    detail: "Final summary before creating the Trip.",
  },
);
Object.assign(
  routeScreens.find((s) => s.id === "J-14"),
  {
    title: "Trip created",
    detail: "Saved Trip hub with packing, Looks, and return path.",
  },
);
Object.assign(
  routeScreens.find((s) => s.id === "L-02"),
  {
    title: "Inline profile · compatibility alias",
    detail:
      "The canonical My Atelier profile with its editor expanded in context.",
  },
);
Object.assign(
  routeScreens.find((s) => s.id === "L-03"),
  { title: "My content", detail: "Connected Saved Looks and Trips hub." },
);
Object.assign(
  routeScreens.find((s) => s.id === "L-11"),
  {
    title: "Settings",
    detail: "Account, styling, privacy, app controls, and secure logout.",
  },
);
Object.assign(
  routeScreens.find((s) => s.id === "A-12"),
  {
    title: "Closet import introduction",
    detail: "Automatic photo cleanup and classification preview.",
  },
);
Object.assign(
  routeScreens.find((s) => s.id === "B-03"),
  {
    title: "Automatic photo cleanup",
    detail: "Canonical Add Photos path; cleanup runs in the background.",
  },
);
Object.assign(
  routeScreens.find((s) => s.id === "B-06"),
  {
    title: "Item review",
    detail: "One compact confidence review with inline correction.",
  },
);
Object.assign(
  routeScreens.find((s) => s.id === "B-07"),
  {
    title: "Photo recovery",
    detail: "Low-confidence retry or manual-review exception.",
  },
);
Object.assign(
  routeScreens.find((s) => s.id === "B-08"),
  {
    title: "Item review result",
    detail: "Canonical item review result, not a separate processing stage.",
  },
);
Object.assign(
  routeScreens.find((s) => s.id === "C-03"),
  {
    title: "Item detail · photo tools",
    detail: "Photo repair in the shared Item Detail sheet.",
  },
);
Object.assign(
  routeScreens.find((s) => s.id === "L-10"),
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
    routeScreens.find((s) => s.id === id),
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
    routeScreens.find((s) => s.id === id),
    { title, detail },
  ),
);
if (new Set(routeScreens.map((screen) => screen.id)).size !== routeScreens.length)
  throw new Error("Screen inventory must contain unique route ids");
if (screens.length !== 34 || routeScreens.length - screens.length !== 93)
  throw new Error("Visible inventory must contain 34 canonical screens and 93 compatibility routes");
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
// Project-specific people photography. Each role has its own local image so
// repeated surfaces stay consistent without recycling one generic stock shot.
const peoplePhotos = {
  womanPortrait: "images/person-amelia-profile.png",
  manPortrait: "images/person-menswear-profile.png",
  womanFashion: "images/look-coffee-meeting-cairo.png",
  womanStreet: "images/look-soft-tailoring-cairo.png",
  womanEditorial: "images/look-evening-cairo.png",
  manFashion: "images/look-menswear-studio-cairo.png",
  coupleTravel: "images/trip-packing-cairo.png",
  musePortrait: "images/muse_portrait.png",
  onboardingMuse: "images/onboarding-muse.png",
  creatorPortrait: "images/profile_woman.png",
};
const assets = {
  top: "images/item_silk_shell.png",
  top2: "images/alta-rust-knit-top.png",
  blazer: "images/item_blazer.png",
  bottom: "images/cat_clothing.png",
  shoes: "images/cat_shoes.png",
  bag: "images/cat_bags.png",
  accessory: "images/cat_accessories.png",
  look: peoplePhotos.womanFashion,
  look2: peoplePhotos.womanStreet,
  look3: peoplePhotos.womanEditorial,
  look4: peoplePhotos.manFashion,
  profile: peoplePhotos.womanPortrait,
  muse: peoplePhotos.musePortrait,
  body: peoplePhotos.womanFashion,
  face: peoplePhotos.womanPortrait,
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
  building: false,
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
let tripDraft = (() => {
  try {
    return JSON.parse(localStorage.getItem("styleiqTripDraftV2")) || {
      destination: "Alexandria",
      startDate: "2026-08-23",
      endDate: "2026-08-25",
      occasions: ["Museum visit", "Dinner by the Corniche"],
      luggage: "Carry on",
      notes: "Three days with a museum visit and dinner by the Corniche.",
    };
  } catch {
    return { destination: "Alexandria", startDate: "2026-08-23", endDate: "2026-08-25", occasions: ["Museum visit", "Dinner by the Corniche"], luggage: "Carry on", notes: "" };
  }
})();
const legacyScreenAliases = {
  // A: Authentication & First Use
  "A-03": { screen: "A-16", state: "email" },
  "A-04": { screen: "A-16", state: "otp" },
  "A-05": { screen: "A-02", section: "goal" },
  "A-06": { screen: "B-01", mode: "photos" },
  "A-07": { screen: "H-01" },
  "A-08": { screen: "H-01", section: "photo" },
  "A-09": { screen: "A-02", section: "goal" },
  "A-10": { screen: "A-02", section: "wardrobe" },
  "A-11": { screen: "D-02" },
  "A-12": { screen: "B-01" },
  "A-13": { screen: "C-01", state: "zero" },
  "A-14": { screen: "G-01" },
  "A-15": { screen: "J-02" },

  // B: Import & Closet Creation
  "B-02": { screen: "B-01", mode: "photos" },
  "B-03": { screen: "B-01", mode: "processing" },
  "B-04": { screen: "B-01", mode: "search" },
  "B-05": { screen: "B-01", mode: "search-results" },
  "B-07": { screen: "B-06", state: "recovery" },
  "B-08": { screen: "B-06", state: "preview" },
  "B-09": { screen: "B-01", mode: "receipt" },
  "B-10": { screen: "B-01", panel: "draftImports" },
  "B-11": { screen: "C-01", toast: "Added to your Closet" },

  // C: Closet
  "C-03": { screen: "C-02", panel: "photoTools" },
  "C-04": { screen: "C-02", section: "edit" },
  "C-05": { screen: "C-02", section: "styling" },
  "C-06": { screen: "C-02", section: "intelligence" },
  "C-07": { screen: "F-01", action: "style-item" },

  // D: Home & Daily Styling
  "D-01": { screen: "D-02", state: "zero-closet" },
  "D-03": { screen: "D-02", state: "loading" },
  "D-04": { screen: "D-02", panel: "changeLook" },
  "D-05": { screen: "D-02", panel: "changeLook", view: "carousel" },
  "D-06": { screen: "D-02", state: "missing-category" },

  // E: Outfit Actions
  "E-01": { screen: "D-02", panel: "save" },
  "E-02": { screen: "F-01", action: "customize" },
  "E-03": { screen: "D-02", panel: "feedback" },
  "E-04": { screen: "D-02", panel: "share" },
  "E-05": { dynamic: "tryon" },
  "E-06": { screen: "D-02", action: "next-look" },

  // F: Style Studio
  "F-02": { screen: "F-01", view: "flatlay" },
  "F-03": { screen: "F-01", view: "twin" },
  "F-04": { screen: "F-01", section: "context" },
  "F-05": { screen: "F-01", section: "layers" },
  "F-06": { screen: "F-01", panel: "add-layer" },
  "F-07": { screen: "F-01", panel: "picker" },
  "F-08": { screen: "F-01", state: "multiselect" },
  "F-09": { screen: "F-01", panel: "sources" },
  "F-10": { screen: "F-01", state: "missing-item" },
  "F-11": { screen: "F-01", action: "resume-draft" },

  // G: Saved Looks & Wishlist
  "G-03": { screen: "G-02", section: "items" },
  "G-04": { screen: "G-02", section: "details" },
  "G-05": { screen: "G-02", section: "value" },
  "G-06": { screen: "G-02", panel: "visibility" },
  "G-07": { screen: "G-02", section: "activity" },

  // H: Style Twin
  "H-02": { screen: "H-01", section: "photo-face" },
  "H-03": { screen: "H-01", section: "photo-body" },
  "H-04": { screen: "H-01", section: "photo-angle" },
  "H-05": { screen: "H-01", mode: "manual" },
  "H-07": { screen: "H-06", section: "refine-hair" },
  "H-08": { screen: "H-06", section: "refine-fit" },
  "H-09": { screen: "H-06", section: "refine-styling" },

  // I: Planner
  "I-02": { screen: "I-01", panel: "plannerInsights" },
  "I-03": { screen: "I-01", panel: "daySheet" },
  "I-05": { screen: "I-04", state: "validation" },
  "I-06": { screen: "I-01", panel: "shareCalendar" },

  // J: Trips
  "J-03": { screen: "J-02", section: "destination" },
  "J-04": { screen: "J-02", section: "luggage" },
  "J-05": { screen: "J-02", section: "must-bring" },
  "J-06": { screen: "J-02", section: "activities" },
  "J-07": { screen: "J-02", state: "building" },
  "J-09": { screen: "J-08", tab: "packing" },
  "J-10": { screen: "J-08", tab: "looks" },
  "J-11": { screen: "J-08", tab: "looks", panel: "tripAddLook" },
  "J-12": { screen: "J-08", tab: "looks", panel: "tripMuse" },
  "J-13": { screen: "J-08", modal: "tripReview" },
  "J-14": { screen: "J-08", state: "success" },

  // K: Inspiration
  "K-02": { screen: "K-01", state: "search" },
  "K-03": { screen: "K-01", panel: "discoverFilters" },
  "K-05": { dynamic: "tryon" },
  "K-06": { screen: "F-01", action: "restyle" },
  "K-07": { screen: "K-04", panel: "lookComments" },
  "K-08": { screen: "K-04", modal: "reportLook" },

  // L: Profile & Settings
  "L-02": { screen: "L-01", section: "completion" },
  "L-03": { screen: "L-01", section: "content" },
  "L-05": { screen: "L-04", section: "style" },
  "L-06": { screen: "L-04", section: "brands" },
  "L-07": { screen: "G-08", section: "budget" },
  "L-08": { screen: "I-01", section: "recurring" },
  "L-09": { dynamic: "avatar" },
  "L-10": { screen: "L-11", section: "photos" },
  "L-13": { screen: "L-11", section: "notifications" },
  "L-15": { screen: "L-11", section: "privacy" },

  // M: Muse
  "M-02": { screen: "M-01", context: "why-look" },
  "M-03": { screen: "M-01", context: "wardrobe-gap" },
};

function getCanonicalScreen(id) {
  if (id === "G-8") return "G-08";
  if (id === "G-9") return "G-09";
  const mapped = legacyScreenAliases[id];
  if (mapped) {
    if (mapped.dynamic === "tryon" || mapped.dynamic === "avatar") {
      return (typeof twinSetup !== "undefined" && twinSetup.complete) ? "H-10" : "H-01";
    }
    return mapped.screen;
  }
  return id;
}

const legacyRouteMap = new Proxy({}, {
  get(_, prop) {
    return legacyScreenAliases[prop]?.screen || undefined;
  }
});

let authInlineState = "providers", // "providers" | "email" | "otp"
  a02FocusedSection = "wardrobe", // "wardrobe" | "goal"
  b01Mode = "photos", // "photos" | "search" | "receipt"
  b01Processing = false,
  todayMode = (typeof localStorage !== "undefined" && localStorage.getItem("styleiqTodayModeV1")) || "normal", // "normal" | "zero-closet" | "loading" | "missing"
  tripHubTab = "packing", // "packing" | "looks"
  tripHubSaved = false,
  profilePrefSection = "about", // "about" | "style" | "brands"
  wishlistBudgetOpen = false,
  plannerRecurringOpen = false,
  settingsSection = "general", // "general" | "photos" | "notifications" | "privacy"
  discoverSearchOpen = false;

function resolveCanonicalRoute(id) {
  if (id === "G-8") id = "G-08";
  if (id === "G-9") id = "G-09";
  if (proactiveEditIndex !== null && ["I-04", "I-05"].includes(id)) {
    return { screen: id, canonical: "I-04", entry: null };
  }
  const mapped = legacyScreenAliases[id];
  if (!mapped) return { screen: id, canonical: id, entry: null };

  const canonical = getCanonicalScreen(id);
  let panel = null;
  const setRoutePanel = (value) => {
    lightweightPanel = value;
    panel = value;
  };
  if (id === "A-03") authInlineState = "email";
  else if (id === "A-04") authInlineState = "otp";
  else if (id === "A-16") authInlineState = "providers";
  else if (["A-05", "A-09"].includes(id)) a02FocusedSection = "goal";
  else if (id === "A-06") b01Mode = "photos";
  else if (id === "A-10") a02FocusedSection = "wardrobe";
  else if (id === "B-02") b01Mode = "photos";
  else if (id === "B-03") { b01Mode = "photos"; b01Processing = true; }
  else if (["B-04", "B-05"].includes(id)) b01Mode = "search";
  else if (id === "B-07") { uploadIssue = "unable"; }
  else if (id === "B-09") b01Mode = "receipt";
  else if (id === "B-08") {
    const drafts = savedBatchDrafts();
    if (!batchImportActive && drafts.length) {
      batchSessionCandidates = drafts;
      batchImportActive = true;
    }
  }
  else if (id === "B-10") setRoutePanel("draftImports");
  else if (id === "B-11") { toast("Added to your Closet"); }
  else if (id === "C-03") setRoutePanel("photoTools");
  else if (id === "C-04") closetDetailTab = "details";
  else if (id === "C-05") closetDetailTab = "details";
  else if (id === "C-06") closetDetailTab = "activity";
  else if (id === "C-07") { closetStyleIntent = true; }
  else if (id === "D-01") todayMode = "zero-closet";
  else if (id === "D-03") todayMode = "loading";
  else if (id === "D-04") setRoutePanel("changeLook");
  else if (id === "D-05") setRoutePanel("changeLook");
  else if (id === "D-06") todayMode = "missing";
  else if (id === "E-01") setRoutePanel("save");
  else if (id === "E-03") setRoutePanel("feedback");
  else if (id === "E-04") setRoutePanel("share");
  else if (id === "F-02") canvasState.mode = "flat";
  else if (id === "F-03") canvasState.mode = "avatar";
  else if (["F-05", "F-06", "F-07", "F-08", "F-09", "F-10"].includes(id)) canvasState.studioMode = "create";
  else if (id === "G-03") savedLookTab = "items";
  else if (id === "G-04") savedLookTab = "details";
  else if (id === "G-05") savedLookTab = "details";
  else if (id === "G-06") setRoutePanel("visibility");
  else if (id === "G-07") savedLookTab = "activity";
  else if (["H-02", "H-03", "H-04"].includes(id)) twinSetup.method = "photo";
  else if (id === "H-05") twinSetup.method = "manual";
  else if (id === "I-02") setRoutePanel("plannerInsights");
  else if (id === "I-03") setRoutePanel("daySheet");
  else if (id === "I-05") plannerValidationErrors = ["Choose a date", "Choose an occasion", "Choose a time or daypart"];
  else if (id === "I-06") setRoutePanel("shareCalendar");
  else if (id === "J-09") tripHubTab = "packing";
  else if (id === "J-10") tripHubTab = "looks";
  else if (id === "J-11") { tripHubTab = "looks"; setRoutePanel("tripAddLook"); }
  else if (id === "J-12") { tripHubTab = "looks"; setRoutePanel("tripMuse"); }
  else if (id === "J-13") setRoutePanel("tripReview");
  else if (id === "J-14") tripHubSaved = true;
  else if (id === "K-02") discoverSearchOpen = true;
  else if (id === "K-03") setRoutePanel("discoverFilters");
  else if (id === "K-07") setRoutePanel("lookComments");
  else if (id === "K-08") setRoutePanel("reportLook");
  else if (["L-05", "L-06"].includes(id)) profilePrefSection = mapped.section;
  else if (id === "L-07") wishlistBudgetOpen = true;
  else if (id === "L-08") plannerRecurringOpen = true;
  else if (["L-10", "L-13", "L-15"].includes(id)) settingsSection = mapped.section;
  else if (id === "M-02") setRoutePanel("whyLook");
  else if (id === "M-03") museContext = { label: "Wardrobe gap", prompt: "Evaluate Closet gaps without duplicate shopping." };

  return { screen: canonical, canonical, entry: mapped, panel };
}
let currentId = ({ "G-8": "G-08", "G-9": "G-09" })[location.hash.slice(1)] || location.hash.slice(1) || "S-00",
  overlay = null,
  lightweightPanel = null,
  accountMenuOpen = false,
  notificationsOpen = false,
  navHistory = [],
  plannerEventCreated = localStorage.getItem("styleiqPlannerEventV2") !== null || localStorage.getItem("styleiqPlannerIntentV1") !== null,
  closetTab = "closet",
  walkthroughIndex = 0;
// Reviewer-controlled customer context. The buttons write this to the URL so
// reloads preserve the preview without inferring identity from browser storage.
const requestedCustomerScenario = new URLSearchParams(location.search).get("customer");
let customerScenario = ["new", "existing"].includes(requestedCustomerScenario)
  ? requestedCustomerScenario
  : currentId.startsWith("S-") || currentId.startsWith("A-")
    ? "new"
    : "existing";
const isExistingCustomer = () => customerScenario === "existing";
function syncCustomerScenarioUrl() {
  const url = new URL(location.href);
  url.searchParams.set("customer", customerScenario);
  history.replaceState(null, "", url);
}
let feedbackReason = "",
  museContext = {
    label: "Open question",
    prompt: "Ask about your wardrobe, plans, or personal style.",
  };
let stylingContext =
  localStorage.getItem("styleiqStylingContextV1") || "Womenswear";
let onboardingGoal = localStorage.getItem("styleiqOnboardingGoalV1") || "";
let accountIdentity = (() => {
  try {
    return JSON.parse(localStorage.getItem("styleiqAccountIdentityV1")) || {};
  } catch {
    return {};
  }
})();
function persistAccountIdentity(identity) {
  accountIdentity = { ...accountIdentity, ...identity };
  localStorage.setItem("styleiqAccountIdentityV1", JSON.stringify(accountIdentity));
  const fullName = [accountIdentity.firstName, accountIdentity.lastName].filter(Boolean).join(" ");
  if (fullName) localStorage.setItem("styleiqUserNameV1", fullName);
}
let plannerIntent = (() => {
  try {
    return JSON.parse(localStorage.getItem("styleiqPlannerIntentV1")) || null;
  } catch {
    return null;
  }
})();
let plannerEvent = (() => {
  try {
    return JSON.parse(localStorage.getItem("styleiqPlannerEventV2")) || null;
  } catch {
    return null;
  }
})();
let plannerEventDraft = plannerEvent
  ? { ...plannerEvent }
  : { date: "", time: "", daypart: "", occasion: "", title: "", location: "", weather: "" };
let plannerValidationErrors = [];
let plannerValidationOpen = false;
let plannerLookChooserOpen = false;
let plannerLookChoice = plannerEvent?.lookId || "coffee";
let nextWeekPrepared =
  localStorage.getItem("styleiqNextWeekPreparedV1") === "true";
let proactiveWeek = readWishlistData("styleiqProactiveWeekV1", []);
let proactiveEditIndex = null;
let selectedPlannerDayIndex = 0;
let recurringEvents = readWishlistData("styleiqRecurringEventsV1", [
  { id: "office-day", title: "Weekly office day", schedule: "Every Monday", context: "Work · polished layers" },
  { id: "client-dinner", title: "Client dinner", schedule: "First Thursday monthly", context: "Dinner · refined" },
  { id: "weekend-social", title: "Weekend social", schedule: "Every Saturday", context: "Weekend · relaxed" },
]);
let recurringEditId = null;
function persistRecurringEvents() {
  localStorage.setItem("styleiqRecurringEventsV1", JSON.stringify(recurringEvents));
}
function openRecurringPlanner() {
  plannerRecurringOpen = true;
  go("I-01");
}
function editRecurringEvent(id) {
  recurringEditId = id;
  plannerRecurringOpen = true;
  render();
}
function removeRecurringEvent(id) {
  recurringEvents = recurringEvents.filter((event) => event.id !== id);
  if (recurringEditId === id) recurringEditId = null;
  persistRecurringEvents();
  render();
}
function saveRecurringEvent(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const entry = {
    id: recurringEditId || `recurring-${Date.now()}`,
    title: String(data.get("title") || "").trim(),
    schedule: String(data.get("schedule") || "").trim(),
    context: String(data.get("context") || "").trim(),
  };
  if (!entry.title || !entry.schedule) return;
  const existing = recurringEvents.findIndex((item) => item.id === recurringEditId);
  if (existing >= 0) recurringEvents[existing] = entry;
  else recurringEvents.push(entry);
  recurringEditId = null;
  persistRecurringEvents();
  render();
  toast("Recurring event saved");
}
function recurringPlannerSection() {
  const editing = recurringEvents.find((event) => event.id === recurringEditId);
  return `<details class="card progressive-card planner-recurring" ${plannerRecurringOpen ? "open" : ""} ontoggle="plannerRecurringOpen=this.open"><summary><b>Recurring events</b><span class="small">${recurringEvents.length} styling routines</span></summary><div class="stack" style="margin-top:12px">${recurringEvents.map((event) => `<div class="pack-row"><span><b>${escapeMarkup(event.title)}</b><small class="body" style="display:block">${escapeMarkup(event.schedule)} · ${escapeMarkup(event.context)}</small></span><div><button class="text-action" onclick="editRecurringEvent('${event.id}')">Edit</button><button class="text-action" onclick="removeRecurringEvent('${event.id}')">Remove</button></div></div>`).join("") || '<p class="body">No recurring events yet.</p>'}<form class="stack" onsubmit="saveRecurringEvent(event)"><div class="field"><label for="recurring-title">Event</label><input id="recurring-title" name="title" class="input" value="${escapeMarkup(editing?.title || "")}" placeholder="e.g. Weekly office day" required></div><div class="field"><label for="recurring-schedule">Schedule</label><input id="recurring-schedule" name="schedule" class="input" value="${escapeMarkup(editing?.schedule || "")}" placeholder="e.g. Every Monday" required></div><div class="field"><label for="recurring-context">Styling context</label><input id="recurring-context" name="context" class="input" value="${escapeMarkup(editing?.context || "")}" placeholder="e.g. Work · polished layers"></div><button class="btn wide" type="submit">${editing ? "Save recurring event" : "Add recurring event"}</button></form></div></details>`;
}
function planMyWeek() {
  const today = new Date();
  today.setDate(today.getDate() + (8-today.getDay())%7);
  const looks = Object.values(tryOnLooks);
  proactiveWeek = ['Office','Dinner','Casual','Office'].map((context,index) => {
    const date = new Date(today); date.setDate(date.getDate()+index);
    const look = looks[index%looks.length];
    return { day: ['MON','TUE','WED','THU'][index], date: `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`, context, lookId: look.id, look: look.title, image: look.sheet };
  });
  localStorage.setItem("styleiqProactiveWeekV1", JSON.stringify(proactiveWeek));
  render();
}
function changeProactiveLook(index) {
  const entry = proactiveWeek[index];
  if (!entry) return;
  const looks = Object.values(tryOnLooks), next = looks[(looks.findIndex(look => look.id === entry.lookId)+1)%looks.length];
  Object.assign(entry, { lookId: next.id, look: next.title, image: next.sheet });
  localStorage.setItem("styleiqProactiveWeekV1", JSON.stringify(proactiveWeek));
  render();
}
function editProactiveContext(index) {
  const entry = proactiveWeek[index]; if (!entry) return;
  proactiveEditIndex = index;
  plannerEventDraft = { date: entry.date || wishlistDate(index+1), time: entry.time || '', daypart: entry.daypart || 'All day', occasion: ({Office:'Work',Casual:'Weekend'})[entry.context] || entry.context, title: entry.title || '', location: entry.location || '', weather: entry.weather || '' };
  plannerLookChoice = entry.lookId || 'coffee';
  plannerValidationErrors = [];
  plannerValidationOpen = false;
  plannerLookChooserOpen = false;
  go('I-04');
}
function removeProactiveLook(index) {
  proactiveWeek.splice(index, 1);
  localStorage.setItem("styleiqProactiveWeekV1", JSON.stringify(proactiveWeek));
  render();
}
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
    size: isExistingCustomer()
      ? localStorage.getItem("styleiqClosetSizeV1") === null
        ? 12
        : Math.max(0, Number(localStorage.getItem("styleiqClosetSizeV1")) || 0)
      : 0,
    query: "",
    category: "All",
    collection: "All pieces",
    sort: "Recently added",
  },
  selectedClosetItemId = localStorage.getItem("styleiqSelectedClosetItemV1") || "closet-1",
  closetDetailTab = "overview",
  closetStyleIntent = false;
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
// Product records are separate from owned Closet items and complete Saved Looks.
const wishlistCollections = ["Everyday", "Workwear", "Travel", "Occasionwear", "Inspiration"];
const wishlistStatuses = ["All", "Saved", "Review Later", "Ready to Buy", "Purchased", "Unavailable"];
const wishlistStorageKey = "styleiqWishlistV1";
function readWishlistData(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return Array.isArray(value) ? value : fallback;
  } catch { return fallback; }
}
function wishlistDate(offset = 0) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
const shoppingProducts = [
  { id: "leather-loafers", name: "Leather Loafers", brand: "Vagabond", image: "images/alta-tan-suede-loafers.png", category: "Shoes", price: 214, previousPrice: 236, collection: "Everyday", compatibility: 88, outfitCount: 14, duplicateRisk: "Low", similarClosetId: "closet-5", gap: "Everyday Shoes", gapValue: "High", gapId: "everyday-shoes", style: "A clean shape that works with your straight trousers and relaxed tailoring.", recommendation: "A practical replacement for worn work shoes. The shape works across 14 outfit ideas; check the condition of your current suede pair before replacing it." },
  { id: "tailored-blazer", name: "Camel Tailored Blazer", brand: "Balmain", image: assets.blazer, category: "Outerwear", price: 320, collection: "Workwear", compatibility: 76, outfitCount: 6, duplicateRisk: "Medium", similarClosetId: "closet-1", gap: "Workwear layers", gapValue: "Medium", style: "Strong style alignment with your tailored silhouettes, with a warmer color but a similar shape to your owned blazer.", recommendation: "Your black tailored blazer already does this job and has only three wears. Compare the two before adding another work layer." },
  { id: "ivory-knit", name: "Ivory Silk Shell", brand: "Aritzia", image: assets.top, category: "Tops", price: 180, collection: "Everyday", availability: "Unavailable", compatibility: 84, outfitCount: 9, duplicateRisk: "Medium", similarClosetId: "closet-2", gap: "Light base layers", gapValue: "Medium", style: "Ivory fits your neutral palette and layers under existing jackets.", recommendation: "Your existing silk shell already covers this role. Keep it for a seasonal review while it is unavailable." },
  { id: "rust-knit", name: "Rust Square-neck Knit", brand: "StyleIQ Atelier", image: assets.top2, category: "Tops", price: 95, collection: "Workwear", compatibility: 82, outfitCount: 6, duplicateRisk: "High", similarClosetId: "closet-3", gap: "Lightweight layers", gapValue: "Low", gapId: "lightweight-layers", style: "Rust follows your warm palette and works under your black blazer.", recommendation: "You already own a rust square-neck knit. Try that piece in six combinations before deciding whether a replacement is needed." },
  { id: "shoulder-bag", name: "Leather Shoulder Bag", brand: "Cuyana", image: "images/alta-oxblood-crescent-bag.png", category: "Bags", price: 248, collection: "Everyday", compatibility: 80, outfitCount: 8, duplicateRisk: "High", similarClosetId: "closet-6", gap: "Everyday bags", gapValue: "Low", style: "Oxblood works with the warm neutrals you wear most.", recommendation: "Your crescent bag covers a similar role and has only four wears. Compare capacity and comfort before choosing another everyday bag." },
].map((product) => ({ retailer: product.brand, productUrl: "", availability: "In stock", previousPrice: null, ...product }));
let wishlistItems = readWishlistData(wishlistStorageKey, shoppingProducts.slice(0, 4).map((product, index) => ({
  ...product, dateSaved: wishlistDate(-12 + index),
  status: ["Ready to Buy", "Saved", "Saved", "Review Later"][index],
  note: index === 0 ? "Replace worn work loafers." : "",
  reminder: index === 3 ? wishlistDate(30) : "", purchaseDate: null, closetId: null,
})));
// This is the canonical persisted collection for user-owned items. Keep the
// legacy purchases key in sync so existing Wishlist purchase links continue to
// resolve to the same Closet entities.
let purchasedClosetItems = readWishlistData(
  "styleiqClosetItemsV1",
  readWishlistData("styleiqClosetPurchasesV1", []),
);
function persistClosetItems() {
  localStorage.setItem("styleiqClosetItemsV1", JSON.stringify(purchasedClosetItems));
  localStorage.setItem("styleiqClosetPurchasesV1", JSON.stringify(purchasedClosetItems));
}
if (localStorage.getItem(wishlistStorageKey) === null) localStorage.setItem(wishlistStorageKey, JSON.stringify(wishlistItems));
let wishlistFilter = "All", selectedWishlistId = wishlistItems[0]?.id || shoppingProducts[0].id;
let wishlistDialog = null, wishlistReviewOpen = false, wishlistUndo = null, wishlistReturnFocus = null;
let shoppingBudget = (() => {
  try {
    return JSON.parse(localStorage.getItem("styleiqShoppingBudgetV1")) || { perItem: 250, monthly: 1000, note: "Prioritize versatile Closet gaps." };
  } catch {
    return { perItem: 250, monthly: 1000, note: "Prioritize versatile Closet gaps." };
  }
})();
function openShoppingBudget() {
  wishlistBudgetOpen = true;
  go("G-08");
}
function saveShoppingBudget(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  shoppingBudget = {
    perItem: Math.max(0, Number(data.get("perItem")) || 0),
    monthly: Math.max(0, Number(data.get("monthly")) || 0),
    note: String(data.get("note") || "").trim(),
  };
  localStorage.setItem("styleiqShoppingBudgetV1", JSON.stringify(shoppingBudget));
  wishlistBudgetOpen = true;
  render();
  toast("Shopping budget saved");
}
function shoppingBudgetSection() {
  return `<details class="card progressive-card wishlist-budget-settings" ${wishlistBudgetOpen ? "open" : ""} ontoggle="wishlistBudgetOpen=this.open"><summary><b>Shopping budget</b><span class="small">Optional decision context</span></summary><form class="stack" style="margin-top:12px" onsubmit="saveShoppingBudget(event)"><div class="field"><label for="budget-item">Per-item guide</label><input id="budget-item" name="perItem" class="input" type="number" min="0" step="1" value="${shoppingBudget.perItem}"></div><div class="field"><label for="budget-monthly">Monthly shopping guide</label><input id="budget-monthly" name="monthly" class="input" type="number" min="0" step="1" value="${shoppingBudget.monthly}"></div><div class="field"><label for="budget-note">Shopping intention</label><input id="budget-note" name="note" class="input" value="${escapeMarkup(shoppingBudget.note)}"></div><p class="small">StyleIQ uses these guides for purchase decisions. It does not hold money, reserve funds, or make purchases.</p><button class="btn wide" type="submit">Save shopping budget</button></form></details>`;
}
let closetPurchaseDraft = (() => {
  try { return currentId === "B-06" ? JSON.parse(localStorage.getItem("styleiqClosetPurchaseDraftV1")) : null; }
  catch { return null; }
})();
const wishlistMoney = (value) => Number.isFinite(value)
  ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(value)
  : "Price not provided";
const wishlistDisplayDate = (value) => value ? new Date(`${value}T12:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "No reminder";
const wishlistStatus = (item) => item.status === "Purchased" ? "Purchased" : item.availability === "Unavailable" ? "Unavailable" : item.status;
const wishlistProduct = (id) => wishlistItems.find((item) => item.id === id) || shoppingProducts.find((item) => item.id === id);
function persistWishlist() { localStorage.setItem(wishlistStorageKey, JSON.stringify(wishlistItems)); }
function wishlistStats() {
  const saved = wishlistItems.filter((item) => item.status !== "Purchased");
  return { saved: saved.length, ready: saved.filter((item) => wishlistStatus(item) === "Ready to Buy").length,
    drops: saved.filter((item) => item.availability !== "Unavailable" && item.previousPrice > item.price && Number.isFinite(item.price)).length };
}
function wishlistRefresh() {
  const positions = [".content", ".lens-sheet", ".studio-piece-rail"].map((selector) => {
    const el = app.querySelector(selector);
    return [selector, el?.scrollTop || 0, el?.scrollLeft || 0];
  });
  render();
  positions.forEach(([selector, top, left]) => { const el = app.querySelector(selector); if (el) { el.scrollTop = top; el.scrollLeft = left; } });
}
function wishlistHeart(product) {
  if (!product || product.owned || purchasedClosetItems.some((item) => item.wishlistId === product.id)) return "";
  const saved = wishlistItems.some((item) => item.id === product.id);
  return `<button type="button" class="wishlist-heart ${saved ? "is-saved" : ""}" data-wishlist-heart="${escapeMarkup(product.id)}" aria-pressed="${saved}" aria-label="${saved ? "Wishlist options for" : "Save to Wishlist:"} ${escapeMarkup(product.name)}" onclick="event.stopPropagation();toggleWishlistHeart('${product.id}')">${icon("heart")}</button>`;
}
function saveWishlistProduct(id, context = {}) {
  const existing = wishlistItems.find((item) => item.id === id), product = wishlistProduct(id);
  if (!product) return;
  const owned = purchasedClosetItems.find((item) => item.wishlistId === id);
  if (existing) Object.assign(existing, context);
  else wishlistItems.unshift({ ...product, dateSaved: wishlistDate(), status: owned ? "Purchased" : "Saved", note: "", reminder: "", purchaseDate: owned?.purchaseDate || null, closetId: owned?.id || null, ...context });
  persistWishlist();
}
function toggleWishlistHeart(id) {
  if (wishlistItems.some((item) => item.id === id)) { openWishlistDialog("options", id); return; }
  saveWishlistProduct(id);
  wishlistRefresh();
  app.querySelector(`[data-wishlist-heart="${id}"]`)?.focus({ preventScroll: true });
  toast("Saved to Wishlist.");
}
function saveWishlistFromLens(id) {
  if (wishlistItems.some((item) => item.id === id)) {
    openWishlistProduct(id);
    return;
  }
  saveWishlistProduct(id);
  render();
  toast("Added to Wishlist.");
}
function lensWishlistAction(id) {
  const product = wishlistProduct(id), saved = wishlistItems.some((item) => item.id === id);
  if (!product) return "";
  return `<div class="lens-wishlist-action ${saved ? "is-saved" : ""}" aria-live="polite"><div class="lens-wishlist-copy"><span class="icon-wrap">${icon("heart")}</span><span><b>${saved ? "Added to Wishlist" : "Save this item to Wishlist"}</b><small>${saved ? "You can review it anytime in your Wishlist." : "Keep it here while you compare before buying."}</small></span></div><button class="btn ${saved ? "" : "primary"} lens-wishlist-button" type="button" aria-pressed="${saved}" onclick="${saved ? "lensDestination('G-08')" : `saveWishlistFromLens('${id}')`}">${saved ? "View Wishlist" : "Add to Wishlist"}</button></div>`;
}
function openWishlistProduct(id) {
  if (!wishlistProduct(id)) return;
  selectedWishlistId = id;
  localStorage.setItem("styleiqWishlistSelectionV1", id);
  wishlistDialog = null;
  lensOpen = false;
  if (currentId === "G-09") render(); else go("G-09");
}
function setWishlistFilter(value) { wishlistFilter = value; render(); }
function wishlistSnapshot(compact = false) {
  const stats = wishlistStats();
  return `<section class="wishlist-snapshot ${compact ? "is-compact" : ""}" aria-label="Wishlist summary"><span class="icon-wrap">${icon("heart")}</span><span class="grow"><b>Wishlist</b><small>${stats.saved} saved items · ${stats.ready} ready to buy${!compact ? ` · ${stats.drops} price ${stats.drops === 1 ? "drop" : "drops"}` : ""}</small></span><button class="text-action" onclick="go('G-08')">View Wishlist</button></section>`;
}
function wishlistProductCard(product, inWishlist = false) {
  const saved = wishlistItems.find((item) => item.id === product.id), item = saved || product;
  const status = saved ? wishlistStatus(saved) : product.availability;
  const unavailable = status === "Unavailable", purchased = status === "Purchased";
  if (inWishlist) {
    const hint = unavailable || purchased ? "" : item.previousPrice > item.price && Number.isFinite(item.price)
      ? `Price down ${wishlistMoney(item.previousPrice - item.price)}`
      : ["High", "Medium"].includes(item.duplicateRisk) ? "Compare first"
      : item.outfitCount ? `${item.outfitCount} outfit ideas` : "";
    return `<article class="wishlist-product wishlist-product-compact ${unavailable ? "is-unavailable" : ""}" data-product-id="${product.id}">
      <div class="wishlist-product-media"><button class="wishlist-product-image" aria-label="View ${escapeMarkup(product.name)}" onclick="openWishlistProduct('${product.id}')"><img src="${product.image}" alt="${escapeMarkup(product.name)}" loading="lazy"></button>${wishlistHeart(product)}<span class="wishlist-status">${status}</span></div>
      <div class="wishlist-product-copy"><button class="wishlist-product-name" onclick="openWishlistProduct('${product.id}')">${escapeMarkup(product.name)}</button><div class="wishlist-price"><b>${wishlistMoney(product.price)}</b></div>${hint ? `<p class="wishlist-decision">${hint}</p>` : ""}</div></article>`;
  }
  return `<article class="wishlist-product ${unavailable ? "is-unavailable" : ""}" data-product-id="${product.id}">
    <div class="wishlist-product-media"><button class="wishlist-product-image" aria-label="View ${escapeMarkup(product.name)}" onclick="openWishlistProduct('${product.id}')"><img src="${product.image}" alt="${escapeMarkup(product.name)}" loading="lazy"></button>${wishlistHeart(product)}<span class="wishlist-status">${status}</span></div>
    <div class="wishlist-product-copy"><p class="eyebrow">${escapeMarkup(product.brand)}</p><button class="wishlist-product-name" onclick="openWishlistProduct('${product.id}')">${escapeMarkup(product.name)}</button><div class="wishlist-price"><b>${wishlistMoney(product.price)}</b><small>${escapeMarkup(item.collection)}</small></div>
    ${unavailable ? '<p class="small">Currently unavailable · keep for later</p>' : purchased ? '<p class="small">Purchased · ready for your Closet</p>' : `<p class="wishlist-decision">${item.previousPrice > item.price && Number.isFinite(item.price) ? `Price down ${wishlistMoney(item.previousPrice - item.price)}` : item.duplicateRisk === "High" ? "Similar to an item you own" : item.outfitCount ? `Works in ${item.outfitCount} outfit ideas` : "Review with your Closet"}</p><p class="small">${escapeMarkup(item.gapValue === "High" ? `Fills an ${item.gap} gap` : item.duplicateRisk === "High" ? "Compare before buying" : item.style || "Consider how it fits your wardrobe.")}</p>`}
    ${inWishlist ? `<small class="wishlist-saved-date">${item.reminder ? `Review ${wishlistDisplayDate(item.reminder)}` : `Saved ${wishlistDisplayDate(item.dateSaved)}`}</small>` : ""}</div></article>`;
}
function wishlistReview() {
  if (!wishlistReviewOpen) return "";
  const groups = [
    ["Strong Fit / High Value", (item) => item.availability !== "Unavailable" && item.status !== "Review Later" && item.duplicateRisk === "Low"],
    ["Compare First", (item) => item.availability !== "Unavailable" && item.status !== "Review Later" && item.duplicateRisk !== "Low"],
    ["Keep for Later", (item) => item.availability === "Unavailable" || item.status === "Review Later"],
  ];
  return `<section class="card wishlist-review"><div class="between"><h3 class="title">A moment to reconsider</h3><button class="icon-btn" aria-label="Dismiss review moment" onclick="wishlistReviewOpen=false;render()">×</button></div>${groups.map(([title, test]) => {
    const items = wishlistItems.filter((item) => item.status !== "Purchased" && test(item));
    return `<div class="wishlist-review-group"><b>${title}</b>${items.map((item) => `<button class="text-action" onclick="openWishlistProduct('${item.id}')">${escapeMarkup(item.name)} ${icon("chevron-right")}</button>`).join("") || '<p class="small">Nothing to review here.</p>'}</div>`;
  }).join("")}</section>`;
}
function myWishlist() {
  const stats = wishlistStats(), items = wishlistItems.filter((item) => wishlistFilter === "All" || wishlistStatus(item) === wishlistFilter);
  return shell("My Wishlist", `<div class="wishlist-counts"><p><b>${stats.saved}</b> saved <span aria-hidden="true">·</span> <b>${stats.ready}</b> ready to buy</p><button class="text-action" aria-label="Review Wishlist" onclick="wishlistReviewOpen=!wishlistReviewOpen;render()">Review</button></div>${shoppingBudgetSection()}${wishlistReview()}<div class="wishlist-filter-rail" role="group" aria-label="Wishlist status">${wishlistStatuses.map((status) => `<button class="chip ${wishlistFilter === status ? "active" : ""}" aria-pressed="${wishlistFilter === status}" onclick="setWishlistFilter('${status}')">${status}</button>`).join("")}</div><div class="wishlist-grid">${items.map((item) => wishlistProductCard(item, true)).join("")}</div>${items.length ? "" : `<section class="wishlist-empty"><span class="icon-wrap">${icon("heart")}</span><h2 class="title">${wishlistItems.length ? "No products in this status" : "A little space for possibility."}</h2><p class="body">${wishlistItems.length ? "Your other saved products are still in Wishlist." : "Tap a product’s heart when something catches your eye. Come back when you’re ready to consider it."}</p><button class="btn primary" onclick="${wishlistItems.length ? "setWishlistFilter('All')" : "go('K-01')"}">${wishlistItems.length ? "View all items" : "Explore Discover"}</button></section>`}`, { surfaceClass: "wishlist-screen" });
}
function wishlistDetail() {
  const id = localStorage.getItem("styleiqWishlistSelectionV1") || selectedWishlistId;
  const item = wishlistProduct(id) || wishlistItems[0] || shoppingProducts[0];
  selectedWishlistId = item.id;
  const saved = wishlistItems.some((entry) => entry.id === item.id), status = saved ? wishlistStatus(item) : item.availability;
  const unavailable = item.availability === "Unavailable", purchased = item.status === "Purchased";
  const similar = closetItems().find((entry) => entry.id === item.similarClosetId);
  return shell("Before You Buy", `<div class="wishlist-detail-media"><img src="${item.image}" alt="${escapeMarkup(item.name)}">${wishlistHeart(item)}</div><div class="wishlist-detail-heading"><p class="eyebrow">${escapeMarkup(item.brand)} · ${escapeMarkup(item.retailer || "Retailer not provided")}</p><h2 class="title">${escapeMarkup(item.name)}</h2><div class="wishlist-price"><b>${wishlistMoney(item.price)}</b>${item.previousPrice > item.price && Number.isFinite(item.price) ? `<del>${wishlistMoney(item.previousPrice)}</del><span class="small">Down ${wishlistMoney(item.previousPrice - item.price)}</span>` : ""}</div><div class="wishlist-detail-meta"><span class="pill">${status}</span><span>${escapeMarkup(item.collection)} · ${escapeMarkup(item.availability)}</span></div><p class="small">${saved ? `Saved ${wishlistDisplayDate(item.dateSaved)}` : "Not yet saved to Wishlist"}</p></div>
    ${unavailable && !purchased ? '<div class="card"><b>Currently unavailable</b><p class="body">Keep the piece for a later review. Purchase and budget actions will return when it is available.</p></div>' : purchased ? `<div class="card"><b>Purchased ${wishlistDisplayDate(item.purchaseDate)}</b><p class="body">${item.closetId ? "This product is now part of your Closet." : "Your purchase is recorded. Review its details when you’re ready to add it to Closet."}</p><button class="btn primary wide" onclick="${item.closetId ? `openClosetItem('${item.closetId}')` : `prepareWishlistPurchase('${item.id}')`}">${item.closetId ? "View Closet Item" : "Prepare for Closet"}</button></div>` : `<div class="wishlist-retailer">${wishlistRetailerLink(item)}<button class="text-action" onclick="openWishlistDialog('context','${item.id}')">${saved ? "Edit saved context" : "Save for Later"}</button></div>`}
    <section class="wishlist-evaluation"><h3 class="title">Does it earn its place?</h3><div class="wishlist-evaluation-row"><span>${icon("shirt")}</span><div><b>Closet compatibility${item.compatibility != null ? ` · ${item.compatibility}%` : ""}</b><p class="body">${item.outfitCount ? `Works with ${item.outfitCount} possible outfits from your Closet.` : "Explore a combination with your current Closet."}</p><button class="text-action" onclick="openWishlistDialog('outfits','${item.id}')">Explore Outfit Ideas</button></div></div><div class="wishlist-evaluation-row"><span>${icon("spark")}</span><div><b>Style alignment</b><p class="body">${escapeMarkup(item.style || "Review the color and silhouette against the pieces you wear most.")}</p></div></div><div class="wishlist-evaluation-row"><span>${icon("copy")}</span><div><b>Duplicate risk · ${escapeMarkup(item.duplicateRisk || "Not assessed")}</b><p class="body">${similar ? `Compare with your ${escapeMarkup(similar.name)}.` : "No similar Closet reference is available for this product."}</p>${similar ? `<button class="text-action" onclick="openWishlistDialog('compare','${item.id}')">Compare Similar</button>` : ""}</div></div><div class="wishlist-evaluation-row"><span>${icon("check")}</span><div><b>${escapeMarkup(item.gapValue || "Unassessed")} Gap Value${item.gap ? ` · ${escapeMarkup(item.gap)}` : ""}</b><p class="body">${item.gapValue === "High" ? "Adds a useful role to the pieces you already own." : "Consider whether your owned pieces already meet this need."}</p></div></div></section>
    <section class="card wishlist-muse"><p class="eyebrow">Muse’s perspective</p><p class="body">${escapeMarkup(item.recommendation || "Try an outfit with owned pieces first. Check for a similar item before deciding to buy.")}</p>${item.note ? `<p class="small">Your reason: “${escapeMarkup(item.note)}”</p>` : ""}</section>
    ${!unavailable && !purchased ? `<details class="card progressive-card wishlist-budget"><summary><b>Budget context</b><span class="small">Optional</span></summary><p class="body">This ${wishlistMoney(item.price)} item is ${item.price <= shoppingBudget.perItem ? "within" : "above"} your ${wishlistMoney(shoppingBudget.perItem)} per-item guide. StyleIQ does not hold money, reserve funds, or make purchases.</p><button class="text-action" onclick="openShoppingBudget()">Edit shopping budget</button></details>` : ""}
    <section class="card wishlist-context"><div class="between"><h3 class="title">Saved context</h3><button class="text-action" onclick="openWishlistDialog('context','${item.id}')">${saved ? "Edit" : "Save for Later"}</button></div><dl><dt>Note</dt><dd>${escapeMarkup(item.note || "What makes this piece worth considering?")}</dd><dt>Review reminder</dt><dd>${wishlistDisplayDate(item.reminder)}</dd><dt>Collection</dt><dd>${escapeMarkup(item.collection)}</dd></dl>${saved ? `<button class="text-action" onclick="openWishlistDialog('context','${item.id}')">Move Collection</button>` : ""}</section>
    ${saved ? `<div class="wishlist-detail-actions">${!purchased ? `<div class="row"><button class="btn grow" onclick="setWishlistStatus('${item.id}','Review Later')">Review Later</button>${!unavailable ? `<button class="btn grow" onclick="setWishlistStatus('${item.id}','${item.status === "Ready to Buy" ? "Saved" : "Ready to Buy"}')">${item.status === "Ready to Buy" ? "Keep Saved" : "Ready to Buy"}</button>` : ""}</div>${!unavailable ? `<button class="btn primary wide" onclick="openWishlistDialog('purchase','${item.id}')">Mark as Purchased</button>` : ""}` : ""}<button class="danger-action" onclick="openWishlistDialog('remove','${item.id}')">Remove from Wishlist</button></div>` : ""}`, { surfaceClass: "wishlist-screen" });
}
function validWishlistUrl(value) {
  try { const url = new URL(value); return ["https:", "http:"].includes(url.protocol) && !url.username && !url.password ? url.href : ""; } catch { return ""; }
}
function wishlistRetailerLink(item) {
  const url = validWishlistUrl(item.productUrl);
  return url ? `<a class="btn primary wide" href="${escapeMarkup(url)}" target="_blank" rel="noopener noreferrer">View on Retailer ${icon("external-link")}</a>` : '<button class="btn primary wide" disabled>View on Retailer</button><p class="small">No product link provided. Add one in saved context.</p>';
}
function setWishlistStatus(id, status) {
  const item = wishlistItems.find((entry) => entry.id === id);
  if (!item || item.status === "Purchased" || !["Saved", "Review Later", "Ready to Buy"].includes(status)) return;
  if (status === "Ready to Buy" && item.availability === "Unavailable") return;
  item.status = status;
  if (status === "Review Later" && !item.reminder) item.reminder = wishlistDate(30);
  persistWishlist(); render(); toast(status === "Review Later" ? "Kept in Wishlist for a later review." : `Marked ${status}.`);
}
function openWishlistDialog(kind, id) {
  if (!wishlistDialog) wishlistReturnFocus = document.activeElement;
  wishlistDialog = { kind, id };
  mountWishlistDialog();
}
function closeWishlistDialog() {
  app.querySelector("#wishlist-dialog")?.close();
  app.querySelector("#wishlist-dialog")?.remove();
  wishlistDialog = null;
  if (wishlistReturnFocus?.isConnected) wishlistReturnFocus.focus({ preventScroll: true });
}
function wishlistOutfitPieces(item) {
  const categories = item.category === "Shoes" ? ["Tops", "Bottoms", "Outerwear"] : item.category === "Tops" ? ["Bottoms", "Shoes", "Bags"] : item.category === "Outerwear" ? ["Tops", "Bottoms", "Shoes"] : ["Tops", "Bottoms", "Shoes"];
  return categories.map((category) => closetItems().find((owned) => owned.category === category && owned.lifecycle === "Keep" && owned.status === "Available")).filter(Boolean).map((owned) => ({ ...owned, image: wishlistClosetImage(owned) }));
}
function wishlistClosetImage(item) {
  if (item.id === "closet-5") return "images/alta-tan-suede-loafers.png";
  if (item.id === "closet-6") return "images/alta-oxblood-crescent-bag.png";
  if (item.id === "closet-4") return "images/alta-black-tailored-trousers.png";
  return item.image;
}
function wishlistDialogMarkup() {
  if (!wishlistDialog) return "";
  const { kind, id } = wishlistDialog, item = wishlistProduct(id);
  if (!item) return "";
  let title = "Wishlist options", body = "";
  if (kind === "options") body = `<p class="body">${escapeMarkup(item.name)} is already in your Wishlist.</p><div class="stack"><button class="btn primary" onclick="openWishlistProduct('${id}')">View in Wishlist</button><button class="btn" onclick="openWishlistDialog('context','${id}')">Edit saved context</button><button class="danger-action" onclick="openWishlistDialog('remove','${id}')">Remove from Wishlist</button></div>`;
  if (kind === "remove") { title = "Remove from Wishlist?"; body = `<p id="wishlist-dialog-description" class="body">Remove ${escapeMarkup(item.name)} from your considered products? Your Closet and Saved Looks stay as they are.</p><button class="btn danger wide" onclick="removeWishlistProduct('${id}')">Remove product</button>`; }
  if (kind === "purchase") { title = "Already purchased this piece?"; body = `<p id="wishlist-dialog-description" class="body">StyleIQ can mark ${escapeMarkup(item.name)} as Purchased and prepare its details for your Closet. You’ll review and confirm before it is added. No purchase is made here.</p><button class="btn primary wide" onclick="prepareWishlistPurchase('${id}')">Confirm & review for Closet</button>`; }
  if (kind === "context") {
    title = wishlistItems.some((entry) => entry.id === id) ? "Saved context" : "Save for Later";
    body = `<form id="wishlist-context-form" class="stack" onsubmit="saveWishlistContext(event,'${id}')"><div class="field"><label for="wishlist-collection">Collection</label><select id="wishlist-collection" class="input" name="collection">${wishlistCollections.map((collection) => `<option ${item.collection === collection ? "selected" : ""}>${collection}</option>`).join("")}</select></div><div class="field"><label for="wishlist-note">Why do you like this?</label><textarea class="textarea" id="wishlist-note" name="note" maxlength="500">${escapeMarkup(item.note || "")}</textarea></div><div class="field"><label for="wishlist-reminder">Review reminder</label><select class="input" id="wishlist-reminder" name="reminder"><option value="">No reminder</option>${item.reminder ? `<option value="${item.reminder}" selected>Keep · ${wishlistDisplayDate(item.reminder)}</option>` : ""}<option value="${wishlistDate(30)}">Review next month</option><option value="${wishlistDate(90)}">Review before next season</option></select><small class="helper">Shown in Wishlist when you return.</small></div><div class="field"><label for="wishlist-url">Product link <span class="helper">Optional</span></label><input class="input" type="url" name="productUrl" id="wishlist-url" value="${escapeMarkup(item.productUrl || "")}" placeholder="https://retailer.com/product"><span id="wishlist-url-error" class="small" role="alert"></span></div><button class="btn primary wide" type="submit">Save to Wishlist</button></form>`;
  }
  if (kind === "compare") {
    title = "Compare Similar";
    const similar = closetItems().find((owned) => owned.id === item.similarClosetId);
    body = similar ? `<div class="wishlist-compare"><div><img src="${item.image}" alt="${escapeMarkup(item.name)}"><small>Considering</small><b>${escapeMarkup(item.name)}</b><span>${wishlistMoney(item.price)}</span></div><div><img src="${wishlistClosetImage(similar)}" alt="${escapeMarkup(similar.name)}"><small>Already owned</small><b>${escapeMarkup(similar.name)}</b><span>Worn ${similar.wears} times</span></div></div><p class="body">${escapeMarkup(item.recommendation)}</p><button class="btn wide" onclick="closeWishlistDialog();openClosetItem('${similar.id}')">View existing Closet item</button>` : '<p class="body">The referenced Closet item is no longer available.</p>';
  }
  if (kind === "outfits") {
    title = "Explore Outfit Ideas";
    const owned = wishlistOutfitPieces(item);
    body = `<p class="body">${owned.length} owned pieces + 1 ${item.status === "Purchased" ? "purchased" : "considered"} product. A ${item.collection.toLowerCase()} combination to evaluate.</p><div class="wishlist-outfit-pieces">${[...owned.map((piece) => ({ ...piece, label: "From Closet" })), { ...item, label: "Considering" }].map((piece) => `<div><img src="${piece.image}" alt="${escapeMarkup(piece.name)}"><small>${piece.label}</small><b>${escapeMarkup(piece.name)}</b></div>`).join("")}</div><p class="small">${owned.length < 3 ? "Add more owned pieces to Closet to explore fuller combinations." : "The product fills one role; the other pieces come from your current Closet."}</p><button class="btn primary wide" onclick="openWishlistOutfitInStudio('${id}')">Explore in Style Studio</button>`;
  }
  return `<dialog id="wishlist-dialog" class="wishlist-dialog" ${["remove", "purchase"].includes(kind) ? 'role="alertdialog" aria-describedby="wishlist-dialog-description"' : 'role="dialog"'} aria-labelledby="wishlist-dialog-title" oncancel="event.preventDefault();closeWishlistDialog()"><div class="between"><h2 class="title" id="wishlist-dialog-title">${title}</h2><button class="icon-btn" aria-label="Close Wishlist dialog" onclick="closeWishlistDialog()" autofocus>×</button></div>${body}<button class="btn wide" onclick="closeWishlistDialog()">${["remove", "purchase"].includes(kind) ? "Cancel" : "Done"}</button></dialog>`;
}
function mountWishlistDialog() {
  app.querySelector("#wishlist-dialog")?.remove();
  if (!wishlistDialog) return;
  app.insertAdjacentHTML("beforeend", wishlistDialogMarkup());
  app.querySelector("#wishlist-dialog")?.showModal();
  window.lucide?.createIcons({ attrs: { "stroke-width": 1.5 } });
}
function saveWishlistContext(event, id) {
  event.preventDefault();
  const data = new FormData(event.currentTarget), url = data.get("productUrl").trim();
  if (url && !validWishlistUrl(url)) { document.getElementById("wishlist-url-error").textContent = "Use a full http or https product link."; return; }
  saveWishlistProduct(id, { collection: data.get("collection"), note: data.get("note").trim(), reminder: data.get("reminder"), productUrl: url });
  closeWishlistDialog(); wishlistRefresh(); toast("Saved to Wishlist.");
}
function removeWishlistProduct(id) {
  const index = wishlistItems.findIndex((item) => item.id === id);
  if (index < 0) return;
  wishlistUndo = { item: wishlistItems[index], index };
  wishlistItems.splice(index, 1); persistWishlist(); closeWishlistDialog();
  wishlistFilter = "All";
  if (currentId === "G-09") go("G-08"); else wishlistRefresh();
  toast("Removed from Wishlist.");
  const button = document.createElement("button"); button.textContent = "Undo"; button.className = "wishlist-undo";
  button.onclick = undoWishlistRemoval; document.getElementById("toast").append(button);
  clearTimeout(toast.t); toast.t = setTimeout(() => document.getElementById("toast").classList.remove("show"), 8000);
}
function undoWishlistRemoval() {
  if (!wishlistUndo) return;
  if (!wishlistItems.some((item) => item.id === wishlistUndo.item.id)) wishlistItems.splice(wishlistUndo.index, 0, wishlistUndo.item);
  wishlistUndo = null; persistWishlist(); wishlistRefresh(); toast("Restored to Wishlist.");
}
function prepareWishlistPurchase(id) {
  const item = wishlistItems.find((entry) => entry.id === id);
  if (!item || (item.availability === "Unavailable" && item.status !== "Purchased")) return;
  const owned = purchasedClosetItems.find((entry) => entry.wishlistId === id);
  if (owned) { closeWishlistDialog(); openClosetItem(owned.id); return; }
  item.status = "Purchased"; item.purchaseDate ||= wishlistDate(); item.reminder = ""; persistWishlist();
  closetPurchaseDraft = { ...item, purchasePrice: item.price, wishlistId: item.id };
  localStorage.setItem("styleiqClosetPurchaseDraftV1", JSON.stringify(closetPurchaseDraft));
  batchImportActive = false; importConfidence = "high";
  closeWishlistDialog(); go("B-06");
}
function openWishlistOutfitInStudio(id) {
  const item = wishlistProduct(id), roles = { Tops: "Top", Bottoms: "Bottom", Outerwear: "Outerwear", Shoes: "Shoes", Bags: "Bag", Accessories: "Accessory" };
  if (!item) return;
  const owned = wishlistOutfitPieces(item);
  canvasState = { ...defaultCanvas(), title: `${item.collection} · ${item.name}`, creationSource: "muse_assisted", items: [
    ...owned.map((piece) => ({ ...piece, role: roles[piece.category], owned: true, visible: true, index: 0 })),
    { ...item, id: `considered-${id}`, productId: id, role: roles[item.category] || "Top", owned: false, visible: true, index: 0 },
  ] };
  studioSourceContext = "draft";
  persist(); closeWishlistDialog(); go("F-01");
}
// Give suggested Studio pieces stable product IDs; never register owned pieces.
function shoppingProductForPiece(piece) {
  if (piece.owned) return null;
  if (piece.productId && wishlistProduct(piece.productId)) return wishlistProduct(piece.productId);
  const match = shoppingProducts.find((product) => product.name.toLowerCase() === piece.name.toLowerCase() && product.brand === piece.brand);
  if (match) return match;
  const id = `shop-${`${piece.brand}-${piece.name}`.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  if (!wishlistProduct(id)) shoppingProducts.push({ id, name: piece.name, brand: piece.brand, image: piece.image, retailer: piece.brand, productUrl: "", price: null, previousPrice: null, availability: "In stock", collection: "Inspiration", category: ({ Top: "Tops", Bottom: "Bottoms", Bag: "Bags", Accessory: "Accessories" })[piece.role] || piece.role });
  return wishlistProduct(id);
}
function decorateWishlistSurfaces() {
  const content = app.querySelector(".content");
  if (!content) return;
  if (currentId === "K-01") {
    content.querySelector(".mirror-search")?.insertAdjacentHTML("afterend", wishlistSnapshot());
    content.insertAdjacentHTML("beforeend", `<section class="mirror-section" aria-label="Products for your wardrobe"><div class="mirror-section-head"><span><p class="eyebrow">Consider a piece</p><h3>For your wardrobe</h3></span><button class="text-action" onclick="go('K-02')">Explore products</button></div><div class="wishlist-grid">${[wishlistProduct("leather-loafers"), wishlistProduct("shoulder-bag")].map((item) => wishlistProductCard(item)).join("")}</div></section>`);
    const shortcut = app.querySelector('[aria-label="Open Wishlist"]');
    if (shortcut) { shortcut.innerHTML = icon("heart"); shortcut.onclick = () => go("G-08"); }
  }
  if (["L-01", "L-02"].includes(currentId)) {
    const entry = content.querySelector('.profile-utility[onclick*="wishlist"]');
    if (entry) { entry.onclick = () => go("G-08"); entry.querySelector("small").textContent = `${wishlistStats().saved} saved items · ${wishlistStats().ready} ready to buy`; }
  }
  if (currentId === "D-02") content.insertAdjacentHTML("beforeend", wishlistSnapshot(true));
  if (currentId === "M-03") {
    const card = content.querySelector(".card");
    if (card) card.outerHTML = `<section class="wishlist-opportunity"><p class="eyebrow">Opportunity · Lightweight layers</p><p class="body">The gap is a wardrobe need. Review a specific product separately, starting with the knit you already own.</p>${wishlistProductCard(wishlistProduct("rust-knit"))}</section>`;
    const review = [...content.querySelectorAll("button")].find((button) => button.textContent === "Review one suggestion");
    if (review) review.onclick = () => openWishlistProduct("rust-knit");
    const claims = content.querySelectorAll(".reason-row small");
    if (claims[0]) claims[0].textContent = "Compare the suggested knit with your owned rust knit before considering a purchase.";
    const claimTitle = content.querySelector(".reason-row b");
    if (claimTitle) claimTitle.textContent = "Check the owned alternative";
  }
  if (currentId === "D-06") content.insertAdjacentHTML("beforeend", `<section class="mirror-section"><h3 class="title">Complete this Look</h3>${wishlistProductCard(wishlistProduct("leather-loafers"))}</section>`);
  if (["D-04", "D-05", "E-01", "E-03", "E-04"].includes(currentId)) {
    const suggestion = [...content.querySelectorAll(".closet-piece")].find((piece) => piece.textContent.includes("Suggested"));
    if (suggestion) suggestion.outerHTML = `<div class="wishlist-missing-piece">${wishlistProductCard(wishlistProduct("shoulder-bag"))}</div>`;
  }
  if (["G-02", "G-03", "G-04", "G-05", "G-06", "G-07"].includes(currentId)) {
    content.querySelectorAll(".pack-row").forEach((row, index) => {
      const piece = canvasState.items[index], product = piece && shoppingProductForPiece(piece);
      if (product) row.insertAdjacentHTML("beforeend", wishlistHeart(product));
    });
  }
  // A bookmark saves the complete Look; a heart saves only a considered product.
  app.querySelectorAll('[aria-label="Save Look"], [aria-label="Save outfit"]').forEach((button) => {
    const saveIcon = button.querySelector("i,svg");
    if (saveIcon) saveIcon.outerHTML = icon("bookmark");
    if (currentId === "K-01") button.onclick = (event) => { event.stopPropagation(); openLightweightPanel("save"); };
  });
  const menuEntry = app.querySelector('.menu-link[onclick="go(\'G-08\')"] span');
  if (menuEntry) menuEntry.innerHTML = `Wishlist<small class="wishlist-menu-count">${wishlistStats().saved} saved items</small>`;
  if (selectedClosetItemId && currentId === "C-02") {
    const item = selectedClosetItem();
    if (item.wishlistId) content.insertAdjacentHTML("beforeend", `<section class="card wishlist-context"><h3 class="title">Purchase details</h3><dl><dt>Price paid</dt><dd>${wishlistMoney(item.purchasePrice)}</dd><dt>Purchased</dt><dd>${wishlistDisplayDate(item.purchaseDate)}</dd><dt>Source</dt><dd>${escapeMarkup(item.retailer || "Not provided")}</dd></dl>${wishlistItems.some((entry) => entry.id === item.wishlistId) ? `<button class="text-action" onclick="openWishlistProduct('${item.wishlistId}')">View Wishlist record</button>` : '<p class="small">Originally considered in Wishlist.</p>'}</section>`);
  }
}
let wishlistSearchQuery = "", ownedSearchQuery = "blazer", selectedShoppingSearchId = shoppingProducts[0].id;
function searchProducts(query) {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  return shoppingProducts.filter(item => terms.every(term => `${item.name} ${item.brand} ${item.category}`.toLowerCase().includes(term)));
}
function shoppingSearchResults() {
  const products = searchProducts(wishlistSearchQuery);
  if (!products.length) return '<p class="body" role="status">No matching products. Try a brand or category.</p>';
  if (!products.some(item => item.id === selectedShoppingSearchId)) selectedShoppingSearchId = products[0].id;
  return `${products.map(product => wishlistProductCard(product)).join('')}<label class="field">Choose a product<select id="shopping-selection" class="input" onchange="selectedShoppingSearchId=this.value">${products.map(item => `<option value="${item.id}" ${item.id === selectedShoppingSearchId ? 'selected' : ''}>${escapeMarkup(item.name)} · ${escapeMarkup(item.brand)}</option>`).join('')}</select></label><div class="row"><button class="btn grow" onclick="openWishlistProduct(selectedShoppingSearchId)">Check this piece</button><button class="btn grow" onclick="saveWishlistProduct(selectedShoppingSearchId);render();toast('Saved to Wishlist')">Save to Wishlist</button></div>`;
}
function updateWishlistSearch(value) {
  wishlistSearchQuery = value;
  const results = app.querySelector("#shopping-product-results");
  if (results) results.innerHTML = shoppingSearchResults();
  window.lucide?.createIcons({ attrs: { "stroke-width": 1.5 } });
}
function wishlistProductSearch() {
  return `<section class="mirror-section" aria-label="Shopping products"><label class="field">Search products<input class="input" placeholder="Search products or brands" value="${escapeMarkup(wishlistSearchQuery)}" oninput="updateWishlistSearch(this.value)"></label><div id="shopping-product-results">${shoppingSearchResults()}</div></section>`;
}
function searchOwnedItem(event) {
  event.preventDefault(); ownedSearchQuery = event.currentTarget.querySelector('input').value.trim(); go('B-05');
}
function selectOwnedSearchProduct(id) {
  const product = shoppingProducts.find(item => item.id === id);
  if (!product) return;
  closetPurchaseDraft = { name: product.name, brand: product.brand, category: product.category, image: product.image, source: 'owned-search' };
  importConfidence = 'high';
  localStorage.setItem('styleiqClosetPurchaseDraftV1', JSON.stringify(closetPurchaseDraft));
  go('B-06');
}
function ownedSearchResults() {
  const products = searchProducts(ownedSearchQuery);
  return `<p class="eyebrow">Closet Search results</p><p class="small">${products.length} results for “${escapeMarkup(ownedSearchQuery)}”</p><div class="item-grid">${products.map(item => `<article class="item-card owned-search-card"><img src="${item.image}" alt="${escapeMarkup(item.name)}"><span class="copy"><b>${escapeMarkup(item.name)}</b><small class="body">${escapeMarkup(item.brand)}</small><button class="btn small-btn" onclick="selectOwnedSearchProduct('${item.id}')">Add to My Closet</button></span></article>`).join('')}</div>${products.length ? '' : '<p class="body">No matching items. Try a brand or category.</p>'}<button class="btn wide" onclick="go('B-04')">Edit search</button>`;
}
let closetItemEdits = (() => {
  try { return JSON.parse(localStorage.getItem("styleiqClosetItemEditsV1")) || {}; }
  catch { return {}; }
})();
function updateClosetItem(id, changes) {
  const owned = purchasedClosetItems.find(item => item.id === id);
  if (owned) { Object.assign(owned, changes); persistClosetItems(); }
  else {
    closetItemEdits[id] = { ...closetItemEdits[id], ...changes };
    localStorage.setItem("styleiqClosetItemEditsV1", JSON.stringify(closetItemEdits));
  }
}
let photoEditDraft = null;
function selectPhotoEdit(mode) { photoEditDraft.mode = mode; render(); }
function readItemPhoto(input) {
  const file = input.files?.[0];
  if (!file || !['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
    toast("Choose a JPG, PNG, or WebP photo."); return;
  }
  const target = photoEditDraft;
  const reader = new FileReader();
  reader.onload = () => {
    if (photoEditDraft !== target) return;
    photoEditDraft.source = reader.result;
    photoEditDraft.mode = 'original'; render();
  };
  reader.readAsDataURL(file);
}
async function saveItemPhoto() {
  const draft = photoEditDraft;
  if (!draft) return;
  let image = draft.source;
  try {
    if (draft.mode === 'crop') {
      const photo = new Image(); photo.src = image; await photo.decode();
      const size = Math.min(photo.naturalWidth, photo.naturalHeight) * 0.8;
      const canvas = document.createElement('canvas'); canvas.width = canvas.height = Math.min(1000, Math.round(size));
      canvas.getContext('2d').drawImage(photo, (photo.naturalWidth-size)/2, (photo.naturalHeight-size)/2, size, size, 0, 0, canvas.width, canvas.height);
      image = canvas.toDataURL('image/png');
    }
    if (photoEditDraft !== draft || lightweightPanel !== 'image') return;
    updateClosetItem(draft.itemId, { image, originalImage: draft.original });
    photoEditDraft = null; lightweightPanel = null; render(); toast('Item photo updated');
  } catch { toast('We could not edit this photo. Choose another photo and try again.'); }
}
function itemPhotoEditor() {
  const draft = photoEditDraft || { source: selectedClosetItem().image, mode: 'original' };
  return `<div style="height:220px;overflow:hidden;border-radius:16px"><img alt="Item photo preview" src="${draft.source}" style="width:100%;height:100%;object-fit:contain;${draft.mode === 'crop' ? 'transform:scale(1.25)' : ''}"></div><p class="body">Preview a centered crop or choose a replacement. Save applies it to this item only.</p><div class="chips" role="group" aria-label="Photo edit"><button class="chip" aria-pressed="${draft.mode === 'crop'}" onclick="selectPhotoEdit('crop')">Crop</button><button class="chip" aria-pressed="${draft.mode === 'original'}" onclick="photoEditDraft.source=photoEditDraft.original;selectPhotoEdit('original')">Original</button></div><label class="field">Replace photo<input type="file" accept="image/jpeg,image/png,image/webp" onchange="readItemPhoto(this)"></label>`;
}
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
      ...closetItemEdits[id],
      lifecycle: closetLifecycle[id] || "Keep",
      location: closetLocations[id] || "",
    };
  }).concat(purchasedClosetItems.map((item) => ({ ...item, lifecycle: closetLifecycle[item.id] || "Keep", location: closetLocations[item.id] || "" })));
}
function closetItemCount() {
  return closetItems().length;
}
function newClosetItemId() {
  return `closet-user-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
function openClosetItem(id) {
  selectedClosetItemId = id;
  closetDetailTab = "overview";
  closetStyleIntent = false;
  localStorage.setItem("styleiqSelectedClosetItemV1", id);
  go("C-02");
}
function setClosetDetailTab(tab) {
  closetDetailTab = tab;
  render();
}
function styleSelectedClosetItem() {
  const item = selectedClosetItem();
  canvasState = defaultCanvas();
  canvasState.title = `Styled around ${item.name}`;
  canvasState.creationSource = "closet_item";
  canvasState.creatorAttribution = null;
  canvasState.items = [
    {
      id: item.id || "closet-piece",
      name: item.name,
      category: item.category,
      brand: item.brand,
      image: item.image,
      role: normalizeStudioRole(item),
      owned: true,
      visible: true,
      locked: true,
    },
    {
      id: "pair-1",
      name: item.category === "Outerwear" ? "Ivory silk top" : "Black tailored blazer",
      category: item.category === "Outerwear" ? "Tops" : "Outerwear",
      brand: "Aritzia",
      image: item.category === "Outerwear" ? assets.top : assets.blazer,
      role: normalizeStudioRole({ category: item.category === "Outerwear" ? "Tops" : "Outerwear" }),
      owned: true,
      visible: true,
    },
    {
      id: "pair-2",
      name: "Black straight trousers",
      category: "Bottoms",
      brand: "COS",
      image: assets.bottom,
      role: "Bottom",
      owned: true,
      visible: true,
    },
  ];
  persist();
  go("F-01");
  toast(`Studio ready with ${item.name}`);
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
function markSelectedItemWorn() {
  const item = selectedClosetItem();
  updateClosetItem(item.id, { wears: (item.wears || 0) + 1 });
  render();
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
  if (currentId === "C-02") {
    const metadata = app.querySelector(".inline-edit-grid");
    if (metadata && !app.querySelector(".storage-location-card"))
      metadata.insertAdjacentHTML(
        "afterend",
        storageLocationForm(selectedClosetItem()),
      );
  }
}
function itemIntelligence(item) {
  const normalize = value => value.toLowerCase().trim();
  const looks = Object.values(tryOnLooks).filter(look => look.pieces.some(piece => normalize(piece[1]) === normalize(item.name)));
  const names = new Set(looks.flatMap(look => look.pieces.map(piece => normalize(piece[1]))));
  return { looks, matches: closetItems().filter(other => other.id !== item.id && names.has(normalize(other.name))).length };
}
function tryOnSelectedClosetItem() {
  const item = selectedClosetItem();
  const role = ({Tops:'Top', Bottoms:'Bottom', Outerwear:'Outerwear', Jackets:'Outerwear', Shoes:'Shoes', Bags:'Bag', Accessories:'Accessory', 'Dresses & Suits':'Dress'})[item.category] || 'Outerwear';
  const base = itemIntelligence(item).looks[0] || tryOnLooks.coffee;
  const pieces = base.pieces.filter(piece => piece[0] !== role);
  pieces.unshift([role, item.name, item.image]);
  const look = { ...base, id: `item-${item.id}`, title: `${item.name} · Try On`, context: 'From your Closet', pieces };
  startTryOn(look.id, { lookData: look, sourceType: 'closet-item', closetItemId: item.id });
}
function saveItemDetails(event) {
  event.preventDefault();
  const form = event.currentTarget, value = id => form.querySelector(`#inline-${id}`)?.value.trim();
  updateClosetItem(selectedClosetItem().id, {name:value('name'),brand:value('brand'),category:value('category')});
  render(); toast('Item details saved');
}
function saveItemPurchase(event) {
  event.preventDefault();
  const form = event.currentTarget, price = form.querySelector('#inline-purchase-price').value;
  updateClosetItem(selectedClosetItem().id, { purchasePrice: price === '' ? null : Number(price), purchaseDate: form.querySelector('#inline-purchase-date').value, retailer: form.querySelector('#inline-retailer').value.trim() });
  render(); toast('Purchase details saved');
}
function lifecycleItemDetail() {
  const item = selectedClosetItem(), intelligence = itemIntelligence(item),
    states = ["Keep", "Won’t wear", "Sell", "Donate", "Rent", "Archive"];
  const tabs = [["overview", "Overview"], ["details", "Details"], ["purchase", "Purchase Info"], ["photo", "Photos"], ["activity", "Wear History"]];
  const tabBar = `<div class="chips" role="tablist" aria-label="Closet item detail sections" style="margin-top:14px">${tabs.map(([id, label]) => `<button class="chip ${closetDetailTab === id ? "active" : ""}" role="tab" aria-selected="${closetDetailTab === id}" onclick="setClosetDetailTab('${id}')">${label}</button>`).join("")}</div>`;
  const overview = `<div>${approvalCard("Ready to style", "Category and color are high confidence. Optional details stay collapsed until you need them.")}<details class="card progressive-card" open style="margin-top:12px"><summary><b>Item status</b><span class="small">${item.lifecycle} · one status at a time</span></summary><p class="body" style="margin-top:10px">Choose what you intend to do with this piece. Wear history and details stay intact.</p><div class="chips" role="group" aria-label="Item lifecycle status">${states.map((value) => `<button class="chip ${item.lifecycle === value ? "active" : ""}" aria-pressed="${item.lifecycle === value}" onclick="setItemLifecycle(&quot;${value}&quot;)">${value}</button>`).join("")}</div></details><button class="btn primary wide" style="margin-top:14px" onclick="styleSelectedClosetItem()">Style this item</button></div>`;
  const details = `<form onsubmit="saveItemDetails(event)"><div class="inline-edit-grid" style="margin-top:14px">${inlineEditRow("Name", item.name, 'required')}${inlineEditRow("Brand", item.brand)}${inlineEditRow("Category", item.category, 'required')}</div><button class="btn primary wide" type="submit">Save item details</button></form>${storageLocationForm(item)}`;
  const purchase = `<section class="card" style="margin-top:14px;margin-bottom:36px"><p class="eyebrow">Purchase Info</p><h3 class="title">Ownership details</h3><form onsubmit="saveItemPurchase(event)">${inlineEditRow("Purchase price", item.purchasePrice ?? '', 'type="number" min="0" step="0.01"')}${inlineEditRow("Purchase date", item.purchaseDate || '', 'type="date"')}${inlineEditRow("Retailer", item.retailer || '')}<button class="btn primary wide" type="submit" style="margin-bottom:12px">Save purchase details</button></form></section>`;
  const photo = `<section class="card" style="margin-top:14px"><p class="eyebrow">Photo tools</p><h3 class="title">Keep the item presentation current.</h3><p class="body">Replace, crop, clean the background, or return to the original. Changes are previewed before saving.</p><button class="btn primary wide" style="margin-top:12px" onclick="openLightweightPanel('image')">Edit item photo</button><button class="btn wide" style="margin-top:8px" onclick="setClosetDetailTab('overview')">Cancel</button></section>`;
  const activity = `<section class="card" style="margin-top:14px"><p class="eyebrow">Wear activity</p><h3 class="title">Useful facts about this piece</h3><div class="item-metrics"><span class="item-metric"><b>${item.wears}×</b><small>Worn</small></span><span class="item-metric"><b>${Number.isFinite(item.purchasePrice) && item.wears ? wishlistMoney(item.purchasePrice / item.wears) : "Not available"}</b><small>Cost / wear</small></span><span class="item-metric"><b>${intelligence.looks.length}</b><small>Compatible Looks</small></span></div><p class="body" style="margin-top:12px">Wear history stays intact when you update the item or its lifecycle.</p><button class="btn wide" style="margin-top:10px" onclick="setItemLifecycle('Keep')">Mark available</button></section>`;
  const body = { overview, details, purchase, photo, activity }[closetDetailTab] || overview;
  return shell(
    "Item detail",
    `<img class="hero-img" src="${item.image}" alt="${escapeMarkup(item.name)}"><div class="between" style="margin-top:14px"><span><p class="eyebrow">${item.lifecycle} · ${item.status}</p><h2 class="title">${escapeMarkup(item.name)}</h2></span><button class="icon-btn" aria-label="Edit item" onclick="setClosetDetailTab('details')">${icon("edit")}</button></div><div class="row" style="margin-top:12px"><button class="btn primary grow" onclick="styleSelectedClosetItem()">Style It</button><button class="btn grow" onclick="tryOnSelectedClosetItem()">Try On</button></div><div class="item-metrics" style="margin-top:14px"><span class="item-metric"><b>${item.wears}×</b><small>Worn</small></span><span class="item-metric"><b>${intelligence.matches}</b><small>Closet matches</small></span><span class="item-metric"><b>${intelligence.looks.length}</b><small>Looks ready</small></span></div><p class="small">${intelligence.looks.length ? "Known Looks: " + intelligence.looks.map(look => escapeMarkup(look.title)).join(" · ") : "Style this piece to explore new combinations."}</p><div class="chips"><button class="chip" onclick="markSelectedItemWorn()">Mark Worn</button><button class="chip" onclick="setItemLifecycle('Sell')">Sell</button><button class="chip" onclick="setItemLifecycle('Archive')">Archive</button></div>${tabBar}${body}`,
    { active: "closet" },
  );
}
function decorateConsolidatedItemDetail() {
  // C-02 now owns the canonical detail surface; former detail IDs are local tabs.
  if (currentId !== "C-02") return;
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
  localStorage.setItem("styleiqClosetSizeV1", String(closetState.size));
  closetState.query = "";
  closetState.category = "All";
  closetState.collection = "All pieces";
  if (currentId === "C-01") render();
};
function scalableCloset() {
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
        `${escapeMarkup(item.name)} ${escapeMarkup(item.brand)} ${escapeMarkup(item.category)} ${item.location}`
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
    `<div class="mirror-page-head"><span><p class="eyebrow">Wardrobe · ${all.length} ${all.length === 1 ? "piece" : "pieces"}</p><h2 class="mirror-title">Closet</h2></span><button class="mirror-circle-action" onclick="go('B-01')" aria-label="Add an item">${icon("plus")}</button></div><div class="closet-toolbar"><label class="closet-search">${icon("search")}<span class="sr-only">Search Closet</span><input aria-label="Search Closet" type="search" value="${closetState.query.replace(/&/g, "&amp;").replace(/"/g, "&quot;")}" placeholder="Search pieces or brands" oninput="updateClosetQuery(this.value)"></label><button class="closet-sort" aria-label="Sort: ${closetState.sort}" onclick="cycleClosetSort()">${icon("arrow-up-down")}</button></div><div class="closet-collections" role="group" aria-label="Smart collections">${collections.map(([name, count]) => `<button class="closet-collection" aria-pressed="${closetState.collection === name}" onclick="setClosetCollection('${name}')"><b>${name}</b><small>${count} ${count === 1 ? "piece" : "pieces"}</small></button>`).join("")}</div><div class="closet-category-rail" role="group" aria-label="Closet categories">${categories.map((name) => `<button class="chip ${closetState.category === name ? "active" : ""}" aria-pressed="${closetState.category === name}" onclick="setClosetCategory('${name}')">${name}</button>`).join("")}</div><div class="closet-results-head"><span><p class="eyebrow">${closetState.collection}</p><h3>${visible.length} ${visible.length === 1 ? "piece" : "pieces"}</h3></span><small>${closetState.sort}</small></div><div class="closet-grid">${visible.length ? visible.map((item) => `<button class="closet-item" onclick="go('C-02')"><span class="closet-item-media"><img src="${item.image}" alt="${escapeMarkup(item.name)}"><em>${item.status}</em></span><span class="closet-item-copy"><b>${escapeMarkup(item.name)}</b><small>${escapeMarkup(item.brand)} · worn ${item.wears}×</small></span></button>`).join("") : `<div class="closet-no-results"><b>No matching pieces</b><small>Try another category, collection, or search.</small><button class="btn small-btn" style="margin-top:12px" onclick="resetClosetFilters()">Clear filters</button></div>`}</div>`,
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
  if (tab === "wishlist") { closetTab = "closet"; go("G-08"); return; }
  closetTab = "closet";
  if (currentId === "C-01") render();
  else go("C-01");
}
function openProfilePreferences(section = "about") {
  profilePrefSection = section;
  go("L-04");
}
const backRoutes = {
  "B-01": "D-02",
  "B-02": "B-01",
  "B-03": "A-12",
  "B-04": "B-01",
  "B-05": "B-04",
  "B-06": "B-01",
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
  "G-08": "K-01",
  "G-09": "G-08",
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
  "H-11": "F-01",
  "H-12": "H-11",
  "H-13": "H-12",
  "I-01": "L-01",
  "I-02": "I-01",
  "I-03": "I-01",
  "I-04": "I-01",
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
  if (id === "A-01") return "S-01";
  if (id === "A-06") return "A-05";
  if (id === "A-05") return "A-04";
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
  if (["G-08", "G-09"].includes(id)) {
    const item = wishlistProduct(selectedWishlistId);
    return { label: id === "G-09" && item ? `Wishlist · ${escapeMarkup(item.name)}` : "My Wishlist",
      prompt: id === "G-09" && item ? `Help me evaluate ${escapeMarkup(item.name)} against my Closet, its ${escapeMarkup(item.duplicateRisk || "unassessed")} duplicate risk, and my ${escapeMarkup(item.collection)} needs.` : "Help me review my considered products for useful gaps and duplicates.", origin: id };
  }
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
  const resolution = resolveCanonicalRoute(id);
  const targetCanonical = resolution.canonical;

  if (id === "G-8") id = "G-08";
  if (id === "G-9") id = "G-09";

  if (!routeScreens.some((s) => s.id === id || s.id === targetCanonical)) return;
  if (id === currentId) {
    if (accountMenuOpen || wishlistDialog) { accountMenuOpen = false; wishlistDialog = null; render(); }
    else if (["C-02", "G-02", "F-01"].includes(id)) render();
    presentStudioRoute(true);
    return;
  }
  if (
    pendingTryOn &&
    currentId.startsWith("H-") &&
    !id.startsWith("H-") &&
    !targetCanonical.startsWith("H-") &&
    id !== "E-06"
  )
    clearPendingTryOn();
  if (proactiveEditIndex !== null && ["I-04","I-05"].includes(currentId) && !["I-04","I-05"].includes(id)) proactiveEditIndex = null;
  if (record) {
    const fromCanonical = getCanonicalScreen(currentId);
    const last = navHistory[navHistory.length - 1];
    if (fromCanonical && last !== fromCanonical && fromCanonical !== targetCanonical) {
      navHistory.push(fromCanonical);
      if (navHistory.length > 80) navHistory.shift();
    }
  }
  if (
    localStorage.getItem("styleiqOnboardingClosetPendingV1") === "true" &&
    currentId.startsWith("B-") &&
    !id.startsWith("B-") &&
    !targetCanonical.startsWith("B-")
  )
    localStorage.removeItem("styleiqOnboardingClosetPendingV1");
  if (currentId === "B-06" && id !== "B-06") { closetPurchaseDraft = null; localStorage.removeItem("styleiqClosetPurchaseDraftV1"); }
  if (currentId.startsWith("F-") && !id.startsWith("F-") && !targetCanonical.startsWith("F-") && !["H-11", "H-12", "H-13"].includes(id)) {
    studioSourceContext = null;
    creatorReferenceContext = null;
  }
  wishlistDialog = null;
  currentId = id;
  location.hash = id;
  overlay = null;
  if (!resolution.panel) {
    lightweightPanel = null;
  }
  accountMenuOpen = false;
  notificationsOpen = false;
  render();
  document
    .querySelector(`[data-id="${id}"]`)
    ?.scrollIntoView({ block: "nearest" });
}
function backScreen() {
  if (wishlistDialog) { closeWishlistDialog(); return; }
  if (lightweightPanel) { closeLightweightPanel(); return; }
  if (overlay) { closeOverlay(); return; }
  if (accountMenuOpen) { closeAccountMenu(); return; }
  if (notificationsOpen) { closeNotifications(); return; }
  if (currentId === "E-06") {
    leaveTryOn();
    return;
  }
  if (currentId.startsWith("F-") && studioSourceContext) {
    if (studioSourceContext === "creator") {
      const returnTarget = creatorReferenceContext?.lookId ? "H-13" : "H-11";
      studioSourceContext = null;
      go(returnTarget);
      return;
    }
    studioSourceContext = null;
    currentId = "F-01";
    location.hash = "F-01";
    render();
    return;
  }
  if (currentId === "H-01" && pendingTryOn) {
    const target = pendingTryOn.returnTo;
    clearPendingTryOn();
    go(target, { record: false });
    return;
  }
  const currentCanonical = getCanonicalScreen(currentId);
  while (navHistory.length) {
    const previous = navHistory.pop();
    if (previous && previous !== currentCanonical && routeScreens.some((s) => s.id === previous)) {
      go(previous, { record: false });
      return;
    }
  }
  const fallback = fallbackBack(currentId);
  if (fallback !== currentId) {
    go(fallback, { record: false });
  } else if (currentId !== "D-02") {
    go("D-02", { record: false });
  }
}
function openNextInventoryScreen() {
  const i = Math.max(0, screens.findIndex((s) => s.id === getCanonicalScreen(currentId)));
  go(screens[Math.min(i + 1, screens.length - 1)].id);
}
function openPreviousInventoryScreen() {
  const i = Math.max(0, screens.findIndex((s) => s.id === getCanonicalScreen(currentId)));
  go(screens[Math.max(i - 1, 0)].id);
}
function brandLockup(mode = "") {
  return `<span class="brand-lockup ${mode}"><span class="brand-lockup-name">StyleIQ</span></span>`;
}
function head(title) {
  const root = ["D-02", "C-01", "I-01", "K-01", "L-01"].includes(currentId);
  if (currentId.startsWith("A-") || currentId === "S-01") {
    return `<header class="screen-head"><button class="icon-btn" aria-label="Back" onclick="backScreen()">${icon("back")}</button><div class="screen-head-title"><span class="brand-lockup micro"><span class="brand-lockup-name">StyleIQ</span></span></div><span class="head-action-placeholder" style="width:40px" aria-hidden="true"></span></header>`;
  }
  if (!root)
    return `<header class="screen-head"><button class="icon-btn" aria-label="Back" onclick="backScreen()">${icon("back")}</button><div class="screen-head-title"><h1>${title}</h1></div><button class="head-muse" aria-label="Ask Muse about this screen" onclick="openMuse()">${icon("spark")}</button></header>`;
  if (currentId === "D-02")
    return `<header class="screen-head root-head root-head-today"><button class="root-wordmark" aria-label="Go to Today" onclick="go('D-02')">StyleIQ</button><button class="root-profile-control" aria-label="Open profile" onclick="go('L-01')"><img src="${assets.profile}" alt="Amelia Hart"><span class="notification-dot" aria-hidden="true"></span></button></header>`;
  const configs = {
    "C-01": {
      label: "Wardrobe",
      title: "Closet",
      actions: `<button class="root-action" onclick="openMuse()" aria-label="Ask Muse about Closet">${icon("spark")}</button><button class="root-action" onclick="openSharedSearch('closet')" aria-label="Search Closet">${icon("search")}</button><button class="root-action" onclick="go('B-01')" aria-label="Add an item">${icon("plus")}</button>`,
    },
    "I-01": {
      label: "Your Week",
      title: "Planner",
      actions: `<button class="root-action" onclick="openMuse()" aria-label="Ask Muse about Planner">${icon("spark")}</button><button class="root-action" onclick="go('I-04')" aria-label="Plan a new Look">${icon("plus")}</button>`,
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
  if (["S", "A"].includes(currentId.split("-")[0]) || currentId === "E-06") {
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
  const resolved = accountMenuOpen
    ? "profile"
    : currentId.startsWith("C-")
    ? "closet"
    : currentId.startsWith("I-")
      ? "planner"
      : currentId.startsWith("K-")
        ? "discover"
        : currentId.startsWith("D-")
          ? "home"
          : "profile";
  return `<nav class="bottom-nav" aria-label="Primary navigation"><button class="nav-btn ${resolved === "home" ? "active" : ""}" onclick="go('D-02')">${icon("home")}Today</button><button class="nav-btn ${resolved === "closet" ? "active" : ""}" onclick="go('C-01')">${icon("shirt")}Closet</button><button class="nav-btn ${resolved === "planner" ? "active" : ""}" onclick="go('I-01')">${icon("calendar")}Planner</button><button class="nav-btn ${resolved === "discover" ? "active" : ""}" onclick="go('K-01')">${icon("compass")}Discover</button><button class="nav-btn more ${resolved === "profile" ? "active" : ""}" aria-label="Open More menu" aria-expanded="${accountMenuOpen}" onclick="toggleAccountMenu()">${icon("more")}More</button></nav>`;
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
  return `<div class="inline-edit-row"><label for="${id}">${label}</label><input id="${id}" class="input" value="${escapeMarkup(value)}" ${extra}></div>`;
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
  if (kind === "image") {
    const item = selectedClosetItem();
    photoEditDraft = { itemId: item.id, source: item.image, original: item.originalImage || item.image, mode: 'original' };
  }
  render();
}
function closeLightweightPanel() {
  photoEditDraft = null;
  lightweightPanel = null;
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
  if (kind === "image") { saveItemPhoto(); return; }
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
  if (["E-01", "E-03", "E-04"].includes(currentId))
    go("D-04");
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
      eyebrow: "Item photo", title: "Edit without leaving",
      body: itemPhotoEditor(), action: "Save photo",
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
    changeLook: {
      eyebrow: "Alternatives for today",
      title: "Change Look",
      body: `<div class="chips" role="group" aria-label="Outfit families">${["Business casual", "Party", "Dressy", "Professional", "Semi-formal"].map((family, idx) => `<button class="chip ${idx === 0 ? "active" : ""}" onclick="toast('Showing ${family} variants')">${family}</button>`).join("")}</div><div class="today-look-rail" style="margin-top:14px">${Object.values(tryOnLooks).map((look) => `<button class="today-look-card" onclick="selectTodayLook('${look.id}');closeLightweightPanel()"><span class="tryon-frame-preview" role="img" aria-label="${escapeMarkup(look.title)}" style="background-image:url('${look.sheet}');background-position:0 ${look.row * 100}%"></span><span><b>${escapeMarkup(look.title)}</b><small>${escapeMarkup(look.context)}</small></span></button>`).join("")}</div>`,
      action: "Keep Current Look",
    },
    daySheet: {
      eyebrow: "Planner day view",
      title: "Planned looks & events",
      body: `<div class="card"><p class="eyebrow">Scheduled for this day</p><h3 class="title">${plannerEventDraft.title || "Dinner by the Corniche"}</h3><p class="body">${plannerEventDraft.occasion || "Dinner"} · ${plannerEventDraft.daypart || "Evening"}</p></div><div class="choice-list" style="margin-top:12px"><button class="choice" onclick="closeLightweightPanel();go('I-04')"><span class="row"><span class="icon-wrap">${icon("plus")}</span><span><b>Add an event</b><small class="body" style="display:block">Dress for a calendar commitment</small></span></span>›</button><button class="choice" onclick="closeLightweightPanel();go('G-01')"><span class="row"><span class="icon-wrap">${icon("heart")}</span><span><b>Use saved Look</b><small class="body" style="display:block">Pick an existing outfit</small></span></span>›</button></div>`,
      action: "Done",
    },
    plannerInsights: {
      eyebrow: "Wardrobe intelligence",
      title: "Planner Insights",
      body: `<div class="item-metrics"><span class="item-metric"><b>12</b><small>Outfits planned</small></span><span class="item-metric"><b>85%</b><small>Closet utilization</small></span><span class="item-metric"><b>4×</b><small>Avg wears/piece</small></span></div><div class="card" style="margin-top:14px"><p class="eyebrow">Top piece this month</p><b>Black tailored blazer</b><p class="body">Appears in 6 planned looks.</p></div>`,
      action: "Close insights",
    },
    shareCalendar: {
      eyebrow: "Calendar privacy",
      title: "Share Planner",
      body: `<p class="body">Share your outfit schedule with trusted contacts or travel companions.</p><div class="choice-list"><button class="choice selected" aria-pressed="true"><span><b>Private link</b><small class="body" style="display:block">View only this week’s planned outfits</small></span>${icon("check")}</button><button class="choice" aria-pressed="false"><span><b>Full calendar sync</b><small class="body" style="display:block">Apple / Google Calendar export</small></span></button></div>`,
      action: "Copy private link",
    },
    tripAddLook: {
      eyebrow: "Trip looks",
      title: "Add a Look to Trip",
      body: `<div class="choice-list"><button class="choice" onclick="closeLightweightPanel();tripHubTab='looks';toast('Suggested look added');render()"><span class="row"><span class="icon-wrap">${icon("sparkles")}</span><span><b>Suggested Look</b><small class="body" style="display:block">Muse recommendation from packed items</small></span></span>›</button><button class="choice" onclick="closeLightweightPanel();go('G-01')"><span class="row"><span class="icon-wrap">${icon("heart")}</span><span><b>Saved Look</b><small class="body" style="display:block">Choose from My Looks</small></span></span>›</button><button class="choice" onclick="closeLightweightPanel();openLightweightPanel('tripMuse')"><span class="row"><span class="icon-wrap">${icon("spark")}</span><span><b>Ask Muse</b><small class="body" style="display:block">Generate for a specific outing</small></span></span>›</button><button class="choice" onclick="closeLightweightPanel();go('F-01')"><span class="row"><span class="icon-wrap">${icon("shirt")}</span><span><b>Open Style Studio</b><small class="body" style="display:block">Build with trip pieces</small></span></span>›</button></div>`,
      action: "Cancel",
    },
    tripMuse: {
      eyebrow: "Ask Muse for this Trip",
      title: "Trip outfit recommendation",
      body: `<p class="body">Generating outfit for <b>Day 1 · Lisbon dinner</b> using your packed items.</p><div class="lightweight-preview"><img src="${assets.look2}" alt="Trip look preview"><span><b>Dinner by the Tagus</b><small>Silk blouse + relaxed trousers + loafers</small></span></div>`,
      action: "Add to Trip schedule",
    },
    draftImports: {
      eyebrow: "Unresolved imports",
      title: `Draft imports (${savedBatchDrafts().length})`,
      body: `<div class="stack">${savedBatchDrafts().map((item) => `<div class="pack-row"><img src="${item.image}" alt="${escapeMarkup(item.name)}"><span><b>${escapeMarkup(item.name)}</b><small class="body" style="display:block">${escapeMarkup(item.category)} · details need review</small></span></div>`).join("") || '<p class="body">No saved import drafts.</p>'}${savedBatchDrafts().length ? `<button class="btn wide" onclick="closeLightweightPanel();resumeBatchDrafts()">Resume ${savedBatchDrafts().length} saved import drafts</button>` : ""}</div>`,
      action: "Close",
    },
    photoTools: {
      eyebrow: "Photo tools",
      title: "Edit item photo",
      body: itemPhotoEditor(),
      action: "Save photo",
    },
    discoverFilters: {
      eyebrow: "Discover inspiration",
      title: "Filter Looks",
      body: `<div class="choice-list">${["For You", "Top This Week", "Minimal", "Tailored", "Casual", "Evening"].map((f) => `<button class="choice ${discoverFilter === f ? "selected" : ""}" onclick="setDiscoverFilter('${f}');closeLightweightPanel()"><span><b>${f}</b></span>${discoverFilter === f ? icon("check") : ""}</button>`).join("")}</div>`,
      action: "Apply filters",
    },
    lookComments: {
      eyebrow: "Community",
      title: "Comments & Reactions",
      body: `<div class="stack"><div class="comment-item"><b>Camille</b><p class="body">Love the proportions of the blazer with these loafers!</p></div><div class="field" style="margin-top:12px"><label for="new-comment">Add a comment</label><input id="new-comment" class="input" placeholder="Say something nice…"></div></div>`,
      action: "Post comment",
    },
    reportLook: {
      eyebrow: "Community standards",
      title: "Report this Look",
      body: `<p class="body">Why are you reporting this Look?</p><div class="choice-list"><button class="choice" onclick="toast('Report submitted. Thank you.');closeLightweightPanel()"><span><b>Inappropriate content</b></span>›</button><button class="choice" onclick="toast('Report submitted. Thank you.');closeLightweightPanel()"><span><b>Spam or commercial</b></span>›</button><button class="choice" onclick="toast('Report submitted. Thank you.');closeLightweightPanel()"><span><b>Copyright infringement</b></span>›</button></div>`,
      action: "Cancel",
    },
    whyLook: {
      eyebrow: "Stylist explanation",
      title: "Why this Look works",
      body: `<p class="body">Muse selected this Look based on your 28° office day, scheduled presentation, and preferences for relaxed tailoring and warm neutrals.</p><div class="card" style="margin-top:12px"><b>Closet balance</b><p class="small">3 of 4 pieces owned. Oxblood accent bag complements neutral tones.</p></div>`,
      action: "Got it",
    },
    tripReview: {
      eyebrow: "Save Trip",
      title: "Save this Trip?",
      body: `<p class="body">Alexandria trip plan is complete with 8 packed pieces and 3 daily looks.</p>`,
      action: "Save Trip",
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
    ["help", "L-14"],
  ];
  appSection.querySelectorAll("button.select-row").forEach((row, index) => {
    if (index === 1) {
      const label = row.querySelector(".grow");
      if (label) label.textContent = "Photo originals";
    }
    if (index === 2) {
      const label = row.querySelector(".grow");
      if (label) label.textContent = "Help Center";
    }
    if (!row.querySelector(".icon-wrap"))
      row.insertAdjacentHTML(
        "afterbegin",
        `<span class="icon-wrap">${icon(configs[index][0])}</span>`,
      );
    row.onclick = () => go(configs[index][1]);
  });
  const settingsList = appSection.querySelector(".settings-list");
  if (settingsList && !settingsList.querySelector("[data-tutorial-entry]"))
    settingsList.insertAdjacentHTML("beforeend", `<button class="select-row" data-tutorial-entry style="width:100%;border:0;background:transparent;text-align:left" onclick="go('L-12')"><span class="grow">Tutorial</span><span>›</span></button>`);
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
    const image = app.querySelector(".hero-img, .saved-look-media"),
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
    const mediaFrame = app.querySelector("[data-saved-look-media]");
    if (mediaFrame) {
      let startX = 0;
      mediaFrame.addEventListener("pointerdown", (event) => {
        if (event.target.closest("button")) return;
        startX = event.clientX;
        mediaFrame.setPointerCapture?.(event.pointerId);
      });
      mediaFrame.addEventListener("pointerup", (event) => {
        const delta = event.clientX - startX;
        if (Math.abs(delta) > 42) stepSavedLookMedia(delta < 0 ? 1 : -1);
      });
    }
  }
}
function installWalkthroughGestures() {
  if (currentId !== "S-01") return;
  const video = app.querySelector(".meet-muse-video-screen video");
  if (video) {
    video.muted = true;
    video.playsInline = true;
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
    video.addEventListener("ended", () => {
      video.play().catch(() => {});
    });
  }
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
        `${itemIntelligence(selectedClosetItem()).looks.length} known Looks`,
        selectedClosetItem().wishlistId ? "Try this piece with the items you already own. Outfit suggestions use your current Closet." : "Explore Looks using this piece, or style it to build another combination.",
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
        tripSummary(),
        "Review your daily Looks and mark the pieces you have packed.",
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
  localStorage.setItem("styleiqOnboardingCompleteV1", "true");
  localStorage.removeItem("styleiqGuestModeV1");
  localStorage.removeItem("styleiqOnboardingClosetPendingV1");
  go(destination);
}
function startNewUserOnboarding(destination = "A-02") {
  customerScenario = "new";
  syncCustomerScenarioUrl();
  onboardingGoal = "";
  closetState.size = 0;
  localStorage.removeItem("styleiqOnboardingCompleteV1");
  localStorage.removeItem("styleiqGuestModeV1");
  localStorage.removeItem("styleiqOnboardingGoalV1");
  localStorage.removeItem("styleiqOnboardingClosetPendingV1");
  localStorage.setItem("styleiqClosetSizeV1", "0");
  go(destination);
}
function selectOnboardingGoal(goal) {
  onboardingGoal = goal;
  localStorage.setItem("styleiqOnboardingGoalV1", goal);
  completeSetupStyleIQ();
}
function beginOnboardingClosetEntry(destination) {
  localStorage.setItem("styleiqOnboardingClosetPendingV1", "true");
  go(destination);
}
function finishOnboardingClosetImport(destination = "C-01") {
  const returnToToday = localStorage.getItem("styleiqOnboardingClosetPendingV1") === "true";
  localStorage.removeItem("styleiqOnboardingClosetPendingV1");
  if (returnToToday) completeOnboarding("D-02");
  else go(destination);
}
function openStyleIQ() {
  go(isExistingCustomer() ? "D-02" : "S-01");
}
function exploreAsGuest() {
  customerScenario = "new";
  syncCustomerScenarioUrl();
  closetState.size = 0;
  localStorage.setItem("styleiqGuestModeV1", "true");
  localStorage.removeItem("styleiqOnboardingCompleteV1");
  localStorage.setItem("styleiqClosetSizeV1", "0");
  go("D-02");
}
const walkthroughSlides = [
  {
    image: peoplePhotos.onboardingMuse,
    alt: "Muse arranging outfit references in a sunlit wardrobe studio",
    eyebrow: "Your personal stylist",
    title: "Hi, I’m Muse.",
    body: "I learn your wardrobe, your taste, and the choices you actually make—then help you get more from every piece you own.",
  },
  {
    image: peoplePhotos.manFashion,
    alt: "A man choosing a navy tailored jacket in a wardrobe studio",
    eyebrow: "Daily style guidance",
    title: "Dress with purpose, every day.",
    body: "From workdays to weekends, StyleIQ helps you choose outfits that fit your plans, your lifestyle, and your personal style.",
  },
  {
    image: peoplePhotos.coupleTravel,
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
  const destination = editing ? "L-04" : "A-02",
    choices = [
      ["Womenswear", peoplePhotos.womanPortrait],
      ["Menswear", peoplePhotos.manPortrait],
      ["Both", peoplePhotos.coupleTravel],
    ];
  return `<section class="screen entry-screen"><div class="walkthrough-content"><div class="entry-top"><button class="icon-btn" aria-label="Back" onclick="backScreen()">${icon("back")}</button>${brandLockup("micro")}<span></span></div><div style="margin-top:28px"><p class="eyebrow">${editing ? "Styling context" : "Personalize StyleIQ"}</p><h1 class="display">Which wardrobe should Muse style?</h1><p class="body">Choose Womenswear, Menswear, or Both. This is styling context, not an identity question.</p></div><div class="profile-choice-grid" role="group" aria-label="Styling context">${choices.map(([label, image]) => `<button class="styling-option" aria-pressed="${stylingContext === label}" onclick="chooseStylingContext('${label}','${destination}')"><img src="${image}" alt="${label} wardrobe"><b>${label}</b></button>`).join("")}</div><p class="helper" style="margin-top:14px">Your choice is saved and can be changed later from About you.</p></div></section>`;
}
function buildClosetOnboarding() {
  return `<section class="screen entry-screen">${head("StyleIQ")}<div class="content no-nav"><div class="onboard"><div class="onboard-main auth-step-main"><div class="auth-heading"><p class="eyebrow">Next, make it yours</p><h1 class="display">Build your closet</h1><p class="body">Let’s start with a few pieces. You can always add more later.</p></div><div class="choice-list" role="region" aria-label="Build your closet options"><button class="choice" onclick="beginOnboardingClosetEntry('B-02')"><span class="row"><span class="icon-wrap">${icon("camera")}</span><span><b>Scan clothes</b><small class="body" style="display:block">Capture one or many pieces</small></span></span><span>›</span></button><button class="choice" onclick="beginOnboardingClosetEntry('B-02')"><span class="row"><span class="icon-wrap">${icon("image-up")}</span><span><b>Add photos</b><small class="body" style="display:block">Choose garment photos from your library</small></span></span><span>›</span></button><button class="choice" onclick="beginOnboardingClosetEntry('B-04')"><span class="row"><span class="icon-wrap">${icon("search")}</span><span><b>Search an item</b><small class="body" style="display:block">Find a piece you own</small></span></span><span>›</span></button><button class="choice" onclick="beginOnboardingClosetEntry('B-09')"><span class="row"><span class="icon-wrap">${icon("bag")}</span><span><b>Import purchases</b><small class="body" style="display:block">Bring in items from receipts</small></span></span><span>›</span></button><button class="choice" onclick="completeOnboarding('D-02')"><span class="row"><span class="icon-wrap">${icon("arrow-right")}</span><span><b>Skip for now</b><small class="body" style="display:block">Explore Today first</small></span></span><span>›</span></button></div></div></div></div></section>`;
}
function entryScreen(s) {
  if (s.id === "S-00")
    return `<section class="screen entry-screen entry-splash" role="button" tabindex="0" aria-label="Open StyleIQ" onclick="openStyleIQ()" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openStyleIQ()}"><img class="splash-media" src="images/splash-curated-wardrobe.jpg" alt="Curated wardrobe with natural light and linen drape"><div class="splash-tint" aria-hidden="true"></div><div class="splash-tag" aria-hidden="true"><span class="splash-tag-text">Styled for you ♡</span></div><div class="entry-frame"><div class="entry-top"><span class="splash-brand">StyleIQ</span></div><div class="splash-copy"><h1 class="splash-title">Your closet.<br>Smarter.</h1><p class="splash-body">Know what you own.<br>Know what to wear.<br>Buy better.</p></div></div></section>`;
  if (s.id === "S-01") {
    return `<section class="screen entry-screen walkthrough-story meet-muse-video-screen"><video class="walkthrough-story-bg" autoplay loop muted playsinline poster="images/meet-muse-poster.jpg" preload="auto"><source src="videos/meet-muse-runway.mp4" type="video/mp4"></video><div class="walkthrough-story-shade" aria-hidden="true"></div><div class="walkthrough-story-frame"><div class="walkthrough-story-head"><span></span>${brandLockup("inverse micro")}<span></span></div><div class="walkthrough-story-body"><div class="meet-muse-hero-copy"><p class="eyebrow">Meet Muse</p><h1 class="display">Hi, I’m Muse.</h1><p class="body">Your personal stylist—learning your wardrobe, plans, and taste to help you dress with purpose.</p></div><div class="walkthrough-story-actions"><button class="btn primary wide walkthrough-primary" onclick="go('A-16')">Create account</button><button class="btn walkthrough-login" onclick="go('A-01')">Log in</button><button class="btn walkthrough-guest" onclick="exploreAsGuest()">Explore as guest</button></div></div></div></section>`;
  }
  return stylingContextSurface(false);
}
const otpSession = (() => {
  try { return JSON.parse(localStorage.getItem('styleiqOtpSessionV1')) || {}; } catch { return {}; }
})();
Object.assign(otpSession, { email: otpSession.email || '', digits: otpSession.digits || '', attempts: otpSession.attempts || 0, resendAt: otpSession.resendAt ?? Date.now()+28000, expiresAt: otpSession.expiresAt ?? Date.now()+300000, blockedUntil: otpSession.blockedUntil || 0 });
function persistOtp() { otpSession.state = otpState; otpSession.attempts = otpAttempts; localStorage.setItem('styleiqOtpSessionV1', JSON.stringify(otpSession)); }
function beginOtp() {
  const input = app.querySelector('#signup-email');
  if (!input?.reportValidity()) return;
  Object.assign(otpSession, { email: input.value, digits: '', attempts: 0, resendAt: Date.now()+28000, expiresAt: Date.now()+300000, blockedUntil: 0 });
  otpState = 'idle'; otpAttempts = 0; persistOtp(); authInlineState = 'otp'; render();
}
function otpWait() { return Math.max(0, Math.ceil((Math.max(otpSession.resendAt, otpSession.blockedUntil)-Date.now())/1000)); }
function otpTiming() {
  const seconds = otpWait();
  return seconds ? `${otpSession.blockedUntil > Date.now() ? 'Retry' : 'Resend available'} in ${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')}` : 'You can request a new code.';
}
function saveOtpDigits() { otpSession.digits = [...app.querySelectorAll('.otp input')].map(input => input.value).join(''); persistOtp(); }
function otpTick() {
  if (!(getCanonicalScreen(currentId) === 'A-16' && authInlineState === 'otp')) return;
  if (otpState === 'blocked' && otpSession.blockedUntil <= Date.now()) { otpAttempts = 0; otpState = 'idle'; persistOtp(); render(); }
  else if (!['expired','blocked','sendFailed'].includes(otpState) && otpSession.expiresAt <= Date.now()) { otpState = 'expired'; otpSession.resendAt = 0; persistOtp(); render(); }
  const label = app.querySelector('#otp-timing'); if (label) label.textContent = otpTiming();
  const resend = app.querySelector('#otp-resend'); if (resend) resend.disabled = otpWait() > 0;
}
setInterval(otpTick, 500);
function beginOtpInline() {
  const fields = ['#signup-first-name', '#signup-last-name', '#signup-email'].map(selector => app.querySelector(selector));
  if (fields.some(input => input && !input.reportValidity())) return;
  const [firstNameInput, lastNameInput, emailInput] = fields;
  const firstName = firstNameInput?.value.trim() || "Amelia";
  const lastName = lastNameInput?.value.trim() || "Hart";
  const email = emailInput?.value || "user@example.com";
  persistAccountIdentity({ firstName, lastName, email, provider: "email" });
  Object.assign(otpSession, { email, digits: '', attempts: 0, resendAt: Date.now()+28000, expiresAt: Date.now()+300000, blockedUntil: 0 });
  otpState = 'idle'; otpAttempts = 0; persistOtp();
  authInlineState = 'otp';
  render();
}
function completeProviderSignup(provider) {
  persistAccountIdentity({ firstName: "Amelia", lastName: "Hart", email: provider === "Google" ? "amelia@gmail.com" : "amelia@icloud.com", provider });
  startNewUserOnboarding("A-02");
}
function completeSetupStyleIQ() {
  localStorage.setItem("styleiqOnboardingCompleteV1", "true");
  localStorage.removeItem("styleiqGuestModeV1");
  if (["Make more outfits from Closet", "Make more outfits from my closet"].includes(onboardingGoal)) {
    go(closetItems().length ? "C-01" : "B-01");
  } else if (onboardingGoal === "Plan outfits") {
    go("I-01");
  } else if (onboardingGoal === "Shop more intentionally") {
    go("G-08");
  } else if (["Pack for a trip", "Pack for a trip / travel"].includes(onboardingGoal)) {
    go("J-02");
  } else {
    go("D-02");
  }
}
function selectSetupOption(kind, value, button) {
  const group = button?.closest('[role="radiogroup"]');
  if (kind === "wardrobe") {
    stylingContext = value;
    localStorage.setItem("styleiqStylingContextV1", value);
  } else {
    onboardingGoal = value;
    localStorage.setItem("styleiqOnboardingGoalV1", value);
    app.querySelector("#setup-submit")?.removeAttribute("disabled");
  }
  group?.querySelectorAll('[role="radio"]').forEach((option) => {
    option.setAttribute("aria-checked", String(option === button));
  });
}
function onboarding(s) {
  let main = "";
  if (s.id === "A-01")
    main = `<div class="onboard-main auth-main"><div class="auth-heading"><p class="eyebrow">Welcome back</p><h1 class="display">Sign in to your wardrobe.</h1><p class="body">Pick up where you left off with your Closet, Looks, plans, and Muse preferences.</p></div><div class="auth-shell"><div class="auth-glass-refract" aria-hidden="true"></div><div class="auth-glass-tint" aria-hidden="true"></div><div class="auth-glass-specular" aria-hidden="true"></div><div class="auth-panel"><div class="stack auth-form"><div class="field"><div class="auth-field-label"><label for="login-email">Email address</label></div><div class="auth-input-wrap"><span class="auth-input-icon" aria-hidden="true">${icon("user-round")}</span><input id="login-email" class="input auth-screen-input" type="email" autocomplete="email" placeholder="name@email.com"></div></div><div class="field"><div class="auth-field-label"><label for="login-password">Password</label><button class="auth-inline-link" type="button" onclick="toast('Password reset link sent')">Forgot password?</button></div><div class="auth-input-wrap"><span class="auth-input-icon" aria-hidden="true">${icon("lock-keyhole")}</span><input id="login-password" class="input auth-screen-input" type="password" autocomplete="current-password" placeholder="Enter your password"></div></div><button class="btn primary wide auth-primary" type="button" onclick="completeOnboarding('D-02')">Sign in</button></div><div class="auth-divider"><span>or continue with</span></div><div class="auth-social-grid"><button class="btn auth-provider" type="button" aria-label="Sign in with Google" onclick="completeOnboarding('D-02')">${authIcon("google")}<span>Google</span></button><button class="btn auth-provider" type="button" aria-label="Sign in with Apple" onclick="completeOnboarding('D-02')">${authIcon("apple")}<span>Apple</span></button></div></div></div><div class="auth-switch"><span>Don’t have an account?</span><button class="auth-switch-action" type="button" onclick="go('A-16')">Sign up</button></div></div>`;
  else if (s.id === "A-16") {
    if (authInlineState === "email") {
      main = `<div class="onboard-main auth-main"><div class="auth-heading"><p class="eyebrow">Email sign-up</p><h1 class="display">Create your account.</h1><p class="body">Account identity stays here. Personalization comes next.</p></div><div class="auth-shell"><div class="auth-glass-refract" aria-hidden="true"></div><div class="auth-glass-tint" aria-hidden="true"></div><div class="auth-glass-specular" aria-hidden="true"></div><div class="auth-panel"><div class="stack auth-form"><div class="row"><div class="field grow"><label for="signup-first-name">First Name</label><input id="signup-first-name" class="input auth-screen-input" required autocomplete="given-name" value="${escapeMarkup(accountIdentity.firstName || '')}"></div><div class="field grow"><label for="signup-last-name">Last Name</label><input id="signup-last-name" class="input auth-screen-input" required autocomplete="family-name" value="${escapeMarkup(accountIdentity.lastName || '')}"></div></div><div class="field"><div class="auth-field-label"><label for="signup-email">Email</label></div><div class="auth-input-wrap"><span class="auth-input-icon" aria-hidden="true">${icon("mail")}</span><input id="signup-email" class="input auth-screen-input" type="email" required autocomplete="email" value="${escapeMarkup(accountIdentity.email || otpSession.email || '')}" placeholder="name@email.com"></div><span class="helper">Used for account access and optional receipt imports.</span></div><button class="btn primary wide auth-primary" type="button" onclick="beginOtpInline()">Create Account</button><div style="text-align:center;margin-top:10px"><button class="auth-inline-link" type="button" onclick="authInlineState='providers';render()">Back to account options</button></div></div></div></div><div class="auth-switch"><span>Already have an account?</span><button class="auth-switch-action" type="button" onclick="go('A-01')">Sign in</button></div></div>`;
    } else if (authInlineState === "otp") {
      main = `<div class="onboard-main auth-main"><div class="auth-heading"><p class="eyebrow">Verify email</p><h1 class="display">Check your inbox.</h1><p class="body">Enter the six-digit code we sent to ${escapeMarkup(otpSession.email || "your email")}.</p><p class="small">Prototype code: 123456</p></div><div class="auth-shell"><div class="auth-glass-refract" aria-hidden="true"></div><div class="auth-glass-tint" aria-hidden="true"></div><div class="auth-glass-specular" aria-hidden="true"></div><div class="auth-panel"><div class="auth-form">${otpState === "expired" ? '<p class="error" role="alert">This code has expired. Request a new code.</p>' : otpState === "invalid" ? '<p class="error" role="alert">That code is invalid. Try again.</p>' : otpState === "blocked" ? '<p class="error" role="alert">Too many attempts. Please wait before trying again.</p>' : otpState === "resent" ? '<p class="success-badge" role="status">A new code was sent.</p>' : otpState === "resendFailed" ? '<p class="error" role="alert">We couldn’t resend the code. Try again.</p>' : otpState === "sendFailed" ? '<p class="error" role="alert">We couldn’t send a code. Try again.</p>' : ""}<div class="otp">${Array.from({ length: 6 }, (_, i) => `<input inputmode="numeric" pattern="[0-9]*" maxlength="1" value="${otpSession.digits[i] || ''}" oninput="saveOtpDigits()" aria-label="Digit ${i + 1}">`).join("")}</div><div class="between" style="margin-top:12px"><span id="otp-timing" class="helper" role="status">${otpTiming()}</span><button id="otp-resend" class="auth-inline-link" type="button" ${otpWait() ? "disabled" : ""} onclick="resendOtp(true)">${otpState === "expired" ? "Send New Code" : "Resend code"}</button></div><button class="btn primary wide auth-primary" type="button" style="margin-top:14px" onclick="verifyOtp()" ${otpState === "blocked" ? "disabled" : ""}>Verify email</button><div style="text-align:center;margin-top:10px"><button class="auth-inline-link" type="button" onclick="authInlineState='email';render()">Change email</button></div><details style="margin-top:14px"><summary>Prototype states</summary><div class="chips" style="margin-top:8px"><button class="chip" onclick="setOtpState('valid')">Valid</button><button class="chip" onclick="setOtpState('invalid', true)">Invalid</button><button class="chip" onclick="setOtpState('expired')">Expired</button><button class="chip" onclick="setOtpState('resendFailed')">Resend failure</button><button class="chip" onclick="setOtpState('sendFailed')">Send failure</button></div></details></div></div></div><div class="auth-switch"><span>Already have an account?</span><button class="auth-switch-action" type="button" onclick="go('A-01')">Sign in</button></div></div>`;
    } else {
      main = `<div class="onboard-main auth-main"><div class="auth-heading"><p class="eyebrow">Your wardrobe, considered</p><h1 class="display">Create your StyleIQ.</h1><p class="body">Build a more intentional wardrobe with a personal stylist that learns from you.</p></div><div class="auth-shell"><div class="auth-glass-refract" aria-hidden="true"></div><div class="auth-glass-tint" aria-hidden="true"></div><div class="auth-glass-specular" aria-hidden="true"></div><div class="auth-panel"><div class="auth-social-grid"><button class="btn auth-provider" type="button" aria-label="Sign up with Google" onclick="completeProviderSignup('Google')">${authIcon("google")}<span>Google</span></button><button class="btn auth-provider" type="button" aria-label="Sign up with Apple" onclick="completeProviderSignup('Apple')">${authIcon("apple")}<span>Apple</span></button></div><div class="auth-divider"><span>or</span></div><button class="btn primary wide auth-provider auth-primary auth-email-choice" type="button" onclick="authInlineState='email';render()">${authIcon("mail")}<span>Continue with email</span></button><p class="auth-legal">By continuing, you agree to StyleIQ’s Terms and acknowledge the Privacy Policy.</p></div></div><div class="auth-switch"><span>Already have an account?</span><button class="auth-switch-action" type="button" onclick="go('A-01')">Sign in</button></div></div>`;
    }
  }
  else if (s.id === "A-02") {
    const goals = [
      ["shirt", "Get dressed faster"],
      ["sparkles", "Make more outfits from Closet"],
      ["calendar", "Plan outfits"],
      ["search", "Shop more intentionally"],
      ["briefcase", "Pack for a trip"],
    ];
    main = `<div class="onboard-main auth-step-main setup-main"><div class="auth-heading setup-heading"><p class="eyebrow">Personalize</p><h1 class="display">Set up your StyleIQ</h1><p class="body">Two quick choices, tailored to how you want to use your wardrobe.</p></div><div class="setup-flow"><section class="auth-shell setup-section setup-wardrobe" data-section="wardrobe" aria-labelledby="setup-wardrobe-title"><div class="auth-glass-refract" aria-hidden="true"></div><div class="auth-glass-tint" aria-hidden="true"></div><div class="auth-glass-specular" aria-hidden="true"></div><div class="auth-panel"><div class="setup-step"><span>01</span><span>Wardrobe</span></div><h2 id="setup-wardrobe-title">Who are we styling?</h2><p>Choose the wardrobe you want StyleIQ to understand first.</p><div class="setup-wardrobe-options" role="radiogroup" aria-label="Wardrobe context">${["Womenswear", "Menswear", "Both"].map(label => `<button type="button" class="setup-wardrobe-option" role="radio" aria-checked="${stylingContext === label}" onclick="selectSetupOption('wardrobe','${label}',this)"><span>${label}</span><span class="setup-check" aria-hidden="true">${icon("check")}</span></button>`).join("")}</div><div class="setup-scroll-cue" aria-hidden="true"><span>Next: choose your first goal</span><span>↓</span></div></div></section><section class="auth-shell setup-section setup-goals" data-section="goal" aria-labelledby="setup-goal-title"><div class="auth-glass-refract" aria-hidden="true"></div><div class="auth-glass-tint" aria-hidden="true"></div><div class="auth-glass-specular" aria-hidden="true"></div><div class="auth-panel"><div class="setup-step"><span>02</span><span>First goal</span></div><h2 id="setup-goal-title">What should StyleIQ help with first?</h2><p>Pick one place to start. Everything else will still be available.</p><div class="choice-list setup-goal-options" role="radiogroup" aria-label="First StyleIQ goal">${goals.map(([ico, label]) => `<button type="button" class="choice setup-goal-option" role="radio" aria-checked="${onboardingGoal === label}" onclick="selectSetupOption('goal','${label}',this)"><span class="row"><span class="icon-wrap">${icon(ico)}</span><b>${label}</b></span><span class="setup-goal-state" aria-hidden="true"><span class="setup-goal-arrow">›</span><span class="setup-check">${icon("check")}</span></span></button>`).join("")}</div><button id="setup-submit" class="btn primary wide auth-primary setup-submit" type="button" onclick="completeSetupStyleIQ()" ${onboardingGoal ? "" : "disabled"}>Start with StyleIQ</button></div></section></div></div>`;
  }
  else if (s.id === "A-03")
    main = `<div class="onboard-main auth-step-main"><div class="auth-heading"><p class="eyebrow">Email sign-up</p><h1 class="display">Add your email.</h1><p class="body">Use this email to sign in and recognize shopping receipts you choose to forward.</p></div><div class="auth-shell"><div class="auth-glass-refract" aria-hidden="true"></div><div class="auth-glass-tint" aria-hidden="true"></div><div class="auth-glass-specular" aria-hidden="true"></div><div class="auth-panel"><div class="stack auth-form"><div class="field"><div class="auth-field-label"><label for="signup-email">Email address</label></div><div class="auth-input-wrap"><span class="auth-input-icon" aria-hidden="true">${icon("mail")}</span><input id="signup-email" class="input auth-screen-input" type="email" required autocomplete="email" placeholder="name@email.com"></div><span class="helper">Used for account access and optional receipt imports.</span></div><button class="btn primary wide auth-primary" type="button" onclick="beginOtp()">Create my account</button></div></div></div></div>`;
  else if (s.id === "A-04")
    main = `<div class="onboard-main auth-step-main"><div class="auth-heading"><p class="eyebrow">Verify email</p><h1 class="display">Check your inbox.</h1><p class="body">Enter the six-digit code we sent to ${escapeMarkup(otpSession.email || "your email")}.</p><p class="small">Prototype code: 123456</p></div><div class="auth-shell"><div class="auth-glass-refract" aria-hidden="true"></div><div class="auth-glass-tint" aria-hidden="true"></div><div class="auth-glass-specular" aria-hidden="true"></div><div class="auth-panel"><div class="auth-form">${otpState === "expired" ? '<p class="error" role="alert">This code has expired. Request a new code.</p>' : otpState === "invalid" ? '<p class="error" role="alert">That code is invalid. Try again.</p>' : otpState === "blocked" ? '<p class="error" role="alert">Too many attempts. Please wait before trying again.</p>' : otpState === "resent" ? '<p class="success-badge" role="status">A new code was sent.</p>' : otpState === "resendFailed" ? '<p class="error" role="alert">We couldn’t resend the code. Try again.</p>' : otpState === "sendFailed" ? '<p class="error" role="alert">We couldn’t send a code. Try again.</p>' : ""}<div class="otp">${Array.from({ length: 6 }, (_, i) => `<input inputmode="numeric" pattern="[0-9]*" maxlength="1" value="${otpSession.digits[i] || ''}" oninput="saveOtpDigits()" aria-label="Digit ${i + 1}">`).join("")}</div><div class="between" style="margin-top:12px"><span id="otp-timing" class="helper" role="status">${otpTiming()}</span><button id="otp-resend" class="auth-inline-link" type="button" ${otpWait() ? "disabled" : ""} onclick="resendOtp(true)">${otpState === "expired" ? "Send New Code" : "Resend code"}</button></div><button class="btn primary wide auth-primary" type="button" style="margin-top:14px" onclick="verifyOtp()" ${otpState === "blocked" ? "disabled" : ""}>Verify email</button><details><summary>Prototype states</summary><div class="chips"><button class="chip" onclick="setOtpState('valid')">Valid</button><button class="chip" onclick="setOtpState('invalid', true)">Invalid</button><button class="chip" onclick="setOtpState('expired')">Expired</button><button class="chip" onclick="setOtpState('resendFailed')">Resend failure</button><button class="chip" onclick="setOtpState('sendFailed')">Send failure</button></div></details></div></div></div></div>`;
  else if (s.id === "A-05")
    main = `<div class="onboard-main auth-step-main goal-step-main"><div class="auth-shell goal-card"><div class="goal-card-art" aria-hidden="true"></div><div class="auth-glass-refract" aria-hidden="true"></div><div class="auth-glass-tint" aria-hidden="true"></div><div class="auth-glass-specular" aria-hidden="true"></div><div class="auth-panel"><div class="auth-heading goal-card-heading"><p class="eyebrow">Start with your goal</p><h1 class="display">What can StyleIQ help with?</h1><p class="body">Choose one. You can use everything else whenever you need it.</p></div><div class="choice-list">${[
      ["shirt", "Get dressed faster"],
      ["sparkles", "Make more outfits from my closet"],
      ["calendar", "Plan outfits"],
      ["search", "Shop more intentionally"],
      ["layers", "All of it"],
    ]
      .map(
        ([ico, label]) =>
          `<button class="choice" aria-pressed="${onboardingGoal === label}" onclick="selectOnboardingGoal('${label}')"><span class="row"><span class="icon-wrap">${icon(ico)}</span><b>${label}</b></span><span class="goal-choice-arrow" aria-hidden="true">›</span></button>`,
      )
      .join("")}</div></div></div></div>`;
  else if (s.id === "A-06") return buildClosetOnboarding();
  else return mirrorToday();
  return `<section class="screen">${head("StyleIQ")}<div class="content no-nav"><div class="onboard"><div class="onboard-step-icon" aria-hidden="true">${icon(onboardingIconMap[s.id] || "sparkles")}</div>${main}</div></div></section>`;
}
let importConfidence = "high",
  batchImportActive = false,
  batchReadyToConfirm = false,
  batchUncertainResolved = false,
  batchReviewIndex = 0,
  batchSelectedCount = 12,
  uploadIssue = "unable",
  receiptState = "idle",
  otpState = otpSession.state || "idle",
  otpAttempts = otpSession.attempts || 0,
  photoLearningStage = "picker";
const uploadIssueDefinitions = {
  blurry: { label: "Low-quality / blurry", title: "This photo is too blurry.", body: "We need a sharper view to crop and identify one garment.", primary: "Retry photo", secondary: "Choose another photo" },
  unsupported: { label: "Unsupported image", title: "This image format is not supported.", body: "Choose a JPG, PNG, or HEIC garment photo from your device.", primary: "Choose another photo", secondary: "Cancel" },
  nonFashion: { label: "Non-fashion image", title: "This doesn’t look like a fashion item.", body: "Use a photo of clothing, shoes, bags, or accessories to add it to your Closet.", primary: "Choose another photo", secondary: "Cancel" },
  duplicate: { label: "Likely duplicate", title: "This may already be in your Closet.", body: "We found a similar owned item. Choose what you want to do with this photo.", primary: "View existing item", secondary: "Add anyway" },
  alreadyOwned: { label: "Already in Closet", title: "This item is already in your Closet.", body: "You can view the existing record, update its photo, or leave your Closet unchanged.", primary: "View existing item", secondary: "Replace / update photo" },
  unable: { label: "Unable to detect item", title: "We couldn’t detect one clear item.", body: "Try a photo with one garment in even light, or continue manually and correct the details yourself.", primary: "Retry photo", secondary: "Continue manually" },
  multiple: { label: "Multiple items detected", title: "We found more than one item.", body: "Separate the garments into individual photos so each Closet record stays accurate.", primary: "Choose another photo", secondary: "Continue manually" },
};
let receiptPurchases = readWishlistData("styleiqReceiptDraftsV1", []);
function persistReceiptDrafts() { localStorage.setItem("styleiqReceiptDraftsV1", JSON.stringify(receiptPurchases)); }
function setReceiptState(state) {
  receiptState = state;
  if (state === 'complete' || state === 'mixed') {
    receiptPurchases = [
      { id: newClosetItemId(), name: 'Silk shell', brand: 'Aritzia', category: 'Tops', image: assets.top, ready: true },
      ...(state === 'mixed' ? [{ id: newClosetItemId(), name: 'Leather loafers', brand: 'Vagabond', category: 'Shoes', image: assets.shoes, ready: true }, { id: newClosetItemId(), name: '', brand: 'Unknown', category: 'Outerwear', image: assets.blazer, ready: false }] : [])
    ];
    persistReceiptDrafts();
  }
  if (state === 'cancel') { receiptPurchases = []; persistReceiptDrafts(); receiptState = 'idle'; }
  render();
}
function saveReceiptException(event) {
  event.preventDefault();
  const pending = receiptPurchases.find(item => !item.ready);
  if (!pending) return;
  pending.name = event.currentTarget.querySelector('#receipt-item-name').value.trim();
  if (!pending.name) return;
  pending.ready = true; persistReceiptDrafts(); render();
}
function skipReceiptException() {
  const pending = receiptPurchases.find(item => !item.ready);
  if (pending) receiptPurchases = receiptPurchases.filter(item => item.id !== pending.id);
  persistReceiptDrafts(); render();
}
function importReadyReceipts() {
  const ready = receiptPurchases.filter(item => item.ready);
  if (!ready.length) return;
  purchasedClosetItems.unshift(...ready.map(({ ready, ...item }) => ({ ...item, status: 'Available', lifecycle: 'Keep', wears: 0, source: 'receipt-import' })));
  persistClosetItems();
  receiptPurchases = receiptPurchases.filter(item => !item.ready); persistReceiptDrafts();
  finishOnboardingClosetImport(); toast(`${ready.length} purchases added`);
}
function reviewReceiptPurchase() {
  const item = receiptPurchases.find(item => item.ready);
  if (!item) return;
  closetPurchaseDraft = { ...item, source: 'receipt-import' };
  localStorage.setItem('styleiqClosetPurchaseDraftV1', JSON.stringify(closetPurchaseDraft));
  go('B-06');
}
function reviewManualReceipt(event) {
  event.preventDefault();
  const name = event.currentTarget.querySelector('#manual-purchase').value.trim();
  if (!name) return;
  closetPurchaseDraft = { id: newClosetItemId(), name, brand: 'Unknown', category: 'Outerwear', image: assets.blazer, source: 'receipt-import' };
  localStorage.setItem('styleiqClosetPurchaseDraftV1', JSON.stringify(closetPurchaseDraft));
  go('B-06');
}
function receiptImportSurface() {
  if (receiptState === 'idle') return `<div class="stack"><h2 class="title">Forward shopping receipts</h2><p class="body">Review purchases extracted from your receipts before adding them.</p><b>add@styleiq.app</b>${receiptPurchases.length ? '<button class="btn wide" onclick="receiptState=&quot;mixed&quot;;render()">Resume receipt import</button>' : ''}<button class="btn primary wide" onclick="setReceiptState('complete')">Preview complete receipt</button><button class="btn wide" onclick="setReceiptState('mixed')">Preview mixed receipt</button><button class="btn wide" onclick="setReceiptState('failed')">Preview failed receipt</button></div>`;
  if (['complete', 'mixed'].includes(receiptState)) {
    const ready = receiptPurchases.filter(item => item.ready), pending = receiptPurchases.find(item => !item.ready);
    return `<h2 class="title">${receiptState === 'complete' ? 'Purchase detected' : `We found ${receiptPurchases.length} purchases.`}</h2><p class="body">${ready.length} are ready. ${receiptPurchases.length-ready.length} needs your help.</p>${ready.map(item => `<div class="pack-row receipt-ready-row"><span><b>${escapeMarkup(item.name)}</b><small class="body">Ready</small></span></div>`).join('')}${pending ? `<form class="card" onsubmit="saveReceiptException(event)"><label for="receipt-item-name">Missing item information</label><input id="receipt-item-name" class="input" placeholder="Enter item name" required><button class="btn wide" type="submit">Save uncertain item</button><button class="btn wide" type="button" onclick="skipReceiptException()">Skip this item</button></form>` : ''}${receiptState === 'complete' ? '<button class="btn wide" onclick="reviewReceiptPurchase()">Review purchase</button>' : ''}<button class="btn primary wide" onclick="importReadyReceipts()" ${ready.length ? '' : 'disabled'}>Add ${ready.length} ready purchases</button><button class="text-action" onclick="setReceiptState('cancel')">Cancel import</button>`;
  }
  const titles = { failed: 'We couldn’t read this receipt.', failedFashion: 'Could not identify a fashion purchase.', failedUnclear: 'Receipt image is unclear.', failedMissing: 'Item information is missing.', failedUnsupported: 'This receipt is unsupported.', manual: 'Enter purchase manually' };
  return `<h2 class="title">${titles[receiptState] || titles.failed}</h2><p class="body">Your other purchase drafts remain available.</p><div class="chips">${[['failedFashion','Not fashion'],['failedUnclear','Unclear'],['failedMissing','Missing info'],['failedUnsupported','Unsupported']].map(([state,label])=>`<button class="chip" onclick="setReceiptState('${state}')">${label}</button>`).join('')}</div><div class="stack"><button class="btn wide" onclick="setReceiptState('idle')">Retry</button><button class="btn wide" onclick="setReceiptState('idle')">Upload another receipt</button><button class="btn wide" onclick="setReceiptState('manual')">Enter purchase manually</button><button class="text-action" onclick="setReceiptState('cancel')">Cancel import</button></div>${receiptState === 'manual' ? `<form class="card" onsubmit="reviewManualReceipt(event)"><label for="manual-purchase">Purchase name</label><input id="manual-purchase" class="input" required><button class="btn primary wide" type="submit">Continue manually</button></form>` : ''}`;
}
function setOtpState(state, demo = false) {
  otpState = state;
  if (state === 'valid') otpSession.digits = '123456';
  if (state === 'invalid' && demo) otpSession.digits = '000000';
  if (state === 'expired') { otpSession.expiresAt = 0; otpSession.resendAt = 0; }
  if (['sendFailed','resendFailed'].includes(state)) otpSession.resendAt = 0;
  persistOtp(); render();
}
function verifyOtp() {
  if (otpSession.blockedUntil > Date.now()) return;
  if (otpSession.expiresAt <= Date.now()) { setOtpState('expired'); return; }
  saveOtpDigits();
  if (otpSession.digits === '123456' && otpState !== 'sendFailed') {
    otpAttempts = 0; otpState = 'valid'; persistOtp();
    authInlineState = 'providers';
    customerScenario = 'new';
    go("A-02");
    return;
  }
  otpAttempts += 1;
  if (otpAttempts >= 3) {
    otpSession.blockedUntil = Date.now()+60000; setOtpState('blocked'); return;
  }
  setOtpState('invalid');
}
function resendOtp(success = true) {
  if (otpWait() > 0) return;
  if (!success) { setOtpState('resendFailed'); return; }
  Object.assign(otpSession, { digits: '', expiresAt: Date.now()+300000, resendAt: Date.now()+28000, blockedUntil: 0 });
  otpAttempts = 0; setOtpState('resent');
}
const batchCandidateCatalog = [
  { id: "batch-01", name: "Black tailored blazer", brand: "Balmain", category: "Jackets", image: assets.blazer, confidence: "HIGH" },
  { id: "batch-02", name: "Ivory silk shell", brand: "Aritzia", category: "Tops", image: assets.top, confidence: "HIGH" },
  { id: "batch-03", name: "Black straight trousers", brand: "COS", category: "Bottoms", image: assets.bottom, confidence: "HIGH" },
  { id: "batch-04", name: "Espresso shoulder bag", brand: "Demellier", category: "Bags", image: assets.bag, confidence: "HIGH" },
  { id: "batch-05", name: "White cotton shirt", brand: "Massimo Dutti", category: "Tops", image: assets.top2, confidence: "HIGH" },
  { id: "batch-06", name: "Camel wide-leg trouser", brand: "Uniqlo", category: "Bottoms", image: assets.bottom, confidence: "HIGH" },
  { id: "batch-07", name: "Black mini bag", brand: "A.P.C.", category: "Bags", image: assets.bag, confidence: "HIGH" },
  { id: "batch-08", name: "Relaxed ivory tee", brand: "Arket", category: "Tops", image: assets.top2, confidence: "HIGH" },
  { id: "batch-09", name: "Navy pleated trouser", brand: "Theory", category: "Bottoms", image: assets.bottom, confidence: "HIGH" },
  { id: "batch-10", name: "Soft blue poplin shirt", brand: "Everlane", category: "Tops", image: assets.top, confidence: "HIGH" },
  { id: "batch-11", name: "Tan suede loafers", brand: "Vagabond", category: "Shoes", image: assets.shoes, confidence: "NEEDS_REVIEW" },
  { id: "batch-12", name: "Black leather loafers", brand: "Unknown", category: "Shoes", image: assets.shoes, confidence: "NEEDS_REVIEW" },
];
let batchSessionCandidates = [];
function batchCandidates() {
  return batchSessionCandidates;
}
function savedBatchDrafts() {
  try { const drafts = JSON.parse(localStorage.getItem("styleiqBatchImportDraftsV1") || "[]"); return Array.isArray(drafts) ? drafts : []; }
  catch { return []; }
}
function resumeBatchDrafts() {
  batchSessionCandidates = savedBatchDrafts();
  if (!batchSessionCandidates.length) return;
  batchImportActive = true;
  batchReadyToConfirm = false;
  batchUncertainResolved = false;
  batchReviewIndex = 0;
  importConfidence = "high";
  go("B-06");
}
function batchReadyCandidates() {
  return batchCandidates().filter((item) => item.confidence === "HIGH" || item.reviewed);
}
function batchReviewCandidates() {
  return batchCandidates().filter((item) => item.confidence === "NEEDS_REVIEW");
}
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
function reviewLensBatch() {
  batchSessionCandidates = batchCandidateCatalog.slice(0, 4).map((item) => ({ ...item, id: newClosetItemId() }));
  batchImportActive = true;
  batchReadyToConfirm = false;
  batchUncertainResolved = false;
  importConfidence = "high";
  lensDestination("B-06");
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
      actions: `<button class="btn primary wide" onclick="reviewLensBatch()">Review detected items</button>`,
    },
    buy: {
      eyebrow: "Purchase check · high confidence",
      title: "Useful, but close to what you own.",
      image: assets.top2,
      body: "82% compatible · works in 6 owned Looks · high duplicate risk against your warm knit. Muse suggests comparing before buying.",
      extra: `${lensWishlistAction("rust-knit")}${lensMatches()}`,
      actions: `<div class="row"><button class="btn grow primary" onclick="openWishlistDialog('compare','rust-knit')">Compare owned</button><button class="btn grow" onclick="openWishlistProduct('rust-knit')">Before You Buy</button></div>`,
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
  creator_recreated: "Stylist Look",
  lens_recreated: "Stylist / Lens",
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
  selectedSavedLookId = localStorage.getItem("styleiqSelectedSavedLookV1") || "Design Review",
  savedLookTab = "overview",
  savedLookMediaIndex = 0,
  savedLookWorn = localStorage.getItem("styleiqSavedLookWornV1") === "true",
  savedLookRemoved = false,
  creatorReferences = [
    { name: "@lefevrediary", source: "Instagram · prototype reference" },
    { name: "Maya El-Sayed", source: "Pinterest · prototype reference" },
  ];
function setLookFilter(value) {
  lookFilter = value;
  render();
}
function selectSavedLook(id) {
  selectedSavedLookId = id;
  savedLookTab = "overview";
  savedLookMediaIndex = 0;
  localStorage.setItem("styleiqSelectedSavedLookV1", id);
  go("G-02");
}
function setSavedLookTab(tab) {
  savedLookTab = tab;
  render();
}
function setSavedLookMedia(index) {
  const total = savedLookRecord().media?.length || 1;
  savedLookMediaIndex = (index + total) % total;
  render();
}
function stepSavedLookMedia(direction) {
  setSavedLookMedia(savedLookMediaIndex + direction);
}
function savedLookRecord() {
  const record = lookCatalog.find((look) => look.title === selectedSavedLookId) || lookCatalog[0];
  const source = record.title === "Dinner Classic" ? tryOnLooks.evening : record.title === "Gallery Tailoring" ? tryOnLooks.tailoring : tryOnLooks.coffee;
  return {
    ...source,
    id: "saved",
    title: record.title,
    context: `${lookSourceLabel(record.creationSource)} · ${record.title}`,
    sheet: record.image,
    row: 0,
    pieces: source.pieces,
    media: [
      { type: "image", src: "images/generated-look-hero-v2.png", label: "Generated editorial" },
      { type: "image", src: record.image, label: "Look still" },
      { type: "video", src: "videos/generated-look-motion.mp4", label: "Generated model motion" },
    ],
  };
}
function savedLookMediaSurface(record) {
  const media = record.media || [{ type: "image", src: record.sheet, label: "Look still" }];
  const selected = media[savedLookMediaIndex] || media[0];
  const activeMedia = selected.type === "video"
    ? `<video class="saved-look-media" src="${selected.src}" autoplay muted loop playsinline aria-label="${escapeMarkup(selected.label)}"></video>`
    : `<img class="saved-look-media" src="${selected.src}" alt="${escapeMarkup(record.title)} · ${escapeMarkup(selected.label)}">`;
  return `<section class="saved-look-media-block" aria-label="Saved Look media"><div class="saved-look-media-frame" data-saved-look-media>${activeMedia}<span class="saved-look-media-badge">${selected.type === "video" ? "Motion" : "Still"}</span>${selected.type === "video" ? '<span class="saved-look-media-live">● Live look</span>' : ""}<div class="saved-look-media-controls"><div class="saved-look-media-dots" role="tablist" aria-label="Look media pages">${media.map((item, index) => `<button class="saved-look-media-dot ${index === savedLookMediaIndex ? "active" : ""}" role="tab" aria-selected="${index === savedLookMediaIndex}" aria-label="Go to ${escapeMarkup(item.label)}" onclick="setSavedLookMedia(${index})"></button>`).join("")}</div><div class="saved-look-media-arrows"><button class="saved-look-media-arrow" aria-label="Previous media" onclick="stepSavedLookMedia(-1)">‹</button><button class="saved-look-media-arrow" aria-label="Next media" onclick="stepSavedLookMedia(1)">›</button></div></div></div><div class="saved-look-media-rail" role="tablist" aria-label="Look media options">${media.map((item, index) => `<button class="saved-look-media-thumb ${index === savedLookMediaIndex ? "active" : ""}" role="tab" aria-selected="${index === savedLookMediaIndex}" aria-label="${escapeMarkup(item.label)}" onclick="setSavedLookMedia(${index})">${item.type === "video" ? `<video src="${item.src}" muted preload="metadata" playsinline></video><span class="media-play">▶</span>` : `<img src="${item.src}" alt="">`}<small>${item.type === "video" ? "Video" : "Image"}</small></button>`).join("")}</div></section>`;
}
function markSavedLookWorn() {
  savedLookWorn = true;
  localStorage.setItem("styleiqSavedLookWornV1", "true");
  render();
  toast("Saved Look marked worn");
}
function planSavedLook() {
  plannerLookChoice = "saved";
  go("I-01");
}
function removeSavedLook() {
  savedLookRemoved = true;
  go("G-01");
  toast("Saved Look removed");
}
function myLooksGrid() {
  const visible = lookCatalog.filter((look) =>
    lookMatchesFilter(look, lookFilter) && (!savedLookRemoved || look.title !== selectedSavedLookId),
  );
  return shell(
    "My Looks",
    `<div class="between"><span><p class="eyebrow">Canonical collection</p><h2 class="title">${visible.length} My Looks</h2></span><button class="text-action" onclick="newStudioLook()">Create Look</button></div><div class="chips" role="group" aria-label="Look creation source">${["All", "Created by Me", "With Muse", "Muse Generated", "Recreated from Inspiration"].map((value) => `<button class="chip ${lookFilter === value ? "active" : ""}" aria-pressed="${lookFilter === value}" onclick="setLookFilter('${value}')">${value}</button>`).join("")}</div><div class="item-grid" style="margin-top:12px">${visible.map((look) => `<button class="item-card" onclick="selectSavedLook('${escapeMarkup(look.title)}')"><img src="${look.image}" alt="${escapeMarkup(look.title)}"><span class="copy"><b>${escapeMarkup(look.title)}</b><small class="body" style="display:block">${lookSourceLabel(look.creationSource)}</small></span></button>`).join("")}</div>`,
    { active: "profile" },
  );
}

// ---------------------------------------------------------------------------
// SECTION H EXTENSION: CREATOR EXPERIENCE & STUDIO INTEGRATION
// ---------------------------------------------------------------------------

const creatorDataset = [
  {
    id: "maya-chen",
    name: "Maya Chen",
    avatar: "images/profile_woman.png",
    styleDirection: "Minimal tailoring · neutral layering",
    description: "Modern minimal tailoring with warm neutrals, fluid drape, and relaxed everyday proportions.",
    dominantTags: ["Minimal", "Work", "Neutral", "Layered"],
    patterns: [
      "Oversized blazer + fine-gauge ribbed knit base",
      "Tonal neutral layering across cream, tan, and black",
      "Structured wide-leg trousers anchoring clean leather footwear"
    ],
    looks: [
      {
        id: "maya-work",
        title: "Soft Workday",
        occasion: "Work",
        styleDirection: "Work · Minimal · Layered",
        image: "images/outfit_soft_tailoring.png",
        museExplanation: "This look works because it combines one structured layer, a simple fitted base, relaxed trousers, and a minimal shoe.",
        pieces: [
          { role: "Outerwear", name: "Cream Blazer", original: "Cream tailored blazer", image: "images/item_blazer.png" },
          { role: "Top", name: "White Knit", original: "Fine-gauge ribbed knit", image: "images/alta-ivory-eyelet-shirt.png" },
          { role: "Bottom", name: "Wide-Leg Trouser", original: "Pleated wide-leg trousers", image: "images/alta-black-tailored-trousers.png" },
          { role: "Shoes", name: "Leather Loafer", original: "Black leather penny loafers", image: "images/cat_shoes.png" }
        ]
      },
      {
        id: "maya-weekend",
        title: "Weekend Layers",
        occasion: "Casual",
        styleDirection: "Casual · Minimal · Layered",
        image: "images/alta-look-rust-cream-flatlay.png",
        museExplanation: "Warm earth tones balance fluid trousers with an easy, relaxed knit for effortless weekend wear.",
        pieces: [
          { role: "Top", name: "Rust Square-Neck Knit", original: "Rust square-neck knit top", image: "images/alta-rust-knit-top.png" },
          { role: "Bottom", name: "Cream Wide-Leg Trousers", original: "Cream fluid tailored trousers", image: "images/alta-black-tailored-trousers.png" },
          { role: "Shoes", name: "Tan Suede Loafers", original: "Tan unlined suede loafers", image: "images/alta-tan-suede-loafers.png" },
          { role: "Accessory", name: "Espresso Silver Belt", original: "Slim espresso belt", image: "images/alta-espresso-silver-belt.png" }
        ]
      },
      {
        id: "maya-dinner",
        title: "Dinner Minimal",
        occasion: "Evening",
        styleDirection: "Evening · Minimal · Sleek",
        image: "images/outfit_dinner_classic.png",
        museExplanation: "Monochrome black creates immediate evening polish through high-contrast textures of matte silk and wool.",
        pieces: [
          { role: "Outerwear", name: "Black Open Blazer", original: "Black unstructured blazer", image: "images/item_blazer.png" },
          { role: "Top", name: "Black Silk Shell", original: "Matte silk tank shell", image: "images/item_silk_shell.png" },
          { role: "Bottom", name: "Black Tailored Trousers", original: "Sharp creased black trousers", image: "images/alta-black-tailored-trousers.png" },
          { role: "Accessory", name: "Gold Hoops", original: "Medium hollow gold hoops", image: "images/cat_accessories.png" }
        ]
      },
      {
        id: "maya-travel",
        title: "Travel Capsule",
        occasion: "Travel",
        styleDirection: "Travel · Smart Casual · Comfortable",
        image: "images/alta-look-alexandria-tailoring.png",
        museExplanation: "Wrinkle-resistant tailoring paired with clean court sneakers delivers comfort across transit without losing tailoring structure.",
        pieces: [
          { role: "Outerwear", name: "Camel Open Blazer", original: "Camel wool-blend blazer", image: "images/item_blazer.png" },
          { role: "Top", name: "Ivory Cotton Shirt", original: "Relaxed poplin button-down", image: "images/alta-ivory-eyelet-shirt.png" },
          { role: "Bottom", name: "Cream Wide-Leg Trousers", original: "Draped wide-leg trousers", image: "images/alta-black-tailored-trousers.png" },
          { role: "Shoes", name: "White Sneakers", original: "Low-profile court sneakers", image: "images/cat_shoes.png" }
        ]
      }
    ]
  },
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    avatar: "images/person-menswear-profile.png",
    styleDirection: "Architectural tailoring · quiet luxury",
    description: "Sharp shoulder lines, crisp Italian shirting, and tonal flannel trousers for modern editorial presence.",
    dominantTags: ["Tailoring", "Quiet Luxury", "Classic", "Work"],
    patterns: [
      "Structured jacket + relaxed pleated trouser",
      "Tone-on-tone charcoal and midnight suiting",
      "Chunky derbies or polished loafers anchoring soft fabric"
    ],
    looks: [
      {
        id: "marcus-studio",
        title: "Modern Studio Uniform",
        occasion: "Work",
        styleDirection: "Work · Tailoring · Classic",
        image: "images/look-menswear-studio-cairo.png",
        museExplanation: "A structured navy blazer elevates neutral wool trousers while a soft collar keeps the silhouette relaxed.",
        pieces: [
          { role: "Outerwear", name: "Navy Wool Jacket", original: "Midnight navy tailored jacket", image: "images/item_blazer.png" },
          { role: "Top", name: "Crisp White Shirt", original: "Textured cotton spread-collar shirt", image: "images/alta-ivory-eyelet-shirt.png" },
          { role: "Bottom", name: "Charcoal Pleated Trousers", original: "Double-pleated charcoal trousers", image: "images/alta-black-tailored-trousers.png" },
          { role: "Shoes", name: "Black Leather Loafers", original: "Brushed black leather loafers", image: "images/cat_shoes.png" }
        ]
      },
      {
        id: "marcus-casual",
        title: "Elevated Everyday",
        occasion: "Casual",
        styleDirection: "Smart Casual · Minimal · Timeless",
        image: "images/style_classic_man.png",
        museExplanation: "Understated luxury through simple cashmere and well-fitted dark trousers.",
        pieces: [
          { role: "Top", name: "Charcoal Knit Crewneck", original: "Fine wool crewneck", image: "images/alta-ivory-eyelet-shirt.png" },
          { role: "Bottom", name: "Straight Indigo Denim", original: "Japanese selvedge denim", image: "images/alta-black-tailored-trousers.png" },
          { role: "Shoes", name: "Black Ankle Boots", original: "Clean chelsea boots", image: "images/cat_shoes.png" }
        ]
      },
      {
        id: "marcus-evening",
        title: "Dusk Contrast",
        occasion: "Evening",
        styleDirection: "Evening · Modern · Tailored",
        image: "images/style_modern_prof_man.png",
        museExplanation: "Subtle sheen on dark tailoring creates an elevated evening appearance without formal stiffness.",
        pieces: [
          { role: "Outerwear", name: "Black Open Blazer", original: "Tailored evening jacket", image: "images/item_blazer.png" },
          { role: "Top", name: "Ivory Silk Shirt", original: "Fluid silk shirt", image: "images/alta-ivory-eyelet-shirt.png" },
          { role: "Bottom", name: "Black Tailored Trousers", original: "Slim evening trousers", image: "images/alta-black-tailored-trousers.png" },
          { role: "Shoes", name: "Black Leather Loafers", original: "Patent leather dress shoes", image: "images/cat_shoes.png" }
        ]
      }
    ]
  },
  {
    id: "camille-laurent",
    name: "Camille Laurent",
    avatar: "images/style_elevated_everyday.png",
    styleDirection: "Parisian ease · relaxed elegance",
    description: "Effortless French proportions combining slouchy suiting, elevated knitwear, and timeless leather accents.",
    dominantTags: ["Smart Casual", "Work", "Parisian", "Neutral"],
    patterns: [
      "Slouchy blazer + classic straight denim",
      "Monochrome knit + tailored coat",
      "Ballet flats or loafers balancing generous volumes"
    ],
    looks: [
      {
        id: "camille-ease",
        title: "Tailored Ease",
        occasion: "Smart Casual",
        styleDirection: "Smart Casual · Parisian · Layered",
        image: "images/outfit_relaxed_structure.png",
        museExplanation: "Combines an oversized tailored silhouette with approachable straight denim and soft leather footwear.",
        pieces: [
          { role: "Outerwear", name: "Black Open Blazer", original: "Oversized wool blazer", image: "images/item_blazer.png" },
          { role: "Top", name: "Ivory Cotton Shirt", original: "Poplin oversized shirt", image: "images/alta-ivory-eyelet-shirt.png" },
          { role: "Bottom", name: "Straight Blue Jeans", original: "High-waist straight leg jeans", image: "images/alta-black-tailored-trousers.png" },
          { role: "Shoes", name: "Black Ballet Flats", original: "Soft lambskin ballet flats", image: "images/cat_shoes.png" }
        ]
      },
      {
        id: "camille-coffee",
        title: "Morning Gallery Walk",
        occasion: "Casual",
        styleDirection: "Casual · Work · Minimal",
        image: "images/outfit_coffee_meeting.png",
        museExplanation: "Refined neutral palette with a structured blazer that transitions seamlessly from morning coffee to gallery meetings.",
        pieces: [
          { role: "Outerwear", name: "Camel Open Blazer", original: "Warm camel wool blazer", image: "images/item_blazer.png" },
          { role: "Top", name: "White Knit", original: "Fine rib knit top", image: "images/alta-ivory-eyelet-shirt.png" },
          { role: "Bottom", name: "Black Tailored Trousers", original: "Cropped tailored trousers", image: "images/alta-black-tailored-trousers.png" },
          { role: "Shoes", name: "Tan Suede Loafers", original: "Tonal suede loafers", image: "images/alta-tan-suede-loafers.png" }
        ]
      },
      {
        id: "camille-night",
        title: "Bistro Chic",
        occasion: "Evening",
        styleDirection: "Evening · Parisian · Classic",
        image: "images/look-evening-cairo.png",
        museExplanation: "Understated cocktail attire anchored by a clean silhouette and fine gold jewelry.",
        pieces: [
          { role: "Top", name: "Black Silk Shell", original: "Silk halter shell", image: "images/item_silk_shell.png" },
          { role: "Bottom", name: "Black Tailored Trousers", original: "High-rise fluid trousers", image: "images/alta-black-tailored-trousers.png" },
          { role: "Shoes", name: "Black Ballet Flats", original: "Pointed leather flats", image: "images/cat_shoes.png" },
          { role: "Accessory", name: "Gold Hoops", original: "Bold twisted hoops", image: "images/cat_accessories.png" }
        ]
      }
    ]
  },
  {
    id: "noor-haddad",
    name: "Noor Haddad",
    avatar: "images/style_creative.png",
    styleDirection: "Sculptural monochrome · fluid evening",
    description: "High-contrast silhouettes, statement drapery, and understated leather accents inspired by modern architecture.",
    dominantTags: ["Evening", "Minimal", "Monochrome", "Creative"],
    patterns: [
      "Asymmetric drape + sharp tailoring",
      "High monochrome contrast with gold hardware",
      "Clean architectural lines without print"
    ],
    looks: [
      {
        id: "noor-dinner",
        title: "Sculpted Evening",
        occasion: "Evening",
        styleDirection: "Evening · Creative · Monochrome",
        image: "images/look-coffee-meeting-cairo.png",
        museExplanation: "Strong monochrome lines create a commanding evening profile that lets architectural jewelry stand out.",
        pieces: [
          { role: "Top", name: "Black Silk Shell", original: "Asymmetric silk top", image: "images/item_silk_shell.png" },
          { role: "Bottom", name: "Black Tailored Trousers", original: "Pleated wide trousers", image: "images/alta-black-tailored-trousers.png" },
          { role: "Accessory", name: "Oxblood Crescent Bag", original: "Sculptural leather shoulder bag", image: "images/alta-oxblood-crescent-bag.png" },
          { role: "Accessory", name: "Gold Hoops", original: "Sculptural gold hoops", image: "images/cat_accessories.png" }
        ]
      },
      {
        id: "noor-fluid",
        title: "Gallery Reception",
        occasion: "Creative",
        styleDirection: "Creative · Smart Casual · Tonal",
        image: "images/outfit_creative_tonal.png",
        museExplanation: "A warm tonal gradient softens dramatic proportions for creative industry gatherings.",
        pieces: [
          { role: "Outerwear", name: "Camel Open Blazer", original: "Draped camel blazer", image: "images/item_blazer.png" },
          { role: "Top", name: "Rust Square-Neck Knit", original: "Textured terracotta knit", image: "images/alta-rust-knit-top.png" },
          { role: "Bottom", name: "Cream Wide-Leg Trousers", original: "Ivory wide trousers", image: "images/alta-black-tailored-trousers.png" },
          { role: "Shoes", name: "Tan Suede Loafers", original: "Minimal loafers", image: "images/alta-tan-suede-loafers.png" }
        ]
      },
      {
        id: "noor-minimal",
        title: "Quiet Structure",
        occasion: "Work",
        styleDirection: "Minimal · Work · Neutral",
        image: "images/outfit_neutral_minimal.png",
        museExplanation: "Meticulous tailoring in monochrome tones that projects calm authority.",
        pieces: [
          { role: "Outerwear", name: "Black Open Blazer", original: "Single-breasted black blazer", image: "images/item_blazer.png" },
          { role: "Top", name: "Ivory Cotton Shirt", original: "Crisp menswear-cut shirt", image: "images/alta-ivory-eyelet-shirt.png" },
          { role: "Bottom", name: "Black Tailored Trousers", original: "Tailored wool trousers", image: "images/alta-black-tailored-trousers.png" },
          { role: "Shoes", name: "Leather Loafer", original: "Classic black loafers", image: "images/cat_shoes.png" }
        ]
      }
    ]
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    avatar: "images/style_minimal.png",
    styleDirection: "Resort minimalism · vacation capsules",
    description: "Airy linen layers, tonal sun-washed textures, and relaxed coastal tailoring made for seamless travel.",
    dominantTags: ["Vacation", "Minimal", "Relaxed", "Travel"],
    patterns: [
      "Lightweight trench + linen separates",
      "Sun-bleached neutral palette (ivory, cream, oat)",
      "Unstructured layering suitable for warm climates"
    ],
    looks: [
      {
        id: "elena-coastal",
        title: "Mediterranean Transit",
        occasion: "Vacation",
        styleDirection: "Vacation · Minimal · Relaxed",
        image: "images/alta-look-cairo-tailoring.png",
        museExplanation: "Light breathable cotton and fluid trousers keep transit comfortable while looking immaculately put together.",
        pieces: [
          { role: "Outerwear", name: "Camel Open Blazer", original: "Linen-blend lightweight duster", image: "images/item_blazer.png" },
          { role: "Top", name: "Ivory Cotton Shirt", original: "Breezy poplin tunic", image: "images/alta-ivory-eyelet-shirt.png" },
          { role: "Bottom", name: "Cream Wide-Leg Trousers", original: "Linen wide trousers", image: "images/alta-black-tailored-trousers.png" },
          { role: "Shoes", name: "Tan Suede Loafers", original: "Collapsible heel loafers", image: "images/alta-tan-suede-loafers.png" }
        ]
      },
      {
        id: "elena-sunset",
        title: "Harbor Dinner",
        occasion: "Evening",
        styleDirection: "Vacation · Evening · Effortless",
        image: "images/alta-look-ivory-black-flatlay.png",
        museExplanation: "Contrasting light top with dark fluid bottoms creates an effortless resort evening transition.",
        pieces: [
          { role: "Top", name: "Ivory Cotton Shirt", original: "Open collar silk shirt", image: "images/alta-ivory-eyelet-shirt.png" },
          { role: "Bottom", name: "Black Tailored Trousers", original: "Lightweight black culottes", image: "images/alta-black-tailored-trousers.png" },
          { role: "Shoes", name: "Black Ballet Flats", original: "Woven leather flats", image: "images/cat_shoes.png" },
          { role: "Accessory", name: "Gold Hoops", original: "Minimalist hoop earrings", image: "images/cat_accessories.png" }
        ]
      },
      {
        id: "elena-walk",
        title: "Old Town Afternoon",
        occasion: "Casual",
        styleDirection: "Casual · Vacation · Neutral",
        image: "images/look-soft-tailoring-cairo.png",
        museExplanation: "Tonal softness with relaxed proportions that move naturally in outdoor warm-weather settings.",
        pieces: [
          { role: "Top", name: "White Knit", original: "Short-sleeve linen knit", image: "images/alta-ivory-eyelet-shirt.png" },
          { role: "Bottom", name: "Cream Wide-Leg Trousers", original: "Relaxed linen-blend trousers", image: "images/alta-black-tailored-trousers.png" },
          { role: "Shoes", name: "White Sneakers", original: "Minimal leather sneakers", image: "images/cat_shoes.png" }
        ]
      }
    ]
  }
];

let activeCreatorId = "maya-chen";
let activeCreatorLookId = "maya-work";
let creatorFilter = "All";
let creatorSearchQuery = "";
let studioSourceContext = null; // 'creator' | 'scratch' | 'closet' | 'muse' | 'draft' | null
let creatorReferenceContext = null;

function getCreator(id = activeCreatorId) {
  return creatorDataset.find((c) => c.id === id) || creatorDataset[0];
}

function getCreatorLook(lookId = activeCreatorLookId) {
  for (const c of creatorDataset) {
    const l = c.looks.find((item) => item.id === lookId);
    if (l) return { ...l, creator: c };
  }
  return { ...creatorDataset[0].looks[0], creator: creatorDataset[0] };
}

function openCreatorProfile(creatorId) {
  activeCreatorId = creatorId;
  go("H-12");
}

function openCreatorLook(lookId) {
  activeCreatorLookId = lookId;
  const look = getCreatorLook(lookId);
  activeCreatorId = look.creator.id;
  go("H-13");
}

function setCreatorFilter(filter) {
  creatorFilter = filter;
  render();
}

function setCreatorSearch(query) {
  creatorSearchQuery = query;
  render();
}

function matchCreatorPieceToCloset(piece) {
  const closet = closetItems().filter(
    (item) => item.lifecycle === "Keep" && item.status === "Available",
  );
  const pName = piece.name.toLowerCase();

  // 1. Exact or near name match
  const exact = closet.find((item) => {
    const iName = item.name.toLowerCase();
    return (
      iName === pName ||
      iName.includes(pName) ||
      pName.includes(iName) ||
      (piece.original && iName.includes(piece.original.toLowerCase()))
    );
  });
  if (exact) {
    return {
      matchType: "Owned",
      item: exact,
      originalCreatorPiece: piece.name,
    };
  }

  // 2. Similar owned match: item in the same role / category
  const roleCategoryMap = {
    Top: ["Tops", "Clothing"],
    Bottom: ["Bottoms", "Clothing"],
    Outerwear: ["Jackets", "Outerwear", "Clothing"],
    Shoes: ["Shoes"],
    Accessory: ["Accessories", "Bags", "Jewelry"],
  };
  const categories = roleCategoryMap[piece.role] || [piece.role];
  const similar = closet.find(
    (item) => categories.includes(item.category) || item.role === piece.role,
  );
  if (similar) {
    return {
      matchType: "Similar Owned",
      item: similar,
      originalCreatorPiece: piece.name,
    };
  }

  // 3. Missing: suggested item
  return {
    matchType: "Missing",
    item: {
      id: `suggested-${piece.role.toLowerCase()}-${Date.now()}`,
      role: piece.role,
      name: piece.name,
      brand: "Curated Suggestion",
      image: piece.image || assets.look2,
      owned: false,
      visible: true,
    },
    originalCreatorPiece: piece.name,
  };
}

function prepareCreatorLookForUser(lookId = activeCreatorLookId) {
  const look = getCreatorLook(lookId);
  activeCreatorId = look.creator.id;
  activeCreatorLookId = look.id;

  studioSourceContext = "creator";
  creatorReferenceContext = {
    creatorId: look.creator.id,
    creatorName: look.creator.name,
    lookId: look.id,
    lookTitle: look.title,
    lookImage: look.image,
    occasion: look.occasion,
    styleTags: look.styleDirection,
    museExplanation: look.museExplanation,
  };

  canvasState.title = `${look.title}`;
  canvasState.creationSource = "creator_recreated";
  canvasState.creatorAttribution = look.creator.name;
  canvasState.mode = "flat";
  canvasState.studioMode = "simple";
  canvasState.sourceLookId = look.id;

  const matchedPieces = look.pieces.map((piece) => {
    const match = matchCreatorPieceToCloset(piece);
    return {
      id: match.item.id || `${piece.role}-${Date.now()}`,
      role: piece.role,
      name: match.item.name,
      brand:
        match.item.brand ||
        (match.matchType === "Owned" ? "From Closet" : "Curated Suggestion"),
      image: match.item.image || piece.image || assets.look2,
      owned: match.matchType === "Owned" || match.matchType === "Similar Owned",
      matchType: match.matchType,
      originalCreatorPiece: match.originalCreatorPiece,
      visible: true,
      index: 0,
    };
  });

  canvasState.items = matchedPieces;
  canvasState.lookFormula = {
    id: look.id,
    title: look.title,
    creator: look.creator.name,
    image: look.image,
    pieces: look.pieces.map((p) => [p.role, p.name, p.image]),
  };
  canvasState.history = [];
  persist();

  // Format personalized look for Try On
  const ownedCount = matchedPieces.filter((m) => m.matchType === "Owned").length;
  const similarCount = matchedPieces.filter((m) => m.matchType === "Similar Owned").length;
  const baseLook =
    look.occasion === "Evening"
      ? tryOnLooks.evening
      : look.styleDirection.includes("Minimal") || look.styleDirection.includes("Work")
        ? tryOnLooks.coffee
        : tryOnLooks.tailoring;

  const tryOnData = {
    id: `creator-${look.id}`,
    title: `${look.title} (Personalized)`,
    context: `Inspired by ${look.creator.name} · ${ownedCount + similarCount}/${matchedPieces.length} Closet Match`,
    sheet: baseLook.sheet,
    remote: true,
    row: baseLook.row,
    reference: false,
    pieces: matchedPieces.map((p) => [
      p.role,
      `${p.name} (${p.matchType === "Owned" ? "Owned" : p.matchType === "Similar Owned" ? "Similar Owned" : "Suggested"})`,
      p.image,
    ]),
  };

  return { look, matchedPieces, tryOnData };
}

function makeCreatorLookMine(lookId = activeCreatorLookId) {
  prepareCreatorLookForUser(lookId);
  currentId = "F-01";
  location.hash = "F-01";
  render();
}

function tryOnCreatorLook(lookId = activeCreatorLookId) {
  const { tryOnData } = prepareCreatorLookForUser(lookId);
  startTryOn(tryOnData.id, {
    lookData: tryOnData,
    sourceScreen: "H-13",
    sourceType: "creator-look",
    returnScreen: "H-13",
  });
}

function startStudioFromScratch() {
  studioSourceContext = "scratch";
  creatorReferenceContext = null;
  canvasState = defaultCanvas();
  canvasState.title = "Untitled Look";
  canvasState.creationSource = "user";
  canvasState.creatorAttribution = null;
  canvasState.items = [];
  canvasState.lookFormula = null;
  canvasState.history = [];
  studioUI = { role: "Top", source: "All", query: "" };
  persistStudioUI();
  persist();
  currentId = "F-01";
  location.hash = "F-01";
  render();
}

function startStudioFromCloset() {
  studioSourceContext = "closet";
  creatorReferenceContext = null;
  canvasState = defaultCanvas();
  canvasState.title = "My Closet Look";
  canvasState.creationSource = "user";
  canvasState.creatorAttribution = null;
  canvasState.lookFormula = null;
  canvasState.history = [];

  const owned = closetItems().filter(
    (x) => x.lifecycle === "Keep" && x.status === "Available",
  );
  const seeded = [];
  const roles = ["Outerwear", "Top", "Bottom", "Shoes"];
  roles.forEach((role) => {
    const cats =
      {
        Outerwear: ["Jackets", "Outerwear"],
        Top: ["Tops"],
        Bottom: ["Bottoms"],
        Shoes: ["Shoes"],
      }[role] || [role];
    const item = owned.find((x) => cats.includes(x.category));
    if (item) {
      seeded.push({
        id: item.id,
        role,
        name: item.name,
        brand: item.brand,
        image: item.image,
        owned: true,
        visible: true,
        index: 0,
      });
    }
  });

  canvasState.items = seeded.length
    ? seeded
    : [makeItem("Top", 0), makeItem("Bottom", 0), makeItem("Shoes", 0)];
  studioUI = { role: seeded[0]?.role || "Top", source: "Owned", query: "" };
  persistStudioUI();
  persist();
  currentId = "F-01";
  location.hash = "F-01";
  render();
}

function resumeStudioDraft() {
  studioSourceContext = canvasState.creatorAttribution ? "creator" : "draft";
  currentId = "F-01";
  location.hash = "F-01";
  render();
}

function studioStartState() {
  const hasDraft =
    canvasState && canvasState.items && canvasState.items.length > 0;
  return shell(
    "Style Studio",
    `<div class="studio-start-intro">
      <p class="eyebrow" style="text-align:center;color:var(--gold,#9e733c);font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:0.04em">Creative Workspace</p>
      <h2 class="title" style="margin:2px 0 0;font-size:24px;text-align:center">Start Your Look</h2>
      <p class="body studio-start-sub">Build outfits from your wardrobe, co-create with Muse, or discover creator looks to make your own.</p>
    </div>
    ${
      hasDraft
        ? `<section class="card studio-resume-draft-card" aria-label="Resume active draft">
        <div class="between">
          <span>
            <p class="eyebrow">${canvasState.creatorAttribution ? `Inspired by ${escapeMarkup(canvasState.creatorAttribution)}` : "Active Draft"}</p>
            <h4 class="title" style="margin:2px 0 0;font-size:16px">${escapeMarkup(canvasState.title)}</h4>
            <small class="body" style="display:block;margin-top:2px">${canvasState.items.length} pieces · ${escapeMarkup(canvasState.location || "In progress")}</small>
          </span>
          <button class="btn primary small-btn" onclick="resumeStudioDraft()">Resume Draft →</button>
        </div>
      </section>`
        : ""
    }
    <section class="studio-start-grid" aria-label="Studio entry options">
      <button class="studio-start-card" onclick="startStudioFromScratch()">
        <span class="studio-start-icon-wrap">${icon("shirt")}</span>
        <span class="studio-start-card-text">
          <b>Start From Scratch</b>
          <small class="body">Begin with a completely blank canvas and compose layer by layer.</small>
        </span>
        <span class="studio-start-arrow">›</span>
      </button>

      <button class="studio-start-card" onclick="startStudioFromCloset()">
        <span class="studio-start-icon-wrap">${icon("bag")}</span>
        <span class="studio-start-card-text">
          <b>Start From My Closet</b>
          <small class="body">Pull your real owned wardrobe pieces directly into Studio.</small>
        </span>
        <span class="studio-start-arrow">›</span>
      </button>

      <button class="studio-start-card" onclick="openMuse(museContextFor('F-01'))">
        <span class="studio-start-icon-wrap">${icon("spark")}</span>
        <span class="studio-start-card-text">
          <b>Ask Muse</b>
          <small class="body">Co-create an outfit guided by your personal stylist intelligence.</small>
        </span>
        <span class="studio-start-arrow">›</span>
      </button>

      <button class="studio-start-card primary-variant" onclick="go('H-11')">
        <span class="studio-start-icon-wrap">${icon("compass")}</span>
        <span class="studio-start-card-text">
          <b>Explore Stylist Looks</b>
          <small class="body">Browse curated stylist outfits and translate them into your wardrobe.</small>
        </span>
        <span class="studio-start-arrow">›</span>
      </button>
    </section>`,
    { active: "home", noNav: false },
  );
}

function studioCreatorBanner() {
  if (studioSourceContext !== "creator" || !creatorReferenceContext) return "";
  const ref = creatorReferenceContext;
  return `<section class="studio-creator-ref-banner card" aria-label="Stylist inspiration reference">
    <div class="between">
      <div class="creator-ref-info">
        <p class="eyebrow">Inspired by ${escapeMarkup(ref.creatorName)}</p>
        <h3 class="title" style="margin:2px 0 4px;font-size:18px">${escapeMarkup(ref.lookTitle)}</h3>
        <span class="pill-tag">${escapeMarkup(ref.styleTags || ref.occasion)}</span>
      </div>
      <div class="creator-ref-thumb">
        <img src="${ref.lookImage}" alt="${escapeMarkup(ref.lookTitle)}">
      </div>
    </div>
    <div class="creator-ref-actions">
      <button class="text-action" onclick="go('H-13')">View Original Stylist Look ›</button>
    </div>
  </section>`;
}

function studioCreatorMatching() {
  if (studioSourceContext !== "creator" || !canvasState.items.length) return "";
  const ownedCount = canvasState.items.filter((x) => x.owned).length;
  const total = canvasState.items.length;
  return `<section class="card creator-matching-breakdown" aria-label="Closet match summary">
    <div class="between">
      <div>
        <p class="eyebrow">Wardrobe Match</p>
        <h4 class="title" style="margin:2px 0 0;font-size:15px">Personalized from your Closet</h4>
      </div>
      <span class="match-stat">${ownedCount} / ${total} from Closet</span>
    </div>
    <p class="body" style="margin:6px 0 12px">StyleIQ matched stylist pieces against your owned wardrobe and substituted compatible pieces.</p>
    <div class="creator-match-pieces">
      ${canvasState.items
        .map(
          (p) => `
        <div class="match-piece-row">
          <div class="match-piece-info">
            <span class="match-role">${p.role === "Outerwear" ? "Layer" : p.role}</span>
            <b>${escapeMarkup(p.name)}</b>
            ${p.originalCreatorPiece && p.originalCreatorPiece !== p.name ? `<small class="body">Stylist piece: ${escapeMarkup(p.originalCreatorPiece)}</small>` : ""}
          </div>
          <span class="match-status-badge ${p.matchType === "Owned" ? "owned" : p.matchType === "Similar Owned" ? "similar" : "missing"}">
            ${p.matchType === "Owned" ? "Owned ✓" : p.matchType === "Similar Owned" ? "Similar Owned ✓" : "Missing"}
          </span>
        </div>
      `,
        )
        .join("")}
    </div>
  </section>`;
}

function creatorDiscoveryScreen() {
  const categories = [
    "All",
    "Minimal",
    "Classic",
    "Work",
    "Evening",
    "Smart Casual",
    "Vacation",
    "Quiet Luxury",
  ];
  const query = creatorSearchQuery.toLowerCase().trim();

  // Filter creators and looks
  const allLooks = creatorDataset.flatMap((creator) =>
    creator.looks.map((look) => ({ ...look, creator })),
  );

  const filteredLooks = allLooks.filter((look) => {
    const matchesFilter =
      creatorFilter === "All" ||
      look.styleDirection.includes(creatorFilter) ||
      look.occasion === creatorFilter ||
      look.creator.dominantTags.includes(creatorFilter);

    const matchesQuery =
      !query ||
      look.title.toLowerCase().includes(query) ||
      look.creator.name.toLowerCase().includes(query) ||
      look.styleDirection.toLowerCase().includes(query) ||
      look.pieces.some((p) => p.name.toLowerCase().includes(query));

    return matchesFilter && matchesQuery;
  });

  const filteredCreators = creatorDataset.filter((creator) => {
    const matchesFilter =
      creatorFilter === "All" ||
      creator.dominantTags.includes(creatorFilter) ||
      creator.styleDirection.includes(creatorFilter);

    const matchesQuery =
      !query ||
      creator.name.toLowerCase().includes(query) ||
      creator.styleDirection.toLowerCase().includes(query);

    return matchesFilter && matchesQuery;
  });

  return shell(
    "Stylist Looks",
    `<header class="creator-discovery-header">
      <div class="between">
        <button class="mirror-circle-action" aria-label="Back" onclick="backScreen()">${icon("back")}</button>
        <div class="creator-header-title">
          <p class="eyebrow" style="text-align:center">Stylist Looks</p>
          <h2 class="title" style="margin:0;font-size:22px;text-align:center">Style Inspiration</h2>
        </div>
        <div style="width:36px"></div>
      </div>
      <p class="body creator-discovery-sub">Style inspiration you can make your own. Browse curated stylist outfits and recreate them with your Closet.</p>
      <div class="creator-search-wrap">
        <span class="search-icon">${icon("search")}</span>
        <input class="input creator-search-input" placeholder="Search stylists, outfits, styles…" value="${escapeMarkup(creatorSearchQuery)}" oninput="setCreatorSearch(this.value)">
      </div>
      <div class="chips creator-filter-chips" role="group" aria-label="Stylist style categories">
        ${categories
          .map(
            (c) =>
              `<button class="chip ${creatorFilter === c ? "active" : ""}" aria-pressed="${creatorFilter === c}" onclick="setCreatorFilter('${c}')">${c}</button>`,
          )
          .join("")}
      </div>
    </header>

    <section class="mirror-section creator-featured-section">
      <div class="mirror-section-head">
        <span>
          <p class="eyebrow">Curated Stylists</p>
          <h3>Featured Stylists</h3>
        </span>
        <small class="body">${filteredCreators.length} stylists</small>
      </div>
      <div class="creator-cards-rail">
        ${filteredCreators
          .map(
            (creator) => `
          <div class="creator-card card">
            <div class="creator-card-header">
              <img src="${creator.avatar}" class="creator-avatar" alt="${escapeMarkup(creator.name)}">
              <div class="creator-meta">
                <b>${escapeMarkup(creator.name)}</b>
                <small class="body">${escapeMarkup(creator.styleDirection)}</small>
              </div>
            </div>
            <div class="creator-look-previews">
              ${creator.looks
                .slice(0, 3)
                .map(
                  (look) => `
                <img src="${look.image}" class="creator-mini-thumb" alt="${escapeMarkup(look.title)}" onclick="openCreatorLook('${look.id}')">
              `,
                )
                .join("")}
            </div>
            <button class="btn small-btn wide" onclick="openCreatorProfile('${creator.id}')">View Stylist</button>
          </div>
        `,
          )
          .join("")}
      </div>
    </section>

    <section class="mirror-section creator-trending-section">
      <div class="mirror-section-head">
        <span>
          <p class="eyebrow">Outfits to Recreate</p>
          <h3>Trending Looks</h3>
        </span>
        <small class="body">${filteredLooks.length} looks</small>
      </div>
      ${
        filteredLooks.length
          ? `<div class="creator-looks-grid">
        ${filteredLooks
          .map(
            (look) => `
          <div class="creator-look-card card">
            <div class="creator-look-image-wrap" onclick="openCreatorLook('${look.id}')">
              <img src="${look.image}" alt="${escapeMarkup(look.title)}" class="creator-look-img">
              <span class="creator-look-badge">${escapeMarkup(look.occasion)}</span>
            </div>
            <div class="creator-look-body">
              <div class="creator-look-author" onclick="openCreatorProfile('${look.creator.id}')">
                <img src="${look.creator.avatar}" alt="${escapeMarkup(look.creator.name)}" class="creator-author-thumb">
                <small class="body">by <b>${escapeMarkup(look.creator.name)}</b></small>
              </div>
              <h4 class="creator-look-title" onclick="openCreatorLook('${look.id}')">${escapeMarkup(look.title)}</h4>
              <p class="creator-look-tags">${escapeMarkup(look.styleDirection)}</p>
              <div class="creator-look-actions">
                <button class="btn primary small-btn grow" onclick="makeCreatorLookMine('${look.id}')">Make It Mine</button>
                <button class="btn small-btn" onclick="openCreatorLook('${look.id}')">View Look</button>
              </div>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>`
          : `<div class="card empty-state" style="text-align:center;padding:32px 16px;margin-top:12px">
        <p class="eyebrow" style="color:var(--muted)">No Looks Found</p>
        <h4 class="title" style="margin:4px 0 8px">No stylist looks match "${escapeMarkup(query || creatorFilter)}"</h4>
        <p class="body" style="margin-bottom:16px;font-size:13px">Try clearing your search or exploring all categories.</p>
        <div class="row" style="justify-content:center;gap:8px">
          ${query ? `<button class="btn small-btn" onclick="setCreatorSearch('')">Clear Search</button>` : ""}
          ${creatorFilter !== "All" ? `<button class="btn small-btn" onclick="setCreatorFilter('All')">View All Categories</button>` : ""}
        </div>
      </div>`
      }
    </section>`,
    { active: "home", noNav: false },
  );
}

function creatorProfileScreen() {
  const creator = getCreator(activeCreatorId);
  return shell(
    creator.name,
    `<header class="creator-profile-header">
      <button class="mirror-circle-action" aria-label="Back" onclick="backScreen()">${icon("back")}</button>
      <div class="creator-profile-hero">
        <img src="${creator.avatar}" alt="${escapeMarkup(creator.name)}" class="creator-profile-avatar">
        <h2 class="title" style="margin:10px 0 4px;font-size:24px">${escapeMarkup(creator.name)}</h2>
        <p class="creator-profile-direction">${escapeMarkup(creator.styleDirection)}</p>
        <p class="body creator-profile-bio">${escapeMarkup(creator.description)}</p>
        <div class="creator-profile-tags">
          ${creator.dominantTags.map((tag) => `<span class="pill-tag">${tag}</span>`).join("")}
        </div>
      </div>
    </header>

    <section class="card creator-patterns-card" aria-label="Signature style patterns">
      <p class="eyebrow">Signature Formulations</p>
      <h3 class="title" style="font-size:16px;margin:2px 0 8px">Style Patterns</h3>
      <p class="body" style="margin-bottom:10px">What this stylist wears, and the structural rules to borrow.</p>
      <ul class="creator-pattern-list">
        ${creator.patterns.map((pat) => `<li><span class="pattern-bullet">✦</span> <span>${escapeMarkup(pat)}</span></li>`).join("")}
      </ul>
    </section>

    <section class="mirror-section creator-profile-looks">
      <div class="mirror-section-head">
        <span>
          <p class="eyebrow">Curated Archive</p>
          <h3>Featured Looks</h3>
        </span>
        <small class="body">${creator.looks.length} looks</small>
      </div>
      ${
        creator.looks.length
          ? `<div class="creator-looks-grid">
        ${creator.looks
          .map(
            (look) => `
          <div class="creator-look-card card">
            <div class="creator-look-image-wrap" onclick="openCreatorLook('${look.id}')">
              <img src="${look.image}" alt="${escapeMarkup(look.title)}" class="creator-look-img">
              <span class="creator-look-badge">${escapeMarkup(look.occasion)}</span>
            </div>
            <div class="creator-look-body">
              <h4 class="creator-look-title" onclick="openCreatorLook('${look.id}')">${escapeMarkup(look.title)}</h4>
              <p class="creator-look-tags">${escapeMarkup(look.styleDirection)}</p>
              <div class="creator-look-actions">
                <button class="btn primary small-btn grow" onclick="makeCreatorLookMine('${look.id}')">Make It Mine</button>
                <button class="btn small-btn" onclick="openCreatorLook('${look.id}')">View</button>
              </div>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>`
          : `<div class="card empty-state" style="text-align:center;padding:24px 16px;margin-top:12px">
        <p class="body">No looks published yet by this stylist.</p>
      </div>`
      }
    </section>`,
    { active: "home", noNav: false },
  );
}

function creatorLookDetailScreen() {
  const look = getCreatorLook(activeCreatorLookId);
  const matchedPieces = look.pieces.map((p) => matchCreatorPieceToCloset(p));
  const ownedCount = matchedPieces.filter((m) => m.matchType === "Owned").length;
  const similarCount = matchedPieces.filter((m) => m.matchType === "Similar Owned").length;
  const totalCount = matchedPieces.length;

  return shell(
    look.title,
    `<header class="creator-detail-header">
      <div class="between">
        <button class="mirror-circle-action" aria-label="Back" onclick="backScreen()">${icon("back")}</button>
        <div class="creator-detail-head-copy">
          <p class="eyebrow" style="text-align:center">Stylist Look</p>
          <h2 class="title" style="margin:0;font-size:20px;text-align:center">${escapeMarkup(look.title)}</h2>
        </div>
        <button class="mirror-circle-action" aria-label="View Stylist" onclick="openCreatorProfile('${look.creator.id}')">${icon("user")}</button>
      </div>
      <div class="creator-detail-author-row" onclick="openCreatorProfile('${look.creator.id}')">
        <img src="${look.creator.avatar}" alt="${escapeMarkup(look.creator.name)}" class="creator-detail-author-thumb">
        <span>by <b>${escapeMarkup(look.creator.name)}</b> · <span class="creator-detail-direction">${escapeMarkup(look.styleDirection)}</span></span>
      </div>
    </header>

    <div class="creator-hero-image-wrap">
      <img src="${look.image}" alt="${escapeMarkup(look.title)} by ${escapeMarkup(look.creator.name)}" class="creator-hero-img">
      <span class="creator-hero-occasion-tag">${escapeMarkup(look.occasion)}</span>
    </div>

    <section class="card creator-detail-pieces-card" aria-label="Look components">
      <div class="between">
        <div>
          <p class="eyebrow">Look Components</p>
          <h3 class="title" style="font-size:16px;margin:2px 0 0">The Outfit Formula</h3>
        </div>
        <span class="small body">${look.pieces.length} pieces</span>
      </div>
      <div class="creator-pieces-list">
        ${matchedPieces
          .map(
            (m) => `
          <div class="creator-piece-row">
            <img src="${m.item.image || m.originalCreatorPiece}" class="creator-piece-thumb" alt="${escapeMarkup(m.originalCreatorPiece)}">
            <div class="creator-piece-meta">
              <span class="creator-piece-role">${m.item.role === "Outerwear" ? "Layer" : m.item.role}</span>
              <b>${escapeMarkup(m.originalCreatorPiece)}</b>
              <small class="body">${m.matchType === "Owned" ? `Owned in Closet (${escapeMarkup(m.item.name)})` : m.matchType === "Similar Owned" ? `Similar in Closet: ${escapeMarkup(m.item.name)}` : "Not in your Closet"}</small>
            </div>
            <span class="match-status-badge ${m.matchType === "Owned" ? "owned" : m.matchType === "Similar Owned" ? "similar" : "missing"}">
              ${m.matchType === "Owned" ? "Owned ✓" : m.matchType === "Similar Owned" ? "Similar ✓" : "Missing"}
            </span>
          </div>
        `,
          )
          .join("")}
      </div>
    </section>

    <section class="card creator-muse-card" aria-label="Muse interpretation">
      <div class="creator-muse-head">
        <span class="muse-badge-icon">${icon("spark")}</span>
        <div>
          <p class="eyebrow" style="color:var(--gold,#9e733c)">Muse Styling Note</p>
          <h4 class="title" style="margin:2px 0 0;font-size:15px">Why This Look Works</h4>
        </div>
      </div>
      <p class="body creator-muse-copy">${escapeMarkup(look.museExplanation)}</p>
    </section>

    <section class="card creator-closet-summary-card" aria-label="Closet compatibility">
      <div class="between">
        <div>
          <p class="eyebrow">Closet Compatibility</p>
          <h4 class="title" style="margin:2px 0 0;font-size:15px">Ready to Make It Yours</h4>
        </div>
        <span class="closet-match-count">${ownedCount + similarCount} / ${totalCount} pieces</span>
      </div>
      <p class="body" style="margin:6px 0 12px">StyleIQ will substitute your owned pieces into this structure, letting you personalize and preview before wearing.</p>
      <div class="creator-detail-ctas">
        <button class="btn primary wide" onclick="makeCreatorLookMine('${look.id}')">Make It Mine</button>
        <div class="row" style="margin-top:8px">
          <button class="btn grow" onclick="tryOnCreatorLook('${look.id}')">Try On</button>
          <button class="btn grow" onclick="openCreatorProfile('${look.creator.id}')">View Stylist</button>
        </div>
      </div>
    </section>`,
    { active: "home", noNav: false },
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
  return `<p class="body">Add stylists, public figures, or style icons whose aesthetic inspires you. Photos, screenshots, and visual references are organized in one Style Inspiration space.</p><div class="field" style="margin-top:14px"><label for="creator-reference">Stylist, style icon, handle, or link</label><input id="creator-reference" class="input" placeholder="@handle or pinterest.com/…"></div><button class="btn wide" style="margin-top:8px" onclick="addCreatorReference()">Add reference</button><div style="margin-top:12px">${creatorReferences.map((ref, index) => `<div class="creator-ref"><span><b>${ref.name}</b><small>${ref.source}</small></span><button class="text-action" aria-label="Remove ${ref.name}" onclick="removeCreatorReference(${index})">Remove</button></div>`).join("")}</div>`;
}
function creatorLookDetail() {
  const look = selectedCommunityLook;
  const communityState = communityPanel === "comments"
    ? `<section class="card" style="margin-top:14px"><h3 class="title">Comments</h3>${communityComments.map((comment) => `<p class="body">${escapeMarkup(comment)}</p>`).join("") || '<p class="small">Start the conversation.</p>'}<form class="row" style="margin-top:12px" onsubmit="submitCommunityComment(event)"><label class="sr-only" for="community-comment">Write a comment</label><input class="input grow" id="community-comment" placeholder="Add a thoughtful note"><button class="btn" type="submit">Post</button></form></section>`
    : communityPanel === "report"
      ? `<section class="card" style="margin-top:14px"><h3 class="title">Report this Look</h3><form class="stack" onsubmit="submitCommunityReport(event)"><label for="community-report-reason">Reason</label><select class="input" id="community-report-reason"><option>Spam</option><option>Inappropriate content</option><option>Misleading product</option><option>Other</option></select><label for="community-report-details">Details <span class="helper">Optional</span></label><textarea class="textarea" id="community-report-details" placeholder="Tell us what happened"></textarea><div class="row"><button class="btn" type="button" onclick="openCommunityPanel(null)">Cancel</button><button class="btn danger grow" type="submit">Submit report</button></div></form></section>`
      : communityPanel === "reported"
        ? `<section class="card" role="status" style="margin-top:14px"><b>Thanks. We’ve received your report.</b><p class="body">You can return to the Look.</p><button class="btn" style="margin-top:10px" onclick="openCommunityPanel(null)">Done</button></section>`
        : "";
  return shell(
    "Stylist inspiration",
    `<div class="between"><span><p class="eyebrow">@${escapeMarkup(look.creator.replace(/ .*/, "").toLowerCase())} · Stylist Look</p><h2 class="title">${escapeMarkup(look.title)}</h2><small class="body">${escapeMarkup(look.brand)} · Paris, FR</small></span><button class="icon-btn" aria-label="Report this Look" onclick="openCommunityPanel('report')">${icon("more")}</button></div><img class="hero-img" style="height:330px;margin-top:12px" src="${look.image}" alt="${escapeMarkup(look.title)} by ${escapeMarkup(look.creator)}"><div class="row" style="margin-top:12px"><button class="btn ${communityFollowed ? "primary" : ""}" onclick="toggleCommunityFollow()">${communityFollowed ? "Following" : "Follow"}</button><button class="btn ${communityLiked ? "primary" : ""}" aria-pressed="${communityLiked}" onclick="toggleCommunityLike()">${communityLiked ? "Liked" : "Like"}</button><button class="btn" onclick="openCommunityPanel('comments')">Comment${communityComments.length ? ` · ${communityComments.length}` : ""}</button></div><p class="body">Relaxed tailoring, soft neutral layers, and a clean shoe. See how this community Look translates to your wardrobe.</p>${lensMatches()}<div class="row" style="margin-top:14px"><button class="btn primary grow" onclick="startTryOn('${look.id}', { sourceType: 'community-look' })">Try On</button><button class="btn grow" onclick="canvasState.creationSource='creator_recreated';persist();go('F-01')">Make It Mine</button></div>${communityState}`,
    { active: "discover" },
  );
}
function decorateInspirationProfile() {
  if (currentId === "L-04") {
    const preferences = app.querySelector(".content .stack");
    preferences?.insertAdjacentHTML(
      "beforeend",
      `<details class="card progressive-card"><summary><b>Style Inspiration</b><span class="small">Stylists · icons · references</span></summary><div class="stack" style="margin-top:12px"><p class="body">Manage the people and visual references that shape your style direction.</p><button class="btn wide" onclick="openLightweightPanel('inspiration')">Manage inspiration</button></div></details>`,
    );
    return;
  }
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
    `<section class="card" style="margin-top:12px" aria-label="My Looks summary"><p class="eyebrow">My Looks</p><h3 class="title">${lookCatalog.length} Looks</h3><div class="profile-insight-grid"><button class="profile-insight" onclick="lookFilter='All';go('G-01')"><b>${lookCatalog.length}</b><small>Total</small></button><button class="profile-insight" onclick="lookFilter='Created by Me';go('G-01')"><b>${byMe}</b><small>Created by me</small></button><button class="profile-insight" onclick="lookFilter='With Muse';go('G-01')"><b>${withMuse}</b><small>With Muse</small></button></div></section>`,
  );
}
function decorateLookProvenance() {
  if (
    !["G-02", "G-03", "G-04", "G-05", "G-06", "G-07"].includes(
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
  const selected = [...app.querySelectorAll('.batch-photo[aria-pressed="true"]')].map(button => button.dataset.candidate);
  batchSessionCandidates = batchCandidateCatalog.filter(item => selected.includes(item.id)).map(item => ({ ...item, id: newClosetItemId() }));
  if (!batchSessionCandidates.length) return;
  batchImportActive = true;
  batchReadyToConfirm = false;
  batchUncertainResolved = false;
  batchReviewIndex = 0;
  importConfidence = "high";
  go("B-06");
}
function batchPhotoImport() {
  const photos = batchCandidateCatalog;
  batchSelectedCount = photos.length;
  return shell(
    "Add Photos",
    `<div class="mirror-upload-intro"><p class="eyebrow">Batch import</p><h2>Add garment photos</h2><p class="body">Choose several items at once. StyleIQ prepares confident pieces automatically and isolates only the ones that need your help.</p></div><div class="batch-photo-grid" role="group" aria-label="Selected garment photos">${photos.map((item) => `<button class="batch-photo" data-candidate="${item.id}" aria-pressed="true" onclick="toggleBatchPhoto(this)"><img src="${item.image}" alt="${escapeMarkup(item.name)}"><span>Selected</span></button>`).join("")}</div><p id="batch-photo-count" class="mirror-upload-count">${photos.length} photos selected · automatic cleanup and classification</p><div class="mirror-upload-actions"><button id="batch-process" class="btn primary wide" onclick="startBatchImport()">Process ${photos.length} photos</button><button class="btn wide" onclick="go('B-03')">Process one photo</button><button class="btn wide" onclick="importConfidence='high';go('B-06')">Review first item only</button></div>`,
    { active: "closet", noNav: true },
  );
}
function singlePhotoProcessing() {
  return shell("Preparing your item", `<div class="stack"><p class="eyebrow">Single photo import</p><h2 class="title">Cleaning and identifying your piece.</h2><div class="skeleton" style="height:280px"></div><p class="body">The photo is being cropped, cleaned, and matched to a Closet category.</p><button class="btn primary wide" onclick="importConfidence='high';go('B-06')">Review processed item</button><button class="btn wide" style="margin-top:8px" onclick="go('B-07')">Photo needs help</button></div>`, { active: "closet", noNav: true });
}
function singleImportResult() {
  return shell("Processed item", `<img class="hero-img" src="${assets.blazer}" alt="Processed black tailored blazer"><p class="eyebrow" style="margin-top:14px">Ready to review</p><h2 class="title">Your item is ready.</h2><p class="body">We cleaned the image and identified a black tailored blazer. Review the details before adding it to your Closet.</p><div class="row" style="margin-top:16px"><button class="btn grow" onclick="b01Mode='photos';go('B-01')">Retry photo</button><button class="btn primary grow" onclick="go('B-06')">Review item</button></div>`, { active: "closet", noNav: true });
}
function batchImportReview() {
  if (!batchImportActive) return shell("Import drafts", `<h2 class="title">Continue building your Closet</h2><p class="body">Choose photos to prepare a new batch.</p><button class="btn primary wide" onclick="b01Mode='photos';go('B-01')">Choose photos</button>${savedBatchDrafts().length ? `<button class="btn wide" onclick="resumeBatchDrafts()">Resume ${savedBatchDrafts().length} saved import drafts</button>` : ""}`, { active: "closet" });
  const candidates = batchCandidates(), readyItems = batchReadyCandidates(), exceptions = batchReviewCandidates().filter(item => !item.reviewed);
  const ready = readyItems.length, categoryCounts = candidates.reduce((counts, item) => {
    counts[item.category] = (counts[item.category] || 0) + 1;
    return counts;
  }, {});
  const categorySummary = Object.entries(categoryCounts).map(([category, count]) => `${count} ${category.toLowerCase()}`).join(" · ");
  const readyRows = readyItems.map((item) => `<div class="pack-row batch-ready-row"><img src="${item.image}" alt="${escapeMarkup(item.name)}"><span><b>${escapeMarkup(item.name)}</b><small class="body" style="display:block">Ready · ${escapeMarkup(item.category)}</small></span><span class="success-badge">Ready</span></div>`).join("");
  const exceptionRows = exceptions.map((item, index) => `<div class="pack-row batch-exception-row"><img src="${item.image}" alt="${escapeMarkup(item.name)}"><span><b>${escapeMarkup(item.name)}</b><small class="body" style="display:block">Needs review · ${escapeMarkup(item.category)}</small></span>${batchUncertainResolved ? '<span class="success-badge">Ready</span>' : `<button class="btn small-btn" onclick="reviewBatchExceptions(${batchReviewCandidates().indexOf(item)})">Review</button>`}</div>`).join("");
  return shell(
    "Batch review",
    `<div class="between"><span><p class="eyebrow">AI batch result</p><h2 class="title">Found ${candidates.length} pieces ✨</h2></span><span class="pill gold">${ready} ready</span></div><p class="body">${categorySummary}</p>${approvalCard(`${ready} ready · ${exceptions.length} need your help`, "Confident items are prepared for Closet. Nothing is added until you confirm the batch.")}<div class="batch-summary"><details class="card batch-result-group" open><summary><b>${ready} Ready items</b><span class="small">Prepared automatically</span></summary>${readyRows}</details><details class="card batch-result-group" ${exceptions.length && !batchUncertainResolved ? "open" : ""}><summary><b>${exceptions.length} Need your help</b><span class="small">Review exceptions only</span></summary>${!batchUncertainResolved && exceptions.length ? `<button class="btn wide" onclick="reviewBatchExceptions()">Review ${exceptions.length}</button>` : ""}${exceptionRows}</details></div><button class="btn primary wide" style="margin-top:14px" onclick="prepareBatchImportConfirmation()" ${ready ? "" : "disabled"}>Add ${ready} Ready Items</button><button class="btn wide" style="margin-top:8px" onclick="cancelBatchImport()">Cancel batch</button>`,
    { active: "closet", noNav: true },
  );
}
function prepareBatchImportConfirmation() {
  if (!batchReadyCandidates().length) return;
  batchReadyToConfirm = true;
  render();
}
function batchImportSuccess() {
  const prepared = batchReadyCandidates(), added = prepared.length;
  return shell(
    "Added",
    `<section class="closet-success"><div class="success-icon-wrap"><span>${icon("check")}</span></div><p class="success-kicker">${icon("check")} Ready to confirm</p><h2>${added} items prepared</h2><p class="body">These confident items are ready to add to your Closet. ${batchUncertainResolved ? "All exceptions are resolved." : `${batchReviewCandidates().length} uncertain items remain saved as drafts for later review.`}</p><div class="row" style="margin-top:22px">${prepared.slice(0, 4).map((item, index) => `<img style="width:64px;height:72px;object-fit:contain;border-radius:12px;background:var(--canvas)" src="${item.image}" alt="${escapeMarkup(item.name)} · item ${index + 1}">`).join("")}</div><button class="btn primary wide success-action" onclick="commitBatchImport()">${localStorage.getItem("styleiqOnboardingClosetPendingV1") === "true" ? "Add Ready Items · Continue to Today" : "Add Ready Items · View Closet"}</button></section>`,
    { active: "closet" },
  );
}
function commitBatchImport() {
  if (!batchImportActive) return;
  const readyItems = batchReadyCandidates();
  if (!readyItems.length) return;
  const added = readyItems.length;
  purchasedClosetItems.unshift(...readyItems.map((item) => ({
    ...item, id: newClosetItemId(), status: "Available", lifecycle: "Keep", wears: 0,
    source: "photo-import", confidence: "HIGH",
  })));
  persistClosetItems();
  const sessionIds = new Set(batchCandidates().map(item => item.id));
  const unresolved = [...savedBatchDrafts().filter(item => !sessionIds.has(item.id)), ...batchReviewCandidates().filter(item => !item.reviewed)];
  if (unresolved.length)
    localStorage.setItem("styleiqBatchImportDraftsV1", JSON.stringify(unresolved));
  else localStorage.removeItem("styleiqBatchImportDraftsV1");
  batchImportActive = false;
  batchReadyToConfirm = false;
  batchReviewIndex = 0;
  finishOnboardingClosetImport();
  toast(`${added} items added to Closet`);
}
function cancelBatchImport() {
  batchImportActive = false;
  batchReadyToConfirm = false;
  batchUncertainResolved = false;
  batchReviewIndex = 0;
  importConfidence = "high";
  localStorage.removeItem("styleiqOnboardingClosetPendingV1");
  go("B-01");
}
function decorateBatchImport() {
  if (currentId !== "B-01") return;
  const count = savedBatchDrafts().length;
  if (count) app.querySelector(".content")?.insertAdjacentHTML("afterbegin", `<button class="btn wide" onclick="resumeBatchDrafts()">Resume ${count} saved import drafts</button>`);
}
function reviewUncertainImport() {
  importConfidence = "low";
  batchReviewIndex = 0;
  go("B-06");
}
let uploadDuplicateId = null;
function chooseUploadIssue(issue) {
  uploadIssue = issue;
  if (['duplicate', 'alreadyOwned'].includes(issue)) uploadDuplicateId = closetItems().find(item => item.image === (closetPurchaseDraft?.image || assets.blazer))?.id || closetItems()[0]?.id || null;
  render();
}
function recoverUploadIssue(action) {
  if (action === "existing") {
    if (!uploadDuplicateId) { toast("No matching Closet item. Add this piece manually."); return; }
    openClosetItem(uploadDuplicateId);
    return;
  }
  if (action === "replace") {
    if (!uploadDuplicateId) { toast("No matching Closet item. Add this piece manually."); return; }
    uploadIssue = null;
    openClosetItem(uploadDuplicateId);
    openLightweightPanel("image");
    return;
  }
  if (action === "manual") {
    uploadIssue = null;
    importConfidence = "low";
    go("B-06");
    return;
  }
  if (action === "add") {
    uploadIssue = null;
    importConfidence = "high";
    go("B-06");
    return;
  }
  uploadIssue = null;
  b01Mode = "photos";
  go("B-01");
}
function reviewBatchExceptions(index) {
  batchReviewIndex = index ?? batchReviewCandidates().findIndex(item => !item.reviewed);
  if (batchReviewIndex < 0) return;
  importConfidence = "low";
  render();
}
function confirmBatchException(event) {
  event.preventDefault();
  const exceptions = batchReviewCandidates(), item = exceptions[batchReviewIndex];
  if (!item) return;
  item.brand = event.currentTarget.querySelector("#uncertain-brand").value;
  item.category = event.currentTarget.querySelector("#uncertain-category").value;
  item.reviewed = true;
  const next = exceptions.findIndex(candidate => !candidate.reviewed);
  if (next >= 0) {
    batchReviewIndex = next;
    render();
  } else {
    batchUncertainResolved = true;
    importConfidence = "high";
    render();
  }
}
function confidenceImportReview() {
  const draft = closetPurchaseDraft, batchException = batchImportActive && importConfidence === "low" ? batchReviewCandidates()[batchReviewIndex] : null, uncertain = !draft && (Boolean(batchException) || importConfidence === "low");
  const item = draft || batchException || { name: "Black tailored blazer", brand: "Balmain", category: "Outerwear", image: assets.blazer };
  const reviewLabel = batchException ? `Review exception ${batchReviewIndex + 1} of ${batchReviewCandidates().length}` : "Two details need you";
  return shell(
    "Review item",
    `<form onsubmit="${batchException ? "confirmBatchException" : "confirmReviewedClosetItem"}(event)"><img class="hero-img" src="${item.image}" alt="${escapeMarkup(item.name)}"><div class="stack" style="margin-top:14px">${approvalCard(draft ? "Purchase ready to review" : uncertain ? reviewLabel : "Processed automatically", draft ? (draft.wishlistId ? "Details came from your Wishlist product. Confirm below to add this owned piece to your Closet." : "Confirm these details before adding this purchase to your Closet.") : uncertain ? "The photo is usable, but brand and category conflict. Confirm both here once." : "Prototype preview: crop, isolation, image balance, category, and brand are high confidence.")}
    ${uncertain ? `<div class="card"><div class="field"><label for="uncertain-brand">Brand</label><select id="uncertain-brand" class="input">${[...new Set([item.brand, "Balmain", "Unknown"])].map(value => `<option>${escapeMarkup(value)}</option>`).join("")}</select></div><div class="field" style="margin-top:10px"><label for="uncertain-category">Category</label><select id="uncertain-category" class="input">${[...new Set([item.category, "Tops", "Bottoms", "Outerwear", "Dresses & Suits", "Shoes", "Bags", "Accessories"])].map(value => `<option>${escapeMarkup(value)}</option>`).join("")}</select></div></div><button type="submit" class="btn primary wide">Confirm 2 details &amp; add</button>` : `<details class="card progressive-card" ${draft ? "open" : ""}><summary><b>Edit details</b><span class="small">Review before adding</span></summary><div class="inline-edit-grid" style="margin-top:12px">${inlineEditRow("Item name", item.name, 'required maxlength="120"')}${inlineEditRow("Brand", item.brand, 'maxlength="100"')}${inlineEditRow("Category", item.category, 'required')}${draft?.wishlistId ? `${inlineEditRow("Purchase price", item.purchasePrice ?? "", 'type="number" min="0" step="0.01"')}${inlineEditRow("Purchase date", item.purchaseDate, 'type="date" required')}${inlineEditRow("Retailer / source", item.retailer, 'maxlength="200"')}<p class="small">From Wishlist · ${escapeMarkup(item.name)}</p>` : ""}</div></details><button type="submit" class="btn primary wide">${batchImportActive ? "Add All to Closet" : "Looks right · Add"}</button>${draft?.wishlistId ? '<button type="button" class="btn wide" onclick="go(\'G-09\')">Keep purchased · add later</button>' : '<details class="card progressive-card"><summary><b>What StyleIQ prepared</b><span class="small">Crop · background · metadata</span></summary><p class="body" style="margin-top:10px">Garment isolated, image normalized, category classified as Outerwear, and brand matched to Balmain.</p></details>'}`}</div></form>`,
    { noNav: true },
  );
}
function confirmReviewedClosetItem(event) {
  event.preventDefault();
  if (!closetPurchaseDraft?.wishlistId) {
    const draft = closetPurchaseDraft;
    const value = (id, fallback = "") => app.querySelector(`#inline-${id}`)?.value.trim() || fallback;
    purchasedClosetItems.unshift({
      id: newClosetItemId(),
      name: value("item-name", draft?.name || "Black tailored blazer"),
      brand: app.querySelector("#uncertain-brand")?.value || value("brand", draft?.brand || "Balmain"),
      category: app.querySelector("#uncertain-category")?.value || value("category", draft?.category || "Outerwear"),
      image: draft?.image || assets.blazer,
      status: "Available",
      lifecycle: "Keep",
      wears: 0,
      source: draft?.source || "photo-import",
    });
    persistClosetItems();
    if (draft?.source === 'receipt-import') {
      receiptPurchases = receiptPurchases.filter(item => item.id !== draft.id); persistReceiptDrafts();
    }
    finishOnboardingClosetImport("C-01");
    toast("Added to your Closet");
    return;
  }
  const draft = closetPurchaseDraft;
  const value = (id) => app.querySelector(`#inline-${id}`)?.value.trim() || "";
  const item = {
    id: `purchased-${draft.wishlistId}`, wishlistId: draft.wishlistId,
    name: value("item-name"), brand: value("brand"), category: value("category"),
    image: draft.image, purchasePrice: value("purchase-price") === "" ? null : Number(value("purchase-price")),
    purchaseDate: value("purchase-date"), retailer: value("retailer-source"),
    productUrl: draft.productUrl, status: "Available", lifecycle: "Keep", wears: 0,
  };
  if (!item.name || !item.category || !item.purchaseDate) return;
  if (!purchasedClosetItems.some((owned) => owned.wishlistId === item.wishlistId)) purchasedClosetItems.unshift(item);
  persistClosetItems();
  const wishlistItem = wishlistItems.find((entry) => entry.id === item.wishlistId);
  if (wishlistItem) { wishlistItem.closetId = item.id; wishlistItem.purchaseDate = item.purchaseDate; wishlistItem.purchasePrice = item.purchasePrice; persistWishlist(); }
  closetPurchaseDraft = null;
  localStorage.removeItem("styleiqClosetPurchaseDraftV1");
  openClosetItem(item.id); toast("Added to your Closet.");
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
    routeScreens[Math.min(routeScreens.indexOf(s) + 1, routeScreens.length - 1)].id,
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
  if (s.id === "B-01") {
    const photos = batchCandidateCatalog;
    batchSelectedCount = photos.length;
    const modeTabs = `<div class="chips" role="tablist" aria-label="Add intake source" style="margin:12px 0"><button class="chip ${b01Mode === 'photos' ? 'active' : ''}" onclick="b01Mode='photos';b01Processing=false;render()">Photos</button><button class="chip ${b01Mode === 'search' ? 'active' : ''}" onclick="b01Mode='search';b01Processing=false;render()">Search / URL</button><button class="chip ${b01Mode === 'receipt' ? 'active' : ''}" onclick="b01Mode='receipt';b01Processing=false;render()">Receipts</button></div>`;
    const draftButton = `<div class="between" style="margin-bottom:8px"><span class="helper">Make every piece usable with clean background isolation.</span><button class="btn small-btn" type="button" onclick="openLightweightPanel('draftImports')">Draft imports (2)</button></div>`;
    let content = "";
    if (b01Mode === "photos") {
      if (b01Processing) {
        content = `<div class="card stack" style="margin-top:14px"><p class="eyebrow">Background cleanup & detection</p><h3 class="title">Cleaning and identifying your piece.</h3><div class="skeleton" style="height:180px"></div><div class="chips" style="margin-top:10px"><span class="chip active">Uploading</span><span class="chip active">Cleaning image</span><span class="chip active">Detecting item</span><span class="chip active">Ready</span></div><p class="body">Cropping garment, removing background, and extracting brand & category.</p><button class="btn primary wide" onclick="b01Processing=false;importConfidence='high';go('B-06')">Review processed item</button><button class="btn wide" onclick="b01Processing=false;go('B-07')">Photo needs help</button></div>`;
      } else {
        content = `<div class="mirror-upload-intro"><p class="eyebrow">Universal photo intake</p><h2 class="title">Choose garment photos</h2><p class="body">Add one photo or an entire batch. Background cleanup and item detection run automatically.</p></div><div class="batch-photo-grid" role="group" aria-label="Selected garment photos">${photos.map((item) => `<button class="batch-photo" data-candidate="${item.id}" aria-pressed="true" onclick="toggleBatchPhoto(this)"><img src="${item.image}" alt="${escapeMarkup(item.name)}"><span>Selected</span></button>`).join("")}</div><p id="batch-photo-count" class="mirror-upload-count">${photos.length} photos selected · automatic cleanup and classification</p><div class="mirror-upload-actions" style="margin-top:14px"><button id="batch-process" class="btn primary wide" onclick="startBatchImport()">Process ${photos.length} photos</button><button class="btn wide" onclick="b01Processing=true;render()">Process one photo</button><button class="btn wide" onclick="importConfidence='high';go('B-06')">Review first item</button></div>`;
      }
    } else if (b01Mode === "search") {
      content = `<div class="stack"><p class="eyebrow">Product & brand lookup</p><h2 class="title">Find something you already own</h2><p class="body">Search by brand, item name, or paste a product link.</p><form onsubmit="searchOwnedItem(event)"><label class="field">Product, brand, or URL<input class="input" value="${escapeMarkup(ownedSearchQuery)}" placeholder="e.g. Balmain blazer, COS trousers, or URL" required></label><button class="btn primary wide" type="submit">Search Item</button></form><div style="margin-top:14px">${ownedSearchResults()}</div></div>`;
    } else if (b01Mode === "receipt") {
      content = receiptImportSurface();
    }
    return shell("Add to Closet", `${draftButton}${modeTabs}${content}`, { active: "closet", noNav: true });
  }
  if (s.id === "B-04") return shell("Search your item", `<p class="eyebrow">Closet Search · owned item</p><h2 class="title">Find something you already own.</h2><form onsubmit="searchOwnedItem(event)"><label class="field">Product or brand<input class="input" value="${escapeMarkup(ownedSearchQuery)}" placeholder="Search products or brands" required></label><button class="btn primary wide" type="submit">Search My Item</button></form>`, { noNav: true });
  if (s.id === "B-05") return shell("Search results", ownedSearchResults(), { noNav: true });
  if (["B-06", "B-08"].includes(s.id)) return confidenceImportReview();
  if (s.id === "B-07")
    {
      const issue = uploadIssueDefinitions[uploadIssue] || uploadIssueDefinitions.unable;
      const recovery = uploadIssue === "duplicate"
        ? `<button class="btn primary wide" onclick="recoverUploadIssue('existing')">View existing item</button><button class="btn wide" onclick="recoverUploadIssue('add')">Add anyway</button><button class="btn wide" onclick="recoverUploadIssue('replace')">Replace / update existing photo</button><button class="text-action" onclick="recoverUploadIssue('cancel')">Cancel</button>`
        : uploadIssue === "alreadyOwned"
          ? `<button class="btn primary wide" onclick="recoverUploadIssue('existing')">View existing item</button><button class="btn wide" onclick="recoverUploadIssue('replace')">Replace / update photo</button><button class="text-action" onclick="recoverUploadIssue('cancel')">Cancel</button>`
          : `<button class="btn primary wide" onclick="recoverUploadIssue('${issue.primary === "Retry photo" || issue.primary === "Choose another photo" ? "retry" : "manual"}')">${issue.primary}</button><button class="btn wide" onclick="recoverUploadIssue('${issue.secondary === "Continue manually" ? "manual" : "cancel"}')">${issue.secondary}</button>`;
      return shell(
        "Photo needs help",
        `<img class="hero-img" src="images/closet.jpeg" alt="Original wardrobe photo that could not be isolated"><div class="card" style="margin-top:14px"><p class="eyebrow">Upload exception</p><h2 class="title">${issue.title}</h2><p class="body">${issue.body}</p><div class="stack" style="margin-top:14px">${recovery}</div></div><details class="card" style="margin-top:14px"><summary><b>Choose a different issue</b><span class="small">Prototype recovery states</span></summary><div class="stack" style="margin-top:12px">${Object.entries(uploadIssueDefinitions).map(([id, definition]) => `<button class="btn wide" onclick="chooseUploadIssue('${id}')">${definition.label}</button>`).join("")}</div></details>`,
        { noNav: true },
      );
    }
  if (s.id === "B-09")
    return shell(
      "Forward receipts",
      receiptImportSurface(),
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
        )}</div><div class="closet-progress"><b>3 / 4 from your Closet</b><button onclick="go('C-01')">View pieces</button></div><div class="home-actions"><button class="btn primary" onclick="startTryOn('coffee', { sourceType: 'today' })">${icon("user")} Try on</button><button class="btn" onclick="go('F-01')">${icon("shirt")} Make it mine</button></div>`,
      { active: "home" },
    );
  if (s.id === "D-03")
    return shell(
      "Today",
      `<div class="stack"><div class="skeleton" style="height:46px;width:65%"></div><div class="skeleton" style="height:280px"></div><p class="body">Considering Cairo weather, your calendar, and your newest Closet piece…</p></div>`,
      { active: "home" },
    );
  if (s.id === "D-04") return outfitFamilies(s.title, "coffee");
  if (s.id === "D-05") return outfitFamilies(s.title, "tailoring");
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
  if (canvasState.creatorAttribution || studioSourceContext === "creator") {
    const existingIndex = lookCatalog.findIndex(
      (l) => l.title === canvasState.title,
    );
    const newEntry = {
      title: canvasState.title,
      image: canvasState.items[0]?.image || assets.look,
      creationSource: "creator_recreated",
      creatorAttribution:
        canvasState.creatorAttribution ||
        creatorReferenceContext?.creatorName ||
        null,
    };
    if (existingIndex >= 0) lookCatalog[existingIndex] = newEntry;
    else lookCatalog.unshift(newEntry);
  }
  selectedSavedLookId = canvasState.title;
  persist();
  go("G-02");
  toast("Look saved to My Looks");
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
      "Discover Search",
      `<p class="eyebrow">Discover Search · consider a product</p><h2 class="title">Find something worth considering.</h2><p class="body">Evaluate products against your Closet before you save or shop.</p>${wishlistSnapshot(true)}${wishlistProductSearch()}<details class="card progressive-card"><summary><b>Outfit inspiration</b><span class="small">Complete Looks</span></summary>${feed}</details>`,
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
      `<div class="row"><img src="${peoplePhotos.creatorPortrait}" class="thumb" style="width:44px;height:44px;border-radius:50%" alt="Camille Laurent"><span class="grow"><b>Camille Laurent</b><small class="body" style="display:block">Paris, FR</small></span><button class="btn small-btn">Follow</button></div><img class="hero-img" style="height:350px;margin-top:12px" src="${assets.look}" alt="Community Look"><div class="between" style="margin-top:12px"><span class="row">${icon("heart")} 1.1k · 18 comments</span><button class="btn small-btn" onclick="startTryOn('coffee', { sourceType: 'community-look' })">Try on me</button></div>`,
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
  if (!isExistingCustomer() || closetItemCount() === 0) return todayBeforeClosetState();
  if (todayMode === "loading") return todayLoadingState();
  if (todayMode === "missing-category") return todayMissingCategoryState();
  if (todayMode === "carousel") return todayCarouselState();
  const look = tryOnLooks[selectedTodayLook];
  return shell(
    "Today",
    `<div class="today-visual-head"><h2>Good morning, Amelia</h2><button class="today-muse-pill" onclick="go('M-01')"><img src="${assets.muse}" alt="Muse"><span>Ask Muse</span></button></div><section class="today-hero" aria-label="Today’s recommended Look"><span class="tryon-frame-preview ${look.reference ? "reference" : ""} ${look.remote ? "remote-photo" : ""}" role="img" aria-label="${look.title} full outfit" style="background-image:url('${look.sheet}');background-position:0 ${look.row * 100}%"></span><button class="today-save" aria-label="Save outfit" onclick="openLightweightPanel('save')">${icon("heart")}</button><div class="today-hero-panel"><span>${look.context}</span><h3>${look.title}</h3><span class="today-hero-count">${Object.keys(tryOnLooks).indexOf(look.id) + 1} / 3</span></div></section><div class="today-closet-line"><b>${look.pieces.length} pieces · from your Closet first</b><button onclick="go('C-01')">View Closet</button></div><p class="body" style="margin:8px 0 14px">${look.pieces.map((piece) => piece[1]).join(" · ")}</p><div class="today-actions"><button class="btn primary" onclick="startTryOn()">${icon("user")} Try On</button><button class="btn" onclick="makeLookMine()">${icon("shirt")} Make it mine</button></div><section class="today-more"><div class="today-more-head"><h3>More for today</h3><button onclick="go('D-04')">See all</button></div><div class="today-look-rail">${Object.values(
      tryOnLooks,
    )
      .filter((other) => other.id !== look.id)
      .map(
        (other) =>
          `<button class="today-look-card" onclick="selectTodayLook('${other.id}')"><span class="tryon-frame-preview ${other.reference ? "reference" : ""} ${other.remote ? "remote-photo" : ""}" role="img" aria-label="${other.title}" style="background-image:url('${other.sheet}');background-position:0 ${other.row * 100}%"></span><span><b>${other.title}</b><small>${other.reference ? "From your reference" : "Office"}</small></span></button>`,
      )
      .join("")}</div></section>`,
    { active: "home", surfaceClass: "image-first-surface" },
  );
}
function setTodayMode(mode) {
  todayMode = mode;
  localStorage.setItem("styleiqTodayModeV1", mode);
  if (currentId === "D-02") render();
}
function todayBeforeClosetState() {
  return shell(
    "Today",
    `<div class="muse-starter-look-screen">
      <div class="card starter-look-card">
        <div class="starter-look-tag-bar">
          <span class="pill gold">StyleIQ Editorial</span>
          <span class="pill">Starter Inspiration</span>
        </div>
        <div class="starter-look-visual">
          <img src="images/alta-look-ivory-black-flatlay.png" alt="StyleIQ Editorial Starter Look" class="starter-look-img">
        </div>
        <div class="starter-look-content">
          <p class="eyebrow">Muse Starter Look</p>
          <h2 class="title">An easy direction to begin with</h2>
          <p class="body">A flexible StyleIQ editorial look to help you get started. Add pieces anytime for outfits personalized from your own wardrobe.</p>
          <div class="chips starter-chips" role="group" aria-label="Style direction tags">
            <span class="chip">Easy Layers</span>
            <span class="chip">Smart Casual</span>
            <span class="chip">Day-to-Evening</span>
            <span class="chip">Minimal</span>
          </div>
          <div class="starter-muse-note">
            <span class="starter-muse-icon">${icon("spark")}</span>
            <small class="body">Muse combines versatile foundation pieces to show how proportion and neutral layering work before your closet is added.</small>
          </div>
        </div>
      </div>
      <div class="starter-actions" style="margin-top:16px">
        <button class="btn primary wide" onclick="go('B-01')">Add First Item</button>
        <button class="btn wide" style="margin-top:8px" onclick="go('K-01')">See Another Direction</button>
        <button class="btn wide" style="margin-top:8px" onclick="go('H-01')">Build My Style Profile</button>
        <button class="btn wide" style="margin-top:8px" onclick="openMuse({ label: 'Getting started', prompt: 'Help me get started before I add Closet items.', origin: 'D-02' })">Ask Muse</button>
      </div>
    </div>`,
    { active: "home", surfaceClass: "starter-look-surface" }
  );
}
function todayLoadingState() {
  return shell("Today", `<div class="stack"><p class="eyebrow">Preparing your day</p><h2 class="title">Muse is checking the details.</h2><div class="skeleton" style="height:280px"></div><p class="body">Considering weather, calendar context, and the pieces you wear most.</p><button class="btn primary wide" onclick="setTodayMode('normal')">Show my Look</button></div>`, { active: "home" });
}
function todayMissingCategoryState() {
  return shell("Today", `<div class="empty"><div><p class="eyebrow">One useful gap</p><h2 class="title">This Look needs a complete base.</h2><p class="body">Muse found a strong layer and top, but no available pair of compatible shoes.</p><div class="card" style="margin-top:16px"><b>Continue with the partial Look</b><p class="body">See the direction now, then fill the gap when you’re ready.</p></div><button class="btn primary wide" style="margin-top:14px" onclick="setTodayMode('normal')">Continue with this Look</button><button class="btn wide" style="margin-top:8px" onclick="go('C-01')">Add or review shoes</button></div></div>`, { active: "home" });
}
function todayCarouselState() {
  return shell("Today", `<div class="today-visual-head"><span><p class="eyebrow">Three good directions</p><h2 class="title">Choose today’s Look</h2></span><span class="pill">Carousel</span></div><p class="body">Swipe or select a recommendation; the chosen Look becomes the active Today context.</p><div class="today-look-rail" style="margin-top:16px">${Object.values(tryOnLooks).map((look) => `<button class="today-look-card" onclick="selectTodayLook('${look.id}');setTodayMode('normal')"><span class="tryon-frame-preview" role="img" aria-label="${escapeMarkup(look.title)}" style="background-image:url('${look.sheet}');background-position:0 ${look.row * 100}%"></span><span><b>${escapeMarkup(look.title)}</b><small>${escapeMarkup(look.context)}</small></span></button>`).join("")}</div>`, { active: "home" });
}
function mirrorPlanner() {
  const weekStart = proactiveWeek[0]?.date ? new Date(`${proactiveWeek[0].date}T12:00:00`) : new Date();
  if (!proactiveWeek[0]?.date) weekStart.setDate(weekStart.getDate() + (8-weekStart.getDay())%7);
  else weekStart.setDate(weekStart.getDate() - (weekStart.getDay()+6)%7);
  const todayDate = new Date().getDate();
  const days = Array.from({length:7}, (_,index) => {
    const day = new Date(weekStart); day.setDate(day.getDate()+index);
    const isToday = day.getDate() === todayDate;
    return [day.toLocaleDateString('en-US',{weekday:'narrow'}), day.getDate(), isToday, index];
  });
  const planned = plannerEvent || plannerIntent || {
    title: "No event planned yet",
    time: "Choose a time or daypart",
    occasion: "Choose an occasion",
  };
  const plannedLook = plannerEvent ? plannerLook(plannerEvent.lookId) : null;
  const proactive = proactiveWeek.length
    ? `<section class="planner-intent-card"><div class="between"><span><p class="eyebrow">Your Week</p><h2 class="title">StyleIQ planned ${proactiveWeek.length} looks.</h2></span><button class="text-action" onclick="planMyWeek()">Regenerate</button></div><div class="stack">${proactiveWeek.map((entry, index) => `<div class="pack-row planner-week-row"><img src="${entry.image}" alt="${escapeMarkup(entry.look)}"><span><b>${entry.day} · ${escapeMarkup(entry.context)}</b><small class="body" style="display:block">${escapeMarkup(entry.look)} · ${escapeMarkup(entry.date || "")}</small></span><div><button class="text-action" onclick="changeProactiveLook(${index})">Change Look</button><button class="text-action" onclick="editProactiveContext(${index})">Edit context</button><button class="text-action" onclick="removeProactiveLook(${index})">Remove</button></div></div>`).join("")}</div></section>`
    : `<section class="planner-intent-card"><p class="eyebrow">Proactive planning</p><h2 class="title">Let StyleIQ plan your week.</h2><p class="body">Generate four local sample Looks from your Closet and known contexts.</p><button class="btn primary wide" onclick="planMyWeek()">Plan My Week</button></section>`;

  const eventCard = plannerEventCreated
    ? `<button class="mirror-plan" onclick="go('I-04')"><img src="${plannedLook?.sheet || assets.look2}" alt="${escapeMarkup(planned.lookTitle || planned.title)}"><span class="mirror-plan-copy"><div class="between" style="align-items:center"><p class="eyebrow" style="margin:0">${escapeMarkup(planned.occasion || "Event")} · Planned</p><span class="planner-weather-badge">☀️ 74°</span></div><h3>${escapeMarkup(planned.lookTitle || planned.title)}</h3><small class="body">${escapeMarkup(planned.time || planned.daypart || "Today")} · ${escapeMarkup(planned.location || "Cairo")}</small><b style="display:block;margin-top:8px;font-size:10px;color:var(--gold,#9e733c)">Review event →</b></span></button>`
    : `<div class="planner-empty-prompt"><div class="between" style="align-items:center"><span><p class="eyebrow" style="margin:0">Today’s Schedule</p><h3 class="title" style="margin:2px 0 0;font-size:16px">No Look planned yet</h3></span><button class="btn primary small-btn" onclick="go('I-04')">Plan a Look</button></div></div>`;

  return shell(
    "Planner",
    `<div class="mirror-week">${days.map(([d, n, isToday, i]) => `<button class="mirror-day ${i === selectedPlannerDayIndex ? "active" : ""} ${isToday ? "is-today" : ""}" onclick="selectedPlannerDayIndex=${i};openLightweightPanel('daySheet')"><span>${d}</span><b>${n}</b>${isToday ? '<span class="today-dot" aria-label="Today"></span>' : '<span class="day-indicator-empty"></span>'}</button>`).join("")}</div>${eventCard}${proactive}${recurringPlannerSection()}<section class="planner-intent-card"><div class="between" style="align-items:center"><span><p class="eyebrow" style="margin:0">Manual planning</p><h2 class="title" style="margin:2px 0 0;font-size:16px">${plannerEvent ? "Your planned Look" : "Add a specific event"}</h2></span><button class="btn small-btn" onclick="go('I-04')">Add Event</button></div></section>${
      nextWeekPrepared
        ? `<section style="margin-top:16px"><div class="between"><span><p class="eyebrow">Prepared from your recap</p><h3 class="title">Next week</h3></span><button class="text-action" onclick="openLightweightPanel('plannerInsights')">Review recap</button></div><div class="planner-prepared">${[
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
    }<button class="mirror-plan" onclick="go('J-01')"><img src="${assets.look4}" alt="Travel wardrobe"><span class="mirror-plan-copy"><p class="eyebrow">Trip</p><h3>Alexandria · 3 days</h3><small class="body">Plan a Trip</small></span></button><div class="row" style="margin-top:12px"><button class="btn grow" onclick="openLightweightPanel('shareCalendar')">Share Calendar</button><button class="btn grow" onclick="openLightweightPanel('plannerInsights')">Weekly recap</button></div>`,
    { active: "planner" },
  );
}

function tripDates(draft = tripDraft) {
  const start = Date.parse(`${draft.startDate}T00:00:00Z`), end = Date.parse(`${draft.endDate}T00:00:00Z`);
  if (!Number.isFinite(start) || !Number.isFinite(end) || end < start || end-start > 365*86400000) return [];
  return Array.from({length: Math.round((end-start)/86400000)+1}, (_,index) => new Date(start+index*86400000).toISOString().slice(0,10));
}
function tripPackingItems() {
  return tripState.items || [{name:'Black blazer',image:assets.blazer},{name:'Silk shell',image:assets.top},{name:'Leather loafers',image:assets.shoes}];
}
function tripSummary() {
  const draft = tripState.basics || tripDraft;
  return `${tripDates(draft).length} days · ${tripPackingItems().length} pieces · ${tripState.looks.length} outfits`;
}
function tripStepNav(step) {
  return `<div class="trip-meaningful-steps" aria-label="Trip progress"><span class="${step >= 1 ? "on" : ""}">1 · Trips</span><span class="${step >= 2 ? "on" : ""}">2 · Setup</span><span class="${step >= 3 ? "on" : ""}">3 · Trip Hub</span></div>`;
}
function handleBuildTrip(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  tripDraft.destination = String(data.get("destination") || "").trim() || "Alexandria";
  tripDraft.startDate = String(data.get("startDate") || "") || "2026-08-23";
  tripDraft.endDate = String(data.get("endDate") || "") || "2026-08-25";
  tripDraft.notes = String(data.get("notes") || "").trim();
  tripDraft.luggage = tripDraft.luggage || "Carry-on";
  if (!tripDraft.occasions.length) tripDraft.occasions = ["Dinner", "Beach", "Sightseeing"];
  localStorage.setItem("styleiqTripDraftV2", JSON.stringify(tripDraft));
  generateSimplifiedTrip();
}
function tripIntentScreen() {
  if (tripState.building) {
    setTimeout(() => {
      if (tripState.building) {
        tripState.building = false;
        tripState.created = true;
        tripHubSaved = true;
        persistTrip();
        go("J-08");
      }
    }, 450);
    return shell(
      "Building Trip",
      `${tripStepNav(2)}<div class="card stack" style="margin-top:16px"><span class="phase-pill">Generating with Muse</span><h2 class="title">Building your trip to ${escapeMarkup(tripDraft.destination)}</h2><div class="skeleton" style="height:180px"></div><p class="body">Balancing outfits, weather, activities, and packing pieces you own...</p><button class="btn primary wide" onclick="tripState.building=false;tripState.created=true;tripHubSaved=true;persistTrip();go('J-08')">Open Trip Hub</button></div>`,
      { active: "profile" },
    );
  }

  const d = tripDraft;
  const occasions = ["Work", "Dinner", "Beach", "Sightseeing", "Night out", "Formal", "Outdoors"];
  const luggage = ["Carry-on", "Checked bag", "Backpack", "Flexible"];

  return shell(
    "Trip Setup",
    `${tripStepNav(2)}<form class="stack" onsubmit="handleBuildTrip(event)"><p class="eyebrow">Trip setup</p><h2 class="title">Tell Muse about your trip</h2><div class="field"><label for="trip-nl">Describe your trip</label><textarea id="trip-nl" class="input" style="height:64px;resize:none" placeholder="e.g. I’m going to Alexandria Aug 23–25. Carry-on only. Dinner, museum and beach.">I’m going to Alexandria Aug 23–25. Carry-on only. Dinner, museum and beach.</textarea></div><div class="field" data-section="destination"><label for="trip-destination">Destination</label><input class="input" id="trip-destination" name="destination" value="${escapeMarkup(d.destination || "Alexandria")}" placeholder="e.g. Alexandria" required></div><div class="row" data-section="destination"><div class="field grow"><label for="trip-start-date">Start date</label><input class="input" id="trip-start-date" name="startDate" type="date" value="${escapeMarkup(d.startDate || "2026-08-23")}"></div><div class="field grow"><label for="trip-end-date">End date</label><input class="input" id="trip-end-date" name="endDate" type="date" value="${escapeMarkup(d.endDate || "2026-08-25")}"></div></div><div class="field" data-section="luggage"><label>Luggage</label><div class="chips" role="group" aria-label="Luggage context" style="margin-top:6px">${luggage.map(x => `<button type="button" class="chip ${d.luggage === x ? "active" : ""}" onclick="tripDraft.luggage='${x}';persistTrip();render()">${x}</button>`).join("")}</div></div><div class="field" data-section="activities"><label>Activities</label><div class="chips" role="group" aria-label="Activities" style="margin-top:6px">${occasions.map(x => `<button type="button" class="chip ${d.occasions.includes(x) ? "active" : ""}" onclick="toggleTripOccasion('${x}')">${x}</button>`).join("")}</div></div><details class="card progressive-card" data-section="must-bring" style="margin-top:6px"><summary><b>Must bring &amp; notes</b><span class="small">Optional preferences</span></summary><div class="stack" style="margin-top:12px"><div class="field"><label for="trip-must-bring">Must bring item</label><input id="trip-must-bring" class="input" placeholder="e.g. Black blazer, comfortable loafers"></div><div class="field"><label for="trip-notes">Notes for Muse</label><input id="trip-notes" class="input" name="notes" value="${escapeMarkup(d.notes || "")}" placeholder="e.g. Need one dressy evening option"></div></div></details><button class="btn primary wide auth-primary" type="submit" style="margin-top:16px">Generate Trip Wardrobe</button><button class="btn wide" type="button" onclick="saveTripDetails(event);go('J-03')" style="margin-top:8px">Choose vibe & activities</button></form>`,
    { active: "profile" },
  );
}
function saveTripDetails(event) {
  if (event?.preventDefault) event.preventDefault();
  const form = document.querySelector('form.stack') || event?.currentTarget;
  if (form) {
    const dest = form.querySelector('#trip-destination')?.value;
    const start = form.querySelector('#trip-start-date')?.value;
    const end = form.querySelector('#trip-end-date')?.value;
    const notes = form.querySelector('#trip-notes')?.value;
    if (dest) tripDraft.destination = dest.trim();
    if (start) tripDraft.startDate = start;
    if (end) tripDraft.endDate = end;
    if (notes) tripDraft.notes = notes.trim();
    localStorage.setItem("styleiqTripDraftV2", JSON.stringify(tripDraft));
  }
}
function tripDetailsScreen() {
  const occasions = ["Dinner", "Beach", "Sightseeing", "Work", "Party"];
  return shell(
    "Choose vibe & activities",
    `<p class="eyebrow">Trip activities</p><h2 class="title">What are you planning?</h2><div class="chips" role="group" aria-label="Trip activities" style="margin-top:14px">${occasions.map(occasion => `<button type="button" class="chip ${tripDraft.occasions.includes(occasion) ? "active" : ""}" onclick="toggleTripOccasion('${occasion}')">${occasion}</button>`).join("")}</div><button class="btn primary wide" style="margin-top:16px" onclick="generateSimplifiedTrip();go('J-07')">Create My Packing Plan</button><button class="btn wide" style="margin-top:8px" onclick="go('J-02')">Edit trip basics</button>`,
    { active: "profile" },
  );
}
function generateSimplifiedTrip() {
  const dates = tripDates();
  if (!dates.length) {
    tripDraft.startDate = tripDraft.startDate || "2026-08-23";
    tripDraft.endDate = tripDraft.endDate || "2026-08-25";
  }
  tripDraft.destination = tripDraft.destination || "Alexandria";
  tripDraft.luggage ||= "Carry-on";
  if (!tripDraft.occasions.length) tripDraft.occasions = ["Dinner", "Beach", "Sightseeing"];
  tripState.basics = JSON.parse(JSON.stringify(tripDraft));
  tripState.items = closetItems().filter(item => !['Archive','Sell','Donate'].includes(item.lifecycle)).slice(0,6).map(item => ({id:item.id,name:item.name,image:item.image}));
  if (!tripState.items.length) {
    tripState.items = [{name:'Black blazer',image:assets.blazer},{name:'Silk shell',image:assets.top},{name:'Leather loafers',image:assets.shoes}];
  }
  tripState.packed = Object.fromEntries(tripState.items.map(item => [item.name, true]));
  const options = Object.values(tryOnLooks);
  const resolvedDates = tripDates().length ? tripDates() : ["2026-08-23", "2026-08-24", "2026-08-25"];
  tripState.looks = resolvedDates.map((date, index) => {
    const look = options[index % options.length], context = tripDraft.occasions[index % Math.max(tripDraft.occasions.length, 1)] || 'Casual';
    return { date, title: `${context} · ${look.title}`, image: look.sheet, lookId: look.id };
  });
  tripState.building = true;
  tripState.created = false;
  persistTrip();
  render();
}
function toggleTripOccasion(occasion) {
  tripDraft.occasions = tripDraft.occasions.includes(occasion)
    ? tripDraft.occasions.filter((item) => item !== occasion)
    : [...tripDraft.occasions, occasion];
  localStorage.setItem("styleiqTripDraftV2", JSON.stringify(tripDraft));
  render();
}
function tripPackingContextScreen() {
  return tripIntentScreen();
}
function generateTripDraft() {
  generateSimplifiedTrip();
}
function tripDraftScreen() {
  return tripHub("packing");
}
function tripLooksDraftScreen() {
  return tripHub("looks");
}
function swapTripLook(index) {
  const titles = ["Arrival by the sea", "Dinner by the Corniche", "Museum layers"];
  tripState.looks[index].title = titles[(titles.indexOf(tripState.looks[index].title) + 1) % titles.length];
  persistTrip();
  render();
}
function tripPackingEditor() {
  return tripHub("packing");
}
function tripReviewScreen() {
  return tripHub("packing");
}
function confirmTripCreation() {
  generateSimplifiedTrip();
}
function buildingTripScreen() {
  return shell(
    "Building Trip",
    `<div class="card stack" style="margin-top:16px"><p class="eyebrow">Generating with Muse</p><h2 class="title">Trip to ${escapeMarkup(tripDraft.destination)} is ready</h2><p class="body">Outfits and packing list generated.</p><button class="btn primary wide" style="margin-top:18px" onclick="completeTripBuild()">Open completed trip</button></div>`,
    { active: "profile" },
  );
}
function completeTripBuild() {
  tripState.building = false;
  tripState.created = true;
  tripHubSaved = true;
  persistTrip();
  go("J-08");
}
function tripHub(tab = tripHubTab || "packing") {
  tripHubTab = ["outfits", "days", "looks"].includes(tab) ? tab : "packing";
  const packing = tripHubTab === "packing";
  const draft = tripState.basics || tripDraft;

  const successBadge = tripHubSaved
    ? `<div class="card" role="status" style="margin-bottom:14px;background:rgba(46,125,50,0.08);border:1px solid rgba(46,125,50,0.24)"><div class="row" style="align-items:center;gap:10px"><span style="color:#2e7d32;font-size:18px">✓</span><div><b>${escapeMarkup(draft.destination)} is ready ✨</b><small class="body" style="display:block">Trip saved with packing list and daily Looks.</small></div></div></div>`
    : "";

  const header = `<div class="between"><div><p class="eyebrow">${escapeMarkup(draft.startDate)} → ${escapeMarkup(draft.endDate)} · ${escapeMarkup(draft.luggage || "Carry-on")}</p><h2 class="title">${escapeMarkup(draft.destination)}</h2></div><div class="row" style="gap:6px"><button class="btn small-btn" onclick="openLightweightPanel('tripReview')">Review</button><button class="btn small-btn" onclick="go('J-02')">Edit</button></div></div><p class="body" data-trip-summary>${tripSummary()}</p>`;

  const tabBar = `<div class="trip-tabs" style="margin:14px 0"><button class="${packing ? 'active' : ''}" onclick="tripHubTab='packing';render()">Packing</button><button class="${tripHubTab === 'looks' ? 'active' : ''}" onclick="tripHubTab='looks';render()">Looks</button><button class="${tripHubTab === 'outfits' ? 'active' : ''}" onclick="tripHubTab='outfits';render()">Outfits</button><button class="${tripHubTab === 'days' ? 'active' : ''}" onclick="tripHubTab='days';render()">Days</button></div>`;

  let tabContent = "";
  if (packing) {
    tabContent = `<div class="stack">${tripPackingItems().map(item => `<button class="pack-row trip-item-action" onclick="toggleTripItem(${escapeMarkup(JSON.stringify(item.name))})"><img src="${item.image}" alt="${escapeMarkup(item.name)}"><span><b>${escapeMarkup(item.name)}</b><small class="body" style="display:block">From Closet</small></span><span class="pill">${tripState.packed[item.name] ? 'Packed' : 'Pack'}</span></button>`).join('')}</div><div class="row" style="margin-top:14px"><button class="btn grow" onclick="openLightweightPanel('tripAddLook')">Add piece</button><button class="btn grow primary" onclick="toast('Packing list ready')">All packed</button></div>`;
  } else {
    tabContent = `<div class="stack">${tripState.looks.map((look, index) => `<div class="card"><div class="between"><span><p class="eyebrow">Day ${index + 1} · ${escapeMarkup(look.date)}</p><h3 class="title">${escapeMarkup(look.title)}</h3></span><div class="row" style="gap:6px"><button class="btn small-btn" onclick="openLightweightPanel('tripAddLook')">Change</button><button class="btn small-btn" onclick="startTryOn('${look.lookId || 'coffee'}', { sourceType: 'trip' })">Try On</button></div></div><img class="hero-img" style="margin-top:10px;height:180px;object-fit:cover" src="${look.image || assets.look}" alt="${escapeMarkup(look.title)}"></div>`).join('')}</div><div class="row" style="margin-top:14px"><button class="btn grow" onclick="openLightweightPanel('tripAddLook')">Add Look</button><button class="btn grow primary" onclick="openLightweightPanel('tripMuse')">Ask Muse Look</button></div>`;
  }

  return shell(
    draft.destination || "Trip Hub",
    `${tripStepNav(3)}${successBadge}${header}${tabBar}${tabContent}`,
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

let discoverFilter = localStorage.getItem("styleiqDiscoverFilterV1") || "For You",
  searchIntent = localStorage.getItem("styleiqSearchIntentV1") || "discover",
  communityFollowed = localStorage.getItem("styleiqCommunityFollowedV1") === "true",
  communityLiked = localStorage.getItem("styleiqCommunityLikedV1") === "true",
  communityComments = readWishlistData("styleiqCommunityCommentsV1", []),
  communityPanel = null,
  selectedCommunityLook = { id: "coffee", title: "Tailored ease", creator: "Camille Laurent", brand: "COS", image: assets.look3 };
function openSharedSearch(intent) {
  searchIntent = intent;
  localStorage.setItem("styleiqSearchIntentV1", intent);
  go(intent === "closet" ? "B-04" : "K-02");
}
function setDiscoverFilter(value) {
  discoverFilter = value;
  localStorage.setItem("styleiqDiscoverFilterV1", value);
  render();
}
function clearDiscoverFilter() { setDiscoverFilter("For You"); }
function discoverFilterScreen() {
  const filters = ["For You", "Top This Week", "Following", "COS", "Toteme", "Loro Piana"];
  return shell(
    "Discover filters",
    `<p class="eyebrow">Discover · filter your feed</p><h2 class="title">Shape your feed</h2><div class="choice-list" style="margin-top:14px">${filters.map((filter) => `<button class="choice ${discoverFilter === filter ? "selected" : ""}" aria-pressed="${discoverFilter === filter}" onclick="setDiscoverFilter('${filter}')"><span><b>${filter}</b><small class="body">${filter === "Following" ? "Stylists you follow" : filter === "For You" ? "Personalized Looks" : "Community and brand Looks"}</small></span>${discoverFilter === filter ? icon("check") : ""}</button>`).join("")}</div><button class="btn wide" style="margin-top:14px" onclick="clearDiscoverFilter()">Clear filters</button>`,
    { active: "discover" },
  );
}
function openCommunityLook(id) {
  const looks = {
    coffee: { id: "coffee", title: "Tailored ease", creator: "Camille Laurent", brand: "COS", image: assets.look3 },
    evening: { id: "evening", title: "Coffee meeting", creator: "Noor Haddad", brand: "Toteme", image: assets.look2 },
    tailoring: { id: "tailoring", title: "Weekend layers", creator: "Mara Chen", brand: "Loro Piana", image: assets.look4 },
  };
  selectedCommunityLook = looks[id] || looks.coffee;
  communityPanel = null;
  go("K-04");
}
function toggleCommunityFollow() {
  communityFollowed = !communityFollowed;
  localStorage.setItem("styleiqCommunityFollowedV1", String(communityFollowed));
  render();
}
function toggleCommunityLike() {
  communityLiked = !communityLiked;
  localStorage.setItem("styleiqCommunityLikedV1", String(communityLiked));
  render();
}
function openCommunityPanel(panel) { communityPanel = panel; render(); }
function submitCommunityComment(event) {
  event.preventDefault();
  const value = app.querySelector("#community-comment")?.value.trim();
  if (!value) return;
  communityComments = [...communityComments, value];
  localStorage.setItem("styleiqCommunityCommentsV1", JSON.stringify(communityComments));
  render();
  toast("Comment added");
}
function submitCommunityReport(event) {
  event.preventDefault();
  const reason = app.querySelector("#community-report-reason")?.value;
  const details = app.querySelector("#community-report-details")?.value.trim() || "";
  localStorage.setItem("styleiqLastCommunityReportV1", JSON.stringify({ reason, details }));
  communityPanel = "reported";
  render();
  toast(`Report submitted · ${reason}`);
}
function plannerDateLabel(value) {
  if (!value) return "Date not set";
  const date = new Date(`${value}T12:00:00`);
  return Number.isNaN(date.getTime())
    ? value
    : date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}
function plannerLook(id = plannerLookChoice) {
  if (id === "saved" && typeof savedLookRecord === "function") return savedLookRecord();
  return tryOnLooks[id] || tryOnLooks.coffee;
}
function submitPlannerEvent(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  plannerEventDraft = {
    date: String(data.get("date") || "").trim() || new Date().toISOString().slice(0, 10),
    time: String(data.get("time") || "").trim() || "10:00",
    daypart: String(data.get("daypart") || "").trim() || "Morning",
    occasion: String(data.get("occasion") || "").trim() || "Work",
    title: String(data.get("title") || "").trim() || "Client presentation",
    location: String(data.get("location") || "").trim(),
    weather: String(data.get("weather") || "").trim(),
  };
  plannerValidationErrors = [];
  if (!plannerEventDraft.title) plannerValidationErrors.push("Tell us what you are dressing for.");
  if (!plannerEventDraft.date) plannerValidationErrors.push("Choose a date.");

  if (plannerValidationErrors.length) {
    render();
    return;
  }

  if (proactiveEditIndex !== null) {
    plannerValidationOpen = true;
    plannerLookChooserOpen = false;
    render();
    return;
  }

  savePlannerEvent();
}
function editPlannerEvent() {
  plannerValidationOpen = false;
  plannerLookChooserOpen = false;
  if (currentId === "I-04") render();
  else go("I-04");
}
function continuePlannerValidation() {
  plannerValidationOpen = false;
  plannerLookChooserOpen = true;
  render();
}
function choosePlannerLook(id) {
  plannerLookChoice = id;
  render();
}
function savePlannerEvent() {
  const look = plannerLook();
  if (proactiveEditIndex !== null && proactiveWeek[proactiveEditIndex]) {
    Object.assign(proactiveWeek[proactiveEditIndex], plannerEventDraft, { day: new Date(`${plannerEventDraft.date}T12:00:00`).toLocaleDateString('en-US',{weekday:'short'}).toUpperCase(), context: plannerEventDraft.occasion, lookId: look.id, look: look.title, image: look.sheet });
    localStorage.setItem('styleiqProactiveWeekV1', JSON.stringify(proactiveWeek));
    proactiveEditIndex = null; plannerValidationErrors = []; plannerValidationOpen = false; plannerLookChooserOpen = false; go('I-01'); toast('Weekly context updated'); return;
  }
  plannerEvent = {
    ...plannerEventDraft,
    lookId: look.id,
    lookTitle: look.title,
    lookImage: look.sheet,
    savedAt: new Date().toISOString(),
  };
  plannerEventCreated = true;
  localStorage.setItem("styleiqPlannerEventV2", JSON.stringify(plannerEvent));
  plannerIntent = {
    ...plannerEventDraft,
    title: plannerEvent.title || look.title,
    time: plannerEvent.time || plannerEvent.daypart,
    look: look.title,
  };
  localStorage.setItem("styleiqPlannerIntentV1", JSON.stringify(plannerIntent));
  plannerValidationErrors = [];
  plannerLookChooserOpen = false;
  go("I-01");
  toast("Event planned");
}
function plannerEventForm() {
  const d = plannerEventDraft;
  const validationAlert = plannerValidationErrors.length
    ? `<div class="card" role="alert" style="margin-bottom:14px;border:1px solid var(--accent)"><b>Update these details</b><ul style="margin:6px 0 0 16px">${plannerValidationErrors.map((error) => `<li>${escapeMarkup(error)}</li>`).join("")}</ul></div>`
    : "";
  return shell(
    "Add Event",
    `<form class="stack" onsubmit="submitPlannerEvent(event)"><p class="eyebrow">Planner · new event</p><h2 class="title">What are you dressing for?</h2><p class="body">Describe your plan so Muse can build an outfit around your day.</p>${validationAlert}<div class="field"><label for="planner-event-title">What are you dressing for?</label><input class="input" id="planner-event-title" name="title" value="${escapeMarkup(d.title || "Client presentation at 10, dinner after work")}" placeholder="e.g. Client presentation at 10, dinner after work" required></div><div class="row"><div class="field grow"><label for="planner-event-date">Date</label><input class="input" id="planner-event-date" name="date" type="date" value="${escapeMarkup(d.date || new Date().toISOString().slice(0, 10))}"></div><div class="field grow"><label for="planner-event-time">Time</label><input class="input" id="planner-event-time" name="time" type="time" value="${escapeMarkup(d.time || "10:00")}"></div></div><div class="field"><label for="planner-event-occasion">Occasion / dress code</label><select class="input" id="planner-event-occasion" name="occasion">${["Work", "Dinner", "Weekend", "Travel", "Special occasion"].map((x) => `<option value="${x}" ${d.occasion === x ? "selected" : ""}>${x}</option>`).join("")}</select></div><details class="card progressive-card" style="margin-top:8px"><summary><b>More details</b><span class="small">Daypart · location · notes</span></summary><div class="stack" style="margin-top:12px"><div class="field"><label for="planner-event-daypart">Daypart</label><select class="input" id="planner-event-daypart" name="daypart"><option value="">Choose daypart</option>${["Morning", "Afternoon", "Evening", "All day"].map((x) => `<option value="${x}" ${d.daypart === x ? "selected" : ""}>${x}</option>`).join("")}</select></div><div class="field"><label for="planner-event-location">Location</label><input class="input" id="planner-event-location" name="location" value="${escapeMarkup(d.location || "")}" placeholder="e.g. Downtown · indoors"></div><div class="field"><label for="planner-event-weather">Weather</label><input class="input" id="planner-event-weather" name="weather" value="${escapeMarkup(d.weather || "")}" placeholder="e.g. 26°C · sunny"></div></div></details><button class="btn primary wide auth-primary" type="submit" style="margin-top:16px">${proactiveEditIndex !== null ? "Review event" : "Plan My Look"}</button></form>`,
    { active: "planner" },
  );
}
function plannerValidationScreen() {
  const d = plannerEventDraft,
    summary = [plannerDateLabel(d.date), d.time || d.daypart, d.occasion, d.title, d.location].filter(Boolean).join(" · ");
  return shell(
    "Review Event",
    `<p class="eyebrow">Planner · validation</p><h2 class="title">Check the event details</h2><p class="body">${plannerValidationErrors.length ? "A couple of details need attention before you choose a Look." : "The event is ready for a Look."}</p>${plannerValidationErrors.length ? `<div class="card" role="alert" style="margin-top:14px"><b>Update these details</b><ul>${plannerValidationErrors.map((error) => `<li>${escapeMarkup(error)}</li>`).join("")}</ul></div>` : `<div class="card" style="margin-top:14px"><p class="eyebrow">${plannerDateLabel(d.date)}</p><h3 class="title">${escapeMarkup(d.title || d.occasion)}</h3><p class="body">${escapeMarkup(summary)}</p></div>`}<div class="row" style="margin-top:16px"><button class="btn grow" onclick="editPlannerEvent()">Edit event</button><button class="btn primary grow" onclick="continuePlannerValidation()" ${plannerValidationErrors.length ? "disabled" : ""}>Choose a Look</button></div>`,
    { active: "planner" },
  );
}
function plannerLookChooser() {
  const choices = [...Object.values(tryOnLooks), ...(plannerLookChoice === "saved" ? [plannerLook("saved")] : [])], selected = plannerLook();
  return shell(
    "Choose a Look",
    `<p class="eyebrow">Planner · ${plannerDateLabel(plannerEventDraft.date)}</p><h2 class="title">Which Look should we plan?</h2><p class="body">Choose a prepared Look for ${escapeMarkup(plannerEventDraft.title || plannerEventDraft.occasion)}.</p><div class="item-grid" style="margin-top:16px">${choices.map((look) => `<button class="item-card ${look.id === selected.id ? "selected" : ""}" aria-pressed="${look.id === selected.id}" onclick="choosePlannerLook('${look.id}')"><img src="${look.sheet}" alt="${escapeMarkup(look.title)}"><span class="copy"><b>${escapeMarkup(look.title)}</b><small class="body">${escapeMarkup(look.context)}</small></span></button>`).join("")}</div><button class="btn primary wide" style="margin-top:16px" onclick="savePlannerEvent()">Save to Planner</button>`,
    { active: "planner" },
  );
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
    `<div class="card"><p class="eyebrow">Planner · private sharing</p><h2 class="title">Share selected plans only.</h2><p class="body">Your Closet, private photos, notes, and unselected dates stay private.</p><div class="field" style="margin-top:15px"><label for="calendar-share-link">Preview link</label><input class="input" id="calendar-share-link" value="styleiq.app/calendar/amelia" readonly></div><div class="row" style="margin-top:12px"><button class="btn grow" onclick="copyCalendarLink()">Copy link</button><button class="btn primary grow" onclick="toast('System share prepared')">Share</button></div><button class="text-action" style="margin-top:12px" onclick="toast('Only selected Planner dates are shared')">Review privacy</button></div>`,
    { active: "planner" },
  );
}
function copyCalendarLink() {
  navigator.clipboard?.writeText("https://styleiq.app/calendar/amelia").catch(() => {});
  toast("Calendar link copied");
}
function decorateProfileEntries() {
  if (currentId !== "L-01") return;
  const content = app.querySelector(".content");
  if (!content || content.querySelector("[aria-label='My content']")) return;
  content.insertAdjacentHTML("beforeend", `<section class="card" style="margin-top:12px" aria-label="My content"><p class="eyebrow">My Atelier</p><h3 class="title">My content</h3><p class="body">Your saved Looks and Trips in one place.</p><button class="btn wide" style="margin-top:10px" onclick="go('L-03')">Open My Content</button></section>`);
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
    `<div class="between"><div><p class="eyebrow">Your trips</p><h2 class="title">Upcoming</h2></div><button class="icon-btn" aria-label="Plan another trip" onclick="resetTrip()">${icon("plus")}</button></div><button class="item-card" style="width:100%;margin-top:14px;text-align:left" onclick="go('J-14')"><img src="${assets.look4}" style="height:220px" alt="Alexandria trip"><span class="copy"><span class="between"><span><b>${escapeMarkup((tripState.basics || tripDraft).destination)}</b><small class="body" style="display:block">${tripSummary()}</small></span><span class="pill green">Ready</span></span></span></button>`,
    { active: "profile" },
  );
}
function decorateWeeklyRecapEntry() {
  const content = app.querySelector(".content");
  if (!content) return;
  if (currentId === "C-01" && closetItemCount() > 0) {
    content
      .querySelector(".closet-toolbar")
      ?.insertAdjacentHTML(
        "beforebegin",
        `<button class="weekly-recap-hero" style="width:100%;height:128px;margin:10px 0 12px;border:0;padding:0" onclick="go('D-04')"><img src="${assets.look}" alt="Soft tailoring inspiration" style="object-position:center 42%"><span style="left:9px;right:auto;bottom:9px;padding:7px 9px"><b style="font-size:9px">Style what you own</b></span></button>`,
      );
    return;
  }
  if (currentId !== "L-01") return;
  content.insertAdjacentHTML(
    "beforeend",
    `<button class="signal-card" style="width:100%;margin-top:12px" onclick="openLightweightPanel('plannerInsights')"><img src="${assets.look3}" alt="Weekly style recap" style="width:58px;height:68px;border-radius:12px;object-fit:cover"><span class="grow"><p class="eyebrow">Your week in clothes</p><b>5 outfits · 14 pieces used</b><small class="body" style="display:block">See what worked and prepare next week.</small></span><span>›</span></button>`,
  );
}
function mirrorDiscover() {
  const filters = ["For You", "Following", "COS", "Toteme", "Loro Piana"],
    items = [
      { id: "coffee", creator: "Camille", title: "Tailored ease", brand: "COS" },
      { id: "evening", creator: "Noor", title: "Coffee meeting", brand: "Toteme" },
      { id: "tailoring", creator: "Mara", title: "Weekend layers", brand: "Loro Piana" },
    ],
    visible = items.filter((item) => ["For You", "Top This Week"].includes(discoverFilter) || (discoverFilter === "Following" ? communityFollowed : item.brand === discoverFilter));
  const creatorPreviews = creatorDataset
    .flatMap((c) => c.looks.slice(0, 1).map((l) => ({ ...l, creator: c })))
    .slice(0, 4);
  return shell(
    "Discover",
    `<button class="mirror-search" onclick="go('K-02')">${icon("search")} Search outfits, Stylists, or pieces</button><div class="mirror-filters" role="group" aria-label="Discover filters">${filters.map((x) => `<button class="mirror-filter ${discoverFilter === x ? "active" : ""}" aria-pressed="${discoverFilter === x}" onclick="setDiscoverFilter('${x}')">${x}</button>`).join("")}<button class="text-action" onclick="clearDiscoverFilter()">Clear</button></div><section class="mirror-section creator-insp-module" aria-label="Stylist inspiration"><div class="mirror-section-head"><span><p class="eyebrow">Stylist Inspiration</p><h3>Looks worth making your own</h3></span><button class="text-action" onclick="go('H-11')">Explore Stylists →</button></div><div class="mirror-outfit-rail">${creatorPreviews.map((look) => `<button class="mirror-outfit-card" onclick="openCreatorLook('${look.id}')"><img src="${look.image}" alt="${escapeMarkup(look.title)}"><span><small>${escapeMarkup(look.creator.name)}</small><b>${escapeMarkup(look.title)}</b></span></button>`).join("")}</div></section><section class="mirror-section"><div class="mirror-section-head"><span><p class="eyebrow">${discoverFilter}</p><h3>${visible.length ? "Outfits for you" : "Nothing here yet"}</h3></span><small class="body">${visible.length} Looks</small></div>${visible.length ? `<div class="mirror-outfit-rail">${visible.map((item, index) => `<button class="mirror-outfit-card" onclick="openCommunityLook('${item.id}')"><img src="${assets[["look3", "look2", "look4"][index]]}" alt="${escapeMarkup(item.title)}"><span><small>${escapeMarkup(item.creator)}</small><b>${escapeMarkup(item.title)}</b></span></button>`).join("")}</div>` : `<div class="empty"><p class="body">Follow Camille to see community Looks here.</p><button class="btn" onclick="setDiscoverFilter('For You')">Show For You</button></div>`}</section>`,
    { active: "discover" },
  );
}
function openProfileTwin() {
  if (twinSetup.complete) { clearPendingTryOn(); go('H-01'); }
  else startTryOn('saved', { sourceType: 'profile' });
}
function newCustomerProfile() {
  return shell(
    "My Atelier",
    `<header class="mirror-profile-head"><img src="${assets.profile}" alt="Amelia Hart"><span><p class="eyebrow">My Style Profile</p><h2>Amelia Hart</h2><small class="body">Your style profile will learn as you use StyleIQ.</small></span><button class="mirror-circle-action" onclick="go('M-01')" aria-label="Ask Muse">${icon("spark")}</button></header><section class="empty image-first-empty profile-first-state"><div><div class="empty-art"><img src="${assets.blazer}" alt="A first wardrobe piece"></div><p class="eyebrow">Start your Atelier</p><h2 class="title">Your profile grows from your real wardrobe.</h2><p class="body">Add one piece to unlock Closet-based Looks, or create your private Style Twin when you want to preview an outfit.</p><button class="btn primary wide" onclick="go('B-01')">Add your first item</button><button class="btn wide" style="margin-top:8px" onclick="openProfileTwin()">Create private preview</button></div></section><div class="profile-utility-grid"><button class="profile-utility" onclick="setClosetTab('wishlist')"><img src="${assets.shoes}" alt="Wishlist"><b>Wishlist</b><small>Save pieces to review later</small></button><button class="profile-utility" onclick="openProfileTwin()"><img src="${assets.profile}" alt="Style Twin"><b>Style Twin</b><small>Not created yet</small></button></div>`,
    { active: "profile" },
  );
}
function mirrorProfile() {
  if (!isExistingCustomer()) return newCustomerProfile();
  return shell(
    "My Atelier",
    `<header class="mirror-profile-head"><img src="${assets.profile}" alt="Amelia Hart"><span><p class="eyebrow">My Style Profile</p><h2>Amelia Hart</h2><small class="body">Relaxed tailoring · warm neutrals</small></span><button class="mirror-circle-action" onclick="go('M-01')" aria-label="Ask Muse">${icon("spark")}</button></header><section class="mirror-section"><div class="mirror-section-head"><span><p class="eyebrow">My Looks</p><h3>Outfits I return to</h3></span><button onclick="go('G-01')">View All</button></div><div class="mirror-outfit-rail"><button class="mirror-outfit-card" onclick="go('G-02')"><img src="${assets.look}" alt="Work outfit"><span><small>Work</small><b>Saved</b></span></button><button class="mirror-outfit-card" onclick="go('G-02')"><img src="${assets.look2}" alt="Dinner outfit"><span><small>Dinner</small><b>Worn Tue</b></span></button><button class="mirror-outfit-card" onclick="go('J-14')"><img src="${assets.look4}" alt="Weekend outfit"><span><small>Weekend</small><b>Planned</b></span></button></div></section><section class="mirror-profile-preview"><p class="eyebrow">My Closet</p><h3 class="title" style="font-size:20px">Start with what you own</h3><div class="profile-closet-row"><img src="${assets.blazer}" alt="Camel blazer"><span><b>Camel blazer</b><small class="body" style="display:block">1 owned piece</small></span><button class="btn small-btn" onclick="go('D-04')">Style</button></div></section><div class="profile-utility-grid"><button class="profile-utility" onclick="setClosetTab('wishlist')"><img src="${assets.shoes}" alt="Wishlist"><b>Wishlist</b><small>Pieces under review</small></button><button class="profile-utility" onclick="openProfileTwin()"><img src="${assets.profile}" alt="Style Twin"><b>Style Twin</b><small>Optional private try-on</small></button></div>`,
    { active: "profile" },
  );
}
const storedTwinSetup = readTryOnState("styleiqTwinSetupV2");
let twinSetup = (storedTwinSetup?.complete || requestedCustomerScenario === "existing")
  ? { id: storedTwinSetup?.id || "demo-existing-twin", method: storedTwinSetup?.method || "photo", step: 4, complete: true }
  : storedTwinSetup && !storedTwinSetup.complete
    ? storedTwinSetup
    : { method: "photo", step: 1, complete: false };

// Look formula + renderer manifest. Production renderers can supply per-Twin assets here.
const tryOnLooks = {
  coffee: {
    id: "coffee",
    title: "Coffee Meeting",
    context: "18°C · Office · Rain later",
    sheet: peoplePhotos.womanFashion,
    remote: true,
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
    sheet: peoplePhotos.womanStreet,
    remote: true,
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
    sheet: peoplePhotos.womanEditorial,
    remote: true,
    row: 0,
    reference: true,
    pieces: [
      ["Dress", "Washed black asymmetric mini dress", null],
      ["Shoes", "Black knee-high heeled boots", null],
    ],
  },
};
function tryOnLookFor(id) {
  if (id === "saved") {
    return typeof savedLookRecord === "function" ? savedLookRecord() : tryOnLooks.tailoring;
  }
  return tryOnLooks[id];
}
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
if (pendingTryOn?.intent !== "tryOn" || !(pendingTryOn?.selectedLook?.pieces || tryOnLookFor(pendingTryOn?.lookId)))
  pendingTryOn = null;
if (!(tryOnSession?.selectedLook?.pieces || tryOnLookFor(tryOnSession?.lookId))) tryOnSession = null;
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
function startTryOn(id = selectedTodayLook, options = {}) {
  if (typeof id === "object") {
    options = id;
    id = options.lookId || selectedTodayLook;
  }
  const look = options.lookData || tryOnLookFor(id);
  if (!look) return;
  pendingTryOn = {
    intent: "tryOn",
    lookId: look.id,
    sourceScreen: options.sourceScreen || currentId,
    sourceType: options.sourceType || "look",
    origin: options.sourceScreen || currentId,
    returnTo: options.returnScreen || options.sourceScreen || currentId,
    selectedLook: JSON.parse(JSON.stringify(look)),
    ...(options.closetItemId ? { closetItemId: options.closetItemId } : {}),
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
  navHistory = navHistory.filter(
    (id) => !id.startsWith("H-") || ["H-11", "H-12", "H-13"].includes(id),
  );
  go("E-06", { record: false });
}
function completeTwinSetup() {
  twinSetup.step = 3;
  twinSetup.complete = true;
  customerScenario = "existing";
  syncCustomerScenarioUrl();
  persistTwin();
  if (pendingTryOn) {
    continueTryOnFromTwin();
  } else {
    go("H-10");
  }
}
function leaveTryOn() {
  const session = tryOnSession;
  const target = session?.returnTo || "D-02";
  if (session?.sourceScreen === "D-02" && tryOnLooks[session.lookId]) {
    selectedTodayLook = session.lookId;
    localStorage.setItem("styleiqTodayLookV1", selectedTodayLook);
  }
  clearPendingTryOn();
  navHistory = navHistory.filter(
    (id) =>
      (!id.startsWith("H-") || ["H-11", "H-12", "H-13"].includes(id)) &&
      id !== "E-06",
  );
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
  if (tryOnSession?.sourceType === "creator-look") {
    currentId = "F-01";
    location.hash = "F-01";
    render();
    return;
  }
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

const scenarioScreenGroups = {
  entry: new Set(["S-00"]),
  today: new Set(["D-02"]),
  closet: new Set(["C-01"]),
  profile: new Set(["L-01"]),
  twin: new Set(["A-07", "E-05", "H-01", "K-05", "L-09"]),
};
function customerScenarioContext(id) {
  const group = Object.entries(scenarioScreenGroups).find(([, ids]) => ids.has(id))?.[0];
  if (!group) return null;
  return {
    entry: ["Entry flow", "Sign up + onboarding", "Open Today", "Splash opens the flow selected here."],
    today: ["Today state", "Empty first-day view", "Personalized Looks", "Preview the empty and populated Today experiences."],
    closet: ["Closet state", "No items yet", "Wardrobe ready", "Preview the empty and populated Closet experiences."],
    profile: ["Profile state", "Getting started", "Profile populated", "Preview the first-use and established Profile views."],
    twin: ["Style Twin flow", "No Style Twin yet", "Style Twin ready", "Open setup or manage the completed Twin."],
  }[group];
}
function customerScenarioControls(id) {
  const context = customerScenarioContext(id);
  if (!context) return "";
  const [label, newDetail, existingDetail, description] = context;
  return `<fieldset class="twin-demo-controls customer-scenario-controls"><legend>${label} · customer scenario</legend><div class="twin-demo-options" role="group" aria-label="Customer scenario"><button aria-pressed="${!isExistingCustomer()}" onclick="setCustomerScenario('new')"><b>New customer</b><small>${newDetail}</small></button><button aria-pressed="${isExistingCustomer()}" onclick="setCustomerScenario('existing')"><b>Existing customer</b><small>${existingDetail}</small></button></div><p>${description}</p></fieldset>`;
}
function setCustomerScenario(scenario) {
  if (!["new", "existing"].includes(scenario)) return;
  customerScenario = scenario;
  syncCustomerScenarioUrl();
  closetState.size = scenario === "existing" ? 12 : 0;
  if (scenario === "new")
    twinSetup = { method: "photo", step: 1, complete: false };
  else twinSetup = { id: "demo-existing-twin", method: "photo", step: 4, complete: true };
  if (scenario === "new") pendingTryOn = null;
  tryOnSession = null;
  navHistory = navHistory.filter(
    (id) =>
      (!id.startsWith("H-") || ["H-11", "H-12", "H-13"].includes(id)) &&
      id !== "E-06",
  );
  if (scenario === "existing" && pendingTryOn) {
    resumeTryOn();
  } else if (
    (currentId.startsWith("H-") &&
      !["H-11", "H-12", "H-13"].includes(currentId)) ||
    ["L-09", "E-05", "E-06"].includes(currentId)
  ) {
    if (currentId === "H-01") render();
    else go("H-01", { record: false });
  } else render();
}
// Backward-compatible name for older prototype links. The implementation is
// now the general customer switch rather than a Twin/cache switch.
function setTwinCustomerScenario(scenario) {
  setCustomerScenario(scenario);
}
function continueTryOnFromTwin() {
  if (pendingTryOn) return resumeTryOn();
  startTryOn(selectedTodayLook, { sourceType: "style-twin" });
}
function twinManagement() {
  const hasPending = Boolean(pendingTryOn);
  return shell(
    "Style Twin",
    `<p class="eyebrow">Private · Ready to use</p><h2 class="title">Your Style Twin</h2><div class="studio-live-preview"><img src="${assets.body}" alt="Your completed Style Twin, full body" style="display:block;width:100%;height:340px;object-fit:contain"></div><p class="body">Your Style Twin is ready. ${hasPending ? "Resume the Look you were trying on, or refine your Twin." : "Try different Looks or refine your Twin without repeating setup."}</p><div class="stack" style="margin-top:16px"><button class="btn primary wide" onclick="continueTryOnFromTwin()">${hasPending ? "Resume Try-On" : "Try a Look"}</button><button class="btn wide" onclick="go('H-07')">Refine Style Twin</button><button class="btn wide" onclick="canvasState.mode='avatar';persist();go('F-01')">Use in Studio</button><button class="text-action" onclick="go('L-01')">Back to Profile</button></div>`,
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
  return `<div class="twin-step-bar" aria-label="Style Twin setup progress"><span class="${step >= 1 ? "on" : ""}">1 · Reference</span><span class="${step >= 2 ? "on" : ""}">2 · Details</span><span class="${step >= 3 ? "on" : ""}">3 · Result</span></div>`;
}
function canonicalTwinIntro() {
  if (twinSetup.complete) return twinManagement();
  const manual = twinSetup.method === "manual" || currentId === "H-05";
  const primaryCta = manual
    ? `<button class="btn primary wide" onclick="twinSetup.step=2;persistTwin();go('H-06')">Use this reference</button>`
    : `<button class="btn primary wide" onclick="twinSetup.step=2;persistTwin();go('H-06')">Continue to details</button>`;
  const altCta = manual
    ? `<button class="btn wide" style="margin-top:8px" onclick="twinSetup.method='photo';persistTwin();go('H-01')">Switch to photo references</button>`
    : `<button class="btn wide" style="margin-top:8px" onclick="twinSetup.method='manual';persistTwin();go('H-05')">Create without personal photos</button>`;
  return shell(
    "Create Style Twin",
    `${twinStepBar(1)}<div class="mirror-upload-intro"><p class="eyebrow">Step 1 of 3 · Style Twin reference</p><h2>Create your Style Twin</h2><p class="body">Add your face and body reference photos, or create using measurements without personal photos.</p></div>${!manual ? `<div class="twin-reference-pair" style="margin-top:14px"><button class="mirror-upload-guide" type="button" onclick="toast('Face photo selected')"><img src="${assets.face}" alt="Face photo reference"><span>Face photo · ready</span></button><button class="mirror-upload-guide" type="button" onclick="toast('Body photo selected')"><img src="${assets.body}" alt="Body photo reference"><span>Body photo · ready</span></button></div><p class="helper" style="margin-top:10px">Photos remain strictly private and are processed locally.</p><div class="row" style="margin-top:12px"><button class="btn grow" type="button" onclick="toast('Camera opened')">${icon("camera")} Take photo</button><button class="btn grow" type="button" onclick="toast('Library opened')">${icon("image-up")} Choose library</button></div>` : `<div class="card" style="margin-top:14px"><figure class="twin-editorial-visual"><img src="${assets.body}" alt="Basic no-photo reference"><figcaption>No personal photos · measurement mode</figcaption></figure></div>`}<div style="margin-top:14px">${primaryCta}${altCta}</div>`,
    { active: "profile", noNav: true },
  );
}
function twinReference(method = twinSetup.method) {
  return canonicalTwinIntro();
}
function twinBasicDetails() {
  const submitLabel = pendingTryOn ? "Create first preview" : "Create Style Twin";
  return shell(
    "Twin Details & Adjustments",
    `${twinStepBar(2)}<section class="siq-section twin-details-intro"><p class="eyebrow">Step 2 of 3</p><h2 class="title">Shape the reference, then refine only what matters.</h2><p class="body">Height and fit guide the first preview. Every fine-tuning choice stays optional.</p></section><section class="siq-section twin-core-fields" aria-labelledby="twin-core-title"><div class="siq-section-header"><div><h3 id="twin-core-title">Core details</h3><p>Used to keep proportions natural.</p></div></div><div class="siq-field field"><label for="twin-height-detail">Height</label><input id="twin-height-detail" class="siq-input input" value="168 cm" inputmode="decimal" aria-describedby="twin-height-help"><span class="siq-description helper" id="twin-height-help">Use centimetres or feet and inches.</span></div><div class="siq-field field"><label for="twin-fit">Fit reference</label><select id="twin-fit" class="siq-select input" aria-describedby="twin-fit-help"><option>Regular</option><option>Relaxed</option><option>Fitted</option></select><span class="siq-description helper" id="twin-fit-help">Choose how your everyday clothes usually sit.</span></div></section><details class="siq-disclosure twin-refinement"><summary><span><b>Fine-tune my Twin</b><small>Pose, tuck and appearance</small></span><span class="siq-disclosure-indicator" aria-hidden="true">⌄</span></summary><div class="siq-disclosure-content"><div class="siq-value-row"><span>Pose</span><strong>Standing relaxed</strong></div><div class="siq-value-row"><span>Tuck</span><strong>Front tuck · natural</strong></div><div class="siq-value-row"><span>Appearance</span><strong>Warm neutral reference</strong></div></div></details><button class="siq-button siq-button--primary btn primary wide twin-create-cta" onclick="completeTwinSetup()">${submitLabel}</button>`,
    { active: "profile", noNav: true },
  );
}
function twinResult() {
  const hasPending = Boolean(pendingTryOn);
  return shell(
    "Style Twin Result",
    `${twinStepBar(3)}<figure class="twin-editorial-visual twin-preview"><img src="${hasPending ? assets.look3 : assets.look}" alt="Style Twin preview"><figcaption>Prototype visualization · private</figcaption></figure><p class="eyebrow" style="margin-top:16px">Step 3 of 3 · Your Style Twin</p><h2 class="title">Your Style Twin is ready.</h2><p class="body">${hasPending ? "Showing your originating outfit on your Twin." : "Use your Twin across Studio, Today, and Saved Looks."}</p><div class="stack" style="margin-top:16px"><button class="btn primary wide" onclick="${hasPending ? "continueTryOnFromTwin()" : "canvasState.mode='avatar';persist();go('F-01')"}">${hasPending ? "Try This Look" : "Use in Studio"}</button><button class="btn wide" onclick="go('H-06')">Adjust Twin</button><button class="btn wide" onclick="go('D-02')">Done</button></div>`,
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
  const record = savedLookRecord(),
    tabs = [["overview", "Overview"], ["items", "Items"], ["details", "Why it works"], ["activity", "Activity"], ["planning", "Planning"]],
    tabBar = `<div class="chips" role="tablist" aria-label="Saved Look sections" style="margin-top:14px">${tabs.map(([id, label]) => `<button class="chip ${savedLookTab === id ? "active" : ""}" role="tab" aria-selected="${savedLookTab === id}" onclick="setSavedLookTab('${id}')">${label}</button>`).join("")}</div>`;
  const overview = `<section class="card" style="margin-top:14px"><p class="eyebrow">Why this Look works</p><h3 class="title">A repeatable ${escapeMarkup(record.title)} formula.</h3><p class="body">The silhouette, palette, and proportions fit your saved preferences. Keep it ready for the next day it earns.</p><div class="row" style="margin-top:12px"><button class="btn grow" onclick="markSavedLookWorn()">${savedLookWorn ? "Worn today" : "Wear"}</button><button class="btn grow" onclick="startTryOn('saved', { sourceType: 'saved-look' })">Try On</button></div></section>`;
  const items = `<section class="card" style="margin-top:14px"><div class="between"><b>${record.pieces.length} pieces in this Look</b><button class="text-action" onclick="go('F-01')">Edit copy</button></div>${record.pieces.map((piece) => `<div class="pack-row"><img src="${piece[2] || assets.look}" alt="${escapeMarkup(piece[1])}"><span><b>${escapeMarkup(piece[1])}</b><small class="body">${escapeMarkup(piece[0])} · ${piece[2] ? "From Closet" : "Suggested"}</small></span></div>`).join("")}</section>`;
  const savedEntry =
    lookCatalog.find((look) => look.title === selectedSavedLookId) || {};
  const attribution =
    savedEntry.creatorAttribution ||
    (savedEntry.title === canvasState.title
      ? canvasState.creatorAttribution
      : null);
  const details = `<section class="card" style="margin-top:14px"><p class="eyebrow">${lookSourceLabel(savedEntry.creationSource)}${attribution ? ` · Inspired by ${escapeMarkup(attribution)}` : ""}</p><h3 class="title">Made for repeat wear</h3><p class="body">${escapeMarkup(record.context)}. Warm neutrals and a clean layer keep the Look useful across work and social plans.</p><div class="saved-look-meta"><span>Office</span><span>Spring / autumn</span><span>Neutral palette</span></div></section>`;
  const activity = `<section class="card" style="margin-top:14px"><p class="eyebrow">Recent activity</p><h3 class="title">Your relationship with this Look</h3><div class="item-metrics"><span class="item-metric"><b>${savedLookWorn ? "1×" : "0×"}</b><small>Worn recently</small></span><span class="item-metric"><b>7</b><small>Restyles</small></span><span class="item-metric"><b>11</b><small>Private sends</small></span></div></section>`;
  const planning = `<section class="card" style="margin-top:14px"><p class="eyebrow">Planning</p><h3 class="title">Keep this Look in your rotation.</h3><p class="body">Add the selected Saved Look to a Planner event without losing its source context.</p><button class="btn primary wide" style="margin-top:12px" onclick="planSavedLook()">Add to Planner</button></section>`;
  const body = { overview, items, details, activity, planning }[savedLookTab] || overview;
  return shell(
    "Saved Look",
    `${savedLookMediaSurface(record)}<div class="between" style="margin-top:14px"><span><p class="eyebrow">Saved Look</p><h2 class="title">${escapeMarkup(record.title)}</h2><p class="body">${escapeMarkup(record.context)}</p></span><button class="icon-btn" aria-label="Manage this Look" onclick="openLightweightPanel('lookManage')">${icon("more")}</button></div>${tabBar}${body}`,
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
  canvasState.creatorAttribution = null;
  canvasState.lookFormula = null;
  canvasState.sourceLookId = null;
  studioSourceContext = null;
  creatorReferenceContext = null;
  persist();
  currentId = "F-01";
  location.hash = "F-01";
  render();
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
function normalizeStudioRole(piece = {}) {
  const source = String(piece.role || piece.category || "Accessory").trim().toLowerCase();
  if (["top", "tops", "shirt", "shirts", "blouse", "blouses", "knitwear"].includes(source)) return "Top";
  if (["bottom", "bottoms", "trouser", "trousers", "pants", "skirt", "skirts", "shorts"].includes(source)) return "Bottom";
  if (["outerwear", "layer", "layers", "jacket", "jackets", "coat", "coats"].includes(source)) return "Outerwear";
  if (["shoe", "shoes", "footwear", "loafer", "loafers", "sneaker", "sneakers"].includes(source)) return "Shoes";
  if (["bag", "bags", "handbag", "handbags"].includes(source)) return "Bag";
  if (["dress", "dresses", "dress & suit", "dresses & suits", "suit", "suits"].includes(source)) return "Dress";
  return "Accessory";
}
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
  if (Number.isInteger(piece.instantVariant) && instantWardrobe[piece.accessoryType || piece.role])
    return instantWardrobeArt(piece.accessoryType || piece.role, piece.instantVariant);
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
  canvasState.items = canvasState.items.map((piece) => ({ ...piece, role: normalizeStudioRole(piece) }));
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
  return `<div class="studio-piece-rail" aria-label="Piece alternatives">${candidates.map((piece) => `<div class="studio-shopping-option"><button class="studio-piece-option" aria-label="Choose ${escapeMarkup(piece.name)}" aria-pressed="${selected?.name === piece.name}" onclick="chooseStudioCandidate('${piece.key}')">${studioPieceArt(piece)}${selected?.name === piece.name ? `<span class="studio-selected-check">${icon("check")}</span>` : ""}<b>${escapeMarkup(piece.name)}</b><small>${piece.owned ? "Owned" : "Suggested"}${selected?.name === piece.name ? " · Selected" : ""}</small></button>${wishlistHeart(shoppingProductForPiece(piece))}</div>`).join("")}${candidates.length ? "" : '<p class="body">No pieces match. Try another source or category.</p>'}</div>`;
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
// Registered demo photography keeps each wardrobe row independently interactive.
const instantWardrobe = {
  Top: ['Ivory cotton shirt', 'Rust square-neck knit', 'Black silk shell', 'Blue cotton shirt'],
  Bottom: ['Black tailored trousers', 'Cream wide-leg trousers', 'Charcoal trousers', 'Straight blue jeans'],
  Shoes: ['Tan suede loafers', 'White sneakers', 'Black ankle boots', 'Black ballet flats'],
  Outerwear: ['Black open blazer', 'Camel open blazer', 'Blue denim jacket', 'Olive utility jacket'],
  Dress: ['Black midi dress', 'Sage A-line dress', 'Burgundy wrap dress', 'Ivory midi dress'],
  Glasses: ['Black sunglasses', 'Tortoiseshell cat-eye glasses', 'Gold aviator glasses'],
  Earrings: ['Gold hoop earrings', 'Pearl stud earrings', 'Silver drop earrings'],
  Watch: ['Silver bracelet watch', 'Tan leather watch', 'Black leather watch'],
};
const instantLabels = { Top:'Tops', Bottom:'Bottoms', Shoes:'Shoes', Outerwear:'Jackets', Dress:'Dresses', Glasses:'Sunglasses', Earrings:'Earrings', Watch:'Watches' };
const instantAccessoryRoles = ['Glasses', 'Earrings', 'Watch'];
const instantOptionalRoles = ['Outerwear', 'Dress', ...instantAccessoryRoles];
function instantPieceMatches(piece, role) {
  return instantAccessoryRoles.includes(role)
    ? piece.role === 'Accessory' && (piece.accessoryType === role || instantWardrobe[role].includes(piece.name))
    : piece.role === role;
}
function instantWardrobeIndex(role) {
  const piece = canvasState.items.find(x => instantPieceMatches(x, role) && x.visible !== false);
  const exact = instantWardrobe[role].indexOf(piece?.name);
  if (exact >= 0) return exact;
  if (instantOptionalRoles.includes(role)) return -1;
  const name = piece?.name?.toLowerCase() || '';
  if (/rust|cream|wide-leg|sneaker/.test(name)) return 1;
  if (/shell|charcoal|boot/.test(name)) return 2;
  if (/blue|jeans|flat/.test(name)) return 3;
  return 0;
}
function instantWardrobeArt(role, index) {
  return `<span class="instant-piece-art art-${role.toLowerCase()}" style="--variant:${index}" aria-hidden="true"></span>`;
}
// Photographed poses are whole outfits. Never splice their differently placed limbs.
function instantPoseLook() {
  if (['Outerwear', ...instantAccessoryRoles].some(role => instantWardrobeIndex(role) >= 0)) return -1;
  const dress = instantWardrobeIndex('Dress');
  if (dress >= 0) return dress === 0 && instantWardrobeIndex('Shoes') === 2 ? 4 : -1;
  const index = instantWardrobeIndex('Top');
  return ['Bottom', 'Shoes'].every(role => instantWardrobeIndex(role) === index) ? index : -1;
}
function instantPoseChoices() {
  const look = instantPoseLook();
  return look === 0 || look === 4 ? ['Front', 'Step forward', 'Side', 'Back', 'Step back'] : look > 0 ? ['Front', 'Editorial pose'] : ['Front'];
}
function applyInstantPoseLook(index) {
  if (!Number.isInteger(index) || index < 0 || index > 4) return;
  for (const role of instantOptionalRoles) setInstantPiece(role, -1);
  if (index === 4) {
    const separates = canvasState.items.filter(x => ['Top', 'Bottom'].includes(x.role));
    if (separates.length) canvasState.instantSeparates = separates.map(x => ({...x}));
    canvasState.items = canvasState.items.filter(x => !['Top', 'Bottom'].includes(x.role));
    setInstantPiece('Dress', 0);
    setInstantPiece('Shoes', 2);
  } else {
    for (const role of ['Top', 'Bottom', 'Shoes']) setInstantPiece(role, index);
  }
  canvasState.photoPose = 1;
  persist();
  refreshInstantWardrobe();
  app.querySelectorAll('.instant-rail').forEach(rail => centerInstantRail(rail));
  app.querySelector('.instant-announcement').textContent = 'Complete look selected. Model pose views are available.';
}
function setInstantPose(index) {
  canvasState.photoPose = Math.max(0, Math.min(instantPoseChoices().length - 1, index));
  refreshInstantWardrobe();
}
function instantPoseControls() {
  const choices = instantPoseChoices();
  const pose = Math.min(canvasState.photoPose || 0, choices.length - 1);
  return choices.length === 1 ? '<span class="instant-pose-note">Front view · Custom outfit</span>' : choices.map((name, index) => `<button aria-label="${name} view" aria-pressed="${pose === index}" onclick="setInstantPose(${index})">${name}</button>`).join('');
}
function instantJacketFitFilter() {
  // Warp only the shoulder/chest area. The collar and wrist positions stay anchored.
  const map = svg => `data:image/svg+xml,${encodeURIComponent(svg)}`;
  const horizontal = map('<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><defs><linearGradient id="x"><stop stop-color="#ff9280"/><stop offset="1" stop-color="#009280"/></linearGradient></defs><path fill="url(#x)" d="M0 0h256v256H0z"/></svg>');
  const falloff = map('<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><defs><linearGradient id="y" x2="0" y2="1"><stop stop-color="black"/><stop offset=".145" stop-color="black"/><stop offset=".195" stop-color="white"/><stop offset=".29" stop-color="#999999"/><stop offset=".46" stop-color="black"/><stop offset="1" stop-color="black"/></linearGradient></defs><path fill="url(#y)" d="M0 0h256v256H0z"/></svg>');
  return `<svg class="instant-fit-defs" aria-hidden="true" width="0" height="0"><defs><filter id="instant-shoulder-fit" x="0" y="0" width="100%" height="100%" primitiveUnits="objectBoundingBox" color-interpolation-filters="sRGB"><feImage href="${horizontal}" x="0" y="0" width="1" height="1" preserveAspectRatio="none" result="across"/><feImage href="${falloff}" x="0" y="0" width="1" height="1" preserveAspectRatio="none" result="strength"/><feComposite in="across" in2="strength" operator="arithmetic" k1="1" k2="0" k3="-0.5" k4="0.5" result="fit"/><feDisplacementMap in="SourceGraphic" in2="fit" scale=".28" xChannelSelector="R" yChannelSelector="G"/></filter></defs></svg>`;
}
function instantAvatarMarkup() {
  const dress = instantWardrobeIndex('Dress');
  const base = dress >= 0 ? ['Dress', 'Shoes'] : ['Bottom', 'Shoes', 'Top'];
  const worn = [...base, ...['Outerwear', ...instantAccessoryRoles].filter(role => instantWardrobeIndex(role) >= 0)];
  const jacket = instantWardrobeIndex('Outerwear');
  const chips = [...(dress >= 0 ? ['Dress', 'Shoes'] : ['Top', 'Bottom', 'Shoes']), ...['Outerwear', ...instantAccessoryRoles].filter(role => instantWardrobeIndex(role) >= 0)];
  const look = instantPoseLook();
  const pose = Math.min(canvasState.photoPose || 0, instantPoseChoices().length - 1);
  const complete = look >= 0 && pose > 0;
  const poseSheet = complete ? (look === 0 ? 'images/studio-walk-ivory.jpg' : look === 4 ? 'images/studio-walk-dress.jpg' : 'images/studio-avatar-poses.jpg') : 'images/studio-avatar-front.jpg';
  return `<div class="instant-avatar${jacket >= 0 ? ' has-jacket' : ''}" style="--avatar-sheet:url('${poseSheet}')" role="img" aria-label="${instantPoseChoices()[pose]} outfit preview: ${worn.map(role => instantWardrobe[role][instantWardrobeIndex(role)]).join(', ')}">
    ${complete ? `<span class="instant-avatar-layer layer-complete" style="--variant:${look === 0 || look === 4 ? pose - 1 : look}"></span>` : base.map(role => `<span class="instant-avatar-layer layer-${role.toLowerCase()}" style="--variant:${instantWardrobeIndex(role)}"></span>`).join('')}
    ${jacket >= 0 ? `${instantJacketFitFilter()}<span class="instant-jacket-fit"><span class="instant-jacket jacket-left jacket-variant-${jacket}" style="--variant:${jacket}"></span><span class="instant-jacket jacket-right jacket-variant-${jacket}" style="--variant:${jacket}"></span></span>` : ''}
    ${instantAccessoryRoles.filter(role => instantWardrobeIndex(role) >= 0).map(role => role === 'Earrings' ? ['left', 'right'].map(side => `<span class="instant-wearable wearable-earrings earring-${side}">${instantWardrobeArt(role, instantWardrobeIndex(role))}</span>`).join('') : `<span class="instant-wearable wearable-${role.toLowerCase()}">${instantWardrobeArt(role, instantWardrobeIndex(role))}</span>`).join('')}
  </div>${chips.map((role,index) => `<button class="instant-worn" style="--chip-row:${Math.floor(index / 2)};--chip-side:${index % 2}" aria-label="Change ${instantWardrobe[role][instantWardrobeIndex(role)]}" onclick="focusInstantCategory('${role}')">${instantWardrobeArt(role, instantWardrobeIndex(role))}</button>`).join('')}`;
}
function focusInstantCategory(role) {
  const row = app.querySelector(`[data-instant-role="${role}"]`);
  row?.scrollIntoView({block:'nearest', behavior:'instant'});
  row?.querySelector('[aria-pressed="true"]')?.focus({preventScroll:true});
}
function setInstantPiece(role, index) {
  const existing = canvasState.items.find(x => instantPieceMatches(x, role));
  canvasState.items = canvasState.items.filter(x => !instantPieceMatches(x, role));
  if (index < 0) return;
  const accessory = instantAccessoryRoles.includes(role);
  canvasState.items.push({ id: existing?.id || `${role}-${Date.now()}`, role: accessory ? 'Accessory' : role,
    ...(accessory ? {accessoryType:role} : {}), index, name: instantWardrobe[role][index], brand:'StyleIQ',
    image: `images/${accessory ? 'studio-accessories.png' : role === 'Outerwear' ? 'studio-jackets.png' : role === 'Dress' ? 'studio-dresses.jpg' : 'studio-avatar-front.jpg'}`,
    owned:false, visible:true, instantVariant:index });
}
function restoreInstantSeparates() {
  canvasState.items = canvasState.items.filter(x => !['Dress', 'Top', 'Bottom'].includes(x.role));
  for (const role of ['Top', 'Bottom']) {
    const saved = canvasState.instantSeparates?.find(x => x.role === role);
    if (saved) canvasState.items.push({...saved, visible:true});
    else setInstantPiece(role, 0);
  }
}
function refreshInstantWardrobe() {
  const dress = instantWardrobeIndex('Dress') >= 0;
  app.querySelector('.instant-avatar-stage').innerHTML = instantAvatarMarkup();
  app.querySelector('.instant-pose-controls').innerHTML = instantPoseControls();
  app.querySelector('.instant-dress-context').hidden = !dress;
  app.querySelectorAll('[data-instant-role]').forEach(row => {
    const role = row.dataset.instantRole, selected = instantWardrobeIndex(role);
    row.hidden = dress && ['Top', 'Bottom'].includes(role);
    row.querySelectorAll('.instant-option').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.index) === selected)));
    row.querySelector('.instant-row-choice').textContent = selected < 0 ? (role === 'Dress' ? 'Wear separates' : 'None') : instantWardrobe[role][selected];
  });
}
function animateInstantOutfit() {
  const stage = app.querySelector('.instant-avatar-stage');
  if (!stage) return;
  stage.classList.remove('is-posing');
  void stage.offsetWidth;
  stage.classList.add('is-posing');
  clearTimeout(stage._poseTimer);
  stage._poseTimer = setTimeout(() => stage.classList.remove('is-posing'), 180);
}
function chooseInstantPiece(role, index, center = true) {
  if (!instantWardrobe[role] || (index === -1 ? !instantOptionalRoles.includes(role) : !instantWardrobe[role][index])) return;
  const wasDress = instantWardrobeIndex('Dress') >= 0;
  if (role === 'Dress' && index >= 0) {
    if (!wasDress) {
      for (const separate of ['Top', 'Bottom']) setInstantPiece(separate, instantWardrobeIndex(separate));
      canvasState.instantSeparates = canvasState.items.filter(x => ['Top', 'Bottom'].includes(x.role)).map(x => ({...x}));
    }
    canvasState.items = canvasState.items.filter(x => !['Top', 'Bottom'].includes(x.role));
  } else if (wasDress && (['Top', 'Bottom'].includes(role) || (role === 'Dress' && index < 0))) restoreInstantSeparates();
  setInstantPiece(role, index);
  canvasState.photoPose = ((canvasState.photoPose || 0) + 1) % instantPoseChoices().length;
  persist();
  refreshInstantWardrobe();
  animateInstantOutfit();
  if (center) centerInstantRail(app.querySelector(`[data-instant-role="${role}"] .instant-rail`), true);
  app.querySelector('.instant-announcement').textContent = index < 0 ? `${instantLabels[role]} removed` : `${instantWardrobe[role][index]} selected`;
}
function centerInstantRail(rail, animate = false) {
  const selected = rail?.querySelector('[aria-pressed="true"]');
  if (!selected || !rail.clientWidth) return;
  rail._instantUserScroll = false;
  const itemRect = selected.getBoundingClientRect(), railRect = rail.getBoundingClientRect();
  rail.scrollTo({left:rail.scrollLeft + itemRect.left + itemRect.width / 2 - railRect.left - rail.clientWidth / 2,
    behavior:animate && !matchMedia('(prefers-reduced-motion: reduce)').matches ? 'smooth' : 'instant'});
}
let instantRailObserver;
function installInstantRailScrolling() {
  instantRailObserver?.disconnect();
  const rails = app.querySelectorAll('.instant-rail');
  if (!rails.length) return;
  instantRailObserver = new ResizeObserver(entries => entries.forEach(({target}) => centerInstantRail(target)));
  rails.forEach(rail => {
    const role = rail.closest('[data-instant-role]').dataset.instantRole;
    let timer, touching = false;
    const settle = () => {
      clearTimeout(timer);
      if (touching || !rail._instantUserScroll || !rail.isConnected || !rail.clientWidth) return;
      const middle = rail.getBoundingClientRect().left + rail.clientWidth / 2;
      const selected = [...rail.querySelectorAll('.instant-option')].reduce((nearest, button) => {
        const rect = button.getBoundingClientRect();
        const distance = Math.abs(rect.left + rect.width / 2 - middle);
        return !nearest || distance < nearest.distance ? {button, distance} : nearest;
      }, null);
      const index = Number(selected.button.dataset.index);
      rail._instantUserScroll = false;
      if (index !== instantWardrobeIndex(role)) chooseInstantPiece(role, index, false);
    };
    // Keep native touch momentum and vertical scrolling; debounce covers browsers without scrollend.
    const queueSettle = () => { clearTimeout(timer); timer = setTimeout(settle, 160); };
    rail.addEventListener('scroll', queueSettle, {passive:true});
    rail.addEventListener('scrollend', settle, {passive:true});
    rail.addEventListener('touchstart', () => { touching = true; rail._instantUserScroll = true; clearTimeout(timer); }, {passive:true});
    rail.addEventListener('wheel', event => {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY) || event.shiftKey) rail._instantUserScroll = true;
    }, {passive:true});
    const release = event => { touching = event.touches.length > 0; if (!touching) queueSettle(); };
    rail.addEventListener('touchend', release, {passive:true});
    rail.addEventListener('touchcancel', release, {passive:true});
    centerInstantRail(rail);
    instantRailObserver.observe(rail);
  });
}
function instantRailKey(event, role) {
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
  event.preventDefault(); event.stopPropagation();
  const buttons = [...event.currentTarget.querySelectorAll('button')];
  const index = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1
    : Math.max(0, Math.min(buttons.length - 1, buttons.indexOf(document.activeElement) + (event.key === 'ArrowRight' ? 1 : -1)));
  buttons[index].focus({preventScroll:true});
  chooseInstantPiece(role, Number(buttons[index].dataset.index));
}
function saveInstantLook() {
  persist();
  toast('Draft saved on this device');
}
function instantWardrobeRow(role, names) {
  const selected = instantWardrobeIndex(role), optional = instantOptionalRoles.includes(role);
  const hidden = instantWardrobeIndex('Dress') >= 0 && ['Top', 'Bottom'].includes(role);
  const choices = [...(optional ? [{index:-1, name:role === 'Dress' ? 'Wear separates' : `No ${instantLabels[role].toLowerCase()}`}] : []), ...names.map((name,index) => ({name,index}))];
  return `<section class="instant-row" data-instant-role="${role}" aria-label="${instantLabels[role]}" ${hidden ? 'hidden' : ''}>
    <div class="instant-row-heading"><h3>${instantLabels[role]}</h3><span class="instant-row-choice">${selected < 0 ? (role === 'Dress' ? 'Wear separates' : 'None') : names[selected]}</span></div>
    <div class="instant-rail" role="group" aria-label="${role} options" onkeydown="instantRailKey(event,'${role}')">${choices.map(({name,index}) => `<button class="instant-option" data-index="${index}" aria-label="${index < 0 ? name : `Try ${name}`}" aria-pressed="${selected === index}" onclick="chooseInstantPiece('${role}',${index})">${index < 0 ? '<span class="instant-none" aria-hidden="true">∅</span><span class="instant-none-label">None</span>' : instantWardrobeArt(role,index)}<span class="instant-selection-dot"></span></button>`).join('')}</div>
  </section>`;
}
function instantStudio() {
  return `<section class="screen studio-instant"><div class="content no-nav instant-content">
    <header class="instant-header"><button class="instant-icon-button" aria-label="Back" onclick="backScreen()">${icon('back')}</button><div><p>STYLE STUDIO</p><h2>${escapeMarkup(canvasState.title)}</h2></div><button class="instant-save" onclick="saveInstantLook()">Save draft</button></header>
    <div class="instant-avatar-stage">${instantAvatarMarkup()}</div>
    <div class="instant-pose-controls" role="group" aria-label="Model views">${instantPoseControls()}</div>
    <p class="instant-hint">Swipe sideways to try on · Scroll down for more</p>
    <section class="instant-wardrobe" aria-label="Choose your outfit">
    <div class="instant-dress-context" ${instantWardrobeIndex('Dress') < 0 ? 'hidden' : ''}><span>One-piece Look · Dress + shoes</span><button onclick="chooseInstantPiece('Dress',-1)">Wear separates</button></div>
    ${Object.entries(instantWardrobe).map(([role,names]) => instantWardrobeRow(role,names)).join('')}
    <section class="instant-pose-looks" aria-label="Complete looks with pose views"><h3>Complete looks with pose views</h3><p>Try a styled outfit, then explore its poses.</p><div>${['Ivory shirt', 'Rust knit', 'Black shell', 'Blue shirt', 'Black dress'].map((name,index) => `<button onclick="applyInstantPoseLook(${index})" aria-label="Try complete ${name} look">${instantWardrobeArt(index === 4 ? 'Dress' : 'Top', index === 4 ? 0 : index)}<span>${name}</span></button>`).join('')}</div></section>
    </section><div class="instant-footer"><span>Interactive outfit preview</span><button onclick="go('F-05')">Edit Look details ${icon('chevron-right')}</button></div>
    <span class="sr-only instant-announcement" role="status" aria-live="polite"></span>
  </div></section>`;
}
function canonicalStudio() {
  if (currentId === "F-01" && !studioSourceContext && (!canvasState?.items || canvasState.items.length === 0)) return studioStartState();
  const twin = canvasState.mode === "avatar",
    create = canvasState.studioMode === "create";
  const simpleActions = [
    ["Swap top", "Top"],
    ["Swap bottoms", "Bottom"],
    ["Swap shoes", "Shoes"],
    ["Add layer", "Outerwear"],
    ["Add accessory", "Accessory"],
  ];
  return `<section class="screen studio-canonical studio-canvas"><header class="screen-head"><button class="icon-btn" aria-label="Back" onclick="backScreen()">${icon("back")}</button><div class="screen-head-title"><h1>${escapeMarkup(canvasState.title || "Style Studio")}</h1></div><button class="btn small-btn primary studio-header-save studio-save" onclick="saveLook()">Save</button></header><div class="content no-nav"><div class="between studio-draft-row"><span class="small">Current draft</span><button class="text-action" onclick="newStudioLook()">New Look</button></div><div class="studio-experience-switch" role="group" aria-label="Studio mode"><button class="${create ? "" : "active"}" aria-pressed="${!create}" onclick="setStudioMode('simple')">${icon("spark")}<span><b>Simple</b><small>Everyday changes</small></span></button><button data-testid="studio-edit-look-details" class="${create ? "active" : ""}" aria-pressed="${create}" onclick="setStudioMode('create')">${icon("gear")}<span><b>Create</b><small>Advanced control</small></span></button></div><div class="studio-view-row"><div class="mirror-studio-tabs" role="group" aria-label="Preview view"><button class="${twin ? "active" : ""}" aria-pressed="${twin}" onclick="setMode('avatar')">${icon("user")}<span>On My Twin</span></button><button class="${twin ? "" : "active"}" aria-pressed="${!twin}" onclick="setMode('flat')">${icon("shirt")}<span>Flat Lay</span></button></div><button class="studio-avatar-action" onclick="go('H-01')">${icon(twinSetup.complete ? "user" : "user-round-plus")}<span>${twinSetup.complete ? "My Twin" : "Create Avatar"}</span></button></div>${studioRoutePanel()}${studioCreatorBanner()}${studioCreatorMatching()}${studioPreview()}${canvasState.items.length || ["F-06", "F-07", "F-08", "F-09", "F-10"].includes(currentId) ? studioPicker() : ""}${
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
  }${canvasState.lookFormula ? `<details class="tryon-studio-formula"><summary>Source Look · ${escapeMarkup(canvasState.lookFormula.title)}</summary><p>${canvasState.items.filter((x) => x.owned).length} of ${canvasState.items.length} roles matched to available Closet items.</p>${canvasState.items.map((x) => `<div>${escapeMarkup(x.name)} · ${x.owned ? "Closet match" : "Find an alternative"}</div>`).join("")}</details>` : ""}${canvasState.items.length ? `<section class="studio-simple-panel" aria-label="Use this Look"><p class="eyebrow">Use this Look</p><div class="studio-quick-jobs"><button onclick="go('I-04')">Add to Planner</button><button onclick="go('J-01')">Add to Trip</button><button onclick="startTryOn('coffee', { sourceType: 'studio' })">Try on</button></div></section>` : ""}</div>${studioLensMarkup()}</section>`;
}
function phaseOneCanonicalScreen(s) {
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
  if (s.id === "G-08") return myWishlist();
  if (s.id === "G-09") return wishlistDetail();
  if (s.id === "E-06") return tryOnResult();
  const phaseOne = phaseOneCanonicalScreen(s);
  if (phaseOne) return phaseOne;
  if (s.id === "D-02") return mirrorToday();
  if (s.id === "C-01") return scalableCloset();
  if (s.id === "C-02") return lifecycleItemDetail();
  if (["A-03", "A-04"].includes(s.id)) return onboarding({ ...s, id: "A-16" });
  if (["A-05", "A-09", "A-10"].includes(s.id)) return onboarding({ ...s, id: "A-02" });
  if (s.id === "A-06") return importScreen({ ...s, id: "B-01" });
  if (s.id === "A-11") return mirrorToday();
  if (s.id === "A-12") return importScreen({ ...s, id: "B-01" });
  if (s.id === "A-13") return scalableCloset();
  if (s.id === "A-14") return myLooksGrid();
  if (s.id === "A-15") return tripIntentScreen();
  if (s.id === "I-01") return mirrorPlanner();
  if (["I-02", "I-03", "I-06", "L-08"].includes(s.id)) return mirrorPlanner();
  if (s.id === "I-04") return plannerLookChooserOpen ? plannerLookChooser() : plannerValidationOpen ? plannerValidationScreen() : plannerEventForm();
  if (s.id === "I-05") return plannerValidationScreen();
  if (s.id === "J-01") return tripsList();
  if (s.id === "J-02") return tripIntentScreen();
  if (s.id === "J-03") return tripDetailsScreen();
  if (["J-04", "J-05", "J-06", "J-13"].includes(s.id)) return tripDetailsScreen();
  if (s.id === "J-07") return tripState.building ? buildingTripScreen() : tripReviewScreen();
  if (s.id === "J-08") return tripHub();
  if (s.id === "J-09") return tripPackingEditor();
  if (s.id === "J-14") return tripHub();
  if (s.id === "J-10") return tripHub("outfits");
  if (["J-11", "J-12"].includes(s.id)) return tripHub("days");
  if (s.id === "K-01") return mirrorDiscover();
  if (s.id === "K-03") return discoverFilterScreen();
  if (["K-04", "K-06"].includes(s.id)) return creatorLookDetail();
  if (s.id === "K-07") { communityPanel = "comments"; return creatorLookDetail(); }
  if (s.id === "K-08") { communityPanel = "report"; return creatorLookDetail(); }
  if (s.id === "K-05") return canonicalTwinIntro();
  if (s.id === "L-01") return mirrorProfile();
  if (s.id === "L-07") return myWishlist();
  if (s.id === "G-01") return myLooksGrid();
  if (s.section === "F") return canonicalStudio();
  if (["A-07", "H-01"].includes(s.id)) return canonicalTwinIntro();
  if (["A-08", "H-02", "H-03", "H-04"].includes(s.id))
    return twinReference("photo");
  if (s.id === "H-05") return twinReference("manual");
  if (s.id === "H-06") return twinBasicDetails();
  if (["H-07", "H-08", "H-09"].includes(s.id)) return twinRefine();
  if (s.id === "H-10") return twinResult();
  if (s.id === "L-09") return twinSetup.complete ? twinResult() : canonicalTwinIntro();
  if (s.id === "H-11") return creatorDiscoveryScreen();
  if (s.id === "H-12") return creatorProfileScreen();
  if (s.id === "H-13") return creatorLookDetailScreen();
  if (s.id === "B-02") return importScreen({ ...s, id: "B-01" });
  if (s.id === "B-03") return singlePhotoProcessing();
  if (s.id === "B-06" && batchImportActive && importConfidence !== "low")
    return batchReadyToConfirm ? batchImportSuccess() : batchImportReview();
  if (s.id === "B-08") return batchImportActive ? batchImportReview() : singleImportResult();
  if (s.id === "B-10") {
    lightweightPanel = "draftImports";
    return importScreen({ ...s, id: "B-01" });
  }
  if (s.id === "B-11") return batchImportActive ? batchImportSuccess() : shell("Added", `<section class="closet-success"><div class="success-icon-wrap"><span>${icon("check")}</span></div><p class="success-kicker">${icon("check")} Closet updated</p><h2>Added to your Closet</h2><p class="body">Your new piece is ready to style.</p><button class="btn primary wide" onclick="finishOnboardingClosetImport()">${localStorage.getItem("styleiqOnboardingClosetPendingV1") === "true" ? "Continue to Today" : "View updated Closet"}</button></section>`, { active: "closet" });
  if (["G-03", "G-04", "G-05", "G-06", "G-07"].includes(s.id)) {
    savedLookTab = { "G-03": "items", "G-04": "details", "G-05": "details", "G-06": "planning", "G-07": "activity" }[s.id];
    return leanSavedLook();
  }
  if (s.id === "G-02") return leanSavedLook();
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

let siqControlId = 0;
function siqEnsureControlLabel(control) {
  if (control.type === "hidden" || control.getAttribute("aria-label") || control.getAttribute("aria-labelledby")) return;
  const containingLabel = control.closest("label");
  const explicitLabel = control.id && app.querySelector(`label[for="${CSS.escape(control.id)}"]`);
  if (containingLabel || explicitLabel) return;
  if (!control.id) control.id = `siq-control-${++siqControlId}`;
  const label = document.createElement("label");
  label.className = "sr-only siq-generated-label";
  label.htmlFor = control.id;
  label.textContent = control.placeholder || control.name || (control.type === "search" ? "Search" : "Form field");
  control.before(label);
}
function siqEnhanceAutocomplete(input, options) {
  if (!input || input.dataset.siqAutocomplete === "true") return;
  input.dataset.siqAutocomplete = "true";
  input.classList.add("siq-autocomplete-input");
  input.setAttribute("role", "combobox");
  input.setAttribute("aria-autocomplete", "list");
  input.setAttribute("aria-expanded", "false");
  input.setAttribute("autocomplete", "off");
  const list = document.createElement("div");
  list.id = `${input.id || `siq-autocomplete-${++siqControlId}`}-listbox`;
  list.className = "siq-autocomplete-popover";
  list.setAttribute("role", "listbox");
  list.hidden = true;
  input.setAttribute("aria-controls", list.id);
  input.insertAdjacentElement("afterend", list);
  const close = () => {
    list.hidden = true;
    input.setAttribute("aria-expanded", "false");
    input.removeAttribute("aria-activedescendant");
  };
  const draw = () => {
    const query = input.value.trim().toLocaleLowerCase();
    const visible = options.filter((value) => value.toLocaleLowerCase().includes(query)).slice(0, 7);
    list.innerHTML = visible.length
      ? visible.map((value, index) => `<div role="option" id="${list.id}-option-${index}" tabindex="-1" aria-selected="false">${escapeMarkup(value)}</div>`).join("")
      : '<p class="siq-autocomplete-empty">No matching options</p>';
    list.hidden = false;
    input.setAttribute("aria-expanded", "true");
    list.querySelectorAll('[role="option"]').forEach((option) => option.addEventListener("mousedown", (event) => {
      event.preventDefault();
      input.value = option.textContent;
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.dispatchEvent(new Event("change", { bubbles: true }));
      close();
      input.focus();
    }));
  };
  input.addEventListener("focus", draw);
  input.addEventListener("input", draw);
  input.addEventListener("blur", () => setTimeout(close, 100));
  input.addEventListener("keydown", (event) => {
    const items = [...list.querySelectorAll('[role="option"]')];
    if (event.key === "Escape") { close(); return; }
    if (!["ArrowDown", "ArrowUp", "Enter"].includes(event.key) || !items.length) return;
    event.preventDefault();
    const activeId = input.getAttribute("aria-activedescendant");
    let index = items.findIndex((item) => item.id === activeId);
    if (event.key === "Enter" && index >= 0) { items[index].dispatchEvent(new MouseEvent("mousedown", { bubbles: true })); return; }
    index = event.key === "ArrowDown" ? Math.min(items.length - 1, index + 1) : Math.max(0, index < 0 ? items.length - 1 : index - 1);
    items.forEach((item, itemIndex) => item.setAttribute("aria-selected", String(itemIndex === index)));
    input.setAttribute("aria-activedescendant", items[index].id);
    items[index].scrollIntoView({ block: "nearest" });
  });
}
function applyStyleIQDesignSystem() {
  const screen = app.querySelector(".screen");
  if (!screen) return;
  screen.classList.add("siq-screen");
  app.querySelectorAll(".content").forEach((node) => node.classList.add("siq-content"));
  app.querySelectorAll(".screen-head,.root-head,.onboard-top,.instant-header").forEach((node) => {
    node.classList.add("siq-header");
    if (node.classList.contains("root-head")) node.classList.add("siq-header--root");
    if (screen.classList.contains("entry-screen") || screen.classList.contains("studio-canonical")) node.classList.add("siq-header--immersive");
  });
  app.querySelectorAll(".bottom-nav").forEach((node) => node.classList.add("siq-bottom-nav"));

  app.querySelectorAll("input,select,textarea").forEach((control) => {
    siqEnsureControlLabel(control);
    const parentField = control.closest(".field,.inline-edit-row,label");
    parentField?.classList.add("siq-field");
    if (control.matches("select")) control.classList.add("siq-select");
    else if (control.matches("textarea")) control.classList.add("siq-textarea");
    else if (control.closest(".otp")) control.classList.add("siq-otp-input");
    else if (control.type === "search" || /search/i.test(control.placeholder || "")) control.classList.add("siq-input", "siq-search-input");
    else control.classList.add("siq-input");
    if (control.disabled) control.setAttribute("aria-disabled", "true");
    const helper = parentField?.querySelector(".helper,.error,[role='alert']");
    if (helper && !helper.id) helper.id = `${control.id || `siq-control-${++siqControlId}`}-description`;
    if (helper) control.setAttribute("aria-describedby", helper.id);
  });

  app.querySelectorAll("button,.btn").forEach((button) => {
    button.classList.add("siq-button");
    if (button.classList.contains("primary") || button.classList.contains("gold")) button.classList.add("siq-button--primary");
    else if (button.classList.contains("danger") || button.classList.contains("danger-action")) button.classList.add("siq-button--danger");
    else if (button.classList.contains("text-action") || button.classList.contains("auth-inline-link") || button.classList.contains("auth-switch-action")) button.classList.add("siq-button--ghost");
    else button.classList.add("siq-button--secondary");
    if (button.classList.contains("icon-btn") || (button.getAttribute("aria-label") && !button.textContent.trim())) button.classList.add("siq-button--icon-only");
  });
  app.querySelectorAll(".chip,.mirror-filter,.pill").forEach((node) => node.classList.add("siq-chip"));
  app.querySelectorAll(".card,.signal-card,.profile-utility,.settings-list").forEach((node) => node.classList.add("siq-surface"));
  app.querySelectorAll(".item-card,.closet-item,.mirror-outfit-card,.mirror-feed-card").forEach((node) => node.classList.add("siq-card"));
  app.querySelectorAll("details").forEach((details, index) => {
    details.classList.add("siq-disclosure");
    const summary = details.querySelector(":scope > summary");
    const content = summary?.nextElementSibling;
    if (!summary) return;
    summary.setAttribute("aria-expanded", String(details.open));
    if (content) {
      if (!content.id) content.id = `siq-disclosure-${currentId}-${index}`;
      summary.setAttribute("aria-controls", content.id);
    }
    details.addEventListener("toggle", () => summary.setAttribute("aria-expanded", String(details.open)));
  });
  app.querySelectorAll(".sheet,.lightweight-sheet,.notifications-sheet,.lens-sheet").forEach((node) => node.classList.add("siq-drawer"));
  app.querySelectorAll(".modal,.wishlist-dialog").forEach((node) => node.classList.add("siq-modal"));
  app.querySelectorAll("[role='tablist'],.mirror-studio-tabs,.studio-experience-switch").forEach((node) => node.classList.add("siq-tabs"));
  app.querySelectorAll(".empty,.empty-state,.image-first-empty").forEach((node) => node.classList.add("siq-empty-state"));
  app.querySelectorAll(".contextual-insight,.muse-context-card,.creator-muse-card").forEach((node) => node.classList.add("siq-ai-panel"));
  app.querySelectorAll(".divider,hr").forEach((node) => node.classList.add("siq-divider"));

  siqEnhanceAutocomplete(app.querySelector("#trip-destination"), ["Alexandria", "Cairo", "Lisbon", "London", "Milan", "New York", "Paris", "Rome", "Tokyo"]);
  app.querySelectorAll('input[placeholder*="brand" i],input[placeholder*="product" i]').forEach((input) => siqEnhanceAutocomplete(input, ["Aritzia", "COS", "Everlane", "Massimo Dutti", "Reiss", "StyleIQ Atelier", "Toteme", "Uniqlo"]));

  const activeDialog = app.querySelector('[role="dialog"],[role="alertdialog"]');
  if (activeDialog && !activeDialog.matches("dialog:not([open])")) {
    const focusTarget = activeDialog.querySelector("[autofocus],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled])");
    if (focusTarget && !activeDialog.contains(document.activeElement)) requestAnimationFrame(() => focusTarget.focus({ preventScroll: true }));
    activeDialog.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !activeDialog.matches("dialog")) {
        event.preventDefault();
        if (activeDialog.classList.contains("lightweight-sheet")) closeLightweightPanel();
        else if (activeDialog.classList.contains("lens-sheet")) closeLens();
        else if (activeDialog.classList.contains("notifications-sheet")) closeNotifications();
        else closeOverlay();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = [...activeDialog.querySelectorAll('button:not([disabled]),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')];
      if (!focusable.length) return;
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });
  }
}
function renderNotes(s) {
  const managingTwin =
    twinSetup.complete && ["H-01", "H-10", "L-09", "E-05"].includes(s.id);
  const visibleScreen = screens.find((screen) => screen.id === getCanonicalScreen(s.id)) || screens[0];
  notes.innerHTML = `${customerScenarioControls(s.id)}<span class="phase-pill">Phase ${s.phase}</span><p class="eyebrow" style="margin-top:16px">${s.id} · ${sections[s.section]}</p><h2>${managingTwin ? "Style Twin · manage existing Twin" : s.title}</h2><p class="body">${managingTwin ? "View the completed Twin, try a Look, or refine without repeating setup." : s.detail}</p><div class="notes-grid"><div class="metric"><b>Surface</b><span>${["B-01", "I-03", "J-11"].includes(s.id) ? "Bottom sheet / menu" : s.section === "F" ? "Full-screen editor" : "Mobile screen / state"}</span></div><div class="metric"><b>Style</b><span>Warm pearl, espresso, restrained plum</span></div><div class="metric"><b>Inventory</b><span>${screens.indexOf(visibleScreen) + 1} of ${screens.length}</span></div><div class="metric"><b>Keyboard</b><span><span class="kbd">←</span> <span class="kbd">→</span></span></div></div>${s.section === "F" ? "<ul><li>Editable title and persistent draft</li><li>Flat lay and optional Style Twin</li><li>Owned versus Shop provenance</li><li>Category layers, visibility, replace, remove</li><li>Closet/Wishlist selector with search and filters</li><li>Date, location, calendar, feedback, Save Look</li></ul>" : ""}<div class="row" style="margin-top:18px"><button class="btn grow" onclick="openPreviousInventoryScreen()">Previous screen</button><button class="btn primary grow" onclick="openNextInventoryScreen()">Next screen</button></div>`;
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
  const s = routeScreens.find((x) => x.id === currentId) || screens[0];
  currentId = s.id;
  const canonicalId = getCanonicalScreen(s.id);
  applyStudioRoute(s.id);
  app.dataset.screen = s.id;
  app.dataset.canonicalScreen = canonicalId;
  app.dataset.phase2Canonical = canonicalId;
  const deviceStatus = document.getElementById("device-status");
  if (deviceStatus) {
    deviceStatus.classList.toggle("light", ["S-00", "S-01"].includes(s.id));
    deviceStatus.remove();
  }
  const mobileIndex = document.getElementById("mobile-index");
  if (mobileIndex) mobileIndex.hidden = s.section === "S";
  app.innerHTML = renderScreen(s);
  if (deviceStatus) {
    app.querySelector(".screen")?.prepend(deviceStatus);
  }
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
  decorateClosetLifecycle();
  decorateConsolidatedItemDetail();
  decorateBatchImport();
  decoratePhotoLearning();
  decorateInspirationProfile();
  decorateProfileEntries();
  decorateLookProvenance();
  decorateWeeklyRecapEntry();
  decorateVisualSearchEntries();
  decorateWishlistSurfaces();
  ensureAppNavigation();
  installInstantRailScrolling();
  mountWishlistDialog();
  applyStyleIQDesignSystem();
  window.lucide?.createIcons({ attrs: { "stroke-width": 1.5 } });
  installLiquidNav(previousNavLens);
  renderNotes(s);
  const inventory = [...notes.querySelectorAll(".metric")].find(
    (x) => x.querySelector("b")?.textContent === "Inventory",
  );
  if (inventory) {
    const visibleScreen = screens.find(
      (screen) => screen.id === getCanonicalScreen(s.id),
    ) || screens[0];
    inventory.querySelector("span").textContent =
      `${screens.indexOf(visibleScreen) + 1} of ${screens.length}`;
  }
  renderList();
  document.getElementById("total-count").textContent =
    `${screens.length} / ${screens.length}`;
}
const glassInteractiveSelector =
  ".siq-header .siq-button,.siq-bottom-nav .nav-btn,.lightweight-sheet .icon-btn,.notifications-sheet .icon-btn,.lens-sheet .icon-btn,.head-muse,.root-action,.floating-index";
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
  const requestedId = location.hash.slice(1);
  const id = ({ "G-8": "G-08", "G-9": "G-09" })[requestedId] || requestedId;
  if (currentId === "E-06" && id.startsWith("H-")) {
    leaveTryOn();
    return;
  }
  if (pendingTryOn && currentId.startsWith("H-") && !id.startsWith("H-"))
    clearPendingTryOn();
  if (id && id !== currentId && routeScreens.some((s) => s.id === id)) {
    if (
      localStorage.getItem("styleiqOnboardingClosetPendingV1") === "true" &&
      currentId.startsWith("B-") &&
      !id.startsWith("B-")
    )
      localStorage.removeItem("styleiqOnboardingClosetPendingV1");
    if (currentId === "B-06") { closetPurchaseDraft = null; localStorage.removeItem("styleiqClosetPurchaseDraftV1"); }
    wishlistDialog = null;
    const fromCanonical = getCanonicalScreen(currentId);
    const toCanonical = getCanonicalScreen(id);
    const last = navHistory[navHistory.length - 1];
    if (fromCanonical && last !== fromCanonical && fromCanonical !== toCanonical) {
      navHistory.push(fromCanonical);
      if (navHistory.length > 80) navHistory.shift();
    }
    lightweightPanel = null;
    accountMenuOpen = false;
    notificationsOpen = false;
    currentId = id;
    resolveCanonicalRoute(id);
    render();
  }
});
window.addEventListener("keydown", (e) => {
  if (wishlistDialog || ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) return;
  if (e.key === "ArrowRight") openNextInventoryScreen();
  if (e.key === "ArrowLeft") openPreviousInventoryScreen();
  if (e.key === "Escape" && lightweightPanel) closeLightweightPanel();
  else if (e.key === "Escape" && overlay) closeOverlay();
  else if (e.key === "Escape" && accountMenuOpen) closeAccountMenu();
  else if (e.key === "Escape" && notificationsOpen) closeNotifications();
});
resolveCanonicalRoute(currentId);
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
  wishlistItems.forEach((item) => entries.push({ title: item.name, detail: `Wishlist · ${item.brand} · ${wishlistStatus(item)}`, action: `openWishlistProduct(${JSON.stringify(item.id)})` }));
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
    ["Wishlist", "G-08"],
    ["Style Studio", "F-01"],
    ["Planner", "I-01"],
    ["Discover", "K-01"],
    ["Trips", "J-01"],
    ["Muse", "M-01"],
    ["Amelia Hart · Profile", "L-01"],
    ["Style Twin", "H-01"],
    ["About you", "L-04"],
    ["Style preferences", "L-04"],
    ["Brands", "L-04"],
    ["Budget", "G-08"],
    ["Events", "I-01"],
    ["Privacy & Settings", "L-11"],
    ["Tutorial", "L-12"],
  ];
  destinations.forEach(([title, id]) =>
    entries.push({ title, detail: "Pages", action: title === "Budget" ? "openShoppingBudget()" : title === "Events" ? "openRecurringPlanner()" : title === "Style preferences" ? "openProfilePreferences('style')" : title === "Brands" ? "openProfilePreferences('brands')" : `go('${id}')` }),
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
        ["bookmark", "Saved Looks", "G-01"],
        ["heart", "Wishlist", "G-08"],
        ["spark", "Style Studio", "F-01"],
        ["calendar", "Planner", "I-01"],
        ["bag", "Trips", "J-01"],
      ],
    ],
    [
      "Preferences",
      [
        ["user", "About you", "L-04"],
        ["spark", "Style preferences", "L-04"],
        ["heart", "Brands", "L-04"],
        ["bag", "Budget", "G-08"],
        ["calendar", "Events", "I-01"],
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
  return `<div class="account-menu-layer"><button class="account-menu-scrim" aria-label="Close account menu" onclick="closeAccountMenu()"></button><aside class="account-menu" aria-label="Account navigation"><div class="account-menu-head"><button class="account-profile-link" aria-label="Open Amelia Hart profile" onclick="go('L-01')"><img src="${assets.profile}" alt=""><span><b>Amelia Hart</b><small class="body" style="display:block">My Atelier</small></span></button><button class="icon-btn account-menu-close" aria-label="Close account menu" onclick="closeAccountMenu()">×</button></div><label class="account-menu-search">${icon("search")}<input type="search" aria-label="Search StyleIQ" placeholder="Search pieces, Looks, brands…" oninput="searchStyleIQ(this.value)"></label><section class="app-search-results" aria-label="StyleIQ search results" hidden></section>${groups.map(([label, links]) => `<div class="menu-group"><p class="menu-group-label">${label}</p>${links.map(([ico, text, id]) => `<button class="menu-link ${currentId === id ? "current" : ""}" onclick="${text === "Budget" ? "openShoppingBudget()" : text === "Events" ? "openRecurringPlanner()" : text === "Style preferences" ? "openProfilePreferences('style')" : text === "Brands" ? "openProfilePreferences('brands')" : `go('${id}')`}">${icon(ico)}<span>${text}</span><b>›</b></button>`).join("")}</div>`).join("")}<div class="menu-group"><button class="menu-link" onclick="openLogout()">${icon("logout")}<span>Log out</span><b>›</b></button></div></aside></div>`;
}
function outfitFamilies(title = "Today", lookId = "coffee") {
  const anchoredItem = closetStyleIntent ? selectedClosetItem() : null;
  return shell(
    title,
    `<p class="eyebrow">${anchoredItem ? `Styled around ${escapeMarkup(anchoredItem.name)}` : "Styled around your Closet"}</p><h2 class="title">Five ways to wear it</h2><div class="chips">${["Business casual", "Party", "Dressy", "Professional", "Semi-formal"].map((x, i) => `<button class="chip ${i === 0 ? "active" : ""}">${x}</button>`).join("")}</div><div style="margin-top:12px">${outfitPreview()}</div><div class="outfit-meta"><span><p class="eyebrow">Business casual</p><h3 class="title">Quiet structure</h3><p class="body">28° · Office · 3 owned pieces</p></span><button class="text-action" onclick="go('M-02')">Why this Look?</button></div><div class="outfit-primary-actions"><button class="btn primary" onclick="go('F-01')">${icon("edit")} Make it mine</button><button class="btn" onclick="startTryOn('${lookId}', { sourceType: 'outfit-family' })">${icon("user")} Try on</button></div><div class="closet-strip" aria-label="Pieces in this Look">${[
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
  if (idx === 4 || idx === 5 || idx === 6) {
    const activeSec = profilePrefSection || (idx === 5 ? "style" : idx === 6 ? "brands" : "about");
    return shell(
      "Profile & Style Preferences",
      `<div class="mirror-upload-intro"><p class="eyebrow">Personalize StyleIQ</p><h2 class="title">Profile &amp; Style Preferences</h2><p class="body">Set the guidelines Muse follows when selecting daily looks and wardrobe recommendations.</p></div><div class="stack" style="margin-top:16px"><details class="card progressive-card" ${activeSec === "about" ? "open" : ""}><summary><b>About you</b><span class="small">Name · wardrobe · location</span></summary><div class="stack" style="margin-top:12px"><div class="field"><label>Display name</label><input class="input" value="Amelia Hart"></div><div class="field"><label>Location</label><input class="input" value="Cairo, Egypt"></div><div class="field"><label>Wardrobe context</label><input class="input" value="Tailoring, warm neutrals"></div></div></details><details class="card progressive-card" ${activeSec === "style" ? "open" : ""}><summary><b>Style preferences</b><span class="small">Silhouettes · rules</span></summary><div class="stack" style="margin-top:12px"><div class="field"><label>Preferred aesthetic</label><input class="input" value="Tailoring, warm neutrals, quiet luxury"></div><div class="field"><label>Style rules</label><input class="input" value="No low-rise fits, prefer structured layers"></div></div></details><details class="card progressive-card" ${activeSec === "brands" ? "open" : ""}><summary><b>Brands &amp; Fit</b><span class="small">Favorites · sizes · fit notes</span></summary><div class="stack" style="margin-top:12px"><div class="field"><label>Favorite brands</label><input class="input" value="A.P.C., AMI Paris, COS, Balmain"></div><div class="row"><div class="field grow"><label>Top size</label><input class="input" value="M · EU 38"></div><div class="field grow"><label>Bottom size</label><input class="input" value="EU 40 · W30"></div></div><div class="field"><label>Shoe size</label><input class="input" value="EU 39"></div><div class="field"><label>Brand fit notes</label><textarea class="textarea">COS outerwear runs relaxed; A.P.C. trousers fit snug at the waist.</textarea></div></div></details></div><button class="btn primary wide auth-primary" type="button" style="margin-top:18px" onclick="go('L-01');toast('Preferences updated')">Save Preferences</button>`,
      { active: "profile" },
    );
  }
  if (idx === 9) return (twinSetup.complete ? go("H-10") : go("H-01"));
  if (idx === 10) {
    settingsSection = "photos";
    return profileScreen({ ...s, id: "L-11" });
  }
  if (idx === 13) {
    settingsSection = "notifications";
    return profileScreen({ ...s, id: "L-11" });
  }
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
  if (idx === 15) {
    settingsSection = "privacy";
    return profileScreen({ ...s, id: "L-11" });
  }
  if (idx === 11) {
    const sec = settingsSection || "all";
    return shell(
      "Settings",
      `<div class="settings-hero"><span class="settings-hero-icon">${icon("gear")}</span><span><p class="eyebrow">Account & app</p><h2 class="title">Settings</h2><p class="body">Control your profile, styling preferences, privacy, and access.</p></span></div><div class="stack" style="margin-top:14px"><details class="card progressive-card" ${sec === "photos" ? "open" : ""}><summary><b>Original photos &amp; media</b><span class="small">Storage · privacy</span></summary><div class="stack" style="margin-top:12px"><p class="body">Keep original high-resolution photos: On</p><p class="body">Local background cleanup: Enabled</p></div></details><details class="card progressive-card" ${sec === "notifications" ? "open" : ""}><summary><b>Notifications</b><span class="small">Daily ideas · trips · alerts</span></summary><div class="stack" style="margin-top:12px"><div class="select-row"><span class="grow">Daily styling ideas</span><button class="toggle on" onclick="this.classList.toggle('on')"><span></span></button></div><div class="select-row"><span class="grow">Trip reminders</span><button class="toggle on" onclick="this.classList.toggle('on')"><span></span></button></div></div></details><details class="card progressive-card" ${sec === "privacy" ? "open" : ""}><summary><b>Privacy &amp; visibility</b><span class="small">Profile · Twin · Closet</span></summary><div class="stack" style="margin-top:12px"><div class="select-row"><span class="grow">Private profile</span><button class="toggle on" onclick="this.classList.toggle('on')"><span></span></button></div><div class="select-row"><span class="grow">Style Twin visibility</span><b class="small">Only me</b></div></div></details><div class="settings-list" style="margin-top:14px"><button class="select-row" style="width:100%;border:0;background:transparent;text-align:left" onclick="go('L-04')"><span class="icon-wrap">${icon("spark")}</span><span class="grow"><b>Style Preferences</b><small class="body">Aesthetic, brands, and fit</small></span><span>›</span></button><button class="select-row" style="width:100%;border:0;background:transparent;text-align:left" onclick="go('L-12')"><span class="icon-wrap">${icon("help")}</span><span class="grow">Tutorial &amp; Walkthrough</span><span>›</span></button><button class="select-row" style="width:100%;border:0;background:transparent;text-align:left" onclick="go('L-14')"><span class="icon-wrap">${icon("help")}</span><span class="grow">Help Center</span><span>›</span></button></div></div>`,
      { active: "profile" },
    );
  }
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
      `<section class="muse-profile"><div class="muse-profile-head"><img src="${assets.muse}" alt="Muse"><span class="grow"><p class="eyebrow">What Muse has learned</p><h3 class="title">Your style, in focus</h3></span><button class="btn small-btn" onclick="openProfilePreferences('style')">Refine</button></div><p class="body">You lean toward warm neutrals, clean lines, and relaxed tailoring. You save structured layers but wear softer combinations most often.</p><div class="palette" aria-label="Your learned color palette"><i style="background:#241f1b"></i><i style="background:#8d623d"></i><i style="background:#d7c4a5"></i><i style="background:#eee7db"></i><i style="background:#788071"></i></div><button class="btn primary wide" onclick="go('M-01')">Open Muse profile</button></section><section class="card" style="margin-top:12px"><div class="between"><span><p class="eyebrow">Style evolution</p><b>Relaxed tailoring is up 18%</b></span><span class="pill gold">This month</span></div><div class="evolution-bar"><span></span></div><p class="body" style="margin-top:10px">Muse found 3 new combinations around your blazer without adding another purchase.</p><button class="btn wide" style="margin-top:12px" onclick="go('M-03')">See the wardrobe insight</button></section>`,
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
