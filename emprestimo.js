function solucao(ganhos, serasaScore, mesesParaPagar) {
    //seu código aqui
      //variaveis
      let valorParcela;
      let juros;
      //ifs
      if (serasaScore>=700){
           juros=15;
          valorParcela = (ganhos *3 + (ganhos *(juros/100))) / mesesParaPagar;
          } else if(serasaScore < 300){
              juros = 3;
              valorParcela = (ganhos *3 + (ganhos *(juros/100))) / mesesParaPagar;
                    } else if(serasaScore <700){
                        juros = 9;
                        valorParcela = (ganhos *3 + (ganhos *(juros/100))) / mesesParaPagar;
                    }
      console.log(valorParcela);
  }