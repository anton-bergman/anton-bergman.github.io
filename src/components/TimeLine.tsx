import "./TimeLine.scss";
import TimeLineItem from "./TimeLineItem";
import { monthDiff } from "../utils/sharedFunctions";

export const CONTENT_WIDTH = "60%";

function TimeLine() {
  const START_DATE: Date = new Date("AUG 2020");
  const END_DATE: Date = new Date(); // current date
  const numberOfMonths = monthDiff(START_DATE, END_DATE);

  return (
    <div className="timeLineContainer" style={{ width: CONTENT_WIDTH }}>
      <TimeLineItem
        workplace="Linköping University"
        jobTitle="Master's Degree"
        startDate="AUG 2023"
        totalTimeLineMonths={numberOfMonths}
      />
      <TimeLineItem
        workplace="Axis"
        jobTitle="Software Intern"
        startDate="JUN 2023"
        endDate="AUG 2023"
        totalTimeLineMonths={numberOfMonths}
      />

      {/* <TimeLineItem
        workplace="Kårallen"
        jobTitle="Day Manager"
        startDate="AUG 2022"
        endDate="JUN 2023"
        totalTimeLineMonths={numberOfMonths}
      /> */}

      {/* <TimeLineItem
        workplace="Personalkollen"
        jobTitle="Softare Dev"
        startDate="JAN 2022"
        endDate="JUN 2023"
        totalTimeLineMonths={numberOfMonths}
      /> */}

      <TimeLineItem
        workplace="D-Group"
        jobTitle="Werk"
        startDate="AUG 2021"
        endDate="JUN 2022"
        totalTimeLineMonths={numberOfMonths}
      />

      <TimeLineItem
        workplace="Linköping University"
        jobTitle="Bachelor's Degree"
        startDate="AUG 2020"
        endDate="JUN 2023"
        totalTimeLineMonths={numberOfMonths}
      />

      {/* <TimeLineItem
        workplace="Linköping University"
        jobTitle="Student"
        startDate="AUG 2020"
        totalTimeLineMonths={numberOfMonths}
      /> */}
    </div>
  );
}

export default TimeLine;
