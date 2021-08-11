/*Variavel dos alunos*/

var alunos = [

    /*Variavel dos notasAluno*/

    [7, 8, 8, 8],
    [10, 9, 9, 7],
    [5, 7, 7, 6],
    [8, 8, 8, 8]
]

/*Variavel da nota*/

var nota = 0;

/*Laço para percorrer a array alunos*/

for (var i = 0; i < alunos.length; i++) {
    nota = 0
    notasAluno = alunos[i]
    console.log("Aluno: " + i);
    console.log("Notas: " + notasAluno);

    /*Laço para percorrer a array notasAluno*/

    for (var c = 0; c < notasAluno.length; c++) {
        nota += notasAluno[c];
    }
    media = nota / 4;

    /*Estrutura condicional para validação da média*/

    if (media >= 7) {
        resultado = "aprovado";
    } else {
        resultado = "reprovado";
    }
    console.log("Media: " + media + " - " + resultado);
}

/*Resultado:

    "Aluno: 0"
    "Notas: 7,8,8,8"
    "Media: 7.75 - aprovado"
    
    "Aluno: 1"
    "Notas: 10,9,9,7"
    "Media: 8.75 - aprovado"
    
    "Aluno: 2"
    "Notas: 5,7,7,6"
    "Media: 6.25 - reprovado"
    
    "Aluno: 3"
    "Notas: 8,8,8,8"
    "Media: 8 - aprovado"

*/