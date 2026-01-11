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

    if (!somLiberado) {
        fill(0, 180);
        rect(0, 0, width, height);
        fill(255);
        textAlign(CENTER);
        textSize(18);
        text("TOQUE PARA INICIAR COM SOM", width / 2, height / 2);
        noLoop();
    }
}

function mousePressed() {
    if (!somLiberado) {
        userStartAudio();
        somDaTrilha.loop();
        somLiberado = true;
        loop();
    }
}
