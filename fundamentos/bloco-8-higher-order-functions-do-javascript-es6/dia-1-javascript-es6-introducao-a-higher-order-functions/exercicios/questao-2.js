const sorteio = (aposta) => {
  let valor = Math.round(Math.random() * 5);

  if(aposta === valor) return "Parabéns você ganhou";
  

  return "Tente novamente";
}

console.log(sorteio(3));