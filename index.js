const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")

let plengthEl = document.getElementById("plength")
plength.textContent = "TEST"

function generatePasswords() {
    let plength = getInt(plengthEl.textContent)

    password1.textContent = ""
    password2.textContent = ""
    for(let i = 0; i < plength; i += 1) {
        password1.textContent += characters[Math.floor(Math.random() * characters.length)]
        password2.textContent += characters[Math.floor(Math.random() * characters.length)]
    }
}

function getInt(s) {
    const parsed = parseInt(s, "10")
    if(isNaN(parsed)) return 0
    return parsed
}


