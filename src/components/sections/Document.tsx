/** styles */
import type React from "react";
import "./Document.scss";

/** interfaces */
interface IDocumentData {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface IDocument {
  title: string;
  desc: string;
  documents: IDocumentData[];
}

// <h2>Documents Required for IEC</h2>
// <p>
//   Keep these documents ready before starting your Import Export Code
//   registration process.
// </p>

const IecDocuments: React.FC<IDocument> = ({ title, desc, documents }) => {
  return (
    <section className="content-wrapper documents-wrapper" id="documents">
      <div className="primary-head">
        <h2>{title}</h2>
        <p>{desc}</p>
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
    </section>
  );
};

export default IecDocuments;
