import React from "react";
import { useTranslation } from "../../hooks/useTranslation";

const Hero = () => {
  const { isRTL, t } = useTranslation();

  return (
    <section
      className={`hero lg:h-[calc(100vh-4rem)] py-10 w-full  ${
        isRTL
          ? "bg-[url('/background.jpg')]"
          : "bg-[url('/background-flipped.jpg')]"
      } bg-center bg-cover bg-no-repeat`}
    >
      <div className="w-full h-full px-6 lg:px-20 flex flex-col lg:flex-row-reverse gap-6 justify-around items-center text-start">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
          <div className="bg-gradient-to-b from-transparent  to-secondary/80 rounded-3xl">
            <img
              src="/doctor.png"
              className="w-[300px] sm:w-[20rem] lg:w-[25rem] max-w-full rounded-md"
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="w-full lg:w-1/2 space-y-4 xl:space-y-6"
        >
          <h1 className="text-2xl md:text-3xl xl:text-5xl text-white font-bold text-start flex flex-col gap-3 lg:gap-6">
            <span className="text-secondary md:font-semibold">
              {t("hero.companyName")}
            </span>
            <span>{t("hero.tagline")}</span>
          </h1>
          <p className="max-w-[30rem] text-sm md:text-base xl:text-base text-start text-gray-300">
            {t("hero.description")}
          </p>
          <a
            href="#products"
            className="inline-block py-2 px-4 rounded-full bg-transparent text-center text-nowrap text-white font-semibold mt-6 border-[1px] border-[#FFF] hover:bg-primary transition-all duration-500"
          >
            {t("hero.discoverMore")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
