import { services } from "./data";

export default function Services() {
  return (
    <div className="column-c col6 about-services-list">
      {services.map((service, index) => (
        <article
          className={`service-card ${index % 2 === 0 ? "reveal-left" : "reveal-right"} reveal-on-scroll`}
          key={service.number}
        >
          <div className="row-row-left1">
            <div className="row-row-left2">
              <p className="row-text1">{service.number}</p>
              <img src="/assets/row/column-elements.svg" className="row-elements" alt="" aria-hidden="true" />
            </div>
            <h2 className="row-subtitle1 subtitle2">{service.title}</h2>
          </div>
          <div className="row-row-right service-tags">
            {service.tags.map((tag) => (
              <span className="btn" key={tag}>
                <span className="icon-circle" />
                <span className="label-hero-header btn-label">{tag}</span>
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
