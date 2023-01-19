import "./app.css";
import { Image } from "react-bootstrap";
import React from "react";
import { Header } from "./Header";
import { Item } from "./Item";
import { List } from "./List";
import { motion } from "framer-motion";
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

export default function App() {
  return (
    <>
      <div id="home" className="bg-1 text-center text-center-vh">
        <Header />
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

      <div id="experience" className="bg-2 text-center">
        <div className="container">
          <h1 className="highlight mb-3">Experience</h1>
          <div className="row row-cols-4 g-0">
            <div className="col">
              <Image
                className="pro-image"
                src="/assets/img/experience/bootstrap.png"
              />
              <p>Bootstrap</p>
            </div>
            <div className="col">
              <Image
                className="pro-image"
                src="/assets/img/experience/html-coding.png"
              />
              <p>HTML</p>
            </div>
            <div className="col">
              <Image
                className="pro-image"
                src="/assets/img/experience/css.png"
              />
              <p>CSS</p>
            </div>
            <div className="col">
              <Image
                className="pro-image"
                src="/assets/img/experience/javascript.png"
              />
              <p>Javascript</p>
            </div>
          </div>

          <div className="row row-cols-4 g-0">
            <div className="col">
              <Image
                className="pro-image"
                src="/assets/img/experience/debug.png"
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
              <Image
                className="pro-image"
                src="/assets/img/experience/oop.png"
              />
              <p>Object-oriented Programming</p>
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
              <Image
                className="pro-image"
                src="/assets/img/experience/tdd.png"
              />
              <p>Test-driven development</p>
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
              <Image
                className="pro-image"
                src="/assets/img/experience/aws.png"
              />
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
        </div>

        <div id="projects" className="bg-3 text-center">
          <h1 className="highlight mb-3">Projects</h1>
          <div className="container-fluid">
            <motion.div layout>
              <Routes>
                <Route path="/:id" element={<Store />} />
                <Route path="/" element={<Store />} />
              </Routes>
            </motion.div>
          </div>
        </div>

        <div id="contact" className="bg-4 text-center">
          <h1 className="highlight mb-5">Contact Me</h1>
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-6">
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
              </div>
              <div className="col-6">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
