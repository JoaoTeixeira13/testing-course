import { it, expect, describe } from "vitest";

import { transformToNumber, cleanNumbers } from "./numbers";

describe("transformToNumber()", () => {
    it("should transform and return a passed string number value as a number", () => {
        // Arrange, Act, Assert

        //Arrange
        const number = "1";

        //Act
        const result = transformToNumber(number);

        //Assert (here we are setting the expected value dynamically)
        expect(result).toBeTypeOf("number");
    });

    it("should transform and return a passed string number value as a number", () => {
        // Arrange, Act, Assert

        //Arrange
        const input = "1";
        // const input = "invalid"; //test will fail

        //Act
        const result = transformToNumber(input);

        //Assert (here we are setting the expected value dynamically)
        expect(result)
            .toBe(+input)
            .not.toBeNaN();
    });

    it("should return an invalid string input as NaN", () => {
        // Arrange, Act, Assert

        //Arrange
        const input = "invalid";
        const input2 = {};

        //Act
        const result = transformToNumber(input);
        const result2 = transformToNumber(input2);

        //Assert (here we are setting the expected value dynamically)
        expect(result).toBeNaN();
        expect(result2).toBeNaN();
    });

    it("should return an empty string as zero", () => {
        // Arrange, Act, Assert

        //Arrange
        const input = "";

        //Act
        const result = transformToNumber(input);

        //Assert (here we are setting the expected value dynamically)
        expect(result).toBe(0);
    });
});

//integration test (function that calls other functions)

describe("cleanNumbers()", () => {
    it("should return an array of number values if an array of string number values is provided", () => {
        const numberValues = ["1", "2"];

        const cleanedNumbers = cleanNumbers(numberValues);

        expect(cleanedNumbers[0]).toBeTypeOf("number");

        expect(cleanedNumbers).toEqual([1, 2]);
    });

    it("should throw an error if an array with at least one empty string is provided", () => {
        const numberValues = ["", 1];
        const cleanFn = () => {
            cleanNumbers(numberValues);
        };
        expect(cleanFn).toThrowError();
    });
});
