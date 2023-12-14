import { ReactNode } from "react";
import "./Card.scss";
import { BACKEND_URL } from "../utils/_variables";

interface CardProps {
  cardTitle: string;
  subTitle: string;
  cardHeight: string;
  cardWidth: string;
  cardColor: string;
  iconComponent: ReactNode;
  cardLink?: string;
}

function Card({
  cardTitle,
  subTitle,
  cardHeight,
  cardWidth,
  cardColor,
  iconComponent,
  cardLink,
}: CardProps) {
  const openLink = () => {
    window.open(cardLink, "_blank");
  };

  const handleResume = () => {
    // Make a GET request to the server to download the PDF resume
    fetch(BACKEND_URL + "/resume", { method: "GET" })
      .then((response) => response.blob())
      .then((blob) => {
        // Create a URL to the blob and trigger a download in the browser
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.target = "_blank";
        link.rel = "noreferrer";
        link.click();
      })
      .catch((error) => console.error(error));
  };
  return (
    <div
      className="cardContainer"
      onClick={cardLink === "resume" ? handleResume : openLink}
      style={{
        height: cardHeight,
        width: cardWidth,
        background: cardColor,
      }}
    >
      <div className="titleContainer">
        <p>{subTitle}</p>
        <h3>{cardTitle}</h3>
      </div>
      {iconComponent}
    </div>
  );
}

export default Card;
