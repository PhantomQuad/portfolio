import React from "react";

export function ContactMe() {
  return (
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
  );
}
