const {Game, WORD_LIST, EASY, MEDIUM, HARD} = require("../game");
const chai = require("chai");

const expect = chai.expect;


let game = new Game()

describe("Game engine test", function () {


    describe("Is difficulty 1 return 5 of less letter", function () {
        it("test if difficulty 1 return 5 or less letter", function () {
            expect(game.getRandomWord(EASY)).to.have.lengthOf.lessThanOrEqual(5)
        })
    })

    describe("Is difficulty 2 return 6 or 7 letters word", function () {
        it("test if difficulty 2 return 6 or 7 letters word", function () {
            expect(game.getRandomWord(MEDIUM)).to.have.lengthOf.greaterThan(5).and.lengthOf.lessThanOrEqual(7)
        })
    })

    describe("Is difficulty 3 return more than 7 letters word", function () {
        it("test if difficulty 3 return more than 7 letters word", function () {
            expect(game.getRandomWord(HARD)).to.have.lengthOf.greaterThan(7);
        })
    })


});