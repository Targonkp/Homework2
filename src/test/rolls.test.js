import {numberOfRolls} from "../js/lib.js";

test ('Should change', () => {

    const result = numberOfRolls (3, 20, 0.5);
    expect(result).toBe(12);
})