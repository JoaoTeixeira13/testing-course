import { it, vitest, expect, vi } from "vitest";
import { promises as fs } from "fs";

import writeData from "./io";

//jest does not hoist mocks, vitest does (import mock at top when using jest)

vi.mock("fs");
vi.mock("path", () => {
    return {
        default: {
            join: (...args) => {
                return args[args.length - 1];
            },
        },
    };
});

it("should execute the writeFile method", () => {
    const testData = "Test";
    const testFilename = "test.txt";

    // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();

    writeData(testData, testFilename);

    // expect(fs.writeFile).toBeCalled();

    expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});
