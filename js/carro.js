let yCarros = [60, 120, 180, 240, 300, 360];
let xCarros = [];
let velocidadeBase = [2, 3, 2.5, 3.5, 2.2, 3];

function iniciarCarros() {
    xCarros = Array(6).fill(width);
}

iniciarCarros();

function mostraCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
    }
}

function movimentaCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        xCarros[i] -= velocidadeBase[i] + nivel * 0.6;
    }
}

function voltaPosicaoInicialCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        if (xCarros[i] < -60) {
            xCarros[i] = width + random(100, 400);
        }
    }
}
