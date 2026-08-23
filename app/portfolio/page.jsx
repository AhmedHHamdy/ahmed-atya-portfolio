import {
  BackgroundShapes,
  Footer,
  Navigation,
  PageEnhancements,
  ProjectCard,
  SectionLabel,
  Testimonials,
  TestimonialsHeading,
} from "@/components";
import { projects } from "@/components/data";

export const metadata = {
  title: "Portfolio",
  description: "Selected UI/UX projects designed by Ahmed Atya.",
};

export default function PortfolioPage() {
  return (
    <>
      <link rel="stylesheet" href="/styles/portfolio.css" precedence="high" />
      <PageEnhancements />
      <BackgroundShapes />
      <Navigation active="Portfolio" />

      <section className="row-d row3 reveal-on-scroll reveal-up">
        <SectionLabel label="My Projects" className="card-a card-left" />
        <h1 className="row-subtitle2">
          TAKE A CLOSER LOOK AT MY
          <br />
          COMPLETED PROJECTS
        </h1>
      </section>

      <section className="col1">
        <div className="row-a row-top2">
          <ProjectCard project={projects[0]} frameClass="frame1" />
          <ProjectCard project={projects[1]} frameClass="frame2" />
        </div>
        <div className="row-b row4">
          <ProjectCard project={projects[2]} frameClass="frame3" />
          <ProjectCard project={projects[3]} frameClass="frame4" />
        </div>
        <div className="row-a row-bottom">
          <ProjectCard project={projects[0]} frameClass="frame1" />
          <ProjectCard project={projects[1]} frameClass="frame2" />
        </div>
      </section>

      <TestimonialsHeading />
      <Testimonials />
      <Footer className="column-e col3 reveal-on-scroll reveal-up" />
    </>
  );
}
