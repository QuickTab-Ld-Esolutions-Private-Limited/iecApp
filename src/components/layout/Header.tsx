/** styles */
import { Link } from "react-router-dom";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2>
            IEC <span>Portal</span>
          </h2>
        </div>

        <nav className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>
            IEC Registration
          </Link>

          <Link to="/iec-modification" onClick={() => setIsOpen(false)}>
            IEC Modification
          </Link>

          <Link to="/iec-renewal" onClick={() => setIsOpen(false)}>
            IEC Renewal
          </Link>

          <a href="#documents" onClick={() => setIsOpen(false)}>
            Documents
          </a>

          <a href="#benefits" onClick={() => setIsOpen(false)}>
            Benefits
          </a>

          <a href="#faqs" onClick={() => setIsOpen(false)}>
            Faq
          </a>

          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <button className="cta-btn mobile-btn">Contact Us</button>
          </Link>
        </nav>

        <Link to="/contact" className="desktop-btn">
          <button className="cta-btn">Contact Us</button>
        </Link>

        <div className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </div>
      </div>
    </header>
  );
};

export default Header;
