export default function ActionLink({
  text,
  icon = "/assets/card-circle/card-arrow-right.svg",
  className = "card-b",
  href,
}) {
  const content = (
    <>
      <div className="card-circle2">
        <img src={icon} className="message card-arrow-right" alt="" aria-hidden="true" />
      </div>
      <p className="card-text">{text}</p>
    </>
  );

  return href ? (
    <a href={href} className={`${className} card-link`}>
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
}
