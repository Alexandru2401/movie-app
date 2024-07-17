import { movies } from "../../api/api";
import Card from "../../components/Card";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function BestMovies() {
  const bestMovies = movies.sort((a, b) => b.rating - a.rating).slice(0, 10);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="carousel-container">
      <h2>Best movies</h2>
      <Carousel
        className="car"
        swipeable={false}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlaySpeed={2500}
        keyBoardControl={true}
        customTransition="all 1s ease-in-out"
        transitionDuration={1000}
        autoPlay={false}
        itemClass="carousel-item"
        centerMode={true}
      >
        {bestMovies.map((movie) => (
          <Card
          key={movie.id}
            id={movie.id}
            title={movie.title}
            rating={movie.rating}
            image={movie.image}
            year={movie.year}
          />
        ))}
      </Carousel>
      <Link to="/movies">Go to movies</Link>
    </div>
  );
}
