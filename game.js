const WORD_LIST = ["test", "rip", "gg", "no", "re", "tester", "ripper", "ggnore", "jesuisletest", "ripinpeacekappa"]
const EASY = 1
const MEDIUM = 2
const HARD = 3
class Game {

    constructor() {
        this.easyWordList = this.filterWordByLength(0, 5);
        this.mediumWordList = this.filterWordByLength(6, 7);
        this.hardWordList = this.filterWordByLength(8, 15555);
    }

    getRandomWord(difficulty) {
        return this.findWord(difficulty);
    }

    findWord(diff) {
        switch (diff) {
            case EASY : {
                const chosenIndex = this._getRandomIndex(this.easyWordList);
                return this.easyWordList[chosenIndex];
            }
            case MEDIUM : {
                const chosenIndex = this._getRandomIndex(this.mediumWordList);
                return this.mediumWordList[chosenIndex];
            }
            case HARD : {
                const chosenIndex = this._getRandomIndex(this.hardWordList);
                return this.hardWordList[chosenIndex];
            }
        }
    }

    /**
     * Get a ....
     * @param min non inclus
     * @param max inclus
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

    _getRandomIndex(array) {
        return  Math.floor(Math.random() * array.length)
    }
}

// console.log(this.getRandomWord())

module.exports = {Game: Game, WORD_LIST: WORD_LIST, EASY: EASY, MEDIUM: MEDIUM, HARD: HARD}