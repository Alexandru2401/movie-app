import Card from "../../components/Card";
import { series } from "../../api/api";

export default function LatestSeries() {
    const latestSeries = series.sort((a,b) => b.year - a.year).slice(0,10)
  return (
    <div style={{ display: "flex" }}>
      <h2>Latest series</h2>
      {latestSeries.map((series) => (
        <Card
          title={series.title}
          rating={series.rating}
          image={series.image}
          year={series.year}
        />
      ))}
    </div>
  );
}
