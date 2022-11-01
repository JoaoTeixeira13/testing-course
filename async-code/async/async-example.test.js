import { it, expect, describe } from "vitest";

import { generateToken, generateTokenPromise } from "./async-example";

describe("generateToken()", () => {
    //testing asynchronous code using callbacks

    it("should generate a  token value", (done) => {
        const testUserEmail = "test@test.com";

        generateToken(testUserEmail, (err, token) => {
            try {
                expect(token).toBeDefined();
                done();
            } catch (err) {
                done(err);
            }
        });
    });

    //testing asynchronous code with Promises && async / await

    it("should generate a  token value", () => {
        const testUserEmail = "test@test.com";

        return expect(
            generateTokenPromise(testUserEmail)
        ).resolves.toBeDefined();
    });

    it("should generate a  token value", async () => {
        const testUserEmail = "test@test.com";

        const token = await generateTokenPromise(testUserEmail);

        expect(token).toBeTypeOf("string");
    });
});
