import React from "react";
import { useTranslation } from "../../hooks/useTranslation";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-12 relative">
          {t("contact.title")}
          <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-30 h-1 bg-blue-500"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Location Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center relative overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-map-marker-alt text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {t("contact.location.title")}
            </h3>
            <p className="text-gray-600 mb-2">
              {t("contact.location.address1")}
            </p>
            <p className="text-gray-600 mb-2">
              {t("contact.location.address2")}
            </p>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center relative overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-phone text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {t("contact.phone.title")}
            </h3>
            <p className="text-gray-600 mb-2">{t("contact.phone.number1")}</p>
            <p className="text-gray-600">{t("contact.phone.number2")}</p>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center relative overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-envelope text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {t("contact.email.title")}
            </h3>
            <a href="mailto:Onpharma2024@outlook.com">
              <p className="text-gray-600 mb-2">{t("contact.email.address")}</p>
            </a>
          </div>

          {/* Working Hours Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center relative overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-clock text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {t("contact.workingHours.title")}
            </h3>
            <p className="text-gray-600 mb-2">
              {t("contact.workingHours.hours")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
