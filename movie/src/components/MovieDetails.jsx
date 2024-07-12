import { useParams } from "react-router-dom";
import { movies } from "../api/api";
import Card from "./Card";

export default function MovieDetails() {
  const { id } = useParams();
  const foundMovie = movies.find((movie) => movie.id === id);

  if (!foundMovie) {
    return <div>Movie not found</div>;
  }

  return (
    <Card
    title = {foundMovie.title}
    description = {foundMovie.description}
    rating={foundMovie.rating}
    image={foundMovie.image}
    rank={foundMovie.rank}
    year={foundMovie.year}
    />
  );
}
