const {Game, WORD_LIST, EASY, MEDIUM, HARD} = require("../game");
const chai = require("chai");

const expect = chai.expect;


let game = new Game()

describe("Game engine test", function () {


    describe("Test easy difficulty || getRandomWord()", function () {
        it("Word should have a length between 0 to 5", function () {
            expect(game.getRandomWord("EASY")).to.have.lengthOf.lessThanOrEqual(5)
        })
    })

    describe("Test medium difficulty || getRandomWord()", function () {
        it("Word should have a length of 6 or 7 letters", function () {
            console.log(game.getRandomWord(MEDIUM))
            expect(game.getRandomWord("MEDIUM")).to.have.lengthOf.greaterThan(5).and.lengthOf.lessThanOrEqual(7)
        })
    })

    describe("Test hard difficulty || getRandomWord()", function () {
        it("Word should have a length of more than 7 letters word", function () {
            expect(game.getRandomWord("HARD")).to.have.lengthOf.greaterThan(7);
        })
    })

    describe("Test if try number can't go higher than maximum try || canStillPlay()", function (){
        it("try number can't go higher than 20", function (){
            expect(game.canStillPlay(21)).is.false
        })
    })

    describe("Test win or lose || winOrLose()", function (){
        it("if user input equal word to guess", function (){
            expect(game.winOrLose("test", "test")).is.true
        })
    })

    describe("Test win or lose || winOrLose()", function (){
        it("if user input if not equal word to guess", function (){
            expect(game.winOrLose("tester", "test")).is.false
        })
    })

    describe("Test difficulty set by player|| setDifficulty()", function (){
        it("If number is 1, difficulty should be EASY", function (){
            expect(game.setDifficulty("1")).is.string("EASY")
        })
    })

    describe("Test difficulty set by player|| setDifficulty()", function (){
        it("If number is 2, difficulty should be MEDIUM", function (){
            expect(game.setDifficulty("2")).is.string("MEDIUM")
        })
    })

    describe("Test difficulty set by player|| setDifficulty()", function (){
        it("If number is 3, difficulty should be HARD", function (){
            expect(game.setDifficulty("3")).is.string("HARD")
        })
    })

    describe("Test user input length || getInputValue()", function (){
        it("User input can only be one letter", function () {
            expect(game.getInputValue("i")).have.a.lengthOf(1)
        })
    })

    describe("Test user input type || getInputValue()", function (){
        it("User input can only be a string", function () {
            expect(game.getInputValue("i")).to.be.a('string')
        })
    })


    // describe("Test guess return the right number of letter || guess()", function (){
    //     it("Word return to user have the same length than word to guess", function () {
    //         expect(game.guess("i", "tester")).to.have.lengthOf(6)
    //     })
    // })


    //Pas sûr du tout du test
    describe("Test if user guess right || guess()", function (){
        it("User guess right, the letter exist in our word", function () {
            expect(game.guess("i", "issou")).is.true
        })
    })

    //Pas sûr du tout du test
    describe("Test if user guess wrong || guess()", function (){
        it("User guess wrong, the letter doesn't exist in our word", function () {
            expect(game.guess("Ø", "tester")).is.false
        })
    })

});