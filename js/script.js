let somLiberado = false;

function setup() {
    createCanvas(500, 400); // TAMANHO FIXO — o site controla o resto
    frameRate(60);

    iniciarAtor();
    iniciarCarros();

    noLoop(); // começa pausado até clicar
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

    // Tela de liberação do som
    if (!somLiberado) {
        fill(0, 200);
        rect(0, 0, width, height);

        fill(255);
        textAlign(CENTER);
        textSize(18);
        text("CLIQUE OU TOQUE NA TELA DO GAME", width / 2, height / 2);
    }
}

/* CLIQUE (PC) */
function mousePressed() {
    iniciarSom();
}

/* TOQUE (CELULAR) */
function touchStarted() {
    iniciarSom();
    return false;
}

function iniciarSom() {
    if (!somLiberado) {
        userStartAudio(); // obrigatório para celular
        somDaTrilha.setVolume(0.4);
        somDaTrilha.loop();

        somLiberado = true;
        loop(); // inicia o jogo
    }
}
