function seguir(){
    alert('Voce agora esta seguindo Andre Gimenez')
}
//exercicio 1
function exe1(){
    // vamos usar dom para recuperar os dados do HTML
    // DOM - Documento Object Model
    //Converter texto para numero - Number()
    let nro1 =Number( document.getElementById("nro1").value)
    let nro2 =Number( document.getElementById("nro2").value)
    // Fazer a subtracao
    let sub = nro1 - nro2
    // vamos mostrar o resultado ao usuario
    //alert("A subtracao é " + sub)
    document.getElementById("sub").innerText = "O resultado é " + sub
}