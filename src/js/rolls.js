 const action = document.getElementById('button');
const resultE = document.getElementById('result');
 const heightE = document.getElementById('height');
 const perimeterE = document.getElementById('perimeter');

export function NumberOfRolls (height, perimeter) {
    const roll = 0.5 * 10; //ширина рулона равна 0,5 м, а длина - 10 м, вычисляем общую площадь рулона
    const sum = height*perimeter/roll;//вычисляем общую площадь поверхности и делим на площадь рулона;
    resultE.textContent = Math.ceil(sum) + ' рулонов.';
    resultE.style.color = 'red';

}
 action.addEventListener(
     'click',
     function (){NumberOfRolls (parseInt(heightE.value), parseInt(perimeterE.value))}

)



