// titulo header
document.querySelector(".titulo").textContent = "Dal Lago Nutrição";

// links do menu
document.querySelector(".pacientes").textContent = "Pacientes";
document.querySelector(".novoPaciente").textContent = "Novo paciente";

// titulo mensagem bem vindo
var dataAtual = new Date();
var mes = (dataAtual.getMonth() + 1);
var horas = dataAtual.getHours();

document.querySelector(".titulo-BemVindo").textContent = defineMensagemData() + ", seja bem vindo!";

function defineMensagemData () {
    var mensagemBemVindo; 
    if (horas > 6 && horas < 12) {
        mensagemBemVindo = "Bom dia";
    } else if (horas > 12 && horas < 19) {
        mensagemBemVindo = "Boa tarde"
    } else {
        mensagemBemVindo = "Boa noite"
    }

    return mensagemBemVindo;
}
