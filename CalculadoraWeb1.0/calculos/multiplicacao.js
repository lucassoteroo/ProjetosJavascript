function multiplicar() {
    var valor1 = parseInt(document.getElementById("numero1-mult").value);
    var valor2 = parseInt(document.getElementById("numero2-mult").value);

    var multiplicacao = valor1 * valor2;

    document.getElementById("resultado-mult").innerHTML = "=" + multiplicacao;
}