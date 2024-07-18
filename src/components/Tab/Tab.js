import React from "react";
import "./Tab.css";
import "../responsive.css";
import { motion } from "framer-motion";

export default function Tab() {
  const openMenuHandler = (event) => {
    event.target.classList.toggle("open");
  };

  return (
    <div id="tabs" onTouchStart={openMenuHandler}>
      <motion.ul
        animate={{ y: [0, -40, -60] }}
        transition={{
          duration: 2,
          repeatType: "mirror",
          repeat: Infinity,
          type: "tween",
          ease: "linear"
        }}
        id="tabs-container"
      >
        <li className="home">
          <a href="#home-sec">Home</a>
        </li>
        <li className="about">
          <a href="#about-sec">About me</a>
        </li>
        <li className="projects">
          <a href="#gallery">Projects</a>
        </li>

        <li className="contact">
          <a href="#footer-container">Contact</a>
        </li>
      </motion.ul>
    </div>
  );
}
