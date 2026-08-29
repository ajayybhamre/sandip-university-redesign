import PlacementGallery from "./groups/successStories/PlacementGallery";
import PlacementEvents from "./groups/successStories/PlacementEvents";
import StudentTestimonials from "./groups/successStories/StudentTestimonials";

const SuccessStoriesGroup = () => (
  <div className="space-y-16">

    <PlacementGallery />

    <PlacementEvents />

    <StudentTestimonials />

  </div>
);

export default SuccessStoriesGroup;
