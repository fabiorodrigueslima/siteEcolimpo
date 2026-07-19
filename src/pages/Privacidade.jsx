import Seo from "../components/Seo";
import { site } from "../data/site";

export default function Privacidade() {
  return (
    <main id="conteudo" className="simple-page">
      <Seo title="Política de privacidade | Cooperativa Ecolimpo" description="Como a Cooperativa Ecolimpo trata os dados enviados por seus canais de contato." />
      <article className="privacy-content">
        <p className="eyebrow">Privacidade</p>
        <h1>Política de privacidade</h1>
        <p>Este site solicita apenas os dados necessários para responder pedidos de contato. Os formulários preparam uma mensagem para envio pelo WhatsApp; o envio só acontece quando a pessoa confirma a ação nesse aplicativo.</p>
        <h2>Dados informados</h2>
        <p>Nome, telefone, e-mail, região e mensagem podem ser solicitados conforme o tipo de atendimento.</p>
        <h2>Finalidade e retenção</h2>
        <p>Os dados são usados para responder à solicitação e organizar o atendimento. Prazo de retenção e procedimentos internos: <strong>[INFORMAÇÃO A CONFIRMAR]</strong>.</p>
        <h2>Seus direitos e contato</h2>
        <p>Para solicitar informações, correção ou exclusão de dados, escreva para <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
      </article>
    </main>
  );
}
