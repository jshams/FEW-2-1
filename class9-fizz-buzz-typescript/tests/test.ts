// const fb = require('../index.js')
import { isFizzy, isBuzzy, fizzyBuzzy, fizzBuzz, FizzBuzzResult } from '../index'

// this is a test test to test that our tests are ready for testing
test('Sanity check', () => {

})

test('isFizzy', () => {
    let result: boolean;
    result = isFizzy(0)
    expect(result).toBe(true)
    result = isFizzy(1)
    expect(result).toBe(false)
    result = isFizzy(2)
    expect(result).toBe(false)
    result = isFizzy(3)
    expect(result).toBe(true)
    result = isFizzy(123)
    expect(result).toBe(true)
})

test('isBuzzy', () => {
    let result: boolean;
    result = isBuzzy(0)
    expect(result).toBe(true)
    result = isBuzzy(1)
    expect(result).toBe(false)
    result = isBuzzy(2)
    expect(result).toBe(false)
    result = isBuzzy(5)
    expect(result).toBe(true)
    result = isBuzzy(120)
    expect(result).toBe(true)
})

test('fizzyBuzzy', () => {
    let result: string;
    result = fizzyBuzzy(1)
    expect(result).toBe('')
    result = fizzyBuzzy(3)
    expect(result).toBe('fizz')
    result = fizzyBuzzy(5)
    expect(result).toBe('buzz')
    result = fizzyBuzzy(15)
    expect(result).toBe('fizzbuzz')
    result = fizzyBuzzy(124)
    expect(result).toBe('')
})

test('fizzBuzz', () => {
    let result: FizzBuzzResult;
    result = fizzBuzz(2)
    expect(result).toEqual({ count: 2, fizz: 0, buzz: 0, fizzBuzz: 0 })
    result = fizzBuzz(5)
    expect(result).toEqual({ count: 5, fizz: 1, buzz: 1, fizzBuzz: 0 })
    result = fizzBuzz(16)
    expect(result).toEqual({ count: 16, fizz: 4, buzz: 2, fizzBuzz: 1 })
    result = fizzBuzz(100)
    expect(result).toEqual({ count: 100, fizz: 27, buzz: 14, fizzBuzz: 6 })
})