import {
  ActionLink,
  BackgroundShapes,
  Footer,
  LogoMarquee,
  Navigation,
  PageEnhancements,
  SectionLabel,
  Services,
  Testimonials,
  TestimonialsHeading,
} from "@/components";

export const metadata = {
  title: "About",
  description: "Learn about Ahmed Atya's UI/UX design background, services, and experience.",
};

const experience = [
  ["Product Designer", "Business Building", "March 2025 - present"],
  ["UI/UX Designer", "Techno Masr", "October 2024 - March 2025"],
  ["UI/UX Designer", "Awamer Al Shabaka", "June 2023 - August 2024"],
  ["Motion Graphics", "Mihad", "December 2022 - March 2023"],
  ["Motion Graphics", "Serv5", "April 2022 - December 2022"],
];

export default function AboutPage() {
  return (
    <>
      <link rel="stylesheet" href="/styles/about.css" precedence="high" />
      <PageEnhancements />
      <BackgroundShapes variant="about" />
      <Navigation active="About" />

      <section className="row-d row3 reveal-on-scroll reveal-up">
        <SectionLabel label="ABOUT ME" className="card-a card-left card-top2" />
        <h1 className="row-subtitle2">
          THE PRODUCTS I DESIGN ARE A
          <br />
          REFLECTION OF MY THINKING.
        </h1>
      </section>

      <section className="row4">
        <div className="group-left reveal-on-scroll reveal-left">
          <div className="group">
            <div className="rect" />
            <img src="/assets/about-me/img.png" className="img" alt="Ahmed Atya" />
          </div>
          <div className="card4">
            <p className="card-text-top">Repeat Clients</p>
            <img src="/assets/about-me/card-group.svg" className="card-group" alt="" aria-hidden="true" />
            <h2 className="card-subtitle2">85%</h2>
          </div>
        </div>
        <div className="col-right reveal-on-scroll reveal-right reveal-delay-1">
          <div className="column-a col1">
            <div className="column-group">
              <h2 className="column-subtitle1">
                I design products
                <br />
                that <span className="sub-text glass-pill">solve problems</span>, not
                <br />
                just visuals.
              </h2>
            </div>
            <p className="column-text1">
              I design interfaces that turn complex problems into simple solutions. Every project is
              approached with clarity, creativity, and focus on the user&apos;s experience, delivering
              results that matter.
            </p>
          </div>
          <ActionLink text="Download CV" className="card-b card5" />
        </div>
      </section>

      <LogoMarquee className="component-a component1" />

      <section className="column-b about-services-head reveal-on-scroll reveal-left">
        <SectionLabel label="My Services" />
        <h2 className="column-subtitle2 subtitle1">
          I offer multiple services guided by one clear vision
        </h2>
      </section>
      <Services />

      <section className="col4">
        <div className="col5">
          <div className="row-d row-top2 reveal-on-scroll reveal-up">
            <SectionLabel label="My Experience" className="card-a card-left" />
            <h2 className="row-subtitle2">Contributed to building digital products with</h2>
          </div>
          <div className="col6">
            {experience.map(([role, company, date], index) => (
              <article
                className={`${index === experience.length - 1 ? "row-bottom" : "row-e"} reveal-on-scroll reveal-up`}
                key={`${company}-${date}`}
              >
                <div className="column-f">
                  <p className="column-text3">{role}</p>
                  <h3 className="column-subtitle8">{company}</h3>
                </div>
                <div className={`row-f ${index === experience.length - 1 ? "row-right2" : "row-right"}`}>
                  <p className="row-text2">{date}</p>
                  <div className="row-circle">
                    <img src="/assets/component-row/component-arrow-right.svg" className="row-arrow-right" alt="" aria-hidden="true" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsHeading />
      <Testimonials />
      <Footer />
    </>
  );
}
