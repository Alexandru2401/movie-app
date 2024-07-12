import Card from "../components/Card";
import { series } from "../api/api";
import { Link } from "react-router-dom";
export default function Series() {
  const [seriesType] = series;
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
  } = seriesType;
  return (
    <div className="layout-container">
      {series.map((series) => (
        <div key={series.id} className="card-container">
          <Card
            id={series.id}
            title={series.title}
            description={series.description}
            rating={series.rating}
            image={series.image}
            rank={series.rank}
            year={series.year}
          />
          <Link to={`/SeriesDetails/${series.id}`}>
            <button>See more</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
