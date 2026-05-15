/** styles */
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
      </div>
    </footer>
  );
};

export default Footer;
