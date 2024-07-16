import { series } from "../api/api";
import Card from "../components/Card";
import LatestMovies from "../pages/homepage/LastestMovies";
import LatestSeries from "../pages/homepage/LatestSeries";
export default function Home(props) {
  const [seriesType] = series;
  const { title, image, description, rank, rating, big_image,thumbnail, id, year } = seriesType;
  return (
    <div>
        <LatestMovies/>
        <LatestSeries/>
    </div>
  );
}
