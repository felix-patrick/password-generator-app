

const allChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const symbols = "!#$%&\()*+,-./:;<=>?@[\\]^_{|}"
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const digits = "0123456789"
const messageEl = document.querySelector("#message")
let password

// const allChars = lowerCase + symbols + upperCase + digits
const length = 12

let passwordEl_1 = document.querySelector("#display-password-1")

let generatePasswordBtnEl = document.querySelector(".generate-password")

generatePasswordBtnEl.addEventListener('click', function generateassword() {
    password = ""
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += symbols[Math.floor(Math.random() * symbols.length)]
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += digits[Math.floor(Math.random() * digits.length)]

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]    }

    console.log (password)

    passwordEl_1.textContent = password

    // messageEl.textContent = "Password selected successfully"    
})

passwordEl_1.addEventListener('click', function () {
    // passwordEl_1.select();
    if(password === undefined ) {
        messageEl.textContent = "Kindly, click on generate a password"
    }

    else {

        navigator.clipboard.writeText(passwordEl_1.textContent)

        messageEl.textContent = "Password copied successfully"

                // window.location.reload()


    }
   
    // if(password == "") {
    //     messageEl.textContent = "Kindly, generate a password"
    // }



    // else {

    //     messageEl.textContent = "Password copied successfully"


    // }


})

console.log(password)
