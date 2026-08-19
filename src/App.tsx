import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SiteNav from "./components/SiteNav";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  // One global entrance trigger. Every .enter-up / .enter-down element
  // in the tree animates in on its own first paint once this class is
  // present on a shared ancestor — no per-page re-implementation needed.
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      document.documentElement.classList.add("is-ready");
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <ScrollToTop />
      <SiteNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
