// Autor: Davyd Cristiano | data: 20/09/2021 | Senai Front-end //

//sistema de contagem de peças//

// definição de variáveis //
var Criador = "By: Davyd Cristiano"
console.log(Criador)

var peso = 100;
if(peso >=100){
    console.log("Peso da peça válido")
} else {
    console.log("Peso da peça inválido")
}

var ListaDePecas = ['Peca 1','SENAI','Peca 3','Peca 4','Peca 5'];
console.log("Quantidade de peças: " + ListaDePecas)

if(ListaDePecas.length <=10){
    console.log('As peças já estão cadastradas');
} 

for (var i = 0; i < ListaDePecas.length; i ++){
    var PecaAtual = ListaDePecas[i];
    if(PecaAtual.length < 4) {
        console.log(PecaAtual + ' Esta peça possui nome inferior a 4 caracteres! ')
    } else {
        console.log(PecaAtual + ' Está peça podera! Ser Cadastrada. ')
    }
}
