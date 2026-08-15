import { FaBuilding, FaClipboardCheck, FaRecycle, FaUsers } from "react-icons/fa";
import Seo from "../components/Seo";
import WhatsAppForm from "../components/WhatsAppForm";
import Cooperados from "../assets/Img/Cooperados.jpeg";

const benefits = [
  [FaClipboardCheck, "Diagnóstico", "Entendimento da rotina, do espaço disponível e das necessidades do condomínio."],
  [FaBuilding, "Planejamento", "Definição conjunta da operação e da frequência após avaliação."],
  [FaUsers, "Orientação", "Comunicação clara para administração, equipe e moradores."],
  [FaRecycle, "Coleta e destinação", "Retirada organizada e encaminhamento dos materiais recicláveis."],
];
const fields = [
  { name: "nome", label: "Nome", required: true, minLength: 2, autoComplete: "name" },
  { name: "condominio", label: "Condomínio", required: true, minLength: 2, autoComplete: "organization" },
  { name: "telefone", label: "Telefone", type: "tel", required: true, minLength: 8, autoComplete: "tel" },
  { name: "regiao", label: "Região", required: true, minLength: 2, autoComplete: "address-level2" },
  { name: "mensagem", label: "Mensagem", required: true, minLength: 10, multiline: true },
];

export default function Condominio() {
  return <main id="conteudo" className="condominio-page">
    <Seo title="Coleta seletiva para condomínios no DF | Ecolimpo" description="Leve coleta seletiva organizada, orientação aos moradores e destinação correta para seu condomínio no Distrito Federal." />
    <section className="page-hero"><div><p className="eyebrow">Síndicos e administradoras</p><h1>Leve uma coleta seletiva organizada e educativa para o seu condomínio.</h1><p>A Ecolimpo avalia a rotina do local, orienta moradores e planeja uma solução adequada para a separação e coleta dos recicláveis.</p><a className="button button-primary" href="#proposta-condominio">Solicitar uma proposta</a></div><img src={Cooperados} alt="Equipe da Cooperativa Ecolimpo" width="722" height="542" /></section>
    <section className="section"><div className="section-heading"><p className="eyebrow">Atendimento planejado</p><h2>Da avaliação à coleta</h2></div><div className="card-grid">{benefits.map(([Icon,title,text]) => <article className="info-card" key={title}><Icon aria-hidden="true"/><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="section section-tinted"><div className="section-heading"><p className="eyebrow">Implantação</p><h2>Um processo simples e acompanhado</h2></div><ol className="process-grid">{["Solicitação inicial","Diagnóstico da rotina","Proposta e planejamento","Orientação aos moradores","Início e acompanhamento"].map((item,index)=><li key={item}><span>{index+1}</span>{item}</li>)}</ol></section>
    <section className="section faq"><div className="section-heading"><p className="eyebrow">Dúvidas frequentes</p><h2>Antes de solicitar</h2></div><details><summary>A frequência é igual para todos?</summary><p>Não. A frequência é definida após avaliar a rotina, o volume e a estrutura do condomínio.</p></details><details><summary>A Ecolimpo orienta os moradores?</summary><p>A orientação faz parte do planejamento e ajuda a reduzir erros na separação.</p></details><details><summary>O formulário já envia meus dados?</summary><p>Não. Ele prepara uma mensagem para você revisar e confirmar no WhatsApp.</p></details></section>
    <section className="section proposal-section" id="proposta-condominio"><div><p className="eyebrow">Solicite uma proposta</p><h2>Conte um pouco sobre o condomínio</h2><p>As informações ajudam a organizar o primeiro atendimento. Nenhum dado é enviado automaticamente.</p></div><WhatsAppForm context="Proposta para condomínio" fields={fields}/></section>
  </main>;
}
