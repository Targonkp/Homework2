export function numberOfRolls (height, perimeter, width) {
    const roll = 10*width; //ширина рулона равна 0,5 м, а длина - 10 м, вычисляем общую площадь рулона
    const sum = height*perimeter/roll;//вычисляем общую площадь поверхности и делим на площадь рулона;

return Math.ceil(sum);
}