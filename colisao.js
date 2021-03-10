function solucao(velocidade, aceleracao, distanciaObjeto) {
    //seu código aqui
      let distanciaPercorrida = (-(velocidade * velocidade)/ (aceleracao *2));
      
      let diferenca = (distanciaObjeto - distanciaPercorrida);
      
      if (diferenca > 0){
          console.log("CAMINHO SEGURO");
      } else if (diferenca < 0){
          console.log("COLISAO A FRENTE");
      } else{
          console.log("NAO ACELERE");
      }
      
  }
  