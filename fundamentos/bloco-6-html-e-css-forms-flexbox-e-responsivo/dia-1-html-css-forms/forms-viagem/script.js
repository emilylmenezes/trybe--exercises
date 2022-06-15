const eventoSubmit = document.querySelector('form');
eventoSubmit.addEventListener('submit', acao => {
  acao.preventDefault();
  console.log('Cancelando submissão');
});


const formulario =	document.getElementById('forms-caixa');
const botao =	document.getElementById('limpar');

botao.addEventListener('click', () => {
  formulario.reset();
});

