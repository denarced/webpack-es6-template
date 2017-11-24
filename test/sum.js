import chai from "chai";

import {sum} from "./../src/sum";

const expect = chai.expect;

describe("sum", function() {
    it("should sum ints", function() {
        expect(sum(1,2)).to.equal(3);
    });

    it ("should handle undefined", function() {
        expect(sum(3)).to.equal(3);
        expect(sum()).to.equal(0);
        expect(sum(undefined, 3)).to.equal(3);
    });
});
