function calcularMedia(notas) {
    var soma = 0;
    for (c = 0; c < notas.length; c++) {
        soma += notas[c];
    }
    media = soma / notas.length;
    return media;
}

function aprovacao(notas) {
    let media = calcularMedia(notas);
    let resultado = 0;
    if (media >= 7) {
        resultado = "aprovado";
    } else {
        resultado = "reprovado";
    }
    return "A média é " + media + " - O resultado é " + resultado;
}

console.log(aprovacao([8, 6, 9]));