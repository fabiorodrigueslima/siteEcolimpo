import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const pages = {
  "/": ["Cooperativa Ecolimpo | Coleta seletiva em São Sebastião - DF", "Coleta seletiva, triagem e educação ambiental com a Cooperativa Ecolimpo no Distrito Federal."],
  "/quem-somos": ["Quem somos | Cooperativa Ecolimpo", "Conheça a atuação social e ambiental da Cooperativa Ecolimpo em São Sebastião, DF."],
  "/coleta-seletiva/slu": ["Coleta seletiva e atendimento SLU | Ecolimpo", "Consulte regiões, dias e turnos informados para a coleta seletiva da Ecolimpo."],
  "/condominio": ["Coleta seletiva para condomínios no DF | Ecolimpo", "Solicite uma proposta de coleta seletiva organizada para seu condomínio."],
  "/educacao-ambiental": ["Educação ambiental para escolas no DF | Ecolimpo", "Solicite palestras e ações de educação ambiental da Ecolimpo."],
  "/materiais-reciclaveis": ["Materiais recicláveis | Cooperativa Ecolimpo", "Veja como preparar recicláveis e confirme os itens aceitos pela Ecolimpo."],
  "/socio-cooperado": ["Interesse em ser sócio-cooperado | Ecolimpo", "Entenda como demonstrar interesse em participar da Cooperativa Ecolimpo."],
  "/contato": ["Contato | Cooperativa Ecolimpo", "Fale com a Cooperativa Ecolimpo no Distrito Federal."],
  "/privacidade": ["Política de privacidade | Cooperativa Ecolimpo", "Saiba como os dados de contato são tratados pela Ecolimpo."],
};
const base = await readFile("build/index.html", "utf8");
for (const [route, [title, description]] of Object.entries(pages)) {
  const canonical = `https://www.cooperaecolimpo.com.br${route}`;
  const html = base.replace(/<title>.*?<\/title>/, `<title>${title}</title>`).replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${description}">`).replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${canonical}">`);
  if (route === "/") await writeFile("build/index.html", html);
  else { const dir = path.join("build", route); await mkdir(dir, { recursive: true }); await writeFile(path.join(dir, "index.html"), html); }
}
console.log(`Pré-renderização: ${Object.keys(pages).length} rotas públicas.`);
