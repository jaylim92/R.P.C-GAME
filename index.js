const computerSelect = document.querySelector(".computer-select");
const startGameBtn = document.querySelector(".start-game-button");
const sBtn = document.querySelector(".scissor");
const rBtn = document.querySelector(".rock");
const pBtn = document.querySelector(".paper");

const imogi = ["✌️", "✊", "🖐"];

let index = 0;
let changeSelect = undefined;

function randomSelect() {
  changeSelect = setInterval(() => {
    imogi[index++];
    if (index == imogi.length) {
      index = 0;
    }
    return (computerSelect.innerText = `${imogi[index]}`);
  }, 50);
}

function gameResult(event) {
  let final = event.target.outerText;
  console.log(final);
  if (final !== imogi[index]) {
    return alert("you Win");
  } else if (final == imogi[index]) {
    return alert("draw");
  } else {
    return alert("You Loose");
  }
}

function gameStart() {
  startGameBtn.style.visibility = "hidden";
  randomSelect();
}
function stopGame(event) {
  startGameBtn.style.visibility = "";
  clearInterval(changeSelect);
  gameResult(event);
}

startGameBtn.addEventListener("click", gameStart);
sBtn.addEventListener("click", stopGame);
rBtn.addEventListener("click", stopGame);
pBtn.addEventListener("click", stopGame);
