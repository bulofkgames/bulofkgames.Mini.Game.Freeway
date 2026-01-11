let somLiberado = false;



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

    // Tela para liberar o som
    if (!somLiberado) {
        fill(0, 200);
        rect(0, 0, width, height);

        fill(255);
        textAlign(CENTER);
        textSize(18);
        text("CLIQUE OU TOQUE PARA INICIAR COM SOM", width / 2, height / 2);

        noLoop();
    }
}

/* PC */
function mousePressed() {
    iniciarSom();
}

/* CELULAR */
function touchStarted() {
    iniciarSom();
    return false;
}

function iniciarSom() {
    if (!somLiberado) {
        userStartAudio();
        somDaTrilha.setVolume(0.4);
        somDaTrilha.loop();
        somLiberado = true;
        loop();
    }
}
