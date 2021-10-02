import React from "react";
import "./Card.scss";

function AdviceCard (props: {
  id: string | undefined;
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
    | any;
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
      <div className="card" id={props.id}>
        <div className="content">
          <h2 className="title">{props.title}</h2>
          <p className="copy">{props.text}</p>
          <a className="linkr" rel="noreferrer noopener" href={props.path}>{props.btn} </a>
        </div>
      </div>
    </div>
  );
}

export default AdviceCard;
