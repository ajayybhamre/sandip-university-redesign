# Sandip University – new home page (v3)

## v3.1
- Recruiters: all 70 logos from src/assets/images/recruiters/ wired in (39 in the left slider, 31 in the right). Edit src/pages/Home/Recruiters/recruiterGroups.js to move a company between sliders.

## Changes in v3
- Recruiters: all 8 original companies restored, two unlabeled sliders (left / right). Edit Recruiters/recruiterGroups.js.
- Explore our schools: full-width, wider ring, faster (2.8 s per slide).
- Life at Sandip and Proud moments: continuous auto-scrolling sliders (pause on hover); arrows and red buttons/bars removed.
- Navbar transparent over the hero, turns into the white pill after scrolling (<Header overlay /> in Home.jsx; Hero.jsx padding adjusted).


## 1. Install (one new package)
    npm install gsap

## 2. Copy files
Copy `src/` and `public/` from this zip into your project and accept the overwrites.
REPLACES: src/pages/Home/Home.jsx, Hero/Hero.jsx, QuickLink/QuickLinks.jsx,
          src/components/Header/Header.jsx and Navbar.jsx   (navbar flicker fix)
ADDS:     src/pages/Home/homeData.js, Hero/HeroEnquiryForm.jsx,
          Recruiters/recruiterGroups.js, sections/* (incl. SchoolsRing, LifeStrip,
          AchieversSection, RecruitersMarquee, FindUsOnline),
          src/components/Animated/{SplitHeading,CountUp,SectionBg}.jsx
          public/videos/hero-1.mp4, hero-2.mp4 (+ .jpg posters) = your two campus videos
DELETE if present (no longer used): sections/CampusLife3D.jsx, SchoolsSection.jsx, FinalCTA.jsx
TopBar, MegaMenu and menuData are untouched - keep yours.

## 3. What changed in this round
1. Hero uses your two campus videos (compressed ~20 MB -> ~5 MB each).
2. "Explore our schools" is now the 3D rotating ring; "Life at Sandip" is the tilted-card strip.
3. Achievers: tilted card row flying in from both sides, vertical black name bar (all 10 achievers).
4. Last "Ready to shape your future" section removed.
5. "Find us online. Find your way around campus." is back: social cards, stats, map with drop-in pins.
6. Recruiters: two sliders (Tech -> left, Non-tech -> right). EDIT THE LISTS in
   src/pages/Home/Recruiters/recruiterGroups.js. Only 3 placeholder companies are in it now;
   add your real tech / non-tech companies there (logo optional, name shows as text).
7. OTP: "Send OTP" sits right of the mobile number, "Enter OTP" below it, resend after 30 s,
   Submit stays disabled until verified. Switch off with OTP_REQUIRED = false in HeroEnquiryForm.jsx.
8. Navbar flicker fixed: the header is now fixed with a constant-height placeholder and hysteresis
   (condenses after 90px, expands under 30px), so the layout no longer changes height mid-scroll.

## 4. OTP backend (required for OTP to work)
See backend-sample/README.md. Files: otp_tables.sql, otp_helpers.php, send-otp.php, verify-otp.php.
You must (a) create the table, (b) plug your SMS gateway into send_sms(), (c) set OTP_DEV_MODE=false,
(d) add the otp_token check to your existing submit-enquiry.php - otherwise OTP can be bypassed.

## 5. Check before launch
- api.js baseURL still points at http://localhost/...  - change for production.
- Social URLs in homeData.js (socialLinks): YouTube and Facebook are placeholders, blog/website are guesses.
- "Open full map" links to /about; change in FindUsOnline.jsx if you have a map page.
- Stats (250+ acres, 12,000+ students, 95%+ placement, 120K+ followers...) - confirm.
- News dates in homeData.js are still the old July dates.
- Hero "Apply Now" goes to /apply.

## 6. Where things are edited
Text, images, stats, schools, slides: src/pages/Home/homeData.js
Heading animations: SplitHeading variant = rise | chars | blur | left
Textures: <SectionBg variants={["dots","grid","diagonal","noise","rings"]} />

## v3.2
- Recruiter logos in src/assets/images/recruiters/ are REPLACED by trimmed, centred copies (same file names, shadows/crop lines removed). Cards are taller.
- Why-us: background photo removed.

## v3.3 – new photos
New images are in src/assets/images/home/ (about-1/2.jpg, campus-map.jpg, schools/SOET..SOD.jpg), wired in src/pages/Home/homeData.js.
- About: hover (or tap) the first photo and the second slides open.
- Schools ring uses the 7 school photos; map section uses campus-map.jpg.
- Map pins (x/y are % of the image, edit in homeData.js mapPins): Engineering = left main building,
  Library = right round building, Incubation = left curved wing, Sports = tennis court at left edge. Adjust if wrong.

## v3.4
- About: first photo is now the aerial campus shot (about-1.jpg replaced); frame is landscape; hover reveals about-2.jpg.
- Schools ring: cards are landscape (16:9) so the photos show fully.

## v3.5
- About: entrance photo (about-2.jpg) shows first, aerial photo (about-1.jpg) opens on hover. Swap the order in homeData.js aboutImages.

## v3.6
- About: new taller photos (entrance first, aerial on hover); frame aspect 1423/909 so there is less empty space.

## v3.7
- Life at Sandip: Eco Campus replaced by Seminar Hall; new photos for Cultural Fests, Tech Labs, Sports Complex, Seminar Hall, and a Library slide (replaces "Learning Spaces"). Images in src/assets/images/home/life/. Edit lifeSlides in homeData.js.
