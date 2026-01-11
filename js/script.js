// ===== CONTROLE DO JOGO =====
let jogoAtivo = true;
let nivel = 1;

// ===== SETUP =====
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
}

// Ajusta tela no celular
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// ===== LOOP PRINCIPAL =====
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

// ===== AUDIO + RESTART =====
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

// ===== FUNÇÕES EXTRAS =====
function controlaNivel() {
    nivel = floor(meusPontos / 5) + 1;
}

function telaGameOver() {
    background(0, 0, 0, 200);
    fill(255);
    textAlign(CENTER);
    textSize(32);
    text("GAME OVER", width / 2, height / 2 - 20);
    textSize(20);
    text("Toque ou clique para reiniciar", width / 2, height / 2 + 20);
}

function reiniciarJogo() {
    meusPontos = 0;
    nivel = 1;
    jogoAtivo = true;
    iniciarCarros();
    yAtor = height - 34;
}
