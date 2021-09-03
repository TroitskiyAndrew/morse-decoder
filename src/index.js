const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let binLetters = [];
    let morseLetters = [];
    for (let i = 0; i < expr.length; i += 10){
        binLetters.push(expr.substring(i, i+10))
    }
    for (let letterbin of binLetters) {
        let letterMorse = ""
        for (i = 0; i < 10; i += 2){
            let bin =  letterbin.substr(i, 2);
            if (bin === "**") {
                letterMorse += " ";
                break;
            } else if (bin === "00"){
                continue
            } else if (bin === "10"){
                letterMorse += ".";
            }else if (bin === "11"){
                letterMorse += "-";
            }
        }
        morseLetters.push(letterMorse);
    }
    return morseLetters.map((mors) => {
        return mors === " " ? mors : MORSE_TABLE[mors]
    }).join("");
}

module.exports = {
    decode
}