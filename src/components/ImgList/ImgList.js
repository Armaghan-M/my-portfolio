import * as React from "react";
import "./ImgList.css";
import "../responsive.css";
import { motion } from "framer-motion";

export default function ImgList() {
  return (
    <div id="gallery-container">
      <motion.div
        whileInView={{
          x: [200, 0],
          color: ["cyan", "yellow", "white"],
          transition: {
            duration: 1,
            type: "spring",
            damping: 3
          }
        }}
        id="img-list-title"
      >
        | My Projects |
      </motion.div>
      <div id="gallery">
        {itemData.map((item) => (
          <motion.div
            whileInView={{
              x: [30, 0],
              opacity: [0.5, 1],

              transition: {
                duration: 1,
                type: "tween",
                ease: "linear",
                delay: 0.1
              }
            }}
            id="img-wrapper"
          >
            <img
              key={item.id}
              srcSet={`${item.img}`}
              src={`${item.img}`}
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const itemData = [
  { id: Math.random(), img: "./images/p-1.webp" },
  { id: Math.random(), img: "./images/p-2.webp" },
  { id: Math.random(), img: "./images/p-3.webp" },
  { id: Math.random(), img: "./images/p-4.webp" },
  { id: Math.random(), img: "./images/p-5.webp" },
  {
    id: Math.random(),
    img: "./images/p-6.webp"
  },
  {
    id: Math.random(),
    img: "./images/p-7.webp"
  },
  {
    id: Math.random(),
    img: "./images/p-8.webp"
  },
  {
    id: Math.random(),
    img: "./images/p-9.webp"
  },
  {
    id: Math.random(),
    img: "./images/p-10.webp"
  },
  {
    id: Math.random(),
    img: "./images/p-11.webp"
  },
  {
    id: Math.random(),
    img: "./images/p-12.webp"
  },
  {
    id: Math.random(),
    img: "./images/p-13.webp"
  },
  {
    id: Math.random(),
    img: "./images/p-14.webp"
  },
  {
    id: Math.random(),
    img: "./images/p-15.webp"
  }
];
