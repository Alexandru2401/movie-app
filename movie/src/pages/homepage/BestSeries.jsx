// import { series } from "../../api/api";
// import Card from "../../components/Card";
// import { Link } from "react-router-dom";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// export default function BestSeries(){
    // const bestSeries = series.sort((a,b) => b.rating - a.rating).slice(1,10)
//     const responsive = {
//       desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 3,
//       },
//       tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 2,
//       },
//       mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 1,
//       },
//     };
//     return (
//         <div style={{display:"flex"}}>
//         <h2>Best series</h2>
//         <div>
//         <Carousel
//         swipeable={false}
//         draggable={true}
//         showDots={false}
//         responsive={responsive}
//         ssr={true}
//         infinite={true}
//         autoPlaySpeed={2000}
//         keyBoardControl={true}
//         customTransition="all 1s ease-in-out"
//         transitionDuration={1000}
//         autoPlay={false}
//         itemClass="carousel-item"
//       >
//           {bestSeries.map((series) => (
//             <Card
//               title={series.title}
//               rating={series.rating}
//               image={series.image}
//               year = {series.year}
//             />
//           ))}
//           </Carousel>
//           </div>
//             <Link to="/series">Go to series</Link>
//         </div>
//     )

// }import Card from "./Card";
import { series } from "../../api/api";
import Carousel from "react-multi-carousel";
import Card from "../../components/Card";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
export default function CarouselPage() {
  const topSeries = series
  .sort((a, b) => a.rating - b.rating)
  .slice(0, 10);
  const [moviesType] = series;
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
      <h2>Best series</h2>

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
        {topSeries.map((series) => (
          <Card
            id={series.id}
            title={series.title}
            description={series.description}
            rating={series.rating}
            image={series.image}
            rank={series.rank}
            year={series.year}
          />
        ))}
      </Carousel>
      <Link to="/series"><button className="btn">Go to series</button></Link>
    </div>
  );
}
