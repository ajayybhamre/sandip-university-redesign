import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import aboutBanner from "../../assets/images/slider2.webp";
import PlacementJourney from "./PlacementJourney";
import PlacementRoadmap from "./PlacementRoadmap";
import PlacementGallery from "./PlacementGallery";



export default function Placement() {
    
  return (
    <>
      <Header />

       <Breadcrumb
                    badge="Placement University"
                    title="Placement Sandip University"
                    description="Discover our journey, vision, mission, leadership, innovation and commitment to academic excellence."
                    currentPage="Academic"
                    image={aboutBanner}
                  />
<PlacementJourney/>
<PlacementRoadmap/>
<PlacementGallery/>
   
      <Footer />

      
    </>
  );
}