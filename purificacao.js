function solucao(stringCorrompida) {
	// seu código aqui
    //!@#$%&*()
    let resposta = "";
    
    for(i = 0; i < stringCorrompida.length; i++){
        const letra = stringCorrompida[i];
        if (letra === "!" || letra === "@" || letra === "#" || letra === "$" || letra === "%" || letra === "&" || letra === "*" || letra === "(" || letra === ")" || letra === ".") {
            continue;
        } else{
            resposta += stringCorrompida[i];
        }
    }
    console.log(resposta);
}
