import { useState } from "react";

/** styles */
import "./Contact.scss";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLFormElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLFormElement
    >,
  ) => {
    e.preventDefault();

    console.log("--- Modern Form Submitted ---");
    console.table(formData);

    alert("Thank you! Your message has been logged to the console.");

    setFormData({
      name: "",
      email: "",
      mobile: "",
      message: "",
    });
  };

  return (
    <div className="contact-page-wrapper">
      <div className="primary-head">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-form-wrapper">
        <div className="contact-grid">
          {/* Left Side: Modern Company Details Panel */}
          <div className="company-info-sidebar">
            <div className="info-header">
              <h2>Contact Information</h2>
              <p>
                Have questions or feedback? Reach out to us directly, or drop us
                a message via the form.
              </p>
            </div>

            <div className="info-details">
              <div className="info-item">
                <span className="icon">📍</span>
                <div className="details">
                  <h3>Our Office</h3>
                  <p>
                    Holding No 342, Line No 12 Kasidih,
                    <br />
                    Sakchi, Jamshedpur - 831001, Jharkhand
                  </p>
                </div>
              </div>

              <div className="info-item">
                <span className="icon">📞</span>
                <div className="details">
                  <h3>Phone Number</h3>
                  <p>
                    <Link to="tel:6746755985">+91 67467 55985</Link>
                  </p>
                </div>
              </div>

              <div className="info-item">
                <span className="icon">✉️</span>
                <div className="details">
                  <h3>Email Address</h3>
                  <p>
                    <Link to="mailto:email@importexportregistration.com">
                      email@importexportregistration.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="info-footer">
              <p>Response time: Usually within 24 hours.</p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="form-container">
            <h3>Send us a Message</h3>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Split row for Email and Mobile */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="youremail@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+91 99999 99999"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
