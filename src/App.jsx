import "./app.css";
import { Image } from "react-bootstrap";
import React from "react";
import { Header } from "./Header";
import { Item } from "./Item";
import { List } from "./List";
import { motion, useAnimation } from "framer-motion";
import { Route, Routes, useParams } from "react-router-dom";

function Store() {
  let { id } = useParams();
  const imageHasLoaded = true;

  return (
    <>
      <List selectedId={id} />
      <motion.div exit={{ opacity: 0 }}>
        {id && imageHasLoaded && <Item id={id} key={id} />}
      </motion.div>
    </>
  );
}

const floatVariant = {
  start: {
    x: 0,
    y: 0,
  },
  float: {
    x: [0, -10, 10, -10, 0],
    y: [0, -10, 10, -10, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      loop: Infinity,
      repeatDelay: 1,
    },
  },
};

export default function App() {
  const floatControl = useAnimation();
  return (
    <>
      <div id="home" className="bg-1 text-center text-center-vh">
        {/* <Header /> */}
        <div>
          Hello, I'm <span className="highlight">Nathan Anderson</span>.
          <br />
          I'm a web developer.
          <a href="#experience" className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </div>

      <motion.div
        id="experience"
        className="bg-2 text-center"
        animate={floatControl}
      >
        <h1 className="highlight mb-3">Experience</h1>
        <div className="row row-cols-4 g-0" animate={floatControl}>
          <div className="col">
            <motion.img
              className="pro-image"
              src="/assets/img/experience/bootstrap.png"
              variants={floatVariant}
              initial="start"
              animate="float"
            />
            <p>Bootstrap</p>
          </div>
          <div className="col">
            <motion.img
              className="pro-image"
              src="/assets/img/experience/html-coding.png"
              variants={floatVariant}
              initial="start"
              animate="float"
            />
            <p>HTML</p>
          </div>
          <div className="col">
            <motion.img
              className="pro-image"
              src="/assets/img/experience/css.png"
              variants={floatVariant}
              initial="start"
              animate="float"
            />
            <p>CSS</p>
          </div>
          <div className="col">
            <motion.img
              className="pro-image"
              src="/assets/img/experience/javascript.png"
              variants={floatVariant}
              initial="start"
              animate="float"
            />
            <p>Javascript</p>
          </div>
        </div>

        <div className="row row-cols-4 g-0">
          <div className="col">
            <Image
              className="pro-image"
              src="/assets/img/experience/debug.png"
              variants={floatVariant}
              initial="start"
              animate="float"
            />
            <p>Debugging</p>
          </div>
          <div className="col">
            <Image
              className="pro-image"
              src="/assets/img/experience/github.png"
            />
            <p>Github</p>
          </div>
          <div className="col">
            <Image
              className="pro-image"
              src="/assets/img/experience/mongo.png"
            />
            <p>MongoDB</p>
          </div>
          <div className="col">
            <Image className="pro-image" src="/assets/img/experience/oop.png" />
            <p>OOP</p>
          </div>
        </div>

        <div className="row row-cols-4 g-0">
          <div className="col">
            <Image
              className="pro-image"
              src="/assets/img/experience/node.png"
            />
            <p>Node.js</p>
          </div>
          <div className="col">
            <Image
              className="pro-image"
              src="/assets/img/experience/pair.png"
            />
            <p>Pair Programming</p>
          </div>
          <div className="col">
            <Image
              className="pro-image"
              src="/assets/img/experience/regex.png"
            />
            <p>RegEX</p>
          </div>
          <div className="col">
            <Image className="pro-image" src="/assets/img/experience/tdd.png" />
            <p>TDD</p>
          </div>
        </div>

        <div className="row row-cols-4 g-0">
          <div className="col">
            <Image
              className="pro-image"
              src="/assets/img/experience/react.png"
            />
            <p>React.js</p>
          </div>
          <div className="col">
            <Image
              className="pro-image"
              src="/assets/img/experience/mysql.png"
            />
            <p>MySQL</p>
          </div>
          <div className="col">
            <Image
              className="pro-image"
              src="/assets/img/experience/devops.png"
            />
            <p>Azure DevOps</p>
          </div>
          <div className="col">
            <Image className="pro-image" src="/assets/img/experience/aws.png" />
            <p>AWS</p>
          </div>
        </div>

        <div className="row row-cols-4 g-0">
          <div className="col">
            <Image
              className="pro-image"
              src="/assets/img/experience/jquery.png"
            />
            <p>JQuery</p>
          </div>
          <div className="col">
            <Image
              className="pro-image"
              src="/assets/img/experience/express.png"
            />
            <p>Express.js</p>
          </div>
          <div className="col">
            <Image
              className="pro-image"
              src="/assets/img/experience/linux.png"
            />
            <p>Linux</p>
          </div>
          <div className="col">
            <Image
              className="pro-image"
              src="/assets/img/experience/cicd.png"
            />
            <p>CI/CD pipelines</p>
          </div>
        </div>
      </motion.div>

      <div id="projects" className="bg-3">
        <h1 className="highlight mb-3 text-center">Projects</h1>
        <motion.div layout>
          <Routes>
            <Route path="/:id" element={<Store />} />
            <Route path="/" element={<Store />} />
          </Routes>
        </motion.div>
      </div>

      <div id="contact" className="bg-4 text-center">
        <h1 className="highlight mb-5">Contact Me</h1>
        <a
          href="https://www.linkedin.com/in/nathanganderson/"
          target="_blank"
          rel="noreferrer"
          alt="My LinkedIn"
        >
          <img
            className="social-img"
            src="/assets/img/social/linkedin_icon.png"
            alt="LinkedIn Icon"
          />
        </a>
        <a
          href="https://github.com/PhantomQuad"
          target="_blank"
          rel="noreferrer"
          alt="My Github"
        >
          <img
            className="social-img"
            src="/assets/img/social/github_icon.png"
            alt="Github Icon"
          />
        </a>
      </div>
    </>
  );
}
