// Posições dos carros
let xCarros = [];
let yCarros = [40, 96, 150, 210, 270, 318];

// Velocidade base de cada carro
let velocidadeBase = [2, 3, 2.5, 3.5, 2.8, 3.2];

// Inicializa posições dos carros
function iniciarCarros() {
    for (let i = 0; i < imagemCarros.length; i++) {
        xCarros[i] = width + i * 120;
    }
}

// Mostra os carros
function mostraCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
    }
}

// Move os carros (velocidade aumenta com o nível)
function movimentaCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        xCarros[i] -= velocidadeBase[i] + (nivel - 1) * 0.6;
    }
}

// Reposiciona carro ao sair da tela
function voltaPosicaoInicialCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        if (xCarros[i] < -50) {
            xCarros[i] = width + random(100, 300);
        }
    }
}
