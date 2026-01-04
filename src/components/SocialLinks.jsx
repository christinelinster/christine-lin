import { Github, Linkedin, Mail } from 'lucide-react';
import '../styles/social-links.css';

const socials = [
  { icon: Github, href: 'https://github.com/christinelinster', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/christinelin19', label: 'LinkedIn' },
  {icon: Mail, href:'mailto:lin.christine19@gmail.com', label: 'Email'}
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
          <a href="mailto:lin.christine19@gmail.com" className="email-link">
            lin.christine19@gmail.com
          </a>
        </div>

        <div className="social-line"></div>
      </div>
    </div>
  );
}