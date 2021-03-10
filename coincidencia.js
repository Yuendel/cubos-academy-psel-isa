function processData(input) {
    //Enter your code here
    const tamanhoInput = input.length;
    let a = 0;
    let b = 0;
    let resposta;
    
    for(i = 0; i<tamanhoInput; i++){
        if (input[i] === "0"){
            a = a+1;
            }else if(input[i] === "1"){
                b = b+1;
            }
        
    }
    
    if (a === b){
        resposta = true;
        console.log(resposta);
    } else{
        resposta = false;
        console.log(resposta);
    }
    
    
    
  const nums = input.trim().split(" ");
  solucao(nums.map(x => parseInt(x)));
}