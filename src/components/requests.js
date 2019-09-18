const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const puzzleObject = await response.json()
        return puzzleObject.puzzle
    } else {
        throw new Error(`Unable to fetch data. Server responded with status code ${response.status}`)
    }
}

const getCountry =  async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all')

    if (response.status === 200) {
        const countries = await response.json()
        return countries.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error(`Unable to fetch data. Server responded with status code ${response.status}`)
    }
}

const getLocation = async () => {
    const response = await fetch('http://ipinfo.io/json?token=5c10eb1606e923')

    if (response.status === 200) {
        const location = await response.json()
        return location
    } else {
        throw new Error(`Unable to fetch data. Server responded with status code ${response.status}`)
    }
}

const getCurrentCountry = async () => {
    const countryCode = await getLocation()
    return getCountry(countryCode.country)
}

export { getPuzzle as default }