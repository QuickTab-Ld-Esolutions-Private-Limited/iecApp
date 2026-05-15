/** styles */
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2>
            IEC <span>Portal</span>
          </h2>
        </div>
        <nav className="nav-links">
          <a href="#iecForm">IEC Registration / Modify / Renewal</a>
          <a href="#process">Process</a>
          <a href="#documents">Documents Required</a>
          <a href="#benefits">Benefits</a>
          <a href="#faqs">Faq</a>
        </nav>
        <button className="cta-btn">Apply Now</button>
      </div>
    </header>
  );
};

export default Header;
