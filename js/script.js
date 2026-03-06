function setup() {
    let meuCanvas = createCanvas(500, 400); 
    frameRate(60);
    
    // Agora sem o colchete "[" que causava o erro
    meuCanvas.elt.setAttribute('tabindex', '0');
    meuCanvas.elt.addEventListener('click', () => {
        meuCanvas.elt.focus();
    });

    iniciarAtor();
    iniciarCarros();

    if (somDaTrilha) {
        somDaTrilha.setVolume(0.4);
        // Nota: O som geralmente precisa de interação do usuário para tocar
    }
}

function draw() {
    // Certifique-se de que imagemDaEstrada foi carregada no preload()
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
    // Garante que o áudio inicie ao pressionar qualquer tecla
    if (getAudioContext().state !== 'running') {
        userStartAudio();
    }
    
    if (somDaTrilha && !somDaTrilha.isPlaying()) {
        somDaTrilha.loop();
    }

    // Movimentação
    if (keyCode === UP_ARROW || key === 'w' || key === 'W') yAtor -= 15;
    if (keyCode === DOWN_ARROW || key === 's' || key === 'S') yAtor += 15;
    if (keyCode === LEFT_ARROW || key === 'a' || key === 'A') xAtor -= 15;
    if (keyCode === RIGHT_ARROW || key === 'd' || key === 'D') xAtor += 15;
    
    xAtor = constrain(xAtor, 0, 470);
    yAtor = constrain(yAtor, 0, 370);
}

function touchStarted() {
    if (getAudioContext().state !== 'running') {
        userStartAudio();
    }
    if (somDaTrilha && !somDaTrilha.isPlaying()) {
        somDaTrilha.loop();
    }
    return false;
}
