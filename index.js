const prompt = require('prompt-sync')();

const express = require('express')
const {Game} = require("./game");
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



let game = new Game();

function play() {
    // console.log(game.listOfWords)
    let nbTry = 0;
    let input =  prompt("EASY : press 1, MEDIUM : Press 2, HARD : press 3 : ")
    let wordToGuess = game.getRandomWord(game.setDifficulty(input))
    // console.log("Je suis le wordToGuess : " + wordToGuess)
    while (game.canStillPlay(nbTry) && game.winOrLose()) {
        nbTry++
        let inputLetter = prompt("Entre une lettre : ")
        game.guess(game.getInputValue(inputLetter), wordToGuess)
    }
    if(game.winOrLose()){
        console.log("ggwp")
    } else {
        console.log("RIP")
    }
}

play()