function romanNumberConverter(integerNum) {
    var romans = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
      };
      var romanNumber = '';
    
      for (var i of Object.keys(romans)) {
        var q = Math.floor(integerNum / romans[i]);
        // var q = Math.floor(39/10);
        // integerNum = integerNum - q * romans[i];
        integerNum -= q * romans[i];
        romanNumber += i.repeat(q);
      }
    
      return romanNumber;
    
}

module.exports = romanNumberConverter