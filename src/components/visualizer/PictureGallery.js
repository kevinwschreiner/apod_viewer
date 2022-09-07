import Picture from "./Picture";
//import "./PictureGallery.css";

const PictureGallery = (props) => {
  if (props.pictures.length === 0) {
    return <h2>Found no pictures with those specifications.</h2>;
  }

  return (
    <ul>
      {props.pictures.map((pic) => (
        <Picture
          copyright={pic.copyright}
          date={pic.date}
          explanation={pic.explanation}
          hdurl={pic.hdurl}
          media_type={pic.media_type}
          service_version={pic.service_version}
          title={pic.title}
          url={pic.url}
          key={pic.id}
        />
      ))}
    </ul>
  );
}

export default PictureGallery;
