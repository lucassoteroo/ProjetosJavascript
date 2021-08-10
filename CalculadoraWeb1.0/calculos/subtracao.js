function subtrair() {
    var valor1 = parseInt(document.getElementById("numero1-sub").value);
    var valor2 = parseInt(document.getElementById("numero2-sub").value);

    var subtracao = valor1 - valor2;

    document.getElementById("resultado-sub").innerHTML = "=" + subtracao;
}