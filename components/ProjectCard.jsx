export default function ProjectCard({ project, frameClass, revealClass = "reveal-up" }) {
  return (
    <article className={`component-b ${frameClass} reveal-on-scroll ${revealClass}`.trim()}>
      <img src={project.image} className="component-product-img" alt={project.title} />
      <div className="component-row-bottom">
        <div className="component-col">
          <h2 className="component-subtitle">{project.title}</h2>
          <p className="component-text-product">{project.date}</p>
        </div>
        <div className="component-row-right">
          <p className="component-text-hero">See More</p>
          <img
            src="/assets/component-row/component-arrow-right.svg"
            className="component-arrow-right"
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>
    </article>
  );
}
