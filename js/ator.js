let xAtor = 85;
let yAtor = 366;
let meusPontos = 0;
let recorde = localStorage.getItem("recordeFreeway") || 0;

function mostraAtor() {
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
    if (keyIsDown(UP_ARROW)) yAtor -= 3;
    if (keyIsDown(DOWN_ARROW) && yAtor < height - 34) yAtor += 3;
}

function verificaColisao() {
    for (let i = 0; i < imagemCarros.length; i++) {
        if (collideRectCircle(xCarros[i], yCarros[i], 50, 40, xAtor, yAtor, 15)) {
            somDaColisao.play();
            jogoAtivo = false;
            salvarRecorde();
        }
    }
}

function incluiPontos() {
    fill(255, 240, 60);
    textAlign(CENTER);
    text(`Pontos: ${meusPontos}`, width / 2, 30);
    text(`Recorde: ${recorde}`, width / 2, 60);
}

function marcaPonto() {
    if (yAtor < 10) {
        meusPontos++;
        somDoPonto.play();
        yAtor = height - 34;
    }
}

function salvarRecorde() {
    if (meusPontos > recorde) {
        recorde = meusPontos;
        localStorage.setItem("recordeFreeway", recorde);
    }
}
