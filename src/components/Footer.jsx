import React from "react";
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
                    <a href="#inicio">Início</a>
                    <a href="#quem-somos">Quem somos</a>
                    <a href="#coleta-seletiva">Coleta seletiva</a>
                    <a href="#educacao-ambiental">Educação ambiental</a>
                </div>

                <div className="footer-contact">
                    <h3>Contato</h3>

                    <p>
                        <FaMapMarkerAlt />
                        São Sebastião - DF
                    </p>

                    <a href="mailto:contato@ecolimpo.com.br">
                        <MdEmail />
                        coopertivaecolimpodf@gmail.com
                    </a>

                    <a href="https://wa.me/556198237-2013" target="_blank" rel="noreferrer">
                        <FaWhatsapp />
                        WhatsApp
                    </a>
                </div>

                <div className="footer-social">
                    <h3>Redes sociais</h3>

                    <div className="social-icons">
                        <a href="https://www.instagram.com/" aria-label="Instagram">
                            <FaInstagram />
                        </a>

                        <a href="https://www.facebook.com/cooperativaecolimpo/" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    © 2026 Cooperativa Ecolimpo. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}