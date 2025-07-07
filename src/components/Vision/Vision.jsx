import React from "react";
import { useTranslation } from "../../hooks/useTranslation";

const Vision = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-primary-950 text-white flex justify-center items-center flex-wrap gap-10 px-4 xl:px-15 py-8 xl:py-16">
      <div className="overflow-hidden">
        <img
          src="/vision.jpg"
          alt="Vision"
          className="w-100 max-w-full rounded-2xl"
          data-aos="slide-left"
          data-aos-duration="2000"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4" data-aos="fade-up">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-start">
            {t("vision.companyGoals")}
          </h1>
          <ul className="list-disc px-4 text-start text-sm md:text-base leading-relaxed  text-gray-300">
            {t("vision.goals", { returnObjects: true }).map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
        </div>
        <hr className="border-1 border-gray-400 my-2" data-aos="fade-up" />
        <div className="flex flex-col gap-4" data-aos="fade-up">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-start">
            {t("vision.companyVision")}
          </h1>
          <ul className="list-disc px-4 text-start text-sm md:text-base leading-relaxed text-gray-300">
            {t("vision.vision", { returnObjects: true }).map(
              (vision, index) => (
                <li key={index} className={index === 1 ? "max-w-120" : ""}>
                  {vision}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Vision;
