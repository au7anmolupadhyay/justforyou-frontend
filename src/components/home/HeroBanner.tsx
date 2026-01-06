import { useEffect, useState } from "react";

const slides = [
  {
    title: "Flat ₹300 OFF",
    subtitle: "On your first fashion order",
    code: "JUST300",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80",
    bg: "bg-pink-200",
  },
  {
    title: "Up to 50% OFF",
    subtitle: "Men & Women Collection",
    code: "STYLE50",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1600&q=80",
    bg: "bg-indigo-200",
  },
  {
    title: "Sneaker Fest",
    subtitle: "Top brands at best prices",
    code: "KICKS20",
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1600&q=80",
    bg: "bg-emerald-200",
  },
];

// duplicate slides for seamless loop
const loopSlides = [...slides, ...slides];

const HeroBanner = () => {
  return (
    <section className="overflow-hidden">
      <div className="relative h-[420px]">
        <div className="flex h-full animate-hero-scroll">
          {loopSlides.map((slide, i) => (
            <div
              key={i}
              className={`relative min-w-full h-full ${slide.bg}`}
            >
              {/* LEFT CONTENT */}
              <div className="absolute left-20 top-1/2 -translate-y-1/2 z-10 max-w-md">
                <h1 className="text-4xl font-extrabold text-gray-900">
                  {slide.title}
                </h1>
                <p className="mt-3 text-lg text-gray-700">
                  {slide.subtitle}
                </p>
                <div className="mt-6 inline-block rounded bg-black px-6 py-3 text-white font-semibold">
                  USE CODE: {slide.code}
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="absolute right-0 top-0 h-full w-[60%]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="
                    h-full w-full object-cover
                    [mask-image:linear-gradient(to_left,black_65%,transparent_100%)]
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
