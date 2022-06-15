const peca = "torre";
let mensagem = "";

switch (peca) {
  case "rainha":
    mensagem =
      "A rainha pode andar para onde o jogador quiser, quantas casas ele quiser";
    break;
  case "cavalo":
    mensagem =
      "O cavalo costuma andar fazendo um L e também pode saltar as peças";
    break;
  case "bispo":
    mensagem = "O bispo anda na diagonal, quantas casas o jogador quiser";
    break;
  case "rei":
    mensagem = "O rei tem a permissão de andar uma casa em qualquer direção";
    break;
  case "torre":
    mensagem =
      "A torre pode ir para qualquer lado, quantas vezes o jogador quiser";
    break;
  case "peao":
    mensagem = "O peão pode ir uma casa a frente";
    break;
  default:
    mensagem = "Por Favor, insira uma peça válida";
}

console.log(mensagem)