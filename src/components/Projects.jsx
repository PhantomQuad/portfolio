import React from "react";
import { motion } from "framer-motion";
import { Route, Routes, useParams } from "react-router-dom";
import { List } from "./project_cards/List";
import { Item } from "./project_cards/Item";

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

export function Projects() {
  return (
    <div id="projects" className="bg-3">
      <h1 className="highlight mb-3 text-center">Projects</h1>
      <motion.div layout>
        <Routes>
          <Route path="/:id" element={<Store />} />
          <Route path="/" element={<Store />} />
        </Routes>
      </motion.div>
    </div>
  );
}
