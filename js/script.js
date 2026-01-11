function setup() {
    createCanvas(2500, 2400); // tamanho normal do game
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
