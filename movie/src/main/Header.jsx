import movieImg from "../assests/movieImg.png";
import bgImg from "../assests/bgImg.png";
import { Link } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll";
export default function Header() {
  return (
    <header
      className="header-container"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <nav className="navbar">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>
            <ScrollLink to="about" smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <Link to="/movies">
            <li>Movies</li>
          </Link>
          <Link to="/series">
            <li>Series</li>
          </Link>
          <li>
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
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
