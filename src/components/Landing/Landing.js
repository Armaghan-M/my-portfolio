import "./Landing.css";
import "../responsive.css";
import React from "react";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="landing-container" id="home-sec">
      <motion.div
        className="landing-img"
        animate={{
          rotate: [0, -50, 70, 0],
          y: [400, 390, 480, 500],
          x: [100, 200, 300, 400, 500, 600, 700, 800],
          scale: [1.5, 0.7, 0.5, 1.3]
        }}
        transition={{
          duration: 40,
          type: "tween",
          ease: "linear",
          repeat: Infinity,
          repeatType: "mirror"
        }}
      ></motion.div>
      <motion.div
        className="landing-img-mobile"
        animate={{
          rotate: [0, -50, 70, 0],
          y: [-20, 20, -60],
          x: [50, 100],
          scale: [0.6, 0.3]
        }}
        transition={{
          duration: 40,
          type: "tween",
          ease: "linear",
          repeat: Infinity,
          repeatType: "mirror"
        }}
      ></motion.div>
      <motion.div
        initial={{ filter: "brightness(1)  ", y: -270 }}
        animate={{
          filter: "brightness(1.5) "
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
          repeatType: "reverse"
        }}
        className="landing-img-2"
      ></motion.div>
      <motion.img
        initial={{ y: -400 }}
        whileInView={{
          scale: [1.5, 0.7, 0.4],
          rotate: [0, 360, 720, 950, 1200],
          x: [100, 200, 300],
          y: [-400, -600],
          transition: {
            duration: 30,
            repeat: Infinity,
            type: "tween",
            repeatType: "reverse",
            ease: "linear"
          }
        }}
        src="./images/meteor-3.webp"
        id="meteor"
      />

      <div className="landing-text ">
        <h1>
          <span>H</span>
          <span>i</span> <span>t</span>
          <span>h</span>
          <span>e</span>
          <span>r</span>
          <span>e</span>
          <span>!</span>
          <br />
          <span>I'm</span> <span>A</span>
          <span>r</span>
          <span>m</span>
          <span>a</span>
          <span>g</span>
          <span>h</span>
          <span>a</span>
          <span>n</span> <span>M</span>
          <span>a</span>
          <span>r</span>
          <span>d</span>
          <span>a</span>
          <span>s</span>
          <span>i</span>
        </h1>
        <h3>
          <span>F</span>
          <span>r</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>-</span>
          <span>e</span>
          <span>n</span>
          <span>d</span> <span>d</span>
          <span>e</span>
          <span>v</span>
          <span>e</span>
          <span>l</span>
          <span>o</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>
        </h3>
      </div>
    </div>
  );
}
