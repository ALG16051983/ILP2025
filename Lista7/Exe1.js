function entrada(mat){
    // sera 3x5
    for(let i=0;i<3;i++){
        mat[i] = [] // cria cada linha da matriz
        for(let j=0;j<5;j++){
            mat[i][j] = parseInt(Math.random() * 10) + 15 // gera numeros aleatorios entre 0 e 9
        }
    }
}
function somaentre15e20(mat){
    let soma = 0
    for(let i=0;i<3;i++){
        for(let j=0;j<5;j++){
            if(mat [i][j] >= 15 && mat[i][j] <= 20){
            soma ++
            }
           
            
        }
    }
 // funcao vai retornar a soma
 return soma
}
function exibematriz(mat){
    let saida = ''
    for(let i = 0;i < mat[i].length;i++){
        saida = saida + '\n'
        for(let j=0;j <mat[i].length;j++){
            saida = saida + " " + mat[i][j]
        }

    }
    alert
    }
}
function Exe1(){
    let mat = []
    entrada(mat)
    alert(`A soma dos numeros entre 15 e 20 é ${somaentre15e20(mat)}`)
    exibematriz(mat)
}