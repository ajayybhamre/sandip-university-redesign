import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";




import aboutBanner from "../../assets/images/slider2.webp";
import GalleryTabs from "./GalleryTabs";


export default function Gallery() {
  return (
    <>
      <Header />

      <Breadcrumb
                  badge="Academic University"
                  title="Academic Sandip University"
                  description="Discover our journey, vision, mission, leadership, innovation and commitment to academic excellence."
                  currentPage="Academic"
                  image={aboutBanner}
                />


      <GalleryTabs/>

      <Footer />

    </>
  );
}