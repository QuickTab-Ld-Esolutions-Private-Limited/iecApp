/** styles */
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} IEC Registration Portal. All Rights
          Reserved.
        </p>
        <p className="disclaimer">
          Disclaimer: We are a private consultancy firm and are not directly
          affiliated with the Government of India. We charge a fee for our
          expert registration services.
        </p>
        <nav className="imp-links">
          <Link to="/contact">Contact Us</Link>
          <Link to="/terms">Terms and Conditions</Link>
          <Link to="/refund-policy">Refund Policy</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
