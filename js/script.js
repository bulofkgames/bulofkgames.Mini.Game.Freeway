let somLiberado = false;

function setup() {
    createCanvas(500, 400);
    frameRate(60);

    iniciarAtor();
    iniciarCarros();
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

    // Tela de desbloqueio de som
    if (!somLiberado) {
        fill(0, 200);
        rect(0, 0, width, height);

        fill(255);
        textAlign(CENTER);
        textSize(18);
        text("TOQUE PARA INICIAR COM SOM", width / 2, height / 2);

        noLoop(); // pausa o jogo até tocar
    }
}

function mousePressed() {
    if (!somLiberado) {
        userStartAudio();      // ✅ AGORA no lugar certo
        somDaTrilha.setVolume(0.4);
        somDaTrilha.loop();
        somLiberado = true;
        loop();                // retoma o jogo
    }
}
