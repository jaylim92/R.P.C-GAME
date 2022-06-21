const sBtn = document.querySelector(".sissor");
const rBtn = document.querySelector(".rock");
const pBtn = document.querySelector(".paper");

const imogi = ["✌️", "✊", "🖐"];
let index = 0;

function aiSelect() {
  const computerSelect = document.querySelector(".computer-select");
  setInterval(() => {
    imogi[index++];
    if (index == imogi.length) {
      index = 0;
    }
    return (computerSelect.innerText = `${imogi[index]}`);
  }, 50);
}

document.addEventListener("DOMContentLoaded", aiSelect);
