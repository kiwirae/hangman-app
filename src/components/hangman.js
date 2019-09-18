class Hangman {

    constructor(word) {
        this.word = word.toLowerCase().split('')
        this.remainingGuess = 7
        this.guessedLetters = []
        this.status = 'playing'
    }

    get puzzle() {

        const puzzleGenerator = this.word.map((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                return letter
            } else {
                return '*'
            }
        })
        return puzzleGenerator.join('')
    }

    makeGuess(letterGuess) {
        letterGuess = letterGuess.toLowerCase()
        const uniqueGuess = !this.guessedLetters.includes(letterGuess)
        const correctGuess = this.word.includes(letterGuess)
    
        if (this.remainingGuess === 0) {
            return
        }
    
        if (!correctGuess && uniqueGuess) {
            this.remainingGuess --
            this.guessedLetters = [...this.guessedLetters, letterGuess]
        } else if (correctGuess && uniqueGuess) {
            this.guessedLetters = [...this.guessedLetters, letterGuess]
        }
        this.setStatus()
    }

    setStatus() {
        const guessNotZero = this.remainingGuess > 0
        const puzzleStatus = this.puzzle === this.word.join('')
    
        if (guessNotZero && !puzzleStatus) {
            this.status = 'playing'
        } else if (guessNotZero && puzzleStatus) {
            this.status = 'win'
        } else if (!guessNotZero) {
            this.status = 'lose'
        }
    }

    get statusMessage() {
        const status = this.status
    
        if (status === 'win') {
            return 'Congratulations! You got the word!'
        } else if (status === 'lose') {
            return `You lose! The word was ${this.word.join('')}`
        } else if (status === 'playing') {
            return `You have ${this.remainingGuess} remaining guesses left.`
        }
    }
}

export { Hangman as default }