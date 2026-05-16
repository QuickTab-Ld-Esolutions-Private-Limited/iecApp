/** styles */
import "./Benefits.scss";

const IecBenefits = () => {
  const benefits = [
    {
      id: 1,
      icon: "🌍",
      title: "Global Market Reach",
      description:
        "Unlock international markets and expand your business globally. An IEC is mandatory for importing or exporting goods and services.",
    },
    {
      id: 2,
      icon: "♾️",
      title: "Lifetime Validity",
      description:
        "Once issued, an IEC is valid for the lifetime of the entity. It requires no renewal, saving you from recurring fees and paperwork.",
    },
    {
      id: 3,
      icon: "📝",
      title: "No Return Filing",
      description:
        "IEC does not require the filing of any returns. Even for international transactions, there are no annual compliance requirements with DGFT.",
    },
    {
      id: 4,
      icon: "🏛️",
      title: "Government Benefits",
      description:
        "Companies with an IEC can avail various benefits from Customs, Export Promotion Councils, and the Directorate General of Foreign Trade (DGFT).",
    },
    {
      id: 5,
      icon: "⚡",
      title: "Quick Processing",
      description:
        "Obtaining an IEC code is fairly easy and can usually be completed online within a few days without the need to provide proof of any actual export or import.",
    },
    {
      id: 6,
      icon: "🏦",
      title: "Smooth Bank Transactions",
      description:
        "Banks require the IEC for processing outward remittances for imports and receiving inward remittances for exports.",
    },
  ];

  return (
    <section className="content-wrapper benefits-wrapper" id="benefits">
      <div className="primary-head">
        <h2>Key Benefits of IEC Registration</h2>
        <p>
          Discover why obtaining an Import Export Code is essential for your
          business growth.
        </p>
      </div>

      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <div className="benefit-card" key={benefit.id}>
            <div className="benefit-icon">{benefit.icon}</div>
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IecBenefits;
