import React from "react";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="w-full mt-[4rem]">
      <Outlet />
    </div>
  );
};

export default RootLayout;
