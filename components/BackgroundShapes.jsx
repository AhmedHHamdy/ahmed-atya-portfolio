export default function BackgroundShapes({ variant = "default" }) {
  const shapes = variant === "home"
    ? ["ellipse1", "ellipse2", "ellipse3", "circle1", "ellipse4", "circle2", "circle3", "ellipse5"]
    : variant === "about"
      ? ["ellipse1", "ellipse2", "ellipse3", "circle1", "circle2", "circle3", "circle4"]
      : variant === "contact"
        ? ["circle1", "circle2", "circle3", "circle4"]
        : ["circle1", "circle2", "circle3", "ellipse1"];

  return shapes.map((shape) => <div className={`ellipse ${shape}`} aria-hidden="true" key={shape} />);
}
