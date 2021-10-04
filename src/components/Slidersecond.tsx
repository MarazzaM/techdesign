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
        "ReactJS is an open source JavaScript library designed by the Facebook team and it's all about components! It uses JSX in the syntax, so it's like bringing HTML to JavaScript. It's a very flexible library and gives you a lot of options to choose from when building your app, and that can be a good thing when you know what you're doing, but it's challenging at first.",
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
        "VueJS progressive framework for building and one-page applications, Vue is developed for JavaScript. It has been designed for scalability and incrementality along with being easy to integrate with other libraries focused on the view layer.A factor to take into account when working with Vue is that it is built and supported by the community, making its volatility higher than that of the other two and since no company supports it, its existence also depends entirely on the community.",
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
        "AngularJS is a framework developed by the Google team, and in our opinion the best for developing large projects, although it may be excessive for small websites. It is a structural framework for dynamic web applications. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application components clearly and succinctly. Its data binding and dependency injection eliminate much of the code you currently have to write.",
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
