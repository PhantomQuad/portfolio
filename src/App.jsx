import "./app.css";
import React from "react";
import { Projects } from "./Projects";
import { ContactMe } from "./ContactMe";
import { Experience } from "./Experience";
import { Home } from "./Home";

export default function App() {
  return (
    <>
      {Home()}

      {Experience()}

      {Projects()}

      {ContactMe()}
    </>
  );
}
