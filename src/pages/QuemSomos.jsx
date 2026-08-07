import Seo from "../components/Seo";
import Equipe from "../assets/Img/Cooperados.jpeg";
import { site } from "../data/site";

export default function QuemSomos() {
  return <main id="conteudo" className="quem-somos-page">
    <Seo title="Quem somos | Cooperativa Ecolimpo" description="Conheça a atuação social e ambiental da Cooperativa Ecolimpo, formada por catadores de materiais recicláveis em São Sebastião, DF." />
    <section className="page-hero"><div><p className="eyebrow">Cooperativa Ecolimpo</p><h1>Trabalho coletivo a serviço da reciclagem</h1><p>A Ecolimpo reúne catadores de materiais recicláveis e atua com coleta seletiva, triagem, educação ambiental e destinação responsável no Distrito Federal.</p></div><img src={Equipe} alt="Cooperados da Ecolimpo reunidos" width="722" height="542" /></section>
    <section className="section split-section"><div><p className="eyebrow">Nossa história</p><h2>Organização, trabalho e economia circular</h2></div><div><p>A cooperativa nasceu em São Sebastião para fortalecer o trabalho dos catadores e ampliar o reaproveitamento de materiais. Sua atuação conecta comunidade, instituições e cadeia da reciclagem.</p><p>Ao separar, coletar e triar recicláveis, os cooperados prestam um serviço ambiental essencial e geram trabalho e renda por meio da organização coletiva.</p></div></section>
    <section className="section section-tinted"><div className="card-grid"><article className="info-card"><h2>Missão</h2><p>Promover a reciclagem responsável, a inclusão produtiva e a valorização dos catadores.</p></article><article className="info-card"><h2>Visão</h2><p>Fortalecer a coleta seletiva e ser reconhecida pela qualidade do trabalho ambiental e social.</p></article><article className="info-card"><h2>Valores</h2><p>Cooperação, sustentabilidade, transparência, democracia, equidade e responsabilidade social.</p></article></div></section>
    <section className="section split-section"><div><p className="eyebrow">Organização</p><h2>Gestão cooperativa</h2></div><div><p>As decisões e responsabilidades são organizadas conforme o estatuto, o regimento interno e as instâncias da cooperativa. Nomes, cargos e contatos pessoais não são publicados enquanto a autorização de divulgação não estiver documentada.</p><p>Contato institucional: <a href={site.phoneHref}>{site.phoneDisplay}</a> · <a href={`mailto:${site.email}`}>{site.email}</a></p></div></section>
  </main>;
}
