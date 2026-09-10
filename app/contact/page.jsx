import {
  BackgroundShapes,
  Footer,
  Navigation,
  PageEnhancements,
  SectionLabel,
} from "@/components";

export const metadata = {
  title: "Contact",
  description: "Contact Ahmed Atya to discuss a UI/UX design project.",
};

const contactDetails = [
  ["/assets/contact/row-frame/row-mail.svg", "Mail Us", "ah7mostafa@outlook.com"],
  ["/assets/contact/row-frame/row-call.svg", "Contact Us", "+20 1212811805"],
  ["/assets/contact/row-frame/row-location.svg", "Location", "El-Mansoura, Egypt"],
];

export default function ContactPage() {
  return (
    <>
      <link rel="stylesheet" href="/styles/contact.css" precedence="high" />
      <PageEnhancements />
      <BackgroundShapes variant="contact" />
      <Navigation active="Contact" />

      <section className="row-d row3 reveal-on-scroll reveal-up">
        <SectionLabel label="Contact info" className="card-a card-left" />
        <h1 className="row-subtitle2">Contact me to start working together</h1>
      </section>

      <section className="row4">
        <div className="col-left2 reveal-on-scroll reveal-left">
          <div className="col">
            {contactDetails.map(([icon, label, value]) => (
              <div className="row-g" key={label}>
                <div className="row-frame-left">
                  <img src={icon} className="arrow-right row-mail" alt="" aria-hidden="true" />
                </div>
                <div className="row-col">
                  <p className="row-text-product">{label}</p>
                  <p className="row-text-hero">{value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-bottom1">
            <h2 className="subtitle-hero">social media</h2>
            <div className="row-bottom">
              {[1, 2, 3, 4].map((number) => (
                <img src={`/assets/column-row/column-img-circle${number === 1 ? "" : number}.png`} className="img-circle" alt={`Social link ${number}`} key={number} />
              ))}
            </div>
          </div>
        </div>

        <form className="card4 reveal-on-scroll reveal-right reveal-delay-1">
          <h2 className="card-subtitle2">
            Let&apos;s Work <span className="sub-text">Together.</span>
          </h2>
          <div className="input-group">
            <input className="input-group-input-hero-header input-group-hero-header1" name="name" placeholder="Name" aria-label="Name" required />
            <input className="input-group-input-hero-header input-group-hero-header2" name="email" type="email" placeholder="Email" aria-label="Email" required />
          </div>
          <input className="card-input-hero1 text-gray input-black" name="subject" placeholder="Subject" aria-label="Subject" required />
          <textarea className="card-input-hero2 text-gray input-black" name="message" placeholder="Message" aria-label="Message" required />
          <button className="card-frame-bottom" type="submit">
            <svg className="message card-arrow-right2" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path
                d="M7 21 21 7M10 7h11v11"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="card-text2">Send Message</span>
          </button>
        </form>
      </section>

      <Footer className="column-e col-bottom2 reveal-on-scroll reveal-up" />
    </>
  );
}
