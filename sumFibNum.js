function sumFibNum(number) {
    if (number <= 1) {
        if (number < 0) {
            return 0;
        }
        return number;
    }
    var t0 = 0;
    var t1 = 1;
    var s;
    for (let i = 2; i <= number; i++) {
        s = t0 + t1 ;
        t0 = t1;
        t1 = s;
        
    }
    return s;
    
}

module.exports = sumFibNum;
