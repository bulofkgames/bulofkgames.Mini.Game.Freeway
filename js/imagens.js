let imagemDaEstrada;
let imagemDoAtor;
let imagemCarros = [];

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload() {
    imagemDaEstrada = loadImage("imagens/estrada.png");
    imagemDoAtor = loadImage("imagens/ator-1.png");

    imagemCarros[0] = loadImage("imagens/carro-1.png");
    imagemCarros[1] = loadImage("imagens/carro-2.png");
    imagemCarros[2] = loadImage("imagens/carro-3.png");
    imagemCarros[3] = loadImage("imagens/carro-1.png");
    imagemCarros[4] = loadImage("imagens/carro-2.png");
    imagemCarros[5] = loadImage("imagens/carro-3.png");

    somDaTrilha = loadSound("sons/trilha.mp3");
    somDaColisao = loadSound("sons/colidiu.mp3");
    somDoPonto = loadSound("sons/pontos.wav");
}
