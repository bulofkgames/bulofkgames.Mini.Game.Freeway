function setup() {
    createCanvas(500, 400);
    frameRate(60);
}

function draw() {
    background(imagemDaEstrada);

    mostraAtor();
    movimentaAtor();

    mostraCarro();
    movimentaCarro();
    voltaPosicaoInicialCarro();

    verificaColisao();
    incluiPontos();
    marcaPonto();
}

function mousePressed() {
    userStartAudio();
    if (!somDaTrilha.isPlaying()) {
        somDaTrilha.setVolume(0.4);
        somDaTrilha.loop();
    }
}
