import React, { useEffect, useState } from "react";
import "./About.scss";
import Header from "../layouts/Header";
import TimeLine from "../components/TimeLine";
import profilePicture from "../assets/profilePicture.webp";

import image2 from "../assets/images/image2_4032x3024.webp";
import image8 from "../assets/images/image8_4032x3024.webp";
import ImageCard from "../components/ImageCard";

function About() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header title="I'm Anton." position="top-page-header" />

      <div className="profileContainer">
        <div className="pictureContainer">
          <img className="profilePicture" src={profilePicture} alt="Profile." />
        </div>

        <div className="profileTextContainer">
          <h1>I'm a Software Engineer from Stockholm, Sweden.</h1>
          <p>
            I'm a social, ambitious and driven university student with excellent
            problem-solving skills. I'm a fourth-year Computer Science and
            Engineering student currently pursuing a Master’s Degree in
            Artificial Intelligence and Machine Learning.
          </p>
        </div>
      </div>

      <TimeLine />

      <div className="aboutContainer">
        <h1>About me.</h1>
        <p>
          Before I embarked on my journey into the world of Computer Science and
          Engineering, I was already exploring the realm of technology and
          software development. My early experiences led me to delve into IT,
          Engineering, and Software Development, honing my problem-solving
          skills and laying the foundation for my current pursuit of a Master's
          Degree in Artificial Intelligence and Machine Learning.
        </p>
        <p>
          My side projects have become a playground for my curiosity, allowing
          me to stay on the cutting edge of emerging technologies and the
          ever-evolving digital landscape.
        </p>
        <p>
          Beyond the realm of technology, I find joy in the simple pleasures of
          life. Whether it's skiing down big mountains, working out, sipping a
          warm cup of coffee, or spending quality time with friends. Just like
          the intricate web of code, life's experiences continue to shape me,
          and I eagerly anticipate what lies ahead in this ever-exciting
          journey.
        </p>
      </div>

      <div className="imageSliderContainer">
        <ImageCard
          imageSrc={image8}
          placeOfImage={"Le Trayas, France"}
          imageContainerWidth={windowWidth <= 950 ? "100%" : "55vw"}
          imageWidth={windowWidth <= 950 ? "100%" : "835px"}
          imageBottomMargin={"400px"}
        />
        {windowWidth <= 950 ? null : (
          <ImageCard
            imageSrc={image2}
            placeOfImage={"Cannes, France"}
            imageContainerWidth={"25vw"}
            imageWidth={"450px"}
            imageBottomMargin={"0px"}
          />
        )}
      </div>
    </>
  );
}

export default About;
