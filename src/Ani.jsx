import React, { useState } from "react";
import { motion } from "framer-motion";

import invaderImg from "./invader.png";
import spaceshipImg from "./spaceship.png";
import laserImg from "./laser.png";
import { useEffect } from "react";

export function Ani() {
  const [invaderX, setInvaderX] = useState(0);
  const [spaceshipX, setSpaceshipX] = useState(0);
  const [shooting, setShooting] = useState(false);

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
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="bg-5">
      <motion.img
        className="pro-image"
        src={invaderImg}
        initial={{ x: invaderX }}
        animate={{ x: invaderX + 800 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.img
        className="pro-image"
        src={invaderImg}
        initial={{ x: invaderX }}
        animate={{ x: invaderX + 800 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />
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
