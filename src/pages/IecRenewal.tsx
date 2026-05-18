/** sections */
import IecBannerSection from "../components/sections/Banner";
import IecRenewalForm from "../components/sections/form/IecRenewalForm";
import IecProcess from "../components/sections/Process";
import IecDocuments from "../components/sections/Document";
import IecBenefits from "../components/sections/Benefits";
import FaqSection from "../components/sections/FAQ";

/** data */
const renewalDocuments = [
  {
    id: 1,
    title: "Existing IEC Certificate",
    description:
      "Copy of the current IEC certificate issued by DGFT for renewal or annual update.",
    icon: "📄",
  },
  {
    id: 2,
    title: "PAN Card",
    description:
      "PAN card copy of the business entity or applicant applying for IEC renewal.",
    icon: "💳",
  },
  {
    id: 3,
    title: "Business Address Proof",
    description:
      "Latest address proof such as Electricity Bill, Rent Agreement, or Sale Deed of the business premises.",
    icon: "📍",
  },
  {
    id: 4,
    title: "Bank Account Proof",
    description:
      "Cancelled cheque or bank certificate showing the active business bank account details.",
    icon: "🏦",
  },
  {
    id: 5,
    title: "Entity Registration Document",
    description:
      "Certificate of Incorporation, LLP Agreement, or Partnership Deed depending on the constitution.",
    icon: "📜",
  },
  {
    id: 6,
    title: "Authorized Signatory Proof",
    description:
      "Aadhaar card or authorization proof of the proprietor, partner, or director handling the IEC renewal.",
    icon: "🪪",
  },
  {
    id: 7,
    title: "Digital Signature / Aadhaar",
    description:
      "Digital Signature Certificate (DSC) or Aadhaar-based OTP verification for filing the renewal application.",
    icon: "🔐",
  },
];

const renewalFaqData = [
  {
    id: 1,
    question: "What is IEC Renewal?",
    answer:
      "IEC Renewal refers to the annual update or confirmation of IEC details on the DGFT portal to keep the IEC active.",
  },
  {
    id: 2,
    question: "Is IEC renewal mandatory every year?",
    answer:
      "Yes, IEC holders are required to update or confirm their IEC details annually as per DGFT guidelines.",
  },
  {
    id: 3,
    question: "What happens if IEC is not renewed?",
    answer:
      "Failure to update or renew IEC may lead to deactivation of the IEC code and interruption in import-export activities.",
  },
  {
    id: 4,
    question: "Can IEC renewal be done online?",
    answer:
      "Yes, IEC renewal or annual updation can be completed online through the DGFT portal.",
  },
  {
    id: 5,
    question: "What documents are required for IEC renewal?",
    answer:
      "Common documents include PAN card, address proof, bank proof, existing IEC certificate, and business registration documents.",
  },
  {
    id: 6,
    question: "How much time does IEC renewal take?",
    answer:
      "IEC renewal is generally completed within 1–2 working days after successful submission of documents.",
  },
  {
    id: 7,
    question: "Do I need DSC for IEC renewal?",
    answer:
      "A DSC or Aadhaar-linked OTP verification may be required to authenticate and submit the IEC renewal application.",
  },
];
const IecRenewalPage = () => {
  return (
    <div className="app-container">
      <IecBannerSection
        head="IEC Renewal Online"
        desc="Fast • Reliable • 100% Online Process"
      />
      <IecRenewalForm />
      <IecProcess />
      <IecDocuments
        title="Documents Required for IEC Renewal"
        desc="Keep these documents ready before starting your Import Export Code Renewal process."
        documents={renewalDocuments}
      />
      <IecBenefits />
      <FaqSection
        title="Frequently Asked Questions (IEC Renewal)"
        faqData={renewalFaqData}
      />
    </div>
  );
};

export default IecRenewalPage;
