import React, { useEffect } from "react";
import { Outlet } from "react-router";
import ScrollToTop from "../utilities/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

const RootLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <div className="max-w-[1600px] mx-auto w-full overflow-hidden">
      <ScrollToTop />
      <Outlet />
    </div>
  );
};

export default RootLayout;
