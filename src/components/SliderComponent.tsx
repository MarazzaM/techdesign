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

function SliderComponent(props: {
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
      id: "htmlcard",
      step: "HTML",
      texthow:
        "HTML (HyperText Markup Language) should be your first step to start in web development, it defines the meaning and structure of the web content.",
      icons: (
        <>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-html5"></i>
          </a>
        </>
      ),
    },
    {
      id: "csscard",
      step: "CSS",
      texthow:
        "CSS (Cascading Style Sheets) is used to style your HTML elements, it will give your website the most impressive look! From colors, fonts, and amazing keyframe animations, anything is possible!.",
      icons: (
        <>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-css3"></i>
          </a>
        </>
      ),
    },
    {
      id: "jscard",
      step: "JavaScript",
      texthow:
        'This should be your first programming language, if a web is rendering something more than static content you can bet JS is involved.From the most simple "Hello World" to crazy animation and functionalities, JavaScript can have it done.',
      icons: (
        <>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-javascript"></i>
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

export default SliderComponent;
