import React from "react";
import CardHow from "./CardHow";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LocationDescriptor, Location } from "history";
import "./SliderComponent.scss";
import { useEffect } from "react";

const pageTransition = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

function SliderSecond(props: {
  title:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  description:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  prev:
    | LocationDescriptor<unknown>
    | ((location: Location<unknown>) => LocationDescriptor<unknown>);
  prevtext:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  next:
    | LocationDescriptor<unknown>
    | ((location: Location<unknown>) => LocationDescriptor<unknown>);
  nexttext:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cards = [
    {
      id: "reactcard",
      step: "ReactJS",
      texthow:
        "React is an open source JavaScript library designed for building SPAs (single page application), and it's all about components! It uses JSX in the syntax, so it's like bringing HTML to JavaScript. It's a very flexible library and gives you a lot of options to choose from when building your app, and that can be a good thing when you know what you're doing, but it's challenging at first",
      icons: (
        <>
          <a
            href="https://es.reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-react"></i>
          </a>
        </>
      ),
    },
    {
      id: "vuecard",
      step: "VueJS",
      texthow:
        "CSS (Cascading Style Sheets) is used to stylize the elements of your HTML, colors, keyframes animations and more can be achieved with this awesome tool",
      icons: (
        <>
          <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-vuejs"></i>
          </a>
        </>
      ),
    },
    {
      id: "angularcard",
      step: "AngularJS",
      texthow:
        'This should be your first programming language, if a web is rendering something more than static content you can bet it JS is involved.From the most simple "Hello World" to crazy animation and functionalities, javascript can have it done',
      icons: (
        <>
          <a
            href="https://angularjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-angular"></i>{" "}
          </a>
        </>
      ),
    },
  ];

  return (
    <motion.div
      className="containercards"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
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
        <Link to={props.prev} className="prevbtn navbtn">
          {props.prevtext}
        </Link>{" "}
        <Link to={props.next} className="nextbtn navbtn">
          {props.nexttext}
        </Link>
      </div>
    </motion.div>
  );
}

export default SliderSecond;
