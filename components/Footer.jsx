"use client";

import ActionLink from "./ActionLink";
import { navItems } from "./data";

export default function Footer({ className = "column-e col8 reveal-on-scroll reveal-up" }) {
  return (
    <footer className={className}>
      <div className="column-row6">
        <h2 className="column-subtitle7">
          LET&apos;S DISCUSS YOUR
          <br />
          PROJECT AND GOALS
        </h2>
        <ActionLink
          text="Contact US"
          icon="/assets/card-circle/card-message.svg"
          className="card-b card3"
          href="/contact"
        />
      </div>
      <div className="column-row7">
        <div className="column-col-left">
          <p className="column-text-hero6">QUICK LINKS</p>
          <div className="column-links">
            {navItems.map(([label, href]) => (
              <a href={href} className="column-text-a" key={label}>{label}</a>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="circle-frame circle-frame1"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <svg className="footer-arrow-up" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <path
              d="M14 23V5M7.5 11.5 14 5l6.5 6.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="column-row-right4">
          <p className="column-text-hero7">Social Media</p>
          <div className="column-row8">
            {[1, 2, 3, 4].map((number) => (
              <img
                src={`/assets/column-row/column-img-circle${number === 1 ? "" : number}.png`}
                className="column-img-circle"
                alt={`Social link ${number}`}
                key={number}
              />
            ))}
          </div>
        </div>
      </div>
      <h2 className="column-title title">AHMED ATYA</h2>
    </footer>
  );
}
