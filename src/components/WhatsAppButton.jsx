import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/style.css";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/5561982372013?text=Olá,%20vim%20pelo%20site%20da%20Ecolimpo%20e%20quero%20mais%20informações"
            className="whatsapp-float"
            target="_blank"
            rel="noreferrer"
        >
            <FaWhatsapp />
        </a>
    );
}