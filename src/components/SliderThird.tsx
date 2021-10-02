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
          <i className='bx bxl-nodejs' ></i>
        </>
      ),
    },
    {
      id: "sasscard",
      step: "Sass",
      texthow:
        "CSS (Cascading Style Sheets) is used to stylize the elements of your HTML, colors, keyframes animations and more can be achieved with this awesome tool",
      icons: (
        <>
         <i className='bx bxl-sass' ></i>
        </>
      ),
    },
    {
      id: "gitcard",
      step: "Git",
      texthow:
        'This should be your first programming language, if a web is rendering something more than static content you can bet it JS is involved.From the most simple "Hello World" to crazy animation and functionalities, javascript can have it done',
      icons: (
        <>
          <i className='bx bxl-git'></i>
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
