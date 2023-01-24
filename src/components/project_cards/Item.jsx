import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { items } from "./data";

export function Item({ id }) {
  const {
    category,
    title,
    title2,
    title3,
    livelink,
    repolink,
    repolink2,
    reponame,
    reponame2,
    info,
  } = items.find((item) => item.id === id);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <Link to="/" />
      </motion.div>
      <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img src={`/assets/img/projects/${id}.png`} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            {title ? <h2>{title}</h2> : null}
            {title2 ? <p>{title2}</p> : null}
            {title3 ? (
              <p>
                <b>{title3}</b>
              </p>
            ) : null}
            <div>
              {repolink ? (
                <a target="_blank" rel="noreferrer" alt="" href={repolink}>
                  {reponame}
                </a>
              ) : null}
            </div>
            <div>
              {repolink2 ? (
                <a target="_blank" rel="noreferrer" alt="" href={repolink2}>
                  {reponame2}
                </a>
              ) : null}
            </div>
            <div>
              {livelink ? (
                <a target="_blank" rel="noreferrer" alt="" href={livelink}>
                  Live Site
                </a>
              ) : null}
            </div>
          </motion.div>
          <motion.div className="content-container" animate>
            <p>{info}</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
