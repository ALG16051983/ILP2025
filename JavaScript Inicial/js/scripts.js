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
