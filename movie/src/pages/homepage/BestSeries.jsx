import { series } from "../../api/api";
import Card from "../../components/Card";

export default function BestSeries(){
    const BestSeries = series.sort((a,b) => b.rating - a.rating).slice(1,10)
    return (
        <div style={{display:"flex"}}>
        <h2>Best series</h2>
          {BestSeries.map((series) => (
            <Card
              title={series.title}
              rating={series.rating}
              image={series.image}
              year = {series.year}
            />
          ))}
        </div>
    )

}