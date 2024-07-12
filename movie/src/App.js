import Footer from "./main/Footer";
import Header from "./main/Header";
import Home from "./main/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import SeriesDetails from "./components/SeriesDeatils";
import MovieDetails from "./components/MovieDetails";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />
          <Route path="/SeriesDetails/:id" element={<SeriesDetails/>} />
          <Route path="/MoviesDetails/:id" element={<MovieDetails/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
