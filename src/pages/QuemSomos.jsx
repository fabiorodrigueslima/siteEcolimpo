import React, { useEffect } from "react";
import "../styles/style.css";
import Equipe from "../assets/Img/Cooperados.jpeg";

export default function QuemSomos() {
    useEffect(() => {
        const elementos = document.querySelectorAll(".animate-page");

        const observer = new IntersectionObserver(
            (entradas) => {
                entradas.forEach((entrada) => {
                    if (entrada.isIntersecting) {
                        entrada.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.2 }
        );

        elementos.forEach((elemento) => observer.observe(elemento));

        return () => {
            elementos.forEach((elemento) => observer.unobserve(elemento));
        };
    }, []);

    return (
        <main className="quem-somos-page">
            <section className="quem-hero animate-page">
                <div className="quem-hero-content">
                    <span>Cooperativa Ecolimpo</span>
                    <h1>Quem Somos</h1>
                    <p>
                        A Cooperativa de Trabalho de Catadores Ecolimpo é um empreendimento
                        social de economia solidária, fundada em São Sebastião-DF em julho
                        de 2013, formada exclusivamente por catadores de materiais
                        recicláveis.
                    </p>
                </div>
            </section>

            <section className="quem-historia animate-page">
                <div className="quem-container">
                    <div className="quem-img">
                        <img src={Equipe} alt="Equipe da Cooperativa Ecolimpo" />
                    </div>

                    <div className="quem-texto">
                        <span>Nossa história</span>
                        <h2>Transformando resíduos em oportunidade</h2>

                        <p>
                            A Ecolimpo trabalha com a coleta seletiva, triagem e destinação
                            correta dos materiais recicláveis, promovendo sustentabilidade,
                            geração de renda e valorização dos catadores.
                        </p>

                        <p>
                            A cooperativa busca organizar os catadores da comunidade, criar
                            parcerias com o poder público e instituições privadas, além de
                            promover ações de educação ambiental.
                        </p>
                    </div>
                </div>
            </section>

            <section className="missao-visao-valores animate-page">
                <div className="mvv-card">
                    <h3>Missão</h3>
                    <p>
                        Promover a sustentabilidade e a preservação ambiental por meio da
                        reciclagem eficiente e responsável de resíduos.
                    </p>
                </div>

                <div className="mvv-card">
                    <h3>Visão</h3>
                    <p>
                        Ser referência em reciclagem sustentável, inspirando e educando a
                        comunidade sobre a gestão responsável de resíduos.
                    </p>
                </div>

                <div className="mvv-card">
                    <h3>Valores</h3>
                    <ul>
                        <li>Sustentabilidade</li>
                        <li>Transparência</li>
                        <li>Equidade</li>
                        <li>Democracia</li>
                        <li>Cooperação</li>
                        <li>Inclusão</li>
                        <li>Responsabilidade social</li>
                    </ul>
                </div>
            </section>

            <section className="quem-info animate-page">
                <div className="info-card">
                    <h3>O que fazemos</h3>
                    <p>
                        Realizamos coleta seletiva inclusiva, triagem de materiais
                        recicláveis, educação ambiental, palestras, gincanas sustentáveis e
                        ações sociais.
                    </p>
                </div>

                <div className="info-card">
                    <h3>Como fazemos</h3>
                    <p>
                        Trabalhamos com campanhas de mobilização e sensibilização da
                        comunidade para a separação correta dos materiais recicláveis.
                    </p>
                </div>

                <div className="info-card">
                    <h3>Melhoria que buscamos</h3>
                    <p>
                        Buscamos fortalecer a coleta seletiva, gerar trabalho e renda,
                        ampliar parcerias e contribuir para uma cidade mais limpa.
                    </p>
                </div>
            </section>

            <section className="equipe-diretoria animate-page">
                <span>Nossa organização</span>
                <h2>Equipe da Cooperativa</h2>

                <h3 className="equipe-titulo">Diretoria</h3>

                <div className="equipe-grid">
                    <div className="equipe-card">
                        <div className="foto-placeholder">👤</div>
                        <h4>JÚLIO CÉSAR</h4>
                        <p>Presidente</p>
                        <span>(61) 981828264</span>
                    </div>

                    <div className="equipe-card">
                        <div className="foto-placeholder">👤</div>
                        <h4>FÁBIO RODRIGUES</h4>
                        <p>Secretário</p>
                        <span>(61) 984882881</span>
                    </div>

                    <div className="equipe-card">
                        <div className="foto-placeholder">👤</div>
                        <h4>LENIR CONCEIÇÃO</h4>
                        <p>Tesoureira</p>
                        <span>(61) 992023893</span>
                    </div>
                </div>

                <h3 className="equipe-titulo">Gestão de Galpão</h3>

                <div className="equipe-grid">
                    <div className="equipe-card">
                        <div className="foto-placeholder">👤</div>
                        <h4>PATRICIA ALVES</h4>
                        <p>Gestora de Galpão</p>
                        <span>(61) 993488719</span>
                    </div>

                    <div className="equipe-card">
                        <div className="foto-placeholder">👤</div>
                        <h4>LENIR CONCEIÇÃO</h4>
                        <p>Auxiliar da Gestão</p>
                        <span>(61) 992023893</span>
                    </div>
                </div>

                <h3 className="equipe-titulo">Conselho Fiscal</h3>
                <h4 className="subtitulo">Titulares</h4>

                <div className="equipe-grid">
                    <div className="equipe-card">
                        <div className="foto-placeholder">👤</div>
                        <h4>RIAN VITOR</h4>
                        <p>Conselheiro Fiscal Titular</p>
                        <span>(61) 995139692</span>
                    </div>

                    <div className="equipe-card">
                        <div className="foto-placeholder">👤</div>
                        <h4>ALMERINDA CORREIA</h4>
                        <p>Conselheiro Fiscal Titular</p>
                        <span>(61) 999999999</span>
                    </div>

                    <div className="equipe-card">
                        <div className="foto-placeholder">👤</div>
                        <h4>ROGÉRIO PESSOA</h4>
                        <p>Conselheiro Fiscal Titular</p>
                        <span>(61) 985416322</span>
                    </div>
                </div>

                <h4 className="subtitulo">Suplentes</h4>

                <div className="equipe-grid">
                    <div className="equipe-card">
                        <div className="foto-placeholder">👤</div>
                        <h4>MILAGORS</h4>
                        <p>Conselheiro Fiscal Suplente</p>
                        <span>(61) 996444832</span>
                    </div>

                    <div className="equipe-card">
                        <div className="foto-placeholder">👤</div>
                        <h4>RAFAEL DUARTE</h4>
                        <p>Conselheiro Fiscal Suplente</p>
                        <span>(61) 992017008</span>
                    </div>

                    <div className="equipe-card">
                        <div className="foto-placeholder">👤</div>
                        <h4>MARIA CRISTIANE</h4>
                        <p>Conselheiro Fiscal Suplente</p>
                        <span>(61) 992149586</span>
                    </div>
                </div>
            </section>

            <section className="localizacao animate-page">
                <div className="localizacao-container">
                    <div className="localizacao-texto">
                        <span>Onde estamos</span>
                        <h2>Localização</h2>

                        <p>
                            ADE PRO-DF CJ.01 Lote 9, Bonsucesso, São Sebastião - DF.
                            CEP: 71.698-001.
                        </p>

                        <p>Contatos: (61) 98237-2013 / (61) 4103-1515</p>

                        <p>E-mail: cooperativaecolimpodf@gmail.com</p>
                    </div>

                    <div className="localizacao-mapa">
                        <iframe
                            src="https://www.google.com/maps?q=-15.9096691,-47.7772288&z=17&output=embed"
                            width="100%"
                            height="320"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title="Cooperativa Ecolimpo"
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