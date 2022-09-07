import React from "react";
import PictureDate from "./PictureDate";
//import "./Picture.css";

const Picture = (props) => {
  return (
    <div>
      <h1> {props.title} </h1>
      <PictureDate date={props.date} />
      <div> explanation={props.explanation} </div>
      <div> url={props.url} </div>
    </div>
  );
};

export default Picture;
