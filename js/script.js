function setup() {
    let meuCanvas = createCanvas(500, 400); 
    frameRate(60);
    
    [
    meuCanvas.elt.setAttribute('tabindex', '0');
    meuCanvas.elt.addEventListener('click', () => {
        meuCanvas.elt.focus();
    });

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
    // 1. Liberação de áudio (P5 precisa disso para tocar som após clique)
    if (somDaTrilha && !somDaTrilha.isPlaying()) {
        userStartAudio();
        somDaTrilha.loop();
    }

    // 2. Movimentação (Usando variáveis corretas)
    if (keyCode === UP_ARROW || key === 'w' || key === 'W') yAtor -= 15;
    if (keyCode === DOWN_ARROW || key === 's' || key === 'S') yAtor += 15;
    if (keyCode === LEFT_ARROW || key === 'a' || key === 'A') xAtor -= 15;
    if (keyCode === RIGHT_ARROW || key === 'd' || key === 'D') xAtor += 15;
    
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
