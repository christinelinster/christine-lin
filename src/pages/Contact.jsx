import "../styles/contact.css";
import { Mail, MapPin, Linkedin, Github, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container contact-container">
      <div className="contact-content">
        <div className="contact-grid">

          {/* Left Column: Message & Primary Action */}
          <div className="contact-main">
            <h2 className="contact-label">Get In Touch</h2>
            <h1 className="contact-title">Let's build something <br/>together.</h1>
            <p className="contact-description">
              I'm open to software engineering opportunities and collaborations.
              Whether you're hiring, have a question, or just want to connect, I'd love to hear from you!
            </p>

            <a href="mailto:lin.christine19@gmail.com" className="primary-contact-btn">
              Send Message <ArrowRight size={18} />
            </a>
          </div>

          {/* Right Column: Information Sidebar */}
          <div className="contact-sidebar">
            <div className="contact-info-list">
              <div className="contact-info-item">
                <Mail className="contact-icon" />
                <div className="info-text">
                  <span className="info-label">Email</span>
                  <a href="mailto:lin.christine19@gmail.com" className="contact-link">lin.christine19@gmail.com</a>
                </div>
              </div>

              <div className="contact-info-item">
                <Linkedin className="contact-icon" />
                <div className="info-text">
                  <span className="info-label">LinkedIn</span>
                  <a href="https://linkedin.com/in/christinelin19" target="_blank" rel="noopener noreferrer" className="contact-link">christinelin19</a>
                </div>
              </div>

              <div className="contact-info-item">
                <Github className="contact-icon" />
                <div className="info-text">
                  <span className="info-label">GitHub</span>
                  <a href="https://github.com/christinelinster" target="_blank" rel="noopener noreferrer" className="contact-link">christinelinster</a>
                </div>
              </div>

              <div className="contact-info-item">
                <MapPin className="contact-icon" />
                <div className="info-text">
                  <span className="info-label">Location</span>
                  <span className="info-value">Toronto, ON</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}