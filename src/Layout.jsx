import React from "react";
import { useState, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";

function Layout() {
  const [val, setVal] = useState("home");

  const handleNavigationChange = (newValue) => {
    setVal(newValue);
  };

  return (
    <div className="overflow-x-hidden">
      <Header value={val} onChange={handleNavigationChange} />
      <MainPage />
      <Footer />
    </div>
  );
}

export default Layout;
