// declaring variables
const textPasswordLength = document.querySelector(".text-2")
let upperCase = document.querySelector(".uppercase")
const lowerCase = document.querySelector(".LowerCase")
const symbol = document.querySelector(".Symbols")
const number = document.querySelector(".Numbers")
let h3 = document.querySelector("h3")
let p = document.querySelector("p")

// creating generator
function generator(arr, length = 150){
    let str = "";    
    if(length <= 0){
        alert("Error")
    }
    for(let i = 0; i < length; i++){
       let filt = arr[Math.floor((Math.random() * arr.length))]
       str += filt
    }
    return str
}

// arrays for generating password
let alpabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i",  "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let upperCaseAlpabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "J",]
let lowerCaseAlpabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let sym = [",", ";", "'", "$", "%", "&", "*", "=", ".", "+", "_", "-", "?"]
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]


// changes with arrays
let symAlpabet = sym.concat(alpabet)
let upperCaseAlpSymbol = upperCaseAlpabet.concat(sym)
let numAlpabet = num.concat(alpabet)
let numUpperCase = upperCaseAlpabet.concat(num)
let mixEvery = symAlpabet.concat(num)
let lowerSymbol = lowerCaseAlpabet.concat(sym)
let lowerCaseNum = lowerCaseAlpabet.concat(num)
let symNumber = sym.concat(num)
let numSymUp = numUpperCase.concat(sym)
let lowerCaseSymNum = lowerSymbol.concat(num)
// logic for selecting checkbox and changes
textPasswordLength.addEventListener("change", (e) =>{
    // upperCase logic
    // A = upperCase                  B = lowerCase                 C = symbol            d = number 
    upperCase.addEventListener("click", () => {
        // A
        if(upperCase.checked && !lowerCase.checked && !symbol.checked && !number.checked){

            let upperCaseType = generator(alpabet, e.target.value).toUpperCase()
        p.innerHTML = upperCaseType
         }
        //  AB
         else if(upperCase.checked && lowerCase.checked && !symbol.checked && !number.checked){
            let upperLowerCases = generator(alpabet, e.target.value)
            p.innerHTML = upperLowerCases
         }
        //  AC
        else if(upperCase.checked && symbol.checked && !lowerCase.checked && !number.checked){
            let symUpper = generator(upperCaseAlpSymbol, e.target.value)
            p.innerHTML = symUpper
        }
        // AD
        else if(upperCase.checked && number.checked && !lowerCase.checked && !symbol.checked){
            let upperNum = generator(numUpperCase, e.target.value)
            p.innerHTML = upperNum
        }
        // ACB === ABC
         else if(upperCase.checked && lowerCase.checked && symbol.checked && !number.checked){
            let symUpperLowerCase = generator(symAlpabet, e.target.value)
            p.innerHTML = symUpperLowerCase
         }
        // ADB === ABD
        else if(upperCase.checked && lowerCase.checked && !symbol.checked && number.checked){
            let numUpperLowerCase = generator(numAlpabet, e.target.value)
            p.innerHTML = numUpperLowerCase
        }
        // ACD
        else if(upperCase.checked && !lowerCase.checked && symbol.checked && number.checked){
            let numSymUpper = generator(numSymUp, e.target.value)
            p.innerHTML = numSymUpper
        }
        // ABCD
         else if(symbol.checked && upperCase.checked && lowerCase.checked && number.checked){
            let everything = generator(mixEvery, e.target.value)
            p.innerHTML = everything
        }
    })
    
    // lowerCase logic
    // A = upperCase                  B = lowerCase                 C = symbol            d = number 
    lowerCase.addEventListener("click", () => {
        // B
        if(lowerCase.checked && !upperCase.checked && !symbol.checked && !number.checked){
        let lowerCaseType = generator(alpabet, e.target.value).toLowerCase()
        p.innerHTML = lowerCaseType
        }
        // BA
        else if(lowerCase.checked && upperCase.checked && !symbol.checked && !number.checked){
            let upperLowerCases = generator(alpabet, e.target.value)
            p.innerHTML = upperLowerCases
        }
        // BC
        else if(lowerCase.checked && symbol.checked && !number.checked && !upperCase.checked){
            let symLower = generator(lowerSymbol, e.target.value)
            p.innerHTML = symLower
        }
        // BD
        else if(lowerCase.checked && number.checked && !upperCase.checked && symbol.checked){
            let lowerNum = generator(lowerCaseNum, e.target.value)
            p.innerHTML = lowerNum
        }
        // BAC
        else if(lowerCase.checked && upperCase.checked && symbol.checked && !number.checked){
            let symUpperLowerCase = generator(symAlpabet, e.target.value)
            p.innerHTML = symUpperLowerCase
        }
        // BAD === BDA
        else if(lowerCase.checked && upperCase.checked && !symbol.checked && number.checked){
            let numUpperLowerCase = generator(numAlpabet, e.target.value)
            p.innerHTML = numUpperLowerCase
        }
        // BDC === BCD
        else if(lowerCase.checked && !upperCase.checked && symbol.checked && number.checked){
            let lowerSymNum = generator(lowerCaseSymNum, e.target.value)
            p.innerHTML = lowerSymNum
        }
        // BACD
        else if(symbol.checked && upperCase.checked && lowerCase.checked && number.checked){
            let everything = generator(mixEvery, e.target.value)
            p.innerHTML = everything
        }
    })
    // symbol logic
    // A = upperCase                  B = lowerCase                 C = symbol            d = number 
    symbol.addEventListener("click", () => {
        // C
        if(symbol.checked && !upperCase.checked && !lowerCase.checked && !number.checked){
        let SymbolCaseType = generator(sym, e.target.value)
        p.innerHTML = SymbolCaseType
        }
        // CA
        else if(symbol.checked && upperCase.checked && !lowerCase.checked && !number.checked){
            let upperCaseAlp = generator(upperCaseAlpSymbol, e.target.value)
            p.innerHTML = upperCaseAlp
        }
        // CD
        else if(symbol.checked && !upperCase.checked && !lowerCase.checked && number.checked){
            let symNumber = generator(symNumber, e.target.value)
            p.innerHTML = symNumber
        }
        // CB
        else if(symbol.checked && !upperCase.checked && lowerCase.checked && !number.checked){
            let symLowerCases = generator(lowerSymbol, e.target.value)
            p.innerHTML = symLowerCases
        }
        // CAB === CBA
        else if(symbol.checked && upperCase.checked && lowerCase.checked && !number.checked){
            let symUpperLower = generator(symAlpabet, e.target.value)
            p.innerHTML = symUpperLower
        }
        // CAD === CDA
        else if(symbol.checked && upperCase.checked && !lowerCase.checked && number.checked){
            let symUpperNum = generator(numSymUp, e.target.value)
            p.innerHTML = symUpperNum
        }
        // CDB === CBD
        else if(symbol.checked && !upperCase.checked && lowerCase.checked && number.checked){
            let symNumLower = generator(lowerCaseSymNum, e.target.value)
            p.innerHTML = symNumLower
        }
        // CABD
        else if(symbol.checked && upperCase.checked && lowerCase.checked && number.checked){
            let everything = generator(mixEvery, e.target.value)
            p.innerHTML = everything
        }
    })
    // numberlogic
    // A = upperCase                  B = lowerCase                 C = symbol            d = number 
    number.addEventListener("click", () => {
        // D
        if(number.checked && !upperCase.checked && !lowerCase.checked && !symbol.checked){
        let NumberCaseType = generator(num, e.target.value)
        p.innerHTML = NumberCaseType
        }
        // DA
        else if(number.checked && upperCase.checked && !lowerCase.checked && !symbol.checked){
            let upperNum = generator(numUpperCase, e.target.value)
            p.innerHTML = upperNum
        }
        // DB
        else if(number.checked && !upperCase.checked && lowerCase.checked && !symbol.checked){
            let lowerNum = generator(lowerCaseNum, e.target.value)
            p.innerHTML = lowerNum
        }
        // DC
        else if(number.checked && !upperCase.checked && !lowerCase.checked && symbol.checked){
            let SymNum = generator(symNumber, e.target.value)
            p.innerHTML = SymNum
        }
        // DAC === DCA
        else if(number.checked && upperCase.checked && !lowerCase.checked && symbol.checked){
            let numUpperSym = generator(numSymUp, e.target.value)
            p.innerHTML = numUpperSym
        }
        // DAB === DBA
        else if(number.checked && upperCase.checked && lowerCase.checked && !symbol.checked){
            let alpNum = generator(numAlpabet, e.target.value)
            p.innerHTML = alpNum
        }
        // DBC === DCB
        else if(number.checked && !upperCase.checked && lowerCase.checked && symbol.checked){
            let numLowerSym = generator(lowerCaseSymNum, e.target.value)
            p.innerHTML = numLowerSym
        }
        // DABC
        else if(number.checked && upperCase.checked && lowerCase.checked && symbol.checked){
            let everything = generator(mixEvery, e.target.value)
            p.innerHTML = everything
        }
    })
})












// ex print abcd letters all ordered
function order(letters){
    let arr = letters.split("")
    let str = ""
   for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
        str += arr[i]
   }
   return str
}
console.log(order("abcd"))





















const start = document.querySelector(".rangeStart")
const finish = document.querySelector(".finished")
const button = document.querySelector("button")


function findRange(arr, start, finish){
    let range = ""
   let startFind = arr.indexOf(start)
   let finishFind = arr.indexOf(finish)
   for(let i = startFind; i <= finishFind; i++){
    range += arr[i]
   }
   return range
}
let h3Class = document.querySelector(".h1")
let lengthPass = document.querySelector(".text-9")
button.addEventListener("click", function(){
    let generalRange = findRange(alpabet, start.value, finish.value).split("")
    let rangePassword = generator(generalRange, lengthPass.value)
    h3Class.innerHTML = rangePassword
})
// Button.addEventListener("click", function(){
//         let p = document.querySelector("p")
//         let generalPassword = generator(alpabet, textPasswordLength.value)
//         p.innerHTML = generalPassword

//         if(upperCase.addEventListener("click", function(){
//             let upperCaseType = generator(alpabet, textPasswordLength.value).toUpperCase()
//             p.innerHTML = upperCaseType
//         })){}
// })
