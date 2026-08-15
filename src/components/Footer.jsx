import { Link } from "react-router-dom";
import { FaFacebookF, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { site, whatsappUrl } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src="/Nova-logo.png" alt="Cooperativa Ecolimpo" width="164" height="76" loading="lazy" />
          <p>Coleta seletiva, educação ambiental e valorização dos catadores em São Sebastião, Distrito Federal.</p>
        </div>
        <div className="footer-links">
          <h2>Navegação</h2>
          <Link to="/quem-somos">Quem somos</Link>
          <Link to="/coleta-seletiva/slu">Coleta seletiva</Link>
          <Link to="/condominio">Condomínios</Link>
          <Link to="/materiais-reciclaveis">Materiais recicláveis</Link>
          <Link to="/educacao-ambiental">Educação ambiental</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/privacidade">Política de privacidade</Link>
        </div>
        <div className="footer-contact">
          <h2>Contato</h2>
          <p><FaMapMarkerAlt aria-hidden="true" />{site.address}</p>
          <a href={site.phoneHref}><MdPhone aria-hidden="true" />{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}><MdEmail aria-hidden="true" />{site.email}</a>
          <a href={whatsappUrl("Olá! Gostaria de falar com a Cooperativa Ecolimpo.")} target="_blank" rel="noopener noreferrer"><FaWhatsapp aria-hidden="true" />WhatsApp</a>
          <a href={site.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF aria-hidden="true" />Facebook</a>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Cooperativa Ecolimpo. Todos os direitos reservados.</div>
    </footer>
  );
}
