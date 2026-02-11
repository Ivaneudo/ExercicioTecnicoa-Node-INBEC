function inicio (n, desafio) {
  console.log(`-------------------------------------------------------------------------------`);
  console.log(`${n} - ${desafio}`);
  console.log(`-------------------------------------------------------------------------------`);

}

function fim (msg) {
  console.log(`-------------------------------------------------------------------------------`);
  console.log(msg);
  console.log(`-------------------------------------------------------------------------------`);
}

function error (msg) {
  console.log(`-------------------------------------------------------------------------------`);
  console.log(msg);
  console.log(`-------------------------------------------------------------------------------`);
}

function inteiro (n) {
  if (!Number.isInteger(n)) {
    throw new Error(`O número não é um inteior.`)
  }
}

export {
  inicio,
  fim,
  error,
  inteiro
}