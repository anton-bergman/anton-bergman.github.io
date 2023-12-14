import React, { useEffect, useRef, useState } from "react";
import "./Navbar.scss";

import { NavLink } from "react-router-dom";

function Navbar() {
  const [selectedTab, setSelectedTab] = useState<string>(
    window.location.pathname
  );
  const [gliderVisible, setGliderVisible] = useState<boolean>(false);
  const selectedNavLinkRef = useRef<HTMLAnchorElement>(null);
  const gliderRef = useRef<HTMLDivElement>(null);
  const navbarBlurToggle = true;

  useEffect(() => {
    if (selectedNavLinkRef.current && gliderRef.current) {
      const left: number =
        selectedNavLinkRef.current.getBoundingClientRect().left;
      const width: number = selectedNavLinkRef.current.offsetWidth;
      const height: number = selectedNavLinkRef.current.offsetHeight;

      gliderRef.current.style.left = `${left}px`;
      gliderRef.current.style.width = `${width}px`;
      gliderRef.current.style.height = `${height}px`;

      gliderRef.current?.classList.add("visible");

      sessionStorage.setItem("current-tab", selectedTab);
    }
  }, [selectedTab, gliderVisible]);

  useEffect(() => {
    const resizeHandler = () => {
      setGliderVisible(false);
      setTimeout(() => {
        setGliderVisible(true);
      }, 1);
    };

    window.addEventListener("resize", resizeHandler);
  }, []);

  return (
    <nav>
      <ul className={navbarBlurToggle ? "navbarList blur" : "navbarList"}>
        <li>
          <NavLink
            ref={selectedTab === "/" ? selectedNavLinkRef : null}
            onClick={() => setSelectedTab("/")}
            to="/"
            className="navLink"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            ref={selectedTab === "/about" ? selectedNavLinkRef : null}
            onClick={() => setSelectedTab("/about")}
            to="/about"
            className="navLink"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            ref={selectedTab === "/work" ? selectedNavLinkRef : null}
            onClick={() => setSelectedTab("/work")}
            to="/work"
            className="navLink"
          >
            Work
          </NavLink>
        </li>
        <li>
          <NavLink
            ref={selectedTab === "/contact" ? selectedNavLinkRef : null}
            onClick={() => setSelectedTab("/contact")}
            to="/contact"
            className="navLink"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div
        ref={gliderRef}
        className={gliderVisible ? "glider visible" : "glider"}
      />
    </nav>
  );
}

export default Navbar;
