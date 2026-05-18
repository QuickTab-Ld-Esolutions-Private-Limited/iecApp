import { useState } from "react";

/** styles */
import "./FAQ.scss";

/** interfaces */
interface IFaqItem {
  id: number;
  question: string;
  answer: string;
}

interface IFaqSection {
  title: string;
  faqData: IFaqItem[];
}

const FaqSection: React.FC<IFaqSection> = ({ title, faqData }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="content-wrapper faq-container" id="faqs">
      <div className="primary-head">
        <h2>{title}</h2>
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
    </section>
  );
};

export default FaqSection;
