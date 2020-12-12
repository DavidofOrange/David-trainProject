'use strict';

// This sets a random train.
document.getElementById('pick-train').addEventListener('click', randomTrainSelection);

function randomTrainSelection() {
  let changeTrain = document.querySelector("img");
  let randomNumber = Math.floor(Math.random() * 9) + 1;
  changeTrain.setAttribute("src", `train${randomNumber}.svg`);
}

//This controls the train movement and train horn sound.
document.getElementById('train-button').addEventListener('click', moveTrain);

function moveTrain() {
  disableTrainBtn();
  let train = document.getElementById("trainImg");
  let position = -1600;
  let trainMov = setInterval(frame, 4);
  let trainHorn = new Audio("https://www.soundjay.com/transportation/sounds/train-whistle-01.mp3");
  let randomTrainHorn = Math.floor(Math.random() * 2) + 1;
    function frame(){
      if(position == 1500){
        clearInterval(trainMov);
        enableTrainBtn();
      } else if(position == 500 && randomTrainHorn===1){
        trainHorn.play();
        position++;
        train.style.marginLeft= position + "px";
      } else {
        position++;
        train.style.marginLeft= position + "px";
        
      }
    }
}
//train button - enable and disable.
let x = document.getElementById("train-button").disabled;

function disableTrainBtn() {
  document.getElementById("train-button").disabled = true;
}

function enableTrainBtn() {
  document.getElementById("train-button").disabled = false;
}
//This controls the train sound on click.
document.getElementById('train-button').addEventListener('click', trainSound);

function trainSound(){
  let trainSound = new Audio("https://www.soundjay.com/transportation/sounds/metro-pass-by-01.mp3");
  trainSound.play();
}

//This controls the sky colour setting.
document.getElementById('color-button').addEventListener('click', skyColour);

function skyColour() {
  let skyColour = document.querySelector(".background");
  let colours = ["#00B0E2", "#00CCFF", "#0096C6", "#006390", "#004B76", "#00345D", "#002145", "#00042F"];
  let randomNumber = Math.floor(Math.random() * 7) + 1;
  skyColour.style.backgroundColor = colours[randomNumber];
  }
