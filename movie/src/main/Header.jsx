import movieImg from "../assests/movieImg.png";
import bgImg from "../assests/bgImg.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      className="header-container"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <nav className="navbar">
        <ul>
        <Link to="/">Home</Link>
          <Link to="/movies">
            <li>Movies</li>
          </Link>
          <Link to="/series">
            <li>Series</li>
          </Link>
          <Link>
            <li>Contact</li>
          </Link>
          <Link>
            <li>About</li>
          </Link>
        </ul>
      </nav>
      <div className="content-container">
        <div className="header-content">
          <h1>Movie Univers</h1>
          <p>Welcome to movies and series univers! </p>
        </div>
        <button className="btn">See more</button>
      </div>
      <div className="img-container">
        <img src={movieImg} alt="" />
      </div>
    </header>
  );
}
