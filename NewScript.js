
let password = document.getElementById("password")
let errorMessage = document.createElement("div");
let passwordContainer = document.getElementsByClassName("passwordContainer")
let confirmPassword = document.getElementById("passwordConfirm")
let btn = document.getElementById("btn")

passwordContainer[0].appendChild(errorMessage);

errorMessage.className = "errorMessage"

errorMessage.textContent = "* A password has to be mix of alphabets (not case-sensitive) and numbers, and total 7~12 words"


btn.addEventListener('click', function () {
    let passwordValue = password.value;
    let confirmPasswordValue =confirmPassword.value;
    console.log(passwordValue.length)

    if ( passwordValue !== confirmPasswordValue ) {
        errorMessage.className = "errorMessageVisible"
        errorMessage.textContent = "* Password does not match"
    }

    else if ( passwordValue.length > 6 && passwordValue.length < 13) { 
        console.log("Hurray")
        
    }
    
   
    
    else {
        errorMessage.className = "errorMessageVisible"
        console.log("Hello World")
        console.log("Good Night")
    
    }

})

