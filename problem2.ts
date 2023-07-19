function atbashCipher(input : string) : string{
    const plainAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const cipherAlphabet = "zyxwvutrsqponmlkjihgfedcba";

    const inputLowerCase = input.toLocaleLowerCase();
    let result = "";

    for(const char of inputLowerCase){
        if (/[a-z]/.test(char)){
            const index = plainAlphabet.indexOf(char);
            result += cipherAlphabet[index];
        } else {
            result += char;
        }
    }

    return result;
}


console.log(atbashCipher("Olivn rkhfn wloli hrg znvg"))