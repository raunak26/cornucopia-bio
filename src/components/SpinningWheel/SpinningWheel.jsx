import React from "react";

const logos = [
  { name: "Amgen", src: "/logos/amgen.svg" },
  { name: "Microsoft", src: "/logos/Microsoft.svg" },
  { name: "UC Davis", src: "/logos/uc_davis.svg" },
  { name: "Merck", src: "/logos/merck.svg" },
];

const SpinningWheel = () => {
  return (
    <div className="w-full py-8 px-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
      {logos.map((logo, idx) => (
        <div
          key={idx}
          className={`h-12 flex items-center justify-center aspect-[3/1] max-w-[140px] ${
            logo.name === "UC Davis" ? "pt-1" : ""
          }`}
        >
          <img
            src={logo.src}
            alt={`${logo.name} logo`}
            className={`h-full w-auto max-h-12 object-contain grayscale hover:grayscale-0 transition duration-200 ease-in-out ${
              logo.name === "UC Davis" ? "scale-[1.15]" : ""
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default SpinningWheel;
