import React from "react";
import "./Work.scss";
import Header from "../layouts/Header";
import HobbyCard from "../components/HobbyCard";
import WorkplaceCard from "../components/WorkplaceCard";

import axisLogo from "../assets/axisLogo.webp";
import personalkollenLogo from "../assets/personalkollenLogo.webp";

import personalkollenImage from "../assets/projects/personalkollen.webp";
import pacmanImage from "../assets/projects/pacman.webp";
import paymentWidgetImage from "../assets/projects/interactionalPaymentComponent.webp";
import gitTrendImage from "../assets/projects/gitTrendApp.webp";
import ctfImage from "../assets/projects/ctfImage.webp";
import personalWebsiteImage from "../assets/projects/personalWebsiteImage.webp";

import {
  CelebrationOutlined,
  HomeOutlined,
  LocalBarOutlined,
} from "@mui/icons-material";
import ProjectCard from "../components/ProjectCard";

function Work() {
  const iconStyle = (iconColor: string) => ({
    fontSize: "2.2rem",
    "& path": {
      color: iconColor,
      //stroke: cardColor, // Need to be same as background color
      //strokeWidth: 0.8, // Customize the border thickness
    },
  });

  return (
    <>
      <Header
        title="Work."
        position="top-page-header"
        description="My professional journey through past experiences and workplaces."
        descriptionSize="small"
      />

      <WorkplaceCard
        jobTitle="Software Dev/Intern"
        workplace="Axis Communications"
        startDate="JUN 2023"
        endDate="AUG 2023"
        jobLocation="Linköping, Sweden"
        jobWebsite="axis.com"
        jobLogo={axisLogo}
        logoAspectRatio={1280 / 461}
        jobDescription="During my summer internship at Axis Communications, 
        I developed a Monitoring system designed for officers utilizing 
        body cameras. Collaborating with a skilled team, I gained practical experience 
        and insights into the intricacies of developing cutting-edge solutions within 
        a leading technology."
        tools={["TypeScript", "React", "Python", "Cosmos DB"]}
        openByDefault={true}
      />

      <WorkplaceCard
        jobTitle="Bachelor Thesis"
        workplace="Personalkollen"
        startDate="JAN 2023"
        endDate="JUN 2023"
        jobLocation="Linköping, Sweden"
        jobWebsite="personalkollen.se"
        jobLogo={personalkollenLogo}
        logoAspectRatio={800 / 214}
        jobDescription="Collaborated with Personalkollen as a Software Developer, 
        leading the development of a CRM system aimed at enhancing customer service. 
        Played a key role in designing and implementing solutions, designed to enchange
        the operational efficiency of customer support within the organization."
        tools={["Javascript", "React", "Python", "Django", "Postgresql"]}
        openByDefault={false}
      />

      <Header
        title="Projects."
        position="mid-page-header"
        description="A collection of my diverse and innovative personal projects."
        descriptionSize="small"
      />

      <div className="projectCardContainer">
        <ProjectCard
          projectImage={personalWebsiteImage}
          imageWidth={"300px"}
          cardColor="#b9e9b9"
          hoverColor="#8ac78a"
          title="Personal website"
          shortDescription="My personal website, built with React to showcases my software 
          engineering skills and projects."
          longDescription="Developed a personal portfolio website using React, TypeScript, and 
          NodeJS Express. Featuring diverse projects, this platform demonstrates my technical 
          expertise and passion for innovation in the field."
          projectLink="https://github.com/anton-bergman"
        />

        <ProjectCard
          projectImage={personalkollenImage}
          imageWidth={"300px"}
          cardColor="#b7e0ff"
          hoverColor="#a6cdf7"
          title="Bachelor Thesis"
          shortDescription="An open source platform for customer service details and tracks
              statistics for better CRM insights."
          longDescription="A open source software tool that simplifies post-service
              documentation with a form for errand details and tracks statistics
              like errand categories and frequency for informed business
              decisions."
          projectLink="https://github.com/PUM-05"
        />

        <ProjectCard
          projectImage={pacmanImage}
          imageWidth={"300px"}
          cardColor="#d095e5"
          hoverColor="#aa6bcf"
          title="Pacman"
          shortDescription="A Java-based Pac-Man game, refining Java skills through 
        game development techniques like OOP. "
          longDescription="Created a Java-based Pac-Man game, showcasing
         proficiency in Java programming, as well as expertise in game development
          principles such as object-oriented programming, event handling, and collision
           detection."
          projectLink="https://github.com/anton-bergman/pacman"
        />

        <ProjectCard
          projectImage={gitTrendImage}
          imageWidth={"150px"}
          cardColor="#e7b89c"
          hoverColor="#d89f7b"
          title="gitTrend"
          shortDescription="
          Flutter GitTrend app: discover top GitHub repos and explore details within the app."
          longDescription="Created a Flutter app, GitTrend, displaying top trending GitHub 
          repositories, offering sorting by stars, language, and creation date, with in-app 
          access to detailed repo features."
          projectLink="https://github.com/anton-bergman"
        />

        <ProjectCard
          projectImage={paymentWidgetImage}
          imageWidth={"300px"}
          cardColor="#ffb6c1"
          hoverColor="#ff9aa6"
          title="Interact Pay-Widget"
          shortDescription="A Flutter payment widget for user 
          interaction and ease of use in mobile applications."
          longDescription="Developed a dynamic interactional Flutter payment component 
          to enable intuitive and engaging payment interactions within mobile applications, 
          enhancing user experience and functionality."
          projectLink="https://github.com/anton-bergman"
        />

        <ProjectCard
          projectImage={ctfImage}
          imageWidth={"270px"}
          cardColor="#a3dcd4"
          hoverColor="#8bc6bd"
          title="Capture the flag"
          shortDescription="
          Created a captivating Capture the Flag game in Python with Pygame, highlighting 
          gameplay and design."
          longDescription="Developed an immersive Capture the Flag game using Python with 
          Pygame, showcasing strategic gameplay, dynamic challenges, and interactive features. 
          Leveraged Python's versatility and Pygame's graphical capabilities to create an 
          engaging gaming experience."
          projectLink="https://github.com/anton-bergman/capture-the-flag"
        />
      </div>

      <Header
        title="Extracurriculars."
        position="mid-page-header"
        description="In addition to my studies, I have devoted myself to various 
        extracurricular activities throughout my tenure at Linköping University."
        descriptionSize="small"
      />

      <div className="extraCardsContainer">
        <div className="card1">
          <HobbyCard
            title="D-Group"
            workplace="Datateknologsektionen"
            startDate="JUN 2021"
            endDate="JUN 2022"
            description="As a member of D-Group, I played a key role in planning, coordinating, 
            and executing diverse social events for all students at Linköping University. 
            Demonstrated strong organizational skills as a Logistics Coordinator for a 13-member 
            university committee, successfully overseeing major events, including Northern Europe’s 
            largest amateur darts competition, DÖMD, generating over 1.5 million SEK in revenue with 
            700 participants."
            width="20vw"
            iconBackgroundColor="#b7e0ff"
            icon={
              <CelebrationOutlined className="icon" sx={iconStyle("#023e8a")} />
            }
          />
        </div>

        <div className="card2">
          <HobbyCard
            title="Day Manager"
            workplace="Kårservice, Kårallen"
            startDate="JUN 2022"
            endDate="JUN 2023"
            description="Part-time employment as a Day Manager at the largest student union
            building at the university. Responsible for daily operations ensuring facility management, 
            staff coordination, bookings, and compliance with alcohol-serving permits/licenses, pivotal 
            for seamless operations and facility readiness."
            width="35vw"
            iconBackgroundColor="#e99394"
            icon={<HomeOutlined className="icon" sx={iconStyle("#9d0208")} />}
          />
        </div>

        <div className="card3">
          <HobbyCard
            title="Pub Committee"
            workplace="Datateknologsektionen"
            startDate="SEP 2020"
            description="As a member of the Pub Committee I actively contribute to planning and 
            executing engaging social events. Responsibilities included event coordination, 
            marketing initiatives, vendor collaboration, and ensuring a welcoming experience 
            for attendees, demonstrating organizational and teamwork skills in a dynamic social setting."
            width="35vw"
            iconBackgroundColor="#f9dc5c"
            icon={
              <LocalBarOutlined className="icon" sx={iconStyle("#b69121")} />
            }
          />
        </div>
      </div>
    </>
  );
}

export default Work;
