function dividir() {
    var valor1 = parseInt(document.getElementById("numero1-div").value);
    var valor2 = parseInt(document.getElementById("numero2-div").value);

    var divisao = valor1 / valor2;

    document.getElementById("resultado-div").innerHTML = "=" + divisao;
}