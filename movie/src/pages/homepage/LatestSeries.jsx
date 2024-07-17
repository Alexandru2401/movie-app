import Card from "../../components/Card";
import { series } from "../../api/api";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
export default function LatestSeries() {
  const latestSeries = series.sort((a, b) => b.year - a.year).slice(1, 10);
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
      <h2>Latest series</h2>
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
        {latestSeries.map((series) => (
          <Card
            title={series.title}
            rating={series.rating}
            image={series.image}
            year={series.year}
          />
        ))}
      </Carousel>
      <Link to="/series">Go to series</Link>
    </div>
  );
}
