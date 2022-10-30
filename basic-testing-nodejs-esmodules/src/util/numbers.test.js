import { it, expect, describe } from "vitest";

import { transformToNumber } from "./numbers";

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
