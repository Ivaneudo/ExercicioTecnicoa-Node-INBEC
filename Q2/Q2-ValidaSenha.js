import { question } from "readline-sync";
import { inicio, fim } from "../global.js";
import { ValidaSenha } from "./Q2-Funcoes.js";

inicio("Q2", "Validados de Senha Forte")

console.log(`Informe uma senha forte no campo abaixo. Ela deve conter letras maiusculas e minusculas, pelo menos 1 número e no mínimo 8 caracteres.`)
const senha = question(`Digite se senha: `)

fim(ValidaSenha(senha));
