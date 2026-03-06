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
    if (getAudioContext().state !== 'running') {
        userStartAudio();
    }
    
    // Movimentação robusta (usando .toLowerCase para pegar 'w' e 'W')
    let k = key.toLowerCase();
    
    if (keyCode === UP_ARROW || k === 'w') yAtor -= 15;
    if (keyCode === DOWN_ARROW || k === 's') yAtor += 15;
    if (keyCode === LEFT_ARROW || k === 'a') xAtor -= 15;
    if (keyCode === RIGHT_ARROW || k === 'd') xAtor += 15;
    
    xAtor = constrain(xAtor, 0, 470);
    yAtor = constrain(yAtor, 0, 370);

    return false; // Trava a rolagem da página
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
