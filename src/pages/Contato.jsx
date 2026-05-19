import React, { useEffect } from "react";
import "../styles/style.css";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Contato() {

    /* ANIMAÇÃO */
    useEffect(() => {
        const elementos = document.querySelectorAll(".animate-page");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.2 }
        );

        elementos.forEach((el) => observer.observe(el));

        return () => {
            elementos.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <main className="contato-page">

            {/* HERO */}
            <section className="contato-hero animate-page">
                <span>Fale conosco</span>
                <h1>Contato</h1>
                <p>Entre em contato com a Cooperativa Ecolimpo.</p>
            </section>

            {/* CONTEÚDO */}
            <section className="contato-section animate-page">
                <div className="contato-container">

                    {/* ESQUERDA */}
                    <div className="contato-info">
                        <h2>Cooperativa Ecolimpo</h2>

                        <p>
                            <FaMapMarkerAlt />
                            ADE PRO-DF CJ.01 Lote 9, Bonsucesso, São Sebastião - DF.
                        </p>

                        <p>
                            <MdPhone />
                            (61) 98237-2013
                        </p>

                        <p>
                            <MdEmail />
                            cooperativaecolimpodf@gmail.com
                        </p>

                        <a
                            href="https://wa.me/5561982372013"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contato-whatsapp"
                        >
                            <FaWhatsapp />
                            Falar no WhatsApp
                        </a>

                        {/* REDES */}
                        <div className="contato-redes">
                            <h3>Nossas redes</h3>

                            <div className="contato-icons">
                                <a href="#" aria-label="Instagram">
                                    <FaInstagram />
                                </a>

                                <a href="#" aria-label="Facebook">
                                    <FaFacebookF />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* DIREITA */}
                    <div className="contato-mapa">
                        <iframe
                            src="https://www.google.com/maps?q=-15.9096691,-47.7772288&z=17&output=embed"
                            width="100%"
                            height="420"
                            style={{ border: 0 }}
                            loading="lazy"
                            title="Mapa da Cooperativa Ecolimpo"
                        ></iframe>

                        <a
                            href="https://www.google.com/maps/place/Cooperativa+Ecolimpo/@-15.9096639,-47.7798037,17z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-mapa"
                        >
                            📍 Ver no Google Maps
                        </a>
                    </div>

                </div>
            </section>

        </main>
    );
}