import React from "react";
import CardHow from "./CardHow";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LocationDescriptor, Location } from "history";
import "./SliderComponent.scss";
import { useEffect } from "react";

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

function SliderComponent(props: { title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; description: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; prev: LocationDescriptor<unknown> | ((location: Location<unknown>) => LocationDescriptor<unknown>); prevtext: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; next: LocationDescriptor<unknown> | ((location: Location<unknown>) => LocationDescriptor<unknown>); nexttext: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const cards = [
    {
      id: "a1",
      step: "HTML",
      texthow:
        "HTML (HyperText Markup Language) should be your first step to start in web development, it defines the meaning and structure of the web content",
      icons: (
        <>
          <i className="bx bxl-html5"></i>
        </>
      ),
    },
    {
      id: "a2",
      step: "CSS",
      texthow:
        "CSS (Cascading Style Sheets) is used to stylize the elements of your HTML, colors, keyframes animations and more can be achieved with this awesome tool",
      icons: (
        <>
          <i className="bx bxl-css3"></i>
        </>
      ),
    },
    {
      id: "a3",
      step: "JavaScript",
      texthow:
        'This should be your first programming language, if a web is rendering something more than static content you can bet it JS is involved.From the most simple "Hello World" to crazy animation and functionalities, javascript can have it done',
      icons: (
        <>
          <i className="bx bxl-javascript"></i>
        </>
      ),
    },
    {
      id: "a4",
      step: "Step 4",
      texthow: "lorem ipsum dolor",
      icons: (
        <>
          <i className="bx bxl-html5"></i>
          <i className="bx bxl-css3"></i>
          <i className="bx bxl-javascript"></i>
        </>
      ),
    },
  ];
  return (
    <motion.div
      className="containercards"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>{props.title}</h1>
      <div className="textcc">{props.description}</div>
      <div className="cardshow">
        <CardHow
          step={cards[0].step}
          texthow={cards[0].texthow}
          icons={cards[0].icons}
        />
        <CardHow
          step={cards[1].step}
          texthow={cards[1].texthow}
          icons={cards[1].icons}
        />
        <CardHow
          step={cards[2].step}
          texthow={cards[2].texthow}
          icons={cards[2].icons}
        />
      </div>
      <div className="container-btn-sc">
        <Link to={props.prev}  className="prevbtn navbtn" >
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
