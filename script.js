// Global Constants
var clueHoldTime = 1000;
var cluePauseTime = 333;
var nextClueWaitTime = 1000;

// Global Variables
var pattern = [1, 2, 3, 4, 5, 6];
// var twinkle = [1,1,2,2,3,3,2,4,4];

var progress = 0; //
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0; // current guess counter
var strikeCounter = 3;
var day = true;

function startGame() {
  //initialize game variables
  progress = 0;
  strikeCounter = 3;
  gamePlaying = true;

  if (document.getElementById("patternLen").value.toLowerCase() != "n/a") {
    let patternLen = parseInt(document.getElementById("patternLen").value);
    generatePattern(patternLen);
  }

  // swap the Start and Stop buttons
  document.getElementById("strikeCounter").classList.remove("hidden");
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("strikeCounter").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 499.4,
  6: 533,
};

// const freqMap = {
//   1: 261.63, // C
//   2: 392.00, // G
//   3: 440.00, // A
//   4: 349.23,  // F
// };

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("btn" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("btn" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  clueHoldTime = clueHoldTime * 0.9;
  document.getElementById("hearts").innerHTML = "";
  for (let i = 0; i < strikeCounter; i++) {
    document.getElementById("hearts").innerHTML += "♥ ";
  }
  context.resume();
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Congrats!! You Won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  // add game logic here

  // check for guess
  console.log(btn);
  console.log(pattern[guessCounter]);
  if (btn === pattern[guessCounter]) {
    // checks if turn is over
    if (guessCounter == progress) {
      // check if it's the last turn
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else if (strikeCounter > 1) {
    strikeCounter--;
    playClueSequence();
  } else {
    loseGame();
  }
}

// generate a random sequence
function generatePattern(len) {
  pattern = [];
  for (let i = 0; i < len; i++) {
    pattern.push(getRandomInt(1, 6));
  }
}

// adopted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// generates a random number between two numbers
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

// night and day mode
var r = document.querySelector(":root");
function checkToggle() {
  if (document.getElementById("themeToggle").checked) {
    document.body.className = "dark-mode";
    document.getElementById("");
    console.log("dark mode");
    r.style.setProperty("--borderProp", "5px solid black");
  } else {
    document.body.className = "light-mode";
    console.log("light mode");
    r.style.setProperty("--borderProp", "5px solid white");
  }
}
