const DATA_URL = "data/portfolio.json";
const DRAFT_STORE_KEY = "prerna-portfolio-draft-v1";
const ADMIN_SESSION_KEY = "prerna-portfolio-admin-unlocked";
const ADMIN_PASSWORD_KEY = "prerna-portfolio-admin-password";
const PREVIEW_SESSION_KEY = "prerna-portfolio-preview-drafts";
const LOCAL_ADMIN_PASSWORD = "prerna-admin";
const MAX_UPLOAD_DIMENSION = 2200;
const IMAGE_EXPORT_QUALITY = 0.86;
const PORTFOLIO_FILTERS = ["All", "Branding", "Social Media", "Video Editing", "Motion Graphics", "Illustration"];
const DEFAULT_PROJECT_CATEGORIES = ["Branding", "Social Media", "Video Editing", "Motion Graphics", "Illustration", "Campaign Design", "Graphic Design", "Multimedia"];
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

const defaultSiteContent = {
  global: {
    metaTitle: "Prerna Sharma | Graphic Designer Portfolio",
    metaDescription: "Prerna Sharma portfolio for graphic design, branding, motion graphics, illustration, and multimedia campaign work.",
    skipLink: "Skip to portfolio",
    brandSymbol: "PS",
    brandName: "Prerna Sharma",
    brandSubtitle: "Graphic Designer + Motion Artist",
    nav: {
      home: "Home",
      work: "Work",
      portfolio: "Portfolio",
      about: "About",
      contact: "Contact"
    }
  },
  home: {
    eyebrow: "Graphic design portfolio",
    headline: "Design work that moves from brief to brand, campaign, and motion.",
    typewriterPrefix: "I am",
    typewriterWords: [
      "a Graphic Designer",
      "a Motion Designer",
      "a Brand Illustrator",
      "a Visual Storyteller",
      "a Creative Maker"
    ],
    summary: "A recruiter-friendly portfolio for Prerna Sharma, focused on visual design, brand systems, social campaigns, motion graphics, illustration, and digital storytelling.",
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
    featuredEyebrow: "Featured products",
    featuredHeadline: "Small, polished product pieces recruiters can scan first.",
    featuredFilters: ["All", "Branding", "Social Media", "Video Editing", "Motion Graphics", "Illustration", "Multimedia"],
    workEyebrow: "Portfolio path",
    workHeadline: "Start with work experience, then open the projects inside each role.",
    portfolioEyebrow: "Portfolio cards",
    portfolioHeadline: "Selected work across branding, social media, motion, and illustration."
  },
  work: {
    eyebrow: "Work experience",
    headline: "Choose an experience to see the work created inside it.",
    searchPlaceholder: "Search project, tool, outcome"
  },
  portfolio: {
    eyebrow: "Portfolio",
    headline: "Browse selected campaigns, visuals, motion pieces, and illustration work.",
    searchPlaceholder: "Search portfolio, tool, outcome"
  },
  about: {
    eyebrow: "About the designer",
    headline: "Graphic designer with campaign discipline and a handmade visual voice.",
    body: [
      "Prerna creates brand visuals, campaign assets, motion graphics, social content, illustration, and digital storytelling work. Her portfolio connects practical production skills with expressive, human visual details.",
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
        value: "behance.net/gallery/177375659/PORTFOLIO",
        href: "https://www.behance.net/gallery/177375659/PORTFOLIO"
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
  { id: "portfolio", label: "Portfolio" },
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
  { page: "global", key: "global.nav.portfolio", label: "Nav: Portfolio", path: "global.nav.portfolio" },
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
  { page: "home", key: "home.featuredEyebrow", label: "Featured products eyebrow", path: "home.featuredEyebrow" },
  { page: "home", key: "home.featuredHeadline", label: "Featured products headline", path: "home.featuredHeadline", type: "textarea" },
  { page: "home", key: "home.featuredFilters", label: "Featured product filters", path: "home.featuredFilters", type: "list", helper: "One filter per line. Use All as the first item." },
  { page: "home", key: "home.workEyebrow", label: "Work section eyebrow", path: "home.workEyebrow" },
  { page: "home", key: "home.workHeadline", label: "Work section headline", path: "home.workHeadline", type: "textarea" },
  { page: "home", key: "home.portfolioEyebrow", label: "Portfolio section eyebrow", path: "home.portfolioEyebrow" },
  { page: "home", key: "home.portfolioHeadline", label: "Portfolio section headline", path: "home.portfolioHeadline", type: "textarea" },
  { page: "work", key: "work.eyebrow", label: "Work page eyebrow", path: "work.eyebrow" },
  { page: "work", key: "work.headline", label: "Work page headline", path: "work.headline", type: "textarea" },
  { page: "work", key: "work.searchPlaceholder", label: "Work search placeholder", path: "work.searchPlaceholder" },
  { page: "portfolio", key: "portfolio.eyebrow", label: "Portfolio page eyebrow", path: "portfolio.eyebrow" },
  { page: "portfolio", key: "portfolio.headline", label: "Portfolio page headline", path: "portfolio.headline", type: "textarea" },
  { page: "portfolio", key: "portfolio.searchPlaceholder", label: "Portfolio search placeholder", path: "portfolio.searchPlaceholder" },
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
    mediaType: "Multimedia",
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
    mediaType: "Multimedia",
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
const sampleFeaturedProducts = [
  {
    id: "featured-custom-illustrations",
    placement: "featured",
    title: "Custom Illustration Products",
    category: "Illustration",
    mediaType: "Image",
    role: "Illustrator + Product Designer",
    year: "2018-2024",
    tools: "Procreate, Photoshop, Illustrator",
    summary: "Personalized illustration-led product work for cards, stationery, calendars, and handmade gifts.",
    impact: "Built from The Creative Bud's client-led product practice",
    link: "",
    accent: "#ff4fa3",
    image: ""
  },
  {
    id: "featured-social-campaigns",
    placement: "featured",
    title: "Social Campaign Visuals",
    category: "Social Media",
    mediaType: "Image",
    role: "Graphic Designer",
    year: "2023-2024",
    tools: "Photoshop, Illustrator, Premiere Pro",
    summary: "Designed carousel-ready visuals, layouts, and digital campaign pieces for platform-first storytelling.",
    impact: "Quick proof of layout, hierarchy, and campaign polish",
    link: "",
    accent: "#ff6542",
    image: ""
  },
  {
    id: "featured-motion-thumbnails",
    placement: "featured",
    title: "Motion + Video Thumbnails",
    category: "Motion Graphics",
    mediaType: "Multimedia",
    role: "Motion Designer",
    year: "2024",
    tools: "After Effects, Premiere Pro, Photoshop",
    summary: "Thumbnail and motion-forward visual experiments for video, reels, and animated brand moments.",
    impact: "Shows multimedia thinking before opening full case studies",
    link: "",
    accent: "#3557ff",
    image: ""
  }
];

let publishedFeaturedProducts = sampleFeaturedProducts.map((project) => ({ ...project }));
let publishedSiteContent = cloneItems(defaultSiteContent);

const state = {
  projects: [],
  portfolioProjects: [],
  featuredProducts: [],
  siteContent: cloneItems(defaultSiteContent),
  contentPage: "home",
  previewContentField: "",
  adminMode: "portfolio",
  filter: "All",
  portfolioFilter: "All",
  featuredFilter: "All",
  query: "",
  typewriterTimer: null,
  previewImage: "",
  projectImageRemoved: false,
  detailMediaImages: {},
  mediaBuilderGroups: null,
  mediaBuilderMeta: null,
  loadingCount: 0,
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

function safeHref(value = "") {
  if (!value) return "#";
  if (/^(mailto:|tel:|#\/)/.test(value)) return value;
  return safeUrl(value) || "#";
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
    ["/portfolio", nav.portfolio, "global.nav.portfolio"],
    ["/about", nav.about, "global.nav.about"],
    ["/contact", nav.contact, "global.nav.contact"]
  ].forEach(([route, label, key]) => setText(`.main-nav a[data-route="${route}"]`, label, key));
}

function cloneItems(items = []) {
  return JSON.parse(JSON.stringify(items));
}

function deepEqual(firstValue, secondValue) {
  return JSON.stringify(firstValue ?? null) === JSON.stringify(secondValue ?? null);
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
  return mergeDeep(defaultSiteContent, siteContent);
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
  return !deepEqual(experiences, publishedExperiences)
    || !deepEqual(state.projects, publishedProjects)
    || !deepEqual(state.portfolioProjects, publishedPortfolioProjects)
    || !deepEqual(state.featuredProducts, publishedFeaturedProducts);
}

function projectCollectionDirty(collection) {
  if (collection === "featured") return !deepEqual(state.featuredProducts, publishedFeaturedProducts);
  if (collection === "portfolio") return !deepEqual(state.portfolioProjects, publishedPortfolioProjects);
  return !deepEqual(state.projects, publishedProjects);
}

function itemDirty(item, currentCollection, publishedCollection) {
  const publishedItem = publishedCollection.find((candidate) => candidate.id === item.id);
  return !publishedItem || !deepEqual(item, publishedItem);
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
    siteContent: normalizeSiteContent(source.siteContent || state.siteContent)
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
      : cloneItems(samplePortfolioProjects),
    featuredProducts: Array.isArray(data?.featuredProducts)
      ? cloneItems(data.featuredProducts)
      : cloneItems(sampleFeaturedProducts),
    siteContent: normalizeSiteContent(data?.siteContent)
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
    }
  } catch {
    publishedExperiences = cloneItems(defaultExperiences);
    publishedProjects = cloneItems(sampleProjects);
    publishedPortfolioProjects = cloneItems(samplePortfolioProjects);
    publishedFeaturedProducts = cloneItems(sampleFeaturedProducts);
    publishedSiteContent = cloneItems(defaultSiteContent);
  }

  state.dataLoaded = true;
}

function usePublishedPortfolio() {
  experiences = cloneItems(publishedExperiences);
  state.projects = cloneItems(publishedProjects);
  state.portfolioProjects = cloneItems(publishedPortfolioProjects);
  state.featuredProducts = cloneItems(publishedFeaturedProducts);
  state.siteContent = normalizeSiteContent(publishedSiteContent);
  applySiteContent();
}

function loadDraftPortfolio() {
  const stored = localStorage.getItem(DRAFT_STORE_KEY);
  if (!stored) {
    return portfolioSnapshot({
      experiences: publishedExperiences,
      projects: publishedProjects,
      portfolioProjects: publishedPortfolioProjects,
      featuredProducts: publishedFeaturedProducts,
      siteContent: publishedSiteContent
    });
  }

  try {
    return normalizePortfolioData(JSON.parse(stored));
  } catch {
    return portfolioSnapshot({
      experiences: publishedExperiences,
      projects: publishedProjects,
      portfolioProjects: publishedPortfolioProjects,
      featuredProducts: publishedFeaturedProducts,
      siteContent: publishedSiteContent
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
  state.featuredProducts = cloneItems(nextData.featuredProducts);
  state.siteContent = normalizeSiteContent(nextData.siteContent);
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
    Multimedia: "#155e75",
    "Emerging Media": "#155e75"
  };
  return colors[category] || "#087f6f";
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
  ].map((project) => project.category).filter(Boolean);
  return [...new Set([...DEFAULT_PROJECT_CATEGORIES, ...featuredFilters, ...usedCategories])];
}

function renderCategoryOptions(selectedValue = "") {
  const select = document.getElementById("category");
  if (!select) return;
  const categories = projectCategories();
  const selected = categories.includes(selectedValue) ? selectedValue : categories[0];
  select.innerHTML = categories
    .map((category) => `<option${category === selected ? " selected" : ""}>${escapeHtml(category)}</option>`)
    .join("");
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
    Multimedia: "✦",
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
      <span class="cover-tag">${escapeHtml(normalizeMediaType(project.mediaType) || project.category)}</span>
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
          <span class="pill">${escapeHtml(normalizeMediaType(project.mediaType) || "Work")}</span>
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

function primaryMediaItem(project) {
  return projectMediaGroups(project)
    .flatMap((group) => group.items)
    .find((item) => item.src || item.url || item.videoUrl) || null;
}

function featuredProductCard(product) {
  const primaryItem = primaryMediaItem(product);
  const imageSrc = product.image || primaryItem?.src || primaryItem?.url || "";
  const image = imageSrc
    ? `<img src="${escapeHtml(imageSrc)}" alt="${escapeHtml(product.title)} product image" style="${imageStyle(product)}">`
    : coverArt(product, "large");
  const previewLabel = product.mediaType === "Video" ? "Play" : "Preview";

  return `
    <article class="featured-product-card" data-featured-id="${escapeHtml(product.id)}" role="button" tabindex="0" aria-label="Open ${escapeHtml(product.title)} preview">
      <div class="featured-product-thumb" style="background: ${projectGradient(product)}">${image}</div>
      <div class="featured-product-body">
        <span class="pill">${escapeHtml(product.category || "Featured")}</span>
        <h3>${escapeHtml(product.title)}</h3>
        <p>${escapeHtml(product.summary || "Featured creative product")}</p>
        <div class="tool-row">${toolIcons(product.tools)}</div>
        <button class="open-work" type="button">${escapeHtml(previewLabel)}</button>
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
  const isDirty = projectDirty(project, collection);
  const source = collection === "featured"
    ? "Featured product"
    : collection === "portfolio"
      ? "Portfolio page"
      : experience ? experience.company : "Work experience";

  return `
    <div class="admin-row ${isDirty ? "draft-dirty" : ""}" data-id="${project.id}" data-collection="${collection}">
      <div class="admin-row-thumb" style="background: ${projectGradient(project)}">${image}</div>
      <div>
        <strong>${escapeHtml(project.title)}</strong>
        <small>${escapeHtml(source)} · ${escapeHtml(project.category)} · ${escapeHtml(normalizeMediaType(project.mediaType) || "Work")}</small>
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
  if (name === "/portfolio") setupPortfolio();
  if (name === "/experience") setupExperienceDetail();
  if (name === "/work-project") setupProjectDetail("work");
  if (name === "/portfolio-project") setupProjectDetail("portfolio");
  if (name === "/about") setupAbout();
  if (name === "/contact") setupContact();
  if (name === "/admin" || name === "/studio") setupAdmin();
  app.focus({ preventScroll: true });
  window.requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
}

function setupHome() {
  const home = state.siteContent.home;
  const featuredGrid = document.getElementById("home-featured-grid");
  const featuredFilters = document.getElementById("home-featured-filters");
  const portfolioGrid = document.getElementById("home-portfolio-grid");
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
  setText(".content-band:not(.featured-products-band):not(.home-portfolio-band) .eyebrow", home.workEyebrow, "home.workEyebrow");
  setText(".content-band:not(.featured-products-band):not(.home-portfolio-band) h2", home.workHeadline, "home.workHeadline");
  setText(".home-portfolio-band .eyebrow", home.portfolioEyebrow, "home.portfolioEyebrow");
  setText(".home-portfolio-band h2", home.portfolioHeadline, "home.portfolioHeadline");
  runTypewriter();

  if (state.featuredProducts.length) {
    featuredBand.hidden = false;
    renderFeaturedFilters(featuredFilters);
    renderFeaturedProducts(featuredGrid);
    featuredGrid.addEventListener("click", handleFeaturedProductOpen);
    featuredGrid.addEventListener("keydown", handleFeaturedProductKeydown);
    featuredFilters.addEventListener("click", handleFeaturedFilter);
  } else {
    featuredBand.hidden = true;
    featuredFilters.innerHTML = "";
    featuredGrid.innerHTML = "";
  }

  document.getElementById("home-experience-grid").innerHTML = experiences.map(experienceCard).join("");
  portfolioGrid.innerHTML = state.portfolioProjects.length
    ? state.portfolioProjects.slice(0, 4).map((project) => projectCard(project, "portfolio")).join("")
    : `<div class="empty-state"><strong>Portfolio projects will appear here after the admin adds them.</strong></div>`;

  portfolioGrid.addEventListener("click", handleProjectGridClick);
}

function featuredFilters() {
  const filters = Array.isArray(state.siteContent.home?.featuredFilters) && state.siteContent.home.featuredFilters.length
    ? state.siteContent.home.featuredFilters
    : defaultSiteContent.home.featuredFilters;
  return filters.includes("All") ? filters : ["All", ...filters];
}

function featuredProductMatchesFilter(product) {
  return state.featuredFilter === "All" || product.category === state.featuredFilter;
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
  const filteredProducts = state.featuredProducts.filter(featuredProductMatchesFilter);
  target.innerHTML = filteredProducts.length
    ? filteredProducts.map(featuredProductCard).join("")
    : `<div class="empty-state"><strong>No featured products match this filter yet.</strong></div>`;
}

function handleFeaturedFilter(event) {
  const button = event.target.closest("[data-featured-filter]");
  if (!button) return;
  state.featuredFilter = button.dataset.featuredFilter;
  renderFeaturedFilters();
  renderFeaturedProducts();
}

function featuredProductPreviewItem(product) {
  const primaryItem = primaryMediaItem(product) || {};
  return {
    type: product.mediaType === "Video" || primaryItem.type === "Video" ? "Video" : "Image",
    src: product.image || primaryItem.src || primaryItem.url || "",
    videoUrl: product.mediaType === "Video" || primaryItem.type === "Video" ? product.link || primaryItem.videoUrl || "" : "",
    title: primaryItem.title || product.title,
    description: primaryItem.description || product.summary || product.impact || product.category || "Featured product"
  };
}

function openFeaturedProduct(productId) {
  const product = state.featuredProducts.find((item) => item.id === productId);
  if (!product) return;
  showMediaModal(featuredProductPreviewItem(product), product);
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
  setText(".dashboard-hero .eyebrow", state.siteContent.portfolio.eyebrow, "portfolio.eyebrow");
  setText(".dashboard-hero h1", state.siteContent.portfolio.headline, "portfolio.headline");
  document.getElementById("portfolio-search").placeholder = state.siteContent.portfolio.searchPlaceholder;
  renderPortfolioFilters();
  renderPortfolioProjects();

  document.getElementById("portfolio-search").addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    renderPortfolioProjects();
  });

  document.getElementById("portfolio-grid").addEventListener("click", handleProjectGridClick);
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

function showLoadingBanner(message = "Polishing the portfolio...") {
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
            <strong>Experience, Work & Portfolio</strong>
            <span>Publish cards, projects, media, featured products, and experience changes.</span>
          </button>
          <button class="publish-choice ${siteContentDirty() ? "has-unpublished" : ""}" type="button" data-publish-scope="content">
            <strong>Text & Appearance</strong>
            <span>Publish Home, About, Contact, Header, filters, and color changes.</span>
          </button>
          <button class="publish-choice ${(portfolioContentDirty() || siteContentDirty()) ? "has-unpublished" : ""}" type="button" data-publish-scope="both">
            <strong>Publish Both</strong>
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
      siteContent: state.siteContent
    });
  }
  if (scope === "portfolio") {
    return portfolioSnapshot({
      experiences,
      projects: state.projects,
      portfolioProjects: state.portfolioProjects,
      featuredProducts: state.featuredProducts,
      siteContent: publishedSiteContent
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
  return normalizePortfolioData(await replaceDataImagesWithAssetPaths(portfolio));
}

function publishScopeLabel(scope) {
  if (scope === "content") return "Text & Appearance";
  if (scope === "portfolio") return "Experience, Work & Portfolio";
  return "everything";
}

function updatePublishedPortfolio(published) {
  publishedExperiences = cloneItems(published.experiences);
  publishedProjects = cloneItems(published.projects);
  publishedPortfolioProjects = cloneItems(published.portfolioProjects);
  publishedFeaturedProducts = cloneItems(published.featuredProducts);
  publishedSiteContent = normalizeSiteContent(published.siteContent);
}

function syncDraftAfterPublish(scope, published) {
  updatePublishedPortfolio(published);

  if (scope === "content") {
    saveDraftPortfolio({
      experiences,
      projects: state.projects,
      portfolioProjects: state.portfolioProjects,
      featuredProducts: state.featuredProducts,
      siteContent: publishedSiteContent
    });
  } else if (scope === "portfolio") {
    saveDraftPortfolio({
      experiences: publishedExperiences,
      projects: publishedProjects,
      portfolioProjects: publishedPortfolioProjects,
      featuredProducts: publishedFeaturedProducts,
      siteContent: state.siteContent
    });
  } else {
    experiences = cloneItems(published.experiences);
    state.projects = cloneItems(published.projects);
    state.portfolioProjects = cloneItems(published.portfolioProjects);
    state.featuredProducts = cloneItems(published.featuredProducts);
    state.siteContent = normalizeSiteContent(published.siteContent);
    localStorage.removeItem(DRAFT_STORE_KEY);
    applySiteContent();
  }

  if (!portfolioContentDirty() && !siteContentDirty()) {
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

function emptyMediaItem() {
  return { type: "Image", title: "", src: "", videoUrl: "", description: "" };
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
      ? groups[group.id].map((item) => ({
          type: item.type || "Image",
          title: item.title || "",
          src: item.src || item.url || "",
          videoUrl: item.videoUrl || "",
          description: item.description || ""
        }))
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
          <select id="${mediaInputId("mediaType", group.id, index)}">
            <option${(item.type || "Image") === "Image" ? " selected" : ""}>Image</option>
            <option${item.type === "Video" ? " selected" : ""}>Video</option>
          </select>
          <button class="mini-button danger" type="button" data-remove-media="${group.id}" data-remove-media-index="${index}">Remove slot</button>
          <button class="mini-button danger" type="button" data-clear-media="${group.id}" data-clear-media-index="${index}">Clear asset</button>
        </div>
      </div>
      <label>
        Asset title
        <input id="${mediaInputId("mediaTitle", group.id, index)}" type="text" value="${escapeHtml(item.title || "")}" placeholder="${group.id === "initialSketch" ? "Rough layout sketch" : "Final carousel design"}">
      </label>
      <label>
        Image URL / thumbnail URL
        <input id="${mediaInputId("mediaUrl", group.id, index)}" type="text" value="${embeddedImage ? "" : escapeHtml(src)}" placeholder="https:// or uploaded image">
      </label>
      <label>
        Video link
        <input id="${mediaInputId("mediaVideoUrl", group.id, index)}" type="url" value="${escapeHtml(item.videoUrl || "")}" placeholder="https://youtube.com/...">
      </label>
      <label class="upload-box">
        <span>Upload image / thumbnail</span>
        <input id="${mediaInputId("mediaFile", group.id, index)}" type="file" accept="image/*" data-detail-group="${group.id}" data-detail-index="${index}">
        <strong id="${mediaInputId("mediaFileName", group.id, index)}">${src ? "Existing image selected" : "Choose an image"}</strong>
        <button class="mini-button" type="button" data-clear-media-image="${group.id}" data-clear-media-image-index="${index}">Remove image</button>
      </label>
      <label class="wide">
        Asset text
        <textarea id="${mediaInputId("mediaDescription", group.id, index)}" rows="3" placeholder="Optional text below this photo/video card.">${escapeHtml(item.description || "")}</textarea>
      </label>
    </article>
  `;
}

function renderMediaBuilder(mediaGroups = state.mediaBuilderGroups, mediaGroupMeta = state.mediaBuilderMeta) {
  const builder = document.getElementById("media-builder-fields");
  if (!builder) return;
  state.detailMediaImages = {};
  state.mediaBuilderGroups = normalizeMediaBuilderGroups(mediaGroups || defaultMediaBuilderGroups());
  state.mediaBuilderMeta = normalizeMediaGroupMeta(mediaGroupMeta || defaultMediaGroupMeta());

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
      const item = { type, title, src, videoUrl, description };

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

function removeDetailMediaItem(groupId, index) {
  syncMediaBuilderState();
  const items = state.mediaBuilderGroups[groupId] || [];
  items.splice(index, 1);
  state.mediaBuilderGroups[groupId] = items.length ? items : [emptyMediaItem()];
  renderMediaBuilder();
  renderPreview();
}

function addDetailMediaItem(groupId) {
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

function setupDetailMediaUploads() {
  document.querySelectorAll("[data-detail-group]").forEach((input) => {
    input.addEventListener("change", async (event) => {
      const groupId = event.target.dataset.detailGroup;
      const index = Number(event.target.dataset.detailIndex);
      const file = event.target.files?.[0];
      mediaField("mediaFileName", groupId, index).textContent = file ? file.name : "Choose an image";
      if (file) showLoadingBanner("Preparing campaign asset...");
      try {
        state.detailMediaImages[mediaImageKey(groupId, index)] = file ? await readFileAsDataUrl(file) : "";
        renderPreview();
      } finally {
        if (file) hideLoadingBanner();
      }
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
  const isDirty = experienceDirty(experience);
  return `
    <div class="admin-experience-row ${isDirty ? "draft-dirty" : ""}" data-experience-id="${escapeHtml(experience.id)}">
      <span style="--experience-accent: ${experience.accent}"></span>
      <div>
        <strong>${escapeHtml(experience.company)}</strong>
        <small>${escapeHtml(experience.title)} · ${count} project${count === 1 ? "" : "s"}</small>
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
    portfolioProjects: state.portfolioProjects,
    featuredProducts: state.featuredProducts,
    siteContent: state.siteContent
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
  document.getElementById("experienceLocation").value = experience.location;
  document.getElementById("experienceHeadline").value = experience.headline;
  document.getElementById("experienceSummary").value = experience.summary;
  document.getElementById("experienceImpact").value = experience.impact;
  document.getElementById("experienceAccent").value = experience.accent || "#0a6f6b";
  document.getElementById("experienceCompany").focus();
}

function setupAdminModes() {
  document.querySelectorAll("[data-admin-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.adminMode === state.adminMode);
    button.classList.toggle("has-unpublished", button.dataset.adminMode === "portfolio" ? portfolioContentDirty() : siteContentDirty());
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
    button.classList.toggle("has-unpublished", button.dataset.adminMode === "portfolio" ? portfolioContentDirty() : siteContentDirty());
  });
  document.querySelectorAll("[data-admin-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.adminPanel !== state.adminMode;
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
  if (pageId === "portfolio") {
    return `
      <div class="mini-page-preview">
        <p${previewAttributes("portfolio.eyebrow", "eyebrow")}${textStyle("portfolio.eyebrow")}>${escapeHtml(content.portfolio.eyebrow)}</p>
        <h3${previewAttributes("portfolio.headline")}${textStyle("portfolio.headline")}>${escapeHtml(content.portfolio.headline)}</h3>
        <small${previewAttributes("portfolio.searchPlaceholder")}>Search: ${escapeHtml(content.portfolio.searchPlaceholder)}</small>
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
        <span>
          <b${previewAttributes("home.portfolioEyebrow")}>${escapeHtml(content.home.portfolioEyebrow)}</b>
          <small${previewAttributes("home.portfolioHeadline")}>${escapeHtml(content.home.portfolioHeadline)}</small>
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
      const useCustomColor = modal.querySelector("#content-use-custom-color").checked;
      if (useCustomColor) {
        state.siteContent.appearance.textStyles[field.key] = {
          color: modal.querySelector("#content-edit-color").value
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
  applySiteContent();
  state.previewImage = "";
  state.projectImageRemoved = false;
  state.detailMediaImages = {};
  state.mediaBuilderGroups = defaultMediaBuilderGroups();
  state.mediaBuilderMeta = defaultMediaGroupMeta();
  const form = document.getElementById("project-form");
  const imageInput = document.getElementById("image");

  renderCategoryOptions();
  renderExperienceSelect();
  renderMediaBuilder();
  renderPreview();
  renderAdminList();
  renderAdminExperienceList();
  setupAdminModes();
  setupContentEditor();

  document.getElementById("experience-form").addEventListener("submit", handleExperienceSave);
  document.getElementById("clear-experience-form").addEventListener("click", clearExperienceForm);
  document.getElementById("admin-experience-list").addEventListener("click", handleAdminExperienceAction);
  setupDetailMediaControls();
  form.addEventListener("input", renderPreview);
  form.addEventListener("change", renderPreview);
  form.addEventListener("submit", handleProjectSave);

  imageInput.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    document.getElementById("image-file-name").textContent = file ? file.name : "Choose an image";
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

function compressedImageBlob(file) {
  if (!file.type?.startsWith("image/")) return Promise.resolve(null);

  return new Promise((resolve, reject) => {
    const image = new Image();
    const objectUrl = URL.createObjectURL(file);

    image.onload = () => {
      URL.revokeObjectURL(objectUrl);
      const scale = Math.min(1, MAX_UPLOAD_DIMENSION / Math.max(image.width, image.height));
      const width = Math.max(1, Math.round(image.width * scale));
      const height = Math.max(1, Math.round(image.height * scale));
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, width, height);
      canvas.toBlob((blob) => {
        resolve(blob || null);
      }, "image/webp", IMAGE_EXPORT_QUALITY);
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("Could not read image."));
    };

    image.src = objectUrl;
  });
}

async function readFileAsDataUrl(file) {
  if (!file) return "";
  try {
    const blob = await compressedImageBlob(file);
    if (blob && blob.size && (file.size > 450000 || blob.size < file.size * 1.02)) {
      return readRawFileAsDataUrl(blob);
    }
  } catch {
    // Fall back to the original file so an upload failure does not block the draft.
  }
  return readRawFileAsDataUrl(file);
}

function formProject() {
  const placement = document.getElementById("projectPlacement").value;
  return {
    id: document.getElementById("project-id").value || crypto.randomUUID(),
    placement,
    experienceId: placement === "work" ? document.getElementById("experience").value : "",
    title: document.getElementById("title").value.trim() || "Untitled project",
    category: document.getElementById("category").value,
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
    mediaGroupMeta: formMediaGroupMeta(),
    mediaGroups: formMediaGroups(),
    image: state.previewImage
  };
}

function renderPreview() {
  const preview = document.getElementById("admin-preview");
  if (!preview) return;
  const project = formProject();
  preview.innerHTML = project.placement === "featured"
    ? featuredProductCard(project)
    : projectCard(project, project.placement === "work" ? "work" : "portfolio");
}

async function handleProjectSave(event) {
  event.preventDefault();
  const nextProject = formProject();
  const oldCollection = document.getElementById("project-collection").value
    || (state.projects.some((project) => project.id === nextProject.id) ? "work" : "")
    || (state.portfolioProjects.some((project) => project.id === nextProject.id) ? "portfolio" : "")
    || (state.featuredProducts.some((project) => project.id === nextProject.id) ? "featured" : "");
  const nextCollection = nextProject.placement === "work"
    ? "work"
    : nextProject.placement === "featured"
      ? "featured"
      : "portfolio";
  const existingProject = oldCollection === "portfolio"
    ? state.portfolioProjects.find((project) => project.id === nextProject.id)
    : oldCollection === "featured"
      ? state.featuredProducts.find((project) => project.id === nextProject.id)
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
  let nextFeaturedProducts = oldCollection === "featured"
    ? state.featuredProducts.filter((project) => project.id !== nextProject.id)
    : [...state.featuredProducts];

  if (nextCollection === "work") {
    if (!nextProject.experienceId) {
      alert("Choose a work experience for this work project.");
      return;
    }
    nextProjects = [nextProject, ...nextProjects];
  } else if (nextCollection === "featured") {
    nextProject.experienceId = "";
    nextFeaturedProducts = [nextProject, ...nextFeaturedProducts];
  } else {
    nextProject.experienceId = "";
    nextPortfolioProjects = [nextProject, ...nextPortfolioProjects];
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
    alert("The image is still too large for browser storage. Try a smaller web image, then publish so the asset can move into GitHub.");
    return;
  }

  clearForm();
  renderAdminList();
  renderAdminExperienceList();
  renderAdminMode();
  showToast("Project saved as draft.");
}

function clearForm() {
  document.getElementById("project-form").reset();
  document.getElementById("project-id").value = "";
  document.getElementById("project-collection").value = "";
  document.getElementById("projectPlacement").value = "portfolio";
  renderCategoryOptions();
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
  const featuredRows = state.featuredProducts.length
    ? state.featuredProducts.map((project) => adminRow(project, "featured")).join("")
    : `<div class="empty-state"><strong>No featured products yet.</strong></div>`;
  const workRows = state.projects.length
    ? state.projects.map((project) => adminRow(project, "work")).join("")
    : `<div class="empty-state"><strong>No work experience projects yet.</strong></div>`;
  const portfolioRows = state.portfolioProjects.length
    ? state.portfolioProjects.map((project) => adminRow(project, "portfolio")).join("")
    : `<div class="empty-state"><strong>No portfolio projects yet.</strong></div>`;
  const featuredDirty = projectCollectionDirty("featured");
  const workDirty = projectCollectionDirty("work") || !deepEqual(experiences, publishedExperiences);
  const portfolioDirty = projectCollectionDirty("portfolio");

  list.innerHTML = `
    <section class="admin-project-group ${featuredDirty ? "has-unpublished" : ""}">
      <h3>Featured Products ${featuredDirty ? renderDirtyBadge() : ""}</h3>
      <div class="admin-project-list-inner">${featuredRows}</div>
    </section>
    <section class="admin-project-group ${workDirty ? "has-unpublished" : ""}">
      <h3>Work Experience Projects ${workDirty ? renderDirtyBadge() : ""}</h3>
      <div class="admin-project-list-inner">${workRows}</div>
    </section>
    <section class="admin-project-group ${portfolioDirty ? "has-unpublished" : ""}">
      <h3>Portfolio Page Projects ${portfolioDirty ? renderDirtyBadge() : ""}</h3>
      <div class="admin-project-list-inner">${portfolioRows}</div>
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
    renderAdminMode();
    showToast("Project removed from drafts.");
    return;
  }

  document.getElementById("project-id").value = project.id;
  document.getElementById("project-collection").value = collection;
  document.getElementById("projectPlacement").value = collection;
  document.getElementById("experience").value = project.experienceId || "";
  document.getElementById("title").value = project.title;
  renderCategoryOptions(project.category);
  document.getElementById("category").value = project.category;
  document.getElementById("mediaType").value = normalizeMediaType(project.mediaType);
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
  fillMediaFields(project.mediaGroups || project.mediaItems || [], project.mediaGroupMeta || {});
  renderPreview();
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
  renderAdminMode();

  if (message) {
    showToast(message);
    return;
  }

  const assetText = result.assetCount
    ? ` ${result.assetCount} image asset(s) moved to GitHub.`
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
  if (!(await confirmAction("Reset drafts back to the currently published portfolio?", "Reset"))) return;
  saveDraftPortfolio({
    experiences: publishedExperiences,
    projects: publishedProjects,
    portfolioProjects: publishedPortfolioProjects,
    featuredProducts: publishedFeaturedProducts,
    siteContent: publishedSiteContent
  });
  renderExperienceSelect();
  renderAdminExperienceList();
  clearForm();
  renderAdminList();
  renderAdminMode();
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

document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#/"]');
  if (!link) return;
  const nextHash = link.getAttribute("href");
  if (nextHash !== window.location.hash) return;
  event.preventDefault();
  renderRoute();
});

window.addEventListener("hashchange", renderRoute);
renderRoute();
