import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { siteConfig } from "../../config/siteConfig";
import useScrollSpy from "../../hooks/useScrollSpy";
import styles from "./Navbar.module.css";

const sectionIds = siteConfig.nav.map((n) => n.href.replace("#", ""));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          <a href="#hero" className={styles.logo}>
            {siteConfig.couple.partner1} & {siteConfig.couple.partner2}
          </a>

          <ul className={styles.links}>
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`${styles.link} ${
                    activeId === item.href.replace("#", "") ? styles.active : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {menuOpen &&
        createPortal(
          <div className={styles.mobileMenu}>
            <button
              className={`${styles.closeBtn}`}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <ul>
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={styles.mobileLink}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>,
          document.body
        )}
    </>
  );
}
