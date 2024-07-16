import Card from "../components/Card";
import { series } from "../api/api";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Series() {
  const [query, setQuery] = useState("");
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
     
      <input
        type="search"
        id="search-series"
        placeholder="Search for a series"
        onChange={(e) => {
          setQuery(e.target.value.toLowerCase());
        }}
      />
    
      {series
        .filter((series) => series.title.toLowerCase().includes(query))
        .map((series) => (
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
