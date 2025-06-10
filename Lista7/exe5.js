function cadastra(mat,vet){
    for(let i=0;i<12;i++){
        mat[i] = [] // cria espaco na memoria para cada vetor da matriz
        for(let j=0;j<4;j++){
            mat[i][j] = Number(prompt(`Informe as vendas na semana ${j+1} do mes ${vet[i]}`))
        }
    }

}
function calculatotalsemana(mat){
        for(let j=0;j<4;j++){ //para cada semana
            let somasemana = 0
            for(let i=0;i<12;i++){
                somasemana = somasemana + mat[i][j] //para cada mes
            }
            alert(`Total vendido na semana ${j+1} foi de ${somasemana}`)
            
        }
 }
function calculatotalano(mat){
    let somaano = 0 //calcula valor do ano
    for(let i=0;i<mat,length;i++){
        for(let j=0;j<4;j++){
            somaano += mat[i][j]
        }
        
    }
}

function calculatotalmes(mat,vet){
    for(let i=0;i<mat.length;i++){
        let soma = 0 //vamos iniciar um mes 
        for(let j=0;j<mat[i].length;j++){
            soma = soma + mat[i][j]
        }
        alert(`Total vendido em ${vet[i]} foi de ${soma}`)
    }
}


function exe5(){
    let mat = []
    const vet = ["Janeiro","Fevereiro","Marco","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
    cadastra(mat,vet)
    calculatotalmes(mat,vet)
    calculatotalsemana(mat)
    alert(`O total vendido no ano foi ${somaano(mat)}`)
}
exe5()

//crie uma funcao que calcula e mostra a qantidade de vendas maiores que 5000 em cada mes
//crie uma funcao que calcula e mostra os meses que tiveram vendas menores que 1000
