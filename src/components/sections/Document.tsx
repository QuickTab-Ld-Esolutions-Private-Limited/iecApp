/** styles */
import "./Document.scss";

const IecDocuments = () => {
  const documents = [
    {
      id: 1,
      title: "PAN Card",
      description:
        "Copy of the PAN card of the individual, partnership firm, LLP, or company applying for the IEC.",
      icon: "💳",
    },
    {
      id: 2,
      title: "Address Proof",
      description:
        "Valid address proof of the business premises (e.g., Sale Deed, Rent Agreement, Utility Bill, or Aadhaar).",
      icon: "📍",
    },
    {
      id: 3,
      title: "Bank Account Proof",
      description:
        "A cancelled cheque bearing the pre-printed name of the applicant entity, or a Bank Certificate.",
      icon: "🏦",
    },
    {
      id: 4,
      title: "Entity Registration",
      description:
        "Certificate of Incorporation, Partnership Deed, or LLP Agreement (depending on the constitution of the business).",
      icon: "📜",
    },
    {
      id: 5,
      title: "Digital Signature / Aadhaar",
      description:
        "Class 2 or Class 3 Digital Signature Certificate (DSC) or linked Aadhaar for e-signing the application.",
      icon: "🔐",
    },
    {
      id: 6,
      title: "Passport Size Photograph",
      description:
        "Recent passport-size photograph of the applicant (Proprietor, Partner, or Director).",
      icon: "📸",
    },
  ];

  return (
    <div className="documents-wrapper" id="documents">
      <div className="documents-header">
        <h2>Documents Required for IEC</h2>
        <p>
          Keep these documents ready before starting your Import Export Code
          registration process.
        </p>
      </div>

      <div className="documents-grid">
        {documents.map((doc) => (
          <div className="document-card" key={doc.id}>
            <div className="doc-icon-wrapper">
              <span className="doc-icon">{doc.icon}</span>
              <div className="check-mark">✓</div>
            </div>
            <div className="doc-content">
              <h3 className="doc-title">{doc.title}</h3>
              <p className="doc-description">{doc.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IecDocuments;
