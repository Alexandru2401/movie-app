import Card from "../components/Card";
import { movies } from "../api/api";
export default function Movies() {
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
    <div className="card-container">
      {movies.map((movie) => (
        <Card
          id={movie.id}
          title={movie.title}
          description={movie.description}
          rating={movie.rating}
          image={movie.image}
          rank={movie.rank}
          year={movie.year}
        />
      ))}
    </div>
  );
}
