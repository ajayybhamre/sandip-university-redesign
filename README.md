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
│  │  │  ├─ Banner.webp
│  │  │  ├─ campus-1.jpg
│  │  │  ├─ campus-2.png
│  │  │  ├─ campus-3.png
│  │  │  ├─ campus.png
│  │  │  ├─ dean_academics_photo.webp
│  │  │  ├─ dean_socse.jpg
│  │  │  ├─ Dean_SOET.jpg
│  │  │  ├─ deloite.png
│  │  │  ├─ drone.png
│  │  │  ├─ gallery1.jpg
│  │  │  ├─ gallery2.jpg
│  │  │  ├─ gallery3.jpg
│  │  │  ├─ gallery4.jpg
│  │  │  ├─ gayatri.png
│  │  │  ├─ IMG_0862.HEIC
│  │  │  ├─ IMG_0862.webp
│  │  │  ├─ IMG_0868.webp
│  │  │  ├─ journey
│  │  │  │  └─ soet
│  │  │  │     ├─ capstone.jpg
│  │  │  │     ├─ foundation.jpg
│  │  │  │     ├─ internship.jpg
│  │  │  │     ├─ placement.jpg
│  │  │  │     └─ specialization.jpg
│  │  │  ├─ kotak.png
│  │  │  ├─ logo-dark.png
│  │  │  ├─ pawan.png
│  │  │  ├─ programs
│  │  │  │  └─ aerospace-engineering.webp
│  │  │  ├─ schools
│  │  │  │  ├─ socms.webp
│  │  │  │  ├─ socse.webp
│  │  │  │  └─ sops.webp
│  │  │  ├─ slider1.jpg
│  │  │  ├─ slider2.webp
│  │  │  ├─ slier3.webp
│  │  │  ├─ soet1.webp
│  │  │  ├─ soet2.webp
│  │  │  ├─ soet3.webp
│  │  │  └─ SU-NAAC-white.png
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
│  │  │  ├─ AcademicsPage.jsx
│  │  │  ├─ components
│  │  │  │  ├─ AcademicsBreadcrumb.jsx
│  │  │  │  ├─ AcademicsHero.jsx
│  │  │  │  ├─ AccordionSection.jsx
│  │  │  │  ├─ DataTable.jsx
│  │  │  │  ├─ DeanSection.jsx
│  │  │  │  ├─ DocumentCard.jsx
│  │  │  │  ├─ DownloadRow.jsx
│  │  │  │  ├─ GradeScaleBar.jsx
│  │  │  │  ├─ PlaceholderNote.jsx
│  │  │  │  ├─ SectionCard.jsx
│  │  │  │  └─ SubPageHeader.jsx
│  │  │  ├─ data
│  │  │  │  ├─ calendarData.js
│  │  │  │  ├─ deanData.js
│  │  │  │  ├─ evaluationData.js
│  │  │  │  └─ regulationsData.js
│  │  │  └─ pages
│  │  │     ├─ CalendarPage.jsx
│  │  │     ├─ EvaluationPage.jsx
│  │  │     └─ RegulationsPage.jsx
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
│  │  │  ├─ SchoolCard.jsx
│  │  │  ├─ SchoolContent.jsx
│  │  │  ├─ SchoolsCTA.jsx
│  │  │  ├─ SchoolsHero.jsx
│  │  │  └─ Sidebar.jsx
│  │  ├─ data
│  │  │  ├─ courseDetailsData.js
│  │  │  └─ schoolsData.js
│  │  ├─ Schools.jsx
│  │  ├─ SOCMS
│  │  │  ├─ AboutSOCMS.jsx
│  │  │  ├─ components
│  │  │  │  └─ ProgramsDepartments.jsx
│  │  │  ├─ data
│  │  │  │  ├─ deanData.js
│  │  │  │  ├─ journeyData.js
│  │  │  │  ├─ programmeContent
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ programsData.js
│  │  │  │  ├─ sectionComponents.js
│  │  │  │  └─ sidebarData.js
│  │  │  ├─ JourneyTimeline.jsx
│  │  │  ├─ sectionComponents.js
│  │  │  ├─ sections
│  │  │  │  └─ About.jsx
│  │  │  └─ SOCMS.jsx
│  │  ├─ SOCSE
│  │  │  ├─ AboutSOCSE.jsx
│  │  │  ├─ components
│  │  │  │  └─ ProgramsDepartments.jsx
│  │  │  ├─ data
│  │  │  │  ├─ deanData.js
│  │  │  │  ├─ journeyData.js
│  │  │  │  ├─ programmeContent
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ programsData.js
│  │  │  │  ├─ sectionComponents.js
│  │  │  │  └─ sidebarData.js
│  │  │  ├─ JourneyTimeline.jsx
│  │  │  ├─ sectionComponents.js
│  │  │  ├─ sections
│  │  │  │  └─ About.jsx
│  │  │  └─ SOCSE.jsx
│  │  ├─ SOD
│  │  │  ├─ AboutSOD.jsx
│  │  │  ├─ components
│  │  │  │  └─ ProgramsDepartments.jsx
│  │  │  ├─ data
│  │  │  │  ├─ deanData.js
│  │  │  │  ├─ journeyData.js
│  │  │  │  ├─ programmeContent
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ programsData.js
│  │  │  │  ├─ sectionComponents.js
│  │  │  │  └─ sidebarData.js
│  │  │  ├─ JourneyTimeline.jsx
│  │  │  ├─ sectionComponents.js
│  │  │  ├─ sections
│  │  │  │  └─ About.jsx
│  │  │  └─ SOD.jsx
│  │  ├─ SOET
│  │  │  ├─ AboutSOET.jsx
│  │  │  ├─ components
│  │  │  │  └─ ProgramsDepartments.jsx
│  │  │  ├─ data
│  │  │  │  ├─ deanData.js
│  │  │  │  ├─ departmentsData.js
│  │  │  │  ├─ journeyData.js
│  │  │  │  ├─ programmeContent
│  │  │  │  │  ├─ aerospace-engineering.js
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ programsData.js
│  │  │  │  ├─ sectionComponents.js
│  │  │  │  └─ sidebarData.js
│  │  │  ├─ JourneyTimeline.jsx
│  │  │  ├─ sectionComponents.js
│  │  │  ├─ sections
│  │  │  │  ├─ About.jsx
│  │  │  │  ├─ Departments.jsx
│  │  │  │  └─ Labs.jsx
│  │  │  └─ SOET.jsx
│  │  ├─ SOL
│  │  │  ├─ AboutSOL.jsx
│  │  │  ├─ components
│  │  │  │  └─ ProgramsDepartments.jsx
│  │  │  ├─ data
│  │  │  │  ├─ deanData.js
│  │  │  │  ├─ journeyData.js
│  │  │  │  ├─ programmeContent
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ programsData.js
│  │  │  │  ├─ sectionComponents.js
│  │  │  │  └─ sidebarData.js
│  │  │  ├─ JourneyTimeline.jsx
│  │  │  ├─ sectionComponents.js
│  │  │  ├─ sections
│  │  │  │  └─ About.jsx
│  │  │  └─ SOL.jsx
│  │  ├─ SOPS
│  │  │  ├─ AboutSOPS.jsx
│  │  │  ├─ components
│  │  │  │  └─ ProgramsDepartments.jsx
│  │  │  ├─ data
│  │  │  │  ├─ deanData.js
│  │  │  │  ├─ journeyData.js
│  │  │  │  ├─ programmeContent
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ programsData.js
│  │  │  │  ├─ sectionComponents.js
│  │  │  │  └─ sidebarData.js
│  │  │  ├─ JourneyTimeline.jsx
│  │  │  ├─ sectionComponents.js
│  │  │  ├─ sections
│  │  │  │  └─ About.jsx
│  │  │  └─ SOPS.jsx
│  │  └─ SOS
│  │     ├─ AboutSOS.jsx
│  │     ├─ components
│  │     │  └─ ProgramsDepartments.jsx
│  │     ├─ data
│  │     │  ├─ deanData.js
│  │     │  ├─ journeyData.js
│  │     │  ├─ programmeContent
│  │     │  │  └─ index.js
│  │     │  ├─ programsData.js
│  │     │  ├─ sectionComponents.js
│  │     │  └─ sidebarData.js
│  │     ├─ JourneyTimeline.jsx
│  │     ├─ sectionComponents.js
│  │     ├─ sections
│  │     │  └─ About.jsx
│  │     └─ SOS.jsx
│  └─ ScrollToTop.jsx
└─ vite.config.js

```