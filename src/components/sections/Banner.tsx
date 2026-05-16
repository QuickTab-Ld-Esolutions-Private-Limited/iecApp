import "./Banner.scss";

const IecBannerSection = () => {
  const topText =
    "This is a private consultancy self registration portal for obtaining import export code. Portal fees are consultancy in nature.";

  const bottomText =
    "It is mandatory to update your Importer Exporter Code (IEC) between 1st April to 30th June to keep your IEC activated every year. Notification No. 58 / 201...";

  return (
    <section className="iec-main-content">
      {/* 1. Page Sub-Header Gradient (matching Registration Form) */}
      <div className="header-gradient"></div>

      {/* 2. Top Scrolling Text (above banner) */}
      <div className="top-ticker">
        <div className="ticker-content">
          <p>
            {topText} {topText}
          </p>
        </div>
      </div>

      {/* 3. Central Banner with Port Image and Overlays */}
      <div className="central-banner">
        {/* Background image is handled by SCSS. 
            The visual content should be a large port scene with a stack of shipping containers (blue, red, orange), cargo ships, a large container forklift lifting a red container, and an airplane in a clear blue sky. */}
        <div className="banner-overlay">
          <div className="banner-text-content">
            <h1>Start Import Export Business Today</h1>
            <p>Fast • Reliable • 100% Online Process</p>
          </div>
        </div>
      </div>

      {/* 4. Bottom Scrolling Text (below banner) */}
      <div className="bottom-ticker">
        <div className="ticker-content">
          <p>
            {bottomText} {bottomText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default IecBannerSection;
