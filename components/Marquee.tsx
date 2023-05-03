import React from "react";
import Image from "next/image";

type Logo = {
  logoImage?: { url: string; dimensions: { width: number; height: number } };
  logoAlt: string;
  logoWidth: number;
};

type Props = {
  className?: string;
  gap: number;
  logos: Logo[];
  fadeColor?: string;
};

export function Marquee({ className, gap, logos, fadeColor }: Props) {
  if (logos.length === 0)
    return <p className={className}>There are no logos</p>;

  const marqueeContainer = (
    <div className="min-w-full flex flex-[0_0_auto] items-center animate-[marqueeScroll_20s_linear_infinite]">
      {logos.map((logo, index) => {
        if (logo.logoImage == null) return <div key={index}></div>;

        const aspectRatio =
          logo.logoImage.dimensions.width / logo.logoImage.dimensions.height;

        return (
          <Image
            key={index}
            src={logo.logoImage.url}
            alt={logo.logoAlt}
            width={logo.logoWidth}
            height={logo.logoWidth / aspectRatio}
            style={{ marginLeft: gap / 2, marginRight: gap / 2 }}
          />
        );
      })}
    </div>
  );

  return (
    <div className={className}>
      <div className="w-full min-h-[40px] relative flex flex-row items-center overflow-hidden">
        <div
          className="absolute left-0 z-10 h-full w-48"
          style={{
            background: `linear-gradient(to right, ${fadeColor}, transparent)`,
          }}
        ></div>
        <div
          className="absolute right-0 z-10 h-full w-48"
          style={{
            background: `linear-gradient(to left, ${fadeColor}, transparent)`,
          }}
        ></div>
        {marqueeContainer}
        {marqueeContainer}
      </div>
    </div>
  );
}
