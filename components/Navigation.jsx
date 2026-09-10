"use client";

import { useEffect, useState } from "react";
import { navItems } from "./data";

export default function Navigation({ active }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

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

      <nav className={`mobile-site-nav ${isOpen ? "is-open" : ""}`.trim()} aria-label="Mobile navigation">
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
            {isOpen ? (
              <svg className="mobile-site-nav__close-icon" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3.5 3.5 14.5 14.5M14.5 3.5 3.5 14.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="mobile-site-nav__menu-icon" width="18" height="16" viewBox="0 0 18 16" fill="none" aria-hidden="true">
                <path
                  d="M10.75 14C11.1642 14 11.5 14.3358 11.5 14.75C11.5 15.1642 11.1642 15.5 10.75 15.5L0.75 15.5C0.335786 15.5 -3.62117e-08 15.1642 0 14.75C3.62117e-08 14.3358 0.335786 14 0.75 14L10.75 14ZM16.75 7C17.1642 7 17.5 7.33579 17.5 7.75C17.5 8.16421 17.1642 8.5 16.75 8.5L0.75 8.5C0.335786 8.5 -3.21882e-08 8.16421 0 7.75C3.21882e-08 7.33579 0.335786 7 0.75 7L16.75 7ZM16.75 0C17.1642 4.07382e-08 17.5 0.335787 17.5 0.75C17.5 1.16421 17.1642 1.5 16.75 1.5L6.75 1.5C6.33579 1.5 6 1.16421 6 0.75C6 0.335786 6.33579 -4.07382e-08 6.75 0L16.75 0Z"
                  fill="currentColor"
                />
              </svg>
            )}
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
          <div className="mobile-site-nav__details">
            <a href="mailto:ah7mostafa@outlook.com" className="mobile-site-nav__contact">
              <span className="mobile-site-nav__contact-icon">
                <img src="/assets/contact/row-frame/row-mail.svg" alt="" aria-hidden="true" />
              </span>
              <span>
                <small>Mail Us</small>
                ah7mostafa@outlook.com
              </span>
            </a>
            <a href="tel:+201212811805" className="mobile-site-nav__contact">
              <span className="mobile-site-nav__contact-icon">
                <img src="/assets/contact/row-frame/row-call.svg" alt="" aria-hidden="true" />
              </span>
              <span>
                <small>Contact Us</small>
                +20 1212811805
              </span>
            </a>
            <p className="mobile-site-nav__social-title">Social Media</p>
            <div className="mobile-site-nav__socials">
              {[1, 2, 3, 4].map((number) => (
                <img
                  src={`/assets/column-row/column-img-circle${number === 1 ? "" : number}.png`}
                  alt={`Social link ${number}`}
                  key={number}
                />
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
