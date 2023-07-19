function isArmstrongNumber(num : number): boolean{
    const numStr = num.toString();
    const numDigits = numStr.length;
    let sum = 0;

    for(const digitChar of numStr){
        const digit = parseInt(digitChar, 10);
        sum += Math.pow(digit, numDigits);
    }
    return sum === num;
}


console.log(isArmstrongNumber(9))