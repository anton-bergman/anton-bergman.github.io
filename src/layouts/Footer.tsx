import React from "react";
import "./Footer.scss";
import { FaGithub } from "react-icons/fa";
import styles from "../utils/_variables.module.scss";
import { BACKEND_URL } from "../utils/_variables";

function Footer() {
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
    <div className="footerContainer">
      <div className="leftContainer">
        <div className="githubBanner">
          <FaGithub
            style={{
              fontSize: "50px",
              color: styles.textColorPrimery,
            }}
          />
          <ul className="nameContainer">
            <li className="userName">anton-bergman</li>
            <li className="name">Anton Bergman</li>
          </ul>
        </div>
        <div className="copyRight">&copy; 2023 Anton Bergman</div>
      </div>
      <div className="rightContainer">
        <ul className="linkList">
          <li>
            <h3>Elsewhere</h3>
          </li>
          <li>
            <a
              className="link"
              href="https://linkedin.com/in/-anton-bergman-"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://github.com/anton-bergman"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <p className="link" onClick={handleResume}>
              CV
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
