// Posições iniciais dos carros
let yCarros = [40, 96, 150, 210, 270, 318];
let xCarros = [600, 600, 600, 600, 600, 600];

// Velocidade de cada carro
let velocidadeCarros = [2, 5, 3.5, 5, 2.3, 3.1];

// Mostra os carros na tela
function mostraCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
    }
}

// Move os carros para a esquerda
function movimentaCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        xCarros[i] -= velocidadeCarros[i];
    }
}

// Reposiciona o carro quando sai da tela
function voltaPosicaoInicialCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        if (passouTodaTela(xCarros[i])) {
            xCarros[i] = width; // melhor que 600 (responsivo)
        }
    }
}

// Verifica se o carro saiu totalmente da tela
function passouTodaTela(xCarro) {
    return xCarro < -50;
}
