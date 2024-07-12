import { useParams } from "react-router-dom";
import { series } from "../api/api";
import Card from "./Card";

export default function SeriesDetails() {
  const { id } = useParams();
  const foundSeries = series.find((seriesItem) => seriesItem.id === id);

  if (!foundSeries) {
    return <div>Series not found</div>;
  }

  return (
    <Card
      title={foundSeries.title}
      description={foundSeries.description}
      rating={foundSeries.rating}
      image={foundSeries.image}
      rank={foundSeries.rank}
      year={foundSeries.year}
    />
  );
}
