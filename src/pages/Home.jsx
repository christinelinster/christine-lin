import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";
import homeContent from "../data/home";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="home-container">

        <SocialLinks />

      <div className="home-content">
        <div>
          <p className="home-intro">hi, my name is</p>
          <p className="home-name">Christine Lin, </p>
          <p className="home-role">[ Software Engineer ]</p>
        </div>
        <div>
          <p className="home-description">
            {homeContent.description}
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
              Download Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
