import { series } from "../api/api";
import About from "../components/About";
import Card from "../components/Card";
import Contact from "../components/Contact";
import BestMovies from "../pages/homepage/BestMovies";
import BestSeries from "../pages/homepage/BestSeries";
import LatestMovies from "../pages/homepage/LastestMovies";
import LatestSeries from "../pages/homepage/LatestSeries";
export default function Home() {
  return (
    <div>
      <About />
      <LatestMovies />
      <LatestSeries />
      <BestMovies />
      <BestSeries />
      <Contact/>
    </div>
  );
}
