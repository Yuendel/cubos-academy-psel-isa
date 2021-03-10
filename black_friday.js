function solucao(produtos, valorMaximo, avaliacaoMinima) {
    // seu código aqui
        let resposta = [];
        let u = 0;
        for (let i = 0; i < produtos.length; i++ ){
           
            if (produtos[i].valor<= valorMaximo && produtos[i].avaliacao >= avaliacaoMinima){
                resposta[u] = produtos[i];
                u = u+1;
                }
            
        }
        console.log(resposta);
      
    }