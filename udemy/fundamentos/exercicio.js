function toCamelCase(str){
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index){
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }) .replace(/\s+/g, '');
}
console.log(toCamelCase("the-stealth-warrior"))
console.log(toCamelCase("The_Stealth_Warrior"))
console.log(toCamelCase("The_Stealth-Warrior"))