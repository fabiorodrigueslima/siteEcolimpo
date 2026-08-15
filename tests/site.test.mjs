import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("não expõe placeholders ou métricas não confirmadas", async () => {
  const files = ["src/pages/Home.jsx", "src/pages/SocioCooperado.jsx", "src/pages/Privacidade.jsx", "src/data/site.js"];
  const content = (await Promise.all(files.map(file => readFile(file, "utf8")))).join("\n");
  assert.doesNotMatch(content, /INFORMAÇÃO A CONFIRMAR|Toneladas recicladas|Famílias beneficiadas/);
});
test("rotas essenciais e 404 existem", async () => {
  const app = await readFile("src/App.jsx", "utf8");
  for (const route of ["/condominio", "/educacao-ambiental", "/materiais-reciclaveis", "/privacidade", "*"]) assert.match(app, new RegExp(`path=\\"${route.replace("*", "\\*")}\\"`));
});
test("formulário informa revisão e política de privacidade", async () => {
  const form = await readFile("src/components/WhatsAppForm.jsx", "utf8");
  assert.match(form, /revisar/); assert.match(form, /\/privacidade/); assert.match(form, /role="alert"/);
});
