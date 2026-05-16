import { useState } from "react";

/** styles */
import "./FAQ.scss";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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

  return (
    <div className="faq-container" id="faqs">
      <div className="primary-head">
        <h2>Frequently Asked Question (IEC)</h2>
      </div>

      <div className="faq-grid">
        {faqData.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={faq.id}
          >
            <div
              className="faq-question-bar"
              onClick={() => toggleAccordion(index)}
            >
              <div className="accent-curve"></div>
              <span className="question-text">{faq.question}</span>
              <button className="toggle-icon">
                {activeIndex === index ? "−" : "+"}
              </button>
            </div>

            <div className="faq-answer">
              <div className="answer-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
