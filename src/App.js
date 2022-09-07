import "./App.css";
import React, { useState } from "react";
import PictureGallery from "./components/visualizer/PictureGallery";

const DUMMY_PIC = [
  {
    copyright: "Jiaqi Sun （孙嘉琪）",
    date: new Date(2022, 8, 6),
    explanation:
      "Yes, but how many dark clouds have a multicolored lining? Pictured, behind this darker cloud, is a pileus iridescent cloud, a group of water droplets that have a uniformly similar size and so together diffract different colors of sunlight by different amounts.  The featured image was taken last month in Pu'er, Yunnan Province, China. Also captured were unusual cloud ripples above the pileus cloud.  The formation of a rare pileus cloud capping a common cumulus cloud is an indication that the lower cloud is expanding upward and might well develop into a storm.    Explore Your Universe: Random APOD Generator",
    hdurl: "https://apod.nasa.gov/apod/image/2209/Pileus_Jiaqi_4032.jpg",
    media_type: "image",
    service_version: "v1",
    title: "An Iridescent Pileus Cloud over China",
    url: "https://apod.nasa.gov/apod/image/2209/Pileus_Jiaqi_960.jpg",
    id: "e0",
  },
];

const App = () => {
  const [pictures, setPictures] = useState(DUMMY_PIC);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const makeRequest = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Error! status: ${response.status}");
      }

      const result = await response.json();

      setPictures([
        {
          copyright: result.copyright,
          date: new Date(result.date),
          explanation: result.explanation,
          hdurl: result.hdurl,
          media_type: result.media_type,
          service_version: result.service_version,
          title: result.title,
          url: result.url,
          id: result.id,
          id: Math.random().toString(),
        },
      ]);

      console.log(pictures.date.toString());
      
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(pictures);

  return (
    <React.Fragment>
      {err && <h2>{err}</h2>}
      <button onClick={makeRequest}>Update!</button>
      {isLoading && <h2>Loading...</h2>}
      {pictures && <PictureGallery pictures={pictures} />}
    </React.Fragment>
  );
};

export default App;
