// import "test" or "it" from vitest

import { it, expect } from "vitest";

import { add } from "./math";

// it or test expects 2 arguments:  a string describing the test, and a function with the test

it("should summarize all number values in an array", () => {
    const result = add([1, 2, 3]);
    expect(result).toBe(6);
});
