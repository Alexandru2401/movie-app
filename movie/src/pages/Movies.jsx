import Card from "../components/Card";
import { Link } from "react-router-dom";
import { movies } from "../api/api";
import { useState } from "react";
export default function Movies() {
  const [query, setQuery] = useState("");
  const [moviesType] = movies;
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
  } = moviesType;
  return (
    <div>
      <input
        type="search"
        id="search-movie"
        placeholder="Search for a movie"
        onChange={(e) => {
          setQuery(e.target.value.toLowerCase());
        }}
      />
      <div className="layout-container">
        {movies
          .filter((movie) => movie.title.toLowerCase().includes(query))
          .map((movie) => (
            <div key={movie.id} className="card-container">
              <Card
                id={movie.id}
                title={movie.title}
                description={movie.description}
                rating={movie.rating}
                image={movie.image}
                rank={movie.rank}
                year={movie.year}
              />
              <Link to={`/MoviesDetails/${movie.id}`}>
                <button className="btn">See more</button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
