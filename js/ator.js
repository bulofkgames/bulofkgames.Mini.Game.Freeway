let xAtor;
let yAtor;

let meusPontos = 0;
let nivel = 1;

// Inicializa posição do jogador
function iniciarAtor() {
    xAtor = width / 2 - 15;
    yAtor = height - 34;
}

// Desenha o ator
function mostraAtor() {
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

// Movimento do ator
function movimentaAtor() {
    if (keyIsDown(UP_ARROW)) yAtor -= 3;
    if (keyIsDown(DOWN_ARROW) && yAtor < height - 34) yAtor += 3;
}

// Verifica colisão com carros
function verificaColisao() {
    for (let i = 0; i < imagemCarros.length; i++) {
        let colidiu = collideRectCircle(
            xCarros[i], yCarros[i], 50, 40,
            xAtor + 15, yAtor + 15, 15
        );

        if (colidiu) {
            if (somDaColisao) somDaColisao.play();

            // NÃO zera pontos — apenas reinicia posição
            iniciarAtor();
        }
    }
}

// Marca ponto ao chegar do outro lado
function marcaPonto() {
    if (yAtor <= 5) {
        meusPontos++;
        nivel = meusPontos + 1;

        if (somDoPonto) somDoPonto.play();
        iniciarAtor();
    }
}

// Mostra pontos e nível
function incluiPontos() {
    fill(255, 240, 60);
    textAlign(CENTER);
    textSize(18);
    text("Pontos: " + meusPontos, width / 2, 25);
    text("Nível: " + nivel, width / 2, 45);
}
