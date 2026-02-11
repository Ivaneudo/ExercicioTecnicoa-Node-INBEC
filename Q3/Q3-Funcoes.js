function CalculaCashback (valor) {
  if (valor > 100) {
    return (valor * 10) / 100
  }

  return (valor * 5) / 100
}

export {
  CalculaCashback
}