import { useEffect, useRef, useState } from "react";
import "./WorkplaceCard.scss";

import { PlaceOutlined, LaunchOutlined } from "@mui/icons-material/";

interface WorkplaceCardProps {
  jobTitle: string;
  workplace: string;
  startDate: string;
  endDate?: string;
  jobLocation: string;
  jobWebsite: string;
  jobDescription: string;
  jobLogo: string;
  logoAspectRatio: number;
  tools: Array<string>;
  openByDefault: boolean;
}

function WorkplaceCard({
  jobTitle,
  workplace,
  startDate,
  endDate,
  jobLocation,
  jobWebsite,
  jobDescription,
  jobLogo,
  logoAspectRatio,
  tools,
  openByDefault,
}: WorkplaceCardProps) {
  const [isVisible, setIsVisible] = useState<boolean>(openByDefault);
  const [height, setHeight] = useState<string>("0px");
  const [visibleCardHeight, setVisibleCardHeight] = useState<number>(0);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      //const cardHeight: number = descriptionRef.current.scrollHeight + 20;
      const cardHeight: number = descriptionRef.current.scrollHeight + 20;

      setHeight(isVisible ? `${cardHeight}px` : "0px");

      if (isVisible) {
        setVisibleCardHeight(cardHeight);
        //console.log("visible card height: " + cardHeight);
      }
    }
  }, [isVisible]);

  return (
    <div className="jobCardContainer">
      <div className="titleContainer">
        <p className="title">
          {jobTitle} @ {workplace}
        </p>
        <div className="dateContainer">
          <p className="jobDuration">
            {endDate ? startDate + "\u2013" + endDate : startDate + "~"}
          </p>
          <button
            className="expandButton"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? "\u2212" : "\u002B"}
          </button>
        </div>
      </div>
      <div
        className={`descriptionContainer ${isVisible ? "visible" : ""}`}
        ref={descriptionRef}
        style={{
          maxHeight: height,
        }}
      >
        <div className="textContainer">
          <div className="topContainer">
            <p className="jobLocation">
              <PlaceOutlined className="locationIcon" />
              {jobLocation}
            </p>
            <div className="linkContainer">
              <LaunchOutlined className="websiteIcon" />
              <a
                className="jobWebsite"
                href={"https://" + jobWebsite}
                target="_blank"
                rel="noreferrer"
              >
                {jobWebsite}
              </a>
            </div>
          </div>
          <p className="jobDescription">{jobDescription}</p>

          <div className="toolsContainer">
            {tools.map((tool: string, i: number) => (
              <p key={`${tool}-${i}`} className="tool">
                {tool}
              </p>
            ))}
          </div>
        </div>
        <img
          className="jobLogo"
          style={{
            aspectRatio: logoAspectRatio,
            marginTop: `calc(${visibleCardHeight}px / 2 - 25px)`,
          }}
          src={jobLogo}
          alt="Job."
        />
      </div>
    </div>
  );
}

export default WorkplaceCard;
