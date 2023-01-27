// roman numerals kata  
// http://codingdojo.org/cgi-bin/wiki.pl?KataRomanNumerals
const romanNumerals = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
}
const romanNumeralsKeys = Object.keys(romanNumerals).reverse()
function convertToRoman(num) {
    let roman = ''
    let remainder = num
    for (let i = 0; i < romanNumeralsKeys.length; i++) {
        const key = romanNumeralsKeys[i]
        const value = romanNumerals[key]
        // console.log(key, value)
        while (remainder >= key) {
            roman += value
            remainder -= key 
        }
    }
    return roman
}
console.log(convertToRoman(36))
console.log(convertToRoman(2))
console.log(convertToRoman(21))
console.log(convertToRoman('36'))
