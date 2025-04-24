import { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "../../hooks/useTranslation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Button,
} from "@heroui/react";
import { Link } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { changeLanguage, currentLanguage, t } = useTranslation();
  const menuToggleRef = useRef(null);
  const headerLinks = [
    {
      label: t("header.home"),
      to: "/",
    },
    {
      label: t("header.products"),
      to: "/products",
    },
    {
      label: t("header.about"),
      to: "/about",
    },
    {
      label: t("header.contact"),
      to: "/contact",
    },
  ];

  const handleLinkClick = () => {
    setIsOpen(!isOpen);
    menuToggleRef.current.click();
  };

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
  };

  return (
    <Navbar className="bg-primary" maxWidth="xl" isBordered shouldHideOnScroll>
      <NavbarContent>
        <NavbarBrand>
          <Link to="/">
            <img src="/logo-header.svg" className="w-32 md:w-40" alt="Logo" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex" justify="center">
        {headerLinks.map(({ label, to }) => (
          <NavbarItem key={label}>
            <Link
              to={to}
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              {label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-x-2" justify="end">
        <NavbarItem>
          <Button
            variant="light"
            size="sm"
            className={`text-base hover:text-red-500 ${
              currentLanguage === "ar" ? "text-red-400" : "text-white"
            }`}
            onPress={() => changeLanguage("ar")}
          >
            {t("header.arabic")}
          </Button>
        </NavbarItem>
        <NavbarItem>
          <div className="w-[1px] h-5 bg-white" />
        </NavbarItem>
        <NavbarItem>
          <Button
            variant="light"
            size="sm"
            className={`text-base hover:text-red-500 ${
              currentLanguage === "en" ? "text-red-400" : "text-white"
            }`}
            onPress={() => changeLanguage("en")}
          >
            {t("header.english")}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
        ref={menuToggleRef}
      />

      <NavbarMenu is className="bg-primary gap-y-2 py-4">
        {headerLinks.map(({ label, to }) => (
          <NavbarMenuItem key={label}>
            <Link
              to={to}
              className="block w-full p-2 text-start text-lg text-white rounded-md hover:text-red-500 hover:bg-gray-100/30 transition-colors duration-200"
              onClick={handleLinkClick}
            >
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <div className="flex flex-row justify-center items-center gap-x-2 w-full">
            <Button
              variant="light"
              size="sm"
              className={`text-base hover:text-red-500 transition-colors duration-200 ${
                currentLanguage === "ar" ? "text-red-400" : "text-white"
              }`}
              onPress={() => handleLanguageChange("ar")}
            >
              {t("header.arabic")}
            </Button>
            <div className="w-[1px] h-5 bg-gray-400"></div>
            <Button
              variant="light"
              size="sm"
              className={`text-base hover:text-red-500 transition-colors duration-200 ${
                currentLanguage === "en" ? "text-red-400" : "text-white"
              }`}
              onPress={() => handleLanguageChange("en")}
            >
              {t("header.english")}
            </Button>
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
