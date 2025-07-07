import { Button } from "@heroui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Director = () => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(window.innerWidth > 768);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const [description, setDescription] = useState(
    isExpanded
      ? t("director.description")
      : t("director.description").slice(0, 350)
  );

  useEffect(() => {
    setDescription(
      isExpanded
        ? t("director.description")
        : t("director.description").slice(0, 350)
    );
  }, [isExpanded, t]);
  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-2/5 max-h-[550px] relative">
            <div className="bg-gray-200 border-3 border-gray-300 w-full h-full rounded-xl">
              <img
                src="/ahmed-salah-3.png"
                alt="ahmed salah"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <div className="border-s-4 border-primary-500 ps-4">
                <h3 className="text-2xl font-bold text-white">
                  {t("director.director")}
                </h3>
                <p className="text-primary-300 font-medium">
                  {t("director.directorTitle")}
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-3/5 p-8 md:p-12">
            <div className="mb-2 flex items-center gap-3">
              <div className="w-12 h-0.5 bg-primary-500"></div>
              <span className="text-primary-500 font-semibold uppercase tracking-wider text-sm">
                {t("director.leadership")}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("director.title")}
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p className="leading-relaxed mb-4">{description}</p>
            </div>

            <Button variant="ghost" size="sm" onPress={toggleExpansion}>
              {isExpanded ? t("common.seeLess") : t("common.seeMore")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>

            {/* <button className="flex items-center text-primary-500 font-semibold group">
              {t("director.readFullMessage")}
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Director;
