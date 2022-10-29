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

    //Assert (here we are setting the expected value dynamically)
    const expectedResult = numbers.reduce(
        (prevValue, curValue) => prevValue + curValue,
        0
    );
    expect(result).toBe(expectedResult);
});

it("should yield NaN if at least one invalid number is provided", () => {
    const inputs = ["invalid", 1];

    const result = add(inputs);

    expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
    const numbers = ["1", "2"];

    const result = add(numbers);

    const expectedResult = numbers.reduce(
        (prevValue, curValue) => +prevValue + +curValue,
        0
    );
    expect(result).toBe(expectedResult);
});
