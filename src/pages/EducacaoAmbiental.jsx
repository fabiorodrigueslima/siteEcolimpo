import { useState, useEffect } from "react";
import "../styles/style.css";

import EducacaoImg from "../assets/Img/educacao-escolar.jpg";
import galeria1 from "../assets/Img/galeria1.jpg";
import galeria2 from "../assets/Img/galeria2.jpg";
import galeria3 from "../assets/Img/galeria3.jpg";
import galeria4 from "../assets/Img/galeria4.jpg";

export default function EducacaoAmbiental() {
    const [tipoServico, setTipoServico] = useState("");
    const [form, setForm] = useState({
        nome: "",
        telefone: "",
        email: "",
        local: "",
        mensagem: "",
    });

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
    }, [tipoServico]);

    function abrirFormulario(servico) {
        setTipoServico(servico);

        setTimeout(() => {
            document.querySelector(".form-solicitacao")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }

    function fecharFormulario() {
        setTipoServico("");
    }

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function enviarSolicitacao(e) {
        e.preventDefault();

        const texto = `
Olá, vim pelo site da Cooperativa Ecolimpo e quero solicitar: ${tipoServico}

Nome: ${form.nome}
Telefone: ${form.telefone}
E-mail: ${form.email}
Local: ${form.local}
Mensagem: ${form.mensagem}
`;

        window.open(`https://wa.me/5561982372013?text=${encodeURIComponent(texto)}`, "_blank", "noopener,noreferrer");
    }

    return (
        <main className="educacao-page">
            <section className="educacao-hero animate-page">
                <div className="educacao-hero-content">
                    <span>Consciência e sustentabilidade</span>
                    <h1>Educação Ambiental</h1>
                    <p>
                        A Cooperativa Ecolimpo promove ações educativas para incentivar a
                        separação correta dos materiais recicláveis e fortalecer o cuidado
                        com o meio ambiente.
                    </p>
                </div>
            </section>

            <section className="educacao-intro animate-page">
                <div className="educacao-container">
                    <div className="educacao-img">
                        <img src={EducacaoImg} alt="Educação ambiental da Ecolimpo" />
                    </div>

                    <div className="educacao-texto">
                        <span>O que fazemos</span>
                        <h2>Levamos conhecimento para escolas, empresas e instituições</h2>

                        <p>
                            Realizamos palestras, rodas de conversa e atividades educativas sobre
                            reciclagem, coleta seletiva, preservação ambiental e responsabilidade social.
                        </p>

                        <p>
                            Também desenvolvemos gincanas sustentáveis em escolas, envolvendo
                            alunos, professores e comunidade.
                        </p>
                    </div>
                </div>
            </section>

            <section className="educacao-cards animate-page" id="servicos-educacao">
                <div className="educacao-card">
                    <h3>Palestras</h3>
                    <p>Educação ambiental em empresas e escolas.</p>
                    <button type="button" onClick={() => abrirFormulario("Palestra")}>
                        Solicitar
                    </button>
                </div>

                <div className="educacao-card">
                    <h3>Gincanas</h3>
                    <p>Atividades práticas e educativas.</p>
                    <button type="button" onClick={() => abrirFormulario("Gincana Sustentável")}>
                        Solicitar
                    </button>
                </div>

                <div className="educacao-card">
                    <h3>Conscientização</h3>
                    <p>Orientação sobre reciclagem e meio ambiente.</p>
                    <button type="button" onClick={() => abrirFormulario("Conscientização Ambiental")}>
                        Solicitar
                    </button>
                </div>
            </section>

            {tipoServico && (
                <section className="form-solicitacao animate-page">
                    <div className="form-container">
                        <button className="form-close" type="button" onClick={fecharFormulario} aria-label="Fechar formulário">
                            ×
                        </button>

                        <h2>Solicitar {tipoServico}</h2>

                        <form onSubmit={enviarSolicitacao}>
                            <input type="text" name="nome" placeholder="Seu nome" value={form.nome} onChange={handleChange} required />
                            <input type="tel" name="telefone" placeholder="Telefone" value={form.telefone} onChange={handleChange} required />
                            <input type="email" name="email" placeholder="E-mail" value={form.email} onChange={handleChange} required />
                            <input type="text" name="local" placeholder="Local" value={form.local} onChange={handleChange} required />
                            <textarea name="mensagem" placeholder="Mensagem" value={form.mensagem} onChange={handleChange} required></textarea>

                            <button type="submit">Enviar solicitação</button>
                        </form>
                    </div>
                </section>
            )}

            <section className="educacao-como-funciona animate-page">
                <span className="section-subtitle">Etapas</span>
                <h2>Como funciona</h2>

                <div className="como-grid">
                    <div className="como-card">
                        <strong>1</strong>
                        <h3>Solicitação</h3>
                        <p>Contato com a cooperativa.</p>
                    </div>

                    <div className="como-card">
                        <strong>2</strong>
                        <h3>Planejamento</h3>
                        <p>Organização da atividade.</p>
                    </div>

                    <div className="como-card">
                        <strong>3</strong>
                        <h3>Execução</h3>
                        <p>Realização da ação.</p>
                    </div>

                    <div className="como-card">
                        <strong>4</strong>
                        <h3>Impacto</h3>
                        <p>Aprendizado sustentável.</p>
                    </div>
                </div>
            </section>

            <section className="galeria-educacao animate-page">
                <span className="section-subtitle">Galeria</span>
                <h2>Fotos</h2>

                <div className="galeria-grid">
                    <img src={galeria1} alt="Ação ambiental" />
                    <img src={galeria2} alt="Palestra ambiental" />
                    <img src={galeria3} alt="Gincana sustentável" />
                    <img src={galeria4} alt="Coleta seletiva" />
                </div>
            </section>

            <section className="educacao-cta animate-page">
                <div className="educacao-cta-content">
                    <h2>Leve educação ambiental para sua instituição</h2>
                    <p>Solicite agora uma ação com a Ecolimpo.</p>
                    <a href="#servicos-educacao">Solicitar</a>
                </div>
            </section>
        </main>
    );
}
