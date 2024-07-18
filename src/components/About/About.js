import "./About.css";
import React from "react";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.div
      whileInView={{
        transition: {
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror"
        }
      }}
      className="about-container"
      id="about-sec"
    >
      <motion.img
        whileInView={{
          rotate: [0, 360],
          transition: {
            duration: 20,
            type: "tween",
            repeatType: "loop",
            repeat: Infinity,
            ease: "linear"
          }
        }}
        src="./images/planet-4.webp"
        alt="profile"
      />
      <motion.p
        whileInView={{
          scale: [0.5, 1],
          rotate: [0, 20, 0],

          transition: { duration: 0.7, type: "tween", repeatType: "reverse" }
        }}
      >
        As a passionate and motivated front-end developer, I am dedicated to
        creating intuitive and visually appealing web experiences. With a strong
        foundation in HTML, CSS, and JavaScript, I am eager to contribute my
        skills to innovative projects and collaborate with talented teams. I am
        enthusiastic about tackling new challenges, solving problems
        efficiently, and delivering high-quality code that exceeds expectations
        using the technologies below 👇
      </motion.p>
    </motion.div>
  );
}
