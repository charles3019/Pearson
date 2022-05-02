const coinchange = require('./coinchange');

test('Finding Minimum number of coins', () => { 
    expect(coinchange(100)).toEqual([ '1x100p' ])
    expect(coinchange(323)).toEqual([ '3x100p', '1x20p', '1x2p', '1x1p' ])
    
 })
