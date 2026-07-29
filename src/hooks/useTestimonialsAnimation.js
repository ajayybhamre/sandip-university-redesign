import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useTestimonialsAnimation() {
  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.to(".blob1", {
        x: 120,
        duration: 8,
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".blob2", {
        y: -80,
        duration: 10,
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".blob3", {
        x: -120,
        duration: 9,
        repeat: -1,
        yoyo: true,
      });

      gsap.from(".testimonial-content", {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".testimonial-section",
          start: "top 80%",
          once: true,
        },
      });

    });

    return () => ctx.revert();

  }, []);
}