const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..',

    'a':'.-',
	'b':'-...',
	'c':'-.-.',
	'd':'-..',
	'e':'.',
	'f':'..-.',
	'g':'--.',
	'h':'....',
	'i':'..',
	'j':'.---',
	'k':'-.-',
	'l':'.-..',
	'm':'--',
	'n':'-.',
	'o':'---',
	'p':'.--.',
	'q':'--.-',
	'r':'.-.',
	's':'...',
	't':'-',
	'u':'..-',
	'v':'...-',
	'w':'.--',
	'x':'-..-',
	'y':'-.--',
	'z':'--..',

     "" : " ",
    " ": "/"
}

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H",

    '-': "t",
    '--': "m",
    '---': "o",
    '--.': "g",
    '--.-': "q",
    '--..': "z",
    '-.': "n",
    '-.-': "k",
    '-.--': "y",
    '-.-.': "c",
    '-..': "d",
    '-..-': "x",
    '-...': "b",
    '.': "e",
    '.-': "a",
    '.--': "w",
    '.---': "j",
    '.--.': "p",
    '.-.': "r",
    '.-..': "l",
    '..': "i",
    '..-': "u",
    '..-.': "f",
    '...': "s",
    '...-': "v",
    '....': "h",
    " " : "",
    "/": " "
 }

//  const tradLatin= document.getElementById ('TraductionLatin');
//  const tradMorse= document.getElementById ('TraductionMorse');
//  const resultatduLatin = document.getElementById("resultatduLatin");
//  const resultatduMorse = document.getElementById("resultatduMorse");



 














function getLatinCharacterList(texte){
 let tab = [];
 let words = " "
 for(i=0;i<texte.length;i++){
    words += texte[i]+','
   
 } console.log("["+words+']')
}
//getLatinCharacterList("Hello world")


function translateLatinCharacter(texte){
let mots = latinToMorse[texte]
    console.log(mots)
}
//translateLatinCharacter("A")


function encode(texte){
    let tab = [];
    let words = "";
    let mot = "";
    for(i=0;i<texte.length;i++){
       words += texte[i]
      
    } //console.log("["+words+']')

    for(i=0;i<words.length;i++){
       
        mot += latinToMorse[words[i]]

    } console.log(mot)
}
//encode("AVION")

// function getMorseCharacterList(morse){
//     let morsewords = ""
//     for(i=0;i<morse.length;i++){
//         morsewords += morse[i]+','
   
//   } console.log("["+morsewords+']')
       

// }

function getMorseCharacterList(morse){
console.log(morse.split(" "))
}
//getMorseCharacterList('.-- .- .--')

function translateMorseCharacter(morse){
    let charactermorse = morseToLatin[morse]
    console.log(charactermorse)
}
//translateMorseCharacter(".--.")   // .--. = P

function decode(morse){
    let wordsmorse = "";
    let motmorse = "";
    wordsmorse = morse.split(" ");
    for(i=0;i<wordsmorse.length;i++){
       
        motmorse += morseToLatin[wordsmorse[i]]

    } console.log(motmorse)
}
encode("Hello world")
decode(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")
// On obtient : hello world

decode("... --- ...")
