var pacientes = document.querySelectorAll(".paciente");

// Perorre a tabela fazendo o preenchimento
for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var validacaoPeso = true;
    var validacaoAltura = true;

    // Validação do peso
    if (peso <= 0 || peso >= 1000) {
        //console.log("Peso Inválido!");
        varlidacaoPeso = false;
        tdImc.textContent = "Peso Inválido!"
        paciente.classList.add("paciente-invalido");
    }

    // Validação da altura
    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        tdImc.textContent = "Altura Inválido!";
        validacaoAltura = false;
        paciente.classList.add("paciente-invalido");
    }

    // Validação final peso e altura
    if (validacaoAltura == true && validacaoPeso == true) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0 ;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}