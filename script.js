'use strict';

// This sets the train.
document.getElementById('pick-train').addEventListener('click', randomTrainSelection);
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function randomTrainSelection() {
  let changeTrain = document.querySelector("img");
  let nextrain = num.shift();
  num.push(nextrain);
  changeTrain.setAttribute("src", `train${nextrain}.svg`);
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

let colours = ["#00B0E2", "#00CCFF", "#0096C6", "#006390", "#004B76", "#00345D", "#002145", "#00042F"];


function skyColour(){
  let skyColours = document.querySelector(".background");
    let color = colours.shift();
    colours.push(color);

    skyColours.style.backgroundColor = color;
};


  //mobile device
  let nua = navigator.userAgent;
  let is_android = ((nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1) && !(nua.indexOf('Chrome') > -1));
  if(is_android) {
		$('select.form-control').removeClass('form-control').css('width', '100%');

}
