import { logos } from "./data";

export default function LogoMarquee({ className = "component-a" }) {
  return (
    <div className={className} aria-label="Client logos">
      <div className="logos-track">
        {Array.from({ length: 16 }, (_, group) => (
          <div className="logos-group" key={group} aria-hidden={group > 0}>
            {logos.map((logo, index) => (
              <img
                src={logo}
                className="logo-item"
                alt={group === 0 ? `Client logo ${index + 1}` : ""}
                key={logo}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
