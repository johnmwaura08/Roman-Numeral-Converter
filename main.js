/* 
Convert the given number to a roman numeral in uppercases
*/

// THE Converted object below creates all the possible values for the roman numbers in descednfing order
const converted = {

    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C : 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,

}

function convertToRoman(num) {

    let final = '';

    // we're going over all of the properties of our converted object
    //lets take 99, the loop will go over the properties of the  object untill 90, 
    //it will add XC to the final string and subtract 90.
    // it will go over again untill it reaches 9 , it will add IX to the final string and subtract 9 which it'll be done by then .

    //Another example is 72, the loop will go over the properties of the object till 50,
    // it will add L to the final string and subtract 50 so it will be left with 22,
    //it will go again till it reaches 10 , it will add X to the final string and subtract 10 so its now left with 12
    //same thing again and it'll be left with 2
    //it will go over again till its reached 1, it'll add I to the final string , it repeats till its upto 0
    // our key is roman

    for (let roman in converted ) {
        while(num >= converted[roman]) {
            num -= converted[roman];
            final +=roman;
        }

    }

    

    return final
}

console.log(convertToRoman(99)); //returns XCIX
console.log(convertToRoman(999)); //returns CMXCIX
console.log(convertToRoman(29)); //returns XXIX
console.log(convertToRoman(16)); //returns XVI
console.log(convertToRoman(72)); //returns LXXII








