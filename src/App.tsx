import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/** layout */
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

/** pages */
import Home from "./pages/Home";
import IecModificationPage from "./pages/IecModification";
import IecRenewalPage from "./pages/IecRenewal";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

/** policy pages */
import PrivacyPolicy from "./pages/policy/PrivacyPolicy";
import Terms from "./pages/policy/Terms";
import RefundPolicy from "./pages/policy/RefundPolicy";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        style={{ zIndex: 999999 }}
      />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iec-modification" element={<IecModificationPage />} />
        <Route path="/iec-renewal" element={<IecRenewalPage />} />
        <Route path="/contact" element={<Contact />} />

        {/* policy pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
