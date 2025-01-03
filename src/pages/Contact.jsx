import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "../styles/datepicker.css";
import "../styles/contact.css";
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ ...formData, meetingDate: selectedDate });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Exclude weekends and past dates
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-header">
          <h1 className="contact-title">Get In Touch</h1>
        </div>
        <div className="contact-grid">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">
                  Preferred Meeting Date
                </label>
                <DatePicker
                  selected={selectedDate}
                  onChange={date => setSelectedDate(date)}
                  filterDate={isWeekday}
                  minDate={new Date()}
                  className="form-input"
                  placeholderText="Select a weekday"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="submit-button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>
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
    </div>
  );
}