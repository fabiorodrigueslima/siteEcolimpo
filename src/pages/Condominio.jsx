import { FaBuilding, FaClipboardCheck, FaExternalLinkAlt, FaRecycle, FaWhatsapp } from "react-icons/fa";
import "../styles/style.css";

import LogoMirante from "../assets/Img/condominios/mirante.png";
import LogoSanFrancisco from "../assets/Img/condominios/san-francisco-ii.png";
import LogoParqueMirante from "../assets/Img/condominios/parque-mirante.png";

const formularioProposta =
    "https://docs.google.com/forms/d/1SCA6Ut7v60Fn8Cb4T0PWQCghAzwZlg7LDpbhF3YauE0/viewform";

const formularioEmbed = `${formularioProposta}?embedded=true`;

const condominiosParceiros = [
    {
        nome: "Mirante",
        regiao: "Região do Tororó - DF",
        descricao: "Parceria para coleta seletiva, orientação ambiental e destinação correta dos recicláveis.",
        logo: LogoMirante,
    },
    {
        nome: "San Francisco II",
        regiao: "Condomínio residencial",
        descricao: "Atendimento planejado para apoiar a rotina de separação e coleta dos materiais recicláveis.",
        logo: LogoSanFrancisco,
    },
    {
        nome: "Parque Mirante",
        regiao: "Região do Tororó - DF",
        descricao: "Coleta seletiva organizada em parceria com a administração e moradores do condomínio.",
        logo: LogoParqueMirante,
    },
];

export default function Condominio() {
    return (
        <main className="condominio-page">
            <section className="condominio-hero">
                <div className="condominio-hero-content">
                    <span>Coleta seletiva para condomínios</span>
                    <h1>Parcerias na região do Tororó</h1>
                    <p>
                        A Cooperativa Ecolimpo atua em parceria com condomínios da região do
                        Tororó, oferecendo coleta seletiva organizada, orientação ambiental e
                        destinação correta dos materiais recicláveis.
                    </p>
                </div>
            </section>

            <section className="condominio-intro">
                <div className="condominio-intro-text">
                    <span className="section-subtitle">Atendimento residencial</span>
                    <h2>Uma solução prática para condomínios que querem reciclar melhor</h2>
                    <p>
                        Cada condomínio possui uma rotina diferente. Por isso, o atendimento é
                        planejado considerando volume de resíduos, espaço de armazenamento,
                        frequência de coleta e necessidade de sensibilização dos moradores.
                    </p>
                </div>

                <div className="condominio-beneficios">
                    <div>
                        <FaRecycle />
                        <strong>Coleta seletiva</strong>
                        <p>Retirada dos recicláveis com encaminhamento ambientalmente correto.</p>
                    </div>

                    <div>
                        <FaClipboardCheck />
                        <strong>Planejamento</strong>
                        <p>Definição de frequência, horários e orientações para a administração.</p>
                    </div>

                    <div>
                        <FaBuilding />
                        <strong>Condomínios</strong>
                        <p>Atendimento voltado para residenciais, síndicos e administradoras.</p>
                    </div>
                </div>
            </section>

            <section className="condominio-parceiros">
                <span className="section-subtitle">Condomínios parceiros</span>
                <h2>Quem já caminha com a Ecolimpo</h2>

                <div className="condominio-grid">
                    {condominiosParceiros.map((condominio) => (
                        <article className="condominio-card" key={condominio.nome}>
                            <div className="condominio-logo">
                                <img src={condominio.logo} alt={`Logo ${condominio.nome}`} />
                            </div>

                            <h3>{condominio.nome}</h3>
                            <small>{condominio.regiao}</small>
                            <p>{condominio.descricao}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="condominio-cta-final">
                <div className="condominio-cta-bg"></div>
                <div className="condominio-cta-overlay"></div>
                <div className="condominio-light"></div>

                <div className="condominio-cta-container">
                    <div className="condominio-cta-content">
                        <span className="condominio-cta-tag">Solução completa para síndicos e administradoras</span>

                        <h2>Implante uma coleta seletiva organizada no seu condomínio</h2>

                        <p>
                            A Ecolimpo ajuda o condomínio a sair da intenção para a prática:
                            avaliamos a rotina, planejamos a coleta, orientamos moradores e
                            encaminhamos os recicláveis para destinação correta.
                        </p>

                        <div className="condominio-cta-numbers">
                            <div>
                                <strong>3</strong>
                                <span>Condomínios parceiros destacados</span>
                            </div>

                            <div>
                                <strong>Tororó</strong>
                                <span>Atendimento regional planejado</span>
                            </div>

                            <div>
                                <strong>SLU</strong>
                                <span>Experiência com coleta seletiva</span>
                            </div>
                        </div>

                        <div className="condominio-cta-infos">
                            <div className="cta-info-card">
                                <strong>Diagnóstico da rotina</strong>
                                <span>Avaliamos espaço, volume e melhor frequência de coleta.</span>
                            </div>

                            <div className="cta-info-card">
                                <strong>Comunicação com moradores</strong>
                                <span>Orientação simples para melhorar a separação dos recicláveis.</span>
                            </div>

                            <div className="cta-info-card">
                                <strong>Proposta objetiva</strong>
                                <span>O formulário reúne os dados necessários para retornarmos com clareza.</span>
                            </div>
                        </div>

                        <div className="condominio-cta-buttons">
                            <a href="#proposta-condominio" className="cta-whatsapp">
                                Solicitar proposta
                            </a>

                            <a href={formularioProposta} target="_blank" rel="noreferrer" className="cta-formulario">
                                Abrir formulário
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="condominio-orcamento" id="proposta-condominio">
                <div className="condominio-orcamento-text">
                    <span className="section-subtitle">Solicite uma proposta</span>
                    <h2>Orçamento para coleta seletiva</h2>
                    <p>
                        Preencha o formulário de proposta para avaliarmos a melhor frequência de
                        coleta e retornarmos com uma solução adequada ao condomínio.
                    </p>

                    <a href={formularioProposta} target="_blank" rel="noreferrer" className="condominio-form-link">
                        Abrir formulário em nova aba
                        <FaExternalLinkAlt />
                    </a>

                    <a href="https://wa.me/5561982372013" target="_blank" rel="noreferrer" className="condominio-whatsapp-link">
                        <FaWhatsapp />
                        Tirar dúvidas pelo WhatsApp
                    </a>
                </div>

                <div className="condominio-form-frame">
                    <iframe src={formularioEmbed} title="Formulário de proposta para coleta seletiva" loading="lazy">
                        Carregando formulário de proposta...
                    </iframe>
                </div>
            </section>
        </main>
    );
}
