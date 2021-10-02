import React from "react";
import "./CardHow.scss";

function CardHow(props: {
  id: string | undefined;
  step:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  icons:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  texthow:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  return (
    <div className="cardhow lined thick" id={props.id}>
      <h1>{props.step}</h1>
      <div className="icons">{props.icons}</div>
      <div className="texthow">{props.texthow}</div>
    </div>
  );
}

export default CardHow;
