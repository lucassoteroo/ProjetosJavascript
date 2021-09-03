function consultaCep() {
    let cep = document.getElementById("cep").value;
    let url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(cep);
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function(response) {
            console.log(response);
            $(".tituloCep").html("Os dados do CEP consultado: " + response.cep);
            $("#bairro").html(response.bairro);
            $("#rua").html(response.logradouro);
            $("#ddd").html(response.ddd);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $(".cep").show();
        }
    })
}

$(function() {
    $(".cep").hide();
})