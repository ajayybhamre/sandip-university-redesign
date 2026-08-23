# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```
sandip-university-redesign
├─ AGENTS.md
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.svg
│  └─ icons.svg
├─ README.md
├─ src
│  ├─ api
│  │  └─ api.js
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ hero.png
│  │  ├─ images
│  │  │  ├─ about.jpg
│  │  │  ├─ accenture.png
│  │  │  ├─ ashwini.webp
│  │  │  ├─ campus-1.jpg
│  │  │  ├─ campus-2.png
│  │  │  ├─ campus-3.png
│  │  │  ├─ campus.png
│  │  │  ├─ Dean_SOET.jpg
│  │  │  ├─ deloite.png
│  │  │  ├─ drone.png
│  │  │  ├─ gallery1.jpg
│  │  │  ├─ gallery2.jpg
│  │  │  ├─ gallery3.jpg
│  │  │  ├─ gallery4.jpg
│  │  │  ├─ gayatri.png
│  │  │  ├─ kotak.png
│  │  │  ├─ logo-dark.png
│  │  │  ├─ pawan.png
│  │  │  ├─ slider1.jpg
│  │  │  ├─ slider2.webp
│  │  │  └─ slier3.webp
│  │  ├─ react.svg
│  │  └─ vite.svg
│  ├─ components
│  │  ├─ AnnouncementBar
│  │  │  └─ Annoumcement.jsx
│  │  ├─ Breadcrumb
│  │  │  └─ Breadcrumb.jsx
│  │  ├─ CursorArrow.jsx
│  │  ├─ FloatingAction.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Header
│  │  │  ├─ Header.jsx
│  │  │  ├─ MegaMenu.jsx
│  │  │  ├─ menuData.js
│  │  │  ├─ Navbar.jsx
│  │  │  └─ TopBar.jsx
│  │  ├─ Popup.jsx
│  │  ├─ Preloader
│  │  │  └─ Preloader.jsx
│  │  └─ SEO
│  │     ├─ SEO.jsx
│  │     └─ seoData.js
│  ├─ hooks
│  │  └─ useTestimonialsAnimation.js
│  ├─ index.css
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ About
│  │  │  ├─ About.jsx
│  │  │  ├─ AboutOverview.jsx
│  │  │  ├─ AboutUniversity.jsx
│  │  │  └─ WhoWeAre.jsx
│  │  ├─ Academics
│  │  │  ├─ Academics.jsx
│  │  │  ├─ ContentArea.jsx
│  │  │  ├─ Sidebar.jsx
│  │  │  ├─ tabData.js
│  │  │  └─ tabs
│  │  │     ├─ AcademicCalendar.jsx
│  │  │     ├─ AcademicRegulations.jsx
│  │  │     ├─ AcademicsOverview.jsx
│  │  │     ├─ CIKS.jsx
│  │  │     ├─ ICTTools.jsx
│  │  │     └─ SystemEvaluation.jsx
│  │  ├─ contact
│  │  │  ├─ Contact.jsx
│  │  │  └─ ContactSection.jsx
│  │  ├─ Gallery
│  │  │  ├─ Gallery.jsx
│  │  │  ├─ galleryData.js
│  │  │  ├─ GalleryGrid.jsx
│  │  │  ├─ GalleryLightbox.jsx
│  │  │  └─ GalleryTabs.jsx
│  │  ├─ Home
│  │  │  ├─ About.jsx
│  │  │  ├─ CampusView
│  │  │  │  ├─ campus.css
│  │  │  │  ├─ campusData.js
│  │  │  │  └─ CampusTour.jsx
│  │  │  ├─ CounterSection.jsx
│  │  │  ├─ FindProgram.jsx
│  │  │  ├─ Hero
│  │  │  │  ├─ Hero.jsx
│  │  │  │  ├─ heroData.js
│  │  │  │  ├─ HeroLeft.jsx
│  │  │  │  └─ HeroRight.jsx
│  │  │  ├─ Home.jsx
│  │  │  ├─ Programs
│  │  │  │  └─ Programs.jsx
│  │  │  ├─ QuickLink
│  │  │  │  ├─ QuickLinks.jsx
│  │  │  │  └─ quickLinksData.js
│  │  │  ├─ Recruiters
│  │  │  │  ├─ recruiter.css
│  │  │  │  ├─ recruiterData.js
│  │  │  │  └─ Recruiters.jsx
│  │  │  ├─ SocialMedia
│  │  │  │  ├─ floatingCards.js
│  │  │  │  ├─ FloatingCards.jsx
│  │  │  │  ├─ socialData.js
│  │  │  │  ├─ SocialGallery.jsx
│  │  │  │  ├─ SocialMedia.jsx
│  │  │  │  └─ SocialSidebar.jsx
│  │  │  ├─ StickySection.jsx
│  │  │  ├─ StudentStories
│  │  │  │  ├─ eventData.js
│  │  │  │  ├─ studentData.js
│  │  │  │  └─ StudentStories.jsx
│  │  │  └─ TestimonialsFAQ
│  │  │     ├─ BackgroundAnimation.jsx
│  │  │     ├─ FAQ.jsx
│  │  │     ├─ faqData.js
│  │  │     ├─ reviewData.js
│  │  │     ├─ ReviewSlider.jsx
│  │  │     ├─ testimonial.css
│  │  │     └─ TestimonialsFAQ.jsx
│  │  └─ Placement
│  │     ├─ Placement.jsx
│  │     ├─ PlacementGallery.jsx
│  │     ├─ placementGalleryData.js
│  │     ├─ PlacementJourney.jsx
│  │     └─ PlacementRoadmap.jsx
│  ├─ schools
│  │  ├─ components
│  │  │  ├─ CourseDetails.jsx
│  │  │  ├─ CourseHighlights.jsx
│  │  │  ├─ CourseTabs.jsx
│  │  │  ├─ DeanSection.jsx
│  │  │  ├─ Programs.jsx
│  │  │  ├─ SchoolContent.jsx
│  │  │  └─ Sidebar.jsx
│  │  ├─ SOCMS
│  │  │  ├─ data
│  │  │  │  ├─ deanData.js
│  │  │  │  ├─ programsData.js
│  │  │  │  ├─ sectionComponents.js
│  │  │  │  └─ sidebarData.js
│  │  │  ├─ sectionComponents.js
│  │  │  ├─ sections
│  │  │  │  └─ About.jsx
│  │  │  └─ SOCMS.jsx
│  │  ├─ SOCSE
│  │  │  ├─ data
│  │  │  │  ├─ deanData.js
│  │  │  │  ├─ programsData.js
│  │  │  │  ├─ sectionComponents.js
│  │  │  │  └─ sidebarData.js
│  │  │  ├─ sectionComponents.js
│  │  │  ├─ sections
│  │  │  │  └─ About.jsx
│  │  │  └─ SOCSE.jsx
│  │  ├─ SOD
│  │  │  ├─ data
│  │  │  │  ├─ deanData.js
│  │  │  │  ├─ programsData.js
│  │  │  │  ├─ sectionComponents.js
│  │  │  │  └─ sidebarData.js
│  │  │  ├─ sectionComponents.js
│  │  │  ├─ sections
│  │  │  │  └─ About.jsx
│  │  │  └─ SOD.jsx
│  │  ├─ SOET
│  │  │  ├─ data
│  │  │  │  ├─ deanData.js
│  │  │  │  ├─ programsData.js
│  │  │  │  ├─ sectionComponents.js
│  │  │  │  └─ sidebarData.js
│  │  │  ├─ sectionComponents.js
│  │  │  ├─ sections
│  │  │  │  ├─ About.jsx
│  │  │  │  ├─ Departments.jsx
│  │  │  │  └─ Labs.jsx
│  │  │  └─ SOET.jsx
│  │  ├─ SOL
│  │  │  ├─ data
│  │  │  │  ├─ deanData.js
│  │  │  │  ├─ programsData.js
│  │  │  │  ├─ sectionComponents.js
│  │  │  │  └─ sidebarData.js
│  │  │  ├─ sectionComponents.js
│  │  │  ├─ sections
│  │  │  │  └─ About.jsx
│  │  │  └─ SOL.jsx
│  │  ├─ SOPS
│  │  │  ├─ data
│  │  │  │  ├─ deanData.js
│  │  │  │  ├─ programsData.js
│  │  │  │  ├─ sectionComponents.js
│  │  │  │  └─ sidebarData.js
│  │  │  ├─ sectionComponents.js
│  │  │  ├─ sections
│  │  │  │  └─ About.jsx
│  │  │  └─ SOPS.jsx
│  │  └─ SOS
│  │     ├─ data
│  │     │  ├─ deanData.js
│  │     │  ├─ programsData.js
│  │     │  ├─ sectionComponents.js
│  │     │  └─ sidebarData.js
│  │     ├─ sectionComponents.js
│  │     ├─ sections
│  │     │  └─ About.jsx
│  │     └─ SOS.jsx
│  └─ ScrollToTop.jsx
└─ vite.config.js

```