import React, { useEffect, useRef, useState } from "react";
import "./ProjectCard.scss";

import GitHubIcon from "@mui/icons-material/GitHub";

interface ProjectCardProps {
  projectImage: string;
  imageWidth: string;
  cardColor: string;
  hoverColor: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  projectLink: string;
}

function ProjectCard({
  projectImage,
  imageWidth,
  cardColor,
  hoverColor,
  title,
  shortDescription,
  longDescription,
  projectLink,
}: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const [color, setHovered] = useState<string>(cardColor);
  const handleHover = () => {
    setHovered(hoverColor);
  };
  const handleUnhover = () => {
    setHovered(cardColor);
  };

  const cardBackHeightRef = useRef<HTMLDivElement | null>(null);
  const cardFrontHeightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cardFrontHeightRef.current && cardBackHeightRef.current) {
      cardBackHeightRef.current.style.height = `${cardFrontHeightRef.current.offsetHeight}px`;
    }
  }, [isFlipped]);

  const openLink = () => {
    window.open(projectLink, "_blank");
  };

  return (
    <div className="container">
      <div
        className={isFlipped ? "card isFlipped" : "card"}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div ref={cardFrontHeightRef} className="cardFace cardFront">
          <div
            className="projectImageContainer"
            style={{ backgroundColor: cardColor }}
          >
            <img
              className="projectImage"
              src={projectImage}
              alt="Project."
              style={{ width: imageWidth }}
            />
          </div>
          <div className="projectInfo">
            <h2 className="projectTitle">{title}</h2>
            <p className="projectDescription">{shortDescription}</p>
          </div>
        </div>
        <div ref={cardBackHeightRef} className="cardFace cardBack">
          <div className="projectInfoBack">
            <h2 className="projectTitleBack">{title}</h2>
            <p className="projectDescriptionBack">{longDescription}</p>
          </div>

          <button
            className="githubButton"
            onMouseEnter={handleHover}
            onMouseLeave={handleUnhover}
            onClick={openLink}
            style={{ backgroundColor: color }}
          >
            View on <GitHubIcon sx={{ fontSize: 35 }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
