import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const container = {
    hidden: { opacity: 0.5 },
    show: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        staggerChildren: 0.4,
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
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <div className="row">
          <motion.div className="col" variants={item}>
            <img
              className="pro-image"
              src="/assets/img/experience/bootstrap.png"
              alt=""
            />
            <p>Bootstrap</p>
          </motion.div>
          <motion.div className="col" variants={item}>
            <img
              className="pro-image"
              src="/assets/img/experience/html-coding.png"
              alt=""
            />
            <p>HTML</p>
          </motion.div>
          <motion.div className="col" variants={item}>
            <img
              className="pro-image"
              src="/assets/img/experience/css.png"
              alt=""
            />
            <p>CSS</p>
          </motion.div>
          <motion.div className="col" variants={item}>
            <img
              className="pro-image"
              src="/assets/img/experience/javascript.png"
              alt=""
            />
            <p>Javascript</p>
          </motion.div>
        </div>

        <div className="row">
          <motion.div className="col" variants={item}>
            <img
              className="pro-image"
              src="/assets/img/experience/debug.png"
              alt=""
            />
            <p>Debugging</p>
          </motion.div>
          <motion.div className="col" variants={item}>
            <img
              className="pro-image"
              src="/assets/img/experience/github.png"
              alt=""
            />
            <p>Github</p>
          </motion.div>
          <motion.div className="col" variants={item}>
            <img
              className="pro-image"
              src="/assets/img/experience/mongo.png"
              alt=""
            />
            <p>MongoDB</p>
          </motion.div>
          <motion.div className="col" variants={item}>
            <img
              className="pro-image"
              src="/assets/img/experience/oop.png"
              alt=""
            />
            <p>OOP</p>
          </motion.div>
        </div>

        <div className="row">
          <motion.div className="col" variants={item}>
            <img
              className="pro-image"
              src="/assets/img/experience/node.png"
              alt=""
            />
            <p>Node.js</p>
          </motion.div>
          <motion.div className="col" variants={item}>
            <img
              className="pro-image"
              src="/assets/img/experience/pair.png"
              alt=""
            />
            <p>Pair Programming</p>
          </motion.div>
          <motion.div className="col" variants={item}>
            <img
              className="pro-image"
              src="/assets/img/experience/regex.png"
              alt=""
            />
            <p>RegEX</p>
          </motion.div>
          <motion.div className="col" variants={item}>
            <img
              className="pro-image"
              src="/assets/img/experience/tdd.png"
              alt=""
            />
            <p>TDD</p>
          </motion.div>
        </div>

        <div className="row">
          <motion.div className="col" variants={item}>
            <img
              className="pro-image"
              src="/assets/img/experience/react.png"
              alt=""
            />
            <p>React.js</p>
          </motion.div>
          <motion.div className="col" variants={item}>
            <img
              className="pro-image"
              src="/assets/img/experience/mysql.png"
              alt=""
            />
            <p>MySQL</p>
          </motion.div>
          <motion.div className="col" variants={item}>
            <img
              className="pro-image"
              src="/assets/img/experience/devops.png"
              alt=""
            />
            <p>Azure DevOps</p>
          </motion.div>
          <motion.div className="col" variants={item}>
            <img
              className="pro-image"
              src="/assets/img/experience/aws.png"
              alt=""
            />
            <p>AWS</p>
          </motion.div>
        </div>

        <div className="row">
          <motion.div className="col" variants={item}>
            <img
              className="pro-image"
              src="/assets/img/experience/jquery.png"
              alt=""
            />
            <p>JQuery</p>
          </motion.div>
          <motion.div className="col" variants={item}>
            <img
              className="pro-image"
              src="/assets/img/experience/express.png"
              alt=""
            />
            <p>Express.js</p>
          </motion.div>
          <motion.div className="col" variants={item}>
            <img
              className="pro-image"
              src="/assets/img/experience/linux.png"
              alt=""
            />
            <p>Linux</p>
          </motion.div>
          <motion.div className="col" variants={item}>
            <img
              className="pro-image"
              src="/assets/img/experience/cicd.png"
              alt=""
            />
            <p>CI/CD pipelines</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
