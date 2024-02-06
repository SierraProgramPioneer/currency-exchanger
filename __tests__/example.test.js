/* eslint-disable no-undef */
import FILE from "../src/js/example.js";

describe("CLASS", () => {

    test("should do this", () => {
        const thisObject = new Class(1);
        expect(thisObject).toEqual(1);
    });
