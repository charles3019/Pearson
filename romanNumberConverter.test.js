const romanNumberConverter = require('./romanNumberConverter');

test('Convert numbers to Roman Numbers', () => { 
    expect(romanNumberConverter(39)).toBe('XXXIX')
    expect(romanNumberConverter(246)).toBe('CCXLVI')
    expect(romanNumberConverter(789)).toBe('DCCLXXXIX')
    expect(romanNumberConverter(2421)).toBe('MMCDXXI')
    
 })