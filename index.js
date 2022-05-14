let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let savedNum = count + " - ";
  saveEl.textContent += savedNum;
  countEl.textContent = 0;
  count = 0;
  // console.log(count);
}
