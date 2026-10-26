const { test } = require("node:test");
const assert = require("node:assert/strict");

const {
    add,
    subtract,
    multiply,
    divide
} = require("../app");

test("Addition of two numbers", () => {
    assert.equal(add(10, 5), 15);
});

test("Subtraction of two numbers", () => {
    assert.equal(subtract(10, 5), 5);
});

test("Multiplication of two numbers", () => {
    assert.equal(multiply(10, 5), 50);
});

test("Division of two numbers", () => {
    assert.equal(divide(10, 5), 2);
});

test("Division by zero should throw an error", () => {
    assert.throws(() => divide(10, 0), {
        message: "Cannot divide by zero"
    });
});