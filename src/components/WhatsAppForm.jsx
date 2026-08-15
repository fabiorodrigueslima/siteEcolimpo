import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { whatsappUrl } from "../data/site";

export default function WhatsAppForm({ context, fields }) {
  const [values, setValues] = useState(Object.fromEntries(fields.map(({ name }) => [name, ""])));
  const [error, setError] = useState("");
  const firstRef = useRef(null);

  function submit(event) {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      setError("Revise os campos obrigatórios antes de continuar.");
      firstRef.current?.focus();
      return;
    }
    setError("");
    const details = fields.map(({ label, name }) => `${label}: ${values[name].trim()}`).join("\n");
    window.open(whatsappUrl(`Olá! Vim pelo site da Ecolimpo.\nAssunto: ${context}\n\n${details}`), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      {error && <p className="form-error" role="alert">{error}</p>}
      {fields.map((field, index) => {
        const Tag = field.multiline ? "textarea" : "input";
        return <div className="form-field" key={field.name}>
          <label htmlFor={`${context}-${field.name}`}>{field.label}{field.required ? " *" : ""}</label>
          <Tag ref={index === 0 ? firstRef : undefined} id={`${context}-${field.name}`} name={field.name} type={field.type || "text"} autoComplete={field.autoComplete} required={field.required} minLength={field.minLength} value={values[field.name]} onChange={(e) => setValues({ ...values, [field.name]: e.target.value })} />
        </div>;
      })}
      <p className="form-privacy">Os dados serão colocados em uma mensagem para você revisar. O envio só ocorre após sua confirmação no WhatsApp. Leia a <Link to="/privacidade">política de privacidade</Link>.</p>
      <button className="button button-primary" type="submit">Revisar mensagem no WhatsApp</button>
    </form>
  );
}
