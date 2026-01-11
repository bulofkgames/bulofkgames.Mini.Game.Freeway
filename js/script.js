function setup() {
    createCanvas(500, 400); // tamanho normal do game
    frameRate(60);

    iniciarAtor();
    iniciarCarros();

    // tenta tocar a trilha automaticamente
    if (somDaTrilha) {
        somDaTrilha.setVolume(0.4);
        somDaTrilha.loop();
    }
}

function draw() {
    background(imagemDaEstrada);

    // Carros
    mostraCarro();
    movimentaCarro();
    voltaPosicaoInicialCarro();

    // Ator
    mostraAtor();
    movimentaAtor();

    // Jogo
    verificaColisao();
    marcaPonto();
    incluiPontos();
}

/* Libera som quando o usuário interagir (PC e celular) */
function keyPressed() {
    if (somDaTrilha && !somDaTrilha.isPlaying()) {
        userStartAudio();
        somDaTrilha.loop();
    }
}

function touchStarted() {
    if (somDaTrilha && !somDaTrilha.isPlaying()) {
        userStartAudio();
        somDaTrilha.loop();
    }
    return false;
}
