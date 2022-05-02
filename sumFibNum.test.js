const sumFibNum = require('./sumFibNum');

test('Sum of numbers up to n', () => { 
    expect(sumFibNum(5)).toBe(5)
    expect(sumFibNum(6)).toBe(8)
    expect(sumFibNum(9)).toBe(34)
    expect(sumFibNum(-12)).toBe(0)
    
 })