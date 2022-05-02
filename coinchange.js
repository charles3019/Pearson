function coinchange(p) {
    var coins = [100, 50, 20, 10, 5, 2, 1 ]
        var coinsChange = [];
        let j = 0;

        for (let i = 0; i < coins.length; i++) {
            var q = Math.floor(p / coins[i]);
            p -= q * coins[i];
            if (q > 0) {
                coinsChange[j] = q + "x"+ coins[i] + "p";
                // console.log(coinsChange[j]);
                j =  j + 1;
            }
        }
    
        return coinsChange;
        
}

module.exports = coinchange