// 1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificandoPalindromo(string) {     
    for(var i = 0; i < string.length / 2; i++) {
        if (string[i] != string[string.length - i - 1]) {
        return false;
    }
    return true;
}
}

console.log(verificandoPalindromo('arara'))

// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maiorValor(sinalizador) {
    let flag = 0;
    for (let i in sinalizador) {
      if (sinalizador[flag] < sinalizador[i]) {
        flag = i;
      }
    }
    return flag;
  }
  
  console.log(maiorValor([5,15,20,10])); 

  // 3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

  function menorValor(num) {
    let flag = 0;
    for (let i in num) {
      if (num[flag] > num[i]) {
        flag = i;
      }
    }
    return flag;
  }
  
  console.log(menorValor([5,10,15,20,-3])); 

  // 4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

  function maiorTamanhoDePalavra(string) {
    let tamanhoDaPalavra = string[0];
    for (let i in string) {
      if (tamanhoDaPalavra.length < string[i].length) {
        tamanhoDaPalavra = string[i];
      }
    }
    return tamanhoDaPalavra;
  }
  
  console.log(maiorTamanhoDePalavra(['Alegre', 'Trybe', 'Cama', 'Luz', 'mesa', 'piper']));

  // 6. Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

  function somatorio(n){
      let soma = 0;
      for(let i = 1; i <= n; i++){
        soma += i;
      }
      return soma;
  }
 console.log(somatorio(5))

 // 7. Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
 
 function splitSentenca(word, ending){
    word = word.split('');
    ending = ending.split('');
    flag= true;
    for (let i = 0; i < ending.length; i++) {
      if (word[word.length - ending.length + i] != ending[i]) {
        flag= false;
      }
    }
    return flag;
 }

 console.log(splitSentenca('joaofernando', 'fernan'));