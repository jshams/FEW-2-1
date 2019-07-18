const fb = require('../index.js')

// this is a test test to test that our tests are ready for testing
test('Sanity check', () => {

})

test('isFizzy', () => {
    let result;
    result = fb.isFizzy(0)
    expect(result).toBe(true)
    result = fb.isFizzy(1)
    expect(result).toBe(false)
    result = fb.isFizzy(2)
    expect(result).toBe(false)
    result = fb.isFizzy(3)
    expect(result).toBe(true)
    result = fb.isFizzy(123)
    expect(result).toBe(true)
})

test('isBuzzy', () => {
    let result;
    result = fb.isBuzzy(0)
    expect(result).toBe(true)
    result = fb.isBuzzy(1)
    expect(result).toBe(false)
    result = fb.isBuzzy(2)
    expect(result).toBe(false)
    result = fb.isBuzzy(5)
    expect(result).toBe(true)
    result = fb.isBuzzy(120)
    expect(result).toBe(true)
})

test('fizzyBuzzy', () => {
    let result;
    result = fb.fizzyBuzzy(1)
    expect(result).toBe('')
    result = fb.fizzyBuzzy(3)
    expect(result).toBe('fizz')
    result = fb.fizzyBuzzy(5)
    expect(result).toBe('buzz')
    result = fb.fizzyBuzzy(15)
    expect(result).toBe('fizzbuzz')
    result = fb.fizzyBuzzy(124)
    expect(result).toBe('')
})

test('fizzBuzz', () => {
    let result;
    result = fb.fizzBuzz(2)
    expect(result).toEqual({ count: 2, fizz: 0, buzz: 0, fizzBuzz: 0 })
    result = fb.fizzBuzz(5)
    expect(result).toEqual({ count: 5, fizz: 1, buzz: 1, fizzBuzz: 0 })
    result = fb.fizzBuzz(16)
    expect(result).toEqual({ count: 16, fizz: 4, buzz: 2, fizzBuzz: 1 })
    result = fb.fizzBuzz(100)
    expect(result).toEqual({ count: 100, fizz: 27, buzz: 14, fizzBuzz: 6 })
})