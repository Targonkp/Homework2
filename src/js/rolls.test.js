import {NumberOfRolls} from "./rolls.js";

test ('Should change', () => {

    const result = NumberOfRolls (3, 20);
    expect(result).toBe(12);
})