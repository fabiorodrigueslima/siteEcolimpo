import {
    FaHandshake,
    FaPeopleCarry,
    FaRecycle,
    FaWhatsapp,
} from "react-icons/fa";
import "../styles/style.css";
import Seo from "../components/Seo";
import { whatsappMessages, whatsappUrl } from "../data/site";

const etapas = [
    "Conversar com a cooperativa e conhecer a rotina de trabalho.",
    "Informar que deseja participar e esclarecer dúvidas iniciais.",
    "Confirmar diretamente com a Ecolimpo a documentação e os requisitos necessários.",
    "Aguardar o retorno da cooperativa; demonstrar interesse não garante entrada automática.",
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
        <main className="socio-page" id="conteudo">
            <Seo title="Interesse em ser sócio-cooperado | Ecolimpo" description="Entenda como demonstrar interesse em participar da Cooperativa Ecolimpo e quais informações ainda precisam ser confirmadas." />
            <section className="socio-hero">
                <div className="socio-hero-content">
                    <span>Trabalho cooperado</span>
                    <h1>Seja nosso sócio cooperado</h1>
                    <p>
                        Entenda o que significa participar de uma cooperativa e como demonstrar
                        interesse. Requisitos, documentos e disponibilidade devem ser confirmados
                        diretamente com a Ecolimpo.
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

                    <div><FaRecycle /><strong>Há direitos e deveres</strong><p>A participação segue o estatuto, o regimento e as decisões coletivas.</p></div>
                </div>
            </section>

            <section className="socio-etapas">
                <div className="socio-etapas-text">
                    <span className="section-subtitle">Entrada na cooperativa</span>
                    <h2>Como demonstrar interesse</h2>
                    <p>
                        A entrada não é automática. Documentos, requisitos, disponibilidade e
                        etapas internas precisam ser confirmados diretamente com a cooperativa.
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

                <a href={whatsappUrl(whatsappMessages.cooperado)} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp />
                    Falar pelo WhatsApp
                </a>
            </section>
        </main>
    );
}
