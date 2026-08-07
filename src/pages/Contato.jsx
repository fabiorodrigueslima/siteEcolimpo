import { FaFacebookF, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import Seo from "../components/Seo";
import { site, whatsappMessages, whatsappUrl } from "../data/site";

export default function Contato() {
  return <main id="conteudo" className="contato-page">
    <Seo title="Contato | Cooperativa Ecolimpo" description="Fale com a Cooperativa Ecolimpo sobre coleta seletiva, propostas e educação ambiental no Distrito Federal." />
    <section className="page-title"><p className="eyebrow">Fale conosco</p><h1>Contato</h1><p>Escolha o canal e informe o tipo de atendimento que procura.</p></section>
    <section className="contato-section"><div className="contato-container"><div className="contato-info"><h2>Cooperativa Ecolimpo</h2><p><FaMapMarkerAlt aria-hidden="true" />{site.address}</p><a href={site.phoneHref} className="contact-line"><MdPhone aria-hidden="true" />{site.phoneDisplay}</a><a href={`mailto:${site.email}`} className="contact-line"><MdEmail aria-hidden="true" />{site.email}</a><a href={whatsappUrl(whatsappMessages.geral)} target="_blank" rel="noopener noreferrer" className="contato-whatsapp"><FaWhatsapp aria-hidden="true" />Falar no WhatsApp</a><div className="contato-redes"><h3>Rede social confirmada</h3><a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook da Ecolimpo"><FaFacebookF aria-hidden="true" /> Facebook</a></div></div><div className="contato-mapa"><iframe src={site.mapsEmbed} width="100%" height="420" style={{border:0}} loading="lazy" title="Mapa da Cooperativa Ecolimpo"/><a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-mapa">Abrir no Google Maps</a></div></div></section>
  </main>;
}
