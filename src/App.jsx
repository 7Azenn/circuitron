import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PageTitleManager from "./components/PageTitleManager";
import Home from "./pages/Home";
import About from "./pages/About";
import Domains from "./pages/Domains";
import Projects from "./pages/Projects";
import Activities from "./pages/Activities";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import Join from "./pages/Join";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <PageTitleManager />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="domains" element={<Domains />} />
          <Route path="projects" element={<Projects />} />
          <Route path="activities" element={<Activities />} />
          <Route path="events" element={<Activities />} />
          <Route path="schedule" element={<Activities />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Join />} />
          <Route path="join" element={<Join />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
