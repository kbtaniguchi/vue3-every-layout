export function * range (start: number, end: number): Generator<number> {
  for (let i = start; i <= end; i++) {
    yield i
  }
}

export const getEasyUID = (): string => {
  return new Date().getTime().toString(16) +
        Math.floor(1000 * Math.random()).toString(16)
}
