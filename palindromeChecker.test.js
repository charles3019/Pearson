const palindromeChecker = require('./palindromeChecker');

test('Check if a string is palindrome', () => { 
    expect(palindromeChecker('lol')).toBe(true)
    expect(palindromeChecker('na')).toBe(false)
    
 })
