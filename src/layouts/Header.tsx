import "./Header.scss";
import styles from "../utils/_variables.module.scss";

interface HeaderProps {
  title: string;
  position: string;
  description?: string;
  descriptionSize?: string;
}

function Header({
  title,
  position,
  description,
  descriptionSize,
}: HeaderProps) {
  const padding =
    position === "top-page-header"
      ? "100px"
      : position === "mid-page-header"
      ? "50px"
      : "100px";

  const renderDesciption = () => {
    if (description) {
      switch (descriptionSize) {
        case "large":
          return (
            <h2
              className="description"
              style={{
                fontFamily: styles.titleFont,
                fontSize: styles.fontSizeSubTitle,
              }}
            >
              {description}
            </h2>
          );
        case "small":
          return (
            <p
              className="description"
              style={{
                fontFamily: styles.bodyFont,
                fontSize: styles.fontSizeBody,
              }}
            >
              {description}
            </p>
          );
        default:
          return (
            <h2
              className="description"
              style={{
                fontFamily: styles.titleFont,
                fontSize: styles.fontSizeSubTitle,
              }}
            >
              {description}
            </h2>
          );
      }
    }
    return <></>;
  };

  return (
    <div className="headerContainer" style={{ paddingTop: padding }}>
      <h1 className="headerTitle">{title}</h1>
      {renderDesciption()}
    </div>
  );
}

export default Header;
