import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import EducacaoAmbiental from "./pages/EducacaoAmbiental";
import Contato from "./pages/Contato";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import SLU from "./pages/SLU";
import Condominio from "./pages/Condominio";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/educacao-ambiental" element={<EducacaoAmbiental />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/coleta-seletiva/slu" element={<SLU />} />
        <Route path="/condominio" element={<Condominio />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
