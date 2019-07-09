//// CAPITALIZE ////
String.prototype.firstCharToUpper = function() {
    if (this.length == 0) return ''
    return this.charAt(0).toUpperCase() + this.slice(1)
}

//// ALL CAPS ////
String.prototype.allCaps = function() {
    return this.toUpperCase()
}

//// CAPITALIZE WORDS ////
String.prototype.allfirstCharsToUpper = function() {
    return this.split(' ').map(word => word.firstCharToUpper().join(' '))
}

//// ODD CAPS ////
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

//// REMOVE EXTRA SPACES ////
String.prototype.removeWhiteSpace =  function() {
    let space = true
    let removedSpaces = ''
    let i = 1
    for (letter of this) {
        if ((letter != ' ') || (! space)) {
            removedSpaces += letter
            space = ((letter == ' ') ? true : false)
        }
    }
    if (removedSpaces[removedSpaces.length - 1] == ' ') removedSpaces = removedSpaces.slice(0, -1)
    return removedSpaces
}

//// KABOB CASE ////
String.prototype.kabobCase = function() {
    return this.split(' ').join('-')
}

//// SNAKE CASE ////
String.prototype.snakeCase = function() {
    return this.split(' ').join('_')
}

/// CAMEL CASE ////
String.prototype.camelCase = function() {
    let camelStr = ''
    for (word of this.split(' ')) {
        camelStr += word.firstCharToUpper()
    }
    return camelStr
}