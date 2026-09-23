import { useEffect, useState } from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
// import AnnouncementBar from "../AnnouncementBar/Annoumcement";

function Header({ overlay = false }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`${
          overlay ? "fixed" : "sticky"
        } top-0 left-0 w-full z-50 ${
          overlay ? "" : "min-h-20"
        }`}
      >
        {!scrolled && <TopBar overlay={overlay} scrolled={scrolled} />}
        <Navbar overlay={overlay} scrolled={scrolled} />
      </div>
       {/* <AnnouncementBar/> */}
    </>
  );
}

export default Header;
