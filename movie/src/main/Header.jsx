import movieImg from "../assests/movieImg.png"   
import bgImg from "../assests/bgImg.png"
export default function Header(){
    return(
        <header className="header-container" style={{backgroundImage:`url(${bgImg})`}}>
            <nav className="navbar">
                <ul>
                    <li>Movies</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </nav>
            <div className="content-container">
                <div className="header-content">
                <h1>Movie Land</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat, ducimus repellat incidunt inventore nostrum voluptatem ut accusantium accusamus quam explicabo sapiente temporibus, architecto minima hic similique sunt nihil sed?</p>
                </div>
                <button className="btn">See more</button>
            </div>
            <div className="img-container">
                <img src={movieImg} alt="" />
            </div>
        </header>
    )
}