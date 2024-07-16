// This contain the latest movies
import Card from "../../components/Card";
import { movies } from "../../api/api";
export default function LatestMovies() {
    const latestMovies = movies.sort((a,b) => b.year-a.year).slice(1,10)
  return (
    <div style={{display:"flex"}}>
    <h2>Latest movies</h2>
      {latestMovies.map((movie) => (
        <Card
          title={movie.title}
          rating={movie.rating}
          image={movie.image}
          year = {movie.year}
        />
      ))}
    </div>
  );
}
