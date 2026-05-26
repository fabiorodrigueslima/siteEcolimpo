import { FaWhatsapp } from "react-icons/fa";
import "../styles/style.css";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/5561982372013?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Ecolimpo%20e%20quero%20mais%20informa%C3%A7%C3%B5es"
            className="whatsapp-float"
            target="_blank"
            rel="noreferrer"
            aria-label="Falar com a Ecolimpo pelo WhatsApp"
        >
            <FaWhatsapp />
        </a>
    );
}
