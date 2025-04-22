function exe8(){
  // declaração das variáveis
  let idade, altura, peso, pelo, raca
  let idade10Peso10 = 0, somaIdade = 0, mediaidade05 = 0
  let qtdelabrador = 0, qtdebrancodifvl = 0
  // entrada e processamento dos dados
  for(let i=1; i <= 10;i++){
      idade = Number(prompt(`Informe idade do cachorro `))
      altura = Number(prompt(`Informe altura do cachorro `))    
      peso = Number(prompt(`Informe peso do cachorro`))
      do {
          raca = prompt(`Informe a raca do cachorro`).toUpperCase()
      }
      while (raca != 'V' && raca != 'L' && raca != 'P') 
      do {
          pelo = prompt(`Informe cor do pelo do cachorro`).toUpperCase()
      }    
      while (pelo != 'P' && pelo != 'C' && pelo != 'L' && pelo != 'B')
      // processamento
      if (idade > 10 && peso < 10){
          idade10Peso10++
      }
      if (altura < 0.50){
          somaIdade += idade
          mediaidade05++
      }
      if (raca == 'L'){
          qtdelabrador++
      }
      if (pelo == 'B' && raca != 'V'){
        qtdebrancodifvl++
      }
  }
  document.getElementById("resultado").innerHTML = `Item 1 ${idade10Peso10} Item 2 ${somaIdade/mediaidade05} Item 3 ${qtdelabrador} Item 4 ${qtdebrancodifvl}`
}
