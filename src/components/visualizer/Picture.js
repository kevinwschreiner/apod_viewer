import React from "react";
import PictureDate from "./PictureDate";
//import "./Picture.css";

const Picture = (props) => {
  return (
    <React.Fragment>
      <img src={props.url} alt={props.title} />
      <h1> {props.title} </h1>
      <PictureDate date={props.date} />
      <div> {props.explanation} </div>
    </React.Fragment>
  );
};

export default Picture;
