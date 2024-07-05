const btnList = document.getElementsByClassName("number");
const temdegt = document.getElementsByClassName("operator");
const screen = document.getElementsByClassName("display")[0];

let prevalue = "";
let currentvalue = "";

for (let i = 0; i < btnList.length; i++) {
  btnList[i].addEventListener("click", function () {
    prevalue = currentvalue; // "" -> "1" -> "2"
    // screen.textContent = screen.textContent + btnList[i].textContent;
    screen.textContent += btnList[i].textContent; // "8"
    // console.log("screen", screen.textContent);

    currentvalue = screen.textContent; // 1 -> 2 -> 3
    console.log("prev", prevalue);
    console.log("curr", currentvalue);
  });
}

for (let i = 0; i < temdegt.length; i++) {
  temdegt[i].addEventListener("click", function () {
    console.log(temdegt[i]);
    screen.textContent = "";
  });
}
function add(prevalue+currentvalue){
}
