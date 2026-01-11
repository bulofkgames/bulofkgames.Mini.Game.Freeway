let xAtor;
let yAtor;

let meusPontos = 0;
let nivel = 1;

function iniciarAtor() {
    xAtor = width / 2 - 15;
    yAtor = height - 34;
}

function mostraAtor() {
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
    if (keyIsDown(UP_ARROW)) yAtor -= 3;
    if (keyIsDown(DOWN_ARROW) && yAtor < height - 34) yAtor += 3;
}

function verificaColisao() {
    for (let i = 0; i < imagemCarros.length; i++) {
        if (collideRectCircle(
            xCarros[i], yCarros[i], 50, 40,
            xAtor + 15, yAtor + 15, 15
        )) {
            somDaColisao.play();
            iniciarAtor();
        }
    }
}

function marcaPonto() {
    if (yAtor <= 5) {
        meusPontos++;
        nivel = meusPontos + 1;
        somDoPonto.play();
        iniciarAtor();
    }
}

function incluiPontos() {
    fill(255, 240, 60);
    textAlign(CENTER);
    textSize(18);
    text("Pontos: " + meusPontos, width / 2, 25);
    text("Nível: " + nivel, width / 2, 45);
}
