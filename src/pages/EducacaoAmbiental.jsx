import Seo from "../components/Seo";
import WhatsAppForm from "../components/WhatsAppForm";
import EducacaoImg from "../assets/Img/educacao-escolar.jpg";

const services = ["Palestras", "Rodas de conversa", "Gincanas sustentáveis", "Oficinas", "Campanhas de conscientização"];
const fields = [
  { name: "nome", label: "Nome", required: true, minLength: 2, autoComplete: "name" },
  { name: "telefone", label: "Telefone", type: "tel", required: true, minLength: 8, autoComplete: "tel" },
  { name: "email", label: "E-mail", type: "email", required: true, autoComplete: "email" },
  { name: "instituicao", label: "Escola, empresa ou instituição", required: true, minLength: 2, autoComplete: "organization" },
  { name: "regiao", label: "Região", required: true, minLength: 2, autoComplete: "address-level2" },
  { name: "mensagem", label: "Atividade de interesse e mensagem", required: true, minLength: 10, multiline: true },
];

export default function EducacaoAmbiental() {
  return <main id="conteudo" className="educacao-page">
    <Seo title="Educação ambiental para escolas no DF | Ecolimpo" description="Solicite palestras, rodas de conversa, oficinas e ações de educação ambiental da Ecolimpo para escolas, empresas e condomínios." />
    <section className="page-hero"><div><p className="eyebrow">Conhecimento que transforma</p><h1>Educação ambiental para escolas, empresas e comunidades</h1><p>Ações educativas sobre separação de resíduos, coleta seletiva, reciclagem e valorização do trabalho dos catadores.</p><a className="button button-primary" href="#solicitar-acao">Solicitar palestra ou ação</a></div><img src={EducacaoImg} alt="Atividade de educação ambiental com estudantes" width="720" height="480" /></section>
    <section className="section"><div className="section-heading"><p className="eyebrow">Formatos</p><h2>Ações adaptadas ao contexto da instituição</h2></div><div className="card-grid">{services.map(item=><article className="info-card" key={item}><h3>{item}</h3><p>Formato, duração, público e quantidade de participantes são combinados após o primeiro contato.</p></article>)}</div></section>
    <section className="section section-tinted"><div className="section-heading"><p className="eyebrow">Agendamento</p><h2>Como funciona</h2></div><ol className="process-grid">{["Envie a solicitação","Alinhe público e objetivo","Defina formato e data","Confirme a atividade"].map((item,index)=><li key={item}><span>{index+1}</span>{item}</li>)}</ol></section>
    <section className="section proposal-section" id="solicitar-acao"><div><p className="eyebrow">Vamos conversar</p><h2>Solicite uma ação educativa</h2><p>Preencha os dados essenciais. Você poderá revisar toda a mensagem antes de confirmar o envio no WhatsApp.</p></div><WhatsAppForm context="Educação ambiental" fields={fields}/></section>
  </main>;
}
