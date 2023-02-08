import "./app.min.css";
import React from "react";
import { Projects } from "./components/Projects";
import { ContactMe } from "./components/ContactMe";
import { Experience } from "./components/Experience";
import { Home } from "./components/Home";

export default function App() {
  return (
    <>
      <Home />

      <Experience />

      <Projects />

      <ContactMe />
    </>
  );
}
