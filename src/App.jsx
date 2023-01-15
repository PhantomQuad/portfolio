import "./app.css";

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
        <div>
          <h1 className="highlight">Experience</h1>
        </div>
      </div>
    </>
  );
}

export default App;
