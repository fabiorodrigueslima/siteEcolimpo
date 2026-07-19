import { useEffect } from "react";
import "../styles/style.css";
import Equipe from "../assets/Img/Cooperados.jpeg";
import Seo from "../components/Seo";

const diretoria = [
    ["JC", "Júlio César", "Presidente", "(61) 98182-8264"],
    ["FR", "Fábio Rodrigues", "Secretário", "(61) 98488-2881"],
    ["LC", "Lenir Conceição", "Tesoureira", "(61) 99202-3893"],
];

const gestao = [
    ["PA", "Patricia Alves", "Gestora de Galpão", "(61) 99348-8719"],
    ["LC", "Lenir Conceição", "Auxiliar da Gestão", "(61) 99202-3893"],
];

const conselhoTitulares = [
    ["RV", "Rian Vitor", "Conselheiro Fiscal Titular", "(61) 99513-9692"],
    ["AC", "Almerinda Correia", "Conselheira Fiscal Titular", ""],
    ["RP", "Milagros Hernandez", "Conselheiro Fiscal Titular", "(61)99644-4832"],
];

const conselhoSuplentes = [
    ["MI", "Rogerio da Silva", "Conselheira Fiscal Suplente", "(61) 98541-6322"],
    ["RD", "Rafael Duarte", "Conselheiro Fiscal Suplente", "(61) 99201-7008"],
    ["MC", "Maria Cristiane", "Conselheira Fiscal Suplente", "(61) 99214-9586"],
];

function PessoaCard({ pessoa }) {
    const [iniciais, nome, cargo, telefone] = pessoa;

    return (
        <div className="equipe-card">
            <div className="foto-placeholder" aria-hidden="true">{iniciais}</div>
            <h4>{nome}</h4>
            <p>{cargo}</p>
            {telefone && <span>{telefone}</span>}
        </div>
    );
}

export default function QuemSomos() {
    useEffect(() => {
        const elementos = document.querySelectorAll(".animate-page");

        if (!("IntersectionObserver" in window)) {
            elementos.forEach((elemento) => elemento.classList.add("show"));
            return;
        }

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

        return () => observer.disconnect();
    }, []);

    return (
        <main className="quem-somos-page" id="conteudo">
            <Seo title="Quem somos | Cooperativa Ecolimpo" description="Conheça a história, a missão e a organização da Cooperativa Ecolimpo, cooperativa de catadores de São Sebastião - DF." />
            <section className="quem-hero animate-page">
                <div className="quem-hero-content">
                    <span>Cooperativa Ecolimpo</span>
                    <h1>Quem Somos</h1>
                    <p>
                        A Cooperativa de Trabalho de Catadores Ecolimpo é um empreendimento
                        social de economia solidária, fundada em São Sebastião - DF em julho
                        de 2013, formada exclusivamente por catadores de materiais recicláveis.
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
                        Realizamos coleta seletiva inclusiva, triagem de materiais recicláveis,
                        educação ambiental, palestras, gincanas sustentáveis e ações sociais.
                    </p>
                </div>

                <div className="info-card">
                    <h3>Como fazemos</h3>
                    <p>
                        Trabalhamos com campanhas de mobilização e sensibilização da comunidade
                        para a separação correta dos materiais recicláveis.
                    </p>
                </div>

                <div className="info-card">
                    <h3>Melhoria que buscamos</h3>
                    <p>
                        Buscamos fortalecer a coleta seletiva, gerar trabalho e renda, ampliar
                        parcerias e contribuir para uma cidade mais limpa.
                    </p>
                </div>
            </section>

            <section className="equipe-diretoria animate-page show">
                <span>Nossa organização</span>
                <h2>Equipe da Cooperativa</h2>

                <h3 className="equipe-titulo">Diretoria</h3>
                <div className="equipe-grid">
                    {diretoria.map((pessoa) => <PessoaCard key={`${pessoa[1]}-${pessoa[2]}`} pessoa={pessoa} />)}
                </div>

                <h3 className="equipe-titulo">Gestão de Galpão</h3>
                <div className="equipe-grid">
                    {gestao.map((pessoa) => <PessoaCard key={`${pessoa[1]}-${pessoa[2]}`} pessoa={pessoa} />)}
                </div>

                <h3 className="equipe-titulo">Conselho Fiscal</h3>
                <h4 className="subtitulo">Titulares</h4>
                <div className="equipe-grid">
                    {conselhoTitulares.map((pessoa) => <PessoaCard key={`${pessoa[1]}-${pessoa[2]}`} pessoa={pessoa} />)}
                </div>

                <h4 className="subtitulo">Suplentes</h4>
                <div className="equipe-grid">
                    {conselhoSuplentes.map((pessoa) => <PessoaCard key={`${pessoa[1]}-${pessoa[2]}`} pessoa={pessoa} />)}
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

                        <p>Contatos: (61) 98237-2013</p>
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
                            Ver no Google Maps
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
