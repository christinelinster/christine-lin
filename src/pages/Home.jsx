import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "../styles/home.css";

//Add typewriter effect to my name.

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="text-center">
          <h2 className="home-title">
           <p className="home-intro">hi, my name is</p>

            <p className="home-name">Christine Lin</p>
            <p className="home-role">Full-Stack Software Engineer</p>
          </h2>


          <p className="home-description">
            I build production-grade applications using Python, Flask, React, and PostgreSQL.
            My background includes over 4 years collaborating with engineering teams to ship SaaS products at scale.
            This experience shapes how I design backend systems, model databases, and approach deployment: by combining technical execution with business context.


          </p>
          <div className="button-container">
            <div>
              <Link to="/projects" className="primary-button">
                View Projects
              </Link>
            </div>
            <div>
              <Link to="/contact" className="secondary-button">
                Download Resume
              </Link>
            </div>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/christinelinster"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/christinelin19"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:lin.christine19@gmail.com" className="social-link">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
