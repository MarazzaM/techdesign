import React from "react";
import "./About.scss";
import Persona from "../components/Persona";
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
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.3
};


function About() {
    const personas = [
        {
          id: 'e1',
          name: "Matias",
          photo: "https://i.imgur.com/Ke3uUym.png",
          extract: "I created Tech Design with the idea of being able to help other people who are interested in learning web development, although I started recently on this path, I know how difficult it can be to handle the overwhelming amount of information that is on the web, and also to evaluate which resources are still useful today. So the idea is to be able to grow and support each other together as a community.",
          linkedin: "https://www.linkedin.com/in/matías-edgardo-marazza-cantero/",
        },
        { id: 'e2', 
        name: 'Tomas', 
        photo: "https://media-exp1.licdn.com/dms/image/D4D35AQFlxt5HKLnFiQ/profile-framedphoto-shrink_200_200/0/1631218863842?e=1633039200&v=beta&t=RQ9ni7PNajvRKpXyDVBhnv0-GsdReEl_gheJA6HJOlg", 
        extract: "As a founding member of Tech Design I am proud of the small community that we have created, having been born from the project of two friends to be able to study web development, it became a very large project that cuts across all the people in our community",
        linkedin: "https://www.linkedin.com/in/tomás-fierro-bértole-198a6121b/", },
        {
          id: 'e3',
          name: 'Mariana',
          photo: "https://media-exp1.licdn.com/dms/image/C5635AQFHeV4MyZIaaw/profile-framedphoto-shrink_200_200/0/1615820660491?e=1633042800&v=beta&t=Qxixe-ePR371E71pPRRZSis5zqk334s-WHvrBINd6iE",
          extract: "Curabitur posuere commodo nunc, vitae eleifend ligula pellentesque eget. Quisque vel accumsan massa, eu ornare mauris. Vivamus arcu tortor, consectetur a interdum a, porttitor sed nisi. Sed egestas consectetur tellus, a euismod metus fermentum sed. Vivamus non pulvinar sem. Sed eleifend massa nec nibh elementum vehicula. Quisque magna mi, porttitor at velit et, aliquam aliquet ipsum. Vestibulum tempor liber",
          linkedin: "https://www.linkedin.com/in/mariana-del-rosario-eizayaga-a08a4b159/",
        },
        {
          id: 'e4',
          name: 'Resources',
          photo: "lorem",
          extract: "Find out more",
          linkedin: "Resources",
        },
      ];
  return (
    <motion.div className="About page"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>Who we are</h1>
      <div className="card-about">
        We are passionate people about programming who recently started their
        web development journey, but with a burning flame in our hearts! This
        initiative has the idea of being able to share resources, ideas and
        guides so that this path can include anyone who wants to join us. We
        believe that the best path to learning is to help each other and have an
        active conversation about new technologies
      </div>
        <div className="what-about">
        <h1>What is this about</h1>
      <div className="card-about">
      We want to help anyone who wants to join this beautiful path of web development, take their first steps and have a general notion of the big picture. No matter age, gender or prior programming knowledge, anyone can start this journey
      </div>
        </div>
        <div className="personas">
            <h1>Some of the people behind the scenes</h1>
            <div className="container-personas">
            <Persona 
            name={personas[0].name}
            photo={personas[0].photo}
            extract={personas[0].extract}
            linkedin={personas[0].linkedin}
            />
            <Persona 
            name={personas[1].name}
            photo={personas[1].photo}
            extract={personas[1].extract}
            linkedin={personas[1].linkedin}
            />
            
            <Persona 
            name={personas[2].name}
            photo={personas[2].photo}
            extract={personas[2].extract}
            linkedin={personas[2].linkedin}
            />
            </div>
        </div>
        <div className="button-container-2">
                  <span className="mas">Lets go!</span>
                  <Link to="/HowTo"> <button type="button" name="Hover">How to start</button></Link>
            </div>

    </motion.div>
  );
}

export default About;
