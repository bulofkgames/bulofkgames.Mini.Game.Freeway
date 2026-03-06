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

function setup() {
    let meuCanvas = createCanvas(500, 400); 
    frameRate(60);
    
    // Configura o canvas para receber foco (essencial para o iframe)
    meuCanvas.elt.setAttribute('tabindex', '0');
    meuCanvas.elt.addEventListener('click', () => {
        meuCanvas.elt.focus();
    });

    iniciarAtor();
    iniciarCarros();

    if (somDaTrilha) {
        somDaTrilha.setVolume(0.4);
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
    // 1. Liberação de Áudio
    if (getAudioContext().state !== 'running') {
        userStartAudio();
    }
    if (somDaTrilha && !somDaTrilha.isPlaying()) {
        somDaTrilha.loop();
    }

    // 2. Movimentação (WASD + Setas)
    // CIMA (W ou Seta Cima)
    if (keyCode === UP_ARROW || key === 'w' || key === 'W') yAtor -= 15;
    // BAIXO (S ou Seta Baixo)
    if (keyCode === DOWN_ARROW || key === 's' || key === 'S') yAtor += 15;
    // ESQUERDA (A ou Seta Esquerda)
    if (keyCode === LEFT_ARROW || key === 'a' || key === 'A') xAtor -= 15;
    // DIREITA (D ou Seta Direita)
    if (keyCode === RIGHT_ARROW || key === 'd' || key === 'D') xAtor += 15;
    
    // Limites de tela
    xAtor = constrain(xAtor, 0, 470);
    yAtor = constrain(yAtor, 0, 370);

    // 3. Trava a página: impede que o navegador role ao usar as setas
    return false; 
}

function touchStarted() {
    // Liberação de áudio para dispositivos móveis
    if (getAudioContext().state !== 'running') {
        userStartAudio();
    }
    if (somDaTrilha && !somDaTrilha.isPlaying()) {
        somDaTrilha.loop();
    }
    return false;
}
