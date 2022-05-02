function palindromeChecker(string){
    const arrayForm = string.split('');
    const reverseArray = arrayForm.reverse();
    const reverseString = reverseArray.join('');

    if (string === reverseString) {
        return true;
    }
    else{
        return false;
    }
}

module.exports = palindromeChecker