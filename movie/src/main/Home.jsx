import { series } from "../api/api";
import Card from "../components/Card";
export default function Home(props) {
  const [seriesType] = series;
  const { title, image, description, rank, rating, big_image,thumbnail, id, year } = seriesType;
  return (
    <div>
        <Card/>
    </div>
  );
}
