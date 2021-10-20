import style from "./typography.module.scss";

export const Desc = ({ text, classList }) => (
  <p className={`${style.desc} ${classList}`}>{text}</p>
);

export const Heading = ({ text, classList = "", variant = "h1" }) => {
  if (variant === "h1") {
    return <h1 className={`${style.heading} ${classList}`}>{text}</h1>;
  }

  if (variant === "h2") {
    return <h2 className={`${style.heading} ${classList}`}>{text}</h2>;
  }

  if (variant === "h3") {
    return <h3 className={`${style.heading} ${classList}`}>{text}</h3>;
  }

  if (variant === "h4") {
    return <h4 className={`${style.heading} ${classList}`}>{text}</h4>;
  }

  if (variant === "h5") {
    return <h5 className={`${style.heading} ${classList}`}>{text}</h5>;
  }

  if (variant === "h6") {
    return <h6 className={`${style.heading} ${classList}`}>{text}</h6>;
  }

  return <h1 className={`${style.heading} ${classList}`}>{text}</h1>;
};
