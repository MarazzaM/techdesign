import React from "react";
import "./Resources.scss";
import { motion } from "framer-motion";
import AdviceCards from "../components/AdviceCards";

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

function Resources() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
       {/* Resources */}

       <div className="container-a-ac">
            <AdviceCards/>
            </div>
    </motion.div>
  );
}

export default Resources;
