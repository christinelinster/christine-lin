import { Link } from "react-router-dom";
import homeContent from "../data/home";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="container home-container">

      <div className="home-content">
        <div>
          <p className="home-intro">Hi, my name is</p>
          <p className="home-name">Christine Lin, </p>
          <p className="home-role">[ Software Engineer ]</p>
        </div>
        <div>
          <p className="home-description">
            {homeContent[0]}
          </p>
        </div>
        <div className="button-container">
          <div>
            <Link to="/projects" className="cta primary-button">
              View Projects
            </Link>
          </div>
          <div>
            <Link to="/contact" className="cta secondary-button">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
