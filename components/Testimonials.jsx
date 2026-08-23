import { testimonialRows } from "./data";
import SectionLabel from "./SectionLabel";

function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card reveal-on-scroll reveal-up">
      <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
      <p className="testimonial-text">{testimonial.text}</p>
      <div className="user-info">
        <img src={testimonial.avatar} className="user-avatar" alt={testimonial.name} />
        <div className="user-details">
          <h3 className="user-name">{testimonial.name}</h3>
          <p className="user-title">{testimonial.title}</p>
        </div>
      </div>
    </article>
  );
}

export function Testimonials() {
  return (
    <div className="component-c component2 marquee-section reveal-on-scroll reveal-up">
      {testimonialRows.map((row) => (
        <div className={row.rowClass} key={row.rowClass}>
          {[0, 1].map((copy) => (
            <div className="marquee-content" key={copy} aria-hidden={copy === 1}>
              {row.testimonials.map((testimonial) => (
                <TestimonialCard testimonial={testimonial} key={`${testimonial.name}-${copy}`} />
              ))}
            </div>
          ))}
        </div>
      ))}
      <div className="component-frame-b component-frame2" />
      <div className="component-frame-b component-frame3" />
    </div>
  );
}

export function TestimonialsHeading() {
  return (
    <div className="column-d col7 reveal-on-scroll reveal-left">
      <SectionLabel label="What clients say?" />
      <h2 className="column-subtitle6 subtitle1">
        LEARN WHAT CLIENTS APPRECIATE
        <br />
        MOST ABOUT OUR DESIGN
      </h2>
    </div>
  );
}
