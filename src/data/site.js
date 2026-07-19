export const site = {
  name: "Cooperativa Ecolimpo",
  legalName: "Cooperativa de Trabalho de Catadores Ecolimpo",
  url: "https://www.cooperaecolimpo.com.br",
  phoneDisplay: "(61) 98237-2013",
  phoneHref: "tel:+5561982372013",
  whatsappNumber: "5561982372013",
  email: "cooperativaecolimpodf@gmail.com",
  address: "ADE PRO-DF CJ.01 Lote 9, Bonsucesso, São Sebastião - DF",
  mapsUrl: "https://www.google.com/maps/place/Cooperativa+Ecolimpo/@-15.9096639,-47.7798037,17z",
  facebook: "https://www.facebook.com/cooperativaecolimpo/",
};

export const areasServed = [
  "São Sebastião",
  "Jardim Mangueiral",
  "Jardim Botânico III",
  "Avenida Marginal DF-001",
  "Região do Tororó (condomínios parceiros)",
];

export const impactIndicators = [
  { value: "+50", label: "Toneladas recicladas por mês" },
  { value: "+30", label: "Famílias beneficiadas" },
  { value: "+2", label: "Parcerias com condomínios" },
  { value: "+1000", label: "Pessoas impactadas em ações ambientais" },
];

export function whatsappUrl(message) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

