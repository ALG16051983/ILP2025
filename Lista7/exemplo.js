function entrada(mat){
    // sera 3x3
    for(let i=0;i<3;i++){
        mat[i] = [] // cria cada linha da matriz
        for(let j=0;j<3;j++){
            mat[i][j] = Number(prompt(`Informe o elemento [${i}][${j}] da matriz`))
        }
    }
}
function calcularSomaDiagonalPrincipal(mat){
    let soma = 0
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(i ==j){
                soma += mat[i][j]
            }
        }
    }
 // funcao vai retornar a soma
 return soma
}
function exemplo(){
    let mat = []  //
    entrada(mat)
    let soma = calcularSomaDiagonalPrincipal(mat)
    alert(`A soma da diagonal principal é ${soma}`) // ou usar assim alert(`A soma da diagonal principal é calcularSomaDiagonalPrincipal(mat)
}

exemplo()