"use client";

import { useEffect, useId, useRef } from "react";

export default function ProjectCard({ project, frameClass, revealClass = "reveal-up" }) {
  const dialogRef = useRef(null);
  const titleId = useId();
  const dialogId = useId();

  const openDialog = () => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      document.body.classList.add("project-modal-open");
    }
  };

  const closeDialog = () => dialogRef.current?.close();

  useEffect(() => {
    const dialog = dialogRef.current;
    const unlockPage = () => document.body.classList.remove("project-modal-open");

    dialog?.addEventListener("close", unlockPage);
    return () => {
      dialog?.removeEventListener("close", unlockPage);
      unlockPage();
    };
  }, []);

  const details = [
    ["Client", project.client || "NABAA"],
    ["Work Duration", project.duration || "14 DAYS"],
    ["Category", project.category || "MOBILE APP"],
    ["Start Date", project.startDate || "18 FEBRUARY 2025"],
  ];

  return (
    <>
      <article
        className={`component-b project-card-trigger ${frameClass} reveal-on-scroll ${revealClass}`.trim()}
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-controls={dialogId}
        onClick={openDialog}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openDialog();
          }
        }}
      >
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

      <dialog
        id={dialogId}
        ref={dialogRef}
        className="project-dialog"
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
      >
        <button className="project-dialog__close" type="button" onClick={closeDialog} aria-label="Close project details">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 5 19 19M19 5 5 19" />
          </svg>
        </button>

        <div className="project-dialog__panel">
          <h2 className="project-dialog__title" id={titleId}>
            {project.headline || `DESIGNED AND BUILT THE ${project.title.toUpperCase()}`}
          </h2>

          <dl className="project-dialog__details">
            {details.map(([label, value]) => (
              <div className="project-dialog__detail" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <img
            src={project.detailImage || project.image}
            className="project-dialog__image"
            alt={`${project.title} project preview`}
          />
        </div>
      </dialog>
    </>
  );
}
