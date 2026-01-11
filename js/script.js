let jogoAtivo = true;
let nivel = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    ajustaTela();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    ajustaTela();
}

function ajustaTela() {
    if (width < 600) {
        textSize(18);
    } else {
        textSize(25);
    }
}

function draw() {
    background(imagemDaEstrada);

    if (!jogoAtivo) {
        telaGameOver();
        return;
    }

    mostraAtor();
    movimentaAtor();

    mostraCarro();
    movimentaCarro();
    voltaPosicaoInicialCarro();

    verificaColisao();
    incluiPontos();
    marcaPonto();

    controlaNivel();
}

function mousePressed() {
    userStartAudio();
    if (!somDaTrilha.isPlaying()) {
        somDaTrilha.setVolume(0.4);
        somDaTrilha.loop();
    }

    if (!jogoAtivo) reiniciarJogo();
}
