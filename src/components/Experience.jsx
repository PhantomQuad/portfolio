import React from "react";
import { motion } from "framer-motion";

export function Experience() {
  const container = {
    hidden: { opacity: 0.5 },
    show: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { x: 0, y: 0 },
    show: { scale: [0, 1, 0.5, 1] },
  };

  return (
    <div id="experience" className="bg-2 text-center">
      <h1 className="highlight mb-3">Experience</h1>
      <motion.div variants={container} initial="hidden" animate="show">
        <div className="row">
          <div className="col">
            <motion.div variants={item}>
              <img
                className="pro-image"
                src="/assets/img/experience/bootstrap.png"
                alt=""
              />
              <p>Bootstrap</p>
            </motion.div>
          </div>
          <div className="col">
            <motion.div
              // initial={{ x: 0, y: 0 }}
              // animate={{ scale: [0, 1, 0.5, 1] }}
              variants={item}
              // transition={{ duration: 2, ease: "easeInOut" }}
            >
              <img
                className="pro-image"
                src="/assets/img/experience/bootstrap.png"
                alt=""
              />
              <p>Bootstrap</p>
            </motion.div>
          </div>

          <div className="col">
            <motion.div
              className="col"
              // initial={{ x: 0, y: 0 }}
              // animate={{ scale: [0, 1, 0.5, 1] }}
              variants={item}
              // transition={{ duration: 2, ease: "easeInOut" }}
            >
              <img
                className="pro-image"
                src="/assets/img/experience/html-coding.png"
                alt=""
              />
              <p>HTML</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
