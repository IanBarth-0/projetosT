alert ("Seja bem-vindo!");
let nomeP=prompt("Digite seu primeiro nome para identificação:");
let nomeU=prompt("Digite seu último nome para identificação:");
let idade=prompt("Digite sua idade para identificação:");
alert (nomeP + " " + nomeU + ", sua idade é de " + idade + " anos.");

let idadeD=idade*365
console.log(nomeP + " " + nomeU + ", sua idade é de " + idade + " anos. Isso equivale a " + idadeD + " dias.");

const botao = document.getElementById('tipos');
const menu = document.getElementById('menuProcuraPorTipo');
const textoSelecionado = document.getElementById('TipoSelecionado');
const opcoes = document.querySelectorAll('.opcao-customizada');

botao.addEventListener('click', function(evento) {
    evento.stopPropagation(); // MUITO IMPORTANTE!
    menu.classList.toggle('aberto');
    botao.classList.toggle('ativo');
});

opcoes.forEach(function(opcao) {
    opcao.addEventListener('click', function() {
        textoSelecionado.textContent = this.textContent; // Atualiza o texto do botão
        
        menu.classList.remove('aberto'); // Fecha o menu
        botao.classList.remove('ativo');  // Remove o estado ativo do botão
        
        console.log("Selecionado: " + this.getAttribute('data-valor')); // Captura o valor (ex: "pt")
    });
});

document.addEventListener('click', function() {
    menu.classList.remove('aberto');
    botao.classList.remove('ativo');
});

