import { Link } from "react-router-dom";
import { ExternalLink } from 'lucide-react';
import aboutContent from "../data/about";
import skills from "../data/skills";
import SkillTag from "../components/SkillTag";
import "../styles/about.css";

export default function About() {
  return (
    <div className="container about-container">
      <div className="about-content">

        {/* SECTION 1: BIO */}
        <div className="about-bio-section">
          <h2 className="about-title">{'/ About Me'}</h2>

          <div className="about-text">
            {aboutContent.map((paragraph, index) => (
              <p key={index} className="about-description">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* SECTION 2: SKILLS & CERTS */}
        <div className="about-skills-section">
          <h3 className="about-skills-title">{'Technical Skills'}</h3>

          <div className="about-skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-category">
                <h4 className="skill-category-title">{skillGroup.category}</h4>
                <div className="skill-tags-wrapper">
                  {skillGroup.items.map((item) => (
                    <SkillTag
                      key={item}
                      name={item}
                      isHighlighted={false}
                      onClick={() => { }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="certifications-section">
            <h3 className="about-skills-title">
              {'Certifications'}
            </h3>
            <div className="certifications-list">

              {/* Item 1 */}
              <a href="/cspo.pdf" target="_blank" rel="noopener noreferrer" className="cert-item is-link">
                <div className="cert-content">
                  <span className="cert-title">Certified Scrum Product Owner</span>
                  <span className="cert-meta">Scrum Alliance • 2024</span>
                </div>
                {/* Added className to target via CSS */}
                <ExternalLink className="cert-arrow" size={20} strokeWidth={1.5} />
              </a>

              {/* Item 2 */}
              <a href="/agile-pm.pdf" target="_blank" rel="noopener noreferrer" className="cert-item is-link">
                <div className="cert-content">
                  <span className="cert-title">Agile Project Management</span>
                  <span className="cert-meta">Google • 2023</span>
                </div>
                <ExternalLink className="cert-arrow" size={20} strokeWidth={1.5} />
              </a>

            </div>
          </div>
        </div>

        {/* SECTION 3: FOOTER CTA */}
        <div className="about-cta-wrapper">
          <Link to="/experience" className="cta-button">
            View Experience & Education <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}