function ValidaSenha(senha) {
  if (Numeros(senha) && MaiusculasMinusculas(senha)) {
    return `Senha valida.`;
  }

  return `Senha invalida: Sua senha deve ter no míniomo 8 caracteres, letras maiusculas e minuscas.`;
}

function MaiusculasMinusculas(senha) {
  const maiusculas = /[A-Z]/.test(senha);
  const minusculas = /[a-z]/.test(senha);

  if (maiusculas && minusculas) {
    return true;
  }

  return false;
}

function Numeros(senha) {
  const numero = /\d/.test(senha);
  const quantidade = senha.length;

  if (numero) {
    if (quantidade < 8) {
      return false;
    }

    return true;
  }

  return false;
}

export { ValidaSenha };
