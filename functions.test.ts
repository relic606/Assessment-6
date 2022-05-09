const {shuffleArray} = require('./utils')

let arr = [1,2,3,4]

console.log(typeof arr)
console.log(typeof shuffleArray(arr))

console.log(arr.length)
console.log(shuffleArray(arr).length)

describe('shuffleArray should', () => {
    it('should return an object', () => {
        expect(typeof shuffleArray(arr)).toBe(typeof arr)
    })
    it('should be same length as original object', () => {
        expect(shuffleArray(arr).length).toBe(arr.length)
    })
})
