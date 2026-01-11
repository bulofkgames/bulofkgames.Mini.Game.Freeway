function setup() {
    createCanvas(500, 400);
    frameRate(60);

    // Inicia a trilha sonora
    if (somDaTrilha) {
        somDaTrilha.setVolume(0.4);
        somDaTrilha.loop();
    }
}

function draw() {
    background(imagemDaEstrada);

    // Ator
    mostraAtor();
    movimentaAtor();

    // Carros
    mostraCarro();
    movimentaCarro();
    voltaPosicaoInicialCarro();

    // Colisão e pontuação
    verificaColisao();
    incluiPontos();
    marcaPonto();
}
