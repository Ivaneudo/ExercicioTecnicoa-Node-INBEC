import { question } from "readline-sync";
import { inicio, fim } from "../global.js";
import { ValidaSenha } from "./Q2-Funcoes.js";

inicio("Q2", "Validados de Senha Forte")

console.log(`Informe uma senha forte no campo abaixo. Ela deve conter letras maiusculas e minusculas e pelo menos 1 número.`)
const senha = question(`Digite se senha: `)

fim(ValidaSenha(senha));
