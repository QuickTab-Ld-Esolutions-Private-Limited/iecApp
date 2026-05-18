/** sections */
import IecBannerSection from "../components/sections/Banner";
import IecModificationForm from "../components/sections/form/IecModifyForm";
import IecProcess from "../components/sections/Process";
import IecDocuments from "../components/sections/Document";
import IecBenefits from "../components/sections/Benefits";
import FaqSection from "../components/sections/FAQ";

/** data */
const modificationDocuments = [
  {
    id: 1,
    title: "Existing IEC Certificate",
    description:
      "Copy of the existing Import Export Code (IEC) certificate issued by DGFT.",
    icon: "📄",
  },
  {
    id: 2,
    title: "PAN Card",
    description:
      "PAN card copy of the applicant entity such as Proprietorship, Partnership Firm, LLP, or Company.",
    icon: "💳",
  },
  {
    id: 3,
    title: "Address Proof",
    description:
      "Updated business address proof such as Utility Bill, Rent Agreement, Sale Deed, or Aadhaar.",
    icon: "📍",
  },
  {
    id: 4,
    title: "Bank Proof",
    description:
      "Cancelled cheque or bank certificate with the name of the business/entity clearly printed.",
    icon: "🏦",
  },
  {
    id: 5,
    title: "Supporting Amendment Proof",
    description:
      "Relevant supporting documents for requested changes such as Name Change Certificate, Board Resolution, or Partnership Deed.",
    icon: "📝",
  },
  {
    id: 6,
    title: "Entity Registration Proof",
    description:
      "Updated Certificate of Incorporation, LLP Agreement, or Partnership Deed as applicable.",
    icon: "📜",
  },
  {
    id: 7,
    title: "Digital Signature / Aadhaar",
    description:
      "DSC of authorized signatory or Aadhaar-linked mobile number for OTP verification and e-sign.",
    icon: "🔐",
  },
];

const modificationFaqData = [
  {
    id: 1,
    question: "What is IEC Modification?",
    answer:
      "IEC Modification is the process of updating or correcting details in an existing Import Export Code (IEC) issued by DGFT.",
  },
  {
    id: 2,
    question: "When should I modify my IEC certificate?",
    answer:
      "You should modify your IEC whenever there is a change in business name, address, bank details, director/partner details, email ID, or mobile number.",
  },
  {
    id: 3,
    question: "Is IEC modification mandatory?",
    answer:
      "Yes, keeping IEC details updated is important to avoid issues during import-export transactions and DGFT compliance checks.",
  },
  {
    id: 4,
    question: "Can I change bank details in IEC?",
    answer:
      "Yes, bank account details can be updated through the IEC modification process by submitting valid bank proof documents.",
  },
  {
    id: 5,
    question: "How long does IEC modification take?",
    answer:
      "IEC modification usually takes 1–3 working days, depending on document verification and DGFT processing.",
  },
  {
    id: 6,
    question: "Do I need DSC for IEC modification?",
    answer:
      "A Digital Signature Certificate (DSC) or Aadhaar-based OTP verification may be required for submitting the modification application.",
  },
  {
    id: 7,
    question: "Can I modify IEC online?",
    answer:
      "Yes, IEC modification can be completed online through the DGFT portal by uploading the required documents.",
  },
];

const IecModificationPage = () => {
  return (
    <div className="app-container">
      <IecBannerSection
        head="IEC Modification / Update Online"
        desc="Fast • Reliable • 100% Online Process"
      />
      <IecModificationForm />
      <IecProcess />
      <IecDocuments
        title="Documents Required for IEC Modification"
        desc="Keep these documents ready before starting your Import Export Code modification or update process."
        documents={modificationDocuments}
      />
      <IecBenefits />
      <FaqSection
        title="Frequently Asked Questions (IEC Modification)"
        faqData={modificationFaqData}
      />
    </div>
  );
};

export default IecModificationPage;
