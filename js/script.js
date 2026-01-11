let jogoAtivo = true;
let nivel = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    yAtor = height - 34;
    iniciarCarros();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    yAtor = height - 34;
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

    if (somDaTrilha && !somDaTrilha.isPlaying()) {
        somDaTrilha.setVolume(0.4);
        somDaTrilha.loop();
    }

    if (!jogoAtivo) {
        reiniciarJogo();
    }
}

function controlaNivel() {
    nivel = floor(meusPontos / 5) + 1;
}

function telaGameOver() {
    fill(0, 180);
    rect(0, 0, width, height);
    fill(255);
    textAlign(CENTER);
    textSize(32);
    text("GAME OVER", width / 2, height / 2 - 20);
    textSize(18);
    text("Clique ou toque para reiniciar", width / 2, height / 2 + 20);
}

function reiniciarJogo() {
    meusPontos = 0;
    nivel = 1;
    jogoAtivo = true;
    iniciarCarros();
    yAtor = height - 34;
}
