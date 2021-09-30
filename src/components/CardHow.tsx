import React from "react";
import "./CardHow.scss";

function CardHow(props: {
  step:
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
  icons:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  return (
    
      <div className="cardhow">
        <h1>{props.step}</h1>
        <div className="texthow">{props.texthow}</div>
        <div className="icons">{props.icons}</div>
      </div>
    
  );
}

export default CardHow;
