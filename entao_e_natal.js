function solucao(produtos, distanciaRestaurante, cupomDesconto, ehPrimeiraCompra) {
    // seu código aqui
      //variaveis
      let resultado = 0;
      let resultadot = 0;
      let valorProduto = [];
      let descontoCategoria = 0;
      let frete = 120 * distanciaRestaurante;
      
      //passo1
      for(i = 0; i<produtos.length; i++){
          valorProduto[i] = produtos[i].valor * produtos[i].quantidade;
          if(produtos[i].categoria === "SALGADO"){
              descontoCategoria = 10;
              valorProduto[i] = valorProduto[i] - ((descontoCategoria / 100) * valorProduto[i]);
              
             } else if(produtos[i].categoria === "DOCE"){
              descontoCategoria = 15;
              valorProduto[i] = valorProduto[i]- ((descontoCategoria / 100) * valorProduto[i]);
                 
             } else if(produtos[i].categoria === "BEBIDA"){
              descontoCategoria = 30;
              valorProduto[i] = valorProduto[i] - ((descontoCategoria / 100) * valorProduto[i]);
                 
             }
      }
      
      for(i = 0; i< valorProduto.length; i++){
             resultadot = resultadot + valorProduto[i];
      }
      
      resultado = resultadot + frete;
      
      //passo2
      if (ehPrimeiraCompra === true){
          if (cupomDesconto === "NATAL10" && resultadot > 3000){
              resultado = resultadot- ((10/100) * resultadot);
              resultado = resultado + frete;
          } else if (cupomDesconto === "NATAL20" && resultadot > 4500){
              resultado = resultadot- ((20/100) * resultadot);
              resultado = resultado + frete;
          }else if (cupomDesconto === "NATAL30" && resultadot > 6000){
              resultado = resultadot- ((30/100) * resultadot);
              resultado = resultado + frete;
          } else if (cupomDesconto === "NATALSUPREMO" && resultadot > 8000){
              resultado = resultadot- ((30/100) * resultadot);
              frete = 0;
              resultado = resultado + frete;
          }
          }else{
              resultado = resultado;
          }
      
      console.log(resultado);
      
  }
  