// import { series } from "../api/api";

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
        <img src={image} alt="" />
      </div>
      <p>Rating: {rating}</p>
      <p>Description: {description}</p>
      <p>Series rank: {rank}</p>
      <p>Year: {year}</p>
    </div>
  );
}
