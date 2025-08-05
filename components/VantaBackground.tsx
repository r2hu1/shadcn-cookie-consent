"use client";

import { useEffect, useRef } from "react";

export const VantaBackground = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadScripts = async () => {
      const threeScript = document.createElement("script");
      threeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
      threeScript.async = true;
      document.body.appendChild(threeScript);

      const vantaScript = document.createElement("script");
      vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js";
      vantaScript.async = true;
      document.body.appendChild(vantaScript);

      
      vantaScript.onload = () => {
        // @ts-ignore
        if (window.VANTA && window.VANTA.FOG && vantaRef.current) {
          // @ts-ignore
          window.VANTA.FOG({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            highlightColor: 0xeae2c6,
            midtoneColor: 0xffffff,
            lowlightColor: 0xcd6fff,
            baseColor: 0xffffff,
          });
        }
      };
    };

    loadScripts();
  }, []);

  return <div ref={vantaRef} className="fixed inset-0 -z-10 w-full h-full" />;
};
