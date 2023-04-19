const WORD_LIST = ["test", "rip", "gg", "no", "re", "tester", "ripper", "ggnore", "jesuisletest", "ripinpeacekappa"]
const EASY = 1
const MEDIUM = 2
const HARD = 3
class Game {

    getRandomWord(difficulty) {
        return this.findWord(difficulty);
    }

    findWord(diff) {
        const newarray = []
        switch (diff) {
            case EASY : {
                for (let i = 0; i < WORD_LIST.length; i++) {
                    if (WORD_LIST[i].length <= 5) {
                        newarray.push(WORD_LIST[i])
                    }
                }
                return newarray[this.random(newarray)]
            }
            case MEDIUM : {
                for (let i = 0; i < WORD_LIST.length; i++) {
                    if (WORD_LIST[i].length > 5 && WORD_LIST[i].length <= 7) {
                        newarray.push(WORD_LIST[i])
                    }
                }
                return newarray[this.random(newarray)]
            }
            case HARD : {
                for (let i = 0; i < WORD_LIST.length; i++) {
                    if (WORD_LIST[i].length > 7) {
                        newarray.push(WORD_LIST[i])
                    }
                }
                return newarray[this.random(newarray)]
            }
        }
    }

    random(array) {
        return  Math.floor(Math.random() * array.length)
    }
}

// console.log(this.getRandomWord())

module.exports = {Game: Game, WORD_LIST: WORD_LIST, EASY: EASY, MEDIUM: MEDIUM, HARD: HARD}