export function generatePopulationNumberFormat(populationNumber: number) {
  const sufixos = ['', 'K', 'M', 'B', 'T']

  for (let i = 0; i < sufixos.length; i++) {
    populationNumber /= 1000.0
    if (populationNumber < 1000) {
      return `${populationNumber.toFixed(1)}${sufixos[i]}`
    }
  }

  return `${populationNumber.toFixed(1)}${sufixos[sufixos.length - 1]}`
}
