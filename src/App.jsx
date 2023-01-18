import "./app.css";
import { Image } from "react-bootstrap";
import React from "react";
import { Header } from "./Header";
import { Item } from "./Item";
import { List } from "./List";
import { motion } from "framer-motion";
import { Route, Routes, useParams } from "react-router-dom";

function Store({ match }) {
  let { id } = useParams();
  console.log(match);
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

        <div className="">
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
              <Image className="pro-image" src="/assets/img/bootstrap.png" />
              <p>Bootstrap</p>
            </div>
            <div className="col">
              <Image className="pro-image" src="/assets/img/html-coding.png" />
              <p>HTML</p>
            </div>
            <div className="col">
              <Image className="pro-image" src="/assets/img/css.png" />
              <p>CSS</p>
            </div>
            <div className="col">
              <Image className="pro-image" src="/assets/img/javascript.png" />
              <p>Javascript</p>
            </div>
          </div>

          <div className="row row-cols-4 g-0">
            <div className="col">
              <Image className="pro-image" src="/assets/img/debug.png" />
              <p>Debugging</p>
            </div>
            <div className="col">
              <Image className="pro-image" src="/assets/img/github.png" />
              <p>Github</p>
            </div>
            <div className="col">
              <Image className="pro-image" src="/assets/img/mongo.png" />
              <p>MongoDB</p>
            </div>
            <div className="col">
              <Image className="pro-image" src="/assets/img/oop.png" />
              <p>Object-oriented Programming</p>
            </div>
          </div>

          <div className="row row-cols-4 g-0">
            <div className="col">
              <Image className="pro-image" src="/assets/img/node.png" />
              <p>Node.js</p>
            </div>
            <div className="col">
              <Image className="pro-image" src="/assets/img/pair.png" />
              <p>Pair Programming</p>
            </div>
            <div className="col">
              <Image className="pro-image" src="/assets/img/regex.png" />
              <p>RegEX</p>
            </div>
            <div className="col">
              <Image className="pro-image" src="/assets/img/tdd.png" />
              <p>Test-driven development</p>
            </div>
          </div>

          <div className="row row-cols-4 g-0">
            <div className="col">
              <Image className="pro-image" src="/assets/img/react.png" />
              <p>React.js</p>
            </div>
            <div className="col">
              <Image className="pro-image" src="/assets/img/mysql.png" />
              <p>MySQL</p>
            </div>
            <div className="col">
              <Image className="pro-image" src="/assets/img/devops.png" />
              <p>Azure DevOps</p>
            </div>
            <div className="col">
              <Image className="pro-image" src="/assets/img/aws.png" />
              <p>AWS</p>
            </div>
          </div>

          <div className="row row-cols-4 g-0">
            <div className="col">
              <Image className="pro-image" src="/assets/img/jquery.png" />
              <p>JQuery</p>
            </div>
            <div className="col">
              <Image className="pro-image" src="/assets/img/express.png" />
              <p>Express.js</p>
            </div>
            <div className="col">
              <Image className="pro-image" src="/assets/img/linux.png" />
              <p>Linux</p>
            </div>
            <div className="col">
              <Image className="pro-image" src="/assets/img/cicd.png" />
              <p>CI/CD pipelines</p>
            </div>
          </div>
        </div>

        <div id="projects" className="bg-3 text-center">
          <div className="container">
            <motion.div layout>
              <Routes>
                <Route path="/:id" element={<Store />} />
                <Route path="/" element={<Store />} />
              </Routes>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
