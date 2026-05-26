import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";
import Cooperados from "../assets/Img/Cooperados.jpeg";

export default function Home() {
    useEffect(() => {
        const image = document.querySelector(".home-image");
        const history = document.querySelector(".home-content");
        const objectives = document.querySelector(".home-objectives");
        const services = document.querySelector(".services");

        const timers = [
            setTimeout(() => image?.classList.add("show"), 200),
            setTimeout(() => history?.classList.add("show"), 700),
            setTimeout(() => objectives?.classList.add("show"), 1100),
            setTimeout(() => services?.classList.add("show"), 1400),
        ];

        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <>
            <section className="home" id="inicio">
                <div className="home-container">
                    <div className="home-image">
                        <img src={Cooperados} alt="Cooperados da Ecolimpo" />
                    </div>

                    <div className="home-content">
                        <span className="home-subtitle">Nossa história</span>
                        <h1>Cooperativa Ecolimpo</h1>

                        <p>
                            A Cooperativa de Trabalho de Catadores Ecolimpo nasceu com o
                            compromisso de transformar a coleta seletiva em uma ação de cuidado
                            com o meio ambiente e de valorização dos trabalhadores da reciclagem.
                        </p>

                        <p>
                            Atuamos em São Sebastião - DF promovendo a separação correta dos
                            materiais recicláveis, contribuindo para uma cidade mais limpa,
                            consciente e sustentável.
                        </p>

                        <p>
                            Fundada em São Sebastião - DF em julho de 2013, a cooperativa é
                            formada exclusivamente por catadores de materiais recicláveis.
                        </p>
                    </div>
                </div>

                <div className="home-objectives">
                    <span className="home-subtitle">
                        Compromisso com a sustentabilidade
                    </span>

                    <h2>Nossos Objetivos</h2>

                    <ul>
                        <li>Proporcionar soluções no campo da sustentabilidade.</li>
                        <li>Organizar os catadores da comunidade.</li>
                        <li>
                            Promover ações em parceria com o poder público e instituições
                            privadas.
                        </li>
                        <li>
                            Reaproveitar e reutilizar os resíduos sólidos do nosso cotidiano,
                            dando destinação ambientalmente correta.
                        </li>
                        <li>
                            Tornar-se socialmente importante na geração de trabalho, emprego e
                            renda na região.
                        </li>
                        <li>
                            Promover ações no campo da educação, agregando três valores:
                            <strong> social</strong>, <strong> ambiental</strong> e
                            <strong> econômico</strong>.
                        </li>
                    </ul>
                </div>
            </section>

            <section className="services" id="servicos">
                <div className="services-container">
                    <span className="section-subtitle">O que fazemos</span>
                    <h2>Nossos Serviços</h2>

                    <div className="services-grid">
                        <div className="service-card">
                            <h3>Coleta Seletiva</h3>
                            <p>
                                Realizamos a coleta e destinação correta de materiais recicláveis,
                                contribuindo para a preservação do meio ambiente.
                            </p>
                        </div>

                        <div className="service-card">
                            <h3>Educação Ambiental</h3>
                            <p>
                                Promovemos palestras e ações educativas em empresas, escolas e
                                instituições, incentivando a consciência ambiental de forma prática.
                            </p>
                        </div>

                        <div className="service-card">
                            <h3>Gincanas Sustentáveis</h3>
                            <p>
                                Realizamos gincanas educativas em escolas, incentivando alunos a
                                praticarem a coleta seletiva de forma divertida.
                            </p>
                        </div>

                        <div className="service-card">
                            <h3>Ações Sociais</h3>
                            <p>
                                Realizamos eventos comunitários que promovem alegria, inclusão e
                                apoio à comunidade local.
                            </p>
                        </div>
                    </div>

                    <Link to="/educacao-ambiental" className="services-button">
                        Conheça nossos serviços
                    </Link>
                </div>
            </section>

            <section className="impact">
                <div className="impact-container">
                    <span className="section-subtitle">Nosso impacto</span>
                    <h2>Transformando vidas e o meio ambiente</h2>

                    <div className="impact-grid">
                        <div className="impact-card">
                            <h3>+50</h3>
                            <p>Toneladas recicladas por mês</p>
                        </div>

                        <div className="impact-card">
                            <h3>+30</h3>
                            <p>Famílias beneficiadas</p>
                        </div>

                        <div className="impact-card">
                            <h3>+20</h3>
                            <p>Parcerias com condomínios</p>
                        </div>

                        <div className="impact-card">
                            <h3>+1000</h3>
                            <p>Pessoas impactadas em ações ambientais</p>
                        </div>
                    </div>

                    <a
                        href="https://wa.me/5561982372013"
                        target="_blank"
                        rel="noreferrer"
                        className="impact-button"
                    >
                        Faça parte dessa transformação
                    </a>
                </div>
            </section>
        </>
    );
}
