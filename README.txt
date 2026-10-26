Sandip University home page redesign (v5)
Copy src/ over your project's src/. No new npm packages needed.
Delete these now-unused files if present: pages/Home/TestimonialsFAQ/TestimonialsFAQ.jsx, ReviewSlider.jsx, and (from v1/v2) pages/Home/AdmissionsScholarships.jsx, CampusGallery.jsx, Leadership.jsx, leadershipData.js, EnquirySection.jsx

To update later:
  src/pages/Home/newsData.js                       news and events
  src/pages/Home/TestimonialsFAQ/testimonialVideos.js  YouTube testimonial ids
  src/pages/Home/Recruiters/recruiterData.js       recruiter logos (hotlinked from sandipuniversity.edu.in)
  src/components/Footer.jsx                        items with `to: null` have no page yet
