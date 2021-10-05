import React from "react";
import CardHow from "./CardHow";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LocationDescriptor, Location } from "history";
import "./SliderComponent.scss";
import { useEffect } from "react";

const pageTransition = {
  in: {
      opacity: 1 
  },
  out: {
      opacity: 0
  }
}

function SliderThird(props: { title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; description: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; prev: LocationDescriptor<unknown> | ((location: Location<unknown>) => LocationDescriptor<unknown>); prevtext: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; next: LocationDescriptor<unknown> | ((location: Location<unknown>) => LocationDescriptor<unknown>); nexttext: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const cards = [
    {
      id: "nodecard",
      step: "NodeJS",
      texthow:
        "Node.js is a cross-platform JavaScript runtime that enables developers to build server-side and network applications with JavaScript. You can create, open, read, write, delete and close files on the server, collect data from forms, you can add, delete, modify data in your database and much more!",
      icons: (
        <>
        <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
        <i className='bx bxl-nodejs' ></i>
          </a>
        </>
      ),
    },
    {
      id: "sasscard",
      step: "Sass",
      texthow:
        "Creating and maintaining CSS for large projects can be tricky, so using a preprocessor can go a long way to get new features and keep your code simpler to maintain. Sass has features that don't exist in CSS yet like nesting, mixins, inheritance, and other nifty goodies that help you write robust, maintainable CSS.",
      icons: (
        <>
        <a href="https://sass-lang.com" target="_blank" rel="noopener noreferrer">
         <i className='bx bxl-sass' ></i>
          </a>
        </>
      ),
    },
    {
      id: "gitcard",
      step: "Git",
      texthow:
        'If you are thinking of starting an individual or team project, you will need a version control system (VSC) to keep everything organized.A VSC is a kind of software that helps the developer team to efficiently communicate and manage(track) all the changes that have been made to the source code along with the information like who made and what change has been made.',
      icons: (
        <>
        <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer">
        <i className='bx bxl-git'></i>
          </a>
        </>
      ),
    },
    {
      id: "st4",
      step: "ReactJs",
      texthow:
        "React is",
      icons: (
        <>
          <i className="bx bxl-html5"></i>
        </>
      ),
    },
  ];

  return (
    <motion.div
      className="containercards"
      initial="out" animate="in" exit="out" variants={pageTransition}
    >
      <h1>{props.title}</h1>
      <div className="textcc">{props.description}</div>
      <div className="cardshow">
        <CardHow
          step={cards[0].step}
          texthow={cards[0].texthow}
          icons={cards[0].icons}
          id={cards[0].id}
        />
        <CardHow
          step={cards[1].step}
          texthow={cards[1].texthow}
          icons={cards[1].icons}
          id={cards[1].id}
        />
        <CardHow
          step={cards[2].step}
          texthow={cards[2].texthow}
          icons={cards[2].icons}
          id={cards[2].id}
        />
      </div>
      <div className="container-btn-sc">
        <Link to={props.prev}  className="prevbtn navbtn" >
          {props.prevtext}
        </Link>{" "}
        <Link to={props.next} className="nextbtn navbtn" >
          {props.nexttext}
        </Link>
      </div>
    </motion.div>
  );
}

export default SliderThird;
