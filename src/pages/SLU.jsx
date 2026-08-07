import "../styles/style.css";
import { FaTruck, FaRecycle, FaMapMarkerAlt, FaLeaf } from "react-icons/fa";
import Seo from "../components/Seo";
import { whatsappMessages, whatsappUrl } from "../data/site";

export default function SLU() {
    return (
        <main className="slu-page" id="conteudo">
            <Seo title="Coleta seletiva e atendimento SLU | Ecolimpo" description="Confira regiões, dias e turnos da coleta seletiva realizada pela Ecolimpo em parceria com o SLU no Distrito Federal." />
            <section className="slu-hero">
                <div className="slu-hero-content">
                    <span>Coleta Seletiva</span>
                    <h1>Serviço de Limpeza Urbana - SLU</h1>

                    <p>
                        A Cooperativa Ecolimpo atua em parceria com o Serviço de Limpeza
                        Urbana, realizando a coleta seletiva em regiões do Distrito Federal.
                    </p>
                </div>
            </section>

            <section className="slu-horarios">
                <div className="slu-horarios-box">
                    <div className="slu-alerta">Sua atitude faz toda diferença!</div>

                    <div className="slu-horarios-content">
                        <h2>
                            Atenção Jardins Mangueiral, Jardim Botânico III e São Sebastião!
                        </h2>

                        <p>Fique atento aos locais e horários da coleta seletiva.</p>

                        <p className="slu-info-texto">
                            Confira abaixo os dias, horários e regiões atendidas pela coleta
                            seletiva da Cooperativa Ecolimpo em parceria com o SLU. Deixe os
                            materiais recicláveis separados corretamente e disponíveis nos
                            horários indicados para facilitar a coleta.
                        </p>

                        <div className="tabela-wrapper">
                            <table className="tabela-slu">
                                <thead>
                                    <tr>
                                        <th>Região atendida</th>
                                        <th>Frequência</th>
                                        <th>Turno</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Jardins Mangueiral, Jardim Botânico III e Av. Marginal DF 001</td>
                                        <td>Segunda e quinta</td>
                                        <td>Manhã</td>
                                    </tr>

                                    <tr>
                                        <td>Bairros São José, São Francisco e Centro</td>
                                        <td>Terça</td>
                                        <td>Manhã</td>
                                    </tr>

                                    <tr>
                                        <td>B. Vila Nova Ruas 12 até 54, B. Bela Vista e Res. do Bosque</td>
                                        <td>Quarta e sexta</td>
                                        <td>Manhã</td>
                                    </tr>

                                    <tr>
                                        <td>Av. São Sebastião e Res. Oeste Quadras 201 até 206 e 301 até 307</td>
                                        <td>Terça e quinta</td>
                                        <td>Tarde</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            Av. Comercial, B. São Bartolomeu Quadras 1 e 2, B. Tradicional,
                                            Res. Oeste Quadras 101 até 104, Ruas 12, 13, 14, 15A e 16 e Morro Azul
                                        </td>
                                        <td>Segunda e quarta</td>
                                        <td>Tarde</td>
                                    </tr>

                                    <tr>
                                        <td>Bairros São José, São Francisco e Centro</td>
                                        <td>Sexta</td>
                                        <td>Tarde</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section className="slu-sobre">
                <div className="slu-container">
                    <div className="slu-texto">
                        <span className="section-tag">Parceria com o SLU</span>
                        <h2>Coleta seletiva com responsabilidade</h2>

                        <p>
                            A Cooperativa Ecolimpo possui contrato de coleta seletiva com o
                            Serviço de Limpeza Urbana - SLU.
                        </p>

                        <p>
                            Por meio dessa parceria, realizamos a coleta de materiais recicláveis,
                            contribuindo para uma cidade mais limpa, sustentável e consciente.
                        </p>

                        <p>
                            Atualmente, a cooperativa é responsável pela coleta seletiva em São
                            Sebastião, Jardim Mangueiral, Jardim Botânico III e Avenida Marginal DF 001.
                        </p>
                    </div>

                    <div className="slu-destaque">
                        <FaTruck />
                        <h3>Atendimento SLU</h3>
                        <p>Coleta, transporte e encaminhamento correto dos materiais recicláveis.</p>
                    </div>
                </div>
            </section>

            <section className="slu-regioes">
                <span className="section-tag">Locais atendidos</span>
                <h2>Regiões de atendimento</h2>

                <div className="slu-grid">
                    <div className="slu-card">
                        <FaMapMarkerAlt />
                        <h3>São Sebastião</h3>
                        <p>Atendimento com coleta seletiva e destinação correta.</p>
                    </div>

                    <div className="slu-card">
                        <FaMapMarkerAlt />
                        <h3>Jardim Mangueiral</h3>
                        <p>Recolhimento de materiais recicláveis em áreas atendidas.</p>
                    </div>

                    <div className="slu-card">
                        <FaMapMarkerAlt />
                        <h3>Jardim Botânico III</h3>
                        <p>Coleta seletiva para fortalecimento da reciclagem local.</p>
                    </div>

                    <div className="slu-card">
                        <FaMapMarkerAlt />
                        <h3>Av. Marginal DF 001</h3>
                        <p>Atendimento na rota de coleta seletiva da cooperativa.</p>
                    </div>
                </div>
            </section>

            <section className="slu-processo">
                <div className="processo-item">
                    <FaRecycle />
                    <h3>Coleta</h3>
                    <p>Os materiais recicláveis são recolhidos nas regiões atendidas.</p>
                </div>

                <div className="processo-item">
                    <FaTruck />
                    <h3>Transporte</h3>
                    <p>O material é levado para a cooperativa com segurança.</p>
                </div>

                <div className="processo-item">
                    <FaLeaf />
                    <h3>Destinação correta</h3>
                    <p>Os recicláveis são separados e encaminhados para reaproveitamento.</p>
                </div>
            </section>

            <section className="slu-cta">
                <h2>Separe seus recicláveis corretamente</h2>
                <p>
                    A participação da comunidade é essencial para fortalecer a coleta seletiva,
                    preservar o meio ambiente e valorizar o trabalho dos cooperados.
                </p>

                <a href={whatsappUrl(whatsappMessages.coleta)} target="_blank" rel="noopener noreferrer" className="slu-btn">
                    Falar com a Ecolimpo
                </a>
            </section>
        </main>
    );
}
