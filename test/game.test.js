const {Game, WORD_LIST, EASY, MEDIUM, HARD} = require("../game");
const chai = require("chai");

const expect = chai.expect;


let game = new Game()

describe("Game engine test", function () {


    describe("Test easy difficulty", function () {
        it("Word should have a length between 0 to 5", function () {
            expect(game.getRandomWord(EASY)).to.have.lengthOf.lessThanOrEqual(5)
        })
    })

    describe("Test medium difficulty", function () {
        it("Word should have a length of 6 or 7 letters ", function () {
            console.log(game.getRandomWord(MEDIUM))
            expect(game.getRandomWord(MEDIUM)).to.have.lengthOf.greaterThan(5).and.lengthOf.lessThanOrEqual(7)
        })
    })

    describe("Test hard difficulty", function () {
        it("Word should have a length of more than 7 letters word", function () {
            expect(game.getRandomWord(HARD)).to.have.lengthOf.greaterThan(7);
        })
    })


});