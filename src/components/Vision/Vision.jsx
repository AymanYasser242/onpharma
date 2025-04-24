import React from "react";
import { useTranslation } from "../../hooks/useTranslation";

// OUR Mission

// To acquire and maintain global leadership position in chosen areas of businesses

// To continuously create new opportunities for growth in our strategic businesses

// To be among the top 10 most admired companies to work for

// To continuously achieve a return on invested capital of at least 10 points higher than the cost of capital

// OUR VISION
// Caring, Sharing, Growing

// We will, with utmost care for the environment and society, continue to enhance value for our customers by providing innovative products and economically efficient solutions; and for our stakeholders through growth, cost-effectiveness, and wise investment of resources.

// vision in arabic
// رؤية الشركة
// للحصول والحفاظ على موقع الريادة العالمية في المجالات المختارة من الأعمال
// لخلق فرص نمو جديدة باستمرار في أعمالنا الاستراتيجية
// لتكون من بين أفضل 10 شركات تعتمد عليها للعمل
// لتحقيق عائد على رأس المال المستثمر يزيد على الأقل بنقطة 10 عن تكلفة رأس المال

// رؤية  الشركة
// الرعاية والمشاركة والنمو
// سنواصل، بأقصى درجات العناية بالبيئة والمجتمع، تعزيز القيمة لعملائنا من خلال توفير منتجات مبتكرة وحلول اقتصادية فعالة؛ ولأصحاب المصلحة لدينا من خلال النمو وكفاءة التكلفة والاستثمار الحكيم للموارد.

// tailwind
const Vision = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-primary text-white flex justify-center items-center flex-wrap gap-10 px-4 xl:px-15 py-8 xl:py-16">
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
