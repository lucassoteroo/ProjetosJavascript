function calcularImc() {

    let peso = document.getElementById('valorPeso').value;
    let altura = document.getElementById('valorAltura').value;

    let imc = peso / (altura) ** 2;


    if (imc < 17) {
        document.getElementById('resultadoImc').innerHTML = 'Imc = ' + imc.toFixed(2);
        document.getElementById('resultadoTabela').innerHTML = 'Indica que você está em: Muito abaixo do peso';
    } else if (imc >= 17 && imc <= 18.5) {
        document.getElementById('resultadoImc').innerHTML = 'Imc = ' + imc.toFixed(2);
        document.getElementById('resultadoTabela').innerHTML = 'Indica que você está em: Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.99) {
        document.getElementById('resultadoImc').innerHTML = 'Imc = ' + imc.toFixed(2);
        document.getElementById('resultadoTabela').innerHTML = 'Indica que você está em: Peso normal';
    } else if (imc >= 25 && imc <= 29.99) {
        document.getElementById('resultadoImc').innerHTML = 'Imc = ' + imc.toFixed(2);
        document.getElementById('resultadoTabela').innerHTML = 'Indica que você está em: Acima do peso';
    } else if (imc >= 30 && imc <= 34.99) {
        document.getElementById('resultadoImc').innerHTML = 'Imc = ' + imc.toFixed(2);
        document.getElementById('resultadoTabela').innerHTML = 'Indica que você está em: Obesidade';
    } else if (imc >= 35 && imc <= 39.99) {
        document.getElementById('resultadoImc').innerHTML = 'Imc = ' + imc.toFixed(2);
        document.getElementById('resultadoTabela').innerHTML = 'Indica que você está em: Obesidade severa';
    } else if (imc > 40) {
        document.getElementById('resultadoImc').innerHTML = 'Imc = ' + imc.toFixed(2);
        document.getElementById('resultadoTabela').innerHTML = 'Indica que você está em: Obesidade mórbida';
    } else {
        document.getElementById('resultadoImc').innerHTML = 'Imc = ' + imc.toFixed(2) + 'Imc inválido';
    }
}