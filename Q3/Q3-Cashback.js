import { question } from "readline-sync";
import { inicio, fim } from "../global.js";
import { CalculaCashback } from "./Q3-Funcoes.js";

inicio("Q3", "Processamento de Cashback");

let acao, valor;
const produtos = [];
let liquido = 0, cashback = 0;

console.log(`Bem vindo ao Mercadinho do INBEC: `)

do {
  valor = question(`Digite o valor do produto que você deseja comprar: `);

  const cash = CalculaCashback(valor);
  let prod = {valor, cash};
  produtos.push(prod);
  
  liquido = liquido + (valor - cash) ;
  cashback = cashback + cash;
  liquido.toFixed(2);
  cashback.toFixed(2);

  console.log(`Você deseja adiciona +1 produto ao seu carrinho? `)
  acao = question(`Digite "s" para sim e "n" para não: `)
  acao.toLowerCase();
  if (acao != "s" && acao != "n")  acao = "n"
} while (acao != "n");

console.log(`-------------------------------------------------------------------------------`);
console.log(`Lista de produtos:`);
console.table(produtos);
console.log(`Valor Líquido: ${liquido} - Cashback: ${cashback}`);
console.log(`-------------------------------------------------------------------------------`);