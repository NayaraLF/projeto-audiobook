const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");
const audio = document.getElementById("audio-capitulo");
const textoCapitulo = document.getElementById("capitulo");
const qtdCapitulos = 10;

let taTocando = false;
let capituloAtual = 1;

function playFaixa() {
  audio.play();
  taTocando = true;

  botaoPlayPause.classList.add("tocando");
}

function pauseFaixa() {
  audio.pause();
  taTocando = false;

  botaoPlayPause.classList.remove("tocando");
}

function tocarOuPausar() {
  if (taTocando === true) {
    pauseFaixa();
  } else {
    playFaixa();
  }
}

function proximoCapitulo() {
  pauseFaixa();

  if (capituloAtual < qtdCapitulos) {
    capituloAtual = capituloAtual + 1;
  } else {
    capituloAtual = 1;
  }

  audio.src = "./audios/" + capituloAtual + ".mp3";
  textoCapitulo.innerText = "Capitulo " + capituloAtual;
}

function capituloAnterior() {
  pauseFaixa();

  if (capituloAtual === 1) {
    capituloAtual = qtdCapitulos;
  } else {
    capituloAtual = capituloAtual - 1;
  }

  audio.src = "./audios/" + capituloAtual + ".mp3";
  textoCapitulo.innerText = "Capitulo " + capituloAtual;
}

botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoProximoCapitulo.addEventListener("click", proximoCapitulo);
botaoCapituloAnterior.addEventListener("click", capituloAnterior);
