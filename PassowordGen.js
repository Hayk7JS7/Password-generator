// const textPasswordGen = document.querySelector(".text-1")
const textPasswordLength = document.querySelector(".text-2")

let upperCase = document.querySelector(".uppercase")
const lowerCase = document.querySelector(".LowerCase")
const symbol = document.querySelector(".Symbols")
const number = document.querySelector(".Numbers")
let h3 = document.querySelector("h3")

let alpabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "J","a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// alpabet
let sym = [",", ";", "'", "$", "%", "&", "*", "=", ".", "+", "_", "-", "?"]
let symAlpabet = sym.concat(alpabet)
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let numAlpabet = num.concat(alpabet)
function generator(arr, length = 50){
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
let p = document.querySelector("p")

// Button.addEventListener("click", function(){
//         let p = document.querySelector("p")
//         let generalPassword = generator(alpabet, textPasswordLength.value)
//         p.innerHTML = generalPassword

//         if(upperCase.addEventListener("click", function(){
//             let upperCaseType = generator(alpabet, textPasswordLength.value).toUpperCase()
//             p.innerHTML = upperCaseType
//         })){}
// })

textPasswordLength.addEventListener("change", (e) =>{
    upperCase.addEventListener("click", () => {
        if(upperCase.checked && lowerCase.checked){
            alert("you cannot access lowercase and uppercase")
         }
        if(upperCase){}
        if(upperCase.checked){
        let upperCaseType = generator(alpabet, e.target.value).toUpperCase()
        p.innerHTML = upperCaseType
        }
        
    })
    lowerCase.addEventListener("click", () => {
        if(lowerCase.checked){
        let lowerCaseType = generator(alpabet, e.target.value).toLowerCase()
        p.innerHTML = lowerCaseType
        }
        if(upperCase.checked && lowerCase.checked){
            alert("you cannot access lowercase and uppercase")
         }
    })
    symbol.addEventListener("click", () => {
        if(symbol.checked){
        let SymbolCaseType = generator(symAlpabet, e.target.value)
        p.innerHTML = SymbolCaseType
        }
    })
    number.addEventListener("click", () => {
        if(number.checked){
        let NumberCaseType = generator(numAlpabet, e.target.value)
        p.innerHTML = NumberCaseType
        }
    })
})


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
