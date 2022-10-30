import { it, expect } from "vitest";

import { transformToNumber } from "./numbers";

it("should transform and return a passed string number value as a number", () => {
    // Arrange, Act, Assert

    //Arrange
    const number = "1";

    //Act
    const result = transformToNumber(number);

    //Assert (here we are setting the expected value dynamically)
    expect(result).toBeTypeOf("number");
});

it("should return an invalid string input as NaN", () => {
    // Arrange, Act, Assert

    //Arrange
    const input = "invalid";

    //Act
    const result = transformToNumber(input);

    //Assert (here we are setting the expected value dynamically)
    expect(result).toBeNaN();
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
