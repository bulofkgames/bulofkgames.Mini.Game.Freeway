function setup() {
    createCanvas(500, 400);
    frameRate(60);

    iniciarAtor();
    iniciarCarros();

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

function keyPressed() {
    // 1. Liberação de áudio
    if (somDaTrilha && !somDaTrilha.isPlaying()) {
        userStartAudio();
        somDaTrilha.loop();
    }

    // 2. Movimentação (usando as variáveis xAtor e yAtor do seu ator.js)
    if (keyCode === UP_ARROW || key === 'w' || key === 'W') yAtor -= 10;
    if (keyCode === DOWN_ARROW || key === 's' || key === 'S') yAtor += 10;
    if (keyCode === LEFT_ARROW || key === 'a' || key === 'A') xAtor -= 10;
    if (keyCode === RIGHT_ARROW || key === 'd' || key === 'D') xAtor += 10;
    
    // Mantém o ator dentro dos limites da tela
    xAtor = constrain(xAtor, 0, 470);
    yAtor = constrain(yAtor, 0, 370);
}

function touchStarted() {
    if (somDaTrilha && !somDaTrilha.isPlaying()) {
        userStartAudio();
        somDaTrilha.loop();
    }
    return false;
}
