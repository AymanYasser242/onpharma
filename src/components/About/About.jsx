import { useTranslation } from "../../hooks/useTranslation";
import {
  Image,
  Tabs,
  Tab,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const About = () => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(window.innerWidth > 768);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const [description, setDescription] = useState(
    isExpanded ? t("about.description") : t("about.description").slice(0, 202)
  );

  useEffect(() => {
    setDescription(
      isExpanded ? t("about.description") : t("about.description").slice(0, 202)
    );
  }, [isExpanded, t]);

  return (
    <div
      id="about"
      className="relative overflow-hidden px-6 md:px-10 xl:px-40 py-8 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12"
    >
      <div className="flex items-center justify-end">
        <Image
          className="w-full max-w-[500px] max-h-full rounded-sm rounded-tr-[100px]"
          src="/about.jpg"
          alt="About"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-4">
        <div className="w-full flex flex-row items-center justify-start gap-3">
          <h6 className="uppercase text-primary font-bold text-nowrap">
            {t("about.whoWeAre")}
          </h6>
          <div className="h-0.5 flex-1 max-w-80 bg-primary rounded-full" />
        </div>
        <h2
          className="capitalize whitespace-pre-line text-xl leading-8 md:text-3xl md:leading-10 font-extrabold text-primary/90"
          data-aos="fade-up"
        >
          {t("about.title")}
        </h2>
        <p
          className="max-w-xl text-gray-600 text-base"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {description}
        </p>
        <Button variant="ghost" size="sm" onPress={toggleExpansion}>
          {isExpanded ? t("common.seeLess") : t("common.seeMore")}
        </Button>
      </div>
      <div className="absolute bottom-[-80px] right-0 z-[-1]">
        <img
          src="/half-circle.svg"
          alt="half-circle"
          className="w-25 md:w-40"
        />
      </div>
      <div className="absolute top-[-80px] left-0 rotate-180 z-[-1]">
        <img
          src="/half-circle.svg"
          alt="half-circle"
          className="w-25 md:w-40"
        />
      </div>
    </div>
  );
};

export default About;
