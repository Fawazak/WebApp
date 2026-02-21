import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./navbar.css";

const NAV_ITEMS = [
  { label: "Home",      to: "intro",       offset: -100 },
  { label: "About",     to: "about",       offset: -100 },
  { label: "Skills",    to: "skills",      offset: -100 },
  { label: "Portfolio", to: "projects",    offset: -50 },
  { label: "Contact",   to: "contactPage", offset: -100 },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    setLight((prev) => {
      document.documentElement.classList.toggle("light", !prev);
      return !prev;
    });
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="menu">
        {NAV_ITEMS.map(({ label, to, offset }) => (
          <Link
            key={to}
            activeClass="active"
            to={to}
            spy={true}
            smooth={true}
            offset={offset}
            duration={800}
            className="item"
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Theme toggle */}
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {light ? "🌙 Dark" : "☀️ Light"}
      </button>

      {/* Mobile hamburger */}
      <button className="mob-menu-btn" onClick={() => setShowMenu(!showMenu)} aria-label="Toggle menu">
        <span className={`burger ${showMenu ? "open" : ""}`} />
      </button>

      {/* Mobile dropdown */}
      <div className={`mob-dropdown ${showMenu ? "show" : ""}`}>
        {NAV_ITEMS.map(({ label, to, offset }) => (
          <Link
            key={to}
            activeClass="active"
            to={to}
            spy={true}
            smooth={true}
            offset={offset}
            duration={800}
            className="mob-item"
            onClick={() => setShowMenu(false)}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;