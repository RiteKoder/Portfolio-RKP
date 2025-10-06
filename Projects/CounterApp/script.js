let num = document.getElementById("num");
let track = document.getElementById("track");
const inc = document.getElementById("inc");
const save = document.getElementById("save");

let score = parseInt(num.innerText);
inc.addEventListener("click", () => {
  score = score + 1;
  num.innerText = score;
  console.log(track);
});

save.addEventListener("click", () => {
  track.innerText += score + "& ";
  console.log(newtext);
});
