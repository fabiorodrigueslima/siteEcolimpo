import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <main id="conteudo" className="simple-page">
      <Seo title="Página não encontrada | Cooperativa Ecolimpo" description="A página solicitada não foi encontrada." noIndex />
      <section className="not-found">
        <p className="eyebrow">Erro 404</p>
        <h1>Esta página não foi encontrada</h1>
        <p>O endereço pode ter mudado ou sido digitado incorretamente.</p>
        <div className="button-row">
          <Link className="button button-primary" to="/">Voltar ao início</Link>
          <Link className="button button-secondary" to="/contato">Falar com a Ecolimpo</Link>
        </div>
      </section>
    </main>
  );
}

