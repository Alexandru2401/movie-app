import { movies } from "../../api/api";
import Card from "../../components/Card";
export default function BestMovies(){
    const bestMovies = movies.sort((a,b) => b.rating - a.rating).slice(1,10)
    return (
        <div style={{display:"flex"}}>
        <h2>Best movies</h2>
          {bestMovies.map((movie) => (
            <Card
              title={movie.title}
              rating={movie.rating}
              image={movie.image}
              year = {movie.year}
            />
          ))}
        </div>
    )
}