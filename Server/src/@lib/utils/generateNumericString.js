const generateSingleDigitNumber = () => Math.floor(Math.random() * 10)

export default length => {

  return Array.from({
    length
  }).reduce((acc, _) => {

    const digit = generateSingleDigitNumber()

    // this is the real return
    return acc += digit
  }, '')

}