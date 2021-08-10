function somar() {
    var valor1 = parseInt(document.getElementById("numero1-soma").value);
    var valor2 = parseInt(document.getElementById("numero2-soma").value);

    var soma = valor1 + valor2;

    document.getElementById("resultado-soma").innerHTML = "=" + soma;
}