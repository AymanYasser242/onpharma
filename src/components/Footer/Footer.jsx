import React from "react";
import { useTranslation } from "../../hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();

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
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {t("footer.quickLinks.home")}
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {t("footer.quickLinks.products")}
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {t("footer.quickLinks.about")}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {t("footer.quickLinks.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              {t("contact.location.title")}
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>{t("contact.location.address1")}</li>
              <li>{t("contact.location.address2")}</li>
              <li>{t("contact.phone.number1")}</li>
              <li>{t("contact.email.address")}</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              {t("footer.social.title")}
            </h3>
            <div className="flex flex-col space-y-2">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {t("footer.social.facebook")}
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {t("footer.social.twitter")}
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {t("footer.social.linkedin")}
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {t("footer.social.instagram")}
              </a>
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
