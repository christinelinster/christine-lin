import { Github, Linkedin, Mail } from "lucide-react";
import '../styles/social-links.css'
const SocialLinks = () => {
    return(
        <div className="social-links">
          <hr className="divider"/>
            <a
              href="https://github.com/christinelinster"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Github className="social-icon" />
            </a>
            <a
              href="https://linkedin.com/in/christinelin19"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Linkedin className="social-icon" />
            </a>
            <a href="mailto:lin.christine19@gmail.com" className="social-link">
              <Mail className="social-icon" />
            </a>
            <hr className="divider" />
          </div>
    )

}

export default SocialLinks


