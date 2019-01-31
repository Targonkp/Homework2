import {numberOfRolls} from "./lib.js"

const action = document.getElementById('button');
const resultE = document.getElementById('result');
const heightE = document.getElementById('height');
const perimeterE = document.getElementById('perimeter');
const widthE = document.getElementById('width');


function clickOnbutton () {
  const heightEl = parseInt(heightE.value);
  const perimeterEl = parseInt(perimeterE.value);
  const widthEl = parseFloat(widthE.value);
    return resultE.textContent=numberOfRolls(heightEl, perimeterEl, widthEl);
}



 action.addEventListener('click', clickOnbutton);



