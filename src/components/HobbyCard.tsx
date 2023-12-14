import { ReactNode } from "react";
import "./HobbyCard.scss";

interface HobbyCardProps {
  title: string;
  workplace: string;
  startDate: string;
  endDate?: string;
  description: string;
  width: string;
  iconBackgroundColor: string;
  icon: ReactNode;
}

function HobbyCard({
  title,
  workplace,
  startDate,
  endDate,
  description,
  width,
  icon,
  iconBackgroundColor,
}: HobbyCardProps) {
  return (
    <div className="hobbyCardContainer" style={{ width: width }}>
      <div className="topContainer">
        <div className="titleContainer">
          <div className="titleDiv">
            <h3 className="title">
              {title}
              &#160;&#160;&#160;&#160;
            </h3>
            <h4 className="title">
              {endDate ? startDate + "–" + endDate : startDate + "~"}
            </h4>
          </div>
          {/* <h3 className="title">
            {title}
            &#160;&#160;&#8226;&#160;&#160;
            {endDate ? startDate + "–" + endDate : startDate + "~"}
          </h3> */}
          <h4 className="workplace">{workplace}</h4>
        </div>
        <div className="iconCircle" style={{ background: iconBackgroundColor }}>
          {icon}
        </div>
      </div>

      <p className="description">{description}</p>
    </div>
  );
}

export default HobbyCard;
