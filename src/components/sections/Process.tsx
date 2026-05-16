/** styles */
import "./Process.scss";

const IecProcess = () => {
  const processData = [
    { title: "Fill the Form", desc: "Submit your basic details online." },
    { title: "Make Payment", desc: "Pay securely via our payment gateway." },
    {
      title: "Expert Processing",
      desc: "Our team validates and processes your application.",
    },
    {
      title: "Get Certificate",
      desc: "Receive your IEC directly in your email.",
    },
  ];

  return (
    <section className="process" id="process">
      <div className="process-container">
        <h2>How It Works</h2>
        <div className="process-grid">
          {processData.map((process, index) => (
            <div className="process-card" key={index}>
              <div className="step-number">{index + 1}</div>
              <h4>{process.title}</h4>
              <p>{process.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IecProcess;
