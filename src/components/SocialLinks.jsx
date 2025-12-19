import { Github, Linkedin, Twitter } from 'lucide-react';
import '../styles/social-links.css';

const socials = [
  { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
];

export default function SocialLinks() {
  return (
    <div className="social-wrapper">
      {/* The Desktop Sidebar & Mobile Tab */}
      <div className="social-sidebar right-side">
        <div className="social-links-list">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-item"
            >
              <social.icon className="social-icon-img" />
            </a>
          ))}
        </div>

        {/* Email Link: Vertical on Desktop */}
        <div className="email-container">
          <a href="mailto:your@email.com" className="email-link">
            your@email.com
          </a>
        </div>

        <div className="social-line"></div>
      </div>
    </div>
  );
}