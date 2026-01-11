function setup() {
    createCanvas(500, 400);
    frameRate(60);

    iniciarAtor();
    iniciarCarros();

    userStartAudio(); // NECESSÁRIO PARA SOM NO CELULAR

    if (somDaTrilha) {
        somDaTrilha.setVolume(0.4);
        somDaTrilha.loop();
    }
}

function draw() {
    background(imagemDaEstrada);

    mostraCarro();
    movimentaCarro();
    voltaPosicaoInicialCarro();

    mostraAtor();
    movimentaAtor();

    verificaColisao();
    marcaPonto();
    incluiPontos();
}
