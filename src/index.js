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
	var a = expr.match(/.{1,10}/g);
	var c = [];
	str = "";
	for (var i = 0; i <a.length; i++) {
		var b = a[i].match(/.{1,10}/g);
		b = b.toString().split("00").join("").match(/.{1,2}/g); 
		for (var j = 0; j <b.length; j++) {
			if (b[j] == 10) {
				b[j] = "."
			}
			if (b[j] == 11) {
				b[j] = "-"
			} 
		}
		 c.push(b.join(""));
		
	}
	 for (var k = 0; k <c.length; k++) {
		 	c[k] = MORSE_TABLE[c[k]];
		 	if (!c[k]) {c[k] = " ";}
		 	str = str + c[k];

		 	
		 }
			console.log(str);
			return str;
}

module.exports = {
    decode
}

