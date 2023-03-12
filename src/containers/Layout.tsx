import Header from "@components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <Header/>
      <Outlet />
    </div>
  );
};
export default Layout;
