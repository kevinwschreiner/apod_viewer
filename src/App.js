import "./App.css";
import React/*, { useState }*/ from "react";
import PictureGallery from "./components/visualizer/PictureGallery";

const DUMMY_PIC = [
  {
    copyright: "Jiaqi Sun （孙嘉琪）",
    date: new Date(2022, 9, 6),
    explanation: "Yes, but how many dark clouds have a multicolored lining? Pictured, behind this darker cloud, is a pileus iridescent cloud, a group of water droplets that have a uniformly similar size and so together diffract different colors of sunlight by different amounts.  The featured image was taken last month in Pu'er, Yunnan Province, China. Also captured were unusual cloud ripples above the pileus cloud.  The formation of a rare pileus cloud capping a common cumulus cloud is an indication that the lower cloud is expanding upward and might well develop into a storm.    Explore Your Universe: Random APOD Generator",
    hdurl: "https://apod.nasa.gov/apod/image/2209/Pileus_Jiaqi_4032.jpg",
    media_type: "image",
    service_version: "v1",
    title: "An Iridescent Pileus Cloud over China",
    url: "https://apod.nasa.gov/apod/image/2209/Pileus_Jiaqi_960.jpg",
    id: "e0",
  },
];

function App() {
  //const [pictures, setPictures] = useState(DUMMY_PIC);
  const pictures = DUMMY_PIC;

  return (
    <React.Fragment>
      <PictureGallery pictures={pictures} />
    </React.Fragment>
  );
}

export default App;
