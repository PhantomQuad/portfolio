import React from "react";

export function Home() {
  return (
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
  );
}
