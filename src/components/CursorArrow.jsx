import { useEffect, useRef } from "react";

export default function CursorArrow() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

    const moveMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    window.addEventListener("mousemove", moveMouse);

    function animate() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  return (
    <>
      {/* Small Dot */}
      <div
        ref={dotRef}
        className="
        fixed
        top-0
        left-0
        w-2
        h-2
        bg-red-600
        rounded-full
        pointer-events-none
        z-[99999]
        -translate-x-1/2
        -translate-y-1/2
        "
      />

      {/* Ring */}
      <div
        ref={ringRef}
        className="
        fixed
        top-0
        left-0
        w-10
        h-10
        border-2
        border-red-600
        rounded-full
        pointer-events-none
        z-[99998]
        -translate-x-1/2
        -translate-y-1/2
        transition-[width,height]
        duration-300
        "
      />
    </>
  );
}