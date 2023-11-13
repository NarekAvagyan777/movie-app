import "./Navbar.scss";
import home from "../../assets/icons/Group 46.png";
import watchlater from "../../assets/icons/Group 47.png";
import genres from "../../assets/icons/Group 53.png";
import movies from "../../assets/icons/Group 54.png";
import tvshows from "../../assets/icons/Group 56.png";
import search from "../../assets/icons/ICON - Search.png";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-container__main">
        <div className="navbar-container__iconsWrapper">
          <div className="icon-wrapper">
            <img src={search} alt="" />
            <span>Search</span>
          </div>
          <div className="icon-wrapper">
            <img src={home} alt="" />
            <span>Home</span>
          </div>
          <div className="icon-wrapper">
            <img src={tvshows} alt="" />
            <span>TV Shows</span>
          </div>
          <div className="icon-wrapper">
            <img src={movies} alt="" />
            <span>Movies</span>
          </div>
          <div className="icon-wrapper">
            <img src={genres} alt="" />
            <span>Genres</span>
          </div>
          <div className="icon-wrapper">
            <img src={watchlater} alt="" />
            <span>Watch Later</span>
          </div>
        </div>
      </div>
    </div>
  );
}
