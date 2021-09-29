import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card(props: {
  title:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  text:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  path:
    any ;
  btn:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  return (
    <div>
      <div className="card">
        <div className="content">
          <h2 className="title">{props.title}</h2>
          <p className="copy">{props.text}</p>
          <Link to={props.path} className="btn">
            {props.btn}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
