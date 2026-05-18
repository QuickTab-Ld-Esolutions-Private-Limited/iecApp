/** sections */
import IecBannerSection from "../components/sections/Banner";
import IecRegistrationForm from "../components/sections/form/IecForm";
import IecProcess from "../components/sections/Process";
import IecDocuments from "../components/sections/Document";
import IecBenefits from "../components/sections/Benefits";
import FaqSection from "../components/sections/FAQ";

/** data */
const documentsData = [
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

const faqData = [
  {
    id: 1,
    question: "What is IEC (Import Export Code)?",
    answer:
      "IEC is a 10-digit code issued by the Directorate General of Foreign Trade (DGFT), required for importing or exporting goods and services from India.",
  },
  {
    id: 2,
    question: "How are standards developed?",
    answer:
      "Standards are developed through a consensus-driven process involving technical committees and international experts.",
  },
  {
    id: 3,
    question: "Who needs an IEC?",
    answer:
      "Any individual or business entity intending to import or export goods/services from India needs an IEC, unless specifically exempted.",
  },
  {
    id: 4,
    question: "What is an international standard?",
    answer:
      "An international standard is a document containing practical information and best practices globally agreed upon by experts.",
  },
  {
    id: 5,
    question: "Is IEC mandatory for service exporters too?",
    answer:
      "IEC is mandatory for service providers if they wish to claim benefits under the Foreign Trade Policy.",
  },
  {
    id: 6,
    question: "How can I purchase IEC Standards and other IEC publications?",
    answer:
      "They can be purchased directly through the official IEC webstore or through authorized national committees.",
  },
  {
    id: 7,
    question: "Is my country a member of IEC?",
    answer:
      "You can check the official IEC website for a complete list of full and associate member countries.",
  },
  {
    id: 8,
    question: "What is conformity assessment?",
    answer:
      "Conformity assessment is the process of demonstrating that a product, service, or system meets specified requirements.",
  },
  {
    id: 9,
    question: "What is IEC Young Professional Programme?",
    answer:
      "It is a program designed to engage the world's upcoming expert engineers and managers in standardization.",
  },
  {
    id: 10,
    question: "What are horizontal standards?",
    answer:
      "Horizontal standards are broad standards that apply across multiple different sectors or product categories.",
  },
  {
    id: 11,
    question: "How can developing countries participate?",
    answer:
      "Developing countries can participate through the Affiliate Country Programme, offering free access to certain standards.",
  },
  {
    id: 12,
    question: "Can I modify or update my IEC details?",
    answer:
      "Yes, IEC details can be modified online through the DGFT portal by submitting the required documents and fees.",
  },
  {
    id: 13,
    question: "Is GST mandatory for IEC registration?",
    answer:
      "While PAN is mandatory, GST is not strictly mandatory for obtaining an IEC, though it is highly recommended.",
  },
  {
    id: 14,
    question: "Can individuals apply for IEC?",
    answer:
      "Yes, individuals acting as proprietors can apply for an IEC using their personal PAN card.",
  },
];

const Home = () => {
  return (
    <div className="app-container">
      <IecBannerSection
        head="Start Import Export Business Today"
        desc="Fast • Reliable • 100% Online Process"
      />
      <IecRegistrationForm />
      <IecProcess />
      <IecDocuments
        title="Documents Required for IEC Registration"
        desc="Keep these documents ready before starting your Import Export Code registration process."
        documents={documentsData}
      />
      <IecBenefits />
      <FaqSection title="Frequently Asked Questions (IEC)" faqData={faqData} />
    </div>
  );
};

export default Home;
