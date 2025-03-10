function seguir() {
  alert("Voce agora esta seguindo Andre Gimenez");
}
//exercicio 1
function exe1() {
  // vamos usar dom para recuperar os dados do HTML
  // DOM - Documento Object Model
  //Converter texto para numero - Number()
  let nro1 = Number(document.getElementById("nro1").value);
  let nro2 = Number(document.getElementById("nro2").value);
  // Fazer a subtracao
  let sub = nro1 - nro2;
  // vamos mostrar o resultado ao usuario
  //alert("A subtracao é " + sub)
  document.getElementById("sub").innerText = "O resultado é " + sub;
}
//exercicio 2
function exe2() {
  // vamos usar dom para recuperar os dados do HTML
  // DOM - Documento Object Model
  //Converter texto para numero - Number()
  let nro1 = Number(document.getElementById("nro1").value);
  let nro2 = Number(document.getElementById("nro2").value);
  let nro3 = Number(document.getElementById("nro3").value);
  // Fazer a subtracao
  let sub = nro1 * nro2 * nro3;
  // vamos mostrar o resultado ao usuario
  //alert("A multiplicacao dos 3 numeros é " + sub)
  document.getElementById("sub").innerText =
    "O resultado da multiplicacao é " + sub;
}
function exe3() {
    // vamos usar dom para recuperar os dados do HTML
    // DOM - Documento Object Model
    //Converter texto para numero - Number()
    let nro1 = Number(document.getElementById("nro1").value);
    let nro2 = Number(document.getElementById("nro2").value);
    // Fazer a divisao
    let sub = nro1 / nro2;
    // vamos mostrar o resultado ao usuario
    //alert("A divisao é " + sub)
    document.getElementById("sub").innerText = "O resultado é " + sub;
}
  function exe4() {
    // vamos usar dom para recuperar os dados do HTML
    // DOM - Documento Object Model
    //Converter texto para numero - Number()
    let nro1 = Number(document.getElementById("nro1").value);
    let nro2 = Number(document.getElementById("nro2").value);
    // Fazer a media ponderada
    let sub = (nro1 * 2 + nro2 * 3) / 5;
    // vamos mostrar o resultado ao usuario
    //alert("A media ponderada das duas notas é " + sub)
    document.getElementById("sub").innerText = "O resultado é " + sub;
  }  
  function exe5() {
    // Recupera o preço digitado pelo usuário
    let preco = Number(document.getElementById("preco").value);
    // Calcula o desconto de 10%
    let desconto = preco * 0.10;
    // Calcula o preço com desconto
    let precoComDesconto = preco - desconto;
    // Exibe o resultado na página
    document.getElementById("resultado").innerText = "O preço com desconto de 10% é R$ " + precoComDesconto.toFixed(2);
  }
  function exe6() {
    // Recupera o salario digitado pelo usuário
    let Salario = Number(document.getElementById("Salario").value);
    // Recupere o valor das vendas do funcionario
    let vendas = Number(document.getElementById("vendas").value);
    // Calcula o salario mais suas comissoes
    let comissao = vendas * 0.04;
    let salariocomcomissao = Salario + comissao;
    // Exibe o resultado na página
    document.getElementById("resultado").innerText = "O valor do salario com suas comissoes é " + salariocomcomissao.toFixed(2);
  }
  function exe7() {
    // Recupera o peso digitado pelo usuário
    let peso = Number(document.getElementById("peso").value);
    
    // Calcula peso com 15% a mais
    let perengordou = peso * 0.15;
    let engordou = peso + perengordou
    // Calcula peso com 20% a menos
    let peremagreceu = peso * 0.20;
    let emagreceu = peso - peremagreceu
    // Exibe o resultado na página
    document.getElementById("resultado1").innerText = "O novo peso com 15% a mais é " + engordou.toFixed(2);
    document.getElementById("resultado2").innerText = "O novo peso com 20% a menos é " + emagreceu.toFixed(2);
  }
  function exe8() {
    // Recupera o peso digitado pelo usuário
    let peso = Number(document.getElementById("peso").value);
    // Converter KL em Gramas
    let gramas = (peso * 1000).toLocaleString("pt-BR")
    
    // Exibe o resultado na página
    document.getElementById("pesores").innerText = "O peso é " + gramas + " gramas."
  }


  