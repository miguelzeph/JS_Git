//Exercício 9 da lista do professor

// Inserir número para avaliar se é maior ou menor que 40
function avaliar (nota) {
    if (nota >= 40) {
        console.log("Aluno APROVADO com :", nota);
    }
    else {
        console.log("Aluno REPROVADO com: ",nota);
    }
}

// função que descobre qual é o próximo multiplo de 5 do valor inserido por você na nota
function nota_multiplo_5 (nota) {
    for (nota_multiplo = nota+1;  (nota_multiplo%5) != 0; nota_multiplo++) {};
    return nota_multiplo;
}

// Faz o arredondamento de acordo com o critério da escola
// obs: Veja que chamei a função "nota_multiplo_5" de dentro da função "arredondar"
function arredondar (nota) {
    if (nota < 38) {
        return nota;
    }
    else if ((nota_multiplo_5(nota) - nota)<3 ) {
        return nota = nota_multiplo_5(nota);
    }
    else if ((nota_multiplo_5(nota) - nota) >= 3 ){
        return nota;
    }
    return nota;
}

// Executa a função
avaliar(arredondar(38))