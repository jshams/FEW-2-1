const Currency = require('../index.js')

test('Sanity check', () => {

})

test('add', () => {
    let result
    let n = new Currency(1)
    result = n.add(1)
    expect(result).toBe(2)
    expect(n.n).toBe(2)
})

test('subtract', () => {
    let result
    let n = new Currency(10)
    result = n.subtract(5)
    expect(result).toBe(5)
    expect(n.n).toBe(5)
})

test('multiply', () => {
    let result
    let n = new Currency(10)
    result = n.multiply(5)
    expect(result).toBe(50)
    expect(n.n).toBe(50)
})

test('divide', () => {
    let result
    let n = new Currency(10)
    result = n.divide(5)
    expect(result).toBe(2)
    expect(n.n).toBe(2)
    n = new Currency(10)
    result = n.divide(3)
    expect(result).toBe(3.33)
    expect(n.n).toBe(3.33)
})

test('split', () => {
    let result;
    let n = new Currency(12)
    result = n.split(3)
    expect(result).toEqual([4, 4, 4])
    n = new Currency(7)
    result = n.split(3)
    expect(result).toEqual([2.34, 2.33, 2.33])
    n = new Currency(15.02)
    result = n.split(12)
    expect(result).toEqual([1.26, 1.26, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25])
})
