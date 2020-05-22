import {
    expect,
} from "chai";
import {
    describe,
    it,
} from "mocha";

import SprintfFormatter from "./index";

describe("./index.ts", () => {
    describe("SprintfFormatter", () => {
        it("Can create instance", () => {
            const sprintfFormatter = new SprintfFormatter();
            expect(sprintfFormatter).to.be.instanceof(SprintfFormatter);
        });
        
        it("has interpolate function", () => {
            expect(new SprintfFormatter()).to.have.property("interpolate").that.is.a("function");
        });
    });
});
