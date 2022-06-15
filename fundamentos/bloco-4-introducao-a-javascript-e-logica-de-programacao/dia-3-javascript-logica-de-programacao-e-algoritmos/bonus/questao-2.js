function asteriscos(quantidadeDeAsteriscos) {
    for (let i = 0; i < quantidadeDeAsteriscos; i++) {
      let linha = '';
      for (let contador = 0; contador < i + 1; contador++) {
        linha = linha + '*';
      }
      console.log(linha)
    }
  }
  
  asteriscos(5);