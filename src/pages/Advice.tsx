import React from "react";
import "./Advice.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.2,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.3,
};

function Advice() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="content-advice">
        <div className="container-advice">
        <h1>A tip to get started</h1>
        <div className="text-advice">
          No matter how experienced a web developer you are, programming is a
          process of constantly learning. As new technologies and frameworks are
          released, you’ll have to keep yourself informed to remain competitive.
          Dive into Stack Overflow and GitHub to find the answers to questions
          you have, or just to scan through the questions other developers are
          asking. Develop a reading list of industry blogs and magazines.
        </div>
        <div className="button-container-2">
          <span className="mas">Lets go!</span>
          <Link to="/Resources">
            {" "}
            <button type="button" name="Hover">
              Next section!
            </button>
          </Link>
        </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Advice;
