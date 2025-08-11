import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import SectionWrapper from "./SectionWrapper";

export default function ParallaxSection({ backgroundImage, height = "100vh", children }) {
  return (
    <ParallaxBanner
      layers={[
        { image: backgroundImage, speed: -20 }, // background parallax
      ]}
      style={{ height }}
    >
      <div className="flex items-center justify-center h-full bg-black/40">
        <SectionWrapper>
          <div className="text-center text-white">{children}</div>
        </SectionWrapper>
      </div>
    </ParallaxBanner>
  );
}