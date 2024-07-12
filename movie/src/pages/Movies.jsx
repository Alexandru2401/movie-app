import Card from "../components/Card";
import { Link } from "react-router-dom";
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
    <div className="layout-container">
      {movies.map((movie) => (
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
        <Link to={`/MoviesDetails/${movie.id}`}><button>See more</button></Link>
        </div>     
      ))}
    </div>
  );
}
