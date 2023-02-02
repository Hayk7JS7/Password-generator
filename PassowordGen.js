// const textPasswordGen = document.querySelector(".text-1")
const textPasswordLength = document.querySelector(".text-2")

let upperCase = document.querySelector(".uppercase")
const lowerCase = document.querySelector(".LowerCase")
const symbol = document.querySelector(".Symbols")
const number = document.querySelector(".Numbers")
const Button = document.querySelector(".generator")
let alpabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "J","a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// alpabet
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


Button.addEventListener("click", function(){
        let p = document.querySelector("p")
        let generalPassword = generator(alpabet, textPasswordLength.value)
        p.innerHTML = generalPassword

        if(upperCase.addEventListener("click", function(){
            let upperCaseType = generator(alpabet, textPasswordLength.value).toUpperCase()
            p.innerHTML = upperCaseType
        })){}
})


console.log(Button)