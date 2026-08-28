import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useToggleMode } from "../context/ModeToggle";
import { EDGE, NAV_TOP } from "../lib/theme";
import BlobbleToggle from "./BlobbleToggle";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
];

export default function SiteNav() {

  const [menuOpen, setMenuOpen] = useState(false);
  const {isOn} = useToggleMode();

  return (
    <header className={`enter-down ${isOn ? "bg-[#EADDCA]" : "bg-mist/75" } fixed inset-x-0 top-0 z-50 border-b border-ink/5 backdrop-blur-md`}>
      <nav
        className="flex justify-between items-center md:justify-between"
        style={{
          paddingTop: NAV_TOP,
          paddingBottom: "1.1rem",
          paddingLeft: EDGE,
          paddingRight: EDGE,
        }}
      >
        <div className="md:hidden"><BlobbleToggle  /></div>

        <Link
          to="/"
          aria-label="Sudhanshu — home"
          className="flex items-center md:gap-3 focus-visible:outline-none"
        >
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path
              d="M23 8H12.5C10.0147 8 8 10.0147 8 12.5C8 14.9853 10.0147 17 12.5 17H19.5C21.9853 17 24 19.0147 24 21.5C24 23.9853 21.9853 26 19.5 26H9"
              stroke="#0B1220"
              strokeWidth="2.4"
              strokeLinecap="square"
            />
            <path d="M17 12L23 6" stroke="#0B1220" strokeWidth="2.4" strokeLinecap="square" />
            <path d="M15 20L9 26" stroke="#0B1220" strokeWidth="2.4" strokeLinecap="square" />
          </svg>
          <span className="font-sans text-[1.02rem] font-medium tracking-[-0.02em] text-ink">
            Sudhanshu
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-9 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink/60">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `inline-flex min-h-11 items-center transition-colors hover:text-ink ${
                    isActive ? "text-ink" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button className="text-2xl self-end text-black md:hidden ml-3" onClick={() => setMenuOpen(!menuOpen)} >
            <FontAwesomeIcon  icon={menuOpen ? faXmark : faBars}  />
        </button>

        {/* <a
          onClick={TOPMATE_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden cursor-pointer md:inline-flex min-h-11 items-center rounded-full bg-ink px-6 font-sans text-[0.85rem] font-medium text-white transition-transform hover:scale-[1.03]"
        >
          <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-glass" />
          Let&rsquo;s talk
        </a> */}

        <div className="hidden md:flex font-sans text-[1.02rem] font-medium">Spidy-mode:&ensp;<BlobbleToggle /></div>
      </nav>

        {/* mobile menu below */}
        <motion.div initial={false}  animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0, }} className="md:hidden" >
        <ul className="flex flex-col md:hidden items-center font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink/60">
          {NAV_LINKS.map((link) => (
            <li key={link.to} onClick={() => setMenuOpen(!menuOpen)}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `inline-flex min-h-6 md:min-h-11 items-center transition-colors hover:text-ink ${
                    isActive ? "text-ink" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        </motion.div>
      </header>
  );
}
