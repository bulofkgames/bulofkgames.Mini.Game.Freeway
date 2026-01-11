let xCarros = [];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeBase = [2, 3, 2.5, 3.5, 2.8, 3.2];

function iniciarCarros() {
    for (let i = 0; i < 6; i++) {
        xCarros[i] = width + i * 120;
    }
}

function mostraCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
    }
}

function movimentaCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        xCarros[i] -= velocidadeBase[i] + nivel * 0.8;
    }
}

function voltaPosicaoInicialCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        if (xCarros[i] < -50) {
            xCarros[i] = width + random(100, 300);
        }
    }
}
