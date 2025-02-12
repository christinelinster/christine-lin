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
            <span className="block">Hello, I'm</span>
            <span className="home-name">Christine Lin</span>
          </h2>
          

          <p className="home-description">
          <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
            onInit={(typewriter) => {
              typewriter
              .changeDelay(50)
                .typeString("Software Developer | ")
                .changeDelay(50)
                .pauseFor(300)
                .typeString("Practice Lead | ")
                .changeDelay(50)
                .pauseFor(300)
                .typeString(" Lifelong Student")
                .pauseFor(3000)
                .deleteAll()
                .start()
            }}
          />
          </p>
          <div className="button-container">
            <div>
              <Link to="/projects" className="primary-button">
                View My Work
              </Link>
            </div>
            <div>
              <Link to="/contact" className="secondary-button">
                Contact Me
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
