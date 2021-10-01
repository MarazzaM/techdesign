import React  from "react";
import "./Persona.scss";
import { useState } from "react";

function Persona(props: {
    name:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
    photo:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | any
      | undefined;
    extract:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
    linkedin:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | any
      | undefined;
  }) {
      const [show, setShow] = useState(true)
  return (
    <div>
      <div className="grid-container">
        <div className="div1">
            <h1 className="name-persona">{props.name}</h1>
            <img src= {props.photo} alt="" loading="lazy" referrer-policy="no-referrer" />
        </div>
        <div className={show ? 'div2 hidden' : 'div2'}>{props.extract} <br /> <a href= {props.linkedin} target="_blank" rel="noopener noreferrer">My Linkedin to get in touch</a> <br /> <span className="showless" onClick={()=> setShow(!show)}><i><i className='bx bx-left-arrow'></i> Show less</i></span></div>
        <div className={show ? 'expand' : 'hidden'} onClick={()=> setShow(!show)}>Get to Know me!</div>
      </div>
    </div>
  );
}

export default Persona;
