import "./app.css";
import Table from "react-bootstrap/Table";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";

function App() {
  return (
    <>
      <div id="home" className="bg-1 text-center text-center-vh">
        <div>
          Hello, I'm <span class="highlight">Nathan Anderson</span>.
          <br />
          I'm a web developer.
          <a href="#experience" class="arrow">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </div>
      <div id="experience" className="bg-2 text-center">
        <div class="container inner_box">
          <h1 className="highlight mb-5">Experience</h1>
          <div class="row align-items-start row-cols-4 mb-5">
            <div className="col">
              <Image className="pro-image" src="/assets/img/bootstrap.png" />
              Bootstrap
            </div>
            <div class="col">
              <Image className="pro-image" src="/assets/img/html-coding.png" />
              HTML
            </div>
            <div class="col">
              <Image className="pro-image" src="/assets/img/css.png" />
              CSS
            </div>
            <div class="col">
              <Image className="pro-image" src="/assets/img/javascript.png" />
              Javascript
            </div>
          </div>
          <div class="row align-items-center row-cols-4 mb-5">
            <div class="col">
              <Image className="pro-image" src="/assets/img/debug.png" />
              Debugging
            </div>
            <div class="col">
              <Image className="pro-image" src="/assets/img/github.png" />
              Github
            </div>
            <div class="col">
              <Image className="pro-image" src="/assets/img/mongo.png" />
            </div>
            <div class="col">
              <Image className="pro-image" src="/assets/img/oop.png" />
              Object-oriented Programming
            </div>
          </div>
          <div class="row align-items-center row-cols-4 mb-5">
            <div class="col">
              <Image className="pro-image" src="/assets/img/node.png" />
            </div>
            <div class="col">
              <Image className="pro-image" src="/assets/img/pair.png" />
              Pair Programming
            </div>
            <div class="col">
              <Image className="pro-image" src="/assets/img/regex.png" />
              RegEX
            </div>
            <div class="col">
              <Image className="pro-image" src="/assets/img/tdd.png" />
              Test-driven development
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
