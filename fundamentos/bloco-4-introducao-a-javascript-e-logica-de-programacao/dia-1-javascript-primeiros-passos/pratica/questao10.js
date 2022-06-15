const valorDoProduto = 5;
const valorDaVenda = 8;
let valores = valorDoProduto >= 0 && valorDaVenda >= 0;

if (valores === true) {
  const total = valorDoProduto * 1.2;
  const valorTotal = (valorDaVenda - total) * 1000;
  console.log(valorTotal);
} else {
  console.log("Por favor, insira um valor válido");
}