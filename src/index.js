import Hangman from './components/hangman.js'
import  getPuzzle from "./components/requests.js";

const hangmanApp = document.querySelector('#app')
const guessCounter = document.querySelector('#remaining-guess')
let word

window.addEventListener('keypress', (event) => {
    const guess = String.fromCharCode(event.charCode)
    word.makeGuess(guess)
    render()
})

const render = () => {
    hangmanApp.innerHTML = ''
    guessCounter.textContent = word.statusMessage

    word.puzzle.split('').forEach((element) => {
        const span = document.createElement('span')
        span.textContent = element

        hangmanApp.appendChild(span)
    });
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    word = new Hangman(puzzle)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()
