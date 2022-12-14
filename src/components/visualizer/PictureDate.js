//import './PictureDate.css';

function PictureDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div>
      <div>{month} {day}, {year}</div>
    </div>
  );
}

export default PictureDate;