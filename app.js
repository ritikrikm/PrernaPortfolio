const DATA_URL = "data/portfolio.json";
const DRAFT_STORE_KEY = "prerna-portfolio-draft-v1";
const ADMIN_SESSION_KEY = "prerna-portfolio-admin-unlocked";
const ADMIN_PASSWORD_KEY = "prerna-portfolio-admin-password";
const PREVIEW_SESSION_KEY = "prerna-portfolio-preview-drafts";
const LOCAL_ADMIN_PASSWORD = "prerna-admin";
const MEDIA_ITEMS_PER_GROUP = 4;
const PORTFOLIO_FILTERS = ["All", "Branding", "Social Media", "Video Editing", "Motion Graphics", "Illustration"];
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

const defaultExperiences = [
  {
    id: "msl",
    company: "MSL Global",
    title: "Executive - Design",
    dates: "Dec 2023 - Nov 2024",
    location: "Delhi, India",
    headline: "Large-scale campaign visuals for nonprofit and foundation clients.",
    summary: "Designed high-quality creative assets, motion-ready campaign visuals, brand systems, and social content while collaborating with cross-functional teams.",
    impact: "50M+ campaign views, 2x donor conversion lift, 5+ creative awards",
    accent: "#087f6f"
  },
  {
    id: "cultre-boat",
    company: "Cultre Boat",
    title: "Communications Designer",
    dates: "Mar 2023 - Nov 2023",
    location: "Delhi, India",
    headline: "Social campaigns, brand content, graphics, and video pieces for multiple brands.",
    summary: "Created content grids, designed campaigns, wrote copy, and produced visuals for brands across lifestyle, retail, coffee, and fashion.",
    impact: "150+ graphics and videos, 6+ brands, 15% engagement lift",
    accent: "#ff6542"
  },
  {
    id: "freelance",
    company: "The Creative Bud",
    title: "Founder / Creative Entrepreneur",
    dates: "Jun 2018 - Aug 2024",
    location: "Delhi, India",
    headline: "Illustration-led creative business with custom products and repeat clients.",
    summary: "Owned the full creative process from illustration, layout, product design, and packaging to social marketing and client communication.",
    impact: "500+ repeat clients through Instagram, referrals, and direct orders",
    accent: "#a348ff"
  }
];

let publishedExperiences = defaultExperiences.map((experience) => ({ ...experience }));
let experiences = publishedExperiences.map((experience) => ({ ...experience }));

const typewriterWords = [
  "a Graphic Designer",
  "a Motion Designer",
  "a Brand Illustrator",
  "a Visual Storyteller",
  "a Creative Maker"
];

const sampleProjects = [
  {
    id: crypto.randomUUID(),
    experienceId: "msl",
    title: "Gates Foundation Campaign Visuals",
    category: "Campaign Design",
    mediaType: "Image",
    role: "Visual Designer",
    year: "2024",
    tools: "Photoshop, Illustrator, Figma",
    summary: "Designed, retouched, and composited campaign visuals for cross-channel nonprofit storytelling while keeping the creative aligned to brand and campaign goals.",
    impact: "Part of campaign work that contributed to 50M+ views and 2x donor conversion lift",
    link: "",
    accent: "#087f6f",
    image: ""
  },
  {
    id: crypto.randomUUID(),
    experienceId: "msl",
    title: "Anil Agarwal Foundation Motion Stories",
    category: "Motion Graphics",
    mediaType: "Video",
    role: "Motion + Visual Designer",
    year: "2024",
    tools: "After Effects, Premiere Pro, Illustrator, Photoshop",
    summary: "Created animated visual stories and social-first video assets using illustration, motion design, editing, and brand-led storytelling.",
    impact: "Supported award-winning digital work, including Fulcrum and STAKES recognition",
    link: "",
    accent: "#3557ff",
    image: ""
  },
  {
    id: crypto.randomUUID(),
    experienceId: "msl",
    title: "Brand Guidelines + AI Design Experiments",
    category: "Branding",
    mediaType: "Case Study",
    role: "Graphic Designer",
    year: "2024",
    tools: "Figma, Photoshop, Adobe Firefly, Runway",
    summary: "Explored multiple visual directions, documented brand rules, tested AI-assisted creative workflows, and improved design consistency across campaign assets.",
    impact: "Improved brand consistency by 25%",
    link: "",
    accent: "#ffc94a",
    image: ""
  },
  {
    id: crypto.randomUUID(),
    experienceId: "cultre-boat",
    title: "Dayal Opticals Social Campaign",
    category: "Graphic Design",
    mediaType: "Image",
    role: "Communications Designer",
    year: "2023",
    tools: "Photoshop, Illustrator, Premiere Pro",
    summary: "Created campaign concepts, social posts, and promotional layouts that matched the brand's personality while staying consistent across the monthly content grid.",
    impact: "Part of 25-day advance social planning workflow",
    link: "",
    accent: "#ff6542",
    image: ""
  },
  {
    id: crypto.randomUUID(),
    experienceId: "cultre-boat",
    title: "Devan's Coffee Content Grid",
    category: "Campaign Design",
    mediaType: "Mixed Media",
    role: "Graphic + Content Designer",
    year: "2023",
    tools: "Photoshop, Illustrator, Premiere Pro",
    summary: "Designed coffee-led social content, copy-led posts, layouts, and video pieces with a warm visual language for digital engagement.",
    impact: "Contributed to 150+ graphics and videos across brand accounts",
    link: "",
    accent: "#7a4b2a",
    image: ""
  },
  {
    id: crypto.randomUUID(),
    experienceId: "cultre-boat",
    title: "LizPaul Campaign Assets",
    category: "Video Editing",
    mediaType: "Video",
    role: "Video + Graphic Designer",
    year: "2023",
    tools: "Premiere Pro, After Effects, Photoshop",
    summary: "Built visual assets and edited short-form campaign content while balancing brand accuracy, social pacing, and delivery timelines.",
    impact: "Helped improve engagement by 15%",
    link: "",
    accent: "#d946ef",
    image: ""
  },
  {
    id: crypto.randomUUID(),
    experienceId: "freelance",
    title: "The Creative Bud Brand Identity",
    category: "Branding",
    mediaType: "Image",
    role: "Founder + Illustrator",
    year: "2018-2024",
    tools: "Procreate, Illustrator, Photoshop",
    summary: "Created the visual identity, illustration style, product templates, packaging, and social presence for a handmade personalized gifts brand.",
    impact: "Built a loyal base of 500+ repeat clients",
    link: "",
    accent: "#a348ff",
    image: ""
  },
  {
    id: crypto.randomUUID(),
    experienceId: "freelance",
    title: "Personalized Illustration Products",
    category: "Illustration",
    mediaType: "Image",
    role: "Illustrator",
    year: "2018-2024",
    tools: "Procreate, Photoshop, Instagram",
    summary: "Designed custom portraits, cards, stationery, calendars, notebooks, and printed products from concept to final customer delivery.",
    impact: "Managed client briefs, revisions, production, packaging, and fulfillment",
    link: "",
    accent: "#ff4fa3",
    image: ""
  },
  {
    id: crypto.randomUUID(),
    experienceId: "freelance",
    title: "Product Photography + Social Content",
    category: "Graphic Design",
    mediaType: "Mixed Media",
    role: "Creative Business Owner",
    year: "2018-2024",
    tools: "Photography, Photoshop, Illustrator, Instagram",
    summary: "Produced product photos, social posts, promotional graphics, and launch visuals to market handmade products online.",
    impact: "Grew the brand through social media, referrals, and direct client communication",
    link: "",
    accent: "#f59e0b",
    image: ""
  }
];

const samplePortfolioProjects = [
  {
    id: "portfolio-brand-systems",
    experienceId: "",
    title: "Brand Identity Systems",
    category: "Branding",
    mediaType: "Case Study",
    role: "Graphic Designer",
    year: "2024",
    tools: "Illustrator, Photoshop, Figma",
    summary: "Selected identity, typography, layout, and visual system explorations created for brand-led campaigns and digital storytelling.",
    impact: "Shows brand thinking, visual consistency, and presentation-ready design craft",
    link: "",
    accent: "#a348ff",
    image: ""
  },
  {
    id: "portfolio-social-campaigns",
    experienceId: "",
    title: "Social Media Campaign Visuals",
    category: "Social Media",
    mediaType: "Image",
    role: "Social + Graphic Designer",
    year: "2023-2024",
    tools: "Photoshop, Illustrator, Premiere Pro",
    summary: "A portfolio set for social-first posts, campaign layouts, launch graphics, and platform-ready visual storytelling.",
    impact: "Highlights campaign thinking, content rhythm, and production polish",
    link: "",
    accent: "#ff6542",
    image: ""
  },
  {
    id: "portfolio-motion-edits",
    experienceId: "",
    title: "Motion Graphics and Video Edits",
    category: "Motion Graphics",
    mediaType: "Video",
    role: "Motion Designer",
    year: "2024",
    tools: "After Effects, Premiere Pro, Photoshop",
    summary: "Motion-led portfolio work covering animated brand elements, short-form edits, social videos, and visual transitions.",
    impact: "Shows pacing, motion taste, editing structure, and multimedia fluency",
    link: "",
    accent: "#3557ff",
    image: ""
  },
  {
    id: "portfolio-illustration-products",
    experienceId: "",
    title: "Illustration and Custom Product Art",
    category: "Illustration",
    mediaType: "Image",
    role: "Illustrator",
    year: "2018-2024",
    tools: "Procreate, Illustrator, Photoshop",
    summary: "Illustration-led visual work for custom products, handmade gifts, packaging, cards, calendars, and social selling.",
    impact: "Shows personal style, detail, product thinking, and client-led creative execution",
    link: "",
    accent: "#ff4fa3",
    image: ""
  }
];

let publishedProjects = sampleProjects.map((project) => ({ ...project }));
let publishedPortfolioProjects = samplePortfolioProjects.map((project) => ({ ...project }));

const state = {
  projects: [],
  portfolioProjects: [],
  filter: "All",
  portfolioFilter: "All",
  query: "",
  typewriterTimer: null,
  previewImage: "",
  projectImageRemoved: false,
  detailMediaImages: {},
  dataLoaded: false,
  adminPassword: sessionStorage.getItem(ADMIN_PASSWORD_KEY) || "",
  adminData: null
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

function cloneItems(items = []) {
  return JSON.parse(JSON.stringify(items));
}

function portfolioSnapshot(source = {}) {
  return {
    experiences: cloneItems(source.experiences || experiences),
    projects: cloneItems(source.projects || state.projects),
    portfolioProjects: cloneItems(source.portfolioProjects || state.portfolioProjects)
  };
}

function normalizePortfolioData(data) {
  return {
    experiences: Array.isArray(data?.experiences) && data.experiences.length
      ? cloneItems(data.experiences)
      : cloneItems(defaultExperiences),
    projects: Array.isArray(data?.projects)
      ? cloneItems(data.projects)
      : cloneItems(sampleProjects),
    portfolioProjects: Array.isArray(data?.portfolioProjects)
      ? cloneItems(data.portfolioProjects)
      : cloneItems(samplePortfolioProjects)
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
    }
  } catch {
    publishedExperiences = cloneItems(defaultExperiences);
    publishedProjects = cloneItems(sampleProjects);
    publishedPortfolioProjects = cloneItems(samplePortfolioProjects);
  }

  state.dataLoaded = true;
}

function usePublishedPortfolio() {
  experiences = cloneItems(publishedExperiences);
  state.projects = cloneItems(publishedProjects);
  state.portfolioProjects = cloneItems(publishedPortfolioProjects);
}

function loadDraftPortfolio() {
  const stored = localStorage.getItem(DRAFT_STORE_KEY);
  if (!stored) {
    return portfolioSnapshot({
      experiences: publishedExperiences,
      projects: publishedProjects,
      portfolioProjects: publishedPortfolioProjects
    });
  }

  try {
    return normalizePortfolioData(JSON.parse(stored));
  } catch {
    return portfolioSnapshot({
      experiences: publishedExperiences,
      projects: publishedProjects,
      portfolioProjects: publishedPortfolioProjects
    });
  }
}

function saveDraftPortfolio(data) {
  const nextData = normalizePortfolioData(data);
  localStorage.setItem(DRAFT_STORE_KEY, JSON.stringify(nextData));
  state.adminData = nextData;
  experiences = cloneItems(nextData.experiences);
  state.projects = cloneItems(nextData.projects);
  state.portfolioProjects = cloneItems(nextData.portfolioProjects);
}

function loadProjects() {
  return cloneItems(publishedProjects);
}

function saveProjects(projects) {
  saveDraftPortfolio({ experiences, projects, portfolioProjects: state.portfolioProjects });
}

function savePortfolioProjects(portfolioProjects) {
  saveDraftPortfolio({ experiences, projects: state.projects, portfolioProjects });
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
  if ((name === "/work-project" || name === "/portfolio-project") && id) return "project-template";
  const templates = {
    "/": "home-template",
    "/work": "work-template",
    "/portfolio": "portfolio-template",
    "/admin": "admin-template",
    "/studio": "admin-template",
    "/about": "about-template",
    "/contact": "contact-template"
  };
  return templates[name] || "home-template";
}

function setActiveNav() {
  const { name } = routeParts();
  const activeRoute = name === "/experience" || name === "/work-project"
    ? "/work"
    : name === "/portfolio-project"
      ? "/portfolio"
      : name;
  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.classList.toggle("active", link.dataset.route === activeRoute);
  });
}

function experienceById(id) {
  return experiences.find((experience) => experience.id === id) || experiences[0];
}

function projectById(id, collection = "work") {
  const source = collection === "portfolio" ? state.portfolioProjects : state.projects;
  return source.find((project) => project.id === id);
}

function projectDetailUrl(project, collection = "portfolio") {
  const route = collection === "work" ? "work-project" : "portfolio-project";
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
    "Emerging Media": "#155e75"
  };
  return colors[category] || "#087f6f";
}

function projectGradient(project) {
  const accent = project.accent || categoryColor(project.category);
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

function imageStyle(project) {
  const fit = normalizeImageFit(project.imageFit);
  const position = normalizeImagePosition(project.imagePosition);
  const zoom = normalizeImageZoom(project.imageZoom);
  return `object-fit: ${fit}; object-position: ${position}; transform: scale(${zoom / 100});`;
}

function mediaIcon(mediaType = "") {
  const icons = {
    Image: "□",
    Video: "▶",
    "Mixed Media": "✦",
    "Case Study": "◎"
  };
  return icons[mediaType] || "✦";
}

function isVideoProject(project) {
  return (project.mediaType || "").toLowerCase() === "video";
}

function toolAbbreviation(tool) {
  const known = {
    Photoshop: "Ps",
    Illustrator: "Ai",
    InDesign: "Id",
    "After Effects": "Ae",
    "Premiere Pro": "Pr",
    Figma: "Fi",
    Procreate: "Pc",
    "Adobe Firefly": "Af",
    Runway: "Ru",
    Photography: "Ph",
    Instagram: "Ig"
  };
  return known[tool] || tool.slice(0, 2);
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

function toolIcons(tools = "") {
  return toolList(tools)
    .slice(0, 6)
    .map((tool) => `
      <span class="tool-icon tool-${escapeHtml(toolClass(tool))}" title="${escapeHtml(tool)}" aria-label="${escapeHtml(tool)}">
        ${escapeHtml(toolAbbreviation(tool))}
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
        <span class="software-logo">${escapeHtml(toolAbbreviation(tool))}</span>
        <strong>${escapeHtml(tool)}</strong>
      </article>
    `)
    .join("");
}

function coverArt(project, size = "large") {
  const titleWords = project.title.split(" ").slice(0, 5).join(" ");
  const accent = project.accent || categoryColor(project.category);

  return `
    <div class="cover-art ${size}" style="--cover-accent: ${accent};">
      <span class="cover-media" aria-hidden="true">${mediaIcon(project.mediaType)}</span>
      <span class="cover-dot dot-one"></span>
      <span class="cover-dot dot-two"></span>
      <span class="cover-line line-one"></span>
      <span class="cover-line line-two"></span>
      <span class="cover-tag">${escapeHtml(project.mediaType || project.category)}</span>
      <strong>${escapeHtml(titleWords)}</strong>
      <em>${escapeHtml(project.year || "Portfolio")}</em>
    </div>
  `;
}

function projectCard(project, collection = "portfolio") {
  const link = safeUrl(project.link);
  const isVideo = isVideoProject(project);
  const image = project.image
    ? `<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)} project image" style="${imageStyle(project)}">`
    : coverArt(project, "large");

  return `
    <article class="project-card ${isVideo ? "is-video" : ""}" data-project-id="${escapeHtml(project.id)}">
      <div class="project-thumb" style="background: ${projectGradient(project)}">${image}</div>
      <div class="project-body">
        <div class="project-meta">
          <span class="pill">${escapeHtml(project.category)}</span>
          <span class="pill">${escapeHtml(project.mediaType || "Work")}</span>
          ${project.year ? `<span class="pill">${escapeHtml(project.year)}</span>` : ""}
        </div>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.summary)}</p>
        <div class="tool-row">${toolIcons(project.tools)}</div>
        <div class="impact">${escapeHtml(project.impact || project.role || "Portfolio project")}</div>
        <div class="project-actions">
          <a class="open-work" href="${projectDetailUrl(project, collection)}" data-open-project="${escapeHtml(project.id)}">Open</a>
          ${link && !isVideo ? `<a class="project-link" href="${link}" target="_blank" rel="noreferrer">Visit link ↗</a>` : ""}
        </div>
      </div>
    </article>
  `;
}

function experienceCard(experience) {
  const count = projectsForExperience(experience.id).length;
  return `
    <a class="experience-card" href="#/experience/${experience.id}" style="--experience-accent: ${experience.accent}">
      <span class="experience-number">${String(experiences.indexOf(experience) + 1).padStart(2, "0")}</span>
      <div class="experience-cover">
        <span>${escapeHtml(experience.company)}</span>
      </div>
      <div class="experience-body">
        <p class="eyebrow">${escapeHtml(experience.dates)}</p>
        <h3>${escapeHtml(experience.title)}</h3>
        <strong>${escapeHtml(experience.company)}</strong>
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
  const image = project.image ? `<img src="${escapeHtml(project.image)}" alt="" style="${imageStyle(project)}">` : "";
  const source = collection === "portfolio" ? "Portfolio page" : experience ? experience.company : "Work experience";

  return `
    <div class="admin-row" data-id="${project.id}" data-collection="${collection}">
      <div class="admin-row-thumb" style="background: ${projectGradient(project)}">${image}</div>
      <div>
        <strong>${escapeHtml(project.title)}</strong>
        <small>${escapeHtml(source)} · ${escapeHtml(project.category)} · ${escapeHtml(project.mediaType || "Work")}</small>
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
  state.filter = "All";
  state.portfolioFilter = "All";
  state.query = "";
  await loadPublishedPortfolio();
  const { name } = routeParts();
  if (name !== "/admin" && name !== "/studio") {
    if (sessionStorage.getItem(PREVIEW_SESSION_KEY) === "true") {
      const draft = loadDraftPortfolio();
      experiences = cloneItems(draft.experiences);
      state.projects = cloneItems(draft.projects);
      state.portfolioProjects = cloneItems(draft.portfolioProjects);
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
  if (name === "/portfolio") setupPortfolio();
  if (name === "/experience") setupExperienceDetail();
  if (name === "/work-project") setupProjectDetail("work");
  if (name === "/portfolio-project") setupProjectDetail("portfolio");
  if (name === "/admin" || name === "/studio") setupAdmin();
  app.focus({ preventScroll: true });
}

function setupHome() {
  runTypewriter();
  document.getElementById("home-experience-grid").innerHTML = experiences.map(experienceCard).join("");
}

function runTypewriter() {
  const target = document.getElementById("typewriter");
  if (!target) return;

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  state.typewriterTimer = window.setInterval(() => {
    const word = typewriterWords[wordIndex];
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
    wordIndex = (wordIndex + 1) % typewriterWords.length;
  }, 82);
}

function setupWork() {
  document.getElementById("experience-grid").innerHTML = experiences.map(experienceCard).join("");
}

function portfolioMatchesFilter(project) {
  if (state.portfolioFilter === "All") return true;
  if (state.portfolioFilter === "Social Media") {
    return ["Social Media", "Campaign Design", "Graphic Design"].includes(project.category);
  }
  return project.category === state.portfolioFilter;
}

function renderPortfolioFilters() {
  const filterGroup = document.getElementById("portfolio-filter-group");
  filterGroup.innerHTML = PORTFOLIO_FILTERS
    .map((category) => `
      <button class="filter-chip ${category === state.portfolioFilter ? "active" : ""}" type="button" data-portfolio-category="${escapeHtml(category)}">
        ${escapeHtml(category)}
      </button>
    `)
    .join("");

  filterGroup.addEventListener("click", (event) => {
    const button = event.target.closest("[data-portfolio-category]");
    if (!button) return;
    state.portfolioFilter = button.dataset.portfolioCategory;
    renderPortfolioFilters();
    renderPortfolioProjects();
  });
}

function filteredPortfolioProjects() {
  return state.portfolioProjects.filter((project) => {
    const categoryMatch = portfolioMatchesFilter(project);
    const text = [
      project.title,
      project.category,
      project.mediaType,
      project.role,
      project.tools,
      project.summary,
      project.impact
    ].join(" ").toLowerCase();
    return categoryMatch && text.includes(state.query);
  });
}

function renderPortfolioProjects() {
  const grid = document.getElementById("portfolio-grid");
  const filtered = filteredPortfolioProjects();
  grid.innerHTML = filtered.length
    ? filtered.map((project) => projectCard(project, "portfolio")).join("")
    : `<div class="empty-state"><strong>No portfolio projects match this filter yet.</strong></div>`;
}

function setupPortfolio() {
  renderPortfolioFilters();
  renderPortfolioProjects();

  document.getElementById("portfolio-search").addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    renderPortfolioProjects();
  });

  document.getElementById("portfolio-grid").addEventListener("click", handleProjectGridClick);
}

function setupExperienceDetail() {
  const { id } = routeParts();
  const experience = experienceById(id);
  const projects = projectsForExperience(experience.id);
  const detail = document.getElementById("experience-detail");

  detail.innerHTML = `
    <section class="experience-hero" style="--experience-accent: ${experience.accent}">
      <div>
        <p class="eyebrow">${escapeHtml(experience.dates)} · ${escapeHtml(experience.location)}</p>
        <h1>${escapeHtml(experience.company)}</h1>
        <h2>${escapeHtml(experience.title)}</h2>
        <p>${escapeHtml(experience.summary)}</p>
      </div>
      <aside>
        <strong>${escapeHtml(experience.impact)}</strong>
        <span>${projects.length} selected project${projects.length === 1 ? "" : "s"}</span>
      </aside>
    </section>
  `;

  renderFilters(projects);
  renderProjects(projects);

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

function projectMediaGroups(project) {
  const savedGroups = project.mediaGroups || {};
  const hasSavedGroups = MEDIA_GROUPS.some((group) => Array.isArray(savedGroups[group.id]));
  const legacyItems = Array.isArray(project.mediaItems) ? project.mediaItems.filter(hasMediaContent) : [];

  return MEDIA_GROUPS.map((group, index) => {
    const groupItems = Array.isArray(savedGroups[group.id]) ? savedGroups[group.id].filter(hasMediaContent) : [];
    const items = groupItems.length
      ? groupItems
      : index === 1 && legacyItems.length
        ? legacyItems
        : [];

    return {
      ...group,
      items
    };
  }).map((group, index) => {
    if (index === 1 && !hasSavedGroups && !group.items.length) {
      return { ...group, items: [fallbackMediaItem(project)] };
    }
    return group;
  });
}

function campaignMediaFrame(item, project) {
  const type = item.type || "Image";
  const imageSrc = safeMediaSrc(item.src || item.url || "");
  const videoUrl = safeVideoSrc(item.videoUrl || (type === "Video" ? item.url : ""));
  const visual = imageSrc
    ? `<img src="${escapeHtml(imageSrc)}" alt="${escapeHtml(item.title || project.title)}">`
    : coverArt(project, "large");

  if (type === "Video" && videoUrl) {
    return `
      <div class="campaign-media-frame is-video">
        ${visual}
        <span aria-hidden="true">▶</span>
      </div>
    `;
  }

  return `<div class="campaign-media-frame">${visual}</div>`;
}

function campaignMediaCard(item, index, groupId, project) {
  const copy = [item.title, item.description].filter(Boolean);
  return `
    <article class="campaign-media-card" role="button" tabindex="0" aria-label="Open ${escapeHtml(item.title || project.title)} preview" data-media-preview data-group-id="${escapeHtml(groupId)}" data-media-index="${index}">
      ${campaignMediaFrame(item, project)}
      ${copy.length ? `
        <div class="campaign-media-copy">
          ${item.title ? `<h3>${escapeHtml(item.title)}</h3>` : ""}
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
  const backHref = experience ? `#/experience/${experience.id}` : "#/portfolio";
  const backText = experience ? `Back to ${experience.company}` : "Back to Portfolio";
  const eyebrow = [
    experience?.company || "Portfolio",
    project.category,
    project.year
  ].filter(Boolean).join(" · ");
  const heroAccent = project.accent || experience?.accent || categoryColor(project.category);

  detail.innerHTML = `
    <a class="back-link" href="${backHref}">← ${escapeHtml(backText)}</a>
    <section class="experience-hero project-hero" style="--experience-accent: ${heroAccent}">
      <div>
        <p class="eyebrow">${escapeHtml(eyebrow)}</p>
        <h1>${escapeHtml(project.title)}</h1>
        <h2>${escapeHtml(project.role || "Campaign project")}</h2>
        <p>${escapeHtml(project.summary)}</p>
      </div>
      <aside>
        <strong>${escapeHtml(project.impact || "Selected portfolio campaign")}</strong>
        <span>${escapeHtml(project.mediaType || "Campaign")}</span>
      </aside>
    </section>

    <section class="campaign-info-grid">
      <article class="campaign-info-card">
        <p class="eyebrow">What Prerna Did</p>
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
  const categories = ["All", ...new Set(projects.map((project) => project.category))];
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
    const categoryMatch = state.filter === "All" || project.category === state.filter;
    const text = [
      project.title,
      project.category,
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
    return `<img src="${escapeHtml(imageSrc)}" alt="${escapeHtml(item.title || project.title)} full preview">`;
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
        <span>${escapeHtml(item.description || `${project.category} · ${project.year || "Portfolio"}`)}</span>
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
  select.innerHTML = `<option value="">Portfolio only</option>` + experiences
    .map((experience) => `<option value="${experience.id}">${escapeHtml(experience.company)} · ${escapeHtml(experience.title)}</option>`)
    .join("");
}

function formExperience() {
  const existingId = document.getElementById("experience-id").value;
  const company = document.getElementById("experienceCompany").value.trim();
  return {
    id: existingId || uniqueExperienceId(company),
    company,
    title: document.getElementById("experienceTitle").value.trim(),
    dates: document.getElementById("experienceDates").value.trim(),
    location: document.getElementById("experienceLocation").value.trim(),
    headline: document.getElementById("experienceHeadline").value.trim(),
    summary: document.getElementById("experienceSummary").value.trim(),
    impact: document.getElementById("experienceImpact").value.trim(),
    accent: document.getElementById("experienceAccent").value
  };
}

function clearExperienceForm() {
  document.getElementById("experience-form").reset();
  document.getElementById("experience-id").value = "";
  document.getElementById("experienceAccent").value = "#0a6f6b";
}

function mediaInputId(field, groupId, index) {
  return `${field}-${groupId}-${index}`;
}

function mediaField(field, groupId, index) {
  return document.getElementById(mediaInputId(field, groupId, index));
}

function mediaImageKey(groupId, index) {
  return `${groupId}-${index}`;
}

function mediaFieldset(group, index) {
  const assetNumber = index + 1;
  return `
    <article class="media-fieldset" data-media-group="${group.id}" data-media-index="${index}">
      <div class="media-fieldset-head">
        <strong>${escapeHtml(group.label)} ${assetNumber}</strong>
        <div class="media-fieldset-actions">
          <select id="${mediaInputId("mediaType", group.id, index)}">
            <option>Image</option>
            <option>Video</option>
          </select>
          <button class="mini-button danger" type="button" data-clear-media="${group.id}" data-clear-media-index="${index}">Clear asset</button>
        </div>
      </div>
      <label>
        Asset title
        <input id="${mediaInputId("mediaTitle", group.id, index)}" type="text" placeholder="${group.id === "initialSketch" ? "Rough layout sketch" : "Final carousel design"}">
      </label>
      <label>
        Image URL / thumbnail URL
        <input id="${mediaInputId("mediaUrl", group.id, index)}" type="text" placeholder="https:// or uploaded image">
      </label>
      <label>
        Video link
        <input id="${mediaInputId("mediaVideoUrl", group.id, index)}" type="url" placeholder="https://youtube.com/...">
      </label>
      <label class="upload-box">
        <span>Upload image / thumbnail</span>
        <input id="${mediaInputId("mediaFile", group.id, index)}" type="file" accept="image/*" data-detail-group="${group.id}" data-detail-index="${index}">
        <strong id="${mediaInputId("mediaFileName", group.id, index)}">Choose an image</strong>
        <button class="mini-button" type="button" data-clear-media-image="${group.id}" data-clear-media-image-index="${index}">Remove image</button>
      </label>
      <label class="wide">
        Asset text
        <textarea id="${mediaInputId("mediaDescription", group.id, index)}" rows="3" placeholder="Optional text below this photo/video card."></textarea>
      </label>
    </article>
  `;
}

function renderMediaBuilder() {
  const builder = document.getElementById("media-builder-fields");
  if (!builder) return;
  builder.innerHTML = MEDIA_GROUPS
    .map((group) => `
      <section class="media-group-builder">
        <div class="media-group-heading">
          <strong>${escapeHtml(group.label)}</strong>
          <span>${escapeHtml(group.helper)}</span>
        </div>
        ${Array.from({ length: MEDIA_ITEMS_PER_GROUP }, (_, index) => mediaFieldset(group, index)).join("")}
      </section>
    `)
    .join("");
}

function formMediaGroups() {
  return MEDIA_GROUPS.reduce((groups, group) => {
    groups[group.id] = Array.from({ length: MEDIA_ITEMS_PER_GROUP }, (_, index) => {
      const type = mediaField("mediaType", group.id, index).value;
      const title = mediaField("mediaTitle", group.id, index).value.trim();
      const url = mediaField("mediaUrl", group.id, index).value.trim();
      const videoUrl = mediaField("mediaVideoUrl", group.id, index).value.trim();
      const description = mediaField("mediaDescription", group.id, index).value.trim();
      const src = state.detailMediaImages[mediaImageKey(group.id, index)] || url;

      if (!title && !src && !videoUrl && !description) return null;

      return { type, title, src, videoUrl, description };
    }).filter(Boolean);
    return groups;
  }, {});
}

function clearMediaFields() {
  state.detailMediaImages = {};
  MEDIA_GROUPS.forEach((group) => {
    for (let index = 0; index < MEDIA_ITEMS_PER_GROUP; index += 1) {
      mediaField("mediaType", group.id, index).value = "Image";
      mediaField("mediaTitle", group.id, index).value = "";
      mediaField("mediaUrl", group.id, index).value = "";
      mediaField("mediaVideoUrl", group.id, index).value = "";
      mediaField("mediaDescription", group.id, index).value = "";
      mediaField("mediaFile", group.id, index).value = "";
      mediaField("mediaFileName", group.id, index).textContent = "Choose an image";
    }
  });
}

function clearDetailMediaImage(groupId, index) {
  delete state.detailMediaImages[mediaImageKey(groupId, index)];
  mediaField("mediaUrl", groupId, index).value = "";
  mediaField("mediaFile", groupId, index).value = "";
  mediaField("mediaFileName", groupId, index).textContent = "Choose an image";
  renderPreview();
}

function clearDetailMediaItem(groupId, index) {
  clearDetailMediaImage(groupId, index);
  mediaField("mediaType", groupId, index).value = "Image";
  mediaField("mediaTitle", groupId, index).value = "";
  mediaField("mediaVideoUrl", groupId, index).value = "";
  mediaField("mediaDescription", groupId, index).value = "";
  renderPreview();
}

function fillMediaFields(mediaGroups = {}) {
  clearMediaFields();
  const groups = Array.isArray(mediaGroups)
    ? { finalOutput: mediaGroups }
    : mediaGroups;

  MEDIA_GROUPS.forEach((group) => {
    const items = Array.isArray(groups[group.id]) ? groups[group.id] : [];
    items.slice(0, MEDIA_ITEMS_PER_GROUP).forEach((item, index) => {
      mediaField("mediaType", group.id, index).value = item.type || "Image";
      mediaField("mediaTitle", group.id, index).value = item.title || "";
      mediaField("mediaVideoUrl", group.id, index).value = item.videoUrl || "";
      mediaField("mediaDescription", group.id, index).value = item.description || "";

      if (item.src?.startsWith("data:image/")) {
        state.detailMediaImages[mediaImageKey(group.id, index)] = item.src;
        mediaField("mediaFileName", group.id, index).textContent = "Existing image selected";
      } else {
        mediaField("mediaUrl", group.id, index).value = item.src || item.url || "";
      }
    });
  });
}

function setupDetailMediaUploads() {
  document.querySelectorAll("[data-detail-group]").forEach((input) => {
    input.addEventListener("change", async (event) => {
      const groupId = event.target.dataset.detailGroup;
      const index = Number(event.target.dataset.detailIndex);
      const file = event.target.files?.[0];
      mediaField("mediaFileName", groupId, index).textContent = file ? file.name : "Choose an image";
      state.detailMediaImages[mediaImageKey(groupId, index)] = file ? await readFileAsDataUrl(file) : "";
      renderPreview();
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
    }
  });
}

function clearProjectImage() {
  const imageInput = document.getElementById("image");
  if (imageInput) imageInput.value = "";
  state.previewImage = "";
  state.projectImageRemoved = true;
  document.getElementById("image-file-name").textContent = "No thumbnail selected";
  renderPreview();
}

function adminExperienceRow(experience) {
  const count = projectsForExperience(experience.id).length;
  return `
    <div class="admin-experience-row" data-experience-id="${escapeHtml(experience.id)}">
      <span style="--experience-accent: ${experience.accent}"></span>
      <div>
        <strong>${escapeHtml(experience.company)}</strong>
        <small>${escapeHtml(experience.title)} · ${count} project${count === 1 ? "" : "s"}</small>
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

async function handleExperienceSave(event) {
  event.preventDefault();
  const nextExperience = formExperience();
  if (!(await confirmAction("Save this experience as a draft?", "Save Experience"))) return;

  const nextExperiences = experiences.some((experience) => experience.id === nextExperience.id)
    ? experiences.map((experience) => (experience.id === nextExperience.id ? nextExperience : experience))
    : [...experiences, nextExperience];

  saveDraftPortfolio({
    experiences: nextExperiences,
    projects: state.projects,
    portfolioProjects: state.portfolioProjects
  });
  clearExperienceForm();
  renderExperienceSelect();
  renderAdminExperienceList();
  renderAdminList();
  renderPreview();
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
      portfolioProjects: state.portfolioProjects
    });
    renderExperienceSelect();
    renderAdminExperienceList();
    renderAdminList();
    renderPreview();
    showToast("Experience removed from drafts.");
    return;
  }

  document.getElementById("experience-id").value = experience.id;
  document.getElementById("experienceCompany").value = experience.company;
  document.getElementById("experienceTitle").value = experience.title;
  document.getElementById("experienceDates").value = experience.dates;
  document.getElementById("experienceLocation").value = experience.location;
  document.getElementById("experienceHeadline").value = experience.headline;
  document.getElementById("experienceSummary").value = experience.summary;
  document.getElementById("experienceImpact").value = experience.impact;
  document.getElementById("experienceAccent").value = experience.accent || "#0a6f6b";
  document.getElementById("experienceCompany").focus();
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
  state.previewImage = "";
  state.projectImageRemoved = false;
  state.detailMediaImages = {};
  const form = document.getElementById("project-form");
  const imageInput = document.getElementById("image");

  renderExperienceSelect();
  renderMediaBuilder();
  renderPreview();
  renderAdminList();
  renderAdminExperienceList();

  document.getElementById("experience-form").addEventListener("submit", handleExperienceSave);
  document.getElementById("clear-experience-form").addEventListener("click", clearExperienceForm);
  document.getElementById("admin-experience-list").addEventListener("click", handleAdminExperienceAction);
  setupDetailMediaUploads();
  setupDetailMediaControls();
  form.addEventListener("input", renderPreview);
  form.addEventListener("change", renderPreview);
  form.addEventListener("submit", handleProjectSave);

  imageInput.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    document.getElementById("image-file-name").textContent = file ? file.name : "Choose an image";
    state.previewImage = file ? await readFileAsDataUrl(file) : "";
    state.projectImageRemoved = false;
    renderPreview();
  });

  document.getElementById("clear-project-image").addEventListener("click", clearProjectImage);
  document.getElementById("clear-form").addEventListener("click", clearForm);
  document.getElementById("reset-projects").addEventListener("click", resetProjects);
  document.getElementById("export-projects").addEventListener("click", exportProjects);
  document.getElementById("preview-site").addEventListener("click", previewDraft);
  document.getElementById("publish-site").addEventListener("click", publishDraft);
  document.getElementById("admin-project-list").addEventListener("click", handleAdminListAction);
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function formProject() {
  const placement = document.getElementById("projectPlacement").value;
  return {
    id: document.getElementById("project-id").value || crypto.randomUUID(),
    placement,
    experienceId: placement === "work" ? document.getElementById("experience").value : "",
    title: document.getElementById("title").value.trim() || "Untitled project",
    category: document.getElementById("category").value,
    mediaType: document.getElementById("mediaType").value,
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
    mediaGroups: formMediaGroups(),
    image: state.previewImage
  };
}

function renderPreview() {
  const preview = document.getElementById("admin-preview");
  if (!preview) return;
  const project = formProject();
  preview.innerHTML = projectCard(project, project.placement === "work" ? "work" : "portfolio");
}

async function handleProjectSave(event) {
  event.preventDefault();
  const nextProject = formProject();
  const oldCollection = document.getElementById("project-collection").value
    || (state.projects.some((project) => project.id === nextProject.id) ? "work" : "")
    || (state.portfolioProjects.some((project) => project.id === nextProject.id) ? "portfolio" : "");
  const nextCollection = nextProject.placement === "work" ? "work" : "portfolio";
  const existingProject = oldCollection === "portfolio"
    ? state.portfolioProjects.find((project) => project.id === nextProject.id)
    : state.projects.find((project) => project.id === nextProject.id);
  if (existingProject && !nextProject.image && !state.projectImageRemoved) {
    nextProject.image = existingProject.image;
  }

  if (!(await confirmAction("Save this project card?", "Save Project"))) return;

  let nextProjects = oldCollection === "work"
    ? state.projects.filter((project) => project.id !== nextProject.id)
    : [...state.projects];
  let nextPortfolioProjects = oldCollection === "portfolio"
    ? state.portfolioProjects.filter((project) => project.id !== nextProject.id)
    : [...state.portfolioProjects];

  if (nextCollection === "work") {
    if (!nextProject.experienceId) {
      alert("Choose a work experience for this work project.");
      return;
    }
    nextProjects = [nextProject, ...nextProjects];
  } else {
    nextPortfolioProjects = [nextProject, ...nextPortfolioProjects];
  }

  try {
    saveDraftPortfolio({ experiences, projects: nextProjects, portfolioProjects: nextPortfolioProjects });
  } catch {
    alert("The image is too large for browser storage. Try a smaller web image.");
    return;
  }

  clearForm();
  renderAdminList();
  renderAdminExperienceList();
  showToast("Project saved as draft.");
}

function clearForm() {
  document.getElementById("project-form").reset();
  document.getElementById("project-id").value = "";
  document.getElementById("project-collection").value = "";
  document.getElementById("projectPlacement").value = "portfolio";
  document.getElementById("accent").value = "#0a6f6b";
  document.getElementById("imageFit").value = "cover";
  document.getElementById("imagePosition").value = "center center";
  document.getElementById("imageZoom").value = "100";
  document.getElementById("image-file-name").textContent = "Choose an image";
  state.previewImage = "";
  state.projectImageRemoved = false;
  clearMediaFields();
  renderPreview();
}

function renderAdminList() {
  const list = document.getElementById("admin-project-list");
  const workRows = state.projects.length
    ? state.projects.map((project) => adminRow(project, "work")).join("")
    : `<div class="empty-state"><strong>No work experience projects yet.</strong></div>`;
  const portfolioRows = state.portfolioProjects.length
    ? state.portfolioProjects.map((project) => adminRow(project, "portfolio")).join("")
    : `<div class="empty-state"><strong>No portfolio projects yet.</strong></div>`;

  list.innerHTML = `
    <section class="admin-project-group">
      <h3>Work Experience Projects</h3>
      <div class="admin-project-list-inner">${workRows}</div>
    </section>
    <section class="admin-project-group">
      <h3>Portfolio Page Projects</h3>
      <div class="admin-project-list-inner">${portfolioRows}</div>
    </section>
  `;
}

async function handleAdminListAction(event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const row = button.closest("[data-id]");
  const collection = row.dataset.collection || "work";
  const source = collection === "portfolio" ? state.portfolioProjects : state.projects;
  const project = source.find((item) => item.id === row.dataset.id);
  if (!project) return;

  if (button.dataset.action === "delete") {
    if (!(await confirmAction("Delete this draft project?", "Delete"))) return;
    if (collection === "portfolio") {
      savePortfolioProjects(state.portfolioProjects.filter((item) => item.id !== project.id));
    } else {
      saveProjects(state.projects.filter((item) => item.id !== project.id));
    }
    renderAdminList();
    renderAdminExperienceList();
    showToast("Project removed from drafts.");
    return;
  }

  document.getElementById("project-id").value = project.id;
  document.getElementById("project-collection").value = collection;
  document.getElementById("projectPlacement").value = collection;
  document.getElementById("experience").value = project.experienceId || "";
  document.getElementById("title").value = project.title;
  document.getElementById("category").value = project.category;
  document.getElementById("mediaType").value = project.mediaType || "Image";
  document.getElementById("role").value = project.role;
  document.getElementById("year").value = project.year;
  document.getElementById("tools").value = project.tools;
  document.getElementById("summary").value = project.summary;
  document.getElementById("whatPrernaDid").value = project.whatPrernaDid || "";
  document.getElementById("impact").value = project.impact;
  document.getElementById("link").value = project.link;
  document.getElementById("accent").value = project.accent || categoryColor(project.category);
  document.getElementById("imageFit").value = normalizeImageFit(project.imageFit);
  document.getElementById("imagePosition").value = normalizeImagePosition(project.imagePosition);
  document.getElementById("imageZoom").value = normalizeImageZoom(project.imageZoom);
  document.getElementById("image-file-name").textContent = project.image ? "Existing image selected" : "Choose an image";
  state.previewImage = project.image || "";
  state.projectImageRemoved = false;
  fillMediaFields(project.mediaGroups || project.mediaItems || []);
  renderPreview();
  document.getElementById("title").focus();
}

function previewDraft() {
  saveDraftPortfolio(portfolioSnapshot());
  sessionStorage.setItem(PREVIEW_SESSION_KEY, "true");
  showToast("Draft preview is on.");
  window.location.hash = "#/portfolio";
}

async function publishDraft() {
  if (!(await confirmAction("Publish these drafts to GitHub and trigger Vercel deploy?", "Publish"))) return;

  const button = document.getElementById("publish-site");
  const originalText = button.innerHTML;
  button.disabled = true;
  button.innerHTML = `<span aria-hidden="true">…</span> Publishing`;

  try {
    const response = await fetch("/api/publish", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: state.adminPassword || sessionStorage.getItem(ADMIN_PASSWORD_KEY) || "",
        portfolio: portfolioSnapshot()
      })
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(result.error || "Publish endpoint is not configured yet.");
    }

    publishedExperiences = cloneItems(experiences);
    publishedProjects = cloneItems(state.projects);
    publishedPortfolioProjects = cloneItems(state.portfolioProjects);
    localStorage.removeItem(DRAFT_STORE_KEY);
    showToast("Published to GitHub. Vercel should deploy next.");
  } catch (error) {
    showToast(error.message || "Publish failed.");
  } finally {
    button.disabled = false;
    button.innerHTML = originalText;
  }
}

async function resetProjects() {
  if (!(await confirmAction("Reset drafts back to the currently published portfolio?", "Reset"))) return;
  saveDraftPortfolio({
    experiences: publishedExperiences,
    projects: publishedProjects,
    portfolioProjects: publishedPortfolioProjects
  });
  renderExperienceSelect();
  renderAdminExperienceList();
  clearForm();
  renderAdminList();
  showToast("Drafts reset to published version.");
}

function exportProjects() {
  const blob = new Blob([JSON.stringify(portfolioSnapshot(), null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "prerna-portfolio-draft.json";
  anchor.click();
  URL.revokeObjectURL(url);
}

window.addEventListener("hashchange", renderRoute);
renderRoute();
