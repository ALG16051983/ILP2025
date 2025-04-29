function exe1(){
    let numeros = []
    for(let i= 0;i<6;i++){
        ///insira numero no vetor
        numeros.push(Number(prompt(`Informe o elemento ${i}`)))
    }
    ///Calcule os pares e impares
    let pares = [] // guarda numeros pares
    let impares = [] // guarda os numeros impares
    /// numeros.length // retorna a quantidade de elementos dos vetores
    for(let i= 0; i<numeros.length;i++){ ///pares
        if(numeros[i] % 2 == 0){
            pares.push(numeros[i])
        }
        else{ /// impar
            impares.push(numeros[i])
        }   
        
    }
    alert(" Numeros pares " + pares + " e a quantidade " + pares.length)
    ///template string
    alert(` Numeros impares ${impares} e a quantidade ${impares.length}`)
}
function exe2(){
    let numeros = []
    for(let i= 0;i<7;i++){
        ///insira numero no vetor
        numeros.push(Number(prompt(`Informe o elemento ${i}`)))
    }
    let multiplos2 = [], multiplos3 = [], multiplos2e3 = []
    for (let i = 0; i<numeros.length; i++){
        if (numeros[i] % 2 == 0 && numeros[i] % 3 == 0){
            multiplos2e3.push(numeros[i])
        }
        else if (numeros[i] % 2 == 0){
            multiplos2.push(numeros[i])
        }
        else if(numeros[i] % 3 == 0){
            multiplos3.push(numeros[i])
        }
    }
    alert (`Multiplos de 2 ${multiplos2} Multiplos de 3 ${multiplos3} e Multiplos de 2 e 3 ${multiplos2e3}`)
    
}
function exe3(){
    // cadastra codigo e qtd em estoque
    let codigos = [], estoque = []  // declara os vetores
    
    for (let i=0;i<3;i++){
        codigos.push(prompt(`Informe o codigo do produto`))
        estoque.push(Number(prompt(`Informe a quantidade em estoque`)))
    }
    // comprando ...

    let cliente = Number(prompt(`Informe codigo do cliente`))
    do{
        
        let codigo = prompt(`Informe codigo do produto da compra`)
        let qtde = Number(prompt(`Informe a quantidade do produto para compra`))
         
        
        //Procura pra ver se o produto existe

        let posicao = codigos.indexOf(codigo)
        if(posicao == -1){
            alert(`Codigo ${codigo} inexistente`)
        }
        else{ // produto existe
            if(estoque[posicao] >= qtde){
                // atualiza estoque
                estoque[posicao] = estoque[posicao] - qtde
                alert(`Pedido atendido. Obrigado e volte sempre`)
            }
            else{
                alert(`Nao temos estoque suficiente desta mercadoria`)
            }
        }
        cliente = Number(prompt(`Informe codigo do novo cliente. Digite 0 para encerrar`))
    } // fechamento do do
    while(cliente != 0)
    alert(`${codigos}${estoque}`)    
}
