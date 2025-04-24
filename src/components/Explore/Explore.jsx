import React from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { Link } from "react-router";

const Explore = () => {
  const { t } = useTranslation();

  const products = [
    {
      name: t("explore.products.moisturizingGel.name"),
      description: t("explore.products.moisturizingGel.description"),
    },
    {
      name: t("explore.products.soothingCreams.name"),
      description: t("explore.products.soothingCreams.description"),
    },
    {
      name: t("explore.products.antiWrinkle.name"),
      description: t("explore.products.antiWrinkle.description"),
    },
    {
      name: t("explore.products.customTreatments.name"),
      description: t("explore.products.customTreatments.description"),
    },
  ];

  return (
    <section class="explore px-4 xl:px-10 py-10 bg-['linear-gradient(180deg,#bde9fb,#fee 65.22516618695175%')]">
      <h1 class="w-full text-start text-2xl md:text-4xl text-black font-bold flex justify-start items-center gap-x-2">
        {t("explore.title")}
      </h1>
      <p class="max-w-[700px] text-start font-semibold text-gray-700 my-6">
        {t("explore.description")}
      </p>
      <div class="w-full h-[1px] rounded my-6 bg-primary"></div>
      {products.map((product, index) => (
        <div
          key={index}
          class="w-full flex flex-wrap items-center justify-between py-4 px-4 xl:px-10 border-b border-gray-200"
          data-aos="fade-up"
          data-aos-delay={index * 150}
        >
          <h2 class="w-full md:w-3/4 text-start text-nowrap text-xl xl:text-2xl font-bold">
            {product.name}
          </h2>
          <p class="w-full md:w-1/4 text-start text-gray-500">
            {product.description}
          </p>
        </div>
      ))}
      <div class="w-full flex flex-col justify-center items-center">
        <Link
          to="/products"
          class="inline-block py-2 px-4 bg-primary text-center text-white font-semibold rounded-sm mt-6 hover:border-[1px] hover:border-primary hover:bg-transparent hover:text-primary transition-all duration-500"
        >
          {t("explore.explore")}
        </Link>
      </div>
    </section>
  );
};

export default Explore;
