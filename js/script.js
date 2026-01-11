let somLiberado = false;

function setup() {
    let largura = min(500, windowWidth - 20);
    let altura = min(400, windowHeight - 20);
    createCanvas(largura, altura);

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
        fill(0, 200);
        rect(0, 0, width, height);

        fill(255);
        textAlign(CENTER);
        textSize(18);
        text("TOQUE PARA INICIAR COM SOM", width / 2, height / 2);

        noLoop(); // pausa só UMA vez
    }
}

/* FUNCIONA NO PC */
function mousePressed() {
    iniciarSom();
}

/* FUNCIONA NO CELULAR */
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

function windowResized() {
    let largura = min(500, windowWidth - 20);
    let altura = min(400, windowHeight - 20);
    resizeCanvas(largura, altura);
}
