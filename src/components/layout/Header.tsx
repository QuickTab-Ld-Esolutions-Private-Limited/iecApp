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
          <a href="#iecForm">IEC Registration</a>
          <a href="#">IEC Modification</a>
          <a href="#">IEC Renewal</a>
          <a href="#benefits">Benefits</a>
          <a href="#faqs">Faq</a>
        </nav>
        <a href="#">
          <button className="cta-btn">Contact Us</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
