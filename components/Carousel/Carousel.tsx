import { Children, useEffect } from "react";

import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";
import debounce from "lodash/debounce";
import clsx from "clsx";
import React from "react";

type Slide = {
  slideColor?: string;
  logo?: { url: string; dimensions: { width: number; height: number } };
  logoAlt: string;
  quote?: string;
  author?: string;
  authorTitle?: string;
};

type Props = {
  className?: string;
  children?: React.ReactNode[];
  loop?: boolean;
  autoplay?: number;
  slides: Slide[];
};

export function Carousel({
  className,
  slides,
  loop = true,
  autoplay = 0,
}: Props) {
  const [opacities, setOpacities] = React.useState<number[]>([]);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop,
      slides: { perView: 1, origin: "center" },
      selector: ":scope > div",
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map(
          (slide) => slide.portion
        );
        setOpacities(new_opacities);
      },
    },
    [
      // resize
      (slider) => {
        const debouncedUpdate = debounce(() => slider.update(), 100);
        const observer = new ResizeObserver(() => debouncedUpdate());

        slider.on("created", () => observer.observe(slider.container));
        slider.on("destroyed", () => observer.unobserve(slider.container));
      },
    ]
  );

  useEffect(() => {
    if (autoplay > 0) {
      const intervalId = setInterval(
        () => instanceRef.current?.next(),
        autoplay * 1000
      );

      return () => clearInterval(intervalId);
    }
  }, [instanceRef, autoplay]);

  function prevSlide() {
    const slider = instanceRef.current;
    if (!slider) return;
    slider.moveToIdx(slider.track.details.rel - 1);
  }

  function nextSlide() {
    const slider = instanceRef.current;
    if (!slider) return;
    slider.moveToIdx(slider.track.details.rel + 1);
  }

  return (
    <div className={clsx(className)}>
      {slides.length > 0 ? (
        <div
          tabIndex={-1}
          onKeyDown={(e) => {
            switch (e.key) {
              default:
                break;
              case "Left":
              case "ArrowLeft":
                prevSlide();
                break;
              case "Right":
              case "ArrowRight":
                nextSlide();
                break;
            }
          }}
          className="relative focus:outline-0"
        >
          <div
            className="relative flex items-center touch-pan-y select-none w-full overflow-hidden focus:outline-0"
            ref={sliderRef}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className=""
                style={{ opacity: opacities[index] }}
              >
                <div className="flex">
                  <div className="py-5 w-[300px]">
                    <div
                      className="flex items-center justify-center h-full rounded-l-xl"
                      style={{ backgroundColor: slide.slideColor }}
                    >
                      {slide.logo && (
                        <Image
                          src={slide.logo.url}
                          alt={slide.logoAlt}
                          width={150}
                          height={100}
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-20">
                    <p className="text-[28px] text-[#2B292D] font-light tracking-wide leading-snug">
                      {slide.quote}
                    </p>
                    <p className="mt-12 text-[#2B292D] text-base">
                      <span className="font-bold">{slide.author}</span>
                      {" | "}
                      <span>{slide.authorTitle}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="absolute w-14 h-14 top-1/2 -left-7 -translate-y-1/2 cursor-pointer bg-white rounded-md shadow-[10px_15px_21px_11px_rgba(0,0,0,0.05)] p-4"
            onClick={prevSlide}
          >
            <svg viewBox="0 0 31.494 31.494" className="w-[26px] h-[26px]">
              <path
                d="M10.273 5.009a1.112 1.112 0 011.587 0 1.12 1.12 0 010 1.571l-8.047 8.047h26.554c.619 0 1.127.492 1.127 1.111s-.508 1.127-1.127 1.127H3.813l8.047 8.032c.429.444.429 1.159 0 1.587a1.112 1.112 0 01-1.587 0L.321 16.532a1.12 1.12 0 010-1.571l9.952-9.952z"
                fill="#1e201d"
              ></path>
            </svg>
          </div>

          <div
            className="absolute w-14 h-14 top-1/2 -right-7 -translate-y-1/2 cursor-pointer bg-white rounded-md shadow-[10px_15px_21px_11px_rgba(0,0,0,0.05)] p-4"
            onClick={nextSlide}
          >
            <svg
              viewBox="0 0 31.494 31.494"
              className="rotate-180 w-[26px] h-[26px]"
            >
              <path
                d="M10.273 5.009a1.112 1.112 0 011.587 0 1.12 1.12 0 010 1.571l-8.047 8.047h26.554c.619 0 1.127.492 1.127 1.111s-.508 1.127-1.127 1.127H3.813l8.047 8.032c.429.444.429 1.159 0 1.587a1.112 1.112 0 01-1.587 0L.321 16.532a1.12 1.12 0 010-1.571l9.952-9.952z"
                fill="#1e201d"
              ></path>
            </svg>
          </div>
        </div>
      ) : (
        <p className="text py-4 text-center text-gray-700">
          There are no slides
        </p>
      )}
    </div>
  );
}
