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

it("should yield 0 if an empty array is provided", () => {
    const numbers = [];

    const result = add(numbers);

    expect(result).toBe(0);
});

it("should throw an error if no value is passed into the function", () => {
    // try and catch

    // try {
    //     const result = add();
    // } catch (error) {
    //     expect(error).toBeDefined();
    // }

    const resultFn = () => {
        add();
    };
    expect(resultFn).toThrow(/is not iterable/);
});

it("should throw an error if provided with multiple arguments instead of an array", () => {
    const num1 = 1;
    const num2 = 2;

    const resultFn = () => {
        add(num1, num2);
    };

    //add regular expression to check for specific error to contain passed value
    expect(resultFn).toThrow(/is not iterable/);
});
