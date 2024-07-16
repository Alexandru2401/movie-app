// import { series } from "../api/api";
import { Link } from "react-router-dom";
export default function Card(props) {
  const {
    title,
    image,
    description,
    rank,
    rating,
    big_image,
    thumbnail,
    id,
    year,
  } = props;
  return (
    <div key={id} className="card-wrapper">
      <h1 className="card-title">{title}</h1>

      <div className="image-container">
        <img src={image} alt={title} />
      </div>

      <p>{rating}</p>
      <p>{description}</p>
      <p>{rank}</p>
      <p>{year}</p>
    </div>
  );
}
