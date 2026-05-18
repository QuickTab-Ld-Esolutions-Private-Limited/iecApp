import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/** layout */
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

/** pages */
import Home from "./pages/Home";
import IecModificationPage from "./pages/IecModification";
import IecRenewalPage from "./pages/IecRenewal";

function App() {
  return (
    <BrowserRouter>
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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
