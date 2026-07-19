import { FaWhatsapp } from "react-icons/fa";
import { whatsappUrl } from "../data/site";

export default function WhatsAppButton() {
  return (
    <a href={whatsappUrl("Olá! Vim pelo site da Ecolimpo e gostaria de mais informações.")} className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Falar com a Ecolimpo pelo WhatsApp">
      <FaWhatsapp aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}

