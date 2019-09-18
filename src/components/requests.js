const getPuzzle = async (wordCount) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const puzzleObject = await response.json()
        return puzzleObject.puzzle
    } else {
        throw new Error(`Unable to fetch data. Server responded with status code ${response.status}`)
    }
}

export { getPuzzle as default }