function toCamelCase(str) {
    const words = str.split(/[-_]/) 
    let camelCase = words[0]
    for (let i = 1; i < words.length; i++) {
        const word = words[i][0].toUpperCase() + words[i].slice(1)
        camelCase += word
    }
    return camelCase
}

console.log(toCamelCase('the-stealth-warrior'))
console.log(toCamelCase('The_Stealth_Warrior'))
console.log(toCamelCase('The-Stealth-Warrior'))
console.log(toCamelCase('theStealthWarrior'))