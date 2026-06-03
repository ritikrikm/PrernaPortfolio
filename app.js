const DATA_URL = "data/portfolio.json";
const DRAFT_STORE_KEY = "prerna-portfolio-draft-v1";
const DRAFT_STORE_VERSION = 2;
const ADMIN_SESSION_KEY = "prerna-portfolio-admin-unlocked";
const ADMIN_PASSWORD_KEY = "prerna-portfolio-admin-password";
const PREVIEW_SESSION_KEY = "prerna-portfolio-preview-drafts";
const THEME_STORE_KEY = "prerna-portfolio-theme";
const LOCAL_ADMIN_PASSWORD = "prerna-admin";
const MAX_UPLOAD_DIMENSION = 2200;
const IMAGE_EXPORT_QUALITY = 0.86;
const MEDIA_ASSET_MAX_DIMENSION = 1800;
const MEDIA_ASSET_IMAGE_QUALITY = 0.8;
const IMAGE_UPLOAD_MIN_BYTES = 1024;
const IMAGE_UPLOAD_MAX_BYTES = 100 * 1024 * 1024;
const RESUME_PDF_MAX_BYTES = 10 * 1024 * 1024;
const ALLOWED_IMAGE_MIME_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const ALLOWED_IMAGE_EXTENSIONS = new Set(["jpg", "jpeg", "png", "webp", "gif"]);
const ALLOWED_VIDEO_MIME_TYPES = new Set(["video/mp4", "video/webm", "video/ogg"]);
const ALLOWED_VIDEO_EXTENSIONS = new Set(["mp4", "webm", "ogv", "ogg"]);
const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTH_LOOKUP = MONTH_NAMES.reduce((lookup, month, index) => {
  lookup[month] = index;
  return lookup;
}, {});
const EXPERIENCE_DATE_PATTERN = /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) - ((Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4})|Present)$/;
const DEFAULT_PROJECT_CATEGORIES = ["Branding", "Social Media", "Video Editing", "Motion Graphics", "Illustration", "Campaign Design", "Graphic Design", "Multimedia"];
const HOME_SECTION_NAV = {
  featured: { selector: "#home-featured-section", route: "/featured-projects" },
  work: { selector: "#home-work-section", route: "/work" },
};
const RESUME_FILE_PATH = "assets/resume/prerna-sharma-resume.pdf";
const RESUME_PREVIEW_PATH = "assets/resume/prerna-sharma-resume-preview.webp";
const MEDIA_GROUPS = [
  {
    id: "initialSketch",
    label: "Initial Sketch",
    helper: "Early sketches, rough routes, mood explorations, draft frames, or work-in-progress visuals."
  },
  {
    id: "finalOutput",
    label: "Final Output",
    helper: "Finished campaign visuals, edited videos, final posts, approved layouts, or production-ready assets."
  }
];

let publishedExperiences = [];
let experiences = [];

const typewriterWords = [
  "a Graphic Designer",
  "a Motion Designer",
  "a Brand Illustrator",
  "a Visual Storyteller",
  "a Creative Maker"
];

const defaultSiteContent = {
  global: {
    metaTitle: "Prerna Sharma | Graphic Designer",
    metaDescription: "Prerna Sharma design work for graphic design, branding, motion graphics, illustration, and multimedia campaign work.",
    skipLink: "Skip to site",
    brandSymbol: "PS",
    brandName: "Prerna Sharma",
    brandSubtitle: "Graphic Designer + Motion Artist",
    nav: {
      home: "Home",
      work: "Work",
      featured: "Featured Projects",
      about: "About",
      contact: "Contact"
    }
  },
  home: {
    eyebrow: "Graphic design work",
    headline: "Design work that moves from brief to brand, campaign, and motion.",
    typewriterPrefix: "I am",
    typewriterWords: [
      "a Graphic Designer",
      "a Motion Designer",
      "a Brand Illustrator",
      "a Visual Storyteller",
      "a Creative Maker"
    ],
    summary: "A recruiter-friendly project showcase for Prerna Sharma, focused on visual design, brand systems, social campaigns, motion graphics, illustration, and digital storytelling.",
    primaryAction: "View Experience",
    secondaryAction: "Contact",
    quickScanEyebrow: "Quick scan",
    quickScan: [
      {
        label: "Best fit",
        text: "Graphic Designer, Multimedia Designer, Motion Designer"
      },
      {
        label: "Experience",
        text: "2 years professional + 6 years creative business"
      },
      {
        label: "Strength",
        text: "Campaign visuals, brand consistency, social content, motion"
      },
      {
        label: "Tools",
        text: "Photoshop, Illustrator, InDesign, Premiere Pro, After Effects, Figma"
      }
    ],
    featuredEyebrow: "Featured projects",
    featuredHeadline: "Small, polished project pieces recruiters can scan first.",
    featuredFilters: ["All", "Branding", "Social Media", "Video Editing", "Motion Graphics", "Illustration", "Multimedia"],
    workEyebrow: "Work experience",
    workHeadline: "Start with work experience, then open the projects inside each role.",
    workVisibleCount: 3
  },
  work: {
    eyebrow: "Work experience",
    headline: "Choose an experience to see the work created inside it.",
    searchPlaceholder: "Search project, tool, outcome"
  },
  featured: {
    eyebrow: "Featured projects",
    headline: "Browse selected campaigns, visuals, motion pieces, and illustration work.",
    searchPlaceholder: "Search featured project, tool, outcome"
  },
  about: {
    eyebrow: "About the designer",
    headline: "Graphic designer with campaign discipline and a handmade visual voice.",
    body: [
      "Prerna creates brand visuals, campaign assets, motion graphics, social content, illustration, and digital storytelling work. Her project showcase connects practical production skills with expressive, human visual details.",
      "Recruiters can use the Work section to open each experience and see what she created there: campaign graphics, motion pieces, social layouts, illustration-led products, and brand systems."
    ],
    sketchAlt: "Sketch-style illustration of a designer creating at a desk",
    timeline: [
      {
        dates: "2023-2024",
        title: "Executive - Design, MSL Global",
        text: "Large-scale campaign visuals, brand consistency, motion assets, and cross-functional creative production."
      },
      {
        dates: "2023",
        title: "Communications Designer, Cultre Boat",
        text: "Social media grids, campaign concepts, copy, graphics, and video assets for multiple brands."
      },
      {
        dates: "2018-2024",
        title: "Founder / Creative Entrepreneur, The Creative Bud",
        text: "Illustration-led products, client commissions, custom stationery, calendars, cards, and social selling."
      }
    ]
  },
  contact: {
    eyebrow: "Contact",
    headline: "Open to graphic design, brand, motion, and multimedia roles.",
    cards: [
      {
        icon: "✉",
        label: "Email",
        value: "visualartist.prerna@gmail.com",
        href: "mailto:visualartist.prerna@gmail.com"
      },
      {
        icon: "☎",
        label: "Phone",
        value: "(416) 825-6120",
        href: "tel:+14168256120"
      },
      {
        icon: "in",
        label: "LinkedIn",
        value: "Add her real LinkedIn URL here",
        href: "https://www.linkedin.com/"
      },
      {
        icon: "Be",
        label: "Behance",
        value: "Behance project gallery",
        href: "https://www.behance.net/gallery/177375659"
      }
    ]
  },
  appearance: {
    pageBackground: "#fff8ef",
    inkColor: "#16120f",
    accentColor: "#087f6f",
    typewriterColor: "#ff6542",
    buttonColor: "#087f6f",
    textStyles: {}
  }
};

const CONTENT_PAGES = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
  { id: "global", label: "Header" },
  { id: "work", label: "Work" },
  { id: "featured", label: "Featured Projects" },
  { id: "appearance", label: "Appearance" }
];

const CONTENT_FIELDS = [
  { page: "global", key: "global.brandName", label: "Brand name", path: "global.brandName" },
  { page: "global", key: "global.brandSubtitle", label: "Brand subtitle", path: "global.brandSubtitle" },
  { page: "global", key: "global.brandSymbol", label: "Brand symbol", path: "global.brandSymbol" },
  { page: "global", key: "global.skipLink", label: "Skip link", path: "global.skipLink" },
  { page: "global", key: "global.metaTitle", label: "Browser title", path: "global.metaTitle" },
  { page: "global", key: "global.metaDescription", label: "Meta description", path: "global.metaDescription", type: "textarea" },
  { page: "global", key: "global.nav.home", label: "Nav: Home", path: "global.nav.home" },
  { page: "global", key: "global.nav.work", label: "Nav: Work", path: "global.nav.work" },
  { page: "global", key: "global.nav.featured", label: "Nav: Featured Projects", path: "global.nav.featured" },
  { page: "global", key: "global.nav.about", label: "Nav: About", path: "global.nav.about" },
  { page: "global", key: "global.nav.contact", label: "Nav: Contact", path: "global.nav.contact" },
  { page: "home", key: "home.eyebrow", label: "Hero eyebrow", path: "home.eyebrow" },
  { page: "home", key: "home.headline", label: "Hero headline", path: "home.headline", type: "textarea" },
  { page: "home", key: "home.typewriterPrefix", label: "Typewriter prefix", path: "home.typewriterPrefix" },
  { page: "home", key: "home.typewriterWords", label: "Typewriter words", path: "home.typewriterWords", type: "list", helper: "One phrase per line." },
  { page: "home", key: "home.summary", label: "Hero summary", path: "home.summary", type: "textarea" },
  { page: "home", key: "home.primaryAction", label: "Primary button", path: "home.primaryAction" },
  { page: "home", key: "home.secondaryAction", label: "Secondary button", path: "home.secondaryAction" },
  { page: "home", key: "home.quickScanEyebrow", label: "Quick scan eyebrow", path: "home.quickScanEyebrow" },
  { page: "home", key: "home.quickScan.0.label", label: "Quick scan 1 label", path: "home.quickScan.0.label" },
  { page: "home", key: "home.quickScan.0.text", label: "Quick scan 1 text", path: "home.quickScan.0.text", type: "textarea" },
  { page: "home", key: "home.quickScan.1.label", label: "Quick scan 2 label", path: "home.quickScan.1.label" },
  { page: "home", key: "home.quickScan.1.text", label: "Quick scan 2 text", path: "home.quickScan.1.text", type: "textarea" },
  { page: "home", key: "home.quickScan.2.label", label: "Quick scan 3 label", path: "home.quickScan.2.label" },
  { page: "home", key: "home.quickScan.2.text", label: "Quick scan 3 text", path: "home.quickScan.2.text", type: "textarea" },
  { page: "home", key: "home.quickScan.3.label", label: "Quick scan 4 label", path: "home.quickScan.3.label" },
  { page: "home", key: "home.quickScan.3.text", label: "Quick scan 4 text", path: "home.quickScan.3.text", type: "textarea" },
  { page: "home", key: "home.featuredEyebrow", label: "Featured projects eyebrow", path: "home.featuredEyebrow" },
  { page: "home", key: "home.featuredHeadline", label: "Featured projects headline", path: "home.featuredHeadline", type: "textarea" },
  { page: "home", key: "home.featuredFilters", label: "Featured project filters", path: "home.featuredFilters", type: "list", helper: "One filter per line. Use All as the first item." },
  { page: "home", key: "home.workEyebrow", label: "Work section eyebrow", path: "home.workEyebrow" },
  { page: "home", key: "home.workHeadline", label: "Work section headline", path: "home.workHeadline", type: "textarea" },
  { page: "home", key: "home.workVisibleCount", label: "Work cards visible on home", path: "home.workVisibleCount" },
  { page: "work", key: "work.eyebrow", label: "Work page eyebrow", path: "work.eyebrow" },
  { page: "work", key: "work.headline", label: "Work page headline", path: "work.headline", type: "textarea" },
  { page: "work", key: "work.searchPlaceholder", label: "Work search placeholder", path: "work.searchPlaceholder" },
  { page: "featured", key: "featured.eyebrow", label: "Featured projects page eyebrow", path: "featured.eyebrow" },
  { page: "featured", key: "featured.headline", label: "Featured projects page headline", path: "featured.headline", type: "textarea" },
  { page: "featured", key: "featured.searchPlaceholder", label: "Featured projects search placeholder", path: "featured.searchPlaceholder" },
  { page: "about", key: "about.eyebrow", label: "About eyebrow", path: "about.eyebrow" },
  { page: "about", key: "about.headline", label: "About headline", path: "about.headline", type: "textarea" },
  { page: "about", key: "about.body.0", label: "About paragraph 1", path: "about.body.0", type: "textarea" },
  { page: "about", key: "about.body.1", label: "About paragraph 2", path: "about.body.1", type: "textarea" },
  { page: "about", key: "about.sketchAlt", label: "Sketch image alt text", path: "about.sketchAlt", type: "textarea" },
  { page: "about", key: "about.timeline.0.dates", label: "Timeline 1 dates", path: "about.timeline.0.dates" },
  { page: "about", key: "about.timeline.0.title", label: "Timeline 1 title", path: "about.timeline.0.title" },
  { page: "about", key: "about.timeline.0.text", label: "Timeline 1 text", path: "about.timeline.0.text", type: "textarea" },
  { page: "about", key: "about.timeline.1.dates", label: "Timeline 2 dates", path: "about.timeline.1.dates" },
  { page: "about", key: "about.timeline.1.title", label: "Timeline 2 title", path: "about.timeline.1.title" },
  { page: "about", key: "about.timeline.1.text", label: "Timeline 2 text", path: "about.timeline.1.text", type: "textarea" },
  { page: "about", key: "about.timeline.2.dates", label: "Timeline 3 dates", path: "about.timeline.2.dates" },
  { page: "about", key: "about.timeline.2.title", label: "Timeline 3 title", path: "about.timeline.2.title" },
  { page: "about", key: "about.timeline.2.text", label: "Timeline 3 text", path: "about.timeline.2.text", type: "textarea" },
  { page: "contact", key: "contact.eyebrow", label: "Contact eyebrow", path: "contact.eyebrow" },
  { page: "contact", key: "contact.headline", label: "Contact headline", path: "contact.headline", type: "textarea" },
  { page: "contact", key: "contact.cards.0.icon", label: "Email icon", path: "contact.cards.0.icon" },
  { page: "contact", key: "contact.cards.0.label", label: "Email label", path: "contact.cards.0.label" },
  { page: "contact", key: "contact.cards.0.value", label: "Email text", path: "contact.cards.0.value" },
  { page: "contact", key: "contact.cards.0.href", label: "Email link", path: "contact.cards.0.href" },
  { page: "contact", key: "contact.cards.1.icon", label: "Phone icon", path: "contact.cards.1.icon" },
  { page: "contact", key: "contact.cards.1.label", label: "Phone label", path: "contact.cards.1.label" },
  { page: "contact", key: "contact.cards.1.value", label: "Phone text", path: "contact.cards.1.value" },
  { page: "contact", key: "contact.cards.1.href", label: "Phone link", path: "contact.cards.1.href" },
  { page: "contact", key: "contact.cards.2.icon", label: "LinkedIn icon", path: "contact.cards.2.icon" },
  { page: "contact", key: "contact.cards.2.label", label: "LinkedIn label", path: "contact.cards.2.label" },
  { page: "contact", key: "contact.cards.2.value", label: "LinkedIn text", path: "contact.cards.2.value" },
  { page: "contact", key: "contact.cards.2.href", label: "LinkedIn link", path: "contact.cards.2.href" },
  { page: "contact", key: "contact.cards.3.icon", label: "Behance icon", path: "contact.cards.3.icon" },
  { page: "contact", key: "contact.cards.3.label", label: "Behance label", path: "contact.cards.3.label" },
  { page: "contact", key: "contact.cards.3.value", label: "Behance text", path: "contact.cards.3.value" },
  { page: "contact", key: "contact.cards.3.href", label: "Behance link", path: "contact.cards.3.href" },
  { page: "appearance", key: "appearance.pageBackground", label: "Page background", path: "appearance.pageBackground", type: "color" },
  { page: "appearance", key: "appearance.inkColor", label: "Main text color", path: "appearance.inkColor", type: "color" },
  { page: "appearance", key: "appearance.accentColor", label: "Accent color", path: "appearance.accentColor", type: "color" },
  { page: "appearance", key: "appearance.typewriterColor", label: "Typewriter color", path: "appearance.typewriterColor", type: "color" },
  { page: "appearance", key: "appearance.buttonColor", label: "Button color", path: "appearance.buttonColor", type: "color" }
];

let publishedProjects = [];
let publishedPortfolioProjects = [];
let publishedFeaturedProducts = [];
let publishedSiteContent = cloneItems(defaultSiteContent);
const defaultResume = {
  label: "Download Resume",
  file: "",
  fileName: "Prerna-Sharma-Resume.pdf",
  previewImage: "",
  updatedAt: ""
};
let publishedResume = cloneItems(defaultResume);

const state = {
  projects: [],
  portfolioProjects: [],
  featuredProducts: [],
  siteContent: cloneItems(defaultSiteContent),
  resume: cloneItems(defaultResume),
  contentPage: "home",
  previewContentField: "",
  adminMode: "portfolio",
  filter: "All",
  featuredPageFilter: "All",
  featuredFilter: "All",
  query: "",
  typewriterTimer: null,
  previewImage: "",
  projectImageRemoved: false,
  experiencePreviewImage: "",
  experienceImageRemoved: false,
  detailMediaImages: {},
  mediaBuilderGroups: null,
  mediaBuilderMeta: null,
  loadingCount: 0,
  dataLoaded: false,
  adminPassword: sessionStorage.getItem(ADMIN_PASSWORD_KEY) || "",
  adminData: null,
  adminDataBaseSignature: "",
  draftStorageWarning: false,
  pendingHomeSection: "",
  homeSectionScrollHandler: null,
  homeSectionResizeHandler: null,
  homeNavFrame: 0,
  resumeFileDraft: "",
  resumeFileNameDraft: "",
  resumePreviewDraft: "",
  resumeFileRemoved: false,
  resumePreviewRemoved: false
};

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeUrl(value = "") {
  if (!value) return "";
  try {
    const url = new URL(value);
    if (url.protocol === "http:" || url.protocol === "https:") return url.href;
  } catch {
    return "";
  }
  return "";
}

function safeHref(value = "") {
  if (!value) return "#";
  if (/^(mailto:|tel:|#\/)/.test(value)) return value;
  return safeUrl(value) || "#";
}

function safeAssetHref(value = "") {
  if (!value) return "";
  if (/^assets\/[a-z0-9/_\-.]+$/i.test(value)) return value;
  if (/^data:application\/pdf;base64,/i.test(value)) return value;
  return safeUrl(value);
}

function formatBytes(bytes = 0) {
  if (!Number.isFinite(bytes)) return "0 B";
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(bytes >= 10 * 1024 * 1024 ? 0 : 1)} MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${bytes} B`;
}

function fileExtension(file = {}) {
  return String(file.name || "").split(".").pop().toLowerCase();
}

function fileMatches(file, mimeTypes, extensions) {
  const mime = String(file?.type || "").toLowerCase();
  const extension = fileExtension(file);
  return (mime && mimeTypes.has(mime)) || (extension && extensions.has(extension));
}

function validateImageFile(file, label = "Image") {
  if (!file) return "";
  if (!fileMatches(file, ALLOWED_IMAGE_MIME_TYPES, ALLOWED_IMAGE_EXTENSIONS)) {
    return `${label} must be JPG, PNG, WebP, or GIF.`;
  }
  if (file.size < IMAGE_UPLOAD_MIN_BYTES) {
    return `${label} is too small. Minimum size is ${formatBytes(IMAGE_UPLOAD_MIN_BYTES)}.`;
  }
  if (file.size > IMAGE_UPLOAD_MAX_BYTES) {
    return `${label} is too large. Maximum size is ${formatBytes(IMAGE_UPLOAD_MAX_BYTES)}.`;
  }
  return "";
}

function validateVideoAssetFile(file) {
  if (!file) return "";
  if (!fileMatches(file, ALLOWED_VIDEO_MIME_TYPES, ALLOWED_VIDEO_EXTENSIONS)) {
    return "Video assets must be MP4, WebM, or OGG. Paste a public video link after selecting Video.";
  }
  if (file.size > IMAGE_UPLOAD_MAX_BYTES) {
    return `Video file is too large. Maximum test upload size is ${formatBytes(IMAGE_UPLOAD_MAX_BYTES)}; use a public link instead.`;
  }
  return "";
}

function validateResumePdfFile(file) {
  if (!file) return "";
  const isPdf = file.type === "application/pdf" || /\.pdf$/i.test(file.name || "");
  if (!isPdf) return "Resume must be a PDF file.";
  if (file.size > RESUME_PDF_MAX_BYTES) return `Resume PDF is too large. Maximum size is ${formatBytes(RESUME_PDF_MAX_BYTES)}.`;
  return "";
}

function validImageSource(value = "") {
  const source = String(value || "").trim();
  return !source
    || source.startsWith("data:image/")
    || /^assets\/[a-z0-9/_\-.]+$/i.test(source)
    || Boolean(safeUrl(source));
}

function controlErrorKey(control) {
  return control.id || control.name || control.getAttribute("aria-label") || "field";
}

function fieldWrapper(control) {
  return control?.closest("label") || control?.closest(".media-fieldset") || control?.closest(".form-subsection") || control?.parentElement;
}

function renderControlError(control, message = "") {
  if (!control) return;
  const wrapper = fieldWrapper(control);
  if (!wrapper) return;
  const key = controlErrorKey(control);
  let error = Array.from(wrapper.querySelectorAll(".field-error")).find((item) => item.dataset.errorFor === key);
  if (message) {
    if (!error) {
      error = document.createElement("small");
      error.className = "field-error";
      error.dataset.errorFor = key;
      wrapper.append(error);
    }
    error.textContent = message;
    error.hidden = false;
  } else if (error) {
    error.textContent = "";
    error.hidden = true;
  }
  const hasError = Array.from(wrapper.querySelectorAll(".field-error")).some((item) => !item.hidden && item.textContent.trim());
  wrapper.classList.toggle("has-field-error", hasError);
}

function setControlError(control, message = "") {
  if (!control) return;
  control.setCustomValidity?.(message || "");
  renderControlError(control, message);
}

function clearControlError(control) {
  setControlError(control, "");
}

function clearValidationUi(root = document) {
  root.querySelectorAll("input, select, textarea").forEach((control) => {
    control.setCustomValidity?.("");
    renderControlError(control, "");
  });
}

function syncFormValidationUi(form) {
  form.querySelectorAll("input, select, textarea").forEach((control) => {
    renderControlError(control, control.validity.valid ? "" : control.validationMessage);
  });
}

function reportFormValidation(form, fallbackMessage) {
  syncFormValidationUi(form);
  const firstInvalid = form.querySelector(":invalid");
  if (firstInvalid) {
    firstInvalid.focus({ preventScroll: false });
    firstInvalid.reportValidity?.();
  }
  showToast(fallbackMessage);
}

function validateNativeForm(form, fallbackMessage) {
  if (form.checkValidity()) {
    syncFormValidationUi(form);
    return true;
  }
  reportFormValidation(form, fallbackMessage);
  return false;
}

function setupInlineValidation(form) {
  if (!form || form.dataset.validationReady === "true") return;
  form.dataset.validationReady = "true";
  const refresh = (event) => {
    const control = event.target.closest?.("input, select, textarea");
    if (!control || !form.contains(control)) return;
    if (control.validity?.customError) control.setCustomValidity("");
    if (control.id === "experienceDates") validateExperienceDates();
    else renderControlError(control, control.validity.valid ? "" : control.validationMessage);
  };
  form.addEventListener("input", refresh);
  form.addEventListener("change", refresh);
  form.addEventListener("invalid", (event) => {
    renderControlError(event.target, event.target.validationMessage);
  }, true);
}

function monthInputToLabel(value = "") {
  const match = String(value).match(/^([0-9]{4})-([0-9]{2})$/);
  if (!match) return "";
  const monthIndex = Number(match[2]) - 1;
  if (monthIndex < 0 || monthIndex > 11) return "";
  return `${MONTH_NAMES[monthIndex]} ${match[1]}`;
}

function monthLabelToInput(value = "") {
  const match = String(value).trim().match(/^([A-Z][a-z]{2}) ([0-9]{4})$/);
  if (!match || !(match[1] in MONTH_LOOKUP)) return "";
  return `${match[2]}-${String(MONTH_LOOKUP[match[1]] + 1).padStart(2, "0")}`;
}

function comparableMonth(label = "") {
  const match = String(label).trim().match(/^([A-Z][a-z]{2}) ([0-9]{4})$/);
  if (!match || !(match[1] in MONTH_LOOKUP)) return null;
  return Number(match[2]) * 12 + MONTH_LOOKUP[match[1]];
}

function parseExperienceDateRange(value = "") {
  const match = String(value).trim().match(EXPERIENCE_DATE_PATTERN);
  if (!match) return null;
  return {
    startLabel: `${match[1]} ${match[2]}`,
    endLabel: match[3],
    isPresent: match[3] === "Present"
  };
}

function setExperienceDatePickersFromValue(value = "") {
  const startPicker = document.getElementById("experienceStartMonth");
  const endPicker = document.getElementById("experienceEndMonth");
  const currentRole = document.getElementById("experienceCurrentRole");
  if (!startPicker || !endPicker || !currentRole) return;
  const parsed = parseExperienceDateRange(value);
  if (!parsed) {
    startPicker.value = "";
    endPicker.value = "";
    currentRole.checked = false;
    endPicker.disabled = false;
    return;
  }
  startPicker.value = monthLabelToInput(parsed.startLabel);
  currentRole.checked = parsed.isPresent;
  endPicker.disabled = parsed.isPresent;
  endPicker.value = parsed.isPresent ? "" : monthLabelToInput(parsed.endLabel);
}

function syncExperienceDatesFromPickers() {
  const datesField = document.getElementById("experienceDates");
  const startPicker = document.getElementById("experienceStartMonth");
  const endPicker = document.getElementById("experienceEndMonth");
  const currentRole = document.getElementById("experienceCurrentRole");
  if (!datesField || !startPicker || !endPicker || !currentRole) return;
  const startLabel = monthInputToLabel(startPicker.value);
  const endLabel = currentRole.checked ? "Present" : monthInputToLabel(endPicker.value);
  endPicker.disabled = currentRole.checked;
  if (currentRole.checked) endPicker.value = "";
  if (startLabel && endLabel) datesField.value = `${startLabel} - ${endLabel}`;
  validateExperienceDates();
  renderExperiencePreview();
}

function validateExperienceDates() {
  const datesField = document.getElementById("experienceDates");
  if (!datesField) return true;
  const value = datesField.value.trim();
  const parsed = parseExperienceDateRange(value);
  let message = "";
  if (!value) {
    message = "Experience dates are required.";
  } else if (!parsed) {
    message = "Use date format like Dec 2023 - Nov 2024, or Dec 2023 - Present.";
  } else if (!parsed.isPresent) {
    const start = comparableMonth(parsed.startLabel);
    const end = comparableMonth(parsed.endLabel);
    if (start !== null && end !== null && end < start) {
      message = "End month must be the same as or after the start month.";
    }
  }
  setControlError(datesField, message);
  return !message;
}

function setupExperienceDateControls() {
  const datesField = document.getElementById("experienceDates");
  const startPicker = document.getElementById("experienceStartMonth");
  const endPicker = document.getElementById("experienceEndMonth");
  const currentRole = document.getElementById("experienceCurrentRole");
  if (!datesField || !startPicker || !endPicker || !currentRole || datesField.dataset.dateReady === "true") return;
  datesField.dataset.dateReady = "true";
  datesField.addEventListener("input", () => {
    setExperienceDatePickersFromValue(datesField.value);
    validateExperienceDates();
  });
  startPicker.addEventListener("change", syncExperienceDatesFromPickers);
  endPicker.addEventListener("change", syncExperienceDatesFromPickers);
  currentRole.addEventListener("change", syncExperienceDatesFromPickers);
  setExperienceDatePickersFromValue(datesField.value);
}

function normalizeResume(data = {}) {
  return {
    label: String(data?.label || defaultResume.label).trim() || defaultResume.label,
    file: String(data?.file || ""),
    fileName: String(data?.fileName || defaultResume.fileName).trim() || defaultResume.fileName,
    previewImage: String(data?.previewImage || ""),
    updatedAt: String(data?.updatedAt || "")
  };
}

function resumeDirty() {
  return !deepEqual(normalizeResume(state.resume), normalizeResume(publishedResume));
}

function textStyle(key) {
  const color = state.siteContent?.appearance?.textStyles?.[key]?.color;
  return color ? ` style="color: ${escapeHtml(color)};"` : "";
}

function setText(selector, value, key = "") {
  const element = document.querySelector(selector);
  if (!element) return;
  element.textContent = value || "";
  if (key) {
    element.dataset.contentKey = key;
    const color = state.siteContent?.appearance?.textStyles?.[key]?.color || "";
    if (color) element.style.color = color;
    else element.style.removeProperty("color");
  }
}

function storedTheme() {
  try {
    return localStorage.getItem(THEME_STORE_KEY) === "night" ? "night" : "day";
  } catch {
    return "day";
  }
}

function persistTheme(theme) {
  try {
    localStorage.setItem(THEME_STORE_KEY, theme);
  } catch {
    // Theme still applies for the current page if browser storage is unavailable.
  }
}

function syncThemeToggle(theme = storedTheme()) {
  const button = document.getElementById("theme-toggle");
  if (!button) return;
  const isNight = theme === "night";
  button.setAttribute("aria-pressed", String(isNight));
  button.setAttribute("aria-label", isNight ? "Switch to day mode" : "Switch to night mode");
  button.title = isNight ? "Switch to day mode" : "Switch to night mode";
}

function applyTheme(theme = storedTheme()) {
  const nextTheme = theme === "night" ? "night" : "day";
  document.body.classList.toggle("theme-night", nextTheme === "night");
  document.body.dataset.theme = nextTheme;
  syncThemeToggle(nextTheme);
}

function setupThemeToggle() {
  const button = document.getElementById("theme-toggle");
  if (!button || button.dataset.themeReady === "true") return;
  button.dataset.themeReady = "true";
  button.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("theme-night") ? "day" : "night";
    persistTheme(nextTheme);
    applyTheme(nextTheme);
  });
  applyTheme(storedTheme());
}

function updateResumeLinks() {
  const resume = normalizeResume(state.resume);
  const href = safeAssetHref(resume.file);
  document.querySelectorAll("[data-resume-download]").forEach((link) => {
    const label = resume.label || defaultResume.label;
    link.hidden = !href;
    link.href = href || "#";
    link.innerHTML = `<span aria-hidden="true">⇩</span> ${escapeHtml(label)}`;
    if (href) {
      link.setAttribute("download", resume.fileName || defaultResume.fileName);
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noreferrer");
    } else {
      link.removeAttribute("download");
      link.removeAttribute("target");
      link.removeAttribute("rel");
    }
  });
}

function applySiteContent() {
  const content = state.siteContent || defaultSiteContent;
  const root = document.documentElement;
  const appearance = content.appearance || {};
  root.style.setProperty("--page", appearance.pageBackground || defaultSiteContent.appearance.pageBackground);
  root.style.setProperty("--ink", appearance.inkColor || defaultSiteContent.appearance.inkColor);
  root.style.setProperty("--teal", appearance.accentColor || defaultSiteContent.appearance.accentColor);
  root.style.setProperty("--teal-dark", appearance.accentColor || defaultSiteContent.appearance.accentColor);
  root.style.setProperty("--coral", appearance.typewriterColor || defaultSiteContent.appearance.typewriterColor);
  root.style.setProperty("--button-color", appearance.buttonColor || appearance.accentColor || defaultSiteContent.appearance.buttonColor);

  document.title = content.global?.metaTitle || defaultSiteContent.global.metaTitle;
  document.querySelector('meta[name="description"]')?.setAttribute("content", content.global?.metaDescription || defaultSiteContent.global.metaDescription);
  setText(".skip-link", content.global?.skipLink || defaultSiteContent.global.skipLink, "global.skipLink");
  setText(".brand-symbol", content.global?.brandSymbol || defaultSiteContent.global.brandSymbol, "global.brandSymbol");
  setText(".brand-mark strong", content.global?.brandName || defaultSiteContent.global.brandName, "global.brandName");
  setText(".brand-mark small", content.global?.brandSubtitle || defaultSiteContent.global.brandSubtitle, "global.brandSubtitle");

  const nav = content.global?.nav || defaultSiteContent.global.nav;
  [
    ["/", nav.home, "global.nav.home"],
    ["/work", nav.work, "global.nav.work"],
    ["/featured-projects", nav.featured, "global.nav.featured"],
    ["/about", nav.about, "global.nav.about"],
    ["/contact", nav.contact, "global.nav.contact"]
  ].forEach(([route, label, key]) => setText(`.main-nav a[data-route="${route}"]`, label, key));
  updateResumeLinks();
}

function cloneItems(items = []) {
  return JSON.parse(JSON.stringify(items));
}

function deepEqual(firstValue, secondValue) {
  return JSON.stringify(firstValue ?? null) === JSON.stringify(secondValue ?? null);
}

function sanitizeBreakHintText(value) {
  if (typeof value === "string") return stripSavedBreakHints(value);
  if (Array.isArray(value)) return value.map(sanitizeBreakHintText);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, sanitizeBreakHintText(item)]));
  }
  return value;
}

function comparableExperience(experience = {}) {
  const clean = sanitizeBreakHintText(experience);
  const detailSettings = imageSettings(clean, "detail");
  return {
    ...clean,
    homeSlot: normalizeFeaturedHomeSlot(clean.homeSlot),
    imageFit: imageSettings(clean).fit,
    imagePosition: imageSettings(clean).position,
    imageZoom: String(imageSettings(clean).zoom),
    detailImageFit: detailSettings.fit,
    detailImagePosition: detailSettings.position,
    detailImageZoom: String(detailSettings.zoom)
  };
}

function comparableProject(project = {}) {
  const clean = sanitizeBreakHintText(project);
  const cardSettings = imageSettings(clean);
  const featuredSettings = imageSettings(clean, "featured");
  const detailSettings = imageSettings(clean, "detail");
  return {
    ...clean,
    homeSlot: normalizeFeaturedHomeSlot(clean.homeSlot),
    featuredRank: normalizeFeaturedRank(clean.featuredRank),
    category: projectCategoriesFor(clean)[0] || "",
    categories: projectCategoriesFor(clean),
    imageFit: cardSettings.fit,
    imagePosition: cardSettings.position,
    imageZoom: String(cardSettings.zoom),
    featuredImageFit: featuredSettings.fit,
    featuredImagePosition: featuredSettings.position,
    featuredImageZoom: String(featuredSettings.zoom),
    detailImageFit: detailSettings.fit,
    detailImagePosition: detailSettings.position,
    detailImageZoom: String(detailSettings.zoom)
  };
}

function comparableItems(items = [], type = "project") {
  const normalize = type === "experience" ? comparableExperience : comparableProject;
  return cloneItems(items).map(normalize);
}

function mergeDeep(defaultValue, savedValue) {
  if (Array.isArray(defaultValue)) {
    return Array.isArray(savedValue) ? cloneItems(savedValue) : cloneItems(defaultValue);
  }
  if (defaultValue && typeof defaultValue === "object") {
    const nextValue = {};
    Object.entries(defaultValue).forEach(([key, value]) => {
      nextValue[key] = mergeDeep(value, savedValue?.[key]);
    });
    if (savedValue && typeof savedValue === "object" && !Array.isArray(savedValue)) {
      Object.entries(savedValue).forEach(([key, value]) => {
        if (!(key in nextValue)) nextValue[key] = cloneItems(value);
      });
    }
    return nextValue;
  }
  return savedValue === undefined || savedValue === null ? defaultValue : savedValue;
}

function normalizeSiteContent(siteContent = {}) {
  const merged = mergeDeep(defaultSiteContent, siteContent);
  if (!siteContent?.global?.nav?.featured && siteContent?.global?.nav?.portfolio) {
    merged.global.nav.featured = "Featured Projects";
  }
  if (!siteContent?.featured && siteContent?.portfolio) {
    merged.featured = {
      eyebrow: "Featured projects",
      headline: siteContent.portfolio.headline || defaultSiteContent.featured.headline,
      searchPlaceholder: "Search featured project, tool, outcome"
    };
  }
  delete merged.global.nav.portfolio;
  delete merged.home.portfolioEyebrow;
  delete merged.home.portfolioHeadline;
  delete merged.portfolio;
  return merged;
}

function pathParts(path = "") {
  return String(path).split(".").map((part) => (/^\d+$/.test(part) ? Number(part) : part));
}

function getPathValue(source, path) {
  return pathParts(path).reduce((value, key) => value?.[key], source);
}

function setPathValue(source, path, nextValue) {
  const parts = pathParts(path);
  const last = parts.pop();
  const target = parts.reduce((value, key, index) => {
    if (value[key] === undefined) {
      value[key] = typeof parts[index + 1] === "number" ? [] : {};
    }
    return value[key];
  }, source);
  target[last] = nextValue;
}

function removeTextStyle(key) {
  if (state.siteContent.appearance?.textStyles?.[key]) {
    delete state.siteContent.appearance.textStyles[key];
  }
}

function resetContentField(field) {
  setPathValue(state.siteContent, field.path, cloneItems(getPathValue(defaultSiteContent, field.path)));
  removeTextStyle(field.key);
}

function contentFieldDirty(field) {
  const currentContent = normalizeSiteContent(state.siteContent);
  const publishedContent = normalizeSiteContent(publishedSiteContent);
  const currentValue = getPathValue(currentContent, field.path);
  const publishedValue = getPathValue(publishedContent, field.path);
  const currentStyle = currentContent.appearance?.textStyles?.[field.key] || null;
  const publishedStyle = publishedContent.appearance?.textStyles?.[field.key] || null;
  return !deepEqual(currentValue, publishedValue) || !deepEqual(currentStyle, publishedStyle);
}

function contentPageDirty(pageId) {
  return pageFields(pageId).some(contentFieldDirty);
}

function siteContentDirty() {
  return !deepEqual(normalizeSiteContent(state.siteContent), normalizeSiteContent(publishedSiteContent));
}

function portfolioContentDirty() {
  return !deepEqual(comparableItems(experiences, "experience"), comparableItems(publishedExperiences, "experience"))
    || !deepEqual(comparableItems(state.projects), comparableItems(publishedProjects))
    || !deepEqual(comparableItems(state.portfolioProjects), comparableItems(publishedPortfolioProjects))
    || !deepEqual(comparableItems(state.featuredProducts), comparableItems(publishedFeaturedProducts));
}

function projectCollectionDirty(collection) {
  if (collection === "featured") return !deepEqual(comparableItems(state.featuredProducts), comparableItems(publishedFeaturedProducts));
  if (collection === "portfolio") return !deepEqual(comparableItems(state.portfolioProjects), comparableItems(publishedPortfolioProjects));
  return !deepEqual(comparableItems(state.projects), comparableItems(publishedProjects));
}

function itemDirty(item, currentCollection, publishedCollection) {
  const publishedItem = publishedCollection.find((candidate) => candidate.id === item.id);
  if (!publishedItem) return true;
  const type = currentCollection === experiences ? "experience" : "project";
  const normalize = type === "experience" ? comparableExperience : comparableProject;
  return !deepEqual(normalize(item), normalize(publishedItem));
}

function experienceDirty(experience) {
  return itemDirty(experience, experiences, publishedExperiences);
}

function projectDirty(project, collection) {
  const publishedCollection = collection === "featured"
    ? publishedFeaturedProducts
    : collection === "portfolio"
      ? publishedPortfolioProjects
      : publishedProjects;
  return itemDirty(project, null, publishedCollection);
}

function renderDirtyBadge() {
  return `<span class="draft-badge">Unpublished draft</span>`;
}

function refreshDraftIndicators() {
  renderAdminMode();
  renderContentTabs();
}

function portfolioSnapshot(source = {}) {
  return {
    experiences: cloneItems(source.experiences || experiences),
    projects: cloneItems(source.projects || state.projects),
    portfolioProjects: cloneItems(source.portfolioProjects || state.portfolioProjects),
    featuredProducts: cloneItems(source.featuredProducts || state.featuredProducts),
    siteContent: normalizeSiteContent(source.siteContent || state.siteContent),
    resume: normalizeResume(source.resume || state.resume)
  };
}

function publishedPortfolioSnapshot() {
  return {
    experiences: cloneItems(publishedExperiences),
    projects: cloneItems(publishedProjects),
    portfolioProjects: cloneItems(publishedPortfolioProjects),
    featuredProducts: cloneItems(publishedFeaturedProducts),
    siteContent: normalizeSiteContent(publishedSiteContent),
    resume: normalizeResume(publishedResume)
  };
}

function compactHash(value = "") {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = ((hash << 5) - hash + value.charCodeAt(index)) | 0;
  }
  return String(hash);
}

function publishedPortfolioSignature() {
  return compactHash(JSON.stringify(publishedPortfolioSnapshot()));
}

function normalizePortfolioData(data) {
  const cleanData = sanitizeBreakHintText(data || {});
  return {
    experiences: Array.isArray(cleanData?.experiences)
      ? cloneItems(cleanData.experiences)
      : [],
    projects: Array.isArray(cleanData?.projects)
      ? cloneItems(cleanData.projects)
      : [],
    portfolioProjects: Array.isArray(cleanData?.portfolioProjects)
      ? cloneItems(cleanData.portfolioProjects)
      : [],
    featuredProducts: Array.isArray(cleanData?.featuredProducts)
      ? cloneItems(cleanData.featuredProducts)
      : [],
    siteContent: normalizeSiteContent(cleanData?.siteContent),
    resume: normalizeResume(cleanData?.resume || state?.resume || defaultResume)
  };
}

async function loadPublishedPortfolio() {
  if (state.dataLoaded) return;

  try {
    const response = await fetch(DATA_URL, { cache: "no-store" });
    if (response.ok) {
      const data = normalizePortfolioData(await response.json());
      publishedExperiences = data.experiences;
      publishedProjects = data.projects;
      publishedPortfolioProjects = data.portfolioProjects;
      publishedFeaturedProducts = data.featuredProducts;
      publishedSiteContent = data.siteContent;
      publishedResume = data.resume;
    }
  } catch {
    publishedExperiences = [];
    publishedProjects = [];
    publishedPortfolioProjects = [];
    publishedFeaturedProducts = [];
    publishedSiteContent = cloneItems(defaultSiteContent);
    publishedResume = cloneItems(defaultResume);
  }

  state.dataLoaded = true;
}

function usePublishedPortfolio() {
  experiences = cloneItems(publishedExperiences);
  state.projects = cloneItems(publishedProjects);
  state.portfolioProjects = cloneItems(publishedPortfolioProjects);
  state.featuredProducts = cloneItems(publishedFeaturedProducts);
  state.siteContent = normalizeSiteContent(publishedSiteContent);
  state.resume = normalizeResume(publishedResume);
  applySiteContent();
}

function loadDraftPortfolio() {
  const published = publishedPortfolioSnapshot();
  const baseSignature = publishedPortfolioSignature();
  if (state.adminData && state.adminDataBaseSignature === baseSignature) return cloneItems(state.adminData);
  if (state.adminData) {
    state.adminData = null;
    state.adminDataBaseSignature = "";
  }

  const stored = localStorage.getItem(DRAFT_STORE_KEY);
  if (!stored) {
    return published;
  }

  try {
    const parsed = JSON.parse(stored);
    if (
      parsed?.__draftVersion === DRAFT_STORE_VERSION
      && parsed?.baseSignature === baseSignature
      && parsed?.portfolio
    ) {
      return normalizePortfolioData(parsed.portfolio);
    }
    localStorage.removeItem(DRAFT_STORE_KEY);
    return published;
  } catch {
    localStorage.removeItem(DRAFT_STORE_KEY);
    return published;
  }
}

function saveDraftPortfolio(data) {
  const nextData = normalizePortfolioData(data);
  const baseSignature = publishedPortfolioSignature();
  state.adminData = nextData;
  state.adminDataBaseSignature = baseSignature;
  try {
    localStorage.setItem(DRAFT_STORE_KEY, JSON.stringify({
      __draftVersion: DRAFT_STORE_VERSION,
      baseSignature,
      savedAt: new Date().toISOString(),
      portfolio: nextData
    }));
    state.draftStorageWarning = false;
  } catch {
    localStorage.removeItem(DRAFT_STORE_KEY);
    state.draftStorageWarning = true;
    showToast("Draft is too large for browser storage, but it is kept in this tab for publishing.");
  }
  experiences = cloneItems(nextData.experiences);
  state.projects = cloneItems(nextData.projects);
  state.portfolioProjects = cloneItems(nextData.portfolioProjects);
  state.featuredProducts = cloneItems(nextData.featuredProducts);
  state.siteContent = normalizeSiteContent(nextData.siteContent);
  state.resume = normalizeResume(nextData.resume);
  applySiteContent();
}

function loadProjects() {
  return cloneItems(publishedProjects);
}

function saveProjects(projects) {
  saveDraftPortfolio({ experiences, projects, portfolioProjects: state.portfolioProjects, featuredProducts: state.featuredProducts, siteContent: state.siteContent });
}

function savePortfolioProjects(portfolioProjects) {
  saveDraftPortfolio({ experiences, projects: state.projects, portfolioProjects, featuredProducts: state.featuredProducts, siteContent: state.siteContent });
}

function saveFeaturedProducts(featuredProducts) {
  saveDraftPortfolio({ experiences, projects: state.projects, portfolioProjects: state.portfolioProjects, featuredProducts, siteContent: state.siteContent });
}

function routeParts() {
  const route = window.location.hash.replace("#", "") || "/";
  const parts = route.split("/").filter(Boolean);
  if (!parts.length) return { name: "/", id: "" };
  return { name: `/${parts[0]}`, id: parts[1] || "" };
}

function currentTemplate() {
  const { name, id } = routeParts();
  if (name === "/experience" && id) return "experience-template";
  if ((name === "/work-project" || name === "/portfolio-project" || name === "/featured-project") && id) return "project-template";
  const templates = {
    "/": "home-template",
    "/work": "work-template",
    "/featured-projects": "featured-template",
    "/admin": "admin-template",
    "/studio": "admin-template",
    "/about": "about-template",
    "/contact": "contact-template"
  };
  return templates[name] || "home-template";
}

function headerScrollOffset() {
  return (document.querySelector(".site-header")?.offsetHeight || 0) + 18;
}

function activeHomeRouteFromScroll() {
  const featuredSection = document.querySelector(HOME_SECTION_NAV.featured.selector);
  const workSection = document.querySelector(HOME_SECTION_NAV.work.selector);
  if (!featuredSection || !workSection) return "/";

  const checkpoint = headerScrollOffset() + Math.min(window.innerHeight * 0.28, 220);
  if (workSection.getBoundingClientRect().top <= checkpoint) return HOME_SECTION_NAV.work.route;
  if (featuredSection.getBoundingClientRect().top <= checkpoint) return HOME_SECTION_NAV.featured.route;
  return "/";
}

function updateHomeSectionNav() {
  const activeRoute = activeHomeRouteFromScroll();
  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.classList.toggle("active", link.dataset.route === activeRoute);
  });
}

function setActiveNav() {
  const { name } = routeParts();
  if (name === "/") {
    updateHomeSectionNav();
    return;
  }

  const activeRoute = name === "/experience" || name === "/work-project"
    ? "/work"
    : name === "/featured-project"
      ? "/featured-projects"
      : name;
  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.classList.toggle("active", link.dataset.route === activeRoute);
  });
}

function cleanupHomeSectionTracking() {
  if (state.homeSectionScrollHandler) {
    window.removeEventListener("scroll", state.homeSectionScrollHandler);
    state.homeSectionScrollHandler = null;
  }
  if (state.homeSectionResizeHandler) {
    window.removeEventListener("resize", state.homeSectionResizeHandler);
    state.homeSectionResizeHandler = null;
  }
  if (state.homeNavFrame) {
    window.cancelAnimationFrame(state.homeNavFrame);
    state.homeNavFrame = 0;
  }
}

function setupHomeSectionTracking() {
  cleanupHomeSectionTracking();
  state.homeSectionScrollHandler = () => {
    if (state.homeNavFrame) return;
    state.homeNavFrame = window.requestAnimationFrame(() => {
      state.homeNavFrame = 0;
      updateHomeSectionNav();
    });
  };
  state.homeSectionResizeHandler = state.homeSectionScrollHandler;
  window.addEventListener("scroll", state.homeSectionScrollHandler, { passive: true });
  window.addEventListener("resize", state.homeSectionResizeHandler);
  updateHomeSectionNav();
}

function scrollToHomeSection(section, behavior = "smooth") {
  const target = document.querySelector(HOME_SECTION_NAV[section]?.selector);
  if (!target) return false;

  const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerScrollOffset());
  window.scrollTo({ top, left: 0, behavior });
  window.requestAnimationFrame(updateHomeSectionNav);
  window.setTimeout(updateHomeSectionNav, 350);
  return true;
}

function settleHomeSectionScroll(section) {
  scrollToHomeSection(section, "auto");
  [180, 600, 1200].forEach((delay) => {
    window.setTimeout(() => scrollToHomeSection(section, "auto"), delay);
  });
}

function goToHomeSection(section) {
  if (!HOME_SECTION_NAV[section]) return;
  state.pendingHomeSection = section;
  if (routeParts().name === "/") {
    scrollToHomeSection(section);
    state.pendingHomeSection = "";
    return;
  }
  window.location.hash = "#/";
}

function experienceById(id) {
  return experiences.find((experience) => experience.id === id) || experiences[0];
}

function projectById(id, collection = "work") {
  const source = collection === "featured"
    ? state.featuredProducts
    : collection === "portfolio"
      ? state.portfolioProjects
      : state.projects;
  return source.find((project) => project.id === id);
}

function projectDetailUrl(project, collection = "work") {
  const route = collection === "work"
    ? "work-project"
    : collection === "featured"
      ? "featured-project"
      : "portfolio-project";
  return `#/${route}/${encodeURIComponent(project.id)}`;
}

function projectsForExperience(id) {
  return state.projects.filter((project) => project.experienceId === id);
}

function categoryColor(category) {
  const colors = {
    Branding: "#a348ff",
    "Campaign Design": "#087f6f",
    "Graphic Design": "#ff6542",
    "Social Media": "#ff6542",
    "Motion Graphics": "#3557ff",
    "Video Editing": "#d946ef",
    Illustration: "#ff4fa3",
    Multimedia: "#155e75",
    "Emerging Media": "#155e75"
  };
  return colors[category] || "#087f6f";
}

function normalizeProjectCategories(values = [], fallback = "") {
  const source = Array.isArray(values) ? values : [values];
  const categories = source
    .map((category) => String(category || "").trim())
    .filter(Boolean);
  if (fallback) categories.unshift(String(fallback).trim());
  const uniqueCategories = [];
  categories.forEach((category) => {
    if (category && !uniqueCategories.includes(category)) uniqueCategories.push(category);
  });
  return uniqueCategories.length ? uniqueCategories : [DEFAULT_PROJECT_CATEGORIES[0]];
}

function projectCategoriesFor(project = {}) {
  return normalizeProjectCategories(project.categories, project.category);
}

function projectPrimaryCategory(project = {}) {
  return projectCategoriesFor(project)[0] || project.category || DEFAULT_PROJECT_CATEGORIES[0];
}

function projectCategoryLabel(project = {}) {
  return projectCategoriesFor(project).join(" + ");
}

function projectHasCategory(project = {}, category = "") {
  if (category === "All") return true;
  return projectCategoriesFor(project).includes(category);
}

function categoryPills(project = {}, fallback = "Project") {
  const categories = projectCategoriesFor(project);
  return categories.length
    ? categories.map((category) => `<span class="pill">${escapeHtml(category)}</span>`).join("")
    : `<span class="pill">${escapeHtml(fallback)}</span>`;
}

function normalizeMediaType(value = "") {
  if (value === "Mixed Media") return "Multimedia";
  return value || "Image";
}

function projectCategories() {
  const featuredFilters = Array.isArray(state.siteContent?.home?.featuredFilters)
    ? state.siteContent.home.featuredFilters.filter((item) => item && item !== "All")
    : [];
  const usedCategories = [
    ...state.projects,
    ...state.portfolioProjects,
    ...state.featuredProducts
  ].flatMap(projectCategoriesFor).filter(Boolean);
  return [...new Set([...DEFAULT_PROJECT_CATEGORIES, ...featuredFilters, ...usedCategories])];
}

function currentProjectCategorySelections() {
  const primary = document.getElementById("category")?.value || "";
  const extras = Array.from(document.querySelectorAll("[data-extra-category]"))
    .map((select) => select.value);
  return normalizeProjectCategories([primary, ...extras]);
}

function categorySelectOptions(selectedValue = "") {
  return projectCategories()
    .map((category) => `<option${category === selectedValue ? " selected" : ""}>${escapeHtml(category)}</option>`)
    .join("");
}

function renderCategoryBuilder(selectedCategories = currentProjectCategorySelections()) {
  const builder = document.getElementById("category-builder");
  if (!builder) return;
  const categories = projectCategories();
  const normalized = normalizeProjectCategories(selectedCategories);
  const extras = normalized.slice(1);
  const canAdd = normalized.length < categories.length;

  builder.innerHTML = `
    <div class="category-builder-list">
      ${extras.map((category, index) => `
        <label class="category-row">
          Category ${index + 2}
          <select data-extra-category data-category-index="${index + 1}">
            ${categorySelectOptions(category)}
          </select>
          <button class="mini-button danger" type="button" data-remove-category="${index + 1}">Remove</button>
        </label>
      `).join("")}
    </div>
    <button class="mini-button" type="button" data-add-category ${canAdd ? "" : "disabled"}>+ Add category</button>
  `;
}

function renderCategoryOptions(selectedValue = "", selectedCategories = null) {
  const select = document.getElementById("category");
  if (!select) return;
  const categories = projectCategories();
  const selected = categories.includes(selectedValue) ? selectedValue : categories[0];
  const categoryList = selectedCategories
    ? normalizeProjectCategories(selectedCategories, selected)
    : normalizeProjectCategories(currentProjectCategorySelections(), selected);
  select.innerHTML = categorySelectOptions(selected);
  renderCategoryBuilder(categoryList);
}

function setupCategoryBuilderControls() {
  const categorySelect = document.getElementById("category");
  const builder = document.getElementById("category-builder");
  if (!categorySelect || !builder) return;

  categorySelect.addEventListener("change", () => {
    renderCategoryBuilder(currentProjectCategorySelections());
    renderPreview();
  });

  builder.addEventListener("change", (event) => {
    if (!event.target.closest("[data-extra-category]")) return;
    renderCategoryBuilder(currentProjectCategorySelections());
    renderPreview();
  });

  builder.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-category]");
    if (removeButton) {
      const selections = currentProjectCategorySelections();
      selections.splice(Number(removeButton.dataset.removeCategory), 1);
      renderCategoryBuilder(selections);
      renderPreview();
      return;
    }

    const addButton = event.target.closest("[data-add-category]");
    if (!addButton) return;
    const selections = currentProjectCategorySelections();
    const nextCategory = projectCategories().find((category) => !selections.includes(category));
    if (!nextCategory) return;
    selections.push(nextCategory);
    renderCategoryBuilder(selections);
    renderPreview();
  });
}

function projectGradient(project) {
  const accent = project.accent || categoryColor(projectPrimaryCategory(project));
  return `linear-gradient(135deg, ${accent}, #111827)`;
}

function normalizeImageFit(value) {
  return value === "contain" ? "contain" : "cover";
}

function normalizeImagePosition(value) {
  const allowed = new Set([
    "center center",
    "center top",
    "center bottom",
    "left center",
    "right center"
  ]);
  return allowed.has(value) ? value : "center center";
}

function normalizeImageZoom(value) {
  const zoom = Number(value);
  if (!Number.isFinite(zoom)) return 100;
  return Math.min(160, Math.max(100, zoom));
}

function normalizeFeaturedHomeSlot(value = "") {
  const slot = String(value || "");
  return ["1", "2", "3", "hidden"].includes(slot) ? slot : "";
}

function normalizeFeaturedRank(value = "") {
  const rank = Number.parseInt(value, 10);
  if (!Number.isFinite(rank)) return "";
  return rank >= 1 && rank <= 6 ? String(rank) : "";
}

function normalizeHomeCardLimit(value = 3) {
  const count = Number.parseInt(value, 10);
  if (!Number.isFinite(count)) return 3;
  return Math.min(3, Math.max(1, count));
}

function homeExperienceLimit() {
  return normalizeHomeCardLimit(state.siteContent.home?.workVisibleCount);
}

function featuredHomeSlotLabel(slot = "") {
  const normalized = normalizeFeaturedHomeSlot(slot);
  if (normalized === "hidden") return "Featured project · hidden from home";
  if (normalized) return `Featured project · home card ${normalized}`;
  return "Featured project · auto home fill";
}

function featuredRankLabel(rank = "") {
  const normalized = normalizeFeaturedRank(rank);
  return normalized ? `Featured rank ${normalized}` : "Featured rank auto";
}

function experienceHomeSlotLabel(slot = "") {
  const normalized = normalizeFeaturedHomeSlot(slot);
  if (normalized === "hidden") return "Home hidden";
  if (normalized) return `Home card ${normalized}`;
  return "Auto home fill";
}

const IMAGE_SETTING_KEYS = {
  default: {
    fit: "imageFit",
    position: "imagePosition",
    zoom: "imageZoom"
  },
  featured: {
    fit: "featuredImageFit",
    position: "featuredImagePosition",
    zoom: "featuredImageZoom"
  },
  detail: {
    fit: "detailImageFit",
    position: "detailImagePosition",
    zoom: "detailImageZoom"
  }
};

function imageSettings(item = {}, variant = "default") {
  const keys = IMAGE_SETTING_KEYS[variant] || IMAGE_SETTING_KEYS.default;
  const baseKeys = IMAGE_SETTING_KEYS.default;
  return {
    fit: normalizeImageFit(item[keys.fit] || item[baseKeys.fit]),
    position: normalizeImagePosition(item[keys.position] || item[baseKeys.position]),
    zoom: normalizeImageZoom(item[keys.zoom] || item[baseKeys.zoom])
  };
}

function imageStyle(project, variant = "default") {
  const { fit, position, zoom } = imageSettings(project, variant);
  return `object-fit: ${fit}; object-position: ${position}; transform: scale(${zoom / 100});`;
}

function imageMarkup(imageSrc, title, style = "", options = {}) {
  const loading = options.loading || "lazy";
  const fetchPriority = options.fetchPriority ? ` fetchpriority="${escapeHtml(options.fetchPriority)}"` : "";
  const styleAttribute = style ? ` style="${style}"` : "";
  return imageSrc
    ? `<img src="${escapeHtml(imageSrc)}" alt="${escapeHtml(title)}"${styleAttribute} loading="${escapeHtml(loading)}" decoding="async"${fetchPriority}>`
    : "";
}

function stripSavedBreakHints(value = "") {
  return String(value)
    .replace(/&lt;\s*wbr\s*\/?\s*&gt;/gi, "")
    .replace(/<\s*wbr\s*\/?\s*>/gi, "");
}

function breakableHtml(value = "") {
  const cleanValue = stripSavedBreakHints(value);
  return cleanValue
    .split(/(\s+)/)
    .map((token) => {
      if (/^\s+$/.test(token)) return escapeHtml(token);
      return Array.from(token).map((char, index, chars) => {
        const next = chars[index + 1];
        const shouldBreak = next && (
          (/[a-z]/.test(char) && /[A-Z]/.test(next))
          || /[_/.-]/.test(char)
          || ((index + 1) % 12 === 0)
        );
        return `${escapeHtml(char)}${shouldBreak ? "<wbr>" : ""}`;
      }).join("");
    })
    .join("");
}

function mediaIcon(mediaType = "") {
  const icons = {
    Image: "□",
    Video: "▶",
    Multimedia: "✦",
    "Mixed Media": "✦",
    "Case Study": "◎"
  };
  return icons[mediaType] || "✦";
}

function isVideoProject(project) {
  return (project.mediaType || "").toLowerCase() === "video";
}

const TOOL_LOGOS = {
  "after effects": `<svg class="brand-icon brand-icon-letter" viewBox="0 0 44 44" aria-hidden="true"><text x="50%" y="56%" text-anchor="middle" dominant-baseline="middle">Ae</text></svg>`,
  firefly: `<svg class="brand-icon brand-icon-firefly" viewBox="0 0 44 44" aria-hidden="true"><path d="M22 7l3.8 10.2L36 21l-10.2 3.8L22 35l-3.8-10.2L8 21l10.2-3.8L22 7z"/><path d="M33 6l1.4 3.6L38 11l-3.6 1.4L33 16l-1.4-3.6L28 11l3.6-1.4L33 6z"/></svg>`,
  figma: `<svg class="brand-icon brand-icon-figma" viewBox="0 0 38 57" aria-hidden="true"><path fill="#1ABCFE" d="M19 28.5C19 23.253 23.253 19 28.5 19S38 23.253 38 28.5 33.747 38 28.5 38 19 33.747 19 28.5z"/><path fill="#0ACF83" d="M0 47.5C0 42.253 4.253 38 9.5 38H19v9.5C19 52.747 14.747 57 9.5 57S0 52.747 0 47.5z"/><path fill="#FF7262" d="M19 0v19h9.5C33.747 19 38 14.747 38 9.5S33.747 0 28.5 0H19z"/><path fill="#F24E1E" d="M0 9.5C0 14.747 4.253 19 9.5 19H19V0H9.5C4.253 0 0 4.253 0 9.5z"/><path fill="#A259FF" d="M0 28.5C0 33.747 4.253 38 9.5 38H19V19H9.5C4.253 19 0 23.253 0 28.5z"/></svg>`,
  illustrator: `<svg class="brand-icon brand-icon-letter" viewBox="0 0 44 44" aria-hidden="true"><text x="50%" y="56%" text-anchor="middle" dominant-baseline="middle">Ai</text></svg>`,
  indesign: `<svg class="brand-icon brand-icon-letter" viewBox="0 0 44 44" aria-hidden="true"><text x="50%" y="56%" text-anchor="middle" dominant-baseline="middle">Id</text></svg>`,
  instagram: `<svg class="brand-icon brand-icon-instagram" viewBox="0 0 44 44" aria-hidden="true"><rect x="10" y="10" width="24" height="24" rx="7"/><circle cx="22" cy="22" r="6"/><circle cx="29" cy="15" r="2"/></svg>`,
  photography: `<svg class="brand-icon brand-icon-camera" viewBox="0 0 44 44" aria-hidden="true"><path d="M13 16h5l2-3h8l2 3h4a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V20a4 4 0 0 1 4-4h3z"/><circle cx="22" cy="26" r="7"/></svg>`,
  photoshop: `<svg class="brand-icon brand-icon-letter" viewBox="0 0 44 44" aria-hidden="true"><text x="50%" y="56%" text-anchor="middle" dominant-baseline="middle">Ps</text></svg>`,
  "premiere pro": `<svg class="brand-icon brand-icon-letter" viewBox="0 0 44 44" aria-hidden="true"><text x="50%" y="56%" text-anchor="middle" dominant-baseline="middle">Pr</text></svg>`,
  procreate: `<svg class="brand-icon brand-icon-procreate" viewBox="0 0 44 44" aria-hidden="true"><path d="M8 31c6-10 11-17 24-23-5 12-12 19-23 25l-1-2z"/><path d="M11 34c5 3 14 2 20-4 6-6 8-15 4-20-1 8-7 20-24 24z"/></svg>`,
  runway: `<svg class="brand-icon brand-icon-runway" viewBox="0 0 44 44" aria-hidden="true"><path d="M10 12h13c7 0 11 4 11 10s-4 10-11 10H10V12zm8 7v7h5c3 0 5-1 5-3.5S26 19 23 19h-5z"/></svg>`
};

function normalizeToolName(tool = "") {
  const clean = tool
    .toLowerCase()
    .replace(/\badobe\b/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (clean === "premiere pro" || clean === "premiere") return "premiere pro";
  if (clean === "after effects" || clean === "after effect") return "after effects";
  if (clean === "in design") return "indesign";
  return clean;
}

function toolAbbreviation(tool) {
  const known = {
    photoshop: "Ps",
    illustrator: "Ai",
    indesign: "Id",
    "after effects": "Ae",
    "premiere pro": "Pr",
    figma: "Fi",
    procreate: "Pc",
    firefly: "Af",
    runway: "Ru",
    photography: "Ph",
    instagram: "Ig"
  };
  return known[normalizeToolName(tool)] || tool.slice(0, 2);
}

function toolList(tools = "") {
  return tools
    .split(",")
    .map((tool) => tool.trim())
    .filter(Boolean);
}

function toolClass(tool = "") {
  return tool.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "tool";
}

function toolLogoMarkup(tool = "") {
  return TOOL_LOGOS[normalizeToolName(tool)]
    || `<span class="tool-logo-fallback">${escapeHtml(toolAbbreviation(tool))}</span>`;
}

function toolIcons(tools = "") {
  return toolList(tools)
    .slice(0, 6)
    .map((tool) => `
      <span class="tool-icon tool-${escapeHtml(toolClass(tool))}" title="${escapeHtml(tool)}" aria-label="${escapeHtml(tool)}">
        ${toolLogoMarkup(tool)}
      </span>
    `)
    .join("");
}

function softwareCards(tools = "") {
  const toolsUsed = toolList(tools);
  if (!toolsUsed.length) {
    return `<div class="empty-state"><strong>Software details coming soon.</strong></div>`;
  }

  return toolsUsed
    .map((tool) => `
      <article class="software-card tool-${escapeHtml(toolClass(tool))}">
        <span class="software-logo">${toolLogoMarkup(tool)}</span>
        <strong>${escapeHtml(tool)}</strong>
      </article>
    `)
    .join("");
}

function coverArt(project, size = "large") {
  const titleWords = project.title.split(" ").slice(0, 5).join(" ");
  const accent = project.accent || categoryColor(projectPrimaryCategory(project));

  return `
    <div class="cover-art ${size}" style="--cover-accent: ${accent};">
      <span class="cover-media" aria-hidden="true">${mediaIcon(project.mediaType)}</span>
      <span class="cover-dot dot-one"></span>
      <span class="cover-dot dot-two"></span>
      <span class="cover-line line-one"></span>
      <span class="cover-line line-two"></span>
      <span class="cover-tag">${escapeHtml(normalizeMediaType(project.mediaType) || projectPrimaryCategory(project))}</span>
      <strong>${escapeHtml(titleWords)}</strong>
      <em>${escapeHtml(project.year || "Project")}</em>
    </div>
  `;
}

function projectCard(project, collection = "work") {
  const link = safeUrl(project.link);
  const isVideo = isVideoProject(project);
  const image = project.image
    ? `<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)} project image" style="${imageStyle(project)}" loading="lazy" decoding="async">`
    : coverArt(project, "large");

  return `
    <article class="project-card ${isVideo ? "is-video" : ""}" data-project-id="${escapeHtml(project.id)}">
      <div class="project-thumb" style="background: ${projectGradient(project)}">${image}</div>
      <div class="project-body">
        <div class="project-meta">
          ${categoryPills(project)}
          <span class="pill">${escapeHtml(normalizeMediaType(project.mediaType) || "Work")}</span>
          ${project.year ? `<span class="pill">${escapeHtml(project.year)}</span>` : ""}
        </div>
        <h3>${breakableHtml(project.title)}</h3>
        <p>${escapeHtml(project.summary)}</p>
        <div class="project-footer">
          <div class="tool-row">${toolIcons(project.tools)}</div>
          <div class="impact">${escapeHtml(project.impact || project.role || "Design project")}</div>
          <div class="project-actions">
            <a class="open-work" href="${projectDetailUrl(project, collection)}" data-open-project="${escapeHtml(project.id)}">Open</a>
            ${link && !isVideo ? `<a class="project-link" href="${link}" target="_blank" rel="noreferrer">Visit link ↗</a>` : ""}
          </div>
        </div>
      </div>
    </article>
  `;
}

function primaryMediaItem(project) {
  return projectMediaGroups(project)
    .flatMap((group) => group.items)
    .find((item) => item.src || item.url || item.videoUrl) || null;
}

function featuredProjectCard(product) {
  const primaryItem = primaryMediaItem(product);
  const imageSrc = product.image || mediaVisualSrc(primaryItem || {});
  const image = imageSrc
    ? `<img src="${escapeHtml(imageSrc)}" alt="${escapeHtml(product.title)} project image" style="${imageStyle(product, "featured")}" loading="lazy" decoding="async">`
    : coverArt(product, "large");
  const previewLabel = "Open";
  const impact = product.impact || product.role || "";

  return `
    <article class="featured-product-card" data-featured-id="${escapeHtml(product.id)}" role="button" tabindex="0" aria-label="Open ${escapeHtml(product.title)} campaign page">
      <div class="featured-product-thumb" style="background: ${projectGradient(product)}">${image}</div>
      <div class="featured-product-body">
        <div class="project-meta">${categoryPills(product, "Featured")}</div>
        <h3>${breakableHtml(product.title)}</h3>
        <p>${escapeHtml(product.summary || "Featured creative project")}</p>
        <div class="project-footer">
          <div class="tool-row">${toolIcons(product.tools)}</div>
          ${impact ? `<div class="impact">${escapeHtml(impact)}</div>` : ""}
          <button class="open-work" type="button">${escapeHtml(previewLabel)}</button>
        </div>
      </div>
    </article>
  `;
}

function experienceCard(experience) {
  const count = projectsForExperience(experience.id).length;
  const image = experience.image
    ? `<img src="${escapeHtml(experience.image)}" alt="${escapeHtml(experience.company)} work experience image" style="${imageStyle(experience)}" loading="lazy" decoding="async">`
    : "";
  return `
    <a class="experience-card" href="#/experience/${experience.id}" style="--experience-accent: ${experience.accent}">
      <span class="experience-number">${String(experiences.indexOf(experience) + 1).padStart(2, "0")}</span>
      <div class="experience-cover ${image ? "has-image" : ""}">
        ${image}
        <span>${breakableHtml(experience.company)}</span>
      </div>
      <div class="experience-body">
        <p class="eyebrow">${escapeHtml(experience.dates)}</p>
        <h3>${breakableHtml(experience.title)}</h3>
        <strong>${breakableHtml(experience.company)}</strong>
        <p>${escapeHtml(experience.headline)}</p>
        <div class="experience-bottom">
          <span>${count} project${count === 1 ? "" : "s"}</span>
          <span>Open →</span>
        </div>
      </div>
    </a>
  `;
}

function adminRow(project, collection = "work") {
  const experience = experiences.find((item) => item.id === project.experienceId);
  const image = project.image ? `<img src="${escapeHtml(project.image)}" alt="" style="${imageStyle(project)}" loading="lazy" decoding="async">` : "";
  const isDirty = projectDirty(project, collection);
  const source = collection === "featured"
    ? `${featuredRankLabel(project.featuredRank)} · ${featuredHomeSlotLabel(project.homeSlot)}`
    : collection === "portfolio"
      ? "Featured project archive"
      : experience ? experience.company : "Work experience";

  return `
    <div class="admin-row ${isDirty ? "draft-dirty" : ""}" data-id="${project.id}" data-collection="${collection}">
      <div class="admin-row-thumb" style="background: ${projectGradient(project)}">${image}</div>
      <div>
        <strong>${breakableHtml(project.title)}</strong>
        <small>${escapeHtml(source)} · ${escapeHtml(projectCategoryLabel(project))} · ${escapeHtml(normalizeMediaType(project.mediaType) || "Work")}</small>
        ${isDirty ? renderDirtyBadge() : ""}
      </div>
      <div class="row-actions">
        <button class="icon-button" type="button" data-action="edit" aria-label="Edit ${escapeHtml(project.title)}">✎</button>
        <button class="icon-button delete" type="button" data-action="delete" aria-label="Delete ${escapeHtml(project.title)}">×</button>
      </div>
    </div>
  `;
}

async function renderRoute() {
  window.clearInterval(state.typewriterTimer);
  cleanupHomeSectionTracking();
  state.filter = "All";
  state.featuredPageFilter = "All";
  state.featuredFilter = "All";
  state.query = "";
  await loadPublishedPortfolio();
  const { name } = routeParts();
  if (name !== "/admin" && name !== "/studio") {
    if (sessionStorage.getItem(PREVIEW_SESSION_KEY) === "true") {
      const draft = loadDraftPortfolio();
      experiences = cloneItems(draft.experiences);
      state.projects = cloneItems(draft.projects);
      state.portfolioProjects = cloneItems(draft.portfolioProjects);
      state.featuredProducts = cloneItems(draft.featuredProducts);
      state.siteContent = normalizeSiteContent(draft.siteContent);
      applySiteContent();
    } else {
      usePublishedPortfolio();
    }
  }
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });

  const template = document.getElementById(currentTemplate());
  const app = document.getElementById("app");
  app.replaceChildren(document.importNode(template.content, true));
  setActiveNav();
  renderDraftPreviewRibbon();

  if (name === "/") setupHome();
  if (name === "/work") setupWork();
  if (name === "/featured-projects") setupFeaturedProjectsPage();
  if (name === "/experience") setupExperienceDetail();
  if (name === "/work-project") setupProjectDetail("work");
  if (name === "/portfolio-project") setupProjectDetail("portfolio");
  if (name === "/featured-project") setupProjectDetail("featured");
  if (name === "/about") setupAbout();
  if (name === "/contact") setupContact();
  if (name === "/admin" || name === "/studio") setupAdmin();
  updateResumeLinks();
  app.focus({ preventScroll: true });
  window.requestAnimationFrame(() => {
    if (name === "/" && state.pendingHomeSection) {
      const targetSection = state.pendingHomeSection;
      state.pendingHomeSection = "";
      settleHomeSectionScroll(targetSection);
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    setActiveNav();
  });
}

function setupHome() {
  const home = state.siteContent.home;
  const featuredGrid = document.getElementById("home-featured-grid");
  const featuredFilters = document.getElementById("home-featured-filters");
  const featuredViewAll = document.getElementById("featured-view-all");
  const workViewAll = document.getElementById("work-view-all");
  const featuredBand = document.querySelector(".featured-products-band");
  const typeLine = document.querySelector(".type-line");

  setText(".home-intro .eyebrow", home.eyebrow, "home.eyebrow");
  setText(".home-intro h1", home.headline, "home.headline");
  typeLine.innerHTML = `${escapeHtml(home.typewriterPrefix)} <span id="typewriter" aria-live="polite"></span>`;
  typeLine.dataset.contentKey = "home.typewriterPrefix";
  if (state.siteContent.appearance?.textStyles?.["home.typewriterPrefix"]?.color) {
    typeLine.style.color = state.siteContent.appearance.textStyles["home.typewriterPrefix"].color;
  } else {
    typeLine.style.removeProperty("color");
  }
  setText(".hero-summary", home.summary, "home.summary");
  setText(".hero-actions .primary", `↗ ${home.primaryAction}`, "home.primaryAction");
  setText(".hero-actions .ghost", `✉ ${home.secondaryAction}`, "home.secondaryAction");
  setText(".recruiter-panel .eyebrow", home.quickScanEyebrow, "home.quickScanEyebrow");
  document.querySelector(".scan-list").innerHTML = home.quickScan
    .map((item, index) => `
      <li>
        <strong${textStyle(`home.quickScan.${index}.label`)}>${escapeHtml(item.label)}</strong>
        <span${textStyle(`home.quickScan.${index}.text`)}>${escapeHtml(item.text)}</span>
      </li>
    `)
    .join("");
  setText(".featured-products-band .eyebrow", home.featuredEyebrow, "home.featuredEyebrow");
  setText(".featured-products-band h2", home.featuredHeadline, "home.featuredHeadline");
  setText("#home-work-section .eyebrow", home.workEyebrow, "home.workEyebrow");
  setText("#home-work-section h2", home.workHeadline, "home.workHeadline");
  runTypewriter();

  if (state.featuredProducts.length) {
    featuredBand.hidden = false;
    renderFeaturedFilters(featuredFilters);
    renderHomeFeaturedProjects(featuredGrid);
    featuredGrid.addEventListener("click", handleFeaturedProductOpen);
    featuredGrid.addEventListener("keydown", handleFeaturedProductKeydown);
    featuredFilters.addEventListener("click", handleFeaturedFilter);
    if (featuredViewAll) featuredViewAll.hidden = state.featuredProducts.length <= 3;
  } else {
    featuredBand.hidden = true;
    featuredFilters.innerHTML = "";
    featuredGrid.innerHTML = "";
    if (featuredViewAll) featuredViewAll.hidden = true;
  }

  const homeExperienceItems = homeExperiences();
  document.getElementById("home-experience-grid").innerHTML = homeExperienceItems.length
    ? homeExperienceItems.map(experienceCard).join("")
    : `<div class="empty-state"><strong>No work experience cards selected for home yet.</strong></div>`;
  if (workViewAll) workViewAll.hidden = experiences.length <= 3;
  setupHomeSectionTracking();
}

function featuredFilters() {
  const configuredFilters = Array.isArray(state.siteContent.home?.featuredFilters) && state.siteContent.home.featuredFilters.length
    ? state.siteContent.home.featuredFilters
    : defaultSiteContent.home.featuredFilters;
  const usedFeaturedCategories = state.featuredProducts.flatMap(projectCategoriesFor);
  const filters = [...new Set([...configuredFilters, ...usedFeaturedCategories].filter(Boolean))];
  return filters.includes("All") ? filters : ["All", ...filters];
}

function featuredProductMatchesFilter(product) {
  return projectHasCategory(product, state.featuredFilter);
}

function featuredProjectMatchesPageFilter(project) {
  if (state.featuredPageFilter === "All") return true;
  if (state.featuredPageFilter === "Social Media") {
    return projectCategoriesFor(project).some((category) => ["Social Media", "Campaign Design", "Graphic Design"].includes(category));
  }
  return projectHasCategory(project, state.featuredPageFilter);
}

function featuredRankValue(project = {}) {
  const rank = Number.parseInt(normalizeFeaturedRank(project.featuredRank), 10);
  return Number.isFinite(rank) ? rank : Number.POSITIVE_INFINITY;
}

function featuredHomeSlotValue(project = {}) {
  const slot = Number.parseInt(normalizeFeaturedHomeSlot(project.homeSlot), 10);
  return Number.isFinite(slot) ? slot : Number.POSITIVE_INFINITY;
}

function sortFeaturedProjects(projectsToSort = []) {
  const originalIndex = new Map(state.featuredProducts.map((project, index) => [project.id, index]));
  return [...projectsToSort].sort((first, second) => {
    const firstRank = featuredRankValue(first);
    const secondRank = featuredRankValue(second);
    if (firstRank !== secondRank) return firstRank - secondRank;
    return (originalIndex.get(first.id) ?? 0) - (originalIndex.get(second.id) ?? 0);
  });
}

function homeFeaturedProjects() {
  const visibleProducts = state.featuredProducts
    .filter(featuredProductMatchesFilter)
    .filter((product) => normalizeFeaturedHomeSlot(product.homeSlot) !== "hidden");
  const originalIndex = new Map(state.featuredProducts.map((project, index) => [project.id, index]));

  return [...visibleProducts]
    .sort((first, second) => {
      const firstRank = featuredRankValue(first);
      const secondRank = featuredRankValue(second);
      if (firstRank !== secondRank) return firstRank - secondRank;

      const firstSlot = featuredHomeSlotValue(first);
      const secondSlot = featuredHomeSlotValue(second);
      if (firstSlot !== secondSlot) return firstSlot - secondSlot;

      return (originalIndex.get(first.id) ?? 0) - (originalIndex.get(second.id) ?? 0);
    })
    .slice(0, 3);
}

function homeExperiences() {
  const limit = homeExperienceLimit();
  const slots = Array.from({ length: limit }, () => null);
  const usedIds = new Set();

  experiences.forEach((experience) => {
    const slot = normalizeFeaturedHomeSlot(experience.homeSlot);
    const slotIndex = Number(slot) - 1;
    if (slotIndex >= 0 && slotIndex < limit && !slots[slotIndex]) {
      slots[slotIndex] = experience;
      usedIds.add(experience.id);
    }
  });

  const autoExperiences = experiences.filter((experience) => {
    const slot = normalizeFeaturedHomeSlot(experience.homeSlot);
    return !usedIds.has(experience.id) && slot !== "hidden";
  });

  slots.forEach((slot, index) => {
    if (!slot && autoExperiences.length) {
      const experience = autoExperiences.shift();
      slots[index] = experience;
      usedIds.add(experience.id);
    }
  });

  return slots.filter(Boolean);
}

function renderFeaturedFilters(target = document.getElementById("home-featured-filters")) {
  if (!target) return;
  const filters = featuredFilters();
  if (!filters.includes(state.featuredFilter)) state.featuredFilter = "All";
  target.innerHTML = filters
    .map((filter) => `
      <button class="filter-chip ${filter === state.featuredFilter ? "active" : ""}" type="button" data-featured-filter="${escapeHtml(filter)}">
        ${escapeHtml(filter)}
      </button>
    `)
    .join("");
}

function renderFeaturedProducts(target = document.getElementById("home-featured-grid")) {
  if (!target) return;
  const filteredProducts = sortFeaturedProjects(state.featuredProducts.filter(featuredProductMatchesFilter));
  target.innerHTML = filteredProducts.length
    ? filteredProducts.map(featuredProjectCard).join("")
    : `<div class="empty-state"><strong>No featured projects match this filter yet.</strong></div>`;
}

function renderHomeFeaturedProjects(target = document.getElementById("home-featured-grid")) {
  if (!target) return;
  const featured = homeFeaturedProjects();
  target.innerHTML = featured.length
    ? featured.map(featuredProjectCard).join("")
    : `<div class="empty-state"><strong>No featured projects match this filter yet.</strong></div>`;
}

function handleFeaturedFilter(event) {
  const button = event.target.closest("[data-featured-filter]");
  if (!button) return;
  state.featuredFilter = button.dataset.featuredFilter;
  renderFeaturedFilters();
  renderHomeFeaturedProjects();
}

function openFeaturedProduct(productId) {
  const product = state.featuredProducts.find((item) => item.id === productId);
  if (!product) return;
  window.location.hash = projectDetailUrl(product, "featured").replace("#", "");
}

function handleFeaturedProductOpen(event) {
  const card = event.target.closest("[data-featured-id]");
  if (!card) return;
  openFeaturedProduct(card.dataset.featuredId);
}

function handleFeaturedProductKeydown(event) {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[data-featured-id]");
  if (!card) return;
  event.preventDefault();
  openFeaturedProduct(card.dataset.featuredId);
}

function runTypewriter() {
  const target = document.getElementById("typewriter");
  if (!target) return;

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;
  const words = Array.isArray(state.siteContent.home?.typewriterWords) && state.siteContent.home.typewriterWords.length
    ? state.siteContent.home.typewriterWords
    : typewriterWords;

  state.typewriterTimer = window.setInterval(() => {
    const word = words[wordIndex];
    target.textContent = word.slice(0, charIndex);

    if (!deleting && charIndex < word.length) {
      charIndex += 1;
      return;
    }
    if (!deleting && charIndex === word.length) {
      deleting = true;
      return;
    }
    if (deleting && charIndex > 0) {
      charIndex -= 1;
      return;
    }

    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }, 82);
}

function setupWork() {
  setText(".dashboard-hero .eyebrow", state.siteContent.work.eyebrow, "work.eyebrow");
  setText(".dashboard-hero h1", state.siteContent.work.headline, "work.headline");
  document.getElementById("experience-grid").innerHTML = experiences.map(experienceCard).join("");
}

function renderFeaturedPageFilters() {
  const filterGroup = document.getElementById("featured-page-filter-group");
  if (!filterGroup) return;
  const filters = featuredFilters();
  if (!filters.includes(state.featuredPageFilter)) state.featuredPageFilter = "All";
  filterGroup.innerHTML = filters
    .map((category) => `
      <button class="filter-chip ${category === state.featuredPageFilter ? "active" : ""}" type="button" data-featured-page-category="${escapeHtml(category)}">
        ${escapeHtml(category)}
      </button>
    `)
    .join("");

  filterGroup.addEventListener("click", (event) => {
    const button = event.target.closest("[data-featured-page-category]");
    if (!button) return;
    state.featuredPageFilter = button.dataset.featuredPageCategory;
    renderFeaturedPageFilters();
    renderFeaturedPageProjects();
  });
}

function filteredFeaturedPageProjects() {
  return sortFeaturedProjects(state.featuredProducts.filter((project) => {
    const categoryMatch = featuredProjectMatchesPageFilter(project);
    const text = [
      project.title,
      projectCategoryLabel(project),
      project.mediaType,
      project.role,
      project.tools,
      project.summary,
      project.impact
    ].join(" ").toLowerCase();
    return categoryMatch && text.includes(state.query);
  }));
}

function renderFeaturedPageProjects() {
  const grid = document.getElementById("featured-page-grid");
  if (!grid) return;
  const filtered = filteredFeaturedPageProjects();
  grid.innerHTML = filtered.length
    ? filtered.map(featuredProjectCard).join("")
    : `<div class="empty-state"><strong>No featured projects match this filter yet.</strong></div>`;
}

function setupFeaturedProjectsPage() {
  setText(".dashboard-hero .eyebrow", state.siteContent.featured.eyebrow, "featured.eyebrow");
  setText(".dashboard-hero h1", state.siteContent.featured.headline, "featured.headline");
  document.getElementById("featured-page-search").placeholder = state.siteContent.featured.searchPlaceholder;
  renderFeaturedPageFilters();
  renderFeaturedPageProjects();

  document.getElementById("featured-page-search").addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    renderFeaturedPageProjects();
  });

  document.getElementById("featured-page-grid").addEventListener("click", handleFeaturedProductOpen);
  document.getElementById("featured-page-grid").addEventListener("keydown", handleFeaturedProductKeydown);
}

function setupAbout() {
  const about = state.siteContent.about;
  const image = document.querySelector(".sketch-card img");
  if (image) image.alt = about.sketchAlt || defaultSiteContent.about.sketchAlt;
  setText(".about-copy .eyebrow", about.eyebrow, "about.eyebrow");
  setText(".about-copy h1", about.headline, "about.headline");
  const bodyWrap = document.querySelector(".about-copy");
  bodyWrap.querySelectorAll("p:not(.eyebrow)").forEach((item) => item.remove());
  about.body.forEach((paragraph, index) => {
    const item = document.createElement("p");
    item.textContent = paragraph;
    item.dataset.contentKey = `about.body.${index}`;
    const color = state.siteContent.appearance?.textStyles?.[`about.body.${index}`]?.color;
    if (color) item.style.color = color;
    bodyWrap.append(item);
  });
  document.querySelector(".timeline").innerHTML = about.timeline
    .map((item, index) => `
      <article>
        <span${textStyle(`about.timeline.${index}.dates`)}>${escapeHtml(item.dates)}</span>
        <strong${textStyle(`about.timeline.${index}.title`)}>${escapeHtml(item.title)}</strong>
        <p${textStyle(`about.timeline.${index}.text`)}>${escapeHtml(item.text)}</p>
      </article>
    `)
    .join("");
}

function setupContact() {
  const contact = state.siteContent.contact;
  setText(".contact-band .section-heading .eyebrow", contact.eyebrow, "contact.eyebrow");
  setText(".contact-band .section-heading h1", contact.headline, "contact.headline");
  document.querySelector(".contact-grid").innerHTML = contact.cards
    .map((card, index) => `
      <a class="contact-card" href="${escapeHtml(safeHref(card.href))}" ${safeHref(card.href).startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>
        <span${textStyle(`contact.cards.${index}.icon`)}>${escapeHtml(card.icon)}</span>
        <strong${textStyle(`contact.cards.${index}.label`)}>${escapeHtml(card.label)}</strong>
        <small${textStyle(`contact.cards.${index}.value`)}>${escapeHtml(card.value)}</small>
      </a>
    `)
    .join("");
  renderResumeCallout();
}

function resumePreviewMarkup(resume = state.resume) {
  const normalized = normalizeResume(resume);
  if (normalized.previewImage) {
    return `<img src="${escapeHtml(normalized.previewImage)}" alt="Resume first page preview" loading="lazy" decoding="async">`;
  }
  return `
    <div class="resume-placeholder">
      <span>PDF</span>
      <strong>${escapeHtml(normalized.fileName || defaultResume.fileName)}</strong>
    </div>
  `;
}

function renderResumeCallout() {
  const callout = document.getElementById("resume-callout");
  if (!callout) return;
  const resume = normalizeResume(state.resume);
  const href = safeAssetHref(resume.file);
  callout.hidden = !href;
  document.getElementById("resume-callout-preview").innerHTML = resumePreviewMarkup(resume);
  updateResumeLinks();
}

function experienceHeroAside(experience, projectCount = 0) {
  const image = imageMarkup(
    experience.image || "",
    `${experience.company} experience thumbnail`,
    imageStyle(experience, "detail")
  );
  return `
    <aside class="hero-media-card ${image ? "has-image" : ""}">
      ${image || `<strong>${escapeHtml(experience.impact || experience.company)}</strong>`}
      <span>${projectCount} selected project${projectCount === 1 ? "" : "s"}</span>
    </aside>
  `;
}

function setupExperienceDetail() {
  const { id } = routeParts();
  const experience = experienceById(id);
  if (!experience) {
    document.getElementById("experience-detail").innerHTML = `
      <section class="empty-state">
        <strong>Experience not found.</strong>
      </section>
    `;
    return;
  }
  const projects = projectsForExperience(experience.id);
  const detail = document.getElementById("experience-detail");

  detail.innerHTML = `
    <section class="experience-hero" style="--experience-accent: ${experience.accent}">
      <div>
        <p class="eyebrow">${escapeHtml(experience.dates)} · ${escapeHtml(experience.location)}</p>
        <h1>${breakableHtml(experience.company)}</h1>
        <h2>${breakableHtml(experience.title)}</h2>
        <p>${escapeHtml(experience.summary)}</p>
      </div>
      ${experienceHeroAside(experience, projects.length)}
    </section>
  `;

  renderFilters(projects);
  renderProjects(projects);

  document.getElementById("project-search").placeholder = state.siteContent.work.searchPlaceholder;
  document.getElementById("project-search").addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    renderProjects(projects);
  });

  document.getElementById("project-grid").addEventListener("click", handleProjectGridClick);
}

function safeMediaSrc(value = "") {
  if (!value) return "";
  if (String(value).startsWith("data:image/")) return value;
  if (!String(value).includes(":")) return value;
  return safeUrl(value);
}

function safeVideoSrc(value = "") {
  if (!value) return "";
  if (String(value).startsWith("data:video/")) return value;
  if (!String(value).includes(":")) return value;
  return safeUrl(value);
}

function hasMediaContent(item = {}) {
  return Boolean(item.title || item.description || item.src || item.url || item.videoUrl);
}

function fallbackMediaItem(project) {
  return {
    type: isVideoProject(project) ? "Video" : project.mediaType || "Image",
    src: project.image || "",
    videoUrl: project.link || "",
    title: project.image || project.link ? "Selected campaign work" : "Campaign overview",
    description: project.whatPrernaDid || project.summary || "Add campaign visuals from the admin panel."
  };
}

function mediaImageStyle(item = {}, fallback = {}) {
  const fit = normalizeImageFit(item.imageFit || fallback.imageFit);
  const position = normalizeImagePosition(item.imagePosition || fallback.imagePosition);
  const zoom = normalizeImageZoom(item.imageZoom || fallback.imageZoom);
  return `object-fit: ${fit}; object-position: ${position}; transform: scale(${zoom / 100});`;
}

function projectMediaGroups(project) {
  const savedGroups = project.mediaGroups || {};
  const savedMeta = project.mediaGroupMeta || {};
  const hasSavedGroups = MEDIA_GROUPS.some((group) => Array.isArray(savedGroups[group.id]));
  const legacyItems = Array.isArray(project.mediaItems) ? project.mediaItems.filter(hasMediaContent) : [];

  return MEDIA_GROUPS.map((group, index) => {
    const meta = savedMeta[group.id] || {};
    const groupItems = Array.isArray(savedGroups[group.id]) ? savedGroups[group.id].filter(hasMediaContent) : [];
    const items = groupItems.length
      ? groupItems
      : index === 1 && legacyItems.length
        ? legacyItems
        : [];

    return {
      ...group,
      label: meta.label || group.label,
      helper: meta.helper || group.helper,
      items
    };
  }).map((group, index) => {
    if (index === 1 && !hasSavedGroups && !group.items.length) {
      return { ...group, items: [fallbackMediaItem(project)] };
    }
    return group;
  });
}

function googleDriveFileId(url = "") {
  const safe = safeVideoSrc(url);
  if (!safe || !safe.includes(":") || safe.startsWith("data:video/")) return "";
  try {
    const parsed = new URL(safe);
    if (!parsed.hostname.includes("drive.google.com")) return "";
    return parsed.pathname.match(/\/file\/d\/([^/]+)/)?.[1]
      || parsed.searchParams.get("id")
      || "";
  } catch {
    return "";
  }
}

function videoThumbnailUrl(url = "") {
  const safe = safeVideoSrc(url);
  if (!safe || !safe.includes(":") || safe.startsWith("data:video/")) return "";
  try {
    const parsed = new URL(safe);
    if (parsed.hostname.includes("drive.google.com")) {
      const fileId = googleDriveFileId(safe);
      return fileId ? `https://drive.google.com/thumbnail?id=${encodeURIComponent(fileId)}&sz=w1200` : "";
    }
    if (parsed.hostname.includes("youtube.com")) {
      const id = parsed.searchParams.get("v");
      return id ? `https://img.youtube.com/vi/${encodeURIComponent(id)}/hqdefault.jpg` : "";
    }
    if (parsed.hostname.includes("youtu.be")) {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      return id ? `https://img.youtube.com/vi/${encodeURIComponent(id)}/hqdefault.jpg` : "";
    }
  } catch {
    return "";
  }
  return "";
}

function mediaVisualSrc(item = {}) {
  const type = item.type || "Image";
  const imageSrc = safeMediaSrc(item.src || item.url || "");
  if (imageSrc) return imageSrc;
  if (type !== "Video") return "";
  return videoThumbnailUrl(item.videoUrl || item.url || "");
}

function campaignMediaFrame(item, project) {
  const type = item.type || "Image";
  const imageSrc = mediaVisualSrc(item);
  const videoUrl = safeVideoSrc(item.videoUrl || (type === "Video" ? item.url : ""));
  const visual = imageSrc
    ? `<img src="${escapeHtml(imageSrc)}" alt="${escapeHtml(item.title || project.title)}" style="${mediaImageStyle(item, project)}" loading="lazy" decoding="async">`
    : coverArt(project, "large");
  const frameClass = `campaign-media-frame ${imageSrc ? "has-image" : ""}`;

  if (type === "Video" && videoUrl) {
    return `
      <div class="${frameClass} is-video">
        ${visual}
        <span aria-hidden="true">▶</span>
      </div>
    `;
  }

  return `<div class="${frameClass}">${visual}</div>`;
}

function campaignMediaCard(item, index, groupId, project) {
  const copy = [item.title, item.description].filter(Boolean);
  return `
    <article class="campaign-media-card" role="button" tabindex="0" aria-label="Open ${escapeHtml(item.title || project.title)} preview" data-media-preview data-group-id="${escapeHtml(groupId)}" data-media-index="${index}">
      ${campaignMediaFrame(item, project)}
      ${copy.length ? `
        <div class="campaign-media-copy">
          ${item.title ? `<h3>${breakableHtml(item.title)}</h3>` : ""}
          ${item.description ? `<p>${escapeHtml(item.description)}</p>` : ""}
        </div>
      ` : ""}
    </article>
  `;
}

function campaignMediaGroup(group, project) {
  const layoutClass = group.items.length === 1
    ? "is-single"
    : group.items.length > 1
      ? "is-multiple"
      : "is-empty";

  return `
    <section class="campaign-media-group">
      <div class="section-heading compact">
        <h2>${escapeHtml(group.label)}</h2>
      </div>
      <div class="campaign-media-grid ${layoutClass}">
        ${
          group.items.length
            ? group.items.map((item, index) => campaignMediaCard(item, index, group.id, project)).join("")
            : `<div class="empty-state"><strong>No ${escapeHtml(group.label.toLowerCase())} assets added yet.</strong></div>`
        }
      </div>
    </section>
  `;
}

function projectHeroAside(project) {
  const primaryItem = primaryMediaItem(project) || {};
  const imageSrc = project.image || mediaVisualSrc(primaryItem);
  const image = imageMarkup(
    imageSrc,
    `${project.title} project thumbnail`,
    imageStyle(project, "detail"),
    { loading: "eager", fetchPriority: "high" }
  );
  return `
    <aside class="hero-media-card project-hero-media ${image ? "has-image" : ""}">
      ${image || coverArt(project, "large")}
      <span>${escapeHtml(project.mediaType || "Campaign")}</span>
    </aside>
  `;
}

function setupProjectDetail(collection) {
  const { id } = routeParts();
  const project = projectById(id, collection);
  const detail = document.getElementById("project-detail");

  if (!project) {
    detail.innerHTML = `
      <section class="empty-state">
        <strong>Project not found.</strong>
      </section>
    `;
    return;
  }

  const mediaGroups = projectMediaGroups(project);
  const experience = collection === "work" ? experiences.find((item) => item.id === project.experienceId) : null;
  const backHref = experience ? `#/experience/${experience.id}` : "#/featured-projects";
  const backText = experience ? `Back to ${experience.company}` : "Back to Featured Projects";
  const eyebrow = [
    experience?.company || "Featured Project",
    projectCategoryLabel(project),
    project.year
  ].filter(Boolean).join(" · ");
  const heroAccent = project.accent || experience?.accent || categoryColor(projectPrimaryCategory(project));
  const projectRole = project.role?.trim();

  detail.innerHTML = `
    <a class="back-link" href="${backHref}">← ${escapeHtml(backText)}</a>
    <section class="experience-hero project-hero" style="--experience-accent: ${heroAccent}">
      <div>
        <p class="eyebrow">${escapeHtml(eyebrow)}</p>
        <h1>${breakableHtml(project.title)}</h1>
        ${projectRole ? `<h2>${breakableHtml(projectRole)}</h2>` : ""}
        <p>${escapeHtml(project.summary)}</p>
      </div>
      ${projectHeroAside(project)}
    </section>

    <section class="campaign-info-grid">
      <article class="campaign-info-card">
        <p class="eyebrow">What I Did</p>
        <p>${escapeHtml(project.whatPrernaDid || project.summary || "Project details coming soon.")}</p>
      </article>
      <article class="campaign-info-card">
        <p class="eyebrow">Software Used</p>
        <div class="software-grid">${softwareCards(project.tools)}</div>
      </article>
    </section>

    <section class="campaign-gallery">
      ${mediaGroups.map((group) => campaignMediaGroup(group, project)).join("")}
    </section>
  `;

  detail.addEventListener("click", (event) => {
    const card = event.target.closest("[data-media-preview]");
    if (!card) return;
    const group = mediaGroups.find((item) => item.id === card.dataset.groupId);
    const item = group?.items[Number(card.dataset.mediaIndex)];
    if (item) showMediaModal(item, project);
  });

  detail.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest("[data-media-preview]");
    if (!card) return;
    event.preventDefault();
    const group = mediaGroups.find((item) => item.id === card.dataset.groupId);
    const item = group?.items[Number(card.dataset.mediaIndex)];
    if (item) showMediaModal(item, project);
  });
}

function renderFilters(projects) {
  const categories = ["All", ...new Set(projects.flatMap(projectCategoriesFor))];
  const filterGroup = document.getElementById("filter-group");
  filterGroup.innerHTML = categories
    .map((category) => `
      <button class="filter-chip ${category === state.filter ? "active" : ""}" type="button" data-category="${escapeHtml(category)}">
        ${escapeHtml(category)}
      </button>
    `)
    .join("");

  filterGroup.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    state.filter = button.dataset.category;
    renderFilters(projects);
    renderProjects(projects);
  });
}

function filteredProjects(projects) {
  return projects.filter((project) => {
    const categoryMatch = projectHasCategory(project, state.filter);
    const text = [
      project.title,
      projectCategoryLabel(project),
      project.mediaType,
      project.role,
      project.tools,
      project.summary,
      project.impact
    ].join(" ").toLowerCase();
    return categoryMatch && text.includes(state.query);
  });
}

function renderProjects(projects) {
  const grid = document.getElementById("project-grid");
  const filtered = filteredProjects(projects);
  grid.innerHTML = filtered.length
    ? filtered.map((project) => projectCard(project, "work")).join("")
    : `<div class="empty-state"><strong>No matching projects yet.</strong></div>`;
}

function handleProjectGridClick(event) {
  const openButton = event.target.closest("[data-open-project]");
  if (openButton) {
    return;
  }

  const card = event.target.closest(".project-card");
  if (!card || event.target.closest("a, button")) return;

  const project = state.projects.find((item) => item.id === card.dataset.projectId)
    || state.portfolioProjects.find((item) => item.id === card.dataset.projectId);
  if (project) {
    openProject(project);
  }
}

function openProject(project) {
  if (!project) return;
  const collection = project.experienceId ? "work" : "portfolio";
  window.location.hash = projectDetailUrl(project, collection).replace("#", "");
}

function isDirectVideoUrl(url = "") {
  return /^data:video\//.test(url) || /\.(mp4|webm|ogg)(\?|#|$)/i.test(url);
}

function videoEmbedUrl(url = "") {
  const safe = safeVideoSrc(url);
  if (!safe) return "";
  if (!safe.includes(":") || safe.startsWith("data:video/")) return safe;
  const parsed = new URL(safe);
  if (parsed.hostname.includes("drive.google.com")) {
    const pathFileId = parsed.pathname.match(/\/file\/d\/([^/]+)/)?.[1];
    const queryFileId = parsed.searchParams.get("id");
    const fileId = pathFileId || queryFileId;
    return fileId ? `https://drive.google.com/file/d/${encodeURIComponent(fileId)}/preview` : safe;
  }
  if (parsed.hostname.includes("youtube.com")) {
    const id = parsed.searchParams.get("v");
    return id ? `https://www.youtube.com/embed/${id}` : safe;
  }
  if (parsed.hostname.includes("youtu.be")) {
    const id = parsed.pathname.split("/").filter(Boolean)[0];
    return id ? `https://www.youtube.com/embed/${id}` : safe;
  }
  if (parsed.hostname.includes("vimeo.com")) {
    const id = parsed.pathname.split("/").filter(Boolean)[0];
    return id ? `https://player.vimeo.com/video/${id}` : safe;
  }
  return safe;
}

function mediaPreviewMarkup(item, project) {
  const type = item.type || "Image";
  const imageSrc = safeMediaSrc(item.src || item.url || "");
  const videoUrl = safeVideoSrc(item.videoUrl || (type === "Video" ? item.url : ""));

  if (type === "Video" && videoUrl) {
    if (isDirectVideoUrl(videoUrl)) {
      return `<video src="${escapeHtml(videoUrl)}" controls autoplay playsinline></video>`;
    }
    return `<iframe src="${escapeHtml(videoEmbedUrl(videoUrl))}" title="${escapeHtml(item.title || project.title)} video preview" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
  }

  if (imageSrc) {
    return `<img src="${escapeHtml(imageSrc)}" alt="${escapeHtml(item.title || project.title)} full preview" decoding="async">`;
  }

  return coverArt(project, "large");
}

function showMediaModal(item, project) {
  closeImageModal();
  const modal = document.createElement("div");
  modal.className = "lightbox";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-label", `${item.title || project.title} preview`);
  modal.innerHTML = `
    <div class="lightbox-panel">
      <button class="lightbox-close" type="button" data-close-lightbox aria-label="Close preview">×</button>
      <div class="lightbox-media">
        ${mediaPreviewMarkup(item, project)}
      </div>
      <div class="lightbox-caption">
        <strong>${escapeHtml(item.title || project.title)}</strong>
        <span>${escapeHtml(item.description || `${projectCategoryLabel(project)} · ${project.year || "Project"}`)}</span>
      </div>
    </div>
  `;

  modal.addEventListener("click", (event) => {
    if (event.target === modal || event.target.closest("[data-close-lightbox]")) {
      closeImageModal();
    }
  });

  document.body.append(modal);
  document.body.classList.add("modal-open");
  document.addEventListener("keydown", handleLightboxKeydown);
  modal.querySelector("[data-close-lightbox]").focus({ preventScroll: true });
}

function handleLightboxKeydown(event) {
  if (event.key === "Escape") closeImageModal();
}

function closeImageModal() {
  document.querySelector(".lightbox")?.remove();
  document.body.classList.remove("modal-open");
  document.removeEventListener("keydown", handleLightboxKeydown);
}

function showToast(message) {
  document.querySelector(".toast")?.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.textContent = message;
  document.body.append(toast);
  window.setTimeout(() => toast.remove(), 2600);
}

function showLoadingBanner(message = "Polishing the site...") {
  let banner = document.querySelector(".loading-banner");
  if (!banner) {
    banner = document.createElement("div");
    banner.className = "loading-banner";
    banner.setAttribute("role", "status");
    banner.innerHTML = `
      <span class="loading-blossom" aria-hidden="true"></span>
      <strong></strong>
    `;
    document.body.append(banner);
  }
  state.loadingCount += 1;
  banner.querySelector("strong").textContent = message;
  banner.hidden = false;
}

function hideLoadingBanner() {
  state.loadingCount = Math.max(0, state.loadingCount - 1);
  if (state.loadingCount) return;
  document.querySelector(".loading-banner")?.setAttribute("hidden", "");
}

function setButtonLoading(button, isLoading, label = "Working") {
  if (!button) return;
  if (isLoading) {
    button.dataset.originalText = button.innerHTML;
    button.disabled = true;
    button.classList.add("is-loading");
    button.innerHTML = `<span class="loading-blossom mini" aria-hidden="true"></span> ${escapeHtml(label)}`;
    return;
  }
  button.disabled = false;
  button.classList.remove("is-loading");
  if (button.dataset.originalText) {
    button.innerHTML = button.dataset.originalText;
    delete button.dataset.originalText;
  }
}

function confirmAction(message, confirmLabel = "Confirm") {
  document.querySelector(".confirm-dialog")?.remove();

  return new Promise((resolve) => {
    const modal = document.createElement("div");
    modal.className = "confirm-dialog";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Confirm action");
    modal.innerHTML = `
      <div class="confirm-panel">
        <p class="eyebrow">Please confirm</p>
        <h2>${escapeHtml(message)}</h2>
        <div class="confirm-actions">
          <button class="button ghost" type="button" data-confirm-cancel>Cancel</button>
          <button class="button primary" type="button" data-confirm-accept>${escapeHtml(confirmLabel)}</button>
        </div>
      </div>
    `;

    const finish = (answer) => {
      modal.remove();
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", handleKeydown);
      resolve(answer);
    };

    function handleKeydown(event) {
      if (event.key === "Escape") finish(false);
    }

    modal.addEventListener("click", (event) => {
      if (event.target === modal || event.target.closest("[data-confirm-cancel]")) finish(false);
      if (event.target.closest("[data-confirm-accept]")) finish(true);
    });

    document.body.append(modal);
    document.body.classList.add("modal-open");
    document.addEventListener("keydown", handleKeydown);
    modal.querySelector("[data-confirm-accept]").focus({ preventScroll: true });
  });
}

function choosePublishScope() {
  document.querySelector(".confirm-dialog")?.remove();

  return new Promise((resolve) => {
    const modal = document.createElement("div");
    modal.className = "confirm-dialog";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Choose publish scope");
    modal.innerHTML = `
      <div class="confirm-panel publish-choice-panel">
        <p class="eyebrow">Publish scope</p>
        <h2>What should go live?</h2>
        <div class="publish-choice-grid">
          <button class="publish-choice ${portfolioContentDirty() ? "has-unpublished" : ""}" type="button" data-publish-scope="portfolio">
            <strong>Experience, Work & Featured Projects</strong>
            <span>Publish cards, projects, media, featured work, and experience changes.</span>
          </button>
          <button class="publish-choice ${siteContentDirty() ? "has-unpublished" : ""}" type="button" data-publish-scope="content">
            <strong>Text & Appearance</strong>
            <span>Publish Home, About, Contact, Header, filters, and color changes.</span>
          </button>
          <button class="publish-choice ${resumeDirty() ? "has-unpublished" : ""}" type="button" data-publish-scope="resume">
            <strong>Resume</strong>
            <span>Publish the latest resume PDF and preview image.</span>
          </button>
          <button class="publish-choice ${(portfolioContentDirty() || siteContentDirty() || resumeDirty()) ? "has-unpublished" : ""}" type="button" data-publish-scope="both">
            <strong>Publish Everything</strong>
            <span>Push every saved draft in one GitHub update.</span>
          </button>
        </div>
        <div class="confirm-actions">
          <button class="button ghost" type="button" data-publish-cancel>Cancel</button>
        </div>
      </div>
    `;

    const finish = (scope = "") => {
      modal.remove();
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", handleKeydown);
      resolve(scope);
    };

    function handleKeydown(event) {
      if (event.key === "Escape") finish("");
    }

    modal.addEventListener("click", (event) => {
      const scopeButton = event.target.closest("[data-publish-scope]");
      if (scopeButton) finish(scopeButton.dataset.publishScope);
      if (event.target === modal || event.target.closest("[data-publish-cancel]")) finish("");
    });

    document.body.append(modal);
    document.body.classList.add("modal-open");
    document.addEventListener("keydown", handleKeydown);
    modal.querySelector("[data-publish-scope='both']").focus({ preventScroll: true });
  });
}

function portfolioForPublishScope(scope) {
  if (scope === "content") {
    return portfolioSnapshot({
      experiences: publishedExperiences,
      projects: publishedProjects,
      portfolioProjects: publishedPortfolioProjects,
      featuredProducts: publishedFeaturedProducts,
      siteContent: state.siteContent,
      resume: publishedResume
    });
  }
  if (scope === "portfolio") {
    return portfolioSnapshot({
      experiences,
      projects: state.projects,
      portfolioProjects: state.portfolioProjects,
      featuredProducts: state.featuredProducts,
      siteContent: publishedSiteContent,
      resume: publishedResume
    });
  }
  if (scope === "resume") {
    return portfolioSnapshot({
      experiences: publishedExperiences,
      projects: publishedProjects,
      portfolioProjects: publishedPortfolioProjects,
      featuredProducts: publishedFeaturedProducts,
      siteContent: publishedSiteContent,
      resume: state.resume
    });
  }
  return portfolioSnapshot();
}

function dataImageExtension(mimeType = "") {
  const mime = mimeType.toLowerCase();
  if (mime === "image/jpeg" || mime === "image/jpg") return "jpg";
  if (mime === "image/png") return "png";
  if (mime === "image/webp") return "webp";
  if (mime === "image/gif") return "gif";
  if (mime === "image/svg+xml") return "svg";
  return "bin";
}

function parseDataImageValue(value = "") {
  const match = String(value).match(/^data:(image\/[a-z0-9.+-]+);base64,([a-z0-9+/=\s]+)$/i);
  if (!match) return null;
  return {
    mimeType: match[1],
    base64: match[2].replace(/\s/g, "")
  };
}

function parseDataFileValue(value = "") {
  const match = String(value).match(/^data:([a-z0-9.+/-]+);base64,([a-z0-9+/=\s]+)$/i);
  if (!match) return null;
  return {
    mimeType: match[1],
    base64: match[2].replace(/\s/g, "")
  };
}

function base64ToBytes(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

function bufferToHex(buffer) {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function publishedAssetPath(dataUrl, cache) {
  if (cache.has(dataUrl)) return cache.get(dataUrl);

  const parsed = parseDataImageValue(dataUrl);
  if (!parsed || !window.crypto?.subtle) return dataUrl;

  const digest = await window.crypto.subtle.digest("SHA-256", base64ToBytes(parsed.base64));
  const assetPath = `assets/uploads/${bufferToHex(digest).slice(0, 20)}.${dataImageExtension(parsed.mimeType)}`;
  cache.set(dataUrl, assetPath);
  return assetPath;
}

function publishedResumeAssetPath(value, type = "file") {
  const parsed = parseDataFileValue(value);
  if (!parsed) return value;
  if (type === "file" && parsed.mimeType.toLowerCase() === "application/pdf") return RESUME_FILE_PATH;
  if (type === "preview" && parsed.mimeType.toLowerCase().startsWith("image/")) return RESUME_PREVIEW_PATH;
  return value;
}

function replaceResumeDraftAssets(portfolio) {
  const nextPortfolio = cloneItems(portfolio);
  const resume = normalizeResume(nextPortfolio.resume);
  resume.file = publishedResumeAssetPath(resume.file, "file");
  resume.previewImage = publishedResumeAssetPath(resume.previewImage, "preview");
  nextPortfolio.resume = resume;
  return nextPortfolio;
}

async function replaceDataImagesWithAssetPaths(value, cache = new Map()) {
  if (typeof value === "string") {
    return value.startsWith("data:image/") ? publishedAssetPath(value, cache) : value;
  }

  if (Array.isArray(value)) {
    const nextItems = [];
    for (const item of value) {
      nextItems.push(await replaceDataImagesWithAssetPaths(item, cache));
    }
    return nextItems;
  }

  if (value && typeof value === "object") {
    const nextObject = {};
    for (const [key, item] of Object.entries(value)) {
      nextObject[key] = await replaceDataImagesWithAssetPaths(item, cache);
    }
    return nextObject;
  }

  return value;
}

async function publishedPortfolioFromResponse(result, portfolio) {
  if (result.portfolio) return normalizePortfolioData(result.portfolio);
  return normalizePortfolioData(await replaceDataImagesWithAssetPaths(replaceResumeDraftAssets(portfolio)));
}

function publishScopeLabel(scope) {
  if (scope === "content") return "Text & Appearance";
  if (scope === "portfolio") return "Experience, Work & Featured Projects";
  if (scope === "resume") return "Resume";
  return "everything";
}

function updatePublishedPortfolio(published) {
  publishedExperiences = cloneItems(published.experiences);
  publishedProjects = cloneItems(published.projects);
  publishedPortfolioProjects = cloneItems(published.portfolioProjects);
  publishedFeaturedProducts = cloneItems(published.featuredProducts);
  publishedSiteContent = normalizeSiteContent(published.siteContent);
  publishedResume = normalizeResume(published.resume);
}

function syncDraftAfterPublish(scope, published) {
  updatePublishedPortfolio(published);

  if (scope === "content") {
    saveDraftPortfolio({
      experiences,
      projects: state.projects,
      portfolioProjects: state.portfolioProjects,
      featuredProducts: state.featuredProducts,
      siteContent: publishedSiteContent,
      resume: state.resume
    });
  } else if (scope === "portfolio") {
    saveDraftPortfolio({
      experiences: publishedExperiences,
      projects: publishedProjects,
      portfolioProjects: publishedPortfolioProjects,
      featuredProducts: publishedFeaturedProducts,
      siteContent: state.siteContent,
      resume: state.resume
    });
  } else if (scope === "resume") {
    saveDraftPortfolio({
      experiences,
      projects: state.projects,
      portfolioProjects: state.portfolioProjects,
      featuredProducts: state.featuredProducts,
      siteContent: state.siteContent,
      resume: publishedResume
    });
  } else {
    experiences = cloneItems(published.experiences);
    state.projects = cloneItems(published.projects);
    state.portfolioProjects = cloneItems(published.portfolioProjects);
    state.featuredProducts = cloneItems(published.featuredProducts);
    state.siteContent = normalizeSiteContent(published.siteContent);
    state.resume = normalizeResume(published.resume);
    state.adminData = null;
    state.adminDataBaseSignature = "";
    localStorage.removeItem(DRAFT_STORE_KEY);
    applySiteContent();
  }

  if (!portfolioContentDirty() && !siteContentDirty() && !resumeDirty()) {
    state.adminData = null;
    state.adminDataBaseSignature = "";
    localStorage.removeItem(DRAFT_STORE_KEY);
  }
}

function renderDraftPreviewRibbon() {
  document.querySelector(".preview-ribbon")?.remove();
  const { name } = routeParts();
  if (sessionStorage.getItem(PREVIEW_SESSION_KEY) !== "true" || name === "/admin" || name === "/studio") return;

  const ribbon = document.createElement("div");
  ribbon.className = "preview-ribbon";
  ribbon.innerHTML = `
    <strong>Draft preview</strong>
    <button type="button">Exit</button>
  `;
  ribbon.querySelector("button").addEventListener("click", () => {
    sessionStorage.removeItem(PREVIEW_SESSION_KEY);
    renderRoute();
  });
  document.body.append(ribbon);
}

function adminUnlocked() {
  return sessionStorage.getItem(ADMIN_SESSION_KEY) === "true";
}

function renderAdminLogin() {
  const band = document.querySelector(".admin-band");
  band.innerHTML = `
    <section class="admin-login-panel">
      <p class="eyebrow">Private studio</p>
      <h1>Admin access</h1>
      <form class="admin-login" id="admin-login">
        <label>
          Password
          <input id="admin-password" type="password" required autocomplete="current-password" placeholder="Enter admin password">
        </label>
        <button class="button primary" type="submit"><span aria-hidden="true">→</span> Open Studio</button>
      </form>
    </section>
  `;

  document.getElementById("admin-login").addEventListener("submit", async (event) => {
    event.preventDefault();
    const password = document.getElementById("admin-password").value;
    const isAllowed = await verifyAdminPassword(password);
    if (!isAllowed) {
      showToast("Wrong admin password.");
      return;
    }
    state.adminPassword = password;
    sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
    sessionStorage.setItem(ADMIN_PASSWORD_KEY, password);
    renderRoute();
  });
}

async function verifyAdminPassword(password) {
  const isLocalPreview = ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);

  try {
    const response = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password })
    });
    if (response.ok) return true;
    if (!isLocalPreview || (response.status !== 404 && response.status !== 501)) return false;
  } catch {
    return isLocalPreview && password === LOCAL_ADMIN_PASSWORD;
  }

  return isLocalPreview && password === LOCAL_ADMIN_PASSWORD;
}

function slugify(value = "experience") {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 44) || "experience";
}

function uniqueExperienceId(company) {
  const base = slugify(company);
  let id = base;
  let count = 2;
  while (experiences.some((experience) => experience.id === id)) {
    id = `${base}-${count}`;
    count += 1;
  }
  return id;
}

function renderExperienceSelect() {
  const select = document.getElementById("experience");
  if (!select) return;
  select.innerHTML = `<option value="">Choose an experience</option>` + experiences
    .map((experience) => `<option value="${experience.id}">${escapeHtml(experience.company)} · ${escapeHtml(experience.title)}</option>`)
    .join("");
}

function renderExperienceHomeLimitSelect() {
  const select = document.getElementById("experienceHomeLimit");
  if (!select) return;
  select.value = String(homeExperienceLimit());
}

function featuredRankOptionLimit(activeProjectId = "") {
  const isExistingFeatured = activeProjectId
    ? state.featuredProducts.some((project) => project.id === activeProjectId)
    : false;
  const projectedCount = state.featuredProducts.length + (isExistingFeatured ? 0 : 1);
  return Math.min(6, Math.max(1, projectedCount));
}

function featuredRankConflict(project = {}) {
  const rank = normalizeFeaturedRank(project.featuredRank);
  if (!rank) return null;
  return state.featuredProducts.find((item) => item.id !== project.id && normalizeFeaturedRank(item.featuredRank) === rank) || null;
}

function renderFeaturedRankOptions(selectedRank = "", activeProjectId = "") {
  const select = document.getElementById("featuredRank");
  if (!select) return;
  const hint = document.getElementById("featuredRankHint");
  const maxRank = featuredRankOptionLimit(activeProjectId);
  const usedRanks = new Map();
  state.featuredProducts.forEach((project) => {
    const rank = normalizeFeaturedRank(project.featuredRank);
    if (rank && project.id !== activeProjectId) usedRanks.set(rank, project.title);
  });
  const normalizedSelected = Number(normalizeFeaturedRank(selectedRank)) <= maxRank
    ? normalizeFeaturedRank(selectedRank)
    : "";
  select.innerHTML = [
    `<option value="">No rank / auto order</option>`,
    ...Array.from({ length: maxRank }, (_, index) => {
      const rank = String(index + 1);
      const owner = usedRanks.get(rank);
      const disabled = owner ? " disabled" : "";
      const label = owner ? `Rank ${rank} · already used by ${stripSavedBreakHints(owner)}` : `Rank ${rank}`;
      return `<option value="${rank}"${rank === normalizedSelected ? " selected" : ""}${disabled}>${escapeHtml(label)}</option>`;
    })
  ].join("");
  select.value = normalizedSelected;
  if (hint) {
    const usedText = [...usedRanks.entries()]
      .filter(([rank]) => Number(rank) <= maxRank)
      .map(([rank, title]) => `Rank ${rank}: ${stripSavedBreakHints(title)}`);
    hint.textContent = usedText.length
      ? `Available ranks are 1-${maxRank}. Already used: ${usedText.join(" · ")}. Choose no rank first if you want to reshuffle.`
      : `Available ranks are 1-${maxRank}. Choose no rank / auto order to leave this project unranked.`;
  }
}

function siteContentWithExperienceHomeLimit() {
  const select = document.getElementById("experienceHomeLimit");
  const limit = normalizeHomeCardLimit(select?.value || homeExperienceLimit());
  return {
    ...state.siteContent,
    home: {
      ...state.siteContent.home,
      workVisibleCount: limit
    }
  };
}

function formExperience() {
  const existingId = document.getElementById("experience-id").value;
  const company = document.getElementById("experienceCompany").value.trim();
  const existingExperience = experiences.find((experience) => experience.id === existingId);
  const image = state.experienceImageRemoved
    ? ""
    : state.experiencePreviewImage || existingExperience?.image || "";
  return {
    id: existingId || uniqueExperienceId(company),
    company,
    title: document.getElementById("experienceTitle").value.trim(),
    dates: document.getElementById("experienceDates").value.trim(),
    location: document.getElementById("experienceLocation").value.trim(),
    headline: document.getElementById("experienceHeadline").value.trim(),
    summary: document.getElementById("experienceSummary").value.trim(),
    impact: document.getElementById("experienceImpact").value.trim(),
    homeSlot: normalizeFeaturedHomeSlot(document.getElementById("experienceHomeSlot")?.value || ""),
    accent: document.getElementById("experienceAccent").value,
    image,
    imageFit: document.getElementById("experienceImageFit")?.value || "cover",
    imagePosition: document.getElementById("experienceImagePosition")?.value || "center center",
    imageZoom: document.getElementById("experienceImageZoom")?.value || "100",
    detailImageFit: document.getElementById("experienceDetailImageFit")?.value || document.getElementById("experienceImageFit")?.value || "cover",
    detailImagePosition: document.getElementById("experienceDetailImagePosition")?.value || document.getElementById("experienceImagePosition")?.value || "center center",
    detailImageZoom: document.getElementById("experienceDetailImageZoom")?.value || document.getElementById("experienceImageZoom")?.value || "100"
  };
}

function renderExperiencePreview() {
  const target = document.getElementById("experience-card-preview");
  if (!target) return;
  const experience = formExperience();
  const projectCount = projectsForExperience(experience.id).length;
  const image = imageMarkup(
    experience.image,
    `${experience.company || "Experience"} card preview`,
    imageStyle(experience)
  );
  target.innerHTML = `
    <section class="admin-preview-block">
      <div class="board-topline">
        <strong>Home / Work Experience Card</strong>
        <small>Uses the experience card image settings</small>
      </div>
      <article class="experience-preview-card" style="--experience-accent: ${escapeHtml(experience.accent || "#0a6f6b")}">
        <div class="experience-preview-cover ${image ? "has-image" : ""}">
          ${image || `<span>${breakableHtml(experience.company || "Experience")}</span>`}
        </div>
        <div>
          <p class="eyebrow">Card preview</p>
          <strong>${breakableHtml(experience.company || "Company name")}</strong>
          <small>${breakableHtml(experience.title || "Role")} · ${escapeHtml(experienceHomeSlotLabel(experience.homeSlot))}</small>
        </div>
      </article>
    </section>
    <section class="admin-preview-block">
      <div class="board-topline">
        <strong>Opened Experience Right Image</strong>
        <small>Uses the opened experience image settings</small>
      </div>
      <div class="admin-hero-aside-preview" style="--experience-accent: ${escapeHtml(experience.accent || "#0a6f6b")}">
        ${experienceHeroAside(experience, projectCount)}
      </div>
    </section>
  `;
}

function clearExperienceForm() {
  document.getElementById("experience-form").reset();
  document.getElementById("experience-id").value = "";
  document.getElementById("experienceHomeSlot").value = "";
  setExperienceDatePickersFromValue("");
  renderExperienceHomeLimitSelect();
  document.getElementById("experienceAccent").value = "#0a6f6b";
  document.getElementById("experienceImageFit").value = "cover";
  document.getElementById("experienceImagePosition").value = "center center";
  document.getElementById("experienceImageZoom").value = "100";
  document.getElementById("experienceDetailImageFit").value = "cover";
  document.getElementById("experienceDetailImagePosition").value = "center center";
  document.getElementById("experienceDetailImageZoom").value = "100";
  document.getElementById("experience-image-file-name").textContent = "Choose an image";
  state.experiencePreviewImage = "";
  state.experienceImageRemoved = false;
  clearValidationUi(document.getElementById("experience-form"));
  renderExperiencePreview();
}

function mediaInputId(field, groupId, index) {
  return `${field}-${groupId}-${index}`;
}

function mediaGroupMetaId(field, groupId) {
  return `${field}-${groupId}`;
}

function mediaField(field, groupId, index) {
  return document.getElementById(mediaInputId(field, groupId, index));
}

function mediaMetaField(field, groupId) {
  return document.getElementById(mediaGroupMetaId(field, groupId));
}

function mediaImageKey(groupId, index) {
  return `${groupId}-${index}`;
}

function imagePositionOptions(selectedValue = "center center") {
  const options = [
    ["center center", "Center"],
    ["center top", "Top"],
    ["center bottom", "Bottom"],
    ["left center", "Left"],
    ["right center", "Right"]
  ];
  const selected = normalizeImagePosition(selectedValue);
  return options
    .map(([value, label]) => `<option value="${value}"${value === selected ? " selected" : ""}>${label}</option>`)
    .join("");
}

function emptyMediaItem() {
  return {
    type: "Image",
    title: "",
    src: "",
    videoUrl: "",
    description: "",
    imageFit: "cover",
    imagePosition: "center center",
    imageZoom: "100"
  };
}

function defaultMediaBuilderGroups() {
  return MEDIA_GROUPS.reduce((groups, group) => {
    groups[group.id] = [emptyMediaItem()];
    return groups;
  }, {});
}

function defaultMediaGroupMeta() {
  return MEDIA_GROUPS.reduce((meta, group) => {
    meta[group.id] = { label: group.label, helper: group.helper };
    return meta;
  }, {});
}

function normalizeMediaBuilderGroups(mediaGroups = {}) {
  const groups = Array.isArray(mediaGroups)
    ? { finalOutput: mediaGroups }
    : mediaGroups;

  return MEDIA_GROUPS.reduce((nextGroups, group) => {
    const items = Array.isArray(groups?.[group.id])
      ? groups[group.id].map((item) => {
          const src = item.src || item.url || "";
          return {
            type: item.type || "Image",
            title: item.title || "",
            src: String(src).startsWith("data:video/") ? "" : src,
            videoUrl: String(item.videoUrl || "").startsWith("data:video/") ? "" : item.videoUrl || "",
            description: item.description || "",
            imageFit: normalizeImageFit(item.imageFit),
            imagePosition: normalizeImagePosition(item.imagePosition),
            imageZoom: normalizeImageZoom(item.imageZoom)
          };
        })
      : [];
    nextGroups[group.id] = items.length ? items : [emptyMediaItem()];
    return nextGroups;
  }, {});
}

function normalizeMediaGroupMeta(mediaGroupMeta = {}) {
  return MEDIA_GROUPS.reduce((meta, group) => {
    const saved = mediaGroupMeta?.[group.id] || {};
    meta[group.id] = {
      label: saved.label || group.label,
      helper: saved.helper || group.helper
    };
    return meta;
  }, {});
}

function formMediaGroupMeta() {
  return MEDIA_GROUPS.reduce((meta, group) => {
    meta[group.id] = {
      label: mediaMetaField("mediaGroupLabel", group.id)?.value.trim() || group.label,
      helper: mediaMetaField("mediaGroupHelper", group.id)?.value.trim() || group.helper
    };
    return meta;
  }, {});
}

function mediaFieldset(group, index, item = emptyMediaItem()) {
  const assetNumber = index + 1;
  const src = item.src || item.url || "";
  const embeddedImage = String(src).startsWith("data:image/");
  if (embeddedImage) {
    state.detailMediaImages[mediaImageKey(group.id, index)] = src;
  }

  return `
    <article class="media-fieldset" data-media-group="${group.id}" data-media-index="${index}">
      <div class="media-fieldset-head">
        <strong>${escapeHtml(group.label)} ${assetNumber}</strong>
        <div class="media-fieldset-actions">
          <select id="${mediaInputId("mediaType", group.id, index)}" required aria-label="${escapeHtml(group.label)} ${assetNumber} media type">
            <option${(item.type || "Image") === "Image" ? " selected" : ""}>Image</option>
            <option${item.type === "Video" ? " selected" : ""}>Video</option>
          </select>
          <button class="mini-button danger" type="button" data-remove-media="${group.id}" data-remove-media-index="${index}">Remove slot</button>
          <button class="mini-button danger" type="button" data-clear-media="${group.id}" data-clear-media-index="${index}">Clear asset</button>
        </div>
      </div>
      <label>
        Asset title
        <input id="${mediaInputId("mediaTitle", group.id, index)}" type="text" maxlength="120" value="${escapeHtml(item.title || "")}" placeholder="${group.id === "initialSketch" ? "Rough layout sketch" : "Final carousel design"}">
      </label>
      <label>
        Image URL / thumbnail URL
        <input id="${mediaInputId("mediaUrl", group.id, index)}" type="text" maxlength="500" value="${embeddedImage ? "" : escapeHtml(src)}" placeholder="https:// or uploaded image">
      </label>
      <label>
        Video link
        <input id="${mediaInputId("mediaVideoUrl", group.id, index)}" type="url" maxlength="500" value="${escapeHtml(item.videoUrl || "")}" placeholder="Drive, YouTube, Vimeo, or direct video link">
      </label>
      <label class="upload-box asset-drop-zone" data-drop-media="${group.id}" data-drop-media-index="${index}">
        <span>Drop image / video thumbnail</span>
        <input id="${mediaInputId("mediaFile", group.id, index)}" type="file" accept=".jpg,.jpeg,.png,.webp,.gif,.mp4,.webm,.ogv,.ogg,image/jpeg,image/png,image/webp,image/gif,video/mp4,video/webm,video/ogg" data-detail-group="${group.id}" data-detail-index="${index}">
        <strong id="${mediaInputId("mediaFileName", group.id, index)}">${src ? "Existing image selected" : "Choose or drop image"}</strong>
        <small>Images: JPG, PNG, WebP, GIF, 1 KB-100 MB. Videos: MP4/WebM/OGG; paste a public playback link.</small>
        <button class="mini-button" type="button" data-clear-media-image="${group.id}" data-clear-media-image-index="${index}">Remove image</button>
      </label>
      <label>
        Asset image fit
        <select id="${mediaInputId("mediaImageFit", group.id, index)}">
          <option value="cover"${normalizeImageFit(item.imageFit) === "cover" ? " selected" : ""}>Crop to fill card</option>
          <option value="contain"${normalizeImageFit(item.imageFit) === "contain" ? " selected" : ""}>Show full image</option>
        </select>
      </label>
      <label>
        Asset image focus
        <select id="${mediaInputId("mediaImagePosition", group.id, index)}">
          ${imagePositionOptions(item.imagePosition)}
        </select>
      </label>
      <label class="wide">
        Asset card zoom
        <input id="${mediaInputId("mediaImageZoom", group.id, index)}" type="range" min="100" max="160" step="5" value="${escapeHtml(normalizeImageZoom(item.imageZoom))}">
      </label>
      <label class="wide">
        Asset text
        <textarea id="${mediaInputId("mediaDescription", group.id, index)}" rows="3" maxlength="500" placeholder="Optional text below this photo/video card.">${escapeHtml(item.description || "")}</textarea>
      </label>
    </article>
  `;
}

function renderMediaBuilder(mediaGroups = state.mediaBuilderGroups, mediaGroupMeta = state.mediaBuilderMeta) {
  const builder = document.getElementById("media-builder-fields");
  if (!builder) return;
  state.mediaBuilderGroups = normalizeMediaBuilderGroups(mediaGroups || defaultMediaBuilderGroups());
  state.mediaBuilderMeta = normalizeMediaGroupMeta(mediaGroupMeta || defaultMediaGroupMeta());
  state.detailMediaImages = {};

  builder.innerHTML = MEDIA_GROUPS
    .map((group) => {
      const meta = state.mediaBuilderMeta[group.id];
      const groupWithMeta = { ...group, label: meta.label, helper: meta.helper };
      return `
      <section class="media-group-builder">
        <div class="media-group-heading">
          <div>
            <strong>${escapeHtml(group.label)}</strong>
            <span>${escapeHtml(group.helper)}</span>
          </div>
          <label>
            Section title
            <input id="${mediaGroupMetaId("mediaGroupLabel", group.id)}" type="text" value="${escapeHtml(meta.label)}" placeholder="${escapeHtml(group.label)}">
          </label>
          <label>
            Admin note
            <input id="${mediaGroupMetaId("mediaGroupHelper", group.id)}" type="text" value="${escapeHtml(meta.helper)}" placeholder="${escapeHtml(group.helper)}">
          </label>
        </div>
        ${state.mediaBuilderGroups[group.id].map((item, index) => mediaFieldset(groupWithMeta, index, item)).join("")}
        <button class="mini-button add-media-button" type="button" data-add-media="${group.id}">+ Add asset</button>
      </section>
    `;
    })
    .join("");

  setupDetailMediaUploads();
}

function currentMediaGroupsFromFields(includeEmpty = false) {
  return MEDIA_GROUPS.reduce((groups, group) => {
    const fieldsets = Array.from(document.querySelectorAll(`[data-media-group="${group.id}"]`));
    groups[group.id] = fieldsets.map((fieldset) => {
      const index = Number(fieldset.dataset.mediaIndex);
      const type = mediaField("mediaType", group.id, index).value;
      const title = mediaField("mediaTitle", group.id, index).value.trim();
      const url = mediaField("mediaUrl", group.id, index).value.trim();
      const videoUrl = mediaField("mediaVideoUrl", group.id, index).value.trim();
      const description = mediaField("mediaDescription", group.id, index).value.trim();
      const src = state.detailMediaImages[mediaImageKey(group.id, index)] || url;
      const imageFit = mediaField("mediaImageFit", group.id, index)?.value || "cover";
      const imagePosition = mediaField("mediaImagePosition", group.id, index)?.value || "center center";
      const imageZoom = mediaField("mediaImageZoom", group.id, index)?.value || "100";
      const item = { type, title, src, videoUrl, description, imageFit, imagePosition, imageZoom };

      if (!includeEmpty && !hasMediaContent(item)) return null;
      return item;
    }).filter(Boolean);
    return groups;
  }, {});
}

function formMediaGroups() {
  return currentMediaGroupsFromFields(false);
}

function syncMediaBuilderState() {
  state.mediaBuilderGroups = currentMediaGroupsFromFields(true);
  state.mediaBuilderMeta = formMediaGroupMeta();
}

function clearMediaFields() {
  state.detailMediaImages = {};
  state.mediaBuilderGroups = defaultMediaBuilderGroups();
  state.mediaBuilderMeta = defaultMediaGroupMeta();
  renderMediaBuilder();
}

function clearDetailMediaImage(groupId, index) {
  delete state.detailMediaImages[mediaImageKey(groupId, index)];
  const urlField = mediaField("mediaUrl", groupId, index);
  const fileField = mediaField("mediaFile", groupId, index);
  urlField.value = "";
  fileField.value = "";
  clearControlError(urlField);
  clearControlError(fileField);
  mediaField("mediaFileName", groupId, index).textContent = "Choose or drop image";
  renderPreview();
}

function clearDetailMediaItem(groupId, index) {
  clearDetailMediaImage(groupId, index);
  mediaField("mediaType", groupId, index).value = "Image";
  mediaField("mediaTitle", groupId, index).value = "";
  const videoField = mediaField("mediaVideoUrl", groupId, index);
  videoField.value = "";
  clearControlError(videoField);
  mediaField("mediaDescription", groupId, index).value = "";
  renderPreview();
}

function removeDetailMediaItem(groupId, index) {
  syncMediaBuilderState();
  const items = state.mediaBuilderGroups[groupId] || [];
  items.splice(index, 1);
  state.mediaBuilderGroups[groupId] = items.length ? items : [emptyMediaItem()];
  renderMediaBuilder();
  renderPreview();
}

function addDetailMediaItem(groupId) {
  if (state.loadingCount) {
    showToast("Please wait for the current asset to finish preparing.");
    return;
  }
  syncMediaBuilderState();
  state.mediaBuilderGroups[groupId] = [
    ...(state.mediaBuilderGroups[groupId] || []),
    emptyMediaItem()
  ];
  renderMediaBuilder();
  renderPreview();
}

function fillMediaFields(mediaGroups = {}, mediaGroupMeta = {}) {
  state.detailMediaImages = {};
  state.mediaBuilderGroups = normalizeMediaBuilderGroups(mediaGroups);
  state.mediaBuilderMeta = normalizeMediaGroupMeta(mediaGroupMeta);
  renderMediaBuilder();
}

async function processDetailMediaFile(file, groupId, index, input) {
  const fileName = mediaField("mediaFileName", groupId, index);
  if (!file) {
    if (fileName) fileName.textContent = "Choose or drop image";
    clearControlError(input);
    return;
  }

  if (fileMatches(file, ALLOWED_VIDEO_MIME_TYPES, ALLOWED_VIDEO_EXTENSIONS)) {
    const message = validateVideoAssetFile(file);
    if (message) {
      setControlError(input, message);
      if (fileName) fileName.textContent = "Choose or drop image";
      if (input) input.value = "";
      showToast(message);
      return;
    }
    const typeField = mediaField("mediaType", groupId, index);
    if (typeField) typeField.value = "Video";
    if (fileName) fileName.textContent = "Paste a public video link";
    if (input) input.value = "";
    clearControlError(input);
    showToast("Use a public Drive, YouTube, Vimeo, or direct link for videos.");
    renderPreview();
    return;
  }

  const imageError = validateImageFile(file, "Campaign asset image");
  if (imageError) {
    setControlError(input, imageError);
    if (fileName) fileName.textContent = "Choose or drop image";
    if (input) input.value = "";
    showToast(imageError);
    return;
  }

  if (fileName) fileName.textContent = file.name;
  clearControlError(input);
  showLoadingBanner("Preparing campaign asset...");
  try {
    state.detailMediaImages[mediaImageKey(groupId, index)] = await readFileAsDataUrl(file, {
      maxDimension: MEDIA_ASSET_MAX_DIMENSION,
      quality: MEDIA_ASSET_IMAGE_QUALITY
    });
    renderPreview();
  } catch {
    showToast("Could not prepare this image.");
  } finally {
    hideLoadingBanner();
  }
}

function setupDetailMediaUploads() {
  document.querySelectorAll("[data-detail-group]").forEach((input) => {
    input.addEventListener("change", async (event) => {
      const groupId = event.target.dataset.detailGroup;
      const index = Number(event.target.dataset.detailIndex);
      const file = event.target.files?.[0];
      await processDetailMediaFile(file, groupId, index, event.target);
    });
  });
}

function setupDetailMediaControls() {
  const builder = document.getElementById("media-builder-fields");
  if (!builder) return;

  builder.addEventListener("click", (event) => {
    const imageButton = event.target.closest("[data-clear-media-image]");
    if (imageButton) {
      clearDetailMediaImage(imageButton.dataset.clearMediaImage, Number(imageButton.dataset.clearMediaImageIndex));
      return;
    }

    const assetButton = event.target.closest("[data-clear-media]");
    if (assetButton) {
      clearDetailMediaItem(assetButton.dataset.clearMedia, Number(assetButton.dataset.clearMediaIndex));
      return;
    }

    const removeButton = event.target.closest("[data-remove-media]");
    if (removeButton) {
      removeDetailMediaItem(removeButton.dataset.removeMedia, Number(removeButton.dataset.removeMediaIndex));
      return;
    }

    const addButton = event.target.closest("[data-add-media]");
    if (addButton) {
      addDetailMediaItem(addButton.dataset.addMedia);
    }
  });

  builder.addEventListener("dragover", (event) => {
    const dropZone = event.target.closest("[data-drop-media]");
    if (!dropZone) return;
    event.preventDefault();
    dropZone.classList.add("is-drag-over");
  });

  builder.addEventListener("dragleave", (event) => {
    const dropZone = event.target.closest("[data-drop-media]");
    if (!dropZone || dropZone.contains(event.relatedTarget)) return;
    dropZone.classList.remove("is-drag-over");
  });

  builder.addEventListener("drop", async (event) => {
    const dropZone = event.target.closest("[data-drop-media]");
    if (!dropZone) return;
    event.preventDefault();
    dropZone.classList.remove("is-drag-over");
    const groupId = dropZone.dataset.dropMedia;
    const index = Number(dropZone.dataset.dropMediaIndex);
    const input = mediaField("mediaFile", groupId, index);
    await processDetailMediaFile(event.dataTransfer?.files?.[0], groupId, index, input);
  });
}

function clearProjectImage() {
  const imageInput = document.getElementById("image");
  if (imageInput) imageInput.value = "";
  clearControlError(imageInput);
  state.previewImage = "";
  state.projectImageRemoved = true;
  document.getElementById("image-file-name").textContent = "No thumbnail selected";
  renderPreview();
}

function clearExperienceImage() {
  const imageInput = document.getElementById("experienceImage");
  if (imageInput) imageInput.value = "";
  clearControlError(imageInput);
  state.experiencePreviewImage = "";
  state.experienceImageRemoved = true;
  document.getElementById("experience-image-file-name").textContent = "No image selected";
  renderExperiencePreview();
}

function adminExperienceRow(experience) {
  const count = projectsForExperience(experience.id).length;
  const isDirty = experienceDirty(experience);
  return `
    <div class="admin-experience-row ${isDirty ? "draft-dirty" : ""}" data-experience-id="${escapeHtml(experience.id)}">
      <span style="--experience-accent: ${experience.accent}"></span>
      <div>
        <strong>${breakableHtml(experience.company)}</strong>
        <small>${escapeHtml(experience.title)} · ${count} project${count === 1 ? "" : "s"} · ${escapeHtml(experienceHomeSlotLabel(experience.homeSlot))}</small>
        ${isDirty ? renderDirtyBadge() : ""}
      </div>
      <div class="row-actions">
        <button class="icon-button" type="button" data-experience-action="edit" aria-label="Edit ${escapeHtml(experience.company)}">✎</button>
        <button class="icon-button delete" type="button" data-experience-action="delete" aria-label="Delete ${escapeHtml(experience.company)}">×</button>
      </div>
    </div>
  `;
}

function renderAdminExperienceList() {
  const list = document.getElementById("admin-experience-list");
  if (!list) return;
  list.innerHTML = experiences.length
    ? experiences.map(adminExperienceRow).join("")
    : `<div class="empty-state"><strong>No draft experiences yet.</strong></div>`;
}

function validateExperienceForSave(experience) {
  const form = document.getElementById("experience-form");
  const imageInput = document.getElementById("experienceImage");
  validateExperienceDates();
  if (!experience.image) {
    setControlError(imageInput, "Experience card image is required. Upload a JPG, PNG, WebP, or GIF.");
  } else {
    clearControlError(imageInput);
  }
  return validateNativeForm(form, "Please fix the highlighted experience fields.");
}

async function handleExperienceSave(event) {
  event.preventDefault();
  const nextExperience = formExperience();
  if (!validateExperienceForSave(nextExperience)) return;
  const nextSiteContent = siteContentWithExperienceHomeLimit();
  if (!(await confirmAction("Save this experience as a draft?", "Save Experience"))) return;

  let nextExperiences = experiences.some((experience) => experience.id === nextExperience.id)
    ? experiences.map((experience) => (experience.id === nextExperience.id ? nextExperience : experience))
    : [...experiences, nextExperience];
  nextExperiences = applyExperienceHomeSlotChoice(nextExperiences, nextExperience);

  saveDraftPortfolio({
    experiences: nextExperiences,
    projects: state.projects,
    portfolioProjects: state.portfolioProjects,
    featuredProducts: state.featuredProducts,
    siteContent: nextSiteContent
  });
  clearExperienceForm();
  renderExperienceSelect();
  renderAdminExperienceList();
  renderAdminList();
  renderPreview();
  renderAdminMode();
  showToast("Experience saved as draft.");
}

async function handleAdminExperienceAction(event) {
  const button = event.target.closest("[data-experience-action]");
  if (!button) return;

  const row = button.closest("[data-experience-id]");
  const experience = experiences.find((item) => item.id === row.dataset.experienceId);
  if (!experience) return;

  if (button.dataset.experienceAction === "delete") {
    if (!(await confirmAction("Delete this draft experience and its projects?", "Delete"))) return;
    saveDraftPortfolio({
      experiences: experiences.filter((item) => item.id !== experience.id),
      projects: state.projects.filter((project) => project.experienceId !== experience.id),
      portfolioProjects: state.portfolioProjects,
      featuredProducts: state.featuredProducts,
      siteContent: state.siteContent
    });
    renderExperienceSelect();
    renderAdminExperienceList();
    renderAdminList();
    renderPreview();
    renderAdminMode();
    showToast("Experience removed from drafts.");
    return;
  }

  document.getElementById("experience-id").value = experience.id;
  document.getElementById("experienceCompany").value = experience.company;
  document.getElementById("experienceTitle").value = experience.title;
  document.getElementById("experienceDates").value = experience.dates;
  setExperienceDatePickersFromValue(experience.dates);
  document.getElementById("experienceLocation").value = experience.location;
  document.getElementById("experienceHeadline").value = experience.headline;
  document.getElementById("experienceSummary").value = experience.summary;
  document.getElementById("experienceImpact").value = experience.impact;
  document.getElementById("experienceHomeSlot").value = normalizeFeaturedHomeSlot(experience.homeSlot);
  renderExperienceHomeLimitSelect();
  document.getElementById("experienceAccent").value = experience.accent || "#0a6f6b";
  document.getElementById("experienceImageFit").value = normalizeImageFit(experience.imageFit);
  document.getElementById("experienceImagePosition").value = normalizeImagePosition(experience.imagePosition);
  document.getElementById("experienceImageZoom").value = normalizeImageZoom(experience.imageZoom);
  document.getElementById("experienceDetailImageFit").value = imageSettings(experience, "detail").fit;
  document.getElementById("experienceDetailImagePosition").value = imageSettings(experience, "detail").position;
  document.getElementById("experienceDetailImageZoom").value = imageSettings(experience, "detail").zoom;
  document.getElementById("experience-image-file-name").textContent = experience.image ? "Existing image selected" : "Choose an image";
  state.experiencePreviewImage = experience.image || "";
  state.experienceImageRemoved = false;
  renderExperiencePreview();
  document.getElementById("experienceCompany").focus();
}

function setupAdminModes() {
  document.querySelectorAll("[data-admin-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.adminMode === state.adminMode);
    button.classList.toggle("has-unpublished", adminModeDirty(button.dataset.adminMode));
    button.addEventListener("click", () => {
      state.adminMode = button.dataset.adminMode;
      renderAdminMode();
    });
  });
  renderAdminMode();
}

function renderAdminMode() {
  document.querySelectorAll("[data-admin-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.adminMode === state.adminMode);
    button.classList.toggle("has-unpublished", adminModeDirty(button.dataset.adminMode));
  });
  document.querySelectorAll("[data-admin-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.adminPanel !== state.adminMode;
  });
}

function adminModeDirty(mode) {
  if (mode === "portfolio") return portfolioContentDirty();
  if (mode === "content") return siteContentDirty();
  if (mode === "resume") return resumeDirty();
  return false;
}

function resetResumeDraftInputs() {
  state.resumeFileDraft = "";
  state.resumeFileNameDraft = "";
  state.resumePreviewDraft = "";
  state.resumeFileRemoved = false;
  state.resumePreviewRemoved = false;
}

function formResume() {
  const label = document.getElementById("resume-label")?.value.trim() || defaultResume.label;
  const existingResume = normalizeResume(state.resume);
  return normalizeResume({
    label,
    file: state.resumeFileRemoved ? "" : state.resumeFileDraft || existingResume.file,
    fileName: state.resumeFileRemoved ? defaultResume.fileName : state.resumeFileNameDraft || existingResume.fileName,
    previewImage: state.resumePreviewRemoved ? "" : state.resumePreviewDraft || existingResume.previewImage,
    updatedAt: (state.resumeFileDraft || state.resumePreviewDraft || label !== existingResume.label)
      ? new Date().toISOString()
      : existingResume.updatedAt
  });
}

function renderResumeAdmin() {
  const form = document.getElementById("resume-form");
  if (!form) return;

  const labelInput = document.getElementById("resume-label");
  const labelIsFocused = document.activeElement === labelInput;
  const resume = formResume();
  if (!labelIsFocused) labelInput.value = resume.label;
  document.getElementById("resume-file-name").textContent = resume.file
    ? state.resumeFileNameDraft || resume.fileName || "Existing resume selected"
    : "Choose a PDF";
  document.getElementById("resume-preview-file-name").textContent = resume.previewImage
    ? state.resumePreviewDraft ? "New preview selected" : "Existing preview selected"
    : "Choose a preview image";
  document.getElementById("resume-publish-state").textContent = resumeDirty() ? "Draft not published" : "Published";
  document.getElementById("admin-resume-preview").innerHTML = `
    <article class="resume-admin-preview-card ${resumeDirty() ? "draft-dirty" : ""}">
      <div class="resume-preview-frame">${resumePreviewMarkup(resume)}</div>
      <div>
        <strong>${escapeHtml(resume.fileName || defaultResume.fileName)}</strong>
        <small>${resume.file ? "Resume PDF ready" : "No resume PDF selected"}</small>
        ${resume.updatedAt ? `<small>Updated ${escapeHtml(new Date(resume.updatedAt).toLocaleDateString())}</small>` : ""}
        ${resumeDirty() ? renderDirtyBadge() : ""}
      </div>
    </article>
  `;
}

async function readResumePdfAsDataUrl(file) {
  if (!file) return "";
  const message = validateResumePdfFile(file);
  if (message) throw new Error(message);
  return readRawFileAsDataUrl(file);
}

async function readResumePreviewAsDataUrl(file) {
  if (!file) return "";
  const message = validateImageFile(file, "Resume preview image");
  if (message) throw new Error(message);
  const blob = await compressedImageBlob(file);
  return blob ? readRawFileAsDataUrl(blob) : readFileAsDataUrl(file);
}

async function saveResumeDraft(event) {
  event.preventDefault();
  if (!validateNativeForm(document.getElementById("resume-form"), "Please fix the highlighted resume fields.")) return;
  if (!(await confirmAction("Save this resume as a draft?", "Save Resume"))) return;
  try {
    saveDraftPortfolio(portfolioSnapshot({ resume: formResume() }));
  } catch {
    alert("The resume is too large for browser storage. Try a smaller PDF, then publish again.");
    return;
  }
  resetResumeDraftInputs();
  renderResumeAdmin();
  renderAdminMode();
  updateResumeLinks();
  showToast("Resume saved as draft.");
}

async function resetResumeDraft() {
  if (!(await confirmAction("Reset resume draft back to the currently published resume?", "Reset Resume"))) return;
  resetResumeDraftInputs();
  state.resume = normalizeResume(publishedResume);
  document.getElementById("resume-label").value = state.resume.label || defaultResume.label;
  saveDraftPortfolio(portfolioSnapshot({ resume: state.resume }));
  renderResumeAdmin();
  renderAdminMode();
  updateResumeLinks();
  showToast("Resume draft reset.");
}

function setupResumeAdmin() {
  const form = document.getElementById("resume-form");
  if (!form) return;
  resetResumeDraftInputs();
  document.getElementById("resume-label").value = state.resume.label || defaultResume.label;
  renderResumeAdmin();
  setupInlineValidation(form);

  form.addEventListener("input", renderResumeAdmin);
  form.addEventListener("submit", saveResumeDraft);
  document.getElementById("reset-resume-draft").addEventListener("click", resetResumeDraft);
  document.getElementById("clear-resume-file").addEventListener("click", () => {
    const resumeFileInput = document.getElementById("resume-file");
    resumeFileInput.value = "";
    clearControlError(resumeFileInput);
    state.resumeFileDraft = "";
    state.resumeFileNameDraft = "";
    state.resumeFileRemoved = true;
    renderResumeAdmin();
  });
  document.getElementById("clear-resume-preview").addEventListener("click", () => {
    const previewInput = document.getElementById("resume-preview-file");
    previewInput.value = "";
    clearControlError(previewInput);
    state.resumePreviewDraft = "";
    state.resumePreviewRemoved = true;
    renderResumeAdmin();
  });
  document.getElementById("resume-file").addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    showLoadingBanner("Preparing resume PDF...");
    try {
      state.resumeFileDraft = await readResumePdfAsDataUrl(file);
      state.resumeFileNameDraft = file.name || defaultResume.fileName;
      state.resumeFileRemoved = false;
      clearControlError(event.target);
      renderResumeAdmin();
    } catch (error) {
      setControlError(event.target, error.message || "Could not read resume.");
      showToast(error.message || "Could not read resume.");
      event.target.value = "";
    } finally {
      hideLoadingBanner();
    }
  });
  document.getElementById("resume-preview-file").addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    showLoadingBanner("Preparing resume preview...");
    try {
      state.resumePreviewDraft = await readResumePreviewAsDataUrl(file);
      state.resumePreviewRemoved = false;
      clearControlError(event.target);
      renderResumeAdmin();
    } catch (error) {
      setControlError(event.target, error.message || "Could not read resume preview.");
      showToast(error.message || "Could not read resume preview.");
      event.target.value = "";
    } finally {
      hideLoadingBanner();
    }
  });
}

function pageFields(pageId) {
  return CONTENT_FIELDS.filter((field) => field.page === pageId);
}

function contentFieldValue(field) {
  const value = getPathValue(state.siteContent, field.path);
  if (Array.isArray(value)) return value.join("\n");
  return value ?? "";
}

function renderContentTabs() {
  const tabs = document.getElementById("content-page-tabs");
  if (!tabs) return;
  tabs.innerHTML = CONTENT_PAGES
    .map((page) => `
      <button class="filter-chip ${page.id === state.contentPage ? "active" : ""} ${contentPageDirty(page.id) ? "has-unpublished" : ""}" type="button" data-content-page="${page.id}">
        ${escapeHtml(page.label)}
      </button>
    `)
    .join("");
}

function renderContentFieldList() {
  const list = document.getElementById("content-field-list");
  if (!list) return;
  list.innerHTML = pageFields(state.contentPage)
    .map((field) => {
      const value = contentFieldValue(field);
      const isColor = field.type === "color";
      const style = state.siteContent.appearance?.textStyles?.[field.key]?.color || "";
      const isDirty = contentFieldDirty(field);
      const isPreviewing = state.previewContentField === field.key;
      return `
        <article class="content-field-row ${isDirty ? "draft-dirty" : ""} ${isPreviewing ? "is-preview-selected" : ""}" data-content-field="${escapeHtml(field.key)}">
          <div>
            <strong>${escapeHtml(field.label)}</strong>
            <small>${escapeHtml(isColor ? value : String(value).slice(0, 140) || "Empty")}</small>
            ${isDirty ? renderDirtyBadge() : ""}
          </div>
          <div class="content-field-actions">
            ${style ? `<span class="content-color-dot" style="--dot-color: ${escapeHtml(style)}"></span>` : ""}
            ${isColor ? `<span class="content-color-dot" style="--dot-color: ${escapeHtml(value)}"></span>` : ""}
            <button class="icon-button" type="button" data-preview-content="${escapeHtml(field.key)}" aria-label="Preview ${escapeHtml(field.label)}">◉</button>
            <button class="icon-button" type="button" data-edit-content="${escapeHtml(field.key)}" aria-label="Edit ${escapeHtml(field.label)}">✎</button>
            <button class="icon-button delete" type="button" data-reset-content="${escapeHtml(field.key)}" aria-label="Reset ${escapeHtml(field.label)}">↺</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function previewAttributes(key, className = "") {
  const classes = [className, state.previewContentField === key ? "preview-focus is-preview-pulsing" : ""]
    .filter(Boolean)
    .join(" ");
  return ` data-preview-key="${escapeHtml(key)}"${classes ? ` class="${escapeHtml(classes)}"` : ""}`;
}

function pagePreviewMarkup(pageId) {
  const content = state.siteContent;
  if (pageId === "about") {
    return `
      <div class="mini-page-preview">
        <p${previewAttributes("about.eyebrow", "eyebrow")}${textStyle("about.eyebrow")}>${escapeHtml(content.about.eyebrow)}</p>
        <h3${previewAttributes("about.headline")}${textStyle("about.headline")}>${escapeHtml(content.about.headline)}</h3>
        ${content.about.body.map((item, index) => `<p${previewAttributes(`about.body.${index}`)}${textStyle(`about.body.${index}`)}>${escapeHtml(item)}</p>`).join("")}
        <div class="mini-timeline-preview">
          ${content.about.timeline.map((item, index) => `
            <span>
              <em${previewAttributes(`about.timeline.${index}.dates`)}>${escapeHtml(item.dates)}</em>
              <strong${previewAttributes(`about.timeline.${index}.title`)}${textStyle(`about.timeline.${index}.title`)}>${escapeHtml(item.title)}</strong>
              <small${previewAttributes(`about.timeline.${index}.text`)}${textStyle(`about.timeline.${index}.text`)}>${escapeHtml(item.text)}</small>
            </span>
          `).join("")}
        </div>
        <small${previewAttributes("about.sketchAlt")}>Sketch alt: ${escapeHtml(content.about.sketchAlt)}</small>
      </div>
    `;
  }
  if (pageId === "contact") {
    return `
      <div class="mini-page-preview">
        <p${previewAttributes("contact.eyebrow", "eyebrow")}${textStyle("contact.eyebrow")}>${escapeHtml(content.contact.eyebrow)}</p>
        <h3${previewAttributes("contact.headline")}${textStyle("contact.headline")}>${escapeHtml(content.contact.headline)}</h3>
        <div class="mini-contact-preview">
          ${content.contact.cards.map((card, index) => `
            <span>
              <b${previewAttributes(`contact.cards.${index}.icon`)}${textStyle(`contact.cards.${index}.icon`)}>${escapeHtml(card.icon)}</b>
              <strong${previewAttributes(`contact.cards.${index}.label`)}${textStyle(`contact.cards.${index}.label`)}>${escapeHtml(card.label)}</strong>
              <small${previewAttributes(`contact.cards.${index}.value`)}${textStyle(`contact.cards.${index}.value`)}>${escapeHtml(card.value)}</small>
              <em${previewAttributes(`contact.cards.${index}.href`)}>${escapeHtml(card.href)}</em>
            </span>
          `).join("")}
        </div>
      </div>
    `;
  }
  if (pageId === "global") {
    return `
      <div class="mini-page-preview">
        <p class="eyebrow">Header</p>
        <h3${previewAttributes("global.brandName")}${textStyle("global.brandName")}>${escapeHtml(content.global.brandName)}</h3>
        <p${previewAttributes("global.brandSubtitle")}${textStyle("global.brandSubtitle")}>${escapeHtml(content.global.brandSubtitle)}</p>
        <strong${previewAttributes("global.brandSymbol")}>${escapeHtml(content.global.brandSymbol)}</strong>
        <small${previewAttributes("global.skipLink")}>${escapeHtml(content.global.skipLink)}</small>
        <small${previewAttributes("global.metaTitle")}>Title: ${escapeHtml(content.global.metaTitle)}</small>
        <small${previewAttributes("global.metaDescription")}>Meta: ${escapeHtml(content.global.metaDescription)}</small>
        <div class="mini-nav-preview">
          ${Object.entries(content.global.nav).map(([key, item]) => `<span${previewAttributes(`global.nav.${key}`)}>${escapeHtml(item)}</span>`).join("")}
        </div>
      </div>
    `;
  }
  if (pageId === "work") {
    return `
      <div class="mini-page-preview">
        <p${previewAttributes("work.eyebrow", "eyebrow")}${textStyle("work.eyebrow")}>${escapeHtml(content.work.eyebrow)}</p>
        <h3${previewAttributes("work.headline")}${textStyle("work.headline")}>${escapeHtml(content.work.headline)}</h3>
        <small${previewAttributes("work.searchPlaceholder")}>Search: ${escapeHtml(content.work.searchPlaceholder)}</small>
      </div>
    `;
  }
  if (pageId === "featured") {
    return `
      <div class="mini-page-preview">
        <p${previewAttributes("featured.eyebrow", "eyebrow")}${textStyle("featured.eyebrow")}>${escapeHtml(content.featured.eyebrow)}</p>
        <h3${previewAttributes("featured.headline")}${textStyle("featured.headline")}>${escapeHtml(content.featured.headline)}</h3>
        <small${previewAttributes("featured.searchPlaceholder")}>Search: ${escapeHtml(content.featured.searchPlaceholder)}</small>
      </div>
    `;
  }
  if (pageId === "appearance") {
    return `
      <div class="mini-page-preview swatch-preview">
        <span${previewAttributes("appearance.pageBackground")} style="--swatch: ${escapeHtml(content.appearance.pageBackground)}">Background</span>
        <span${previewAttributes("appearance.inkColor")} style="--swatch: ${escapeHtml(content.appearance.inkColor)}">Text</span>
        <span${previewAttributes("appearance.accentColor")} style="--swatch: ${escapeHtml(content.appearance.accentColor)}">Accent</span>
        <span${previewAttributes("appearance.typewriterColor")} style="--swatch: ${escapeHtml(content.appearance.typewriterColor)}">Type</span>
        <span${previewAttributes("appearance.buttonColor")} style="--swatch: ${escapeHtml(content.appearance.buttonColor)}">Button</span>
      </div>
    `;
  }
  return `
    <div class="mini-page-preview">
      <p${previewAttributes("home.eyebrow", "eyebrow")}${textStyle("home.eyebrow")}>${escapeHtml(content.home.eyebrow)}</p>
      <h3${previewAttributes("home.headline")}${textStyle("home.headline")}>${escapeHtml(content.home.headline)}</h3>
      <strong${previewAttributes("home.typewriterPrefix")}${textStyle("home.typewriterPrefix")}>${escapeHtml(content.home.typewriterPrefix)} ${escapeHtml(content.home.typewriterWords[0] || "")}</strong>
      <small${previewAttributes("home.typewriterWords")}>${escapeHtml(content.home.typewriterWords.join(" / "))}</small>
      <p${previewAttributes("home.summary")}${textStyle("home.summary")}>${escapeHtml(content.home.summary)}</p>
      <div class="mini-actions-preview">
        <span${previewAttributes("home.primaryAction")}>${escapeHtml(content.home.primaryAction)}</span>
        <span${previewAttributes("home.secondaryAction")}>${escapeHtml(content.home.secondaryAction)}</span>
      </div>
      <div class="mini-scan-preview">
        <strong${previewAttributes("home.quickScanEyebrow")}>${escapeHtml(content.home.quickScanEyebrow)}</strong>
        ${content.home.quickScan.map((item, index) => `
          <span>
            <b${previewAttributes(`home.quickScan.${index}.label`)}${textStyle(`home.quickScan.${index}.label`)}>${escapeHtml(item.label)}</b>
            <small${previewAttributes(`home.quickScan.${index}.text`)}${textStyle(`home.quickScan.${index}.text`)}>${escapeHtml(item.text)}</small>
          </span>
        `).join("")}
      </div>
      <div class="mini-section-preview">
        <span>
          <b${previewAttributes("home.featuredEyebrow")}>${escapeHtml(content.home.featuredEyebrow)}</b>
          <small${previewAttributes("home.featuredHeadline")}>${escapeHtml(content.home.featuredHeadline)}</small>
          <em${previewAttributes("home.featuredFilters")}>${escapeHtml(featuredFilters().join(" · "))}</em>
        </span>
        <span>
          <b${previewAttributes("home.workEyebrow")}>${escapeHtml(content.home.workEyebrow)}</b>
          <small${previewAttributes("home.workHeadline")}>${escapeHtml(content.home.workHeadline)}</small>
        </span>
      </div>
    </div>
  `;
}

function renderContentPreview() {
  const target = document.getElementById("site-content-preview");
  if (!target) return;
  const page = CONTENT_PAGES.find((item) => item.id === state.contentPage);
  const field = contentFieldByKey(state.previewContentField);
  document.getElementById("content-preview-page").textContent = field ? `${page?.label || "Home"} · ${field.label}` : page?.label || "Home";
  target.innerHTML = pagePreviewMarkup(state.contentPage);
}

function renderContentEditor() {
  renderContentTabs();
  renderContentFieldList();
  renderContentPreview();
}

function setupContentEditor() {
  renderContentEditor();
  document.getElementById("content-page-tabs").addEventListener("click", (event) => {
    const button = event.target.closest("[data-content-page]");
    if (!button) return;
    state.contentPage = button.dataset.contentPage;
    if (contentFieldByKey(state.previewContentField)?.page !== state.contentPage) {
      state.previewContentField = "";
    }
    renderContentEditor();
  });
  document.getElementById("content-field-list").addEventListener("click", handleContentFieldAction);
  document.getElementById("save-site-content").addEventListener("click", saveSiteContentDraft);
  document.getElementById("reset-site-content").addEventListener("click", resetSiteContent);
}

function contentFieldByKey(key) {
  return CONTENT_FIELDS.find((field) => field.key === key);
}

function fieldInputMarkup(field) {
  const value = contentFieldValue(field);
  if (field.type === "textarea" || field.type === "list") {
    return `<textarea id="content-edit-value" rows="6">${escapeHtml(value)}</textarea>`;
  }
  if (field.type === "color") {
    return `<input id="content-edit-value" type="color" value="${escapeHtml(value || "#16120f")}">`;
  }
  return `<input id="content-edit-value" type="text" value="${escapeHtml(value)}">`;
}

function showContentEditDialog(field) {
  document.querySelector(".content-edit-dialog")?.remove();
  const currentColor = state.siteContent.appearance?.textStyles?.[field.key]?.color || "";
  const modal = document.createElement("div");
  modal.className = "confirm-dialog content-edit-dialog";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-label", `Edit ${field.label}`);
  modal.innerHTML = `
    <div class="confirm-panel content-edit-panel">
      <p class="eyebrow">Edit text</p>
      <h2>${escapeHtml(field.label)}</h2>
      <label>
        Text
        ${fieldInputMarkup(field)}
      </label>
      ${field.type !== "color" ? `
        <label>
          Text color
          <input id="content-edit-color" type="color" value="${escapeHtml(currentColor || state.siteContent.appearance.inkColor || "#16120f")}">
        </label>
        <label class="inline-check">
          <input id="content-use-custom-color" type="checkbox" ${currentColor ? "checked" : ""}>
          Use custom color for this text
        </label>
      ` : ""}
      ${field.helper ? `<small>${escapeHtml(field.helper)}</small>` : ""}
      <div class="confirm-actions">
        <button class="button ghost" type="button" data-content-cancel>Cancel</button>
        <button class="button ghost" type="button" data-content-reset>Reset Default</button>
        <button class="button primary" type="button" data-content-save>Apply</button>
      </div>
    </div>
  `;

  const close = () => {
    modal.remove();
    document.body.classList.remove("modal-open");
    document.removeEventListener("keydown", handleKeydown);
  };

  const applyValue = () => {
    const input = modal.querySelector("#content-edit-value");
    const rawValue = input.value;
    const nextValue = field.type === "list"
      ? rawValue.split("\n").map((item) => item.trim()).filter(Boolean)
      : rawValue;
    setPathValue(state.siteContent, field.path, nextValue);

    if (field.type !== "color") {
      const colorInput = modal.querySelector("#content-edit-color");
      const defaultColor = currentColor || state.siteContent.appearance.inkColor || "#16120f";
      const colorChanged = colorInput.value.toLowerCase() !== defaultColor.toLowerCase();
      const useCustomColor = modal.querySelector("#content-use-custom-color").checked || colorChanged;
      if (useCustomColor) {
        state.siteContent.appearance.textStyles[field.key] = {
          color: colorInput.value
        };
      } else {
        removeTextStyle(field.key);
      }
    }

    applySiteContent();
    renderCategoryOptions(document.getElementById("category")?.value || "");
    renderContentEditor();
    renderAdminMode();
    if (routeParts().name === "/") setupHome();
    if (routeParts().name === "/about") setupAbout();
    if (routeParts().name === "/contact") setupContact();
    close();
  };

  function handleKeydown(event) {
    if (event.key === "Escape") close();
  }

  modal.querySelector("#content-edit-color")?.addEventListener("input", () => {
    modal.querySelector("#content-use-custom-color").checked = true;
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal || event.target.closest("[data-content-cancel]")) close();
    if (event.target.closest("[data-content-save]")) applyValue();
    if (event.target.closest("[data-content-reset]")) {
      resetContentField(field);
      applySiteContent();
      renderCategoryOptions(document.getElementById("category")?.value || "");
      renderContentEditor();
      renderAdminMode();
      close();
    }
  });

  document.body.append(modal);
  document.body.classList.add("modal-open");
  document.addEventListener("keydown", handleKeydown);
  modal.querySelector("#content-edit-value").focus({ preventScroll: true });
}

async function handleContentFieldAction(event) {
  const editButton = event.target.closest("[data-edit-content]");
  const resetButton = event.target.closest("[data-reset-content]");
  const previewButton = event.target.closest("[data-preview-content]");
  const key = editButton?.dataset.editContent || resetButton?.dataset.resetContent || previewButton?.dataset.previewContent;
  if (!key) return;
  const field = contentFieldByKey(key);
  if (!field) return;

  if (previewButton) {
    state.contentPage = field.page;
    state.previewContentField = field.key;
    renderContentEditor();
    showToast(`Previewing ${field.label}.`);
    return;
  }

  if (resetButton) {
    if (!(await confirmAction(`Reset "${field.label}" to default?`, "Reset"))) return;
    resetContentField(field);
    applySiteContent();
    renderCategoryOptions(document.getElementById("category")?.value || "");
    renderContentEditor();
    renderAdminMode();
    showToast("Text reset to default.");
    return;
  }

  showContentEditDialog(field);
}

async function saveSiteContentDraft() {
  if (!(await confirmAction("Save these text and appearance changes as a draft?", "Save Text"))) return;
  saveDraftPortfolio(portfolioSnapshot({ siteContent: state.siteContent }));
  renderCategoryOptions(document.getElementById("category")?.value || "");
  renderContentEditor();
  renderAdminMode();
  showToast("Text changes saved as draft.");
}

async function resetSiteContent() {
  if (!(await confirmAction("Reset all text and appearance to the default copy?", "Reset Text"))) return;
  state.siteContent = cloneItems(defaultSiteContent);
  saveDraftPortfolio(portfolioSnapshot({ siteContent: state.siteContent }));
  applySiteContent();
  renderCategoryOptions();
  renderContentEditor();
  renderAdminMode();
  showToast("Text and appearance reset.");
}

function setupAdmin() {
  if (!adminUnlocked()) {
    renderAdminLogin();
    return;
  }

  const draft = loadDraftPortfolio();
  experiences = cloneItems(draft.experiences);
  state.projects = cloneItems(draft.projects);
  state.portfolioProjects = cloneItems(draft.portfolioProjects);
  state.featuredProducts = cloneItems(draft.featuredProducts);
  state.siteContent = normalizeSiteContent(draft.siteContent);
  state.resume = normalizeResume(draft.resume);
  applySiteContent();
  state.previewImage = "";
  state.projectImageRemoved = false;
  state.experiencePreviewImage = "";
  state.experienceImageRemoved = false;
  state.detailMediaImages = {};
  state.mediaBuilderGroups = defaultMediaBuilderGroups();
  state.mediaBuilderMeta = defaultMediaGroupMeta();
  const form = document.getElementById("project-form");
  const imageInput = document.getElementById("image");

  renderCategoryOptions();
  renderFeaturedRankOptions();
  renderExperienceSelect();
  renderExperienceHomeLimitSelect();
  renderExperiencePreview();
  renderMediaBuilder();
  renderPreview({ resetScroll: true });
  renderAdminList();
  renderAdminExperienceList();
  setupAdminModes();
  setupContentEditor();
  setupResumeAdmin();

  setupInlineValidation(document.getElementById("experience-form"));
  setupInlineValidation(form);
  setupExperienceDateControls();
  document.getElementById("experience-form").addEventListener("submit", handleExperienceSave);
  document.getElementById("experience-form").addEventListener("input", renderExperiencePreview);
  document.getElementById("experience-form").addEventListener("change", renderExperiencePreview);
  document.getElementById("clear-experience-form").addEventListener("click", clearExperienceForm);
  document.getElementById("admin-experience-list").addEventListener("click", handleAdminExperienceAction);
  document.getElementById("clear-experience-image").addEventListener("click", clearExperienceImage);
  document.getElementById("experienceImage").addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    document.getElementById("experience-image-file-name").textContent = file ? file.name : "Choose an image";
    const imageError = validateImageFile(file, "Experience card image");
    if (imageError) {
      setControlError(event.target, imageError);
      event.target.value = "";
      document.getElementById("experience-image-file-name").textContent = "Choose an image";
      state.experiencePreviewImage = "";
      state.experienceImageRemoved = true;
      renderExperiencePreview();
      showToast(imageError);
      return;
    }
    clearControlError(event.target);
    if (file) showLoadingBanner("Preparing experience image...");
    try {
      state.experiencePreviewImage = file ? await readFileAsDataUrl(file) : "";
      state.experienceImageRemoved = false;
      renderExperiencePreview();
    } finally {
      if (file) hideLoadingBanner();
    }
  });
  setupCategoryBuilderControls();
  setupDetailMediaControls();
  form.addEventListener("input", renderPreview);
  form.addEventListener("change", renderPreview);
  document.getElementById("projectPlacement").addEventListener("change", () => {
    updateProjectPlacementFields();
    renderFeaturedRankOptions(document.getElementById("featuredRank")?.value || "", document.getElementById("project-id")?.value || "");
    renderPreview({ resetScroll: true });
  });
  form.addEventListener("submit", handleProjectSave);

  imageInput.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    document.getElementById("image-file-name").textContent = file ? file.name : "Choose an image";
    const imageError = validateImageFile(file, "Project thumbnail");
    if (imageError) {
      setControlError(event.target, imageError);
      event.target.value = "";
      document.getElementById("image-file-name").textContent = "Choose an image";
      state.previewImage = "";
      state.projectImageRemoved = true;
      renderPreview();
      showToast(imageError);
      return;
    }
    clearControlError(event.target);
    if (file) showLoadingBanner("Preparing image preview...");
    try {
      state.previewImage = file ? await readFileAsDataUrl(file) : "";
      state.projectImageRemoved = false;
      renderPreview();
    } finally {
      if (file) hideLoadingBanner();
    }
  });

  document.getElementById("clear-project-image").addEventListener("click", clearProjectImage);
  document.getElementById("clear-form").addEventListener("click", clearForm);
  document.getElementById("reset-projects").addEventListener("click", resetProjects);
  document.getElementById("export-projects").addEventListener("click", exportProjects);
  document.getElementById("preview-site").addEventListener("click", previewDraft);
  document.getElementById("publish-site").addEventListener("click", publishDraft);
  document.getElementById("admin-project-list").addEventListener("click", handleAdminListAction);
}

function readRawFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function compressedImageBlob(file, options = {}) {
  if (!file.type?.startsWith("image/")) return Promise.resolve(null);
  const maxDimension = options.maxDimension || MAX_UPLOAD_DIMENSION;
  const quality = options.quality || IMAGE_EXPORT_QUALITY;

  return new Promise((resolve, reject) => {
    const image = new Image();
    const objectUrl = URL.createObjectURL(file);

    image.onload = () => {
      URL.revokeObjectURL(objectUrl);
      const scale = Math.min(1, maxDimension / Math.max(image.width, image.height));
      const width = Math.max(1, Math.round(image.width * scale));
      const height = Math.max(1, Math.round(image.height * scale));
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, width, height);
      canvas.toBlob((blob) => {
        resolve(blob || null);
      }, "image/webp", quality);
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("Could not read image."));
    };

    image.src = objectUrl;
  });
}

async function readFileAsDataUrl(file, options = {}) {
  if (!file) return "";
  try {
    const blob = await compressedImageBlob(file, options);
    if (blob && blob.size && (file.size > 450000 || blob.size < file.size * 1.02)) {
      return readRawFileAsDataUrl(blob);
    }
  } catch {
    // Fall back to the original file so an upload failure does not block the draft.
  }
  return readRawFileAsDataUrl(file);
}

function placementUsesWork(placement) {
  return placement === "work" || placement === "both";
}

function placementUsesFeatured(placement) {
  return placement === "featured" || placement === "both";
}

function formProject() {
  const placement = document.getElementById("projectPlacement").value;
  const categories = currentProjectCategorySelections();
  return {
    id: document.getElementById("project-id").value || crypto.randomUUID(),
    placement,
    experienceId: placementUsesWork(placement) ? document.getElementById("experience").value : "",
    homeSlot: placementUsesFeatured(placement) ? normalizeFeaturedHomeSlot(document.getElementById("featuredSlot").value) : "",
    featuredRank: placementUsesFeatured(placement) ? normalizeFeaturedRank(document.getElementById("featuredRank")?.value || "") : "",
    title: stripSavedBreakHints(document.getElementById("title").value.trim()) || "Untitled project",
    category: categories[0],
    categories,
    mediaType: normalizeMediaType(document.getElementById("mediaType").value),
    role: document.getElementById("role").value.trim(),
    year: document.getElementById("year").value.trim(),
    tools: document.getElementById("tools").value.trim(),
    summary: document.getElementById("summary").value.trim() || "Project description pending.",
    whatPrernaDid: document.getElementById("whatPrernaDid").value.trim(),
    impact: document.getElementById("impact").value.trim(),
    link: document.getElementById("link").value.trim(),
    accent: document.getElementById("accent").value,
    imageFit: document.getElementById("imageFit").value,
    imagePosition: document.getElementById("imagePosition").value,
    imageZoom: document.getElementById("imageZoom").value,
    featuredImageFit: document.getElementById("featuredImageFit")?.value || document.getElementById("imageFit").value,
    featuredImagePosition: document.getElementById("featuredImagePosition")?.value || document.getElementById("imagePosition").value,
    featuredImageZoom: document.getElementById("featuredImageZoom")?.value || document.getElementById("imageZoom").value,
    detailImageFit: document.getElementById("detailImageFit")?.value || document.getElementById("imageFit").value,
    detailImagePosition: document.getElementById("detailImagePosition")?.value || document.getElementById("imagePosition").value,
    detailImageZoom: document.getElementById("detailImageZoom")?.value || document.getElementById("imageZoom").value,
    mediaGroupMeta: formMediaGroupMeta(),
    mediaGroups: formMediaGroups(),
    image: state.previewImage
  };
}

function updateProjectPlacementFields() {
  const placement = document.getElementById("projectPlacement")?.value || "featured";
  const isWorkProject = placementUsesWork(placement);
  const isFeaturedProject = placementUsesFeatured(placement);
  const experienceSelect = document.getElementById("experience");
  const experienceWrap = document.getElementById("experienceWrap") || experienceSelect?.closest("label");
  const featuredSlot = document.getElementById("featuredSlot");
  const featuredSlotWrap = document.getElementById("featuredSlotWrap");
  const featuredRank = document.getElementById("featuredRank");
  const featuredRankWrap = document.getElementById("featuredRankWrap");
  const workImageControls = document.getElementById("workImageControls");
  const featuredImageControls = document.getElementById("featuredImageControls");
  if (experienceWrap) experienceWrap.hidden = !isWorkProject;
  if (experienceSelect) {
    experienceSelect.required = isWorkProject;
    experienceSelect.disabled = !isWorkProject;
    experienceSelect.setAttribute("aria-required", String(isWorkProject));
    if (!isWorkProject) experienceSelect.value = "";
  }
  if (featuredSlotWrap) featuredSlotWrap.hidden = !isFeaturedProject;
  if (featuredSlot) {
    featuredSlot.disabled = !isFeaturedProject;
    if (!isFeaturedProject) featuredSlot.value = "";
  }
  if (featuredRankWrap) featuredRankWrap.hidden = !isFeaturedProject;
  if (featuredRank) {
    featuredRank.disabled = !isFeaturedProject;
    if (!isFeaturedProject) featuredRank.value = "";
  }
  if (workImageControls) workImageControls.hidden = !isWorkProject;
  if (featuredImageControls) featuredImageControls.hidden = !isFeaturedProject;
}

function adminPreviewBlock(title, helper, content) {
  return `
    <section class="admin-preview-block">
      <div class="board-topline">
        <strong>${escapeHtml(title)}</strong>
        <small>${escapeHtml(helper)}</small>
      </div>
      <div class="admin-preview-content">${content}</div>
    </section>
  `;
}

function adminCampaignPreview(project) {
  const groups = projectMediaGroups(project);
  const hasAssets = groups.some((group) => group.items.length);
  return `
    <section class="admin-campaign-preview">
      <div class="board-topline">
        <strong>Campaign Page Preview</strong>
        <small>${escapeHtml(project.title || "Untitled project")}</small>
      </div>
      <div class="campaign-info-card">
        <p class="eyebrow">What I Did</p>
        <p>${escapeHtml(project.whatPrernaDid || project.summary || "Project details coming soon.")}</p>
      </div>
      ${hasAssets
        ? groups.map((group) => campaignMediaGroup(group, project)).join("")
        : `<div class="empty-state"><strong>No campaign assets added yet.</strong></div>`
      }
    </section>
  `;
}

function renderPreview(options = {}) {
  const preview = document.getElementById("admin-preview");
  if (!preview) return;
  const previousScrollTop = preview.scrollTop;
  updateProjectPlacementFields();
  const project = formProject();
  const cardPreviews = [
    placementUsesFeatured(project.placement)
      ? adminPreviewBlock(
          "Featured Projects Page Card",
          "Uses the featured project image settings",
          featuredProjectCard(project)
        )
      : "",
    placementUsesWork(project.placement)
      ? adminPreviewBlock(
          "Work Experience Project Card",
          "Uses the card image settings",
          projectCard(project, "work")
        )
      : "",
    adminPreviewBlock(
      "Campaign Detail Right Image",
      "Uses the campaign detail image settings",
      `<div class="admin-hero-aside-preview" style="--experience-accent: ${escapeHtml(project.accent || categoryColor(projectPrimaryCategory(project)))}">${projectHeroAside(project)}</div>`
    )
  ].filter(Boolean).join("");
  preview.innerHTML = `
    ${cardPreviews}
    ${adminCampaignPreview(project)}
  `;
  preview.scrollTop = options.resetScroll ? 0 : previousScrollTop;
}

function applyFeaturedHomeSlotChoice(featuredProducts, activeProject) {
  const slot = normalizeFeaturedHomeSlot(activeProject.homeSlot);
  if (!["1", "2", "3"].includes(slot)) return featuredProducts;
  return featuredProducts.map((project) => {
    if (project.id === activeProject.id || normalizeFeaturedHomeSlot(project.homeSlot) !== slot) return project;
    return { ...project, homeSlot: "" };
  });
}

function applyExperienceHomeSlotChoice(experienceItems, activeExperience) {
  const slot = normalizeFeaturedHomeSlot(activeExperience.homeSlot);
  if (!["1", "2", "3"].includes(slot)) return experienceItems;
  return experienceItems.map((experience) => {
    if (experience.id === activeExperience.id || normalizeFeaturedHomeSlot(experience.homeSlot) !== slot) return experience;
    return { ...experience, homeSlot: "" };
  });
}

function mediaItemHasDraftContent(item = {}) {
  return Boolean(
    item.title
    || item.src
    || item.videoUrl
    || item.description
  );
}

function validateMediaGroupsForSave() {
  let isValid = true;
  MEDIA_GROUPS.forEach((group) => {
    document.querySelectorAll(`[data-media-group="${group.id}"]`).forEach((fieldset) => {
      const index = Number(fieldset.dataset.mediaIndex);
      const typeField = mediaField("mediaType", group.id, index);
      const titleField = mediaField("mediaTitle", group.id, index);
      const urlField = mediaField("mediaUrl", group.id, index);
      const videoField = mediaField("mediaVideoUrl", group.id, index);
      const descriptionField = mediaField("mediaDescription", group.id, index);
      [typeField, titleField, urlField, videoField, descriptionField].forEach(clearControlError);
      const item = {
        type: typeField?.value || "Image",
        title: titleField?.value.trim() || "",
        src: state.detailMediaImages[mediaImageKey(group.id, index)] || urlField?.value.trim() || "",
        videoUrl: videoField?.value.trim() || "",
        description: descriptionField?.value.trim() || ""
      };
      if (!mediaItemHasDraftContent(item)) return;

      if (item.type === "Video") {
        if (!item.videoUrl) {
          setControlError(videoField, "Video assets need a public Drive, YouTube, Vimeo, or direct video link.");
          isValid = false;
        } else if (!safeUrl(item.videoUrl)) {
          setControlError(videoField, "Enter a full public video URL starting with https://.");
          isValid = false;
        }
        if (item.src && !validImageSource(item.src)) {
          setControlError(urlField, "Thumbnail URL must be https://, an assets/uploads path, or an uploaded image.");
          isValid = false;
        }
        return;
      }

      if (!item.src) {
        setControlError(urlField, "Image assets need an uploaded image or image URL.");
        isValid = false;
      } else if (!validImageSource(item.src)) {
        setControlError(urlField, "Image URL must be https://, an assets/uploads path, or an uploaded image.");
        isValid = false;
      }
    });
  });
  if (!isValid) showToast("Please fix the highlighted campaign asset fields.");
  return isValid;
}

function validateProjectForSave(project) {
  const form = document.getElementById("project-form");
  const imageInput = document.getElementById("image");
  const linkInput = document.getElementById("link");
  clearControlError(imageInput);
  clearControlError(linkInput);

  if (!project.image) {
    setControlError(imageInput, "Project thumbnail is required. Upload a JPG, PNG, WebP, or GIF.");
  }

  if (project.mediaType === "Video") {
    if (!project.link) {
      setControlError(linkInput, "Video projects need a public project/video link.");
    } else if (!safeUrl(project.link)) {
      setControlError(linkInput, "Enter a full public URL starting with https://.");
    }
  } else if (project.link && !safeUrl(project.link)) {
    setControlError(linkInput, "Enter a full URL starting with https://.");
  }

  const mediaGroupsValid = validateMediaGroupsForSave();
  const formValid = validateNativeForm(form, "Please fix the highlighted project fields.");
  return mediaGroupsValid && formValid;
}

async function handleProjectSave(event) {
  event.preventDefault();
  if (state.loadingCount) {
    showToast("Please wait for the current asset to finish preparing.");
    return;
  }
  updateProjectPlacementFields();
  const nextProject = formProject();
  const nextPlacement = nextProject.placement;
  const existingProject = [
    ...state.projects,
    ...state.featuredProducts,
    ...state.portfolioProjects
  ].find((project) => project.id === nextProject.id);
  if (existingProject && !nextProject.image && !state.projectImageRemoved) {
    nextProject.image = existingProject.image;
  }

  if (!validateProjectForSave(nextProject)) return;

  if (placementUsesWork(nextPlacement) && !nextProject.experienceId) {
    const experienceSelect = document.getElementById("experience");
    experienceSelect?.reportValidity?.();
    showToast("Choose a work experience before saving.");
    return;
  }

  if (placementUsesFeatured(nextPlacement)) {
    const maxRank = featuredRankOptionLimit(nextProject.id);
    const selectedRank = Number(normalizeFeaturedRank(nextProject.featuredRank));
    if (Number.isFinite(selectedRank) && selectedRank > maxRank) {
      showToast(`Choose a rank between 1 and ${maxRank}, or choose no rank / auto order.`);
      renderFeaturedRankOptions("", nextProject.id);
      return;
    }

    const conflict = featuredRankConflict(nextProject);
    if (conflict) {
      showToast(`Rank ${nextProject.featuredRank} is already used by ${stripSavedBreakHints(conflict.title)}. Choose no rank or another available rank.`);
      renderFeaturedRankOptions("", nextProject.id);
      return;
    }
  }

  if (!(await confirmAction("Save this project card?", "Save Project"))) return;

  let nextProjects = state.projects.filter((project) => project.id !== nextProject.id);
  const nextPortfolioProjects = state.portfolioProjects.filter((project) => project.id !== nextProject.id);
  let nextFeaturedProducts = state.featuredProducts.filter((project) => project.id !== nextProject.id);

  if (placementUsesWork(nextPlacement)) {
    nextProjects = [nextProject, ...nextProjects];
  }

  if (placementUsesFeatured(nextPlacement)) {
    nextFeaturedProducts = [nextProject, ...nextFeaturedProducts];
    nextFeaturedProducts = applyFeaturedHomeSlotChoice(nextFeaturedProducts, nextProject);
    nextFeaturedProducts = sortFeaturedProjects(nextFeaturedProducts);
  }

  try {
    saveDraftPortfolio({
      experiences,
      projects: nextProjects,
      portfolioProjects: nextPortfolioProjects,
      featuredProducts: nextFeaturedProducts,
      siteContent: state.siteContent
    });
  } catch {
    alert("This draft is too large for browser storage. Images are compressed before saving and moved into GitHub assets after publishing, but videos should use public Drive, YouTube, Vimeo, or direct links.");
    return;
  }

  clearForm();
  renderAdminList();
  renderAdminExperienceList();
  renderFeaturedRankOptions();
  renderAdminMode();
  showToast("Project saved as draft.");
}

function clearForm() {
  document.getElementById("project-form").reset();
  document.getElementById("project-id").value = "";
  document.getElementById("project-collection").value = "";
  document.getElementById("projectPlacement").value = "featured";
  document.getElementById("featuredSlot").value = "";
  renderFeaturedRankOptions("", "");
  renderCategoryOptions(DEFAULT_PROJECT_CATEGORIES[0], [DEFAULT_PROJECT_CATEGORIES[0]]);
  document.getElementById("accent").value = "#0a6f6b";
  document.getElementById("imageFit").value = "cover";
  document.getElementById("imagePosition").value = "center center";
  document.getElementById("imageZoom").value = "100";
  document.getElementById("featuredImageFit").value = "cover";
  document.getElementById("featuredImagePosition").value = "center center";
  document.getElementById("featuredImageZoom").value = "100";
  document.getElementById("detailImageFit").value = "cover";
  document.getElementById("detailImagePosition").value = "center center";
  document.getElementById("detailImageZoom").value = "100";
  document.getElementById("image-file-name").textContent = "Choose an image";
  state.previewImage = "";
  state.projectImageRemoved = false;
  clearMediaFields();
  clearValidationUi(document.getElementById("project-form"));
  renderPreview({ resetScroll: true });
}

function renderAdminList() {
  const list = document.getElementById("admin-project-list");
  const featuredRows = state.featuredProducts.length
    ? state.featuredProducts.map((project) => adminRow(project, "featured")).join("")
    : `<div class="empty-state"><strong>No featured projects yet.</strong></div>`;
  const workRows = state.projects.length
    ? state.projects.map((project) => adminRow(project, "work")).join("")
    : `<div class="empty-state"><strong>No work experience projects yet.</strong></div>`;
  const featuredDirty = projectCollectionDirty("featured");
  const workDirty = projectCollectionDirty("work") || !deepEqual(experiences, publishedExperiences);

  list.innerHTML = `
    <section class="admin-project-group ${featuredDirty ? "has-unpublished" : ""}">
      <h3>Featured Projects ${featuredDirty ? renderDirtyBadge() : ""}</h3>
      <div class="admin-project-list-inner">${featuredRows}</div>
    </section>
    <section class="admin-project-group ${workDirty ? "has-unpublished" : ""}">
      <h3>Work Experience Projects ${workDirty ? renderDirtyBadge() : ""}</h3>
      <div class="admin-project-list-inner">${workRows}</div>
    </section>
  `;
}

async function handleAdminListAction(event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const row = button.closest("[data-id]");
  const collection = row.dataset.collection || "work";
  const source = collection === "featured"
    ? state.featuredProducts
    : collection === "portfolio"
      ? state.portfolioProjects
      : state.projects;
  const project = source.find((item) => item.id === row.dataset.id);
  if (!project) return;
  const pairedWorkProject = state.projects.find((item) => item.id === project.id);
  const pairedFeaturedProject = state.featuredProducts.find((item) => item.id === project.id);
  const projectForForm = {
    ...(pairedFeaturedProject || {}),
    ...(pairedWorkProject || {}),
    ...project,
    experienceId: pairedWorkProject?.experienceId || project.experienceId || "",
    homeSlot: normalizeFeaturedHomeSlot(pairedFeaturedProject?.homeSlot || project.homeSlot),
    featuredRank: normalizeFeaturedRank(pairedFeaturedProject?.featuredRank || project.featuredRank)
  };

  if (button.dataset.action === "delete") {
    if (!(await confirmAction("Delete this draft project?", "Delete"))) return;
    if (collection === "featured") {
      saveFeaturedProducts(state.featuredProducts.filter((item) => item.id !== project.id));
    } else if (collection === "portfolio") {
      savePortfolioProjects(state.portfolioProjects.filter((item) => item.id !== project.id));
    } else {
      saveProjects(state.projects.filter((item) => item.id !== project.id));
    }
    renderAdminList();
    renderAdminExperienceList();
    renderFeaturedRankOptions(document.getElementById("featuredRank")?.value || "", document.getElementById("project-id")?.value || "");
    renderAdminMode();
    showToast("Project removed from drafts.");
    return;
  }

  document.getElementById("project-id").value = projectForForm.id;
  document.getElementById("project-collection").value = collection;
  document.getElementById("projectPlacement").value = pairedWorkProject && pairedFeaturedProject
    ? "both"
    : collection === "portfolio" ? "featured" : collection;
  document.getElementById("experience").value = projectForForm.experienceId || "";
  document.getElementById("featuredSlot").value = normalizeFeaturedHomeSlot(projectForForm.homeSlot);
  renderFeaturedRankOptions(projectForForm.featuredRank, projectForForm.id);
  document.getElementById("title").value = projectForForm.title;
  const selectedCategories = projectCategoriesFor(projectForForm);
  renderCategoryOptions(selectedCategories[0], selectedCategories);
  document.getElementById("mediaType").value = normalizeMediaType(projectForForm.mediaType);
  document.getElementById("role").value = projectForForm.role;
  document.getElementById("year").value = projectForForm.year;
  document.getElementById("tools").value = projectForForm.tools;
  document.getElementById("summary").value = projectForForm.summary;
  document.getElementById("whatPrernaDid").value = projectForForm.whatPrernaDid || "";
  document.getElementById("impact").value = projectForForm.impact;
  document.getElementById("link").value = projectForForm.link;
  document.getElementById("accent").value = projectForForm.accent || categoryColor(projectPrimaryCategory(projectForForm));
  document.getElementById("imageFit").value = normalizeImageFit(projectForForm.imageFit);
  document.getElementById("imagePosition").value = normalizeImagePosition(projectForForm.imagePosition);
  document.getElementById("imageZoom").value = normalizeImageZoom(projectForForm.imageZoom);
  document.getElementById("featuredImageFit").value = imageSettings(projectForForm, "featured").fit;
  document.getElementById("featuredImagePosition").value = imageSettings(projectForForm, "featured").position;
  document.getElementById("featuredImageZoom").value = imageSettings(projectForForm, "featured").zoom;
  document.getElementById("detailImageFit").value = imageSettings(projectForForm, "detail").fit;
  document.getElementById("detailImagePosition").value = imageSettings(projectForForm, "detail").position;
  document.getElementById("detailImageZoom").value = imageSettings(projectForForm, "detail").zoom;
  document.getElementById("image-file-name").textContent = projectForForm.image ? "Existing image selected" : "Choose an image";
  state.previewImage = projectForForm.image || "";
  state.projectImageRemoved = false;
  fillMediaFields(projectForForm.mediaGroups || projectForForm.mediaItems || [], projectForForm.mediaGroupMeta || {});
  renderPreview({ resetScroll: true });
  document.getElementById("title").focus();
}

function previewDraft() {
  const button = document.getElementById("preview-site");
  setButtonLoading(button, true, "Opening preview");
  showLoadingBanner("Opening draft preview...");
  saveDraftPortfolio(portfolioSnapshot());
  sessionStorage.setItem(PREVIEW_SESSION_KEY, "true");
  showToast("Draft preview is on.");
  window.location.hash = "#/";
  window.setTimeout(() => {
    setButtonLoading(button, false);
    hideLoadingBanner();
  }, 500);
}

async function readPublishResult(response) {
  const text = await response.text().catch(() => "");
  if (!text) return {};

  try {
    return JSON.parse(text);
  } catch {
    return { error: text.trim() };
  }
}

function isResponseLimitError(error) {
  return /quota|response.*(large|limit|exceed)|function_response_payload/i.test(error?.message || "");
}

async function finishPublishDraft(scope, portfolio, result = {}, message = "") {
  const published = await publishedPortfolioFromResponse(result, portfolio);
  syncDraftAfterPublish(scope, published);
  renderExperienceSelect();
  renderAdminExperienceList();
  renderAdminList();
  renderContentEditor();
  renderResumeAdmin();
  renderAdminMode();

  if (message) {
    showToast(message);
    return;
  }

  const changedAssets = Number(result.assetCount || 0) + Number(result.updatedAssetCount || 0);
  const assetText = changedAssets
    ? ` ${changedAssets} asset(s) moved to GitHub.`
    : " Vercel should deploy next.";
  showToast(`Published ${publishScopeLabel(scope)}.${assetText}`);
}

async function publishDraft() {
  const scope = await choosePublishScope();
  if (!scope) return;

  const button = document.getElementById("publish-site");
  const portfolio = portfolioForPublishScope(scope);
  setButtonLoading(button, true, "Publishing");
  showLoadingBanner(`Publishing ${publishScopeLabel(scope)}...`);

  try {
    const response = await fetch("/api/publish", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: state.adminPassword || sessionStorage.getItem(ADMIN_PASSWORD_KEY) || "",
        portfolio
      })
    });

    const result = await readPublishResult(response);
    if (!response.ok) {
      throw new Error(result.error || "Publish endpoint is not configured yet.");
    }

    await finishPublishDraft(scope, portfolio, result);
  } catch (error) {
    if (isResponseLimitError(error)) {
      try {
        await finishPublishDraft(
          scope,
          portfolio,
          {},
          "Publish likely reached GitHub. Draft glow cleared locally while Vercel finishes deploying."
        );
      } catch (syncError) {
        showToast(syncError.message || "Published, but local draft sync failed.");
      }
      return;
    }
    showToast(error.message || "Publish failed.");
  } finally {
    setButtonLoading(button, false);
    hideLoadingBanner();
  }
}

async function resetProjects() {
  if (!(await confirmAction("Reset drafts back to the currently published site?", "Reset"))) return;
  saveDraftPortfolio({
    experiences: publishedExperiences,
    projects: publishedProjects,
    portfolioProjects: publishedPortfolioProjects,
    featuredProducts: publishedFeaturedProducts,
    siteContent: publishedSiteContent,
    resume: publishedResume
  });
  renderExperienceSelect();
  renderAdminExperienceList();
  clearForm();
  renderAdminList();
  renderContentEditor();
  renderResumeAdmin();
  renderAdminMode();
  showToast("Drafts reset to published version.");
}

function exportProjects() {
  const blob = new Blob([JSON.stringify(portfolioSnapshot(), null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "prerna-site-draft.json";
  anchor.click();
  URL.revokeObjectURL(url);
}

document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#/"]');
  if (!link) return;
  const homeSection = link.dataset.homeSection;
  if (homeSection && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
    event.preventDefault();
    goToHomeSection(homeSection);
    return;
  }
  const nextHash = link.getAttribute("href");
  if (nextHash !== window.location.hash) return;
  event.preventDefault();
  renderRoute();
});

setupThemeToggle();
window.addEventListener("hashchange", renderRoute);
renderRoute();
