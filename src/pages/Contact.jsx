
import "../styles/contact.css";
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Contact() {

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-header">
          <h1 className="contact-title">Get In Touch</h1>
          <p>Get in touch message here.</p>
          <button className="submit-button"><a href="mailto:lin.christine19@gmail.com">Send Message</a></button>
        </div>
          <div className="contact-info">
            <div className="contact-info-list">
              <div className="contact-info-item">
                <Mail className="contact-info-icon" />
                <a href="mailto:lin.christine19@gmail.com" className="contact-link">
                  lin.christine19@gmail.com
                </a>
              </div>
              <div className="contact-info-item">
                <Linkedin className="contact-info-icon" />
                <a href="https://linkedin.com/in/christinelin19" target="_blank" rel="noopener noreferrer" className="contact-link">
                  linkedin.com/in/christinelin19
                </a>
              </div>
              <div className="contact-info-item">
                <Github className="contact-info-icon" />
                <a href="https://github.com/christinelinster" target="_blank" rel="noopener noreferrer" className="contact-link">
                  github.com/christinelinster
                </a>
              </div>

              <div className="contact-info-item">
                <MapPin className="contact-info-icon" />
                <span>Toronto, ON</span>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}