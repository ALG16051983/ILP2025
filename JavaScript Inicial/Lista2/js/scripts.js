function seguir() {
    alert("Voce agora esta seguindo Andre Gimenez");
  }
function exe1() {
    // Obter os valores das notas dos campos de entrada
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);
    let nota4 = Number(document.getElementById("nota4").value);
  
    // Calcular a média
    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    //Definir status media - APROVADO OU REPROVADO
    let status="";
    if(media < 7){
      status="Reprovado";
    } else {
      status ="Aprovado";
    }
  
    // Exibir a média no elemento label com o id "media"
    document.getElementById("media").textContent = "A média do aluno é: " + media + " - Status: " + status
  }
  function exe2() {
    // Obter os valores das notas dos campos de entrada
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    
  
    // Calcular a média
    let media = (nota1 + nota2) / 2;

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
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
      
    // Determinar o menor
    let menor;
    if(numero1 < numero2){
      menor= numero1;
    } else if(numero2 < numero1) {
      menor = numero2;
    }
    else {
      menor = "Os dois são iguais"
    }
  
    document.getElementById("menor").textContent = "O menor numero digitado é: " + menor
  }
  function exe4() {
    // Obter os valores dos numeros dos campos de entrada
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let numero3 = Number(document.getElementById("numero3").value);
      
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
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let operacao = parseInt(document.getElementById("operacao").value);
  
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
  function exe6() {
    // Obter os valores dos números dos campos de entrada
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let operacao = parseInt(document.getElementById("operacao").value);

    // Validar os números
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    // Realizar a operação selecionada
    let resultado;
    switch (operacao) {
        case 1: // O primeiro numero elevado ao segundo numero
            resultado = (numero1 ** numero2).toFixed(2); // Usando o operador ** para potência
            break;
        case 2: // Raiz quadrada de cada um dos numeros 
            resultado = `Raiz quadrada de ${numero1}: ${Math.sqrt(numero1).toFixed(2)}, Raiz quadrada de ${numero2}: ${Math.sqrt(numero2).toFixed(2)}`;
            break; 
        case 3: // Raiz cúbica de cada um dos numeros
            resultado = `Raiz cúbica de ${numero1}: ${Math.cbrt(numero1).toFixed(2)}, Raiz cúbica de ${numero2}: ${Math.cbrt(numero2).toFixed(2)}`;
            break;
        default:
            resultado = "Operação inválida.";
    }

    // Exibir o resultado
    document.getElementById("resultado").textContent = "Resultado: " + resultado
}
  function exe7() {
    // Obter o valor do salário do campo de entrada
    let salario = parseFloat(document.getElementById("salario").value);

    // Verificar se o salário é um número válido
    if (isNaN(salario)) {
        document.getElementById("resultado").textContent = "Resultado: Por favor, insira um salário válido.";
        return;
    }

    // Calcular o aumento e exibir o resultado
    if (salario < 500) {
        let aumento = salario * 0.30;
        let novoSalario = salario + aumento;
        document.getElementById("resultado").textContent = "Resultado: Novo salário: R$ " + novoSalario.toFixed(2);
    } else {
        document.getElementById("resultado").textContent = "Resultado: Funcionário não tem direito ao aumento.";
    }
}
function exe8() {
  // Obter o valor do salário do campo de entrada
  let salario = parseFloat(document.getElementById("salario").value);

  // Verificar se o salário é um número válido
  if (isNaN(salario)) {
      document.getElementById("resultado").textContent = "Resultado: Por favor, insira um salário válido.";
      return;
  }

  // Calcular o reajuste e exibir o resultado
  let reajuste;
  if (salario < 300) {
      reajuste = salario * 0.35;
  } else {
      reajuste = salario * 0.15;
  }

  let novoSalario = salario + reajuste;
  document.getElementById("resultado").textContent = "Resultado: Novo salário: R$ " + novoSalario.toFixed(2);
}
function exe9() {
  // Obter o valor do saldo médio do campo de entrada
  let saldoMedio = Number(document.getElementById("saldoMedio").value);

  // Verificar se o saldo médio é um número válido
  if (isNaN(saldoMedio)) {
      document.getElementById("resultado").innerHTML = "Resultado: Por favor, insira um saldo médio válido.";
      return;
  }

  // Calcular o crédito com base no saldo médio
  let credito;
  if (saldoMedio > 400) {
      credito = saldoMedio * 0.30;
  } else if (saldoMedio >= 301 && saldoMedio <= 400) {
      credito = saldoMedio * 0.25;
  } else if (saldoMedio >= 201 && saldoMedio <= 300) {
      credito = saldoMedio * 0.20;
  } else {
      credito = saldoMedio * 0.10;
  }

  // Exibir o resultado
  document.getElementById("resultado").innerHTML = "O saldo medio é R$ " + saldoMedio.toFixed(2) + " e o Crédito disponível: R$ " + credito.toFixed(2);
}
function exe10() {
  // Obter o valor do custo de fábrica do campo de entrada
  let custoFabrica = Number(document.getElementById("custoFabrica").value);

  // Verificar se o custo de fábrica é um número válido
  if (isNaN(custoFabrica)) {
      document.getElementById("resultado").innerHTML = "Resultado: Por favor, insira um custo de fábrica válido.";
      return;
  }

  // Calcular o preço ao consumidor com base no custo de fábrica
  let porcentagemDistribuidor, porcentagemImpostos;
  if (custoFabrica <= 12000) {
      porcentagemDistribuidor =  0.05;
      porcentagemImpostos =  0;
  } else if (custoFabrica <= 25000) {
      porcentagemDistribuidor = 0.10;
      porcentagemImpostos =  0.15;
  } else {
      porcentagemDistribuidor =  0.15;
      porcentagemImpostos =  0.20;
  }

  let valorDistribuidor = custoFabrica * porcentagemDistribuidor;
  let valorImpostos = custoFabrica * porcentagemImpostos;
  let precoConsumidor = custoFabrica + valorDistribuidor + valorImpostos;

  // Exibir o resultado
<<<<<<< HEAD
  document.getElementById("resultado").textContent = "Resultado: Preço ao consumidor: R$ " + precoConsumidor.toFixed(2);
}
function exe22() {
  const idade = parseInt(document.getElementById("idade").value);
  const peso = parseInt(document.getElementById("peso").value);
  let risco = "";

  if (idade < 20 && peso < 60) {
    risco = "Risco: 9";
  } else if (idade < 20 && peso >= 60 && peso <= 90) {
    risco = "Risco: 8";
  } else if (idade < 20 && peso > 90) {
    risco = "Risco: 7";
  } else if (idade >= 20 && idade <= 50 && peso < 60) {
    risco = "Risco: 6";
  } else if (idade >= 20 && idade <= 50 && peso >= 60 && peso <= 90) {
    risco = "Risco: 5";
  } else if (idade >= 20 && idade <= 50 && peso > 90) {
    risco = "Risco: 4";
  } else if (idade > 50 && peso < 60) {
    risco = "Risco: 3";
  } else if (idade > 50 && peso >= 60 && peso <= 90) {
    risco = "Risco: 2";
  } else if (idade > 50 && peso > 90) {
    risco = "Risco: 1";
  } else {
    risco = "Dados inválidos";
  }

  document.getElementById("risco").textContent = "Resultado: " + risco;
}
function exe24() {
  let preco = Number(document.getElementById("preco").value);
  let categoria = Number(document.getElementById("categoria").value);
  let situacao = document.getElementById("situacao").value;
  let aumento = 0;
  let imposto = 0;
  let novoPreco = 0;
  let classificacao = "";
  if (preco < 0) {
      document.getElementById("resultado").innerHTML = "Preço inválido";
  } else {
      // Calcula o aumento
      if (preco <= 25) {
          switch (categoria) {
              case 1:
                  aumento = preco * 0.05;
                  break;
              case 2:
                  aumento = preco * 0.08;
                  break;
              case 3:
                  aumento = preco * 0.10;
                  break;
          }
      } else {
          switch (categoria) {
              case 1:
                  aumento = preco * 0.12;
                  break;
              case 2:
                  aumento = preco * 0.15;
                  break;
              case 3:
                  aumento = preco * 0.18;
                  break;
          }
      }
      // Calcula o imposto
      if (categoria == 2 || situacao == 'R') {
          imposto = preco * 0.05;
      } else {
          imposto = preco * 0.08;
      }
      // Calcula o novo preço
      novoPreco = preco + aumento + imposto;
      // Classifica o produto
      if (novoPreco < 50) {
          classificacao = "Barato";
      } else if (novoPreco >= 50 && novoPreco < 120) {
          classificacao = "Normal";
      } else {
          classificacao = "Caro";
      }
      // Exibe o resultado
      document.getElementById("resultado").innerHTML = `Aumento: R$ ${aumento.toFixed(2)}<br>Imposto: R$ ${imposto.toFixed(2)}<br>Novo preço: R$ ${novoPreco.toFixed(2)}<br>Classificação: ${classificacao}`;
  }
}
=======
  document.getElementById("resultado").innerHTML = "Custo de Fabrica: " + custoFabrica.toFixed(2) + " Valor da Distribuidora" + valorDistribuidor.toFixed(2) + " Valor de Impostos: " + valorImpostos.toFixed(2) + " Resultado: Preço ao consumidor: R$ " + precoConsumidor.toFixed(2);
}

function exe22()
//obter o valores de entrada
let idade Number = (document.getElementById("idade").value);
let peso 
>>>>>>> 6cf3fe59e228c9203012d0979ab78ad378e6964c
