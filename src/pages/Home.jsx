import { Link } from "react-router-dom";
import { FaBuilding, FaChalkboardTeacher, FaHandsHelping, FaRecycle, FaTruck, FaUsers } from "react-icons/fa";
import Cooperados from "../assets/Img/Cooperados.jpeg";
import Seo from "../components/Seo";
import { areasServed, whatsappMessages, whatsappUrl } from "../data/site";

const services = [
  { icon: FaTruck, title: "Coleta seletiva", text: "Coleta e encaminhamento correto dos materiais recicláveis." },
  { icon: FaRecycle, title: "Triagem e destinação", text: "Separação dos recicláveis e destinação ambientalmente correta." },
  { icon: FaBuilding, title: "Condomínios", text: "Planejamento da coleta com síndicos, administradoras e moradores." },
  { icon: FaChalkboardTeacher, title: "Educação ambiental", text: "Palestras, ações educativas e gincanas sustentáveis." },
  { icon: FaHandsHelping, title: "Ações sociais", text: "Iniciativas que fortalecem a comunidade e a inclusão." },
  { icon: FaUsers, title: "Valorização dos catadores", text: "Geração de trabalho, renda e organização coletiva." },
];

const process = ["Contato", "Avaliação da necessidade", "Orientação", "Coleta", "Triagem", "Destinação correta"];

export default function Home() {
  return (
    <main id="conteudo">
      <Seo title="Cooperativa Ecolimpo | Coleta seletiva em São Sebastião - DF" description="Cooperativa de catadores com coleta seletiva, triagem, atendimento a condomínios e educação ambiental em São Sebastião, Distrito Federal." />

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Cooperativa de catadores no Distrito Federal</p>
          <h1>Coleta seletiva que transforma resíduos em trabalho, renda e sustentabilidade.</h1>
          <p>A Ecolimpo atende condomínios, empresas, escolas e comunidades com coleta seletiva, triagem, educação ambiental e destinação correta dos materiais recicláveis no Distrito Federal.</p>
          <div className="button-row">
            <Link className="button button-primary" to="/condominio#proposta-condominio">Solicitar uma proposta</Link>
            <a className="button button-whatsapp" href={whatsappUrl(whatsappMessages.geral)} target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a>
            <Link className="button button-secondary" to="/coleta-seletiva/slu">Consultar dias da coleta</Link>
            <Link className="button button-secondary" to="/educacao-ambiental#solicitar-acao">Solicitar palestra</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={Cooperados} alt="Cooperados da Ecolimpo reunidos" width="722" height="542" fetchPriority="high" />
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Nossa história</p>
          <h2>Cooperação que transforma resíduos em oportunidade</h2>
        </div>
        <div>
          <p>Fundada em São Sebastião - DF em julho de 2013, a Cooperativa de Trabalho de Catadores Ecolimpo é formada exclusivamente por catadores de materiais recicláveis.</p>
          <p>A cooperativa promove separação correta, geração de trabalho e renda e ações de educação ambiental, atuando nas regiões confirmadas nas rotas de coleta e parcerias.</p>
          <Link className="text-link" to="/quem-somos">Conheça a cooperativa →</Link>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="section-heading">
          <p className="eyebrow">O que fazemos</p>
          <h2>Soluções para a comunidade, condomínios e instituições</h2>
        </div>
        <div className="card-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="info-card" key={title}>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Como funciona</p>
          <h2>Do primeiro contato à destinação correta</h2>
        </div>
        <ol className="process-grid">
          {process.map((step, index) => <li key={step}><span>{index + 1}</span>{step}</li>)}
        </ol>
      </section>

      <section className="section materials-section">
        <div>
          <p className="eyebrow">Separação responsável</p>
          <h2>Materiais recicláveis</h2>
          <p>Aprenda a preparar os recicláveis com segurança e confirme itens específicos antes da coleta.</p>
        </div>
        <div className="confirm-card">
          <h3>Separação responsável</h3>
          <p>Mantenha os materiais secos, sem resíduos orgânicos e proteja partes cortantes.</p>
          <Link className="text-link" to="/materiais-reciclaveis">Ver orientações →</Link>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="section-heading">
          <p className="eyebrow">Onde atuamos</p>
          <h2>Regiões informadas nas rotas atuais</h2>
        </div>
        <ul className="area-list">{areasServed.map((area) => <li key={area}>{area}</li>)}</ul>
        <Link className="text-link" to="/coleta-seletiva/slu">Ver dias e turnos da coleta SLU →</Link>
      </section>

      <section className="final-cta">
        <div>
          <p className="eyebrow">Vamos reciclar melhor?</p>
          <h2>Condomínios, empresas, escolas e moradores podem fazer parte dessa transformação</h2>
        </div>
        <div className="button-row">
          <a className="button button-whatsapp" href={whatsappUrl("Olá! Gostaria de conversar com a Ecolimpo.")} target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a>
          <Link className="button button-light" to="/contato">Outros canais</Link>
        </div>
      </section>
    </main>
  );
}
