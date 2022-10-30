import { it, expect } from "vitest";

import { validateStringNotEmpty, validateNumber } from "./validation";

it("should throw an error if an empty value is passed as an argument", () => {
    const input = "";

    const resultFn = () => {
        validateStringNotEmpty(input);
    };

    expect(resultFn).toThrow(/Invalid input - must not be empty./);
});

it("should return undefined if a valid input is passed as an argument", () => {
    const input = "1";

    const result = validateStringNotEmpty(input);

    expect(result).toBeUndefined();
});

it("should not throw an error if a valid input is passed as an argument", () => {
    const input = "1";

    const resultFn = () => {
        validateStringNotEmpty(input);
    };

    expect(resultFn).not.toThrowError();
});

it("should throw an error when passed an invalid input as argument", () => {
    const input = "invalid";
    const input2 = NaN;

    const resultFn = () => {
        validateNumber(input);
    };

    const resultFn2 = () => {
        validateNumber(input2);
    };

    expect(resultFn).toThrow(/Invalid number input/);
    expect(resultFn2).toThrow(/Invalid number input/);
});

it("should not throw an error when passed a valid input as argument", () => {
    const input = 1;

    const resultFn = () => {
        validateNumber(input);
    };

    expect(resultFn).not.toThrow(/Invalid number input/);
});

it("should throw an error if a non-numeric number is passed as a value", () => {
    const input = "1";

    const resultFn = () => {
        validateNumber(input);
    };

    expect(resultFn).toThrow(/Invalid number input/);
});
