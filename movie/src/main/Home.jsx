import { series } from "../api/api";
import Card from "../components/Card";
import BestMovies from "../pages/homepage/BestMovies";
import BestSeries from "../pages/homepage/BestSeries";
import LatestMovies from "../pages/homepage/LastestMovies";
import LatestSeries from "../pages/homepage/LatestSeries";
export default function Home() {
  return (
    <div>
      <LatestMovies />
      <LatestSeries />
      <BestMovies/>
      <BestSeries/>
    </div>
  );
}
