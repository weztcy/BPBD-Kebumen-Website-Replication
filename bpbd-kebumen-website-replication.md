# Portfolio Project Data — BPBD Kebumen Website Replication

- **Category:** `web-development` (`Web Development`)
- **Accent Color:** `cyan`
- **Target Assets Folder:** `public/images/projects/bpbd_kebumen_website_replication/`
- **Required Local Images:** `banner.webp`, `image01.webp` .. `image03.webp`

## TypeScript Data (`ProjectCaseStudy`)

```typescript
{
  "id": "bpbd-kebumen-website-replication",
  "code": "PRO-17 // WEB-04",
  "title": "BPBD Kebumen Website Replication",
  "category": "web-development",
  "categoryLabel": "Website",
  "year": "2023",
  "status": "Completed",
  "accentColor": "cyan",
  "repoUrl": "https://github.com/weztcy/BPBD-Kebumen-Website-Replication",
  "license": "MIT License",
  "banner": "/images/projects/bpbd_kebumen_website_replication/banner.webp",
  "summary": "Modular React and Bootstrap frontend replication of the official BPBD Kebumen regional disaster management news and public information portal.",
  "projectDescription": "A component-driven React single-page application replicating the official BPBD Kabupaten Kebumen portal. Built with React Bootstrap and custom CSS, it organizes a 16-item navigation bar, hero image carousel, three-column disaster news layout, sidebar widgets, and an institutional footer.",
  "architectureSummary": "Client-side React SPA composing 18 modular UI components through Bootstrap 5 responsive grids and static in-memory data.",
  "techStack": [
    "React",
    "JavaScript",
    "React Bootstrap",
    "Bootstrap",
    "CSS3",
    "Create React App",
    "HTML5"
  ],
  "telemetryMatrix": {
    "projectType": "Frontend Web Application",
    "targetPlatform": "Modern Desktop & Mobile Browsers",
    "primaryDomain": "Government & Disaster Info Portal",
    "architecturePipeline": "Component-Based React SPA Layout",
    "testingAndAudit": "Passed",
    "projectStatus": "Completed",
    "projectYear": "2023"
  },
  "projectInfo": {
    "projectType": "Frontend Web Replication",
    "developmentStatus": "Completed",
    "developmentYear": "2023",
    "platform": "Web Browser",
    "projectCategory": "Web Development"
  },
  "projectBackground": "Public disaster management portals aggregate high-density institutional navigation, emergency news headlines, leadership profiles, and contact channels on a single landing page. This project replicates the BPBD Kabupaten Kebumen interface in React to study structured grid layout composition and modular UI engineering.",
  "problemStatements": [
    {
      "title": "Monolithic Portal Layout Complexity",
      "description": "Traditional government portals often combine navigation bars, sliders, multi-tier news feeds, and utility widgets in tightly coupled markup that is difficult to maintain or reuse.",
      "issueCode": "ISSUE_01"
    },
    {
      "title": "Multi-Tier Information Hierarchy",
      "description": "Disaster management announcements require clear visual separation between urgent breaking headlines, secondary regional updates, historical news summaries, and sidebar feeds.",
      "issueCode": "ISSUE_02"
    },
    {
      "title": "Consistent Institutional Footer Presentation",
      "description": "Public agencies must present official emblem branding, multi-channel contact lines, and visitor traffic metrics in an aligned, readable footer structure.",
      "issueCode": "ISSUE_03"
    }
  ],
  "projectObjectives": [
    {
      "title": "Decompose Portal UI into Reusable Modules",
      "description": "Split the BPBD Kebumen portal layout into 18 focused React components covering header navigation, carousel banners, news cards, sidebar widgets, and footer sections.",
      "targetTag": "TARGET_01"
    },
    {
      "title": "Replicate Multi-Column Visual Fidelity",
      "description": "Implement a balanced three-column content layout using React Bootstrap Container, Row, and Col primitives with custom viewport and spacing stylesheets.",
      "targetTag": "TARGET_02"
    },
    {
      "title": "Standardize Component Data & Asset Bundling",
      "description": "Manage news items via structured client-side arrays, pass visitor metrics through component props, and bundle local image assets cleanly with Create React App.",
      "targetTag": "TARGET_03"
    }
  ],
  "coreFeatures": [
    {
      "title": "16-Item Institutional Navigation Bar",
      "description": "Renders a full-width white navigation header with 16 evenly spaced agency links and dropdown indicators covering Profil, Bidang, Layanan, PPID, Berita, SITANA, and public services.",
      "badge": "Navigation"
    },
    {
      "title": "Full-Width Welcome Banner Carousel",
      "description": "Cycles through three official BPBD Kebumen agency banner images using the React Bootstrap Carousel component directly beneath the navigation bar.",
      "badge": "Hero Showcase"
    },
    {
      "title": "Tiered Disaster News Feed",
      "description": "Combines a dark overlay headline card (BeritaUtama), a two-column secondary overlay grid (BeritaSekunder), horizontal article cards (BeritaLainnya), and a full-width action button.",
      "badge": "Content Feed"
    },
    {
      "title": "Left & Right Portal Sidebar Widgets",
      "description": "Pairs the Chief Executive profile card, social media links, and floating-label Tweet Saran textarea on the left with a search bar, Kebumen Terkini highlight, and POPULER/TERBARU list on the right.",
      "badge": "Sidebar Widgets"
    },
    {
      "title": "Parameterized Institutional Footer",
      "description": "Integrates the Kebumen Regency emblem (IdentitasWeb), four-channel contact directory (KontakKami), a five-row visitor statistics table receiving props (StatistikPengunjung), and a copyright bar.",
      "badge": "Footer System"
    }
  ],
  "interfaceShowcase": [
    {
      "imageUrl": "/images/projects/bpbd_kebumen_website_replication/image01.webp"
    },
    {
      "imageUrl": "/images/projects/bpbd_kebumen_website_replication/image02.webp"
    },
    {
      "imageUrl": "/images/projects/bpbd_kebumen_website_replication/image03.webp"
    }
  ],
  "userFlow": {
    "summary": "Visitors enter the portal through the top navigation bar and full-width welcome carousel, then scan the three-column content zone combining leadership identity, featured disaster news cards, search and sidebar feeds, and a multi-column institutional footer with contact details and visitor statistics.",
    "steps": [
      {
        "step": "01",
        "title": "Portal Entry & Navigation Inspection",
        "description": "User lands on the application shell, viewing the 16-category institutional navbar and the full-width agency banner carousel.",
        "actorOrNode": "NavigationBar / MyCarousel"
      },
      {
        "step": "02",
        "title": "Leadership & Social Engagement Scan",
        "description": "User inspects the Chief Executive profile card in the left column, accesses social media links, or enters feedback in the Tweet Saran textarea.",
        "actorOrNode": "KepalaPelaksana / MediaSosial / TweetSaran"
      },
      {
        "step": "03",
        "title": "Disaster News Exploration",
        "description": "User reads the main breaking-news overlay card, compares secondary regional reports, and browses horizontal article cards down to the Lihat Semua button.",
        "actorOrNode": "BeritaUtama / BeritaSekunder / BeritaLainnya"
      },
      {
        "step": "04",
        "title": "Sidebar Filtering & Institutional Footer",
        "description": "User checks the Cari Berita input, Kebumen Terkini highlight, and POPULER/TERBARU feed before reviewing agency contact channels and visitor metrics in the footer.",
        "actorOrNode": "SearchBar / BeritaSamping / Footer"
      }
    ]
  },
  "systemArchitecture": {
    "summary": "The application follows a client-side React component hierarchy mounted in App.js using a vertical Stack layout. Top-level regions delegate rendering to 18 specialized presentational modules styled with Bootstrap 5 utilities, React Bootstrap primitives, and custom page stylesheets bundled via Create React App.",
    "layers": [
      {
        "name": "Application Entry & Shell Layer",
        "role": "Mounts the React root, loads global Bootstrap CSS, and arranges top-level layout sections vertically via React Bootstrap Stack.",
        "components": ["index.js", "App.js", "LandingPage.css", "App.css"]
      },
      {
        "name": "Header & Hero Presentation Layer",
        "role": "Renders the horizontal institutional menu bar and full-width multi-slide agency welcome banner.",
        "components": ["NavigationBar.js", "Carousel.js"]
      },
      {
        "name": "Three-Column Content & Widget Layer",
        "role": "Coordinates the 2-column left sidebar, flexible center news column, and 3-column right sidebar.",
        "components": [
          "Content.js",
          "KepalaPelaksana.js",
          "MediaSosial.js",
          "TweetSaran.js",
          "BeritaUtama.js",
          "BeritaSekunder.js",
          "BeritaLainnya.js",
          "BtnLihatSemua.js",
          "SearchBar.js",
          "BeritaTerkini.js",
          "BeritaSamping.js"
        ]
      },
      {
        "name": "Institutional Footer Layer",
        "role": "Displays agency crest identity, physical/digital contact channels, parameterized visitor statistics, and copyright metadata.",
        "components": ["Footer.js", "IdentitasWeb.js", "KontakKami.js", "StatistikPengunjung.js", "Copyright.js"]
      }
    ]
  },
  "databaseDataFlow": {
    "type": "Static Client-Side Data Flow",
    "summary": "All portal content is stored locally as static JavaScript arrays and component props without external API requests or database persistence, enabling deterministic UI rendering.",
    "entitiesOrPipelines": [
      {
        "name": "NewsArticleRecord",
        "type": "In-Component Array",
        "fields": ["kategori", "judul", "tanggal", "penulis", "isi"]
      },
      {
        "name": "VisitorStatisticsProps",
        "type": "Parent-to-Child Props",
        "fields": ["hariini", "kemarin", "bulanini", "tahunini", "semuawaktu"]
      },
      {
        "name": "StaticMediaAssets",
        "type": "Bundled Asset Imports",
        "fields": ["carouselSlides", "newsThumbnails", "socialIcons", "agencyCrest"]
      }
    ]
  },
  "technicalImplementation": [
    {
      "category": "Component Architecture",
      "title": "Vertical Stack & Multi-Column Grid Composition",
      "description": "App.js wraps NavigationBar, MyCarousel, Content, and Footer inside a React Bootstrap Stack with gap={3}, while Content.js divides the main viewport into md={2}, flexible center, and md={3} columns.",
      "badge": "Layout System"
    },
    {
      "category": "UI Patterns",
      "title": "Overlay & Horizontal Card Rendering",
      "description": "BeritaUtama and BeritaSekunder leverage React Bootstrap Card.ImgOverlay for breaking-news typography over banner graphics, whereas BeritaLainnya and BeritaSamping use flex-aligned thumbnail cards.",
      "badge": "Card Patterns"
    },
    {
      "category": "Data Flow",
      "title": "Props-Driven Visitor Counter & Array Mapping",
      "description": "Footer.js passes five formatted visitor counts (hariini through semuawaktu) as props to StatistikPengunjung.js, while news modules map structured JavaScript object arrays into cards.",
      "badge": "Props & Mapping"
    },
    {
      "category": "Asset Management",
      "title": "Webpack ES Module Asset Imports",
      "description": "All images—including Kebumen crests, carousel banners, news illustrations, and contact icons—are imported directly from src/assets/images/ so Create React App bundles and hashes them reliably.",
      "badge": "Asset Bundling"
    }
  ],
  "primaryTechSpecs": {
    "programmingLanguage": "JavaScript",
    "framework": "React",
    "database": "Static In-Memory Data"
  },
  "architectureQuality": {
    "badges": [
      "Modular UI Components",
      "Responsive Grid Layout",
      "Props Driven Widgets",
      "Clean Asset Bundling"
    ]
  }
}
```
