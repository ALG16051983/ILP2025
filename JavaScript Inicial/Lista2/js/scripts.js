function seguir() {
    alert("Voce agora esta seguindo Andre Gimenez");
  }
function exe1() {
    // Obter os valores das notas dos campos de entrada
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);
  
    // Calcular a média
    const media = (nota1 + nota2 + nota3 + nota4) / 4;
  
    // Exibir a média no elemento label com o id "media"
    document.getElementById("sub").textContent = "A média do aluno é: " + media.toFixed(2); //toFixed(2) para duas casas decimais
  }
  function exe2() {
    // Obter os valores das notas dos campos de entrada
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    
  
    // Calcular a média
    const media = (nota1 + nota2) / 2;

    // Determinar o status da media
    let status="";
    if(media <= 3){
      status="Reprovado";
    } else if (media <= 7){
      status="Exame";
    } else {
      status ="Aprovado";
    }
  
    // Exibir a média no elemento label com o id "media"
    document.getElementById("media").textContent = "A média do aluno é: " + media + " - Status: " + status ;
  }
  function exe3() {
    // Obter os valores dos numeros dos campos de entrada
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
      
    // Determinar o menor
    let menor;
    if(numero1 < numero2){
      menor= numero1;
    } else {
      menor = numero2;
    }
  
    document.getElementById("menor").textContent = "O menor numero digitado é: " + menor
  }
  function exe4() {
    // Obter os valores dos numeros dos campos de entrada
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const numero3 = parseFloat(document.getElementById("numero3").value);
      
    // Determinar o maior
    let maior;
    if(numero1 > numero2 && numero1 > numero3){
      maior= numero1;
    } else if(numero2 > numero3) {
      maior = numero2;
    } else {
      maior = numero3;
    }
  
    
    document.getElementById("maior").textContent = "O maior numero digitado foi: " + maior;
  }
  function exe5() {
    // Obter os valores dos números dos campos de entrada
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const operacao = parseInt(document.getElementById("operacao").value);
  
    // Validar os números
    if (isNaN(numero1) || isNaN(numero2)) {
      alert("Por favor, insira números válidos.");
      return;
    }
  
    // Realizar a operação selecionada
    let resultado;
    switch (operacao) {
      case 1: // Média
        resultado = (numero1 + numero2) / 2;
        break;
      case 2: // Diferença (maior - menor)
        resultado = numero1 > numero2 ? numero1 - numero2 : numero2 - numero1;
        break;
      case 3: // Produto
        resultado = numero1 * numero2;
        break;
      case 4: // Divisão (numero1 / numero2)
        if (numero2 === 0) {
          alert("Erro: Divisão por zero não é permitida.");
          return;
        }
        resultado = numero1 / numero2;
        break;
      default:
        alert("Operação inválida.");
        return;
    }
  
    // Exibir o resultado
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
  }