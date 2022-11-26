import { describe, it, expect, vi } from "vitest";

import { generateReportData } from "./data";

describe("generateReportData()", () => {
    it("should execute logFn if provided", () => {
        const logger = vi.fn();

        //empty functions can be substituted by a mock implementation with following methods:

        // logger.mockImplementation(() => {});
        // logger.mockImplementationOnce(() => {});

        generateReportData(logger);

        expect(logger).toHaveBeenCalled();
    });
});
