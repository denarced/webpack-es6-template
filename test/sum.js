// @format
/* eslint-env jest */

import { sum } from "sum";

describe("sum", function() {
    test("should sum ints", function() {
        expect(sum(1, 2)).toEqual(3);
    });

    test("should handle undefined", function() {
        expect(sum(3)).toEqual(3);
        expect(sum()).toEqual(0);
        expect(sum(undefined, 3)).toEqual(3);
    });
});
