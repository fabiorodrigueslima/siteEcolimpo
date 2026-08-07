import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { whatsappMessages, whatsappUrl } from "../data/site";

export default function Materiais() {
  return <main id="conteudo" className="simple-page">
    <Seo title="Materiais recicláveis | Cooperativa Ecolimpo" description="Saiba como preparar materiais para a coleta seletiva e confirme com a Ecolimpo os itens aceitos em cada atendimento." />
    <article className="privacy-content">
      <p className="eyebrow">Separação responsável</p>
      <h1>Como preparar os recicláveis</h1>
      <p>A lista oficial de materiais aceitos pela Ecolimpo está em validação. Para evitar orientação incorreta, confirme itens específicos antes de descartá-los.</p>
      <h2>Antes da coleta</h2>
      <ul><li>Esvazie as embalagens.</li><li>Mantenha os recicláveis secos e separados dos resíduos orgânicos.</li><li>Proteja partes cortantes para reduzir o risco de acidentes.</li><li>Não misture resíduos de saúde, eletrônicos, lâmpadas ou produtos químicos.</li></ul>
      <h2>Destinação especial</h2>
      <p>Medicamentos, pilhas, baterias, eletrônicos, lâmpadas e resíduos perigosos precisam de pontos de entrega ou logística reversa apropriados. Eles não devem ser colocados junto aos recicláveis sem confirmação.</p>
      <div className="button-row"><a className="button button-whatsapp" href={whatsappUrl(whatsappMessages.coleta)} target="_blank" rel="noopener noreferrer">Confirmar um material</a><Link className="button button-secondary" to="/coleta-seletiva/slu">Consultar a coleta</Link></div>
    </article>
  </main>;
}
