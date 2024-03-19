const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');
const nuvem = document.querySelector('.nuvem');
const gameboard = document.querySelector('.gameboard');
const msgloser = document.querySelector('.msg-loser');

const pular = () => {
    mario.classList.add('jump');

    setTimeout( () => {
        mario.classList.remove('jump');

    }, 600);
}

function contadorDePontos() {

    const paragrafo = document.querySelector('.pontos');
    let contador = 0;
    
   contadorInterval = setInterval(() => {
        contador++;
        paragrafo.textContent = contador;
    }, 1000);
}

contadorDePontos();

function pararContador() {
    clearInterval(contadorInterval);
}


const perdeu = setInterval(() => {

    const posicaoCano = cano.offsetLeft;
    const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px', '');
    if (posicaoCano <= 120 && posicaoCano > 0 && posicaoMario < 80) {
        cano.style.animation = 'none';
        cano.style.left = `${posicaoCano}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${posicaoMario}px`;
        mario.src = './assets/game-over.png';
        mario.style.width = '80px';
        mario.style.left = '50px';

        mario.style.filter = "grayscale(100%)";
        msgloser.style.display = "block"
        
        clearInterval(perdeu);
        pararContador();
    } else {
        msgloser.style.display = "none"
    }

},10);

function restart() {
    window.location.reload();
}


document.addEventListener('keydown', pular);
document.addEventListener('click', pular);

