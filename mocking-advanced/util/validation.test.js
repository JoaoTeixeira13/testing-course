import { describe, it, expect } from "vitest";
import { validateNotEmpty } from "./validation";

describe("valiadateNotEmpty()", () => {
    it("should throw an error if an empty string is provided as a value", () => {
        const testInput = "";
        const validationFn = () => {
            validateNotEmpty(testInput);
        };

        expect(validationFn).toThrowError();
    });

    it("should throw an error if blank spaces are provided as a value", () => {
        const testInput = "    ";
        const validationFn = () => {
            validateNotEmpty(testInput);
        };

        expect(validationFn).toThrowError();
    });

    it("should throw an error with the provided error message", () => {
        const testInput = "";
        const testErrorMessage = "Test Error";
        const validationFn = () => {
            validateNotEmpty(testInput, testErrorMessage);
        };

        expect(validationFn).toThrow(testErrorMessage);
    });
});
