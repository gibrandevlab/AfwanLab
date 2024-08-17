import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Navbar from "./Component/landingpage/Navbar";
import HeroSection from "./Component/landingpage/HeroSection";
import AboutmeSection from "./Component/landingpage/AboutmeSection";
import ContactSection from "./Component/landingpage/ContactSection";

function IndexPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutmeSection />
      <ContactSection />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
 