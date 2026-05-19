/** styles */
import { Link } from "react-router-dom";
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
          <Link to="/">IEC Registration</Link>
          <Link to="/iec-modification">IEC Modification</Link>
          <Link to="/iec-renewal">IEC Renewal</Link>
          <a href="#documents">Documents</a>
          <a href="#benefits">Benefits</a>
          <a href="#faqs">Faq</a>
        </nav>
        <Link to="/contact">
          <button className="cta-btn">Contact Us</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
