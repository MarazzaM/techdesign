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
            process of constantly learning. As new technologies and frameworks
            are released, you’ll have to keep yourself informed to remain
            competitive. Dive into Stack Overflow and GitHub to find the answers
            to questions you have, or just to scan through the questions other
            developers are asking.
          </div>
          <div className="advice2">
            <h1>Tutorials</h1>
           <div className="svg-container centered">
           <img src="https://gist.githubusercontent.com/MarazzaM/516ce2a89f230eadf7e6fb4f840fab63/raw/854bfb4b6a8b064afd8731039da8ff2b78970fe7/books.svg" alt="books" />
           </div>
            <div className="text-advice text-advice2">
            It is recommended at first to see several tutorials and understand what they do but be careful! Always code at the same time as you follow a tutorial, so you can see how it is implemented and why they do things that way.
            </div>
          </div>
          <div className="advice2">
            <h1>CODE EVERY DAY</h1>
           <div className="svg-container centered">
           <img src="https://gist.githubusercontent.com/MarazzaM/12b73cb2dd4cf380e87ccebe1d0ad11a/raw/c6cad24efa06d8eae10cc96604f5a1165e8b169e/programmer.svg" alt="books" />
           </div>
            <div className="text-advice text-advice2">
            Writing code every day is extremely important, it helps you keep the concepts you have learned fresh and makes it more and more natural to write it.
            </div>
          </div>
          <div className="advice2">
            <h1>Keep Trying</h1>
           <div className="svg-container centered">
           <img src="https://gist.githubusercontent.com/MarazzaM/c051f453340f6a6113193b964942637b/raw/160ccda45bc33dbb6cde18aa222696407dfdeef7/thinking.svg" alt="books" />
           </div>
            <div className="text-advice text-advice2">
            Coding can be frustrating, it is a lot of information and many times
            you will not know why your 'Hello World' is not displayed on the
            screen, but do not be discouraged! It is important that you always
            keep trying and go ahead, there will always be people who went
            through the same problem who can help you, or find a solution with
            you!
            </div>
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
