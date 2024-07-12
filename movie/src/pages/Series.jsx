import Card from "../components/Card";
import { series } from "../api/api";
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
    <div className="card-container">
      {series.map((series) => (
        <Card
          id={series.id}
          title={series.title}
          description={series.description}
          rating={series.rating}
          image={series.image}
          rank={series.rank}
          year={series.year}
        />
      ))}
    </div>
  );
}
