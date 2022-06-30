import './style.css';

const appDiv: HTMLElement = document.getElementById('app');

const prevButton : HTMLButtonElement = document.getElementById("prev");
const nextButton : HTMLButtonElement= document.getElementById("next");
const levelNumber : HTMLParagraphElement = document.getElementById("number");
const 
// initialize game
// fetch the level and the scores from local storage
let level = 1;
levelNumber.innerText = '' + level;
const colorArr:string[] = ['red', 'blue', 'black'];
const steps = []; 

function createButtonEl (color: string, id: string) : HTMLLabelElement {
  const button = document.createElement("label");
  button.classList.add("game-btn");
  button.style.backgroundColor = color;
  button.id = id;

  return button;
}



function gameLoop() {

}
// each level has a button
// append to the dom
// create a step
// disable button
// create the animation
// test user and check
// if true move 
// if false retry


