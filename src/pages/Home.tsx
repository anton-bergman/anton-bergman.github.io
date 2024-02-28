import "./Home.scss";
import Card from "../components/Card";
import Header from "../layouts/Header";

import {
  PsychologyOutlined,
  CalculateOutlined,
  TerminalOutlined,
  TimelineOutlined,
  LogoDev,
  LinkedIn,
} from "@mui/icons-material";

const calcIconSize = (cardHeight: string) => {
  const cardHeightNoPX: string = cardHeight.slice(0, -2);
  const result = 1.55 * parseInt(cardHeightNoPX) - 168;

  return result;
};

const calcStrokeWidth = (cardHeight: string) => {
  const cardHeightNoPX: string = cardHeight.slice(0, -2);

  return 0.25 * parseInt(cardHeightNoPX) - 30;
};

const calcIconRight = (cardHeight: string) => {
  const cardHeightNoPX: string = cardHeight.slice(0, -2);

  //return -(0.22 * parseInt(cardHeightNoPX) - 28.2 + calcStrokeWidth(cardHeight));
  return -(0.1 * parseInt(cardHeightNoPX) - 28.2 + calcStrokeWidth(cardHeight));
};

const calcIconTop = (cardHeight: string) => {
  const cardHeightNoPX: string = cardHeight.slice(0, -2);

  //return -(0.225 * parseInt(cardHeightNoPX) - 10);
  return -(0.14 * parseInt(cardHeightNoPX) - 10);
};

const iconStyle = (cardHeight: string, cardColor: string) => ({
  position: "relative",
  transition: "0.6s ease-in-out",
  fontSize: calcIconSize(cardHeight),
  top: calcIconTop(cardHeight),
  right: calcIconRight(cardHeight),
  "& path": {
    stroke: cardColor, // Need to be same as background color
    strokeWidth: 0.8, // Customize the border thickness
  },
});

function Home() {
  return (
    <>
      <Header
        title="Hi. I'm Anton."
        position="top-page-header"
        description="A Computer Science and Software Engineer."
        descriptionSize="large"
      />

      <div className="cardsContainer">
        <Card
          cardTitle="CV"
          subTitle="CV &#8226; ANTON BERGMAN"
          cardHeight="350px"
          cardWidth="35%"
          cardColor="#e7b89c"
          iconComponent={
            <LogoDev className="icon" sx={iconStyle("350px", "#e7b89c")} />
          }
          cardLink="resume"
        />

        <Card
          cardTitle="LinkedIn"
          subTitle="PROFILE &#8226; ANTON BERGMAN"
          cardHeight="350px"
          cardWidth="55%"
          cardColor="#b7e0ff"
          iconComponent={
            <LinkedIn className="icon" sx={iconStyle("350px", "#b7e0ff")} />
          }
          cardLink="https://www.linkedin.com/in/-anton-bergman-/"
        />
      </div>

      <Header
        title="In Progress."
        position="mid-page-header"
        description="I am currently pursuing an M.Sc. in Computer Science and Engineering
      with a specialization in Artificial Intelligence and Machine Learning
      at Linköping University. Below I have listed my current courses."
        descriptionSize="small"
      />

      <div className="cardsContainer">
        <Card
          cardTitle="Artificial Intelligence"
          subTitle="TDDC17 &#8226; LINKÖPING UNIVERSITY"
          cardHeight="350px"
          cardWidth="55%"
          cardColor="#d095e5"
          iconComponent={
            <PsychologyOutlined
              className="icon"
              sx={iconStyle("350px", "#d095e5")}
            />
          }
          cardLink="https://studieinfo.liu.se/en/kurs/tddc17/ht-2018"
        />
        <Card
          cardTitle="Scientific Computing"
          subTitle="TANA21 &#8226; LINKÖPING UNIVERSITY"
          cardHeight="350px"
          cardWidth="35%"
          cardColor="#a3dcd4"
          iconComponent={
            <CalculateOutlined
              className="icon"
              sx={iconStyle("350px", "#a3dcd4")}
            />
          }
          cardLink="https://studieinfo.liu.se/en/kurs/tana21/ht-2018"
        />
      </div>
      <div className="cardsContainer">
        <Card
          cardTitle="Machine Learning"
          subTitle="TDDE01 &#8226; LINKÖPING UNIVERSITY"
          cardHeight="350px"
          cardWidth="35%"
          cardColor="#e7b89c"
          iconComponent={
            <TimelineOutlined
              className="icon"
              sx={iconStyle("350px", "#e7b89c")}
            />
          }
          cardLink="https://studieinfo.liu.se/en/kurs/tdde01/ht-2018"
        />

        <Card
          cardTitle="UI Programming"
          subTitle="TDDC73 &#8226; LINKÖPING UNIVERSITY"
          cardHeight="350px"
          cardWidth="55%"
          cardColor="#b7e0ff"
          iconComponent={
            <TerminalOutlined
              className="icon"
              sx={iconStyle("350px", "#b7e0ff")}
            />
          }
          cardLink="https://studieinfo.liu.se/en/kurs/tddc73"
        />
      </div>
    </>
  );
}

export default Home;
