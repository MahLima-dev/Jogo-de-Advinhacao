
let numeroAleatorio = Math.floor(Math.random() * 100)+1;
let tentativas = 0;
let jogoFinalizado = false
function chute(){
let palpite = parseInt(document.getElementById("palpite").value);
while (tentativas < 10) {
    if(jogoFinalizado) {
        document.getElementById("mensagem").textContent ="O jogo finalizou clique em resetar";
        return;
    }
    if (document.getElementById("palpite").value === ""){
        document.getElementById("mensagem").textContent = "Digite um valor para começar";
        break;
    }
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        document.getElementById("mensagem").textContent = "Insira um número válido, e entre 1 e 100.";
        break;
    }
    tentativas++;

    document.getElementById("tentativas").textContent = "Faltam " + (10-tentativas) + " tentativas";

    if (palpite === numeroAleatorio) {
        document.getElementById("mensagem").textContent ="Parabéns! Você acertou em " + tentativas + " tentativas!";
        document.getElementById("tentativas").textContent = "";
        jogoFinalizado = true
            break;
    } else if (palpite < numeroAleatorio) {
        document.getElementById("mensagem").textContent ="O número é maior que " + palpite;
        break;
    } else if ( palpite > numeroAleatorio) {
        document.getElementById("mensagem").textContent ="O número é menor que " + palpite;
        break;
    
    }
}
    if (!jogoFinalizado && tentativas === 8) {
        document.getElementById("mensagem").textContent = "Dica: o número está entre " + parseInt((numeroAleatorio - 8)) + " e " + parseInt((numeroAleatorio + 15));
    }
    if (!jogoFinalizado && tentativas === 10) {
        document.getElementById("tentativas").textContent = "";
        document.getElementById("mensagem").textContent = "Game Over! O número era " + numeroAleatorio;
        jogoFinalizado = true
    }
}
function resetar(){
    numeroAleatorio = Math.floor(Math.random() *100)+1;
    tentativas = 0
    jogoFinalizado = false
    document.getElementById("palpite").value = ""
    document.getElementById("mensagem").textContent = ""
    document.getElementById("tentativas").textContent = ""
}