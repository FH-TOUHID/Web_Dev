const arr = ["rock", "paper", "scissors"];
const emoji = ["🪨", "📄", "✂️"];

let button_rock = document.querySelector(".choice-btn.rock");

let button_paper = document.querySelector(".choice-btn.paper");

let button_scissors = document.querySelector(".choice-btn.scissors");

let mywin=0;
let cpuwin=0;
let win=true;

function resetGame(){

  // reset scores
  mywin = 0;
  cpuwin = 0;

  // reset divider text
  document.querySelector(".divider")
    .textContent = "Choose your weapon";

  // clear result section
  document.querySelector(".result")
    .innerHTML = "";

  // get all stars
  const starme1 =
    document.getElementById("star-1-me");

  const starme2 =
    document.getElementById("star-2-me");

  const starme3 =
    document.getElementById("star-3-me");

  const starme4 =
    document.getElementById("star-1-cpu");

  const starme5 =
    document.getElementById("star-2-cpu");

  const starme6 =
    document.getElementById("star-3-cpu");

  // add back hidden class
  starme1.classList.add("score-stars");

  starme2.classList.add("score-stars");

  starme3.classList.add("score-stars");

  starme4.classList.add("score-stars");

  starme5.classList.add("score-stars");

  starme6.classList.add("score-stars");
}
function game(i) {
  let random = Math.floor(Math.random() * 3);

  document.querySelector(".result").innerHTML = "";

  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  const div4 = document.createElement("div");

  const starme1=document.getElementById("star-1-me");
  const starme2=document.getElementById("star-2-me");
  const starme3=document.getElementById("star-3-me");
  const starme4=document.getElementById("star-1-cpu");
  const starme5=document.getElementById("star-2-cpu");
  const starme6=document.getElementById("star-3-cpu");

  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  const span3 = document.createElement("span");
  const span4 = document.createElement("span");

  div1.classList.add("score-card", "you");
  div3.classList.add("score-card", "cpu");

  div2.classList.add("divider");

  div4.classList.add("vs-badge");

  span1.classList.add("choice-emoji");
  span2.classList.add("choice-name");

  span3.classList.add("choice-emoji");
  span4.classList.add("choice-name");

  span1.textContent = emoji[i];
  span2.textContent = "YOUR PICK";

  span3.textContent = emoji[random];
  span4.textContent = "CPU PICK";

  div2.textContent = "Game Started!!";

  if (i == random) {
    div4.textContent = "TIE";
  } else {
    if (i == 0 && random == 2) 
    {
      div4.textContent = "YOU WIN";
      mywin++;
      win=true;
    }
    else if (i == 0 && random == 1) 
    {
      div4.textContent = "YOU LOSE";
      cpuwin++;
      win=false;
    }
    else if (i == 1 && random == 0) 
    {
      div4.textContent = "YOU WIN";
      mywin++;
      win=true;
    }
    else if (i == 1 && random == 2) 
    {
      div4.textContent = "YOU LOSE";
      cpuwin++;
      win=false;
    }
    else if (i == 2 && random == 0)
    {
       div4.textContent = "YOU LOSE";
       cpuwin++;
       win=false;
    }
    else{
       div4.textContent = "YOU WIN";
       mywin++;
       win=true;
    }
  }

  div1.appendChild(span1);
  div1.appendChild(span2);

  div3.appendChild(span3);
  div3.appendChild(span4);

  document.querySelector(".divider").textContent = div2.textContent;

  document.querySelector(".result").appendChild(div1);

  document.querySelector(".result").appendChild(div4);

  document.querySelector(".result").appendChild(div3);

  if(win)
  {
      if(mywin==1) starme1.classList.remove("score-stars");
      else if(mywin==2) starme2.classList.remove("score-stars");
      else starme3.classList.remove("score-stars");
  }
  else
  {
      if(cpuwin==1) starme4.classList.remove("score-stars");
      else if(cpuwin==2) starme5.classList.remove("score-stars");
      else starme6.classList.remove("score-stars");
  }
if(mywin == 3){

  setTimeout(function(){

    alert("YOU WON THE MATCH!");

    resetGame();

  },300);
}

if(cpuwin == 3){

  setTimeout(function(){

    alert("CPU WON THE MATCH!");

    resetGame();

  },300);
}

}

button_rock.addEventListener("click", function () {
  game(0);
});

button_paper.addEventListener("click", function () {
  game(1);
});

button_scissors.addEventListener("click", function () {
  game(2);
});
