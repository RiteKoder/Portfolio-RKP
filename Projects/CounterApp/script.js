let numb = document.getElementById("num");
let track = document.getElementById("track");
const inc = document.getElementById("inc");
const save = document.getElementById("save");

let score = parseInt(numb.innerText);
inc.addEventListener("click", () => {
  score = score + 1;
  numb.innerText = score;
});

save.addEventListener("click", () => {
  track.textContent += score + " , ";
  numb.textContent = 0;
  score = 0;
});
