"use client";

import { useState } from "react";
import { navItems } from "./data";

export default function Navigation({ active }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="/" className="desktop-nav-brand">
          <img src="/assets/home/group.svg" className="desktop-nav-logo" alt="Ahmed Atya logo" />
          <span className="desktop-nav-name">AHMED ATYA</span>
        </a>
        <div className="desktop-nav-links">
          {navItems.map(([label, href]) => (
            <a
              href={href}
              className={`desktop-nav-link ${active === label ? "is-active" : ""}`.trim()}
              key={label}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      <nav className="mobile-site-nav" aria-label="Mobile navigation">
        <div className="mobile-site-nav__bar">
          <a href="/" className="mobile-site-nav__brand">
            <img src="/assets/home/group.svg" alt="" />
            <span>AHMED ATYA</span>
          </a>
          <button
            type="button"
            className="mobile-site-nav__toggle"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? "×" : "☰"}
          </button>
        </div>
        <div className={`mobile-site-nav__panel ${isOpen ? "is-open" : ""}`.trim()}>
          <div className="mobile-site-nav__links">
            {navItems.map(([label, href]) => (
              <a href={href} className={active === label ? "is-active" : ""} key={label}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
