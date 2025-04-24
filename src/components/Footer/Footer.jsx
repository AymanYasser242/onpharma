import React from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { Link } from "react-router";

const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = [
    {
      label: t("footer.quickLinks.home"),
      to: "/",
    },
    {
      label: t("footer.quickLinks.products"),
      to: "/products",
    },
    {
      label: t("footer.quickLinks.about"),
      to: "/about",
    },
    {
      label: t("footer.quickLinks.contact"),
      to: "/contact",
    },
  ];

  const socialLinks = [
    {
      label: t("footer.social.facebook"),
      to: "#",
    },
    {
      label: t("footer.social.twitter"),
      to: "#",
    },
    {
      label: t("footer.social.linkedin"),
      to: "#",
    },
    {
      label: t("footer.social.instagram"),
      to: "#",
    },
  ];
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              {t("footer.companyInfo.title")}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {t("footer.companyInfo.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              {t("footer.quickLinks.title")}
            </h3>
            <ul className="space-y-2">
              {footerLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              {t("contact.title")}
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>{t("contact.location.address1")}</li>
              <li>{t("contact.location.address2")}</li>
              <li dir="ltr">{t("contact.phone.number1")}</li>
              <li dir="ltr">{t("contact.phone.number2")}</li>
              <li>{t("contact.email.address")}</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              {t("footer.social.title")}
            </h3>
            <div className="flex flex-col space-y-2">
              {socialLinks.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
