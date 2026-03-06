function setup() {
    createCanvas(500, 400); // tamanho normal do game
    frameRate(60);

    iniciarAtor();
    iniciarCarros();

    // tenta tocar a trilha automaticamente
    if (somDaTrilha) {
        somDaTrilha.setVolume(0.4);
        somDaTrilha.loop();
    }
}

function draw() {
    background(imagemDaEstrada);

    // Carros
    mostraCarro();
    movimentaCarro();
    voltaPosicaoInicialCarro();

    // Ator
    mostraAtor();
    movimentaAtor();

    // Jogo
    verificaColisao();
    marcaPonto();
    incluiPontos();
}

/* Libera som quando o usuário interagir (PC e celular) */
function keyPressed() {
    if (somDaTrilha && !somDaTrilha.isPlaying()) {
        userStartAudio();
        somDaTrilha.loop();
    }
}

function touchStarted() {
    if (somDaTrilha && !somDaTrilha.isPlaying()) {
        userStartAudio();
        somDaTrilha.loop();
    }
    return false;
}
function keyPressed() {
  // Captura setas ou WASD
  if (keyCode === UP_ARROW || key === 'w' || key === 'W') {
    ator.y -= 10; // Ajuste o valor conforme sua necessidade
  }
  if (keyCode === DOWN_ARROW || key === 's' || key === 'S') {
    ator.y += 10;
  }
  // Se o seu jogo precisar de movimento lateral (A/D ou setas esquerda/direita)
  if (keyCode === LEFT_ARROW || key === 'a' || key === 'A') {
    ator.x -= 10;
  }
  if (keyCode === RIGHT_ARROW || key === 'd' || key === 'D') {
    ator.x += 10;
  }
}
