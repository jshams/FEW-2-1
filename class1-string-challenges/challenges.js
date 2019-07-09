const isLetter = (str) => {
    return str.length === 1 && str.match(/[a-z]/i);
}

const firstCharToUpper = (str) => {
    if (str.length == 0) return
    return str[0].toUpperCase() + str.slice(1)
}

const allfirstCharsToUpper = (str) => {
    return str.split(' ').map(word => firstCharToUpper(word)).join(' ')
}

const upperEveryOtherLetter = (str) => {
    let new_str = ''
    let skip = false
    for (letter of str) {
        if (isLetter(letter)) {
            if (skip) skip = false
            else {
                letter = letter.toUpperCase()
                skip = true
            }
        }
        new_str += letter
    }
    return new_str
}

//// PROTOTYPING ////
String.prototype.firstCharToUpper = function() {
    if (this.length == 0) return ''
    return this.charAt(0).toUpperCase() + this.slice(1)
}


String.prototype.allfirstCharsToUpper = function() {
    return this.split(' ').map(word => word.firstCharToUpper().join(' '))
}

String.prototype.upperEveryOtherLetter =  function() {
    let new_str = ''
    let skip = false
    for (letter of this) {
        if (isLetter(letter)) {
            if (skip) skip = false
            else {
                letter = letter.toUpperCase()
                skip = true
            }
        }
        new_str += letter
    }
    return new_str
}

