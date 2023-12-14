import React, { useEffect, useState } from "react";
import "./TimeLineItem.scss";
import { monthDiff } from "../utils/sharedFunctions";
import { CONTENT_WIDTH } from "./TimeLine";
import styles from "../utils/_variables.module.scss";

interface TimeLineItemProps {
  workplace: string;
  jobTitle: string;
  startDate: string;
  endDate?: string;
  totalTimeLineMonths: number;
}

function TimeLineItem({
  workplace,
  jobTitle,
  startDate,
  endDate,
  totalTimeLineMonths,
}: TimeLineItemProps) {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const containerWidth: number =
    (parseFloat(CONTENT_WIDTH) / 100) * windowWidth;
  const firstItemInTimeLine: boolean =
    totalTimeLineMonths === monthDiff(new Date(startDate), new Date());
  const ITEM_PADDING: number = 10;

  const itemWidth = (): string => {
    const monthsOfEmployment: number = endDate
      ? monthDiff(new Date(startDate), new Date(endDate))
      : monthDiff(new Date(startDate), new Date());

    const percentageOfTotalTimeline: number =
      monthsOfEmployment / totalTimeLineMonths;
    const width: number = Math.round(
      containerWidth * percentageOfTotalTimeline - 2 * ITEM_PADDING
    );

    return width.toString() + "px";
  };

  const rightMargin = (): string => {
    const numOfMonthsAgo = endDate
      ? monthDiff(new Date(endDate), new Date())
      : 0;

    const percentageOfTotalTimeline: number =
      numOfMonthsAgo / totalTimeLineMonths;
    const margin: number = Math.round(
      containerWidth * percentageOfTotalTimeline
    );

    return margin.toString() + "px";
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="timeLineItem"
      style={
        firstItemInTimeLine
          ? {
              width: itemWidth(),
              //padding: ITEM_PADDING.toString() + "px",
              alignSelf: "center",
            }
          : {
              width: itemWidth(),
              //padding: ITEM_PADDING.toString() + "px",
              marginRight: rightMargin(),
            }
      }
    >
      <div className="jobContainer">
        <p className="workplace">{workplace}</p>
        <p className="jobTitle">{jobTitle}</p>
      </div>
      <p className="workDuration">
        {endDate ? startDate + "–" + endDate : startDate + "~"}
      </p>
    </div>
  );
}

export default TimeLineItem;
