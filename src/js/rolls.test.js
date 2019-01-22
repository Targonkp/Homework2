import {NumberOfRolls} from "./rolls.js";

test ('Should change', () => {
    const heightEl = 3;
    const perimeterEl = 20;
    const result = NumberOfRolls (heightEl, perimetrEl);
    expect(result).toBe(12);
})