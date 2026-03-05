function VerificaPorcentagem(cpu, ram) {
  if (cpu >= 80 || ram >= 80) {
    return `ALERTA: Sistema Sobrecarregado.`;
  } else if (cpu <= 50 && ram <= 50) {
    return `Sistema Estável.`;
  } else {
    return `ATENÇÃO: Uso Moderado`;
  }
}

export { VerificaPorcentagem };
