function calculoSalarial() {
  let valorDoINSS;
  let impostoDeRenda;

  const salarioBruto = 3000.0;

  if (salarioBruto <= 1556.94) {
    valorDoINSS = salarioBruto * 0.08;
  } else if (salarioBruto <= 2594.92) {
    valorDoINSS = salarioBruto * 0.09;
  } else if (salarioBruto <= 5189.82) {
    valorDoINSS = salarioBruto * 0.11;
  } else {
    valorDoINSS = 570.88;
  }

  const baseSalarial = salarioBruto - valorDoINSS;

  if (baseSalarial <= 1903.98) {
    impostoDeRenda = 0;
  } else if (baseSalarial <= 2826.65) {
    impostoDeRenda = baseSalarial * 0.075 - 142.8;
  } else if (baseSalarial <= 3751.05) {
    impostoDeRenda = baseSalarial * 0.15 - 354.8;
  } else if (baseSalarial <= 4664.68) {
    impostoDeRenda = baseSalarial * 0.225 - 636.13;
  } else {
    impostoDeRenda = baseSalarial * 0.275 - 869.36;
  }

  let conta = baseSalarial - impostoDeRenda;

  console.log(`O salário é: ${conta}`);
}

calculoSalarial();