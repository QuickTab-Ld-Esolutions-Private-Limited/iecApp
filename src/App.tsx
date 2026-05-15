/** layout */
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

/** sections */
import IecBannerSection from "./components/sections/Banner";
import RegistrationForm from "./components/sections/Form";
import IecProcess from "./components/sections/Process";
import IecDocuments from "./components/sections/Document";
import IecBenefits from "./components/sections/Benefits";
import FaqSection from "./components/sections/FAQ";

function App() {
  return (
    <div className="app-container">
      <Header />
      <IecBannerSection />
      <RegistrationForm />
      <IecProcess />
      <IecDocuments />
      <IecBenefits />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;
