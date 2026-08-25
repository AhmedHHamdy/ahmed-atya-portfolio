import { logos } from "./data";

const logosPerGroup = Array.from({ length: 8 }, () => logos).flat();

export default function LogoMarquee({ className = "component-a" }) {
  return (
    <div className={className} aria-label="Client logos">
      <div className="logos-track">
        {Array.from({ length: 2 }, (_, group) => (
          <div className="logos-group" key={group} aria-hidden={group > 0}>
            {logosPerGroup.map((logo, index) => (
              <img
                src={logo}
                className="logo-item"
                alt={group === 0 && index < logos.length ? `Client logo ${index + 1}` : ""}
                key={`${logo}-${index}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
