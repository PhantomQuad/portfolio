import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import invaderImg from "./invader.png";
import invaderDestroyedImg from "./destroyed.png";
import spaceshipImg from "./spaceship.png";
import laserImg from "./laser.png";

export function Ani() {
  const [invaderX, setInvaderX] = useState(0);
  const [spaceshipX, setSpaceshipX] = useState(0);
  const [shooting, setShooting] = useState(false);
  const [invaderState, setInvaderState] = useState("alive");
  const laserRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      setSpaceshipX((prevX) => prevX - 10);
    } else if (e.key === "ArrowRight") {
      setSpaceshipX((prevX) => prevX + 10);
    } else if (e.key === " ") {
      setShooting(true);
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === " ") {
      setShooting(false);
    }
  };

  useEffect(() => {
    if (!laserRef.current) return;
    if (invaderState === "alive") {
      // Get the bounding rectangles of the laser and the invader
      const laserRect = laserRef.current.getBoundingClientRect();
      const invaderRect = document
        .querySelector(".invader")
        .getBoundingClientRect();

      // Check for collision
      if (
        laserRect.x < invaderRect.x + invaderRect.width &&
        laserRect.x + laserRect.width > invaderRect.x &&
        laserRect.y < invaderRect.y + invaderRect.height &&
        laserRect.y + laserRect.height > invaderRect.y
      ) {
        // If collision is detected, set the invader state to "destroyed"
        setInvaderState("destroyed");
        console.log("Invader destroyed!");
      }
    }
  }, [invaderState, laserRef]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="bg-5">
      {invaderState === "alive" ? (
        <motion.img
          className="invader"
          src={invaderImg}
          initial={{ x: invaderX }}
          animate={{ x: invaderX + 100 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        />
      ) : (
        <motion.img
          className="pro-image2"
          src={invaderDestroyedImg}
          initial={{ x: invaderX }}
          animate={{ x: invaderX + 800 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        />
      )}
      <br />
      <br />
      <br />
      <motion.img
        className="pro-image"
        src={spaceshipImg}
        initial={{ x: spaceshipX }}
        animate={{ x: spaceshipX }}
        transition={{ duration: 0.1 }}
      />
      {shooting && (
        <motion.img
          ref={laserRef}
          className="pro-image"
          src={laserImg}
          initial={{ x: spaceshipX - 80, y: -10 }}
          animate={{ y: -220 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </div>
  );
}
