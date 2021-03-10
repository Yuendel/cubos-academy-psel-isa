function solucao(precos) {
    // seu código aqui
      //variaveis
      let compra = 0;
      let venda = 0;
      let perca = [];
      let resultado = 0;
      let x = 0;
      let y = 0;
      let a = 0;
      let b = 0;
      
      for (i = 0; i < precos.length; i++){
          compra = precos[i];
          for (u = i+1; u < precos.length; u++){
              venda = precos[u]; 
              y = compra-venda;
              if( y > 0){
          perca[x] = y;    
          x++;       
                 }
            
          }
          
          
      }
      
      resultado = perca[0];
      for(i = 1; i < perca.length; i++){
         if (resultado > perca[i]){
             resultado = perca[i];
             
             }
          
          }
      console.log(resultado);
      }
      