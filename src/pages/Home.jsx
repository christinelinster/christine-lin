import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="text-center">
          <h1 className="home-title">
            <span className="block">Hi, I'm</span>
            <span className="home-name">Christine Lin</span>
          </h1>
          <p className="home-description">
            Full-stack developer passionate about creating beautiful and functional web applications.
          </p>
          <div className="button-container">
            <div>
              <Link
                to="/projects"
                className="primary-button"
              >
                View My Work
              </Link>
            </div>
            <div>
              <Link
                to="/contact"
                className="secondary-button"
              >
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
            <a
              href="mailto:lin.christine19@gmail.com"
              className="social-link"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}