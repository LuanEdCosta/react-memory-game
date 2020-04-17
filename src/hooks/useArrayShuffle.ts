type ShuffleFuncion<T> = (array: T[]) => T[]

export default <T>(): ShuffleFuncion<T> => {
  const onShuffleArray = (array: T[]): T[] => {
    let currentIndex: number = array.length
    let temporaryValue: T
    let randomIndex: number

    // While there remain elements to shuffle
    while (0 !== currentIndex) {
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }

  return onShuffleArray
}
