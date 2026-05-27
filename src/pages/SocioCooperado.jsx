import {
    FaBalanceScale,
    FaClock,
    FaHandshake,
    FaPeopleCarry,
    FaRecycle,
    FaWhatsapp,
} from "react-icons/fa";
import "../styles/style.css";

const etapas = [
    "Conversar com a cooperativa e conhecer a rotina de trabalho.",
    "Apresentar documentos e preencher o cadastro de interesse.",
    "Participar da orientação sobre direitos, deveres, produção e organização interna.",
    "Aguardar avaliação, disponibilidade de vaga e aprovação conforme estatuto e regimento.",
];

const leis = [
    {
        titulo: "Lei nº 5.764/1971",
        texto: "Define a Política Nacional de Cooperativismo e o regime jurídico das sociedades cooperativas.",
        link: "https://www.planalto.gov.br/ccivil_03/leis/l5764.htm",
    },
    {
        titulo: "Lei nº 12.690/2012",
        texto: "Regula a organização e o funcionamento das cooperativas de trabalho.",
        link: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12690.htm",
    },
    {
        titulo: "Estatuto e regimento interno",
        texto: "Definem regras de admissão, responsabilidades, disciplina, assembleias e rotina da cooperativa.",
        link: "/contato",
    },
];

export default function SocioCooperado() {
    return (
        <main className="socio-page">
            <section className="socio-hero">
                <div className="socio-hero-content">
                    <span>Trabalho cooperado</span>
                    <h1>Seja nosso sócio cooperado</h1>
                    <p>
                        Entenda como funciona uma cooperativa, quais são as responsabilidades de
                        quem ingressa como sócio e como a Ecolimpo organiza a rotina de trabalho,
                        produção e repasse aos cooperados.
                    </p>
                </div>
            </section>

            <section className="socio-intro">
                <div className="socio-text">
                    <span className="section-subtitle">O que é uma cooperativa</span>
                    <h2>Uma sociedade de pessoas que trabalham em cooperação</h2>
                    <p>
                        Cooperativa é uma organização formada por pessoas que se unem para
                        realizar uma atividade econômica de interesse comum. Na cooperativa, o
                        cooperado não é apenas trabalhador: ele também se torna sócio, participa
                        das decisões conforme as regras internas e assume direitos e deveres.
                    </p>
                    <p>
                        Mesmo sendo uma sociedade com gestão democrática, a rotina de trabalho
                        precisa de organização. Por isso, dentro da cooperativa existem funções,
                        coordenações, diretoria, gestão de galpão e regras de convivência para
                        garantir segurança, produtividade e responsabilidade com os contratos.
                    </p>
                </div>

                <div className="socio-destaques">
                    <div>
                        <FaHandshake />
                        <strong>Você se torna sócio</strong>
                        <p>Participa da cooperativa conforme estatuto, regimento e decisões de assembleia.</p>
                    </div>

                    <div>
                        <FaPeopleCarry />
                        <strong>Há organização interna</strong>
                        <p>Diretoria e coordenações ajudam a conduzir escala, disciplina e produção.</p>
                    </div>

                    <div>
                        <FaRecycle />
                        <strong>O ganho vem da produção</strong>
                        <p>A remuneração depende do resultado, dos contratos e da produção apurada.</p>
                    </div>
                </div>
            </section>

            <section className="socio-regras">
                <span className="section-subtitle">Como funciona na prática</span>
                <h2>Rotina, produção e repasse</h2>

                <div className="socio-regras-grid">
                    <article>
                        <FaClock />
                        <h3>Carga horária e escala</h3>
                        <p>
                            A jornada é organizada conforme a necessidade da coleta, do galpão e
                            dos contratos atendidos. As escalas seguem a organização interna e
                            devem observar os limites legais aplicáveis às cooperativas de trabalho.
                        </p>
                    </article>

                    <article>
                        <FaRecycle />
                        <h3>Ganho por produção</h3>
                        <p>
                            O cooperado ganha de acordo com a produção e os resultados apurados.
                            Não é salário fixo de empregado CLT; é participação no resultado da
                            atividade cooperada, conforme regras internas.
                        </p>
                    </article>

                    <article>
                        <FaBalanceScale />
                        <h3>Prazo de repasse</h3>
                        <p>
                            O repasse da produção costuma sair entre 15 e 28 dias, podendo levar
                            mais tempo em algumas situações. A Ecolimpo também depende dos
                            pagamentos do SLU para pagar os cooperados.
                        </p>
                    </article>
                </div>
            </section>

            <section className="socio-etapas">
                <div className="socio-etapas-text">
                    <span className="section-subtitle">Entrada na cooperativa</span>
                    <h2>Como demonstrar interesse</h2>
                    <p>
                        A entrada de novos cooperados depende da necessidade operacional,
                        disponibilidade de vagas, documentação e aceite das regras da cooperativa.
                    </p>
                </div>

                <ol className="socio-etapas-lista">
                    {etapas.map((etapa) => (
                        <li key={etapa}>{etapa}</li>
                    ))}
                </ol>
            </section>

            <section className="socio-leis">
                <span className="section-subtitle">Base legal</span>
                <h2>Leis e regras cooperativistas</h2>

                <div className="socio-leis-grid">
                    {leis.map((lei) => (
                        <a href={lei.link} target={lei.link.startsWith("http") ? "_blank" : undefined} rel="noreferrer" key={lei.titulo}>
                            <strong>{lei.titulo}</strong>
                            <p>{lei.texto}</p>
                        </a>
                    ))}
                </div>
            </section>

            <section className="socio-cta">
                <div>
                    <span>Quer conversar com a Ecolimpo?</span>
                    <h2>Fale com a cooperativa antes de iniciar o cadastro</h2>
                    <p>
                        Tire dúvidas sobre rotina, produção, regras internas e disponibilidade
                        para novos cooperados.
                    </p>
                </div>

                <a href="https://wa.me/5561982372013" target="_blank" rel="noreferrer">
                    <FaWhatsapp />
                    Falar pelo WhatsApp
                </a>
            </section>
        </main>
    );
}
