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
function exe4(){
// declaracao vetor

let vetor =[]

// usuario informa 15 numeros

for(let i=0;i<15;i++){
    vetor.push(Number(prompt(`Informe o ${i+1} o numero`)))
}
// verificar se os numeros sao iguais a 30 e mostrar a posicao onde estao
let posicoes =[]
for(let i=0;i<15;i++){
    if (vetor[i]==30){  
        posicoes.push(i)
    }
}
alert(`Numero 30 encontrado nas posicoes ${posicoes}`)
}

function exe5(){
// declaracao dos vetores
let logica =[], linguagem = []
// entrada de dados
for(let i=0;i<15;i++){
    logica.push(Number(prompt(`Informe o ${i+1}o do aluno que faz a disciplina de logica`)))
}
for(let i=0;i<10;i++){
    linguagem.push(Number(prompt(`Informe o ${i+1}o do aluno que faz a disciplina linguagem`)))
}
/// encontrar a intercessao'
let intercessao = []
/// percorre o vetor logica
for(let i=0;i<15;i++){
    let posicao = linguagem.indexOf(logica[i])
    if(posicao != -1){
        intercessao.push(logica[i])
        }
}
alert(`Alunos que fazem as duas disciplinas ${intercessao}`)
}
function exe6(){
    let vendas = [], percentuais = [], nomes = [],comissao = []
    //entrada de dados
    for (let i=0;i<3;i++){
        nomes.push(prompt(`Informe nome do ${i+1}o vendedor`))
        vendas.push(Number(prompt(`Informe total vendido pelo ${i+1}o vendedor`)))
        percentuais.push(Number(prompt(`Informe percentual de vendas do ${i+1}o vendedor`)))
        //Calculo comissoes
        comissao.push((vendas[i] * percentuais[i] / 100))
    }
    //relacao dos vendedores e os valores a receber
    let relatorios = ""
    for(let i=0;i<3;i++){
        relatorios += `\nVendedor: ${nomes[i]} vai receber ${comissao[i]}`
    }
    alert(relatorios)
    //Total das vendas de todos os vendedores
    let somavendas = 0
    for (let i=0;i<3;i++){
        somavendas = somavendas + vendas[i]
    }
    alert(`Total de vendas ${somavendas.toFixed(2)}`)
    //Calcula maior e menor comissao
    let maior = comissao[0]
    let menor = comissao [0]
    
    for(let i=1;i<3;i++){
        if (comissao[i] > maior){
            maior = comissao[i]
        }
        if (comissao[i] < menor){
            menor = comissao[i]
        }
        let imaior = comissao.indexOf(maior) // posicao do maior na comissao
        alert(`${nomes[imaior]} vai recebermaior comissao de ${maior}`)
        let imenor = comissao.indexOf(menor) // posicao do menor na comissao
        alert(`${nomes[imenor]} vai receber menor comissao de ${menor}`)
    }
}
function exe7(){
    let conta = 0
    let soma = 0
    for(let i=0;i<10;i++){
        if (vetor[i] < 0){
            conta ++
        }
        else{
            soma += vetor[i]
        }
        
    }
    alert(`Contagem de negativos ${conta} e soma dos positivos ${soma}`)
}
function exe8(){
    let nomes = [], medias = []
    for(let i=0;i<7;i++){
        nomes.push(prompt(`Informe nome do aluno ${i+1}`))
        medias.push(Number(prompt(`Informe a media do aluno ${+1}`)))
    }
    //calcular a media
    let maior = medias [0]
    for(let i=1;i<7;i++){
        if (medias[1] > maior){
            maior = medias[i]
        }
    }
    //nome do aluno com a maior media
    let pos = medias.indexOf(maior)
    alert (`Nome do aluno com a maior media ${maior} é ${nomes[pos]}`)
    // clacular a nota necessaria no exame final
    for(let i=0;i<6;i++){
        if(medias[i] < 7){ // ficou exame final
            //nota necessaria sabendo que a media deve ser minimo 5
            alert(`${nomes[i]} precisa tirar ${10-medias[i]}`)
        }
    }
}
function exe9(){
    let codigos = []; nomes =[]; precos = []
    for(let i=0; i<10;i++){
        nomes.push(prompt(`Informe nome do produto ${i+1}`))
        codigos.push(Number(prompt(`Informe o codigo do produto ${i+1}`)))
        precos.push(Number(prompt(`Informe preço do produto ${i+1}`)))
    }
    //gerar relartorios com os novos preços
    for(let i=0;i<10;i++){
        let novo
        if(codigos[i] % 2 == 0 && precos[i] > 1000){
            novo = precos[i] + precos[i] * 15/100
        }
        else if (codigos[i] % 2 == 0){
            novo = precos[i] + precos[i] * 10/100
        }
        else if(precos[i] > 100){
            novo = precos[i] + precos[i] * 10/100
        }
        else { 
            novo = precos[i]
        }
        alert(`${nomes[i]} - ${codigos[i]} - ${precos} - ${novo}`)
    }

}
function exe10(){
    let vetor1 = []; vetor2 = []
    let vetorR1 = []; vetorR2 = []
    //Entrada de dados
    for(let i = 0;i<10;i++){
        vetor1.push(Number(prompt(`Informe o ${i+1}. Elemento vetor 1`)))
    }
    for(let i=0;i<5;i++){
        vetor2.push(Number(prompt(`Informe o ${i+1}. O elemento do vetor 2`)))
    }
    //Calcular o vetor resultante 1
    // Calcular soma dos elementos do vetor 2
    let somavet2 = 0
    for(let i=0; i<5;i++){
        somavet2 += vetor2[i]
    }
    //Cria vetor resultante 1
    for(let i=0;i<10;i++){
        if (vetor1[i] % 2 ==0){
            vetor1.push(vetor1[i] + somavet2)
        }
    }
    alert(`Vetor resultante 1 ${vetorR1}`)
    //Calcular vetor resultante 2
    for(let i=0;i<10;i++){
        if(vetor1[i] % 2 == 1){ //verifique se o elemento e impar
        let qtddivisores = 0
        for(let j=0;j<5;j++){
            if(vetor1[i] % vetor2[j] == 0) //encontrou um divisor
            qtddivisores++ // conta mais 1 nos divisores    
        }
        vetor2.push(qtddivisores) // adiciona contador no vetor
        }
    }
    alert(`Vetor resultante 2 ${vetor2}`)
}
function exe3obj(){
    //cadastra codigo e quantidade em estoque
    let vetor = []
    for(let i=0;i<3;i++){
        //cria objeto
        let objeto = {
            codigo: prompt(`Informe o codigo do produto`),
            estoque: Number(prompt(`Informe a quantidade em estoque`)),
            preco: Number(prompt(`Informe o preço do produto`))
        }
        //adicione o objeto ao vetor
        vetor.push(objeto)
    }
    //comprando
    let cliente = Number(prompt(`Informe codigo do cliente`))
    do{
        let codigo = prompt(`Informe codigo do produto para compra`)
        let qntd = Number(prompt(`Informe a quantidade de produtos para a compra`))
        // procura pra ver se o produto existe
        let produtoencontrado
        let i 
        for(i=0;i<3;i++){
            if (vetor[i].codigo == codigo){ //produto encontrado
                produtoencontrado = vetor[i] // guardar produto em produtoencontrado
                break // para de procurar e sai do for
            }
        }
        if (i ==3){ //produto nao existe
            alert(`Codigo ${codigo} Produto nao existe`)
        }
        else { //produto existe
                //tem estoque suficiente
            if (produtoencontrado.estoque >= qntd){
            //atualiza o estoque
            produtoencontrado.estoque -= qntd
            alert(`Pedido Atendido. Obrigado e volte sempre`)
        }
        else {
            alert(`Não temos estoque suficiente desta mercadoria`)
        }
    }
    cliente = Number(prompt(`Informe codigo do novo cliente. Digite 0 para encerrar`))
    } // fecha o do
    while (cliente != 0)
    console.log(vetor)
}
