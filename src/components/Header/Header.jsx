import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "../../hooks/useTranslation";
import { Link } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { changeLanguage, currentLanguage, t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-primary">
      <nav className="w-full h-[4rem] flex justify-between items-center px-6 lg:px-12  shadow-sm">
        <img src="/logo-header.svg" className="w-32 md:w-40" alt="Logo" />
        <ul className="hidden md:flex justify-center items-center gap-x-6 rtl:space-x-reverse text-white font-semibold">
          <li>
            <Link to="/">{t("header.home")}</Link>
          </li>
          <li>
            <Link to="/products">{t("header.products")}</Link>
          </li>
          <li>
            <Link to="#">{t("header.about")}</Link>
          </li>
          <li>
            <Link to="#">{t("header.contact")}</Link>
          </li>
        </ul>
        <div className="hidden md:flex justify-center items-center text-white">
          <button
            className={`hover:text-red-500 ${
              currentLanguage === "ar" ? "text-red-400" : "text-white"
            }`}
            onClick={() => changeLanguage("ar")}
          >
            {t("header.arabic")}
          </button>
          <div className="w-[1px] h-5 bg-white mx-2" />
          <button
            className={`hover:text-red-500 ${
              currentLanguage === "en" ? "text-red-400" : "text-white"
            }`}
            onClick={() => changeLanguage("en")}
          >
            {t("header.english")}
          </button>
        </div>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <Icon icon="mynaui:menu" width="24" height="24" />
        </button>
      </nav>
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-primary text-white transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="w-full flex flex-col items-start text-start p-6 space-y-4">
          <Link
            to="/"
            className="w-full hover:text-red-500 transition-colors duration-200"
          >
            {t("header.home")}
          </Link>
          <Link
            to="/products"
            className="w-full  hover:text-red-500 transition-colors duration-200"
          >
            {t("header.products")}
          </Link>
          <a
            href="#"
            className="w-full hover:text-red-500 transition-colors duration-200"
          >
            {t("header.about")}
          </a>
          <a
            href="#"
            className="w-full hover:text-red-500 transition-colors duration-200"
          >
            {t("header.contact")}
          </a>
          <div className="flex flex-row justify-center items-center gap-x-2 w-full">
            <button
              className={`hover:text-red-500 transition-colors duration-200 ${
                currentLanguage === "ar" ? "text-red-400" : "text-white"
              }`}
              onClick={() => changeLanguage("ar")}
            >
              {t("header.arabic")}
            </button>
            <div className="w-[1px] h-5 bg-gray-400"></div>
            <button
              className={`hover:text-red-500 transition-colors duration-200 ${
                currentLanguage === "en" ? "text-red-400" : "text-white"
              }`}
              onClick={() => changeLanguage("en")}
            >
              {t("header.english")}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
