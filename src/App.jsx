import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import EducacaoAmbiental from "./pages/EducacaoAmbiental";
import Contato from "./pages/Contato";
import SLU from "./pages/SLU";
import Condominio from "./pages/Condominio";
import SocioCooperado from "./pages/SocioCooperado";
import Privacidade from "./pages/Privacidade";
import NotFound from "./pages/NotFound";
import Materiais from "./pages/Materiais";

function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/educacao-ambiental" element={<EducacaoAmbiental />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/coleta-seletiva/slu" element={<SLU />} />
        <Route path="/condominio" element={<Condominio />} />
        <Route path="/socio-cooperado" element={<SocioCooperado />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/materiais-reciclaveis" element={<Materiais />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}
