import "./ThankYou.scss";

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-card">
        {/* Animated Checkmark Icon */}
        <div className="icon-container">
          <svg
            className="checkmark-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              className="checkmark-circle"
              d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
            ></path>
            <polyline
              className="checkmark-check"
              points="22 4 12 14.01 9 11.01"
            ></polyline>
          </svg>
        </div>

        {/* Messaging */}
        <h1 className="thank-you-title">Application Received!</h1>
        <p className="thank-you-message">
          We received your application for <strong>IEC Registration</strong>.
          <br />
          Our team will get in touch with you shortly.
        </p>

        {/* Optional Action Button */}
        <button
          className="home-button"
          onClick={() => (window.location.href = "/")}
        >
          Return to Homepage
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
