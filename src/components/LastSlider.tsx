import React from 'react'
import "./LastSlider.scss";
import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8,
      scrollYProgress:0,
  
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
      scrollYProgress:0,
  
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2,
      scrollYProgress:0,
  
    },
  };
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.3,
  };

function LastSlider() {

    return (

        <motion.div className="lastslider"
        initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
        >
            <h1>All its up to you!</h1>
            <div className="text-ls">
            At the end of the day, this entire section is completely subjective. You can get started with the backend without any problem, or try to learn a framework all at once! (Although it is very, very little recommended, it is possible). Do not stay only with this information, look for much more on your own since being a developer is about that, never stop studying and always be researching!
            </div>
        </motion.div>
    )
}

export default LastSlider
