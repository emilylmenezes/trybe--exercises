const acessandoPai = document.getElementById('pai');

    for (let i = 0; i < acessandoPai.length; i++) {
      const listando = acessandoPai.childNodes[i];
      if (listando.id !== 'elementoOndeVoceEsta') {
        listando.remove();
      }
    }

    const removendoElemento = document.getElementById('segundoEUltimoFilhoDoFilho');
    removendoElemento.remove();