const verificarNumero = (a, b) => { 
  if (a === '' || b === '' || isNaN(a) || isNaN(b)) {
    throw new Error('Preencha os campos');
  }
}

function sum() {
  try {
    const value1 = document.querySelector('#value1').value;
    const value2 = document.querySelector('#value2').value;
    verificarNumero(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    document.querySelector('#result').textContent = `Resultado: ${result}`;
    document.querySelector('#value1').value = '';
    document.querySelector('#value2').value = '';
  } catch (error) {
        document.querySelector('#result').textContent = `Inválido: ${error.message}`;
        document.querySelector('#value1').value = '';
        document.querySelector('#value2').value = '';
  }
  }

  window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
  }
