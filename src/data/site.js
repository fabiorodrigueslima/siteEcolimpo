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
  shareImage: "/logo-ecolimpo.png",
  mapsEmbed: "https://www.google.com/maps?q=-15.9096691,-47.7772288&z=17&output=embed",
};

export const areasServed = [
  "São Sebastião",
  "Jardim Mangueiral",
  "Jardim Botânico III",
  "Avenida Marginal DF-001",
  "Região do Tororó (condomínios parceiros)",
];

export function whatsappUrl(message) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  geral: "Olá! Vim pelo site da Ecolimpo e gostaria de mais informações.",
  condominio: "Olá! Gostaria de solicitar uma proposta de coleta seletiva para condomínio.",
  empresa: "Olá! Gostaria de conversar sobre coleta seletiva para uma empresa.",
  escola: "Olá! Gostaria de solicitar uma ação de educação ambiental.",
  coleta: "Olá! Gostaria de confirmar informações sobre a coleta seletiva.",
  cooperado: "Olá! Gostaria de saber como demonstrar interesse em ser cooperado.",
};

