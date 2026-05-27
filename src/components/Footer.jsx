import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../styles/style.css";

export default function Footer() {
    return (
        <footer className="footer" id="contato">
            <div className="footer-container">
                <div className="footer-brand">
                    <h2>Cooperativa Ecolimpo</h2>
                    <p>
                        Trabalhando pela coleta seletiva, educação ambiental e por um futuro
                        mais limpo e sustentável.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Navegação</h3>
                    <Link to="/">Início</Link>
                    <Link to="/quem-somos">Quem somos</Link>
                    <Link to="/coleta-seletiva/slu">Coleta seletiva</Link>
                    <Link to="/condominio">Condomínios</Link>
                    <Link to="/educacao-ambiental">Educação ambiental</Link>
                    <Link to="/socio-cooperado">Seja nosso sócio cooperado</Link>
                </div>

                <div className="footer-contact">
                    <h3>Contato</h3>

                    <p>
                        <FaMapMarkerAlt />
                        São Sebastião - DF
                    </p>

                    <a href="mailto:cooperativaecolimpodf@gmail.com">
                        <MdEmail />
                        cooperativaecolimpodf@gmail.com
                    </a>

                    <a href="https://wa.me/5561982372013" target="_blank" rel="noreferrer">
                        <FaWhatsapp />
                        WhatsApp
                    </a>
                </div>

                <div className="footer-social">
                    <h3>Redes sociais</h3>

                    <div className="social-icons">
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram da Ecolimpo">
                            <FaInstagram />
                        </a>

                        <a href="https://www.facebook.com/cooperativaecolimpo/" target="_blank" rel="noreferrer" aria-label="Facebook da Ecolimpo">
                            <FaFacebookF />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 Cooperativa Ecolimpo. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
