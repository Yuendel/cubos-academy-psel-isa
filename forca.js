function solucao(palpite, palavra) {
	// seu código aqui
    let valor = 0;
    for(let i=0; i < palavra.length; i++){
        if (palavra[i] === " ") {
            valor= 0;
            }else if (palavra[i] === palpite){
            valor = valor +1;
            }
        
    }
    console.log(valor);
}