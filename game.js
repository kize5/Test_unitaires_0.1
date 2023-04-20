const {createReadStream} = require("fs");
const csv = require('csv-parser')
const WORD_LIST = ["test", "rip", "gg", "no", "re", "tester", "ripper", "ggnore", "jesuisletest", "ripinpeacekappa"]
const EASY = 1
const MEDIUM = 2
const HARD = 3

/////

let wordToGuess
let displayWord = []
let nbTry

const maxTry = 20


class Game {

    inputLetter;

    // Init arrays by difficulty using word length
    constructor() {
        this.easyWordList = this.filterWordByLength(0, 5);
        this.mediumWordList = this.filterWordByLength(6, 7);
        this.hardWordList = this.filterWordByLength(8, 15555);


        this.listOfWords = [];
        this.numberOfTry = 5;

        //npm install csv-parser
        createReadStream('words_fr.txt')
            .pipe(csv())
            .on('data', (row) => {
                this.listOfWords.push(row.word.toLowerCase());
            })
            .on('end', () => {
                console.log(this.listOfWords);
                console.log('CSV file successfully processed');
                this.getRandomWord(this.setDifficulty("EASY"));
            });
    }


    /**
     * Create an array of words with length between min and max value from a list of words,
     * @param min not included
     * @param max included
     * @returns {*[]}
     */
    filterWordByLength(min, max) {
        const filteredArray = []
        for (let i = 0; i < WORD_LIST.length; i++) {
            if (WORD_LIST[i].length >= min && WORD_LIST[i].length <= max) {
                filteredArray.push(WORD_LIST[i])
            }
        }
        return filteredArray;
    }

    //generate a random int from an array length
    _getRandomIndex(array) {
        return  Math.floor(Math.random() * array.length)
    }


    //return word to play with depend on difficulty selected
    getRandomWord(difficulty) {
        // if(this.difficulty !== "") {
        //     difficulty = this.difficulty
        // }
        wordToGuess = this.findWord(difficulty)
        return wordToGuess;
    }

    //Choose a word to return by random method, length of it depend on difficulty
    findWord(diff) {
        switch (diff) {
            case "EASY" : {
                console.log("Je passe dans findword case : EASY")
                const chosenIndex = this._getRandomIndex(this.easyWordList);
                return this.easyWordList[chosenIndex];
            }
            case "MEDIUM" : {
                const chosenIndex = this._getRandomIndex(this.mediumWordList);
                return this.mediumWordList[chosenIndex];
            }
            case "HARD" : {
                const chosenIndex = this._getRandomIndex(this.hardWordList);
                return this.hardWordList[chosenIndex];
            }
        }
    }

    ////////////////////////////////////////////////////////////////////

    //input à récupérer onclick later
    setDifficulty(input){
        switch (input) {
            case "1" : {
                return "EASY"
            }
            case "2" : {
                return "MEDIUM"
            }
            case "3" : {
                return "HARD"
            }
        }
    }

    //input à récupérer onclick later
    getInputValue(input){
        this.inputLetter = input
        return this.inputLetter
    }

    guess(inputLetter, wordToGuess){
        let match = false;
        nbTry++;
        console.log("Je suis le word to guess dans la method guess : "+ wordToGuess + ". Et j'ai tant de lettre" + wordToGuess.length)
        for (let i = 0; i < wordToGuess.length; i++) {
            console.log("Je suis la boucle de guess et j'ai loop : " + i + " fois")
            if (inputLetter === wordToGuess[i]){
                displayWord[i] = inputLetter
                match = true;
            } else {
                displayWord[i] = "*"
            }
        }
        console.log("Je suis le DISPLAYWORD après passage dans la method guess : " + wordToGuess)
        return match;
    }

    canStillPlay(nbTry){
        console.log("Je passe dans nb try, je compare " + nbTry + " = " + maxTry)
        if (nbTry >= maxTry){
            return false
        }
        return true
    }

    winOrLose(displayWord, wordToGuess){
        if (displayWord === wordToGuess){
            return true
        }
        return false
    }

}

module.exports = {Game: Game, WORD_LIST: WORD_LIST, EASY: EASY, MEDIUM: MEDIUM, HARD: HARD}