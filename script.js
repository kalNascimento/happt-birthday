const texts = [
  "Bom dia!!! <br>( ノ ^o^)ノ",
  "<br>Hoje é seu aniversario né??? <br>(◐ω◑ )",
  "<br>Que boomm!!! <br>(〜^∇^)〜",
  `<br>Feliz Aniversário! <br>🎉🎈🎂
  <br>Hoje é o dia mais brilhante do ano, porque é o seu aniversário! <br>🌟🎉 
  <br>Desde o momento em que você chegou a este mundo, ele se tornou um lugar mais doce e encantador <br>🌎🍭
  <br>Que seu dia seja repleto de sorrisos, abraços apertados e muitos desejos realizados <br>😁🐈
  <br>Você merece toda a alegria que o mundo pode oferecer! <br>🥳💖
  <br>Continue espalhando sua magia por onde passa, porque você faz o mundo ficar mais bonito com seu sorriso especial <br>🧙‍♂️😄
  <br>Feliz aniversário, querida! Que a felicidade esteja sempre ao seu lado. <br>🎂🎁🎈
  <br>Com carinho <br>😍
  <br>BARDO<br>🤗❤️<br>`,
  "<br><br>TENUM <br>ÓTIMO <br>DIA!!! <br>Saphirinha meu amor<br>❤️ (•́ ω •̀๑)",
  "<br><br>Feliz Aniversário!!! <br>(◕‿◕✿)",
  "<br><br>Que seu ano seja cheio de felicidade!<br>🌟🎉<br><br><br>"
];

let textIndex = 0;
let isTyping = false;

const textContainer = document.getElementById("text");
const textContainer2 = document.getElementsByClassName("container-text");
const firstScreen = document.getElementById("first-screen");
const happyCat = document.getElementById("happy-cat");
const button = document.getElementById("button");

const speed = 100;

function updateBackground(index) {
  if (index % 2 === 0) {
    firstScreen.style.backgroundImage = "url('./assets/2.svg')";
  } else {
    firstScreen.style.backgroundImage = "url('./assets/3.svg')";
  }
}

function typeWriter(html, index = 0) {
  isTyping = true;

  if (index < html.length) {
    if (html.slice(index, index + 4) === "<br>") {
      textContainer.innerHTML += "<br>";
      index += 4;
    } else {
      textContainer.innerHTML += html[index];
      index++;
    }

    textContainer2[0].scrollTop = textContainer2[0].scrollHeight;    

    setTimeout(() => typeWriter(html, index), speed);
  } else {
    isTyping = false;
  }
}

function changeText() {
  if (isTyping || textIndex >= texts.length) return;

  textIndex++;
  updateBackground(textIndex);

  if (textIndex === texts.length) {
    button.style.display = 'none';
    happyCat.style.display = 'block';
  }

  typeWriter(texts[textIndex]);
}

updateBackground(textIndex);
typeWriter(texts[textIndex]);