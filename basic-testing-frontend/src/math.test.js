// import "test" or "it" from vitest

import { it, expect } from "vitest";

import { add } from "./math";

// it or test expects 2 arguments:  a string describing the test, and a function with the test

it("should summarize all number values in an array", () => {
    // Arrange, Act, Assert

    //Arrange
    const numbers = [1, 2, 3];

    //Act
    const result = add(numbers);

    //Assert (here we are settinging the expected value dynamically)
    const expectedResult = numbers.reduce(
        (prevValue, curValue) => prevValue + curValue,
        0
    );
    expect(result).toBe(expectedResult);
});
