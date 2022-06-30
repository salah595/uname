import './style.css';

const appDiv: HTMLElement = document.getElementById('app');

const prevButton : HTMLButtonElement = document.getElementById("prev");
const nextButton : HTMLButtonElement= document.getElementById("next");
const levelNumber : HTMLParagraphElement = document.getElementById("number");
const buttonsContainer: HTMLDivElement = document.querySelector(".buttons-container");
const stepsCountP: HTMLParagraphElement = document.querySelector(".steps-count");
const stepsNumberP : HTMLParagraphElement = document.querySelector(".steps-number");

// initialize game
// fetch the level and the scores from local storage
let level = 1;
let steps = [];
let stepsCount = 0;
let stepsNumber = 0;
 
const colorArr:string[] = ['red', 'blue', 'black'];

function createButtonEl (color: string, id: string) : HTMLLabelElement {
  const button = document.createElement("label");
  button.classList.add("game-btn");
  button.style.backgroundColor = color;
  button.id = id;

  return button;
}

function initializeGame (): void {
  // init level
  levelNumber.innerText = '' + level;

  // init buttons
  const gameButtons: HTMLLabelElement[] = [];
  for(let i = 0; i < level; i++) {
    gameButtons.push(createButtonEl(colorArr[i], '' + i));
  }
  buttonsContainer.append(...gameButtons);
}
function toggleButtonsDisablation (state: boolean): void {

}

function animateSteps ():void {

}

function game() {
  initializeGame();

}

game();
// each level has a button
// append to the dom
// create a step
// disable button
// create the animation
// test user and check
// if true move 
// if false retry


