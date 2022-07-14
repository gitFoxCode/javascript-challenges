/*
 * My solution:
*/

function pharseParser(pharse){
    return {
        characters: pharse.length,
        words: pharse.split(" ").length,
        lines: (pharse.match(/\n/g) || []).length + 1
    }
}

console.log( pharseParser("Once upon a time") )

console.log( pharseParser("Happily Ever After") )

console.log( pharseParser("True courage is facing danger when you are afraid.\nThe Wizard of OZ") )

// Another solutions:
function sol1(pharse){
    let characters = phrase.split("").length
    let words = phrase.split(" ").length
    let lines = phrase.split("\n").length
    return {characters,words,lines}
}