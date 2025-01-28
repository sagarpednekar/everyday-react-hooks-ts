import { useEffect, useState } from "react";

export default function useMousePointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  // attach event listener
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    // do cleamup
    return () =>
      window.removeEventListener("mousemove", () =>
        console.log("Removed Mouse move event!!")
      );
  }, []);

  return position;
}
