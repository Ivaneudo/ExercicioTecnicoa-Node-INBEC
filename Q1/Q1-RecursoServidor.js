import { question } from "readline-sync";
import { VerificaPorcentagem } from "./Q1-Funcoes.js"
import { fim, inicio } from "../global.js";

inicio("Q1", "Monitor de Recursos do Servidor (Nível: Fácil)");

const CPU = Number(question(`Digite o quando você está usadno de CPU:`));
const RAM = Number(question(`Digite o quando você está usando de Memória RAM: `));

fim(VerificaPorcentagem(CPU, RAM));

