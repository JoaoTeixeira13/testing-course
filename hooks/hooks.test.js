import {
    it,
    expect,
    beforeAll,
    beforeEach,
    afterEach,
    afterAll,
    describe,
} from "vitest";

import { User } from "./hooks";

const testEmail = "test@test.com";
let user = new User(testEmail);

beforeAll(() => {
    console.log("beforeAll()");
});

//resets user value before each test

beforeEach(() => {
    user = new User(testEmail);
});

//resets user value after each test
afterEach(() => {
    user = new User(testEmail);
});

afterAll(() => {
    console.log("afterAll()");
});

//if added here, concurrent executes all tests inside the suite concurrently
//global state manipulations may clash with each other with concurrency
// describe.concurrent()

it.concurrent("should update the email", () => {
    const newTestEmail = "test2@test.com";

    user.updateEmail(newTestEmail);

    expect(user.email).toBe(newTestEmail);
});

it.concurrent("should have an email property", () => {
    expect(user).toHaveProperty("email");
});

it.concurrent("should store the provided email value", () => {
    expect(user.email).toBe(testEmail);
});

it.concurrent("should clear the email", () => {
    user.clearEmail();

    expect(user.email).toBe("");
});

it.concurrent(
    "should still have an email property after clearing the email",
    () => {
        user.clearEmail();

        expect(user).toHaveProperty("email");
    }
);
