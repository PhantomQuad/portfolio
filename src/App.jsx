import "./app.css";
import Table from "react-bootstrap/Table";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";

function App() {
  return (
    <>
      <div id="home" className="bg-1 text-center text-center-vh">
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
          <h1 className="highlight mb-5">Experience</h1>
          <div className="row align-items-start row-cols-4 mb-5">
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
          <div className="row align-items-center row-cols-4 mb-5">
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
            </div>
            <div className="col">
              <Image className="pro-image" src="/assets/img/oop.png" />
              <p>Object-oriented Programming</p>
            </div>
          </div>
          <div className="row align-items-center row-cols-4 mb-5">
            <div className="col">
              <Image className="pro-image" src="/assets/img/node.png" />
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
        </div>
      </div>
    </>
  );
}

export default App;
