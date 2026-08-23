import {
  ActionLink,
  BackgroundShapes,
  Footer,
  LogoMarquee,
  Navigation,
  PageEnhancements,
  ProjectCard,
  SectionLabel,
  Services,
  Testimonials,
  TestimonialsHeading,
} from "@/components";
import { projects } from "@/components/data";

export const metadata = { title: "Home" };

export default function HomePage() {
  return (
    <>
      <link rel="stylesheet" href="/styles/home.css" precedence="high" />
      <PageEnhancements />
      <BackgroundShapes variant="home" />

      <header className="header">
        <div className="header-group"><div className="ellipse header-ellipse" /></div>
        <img src="/assets/home/header-img.png" className="header-img" alt="Ahmed Atya" />
        <div className="ellipse header-circle" />
        <Navigation active="Home" />
        <div className="header-col">
          <div className="header-row-top">
            <div className="header-col-left">
              <SectionLabel label="who am i?" className="card-a card-top2" />
              <h2 className="header-subtitle">
                DESIGN IS THE LENS
                <br />
                THROUGH WHICH I <span className="sub-text">SEE </span>
                <br />
                <span className="sub-text">THE WORLD.</span>
              </h2>
            </div>
            <div className="header-col-right">
              <p className="header-text">
                I&apos;m Ahmed Atya, a UI/UX Designer with a background in Motion Graphics. I create
                user-friendly digital experiences for individuals and companies worldwide, combining
                creativity, clarity, and fast, smooth collaboration.
              </p>
              <ActionLink text="view Portfolio" className="card-b card4" href="/portfolio" />
            </div>
          </div>
          <h1 className="header-title title">AHMED ATYA</h1>
        </div>
      </header>

      <LogoMarquee />

      <h2 className="subtitle-hero-header1 subtitle1 reveal-on-scroll reveal-up">
        The products I design are a reflection of my thinking.
      </h2>

      <section className="row3">
        <div className="frame-left reveal-on-scroll reveal-left">
          <img src="/assets/home/group.svg" className="group" alt="Ahmed Atya monogram" />
        </div>
        <div className="col-right reveal-on-scroll reveal-right reveal-delay-1">
          <SectionLabel label="ABOUT ME" />
          <div className="column-a col1">
            <h2 className="column-subtitle1">
              I DESIGN PRODUCTS
              <br />
              THAT <span className="sub-text glass-pill">SOLVE PROBLEMS</span>, NOT
              <br />
              JUST VISUALS.
            </h2>
            <p className="column-text1">
              I design interfaces that turn complex problems into simple solutions. Every project is
              approached with clarity, creativity, and focus on the user&apos;s experience, delivering
              results that matter.
            </p>
          </div>
          <ActionLink text="More About Me" className="card-b frame7" href="/about" />
        </div>
      </section>

      <section className="col2">
        <div className="row-top2 row-top3">
          <div className="col3 reveal-on-scroll reveal-left">
            <SectionLabel label="My Projects" />
            <h2 className="subtitle-hero-header2">
              TAKE A CLOSER LOOK AT MY
              <br />
              COMPLETED PROJECTS
            </h2>
          </div>
          <ActionLink text="See More" className="card-b card5 reveal-on-scroll reveal-right reveal-delay-1" href="/portfolio" />
        </div>
        <div className="col4">
          <div className="row-a row-top4">
            <ProjectCard project={projects[0]} frameClass="frame1" />
            <ProjectCard project={projects[1]} frameClass="frame2" />
          </div>
          <div className="row-b row-bottom">
            <ProjectCard project={projects[2]} frameClass="frame3" />
            <ProjectCard project={projects[3]} frameClass="frame4" />
          </div>
        </div>
      </section>

      <section className="column-b col5 reveal-on-scroll reveal-left">
        <SectionLabel label="My Services" />
        <h2 className="column-subtitle2 subtitle1">
          I offer multiple services
          <br />
          guided by one clear vision
        </h2>
      </section>
      <Services />
      <TestimonialsHeading />
      <Testimonials />
      <Footer />
    </>
  );
}
