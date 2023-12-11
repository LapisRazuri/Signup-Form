
let password = document.getElementById("password")
let errorMessage = document.createElement("div");
let passwordContainer = document.getElementsByClassName("passwordContainer")
let confirmPassword = document.getElementById("passwordConfirm")
let btn = document.getElementById("btn")

passwordContainer[0].appendChild(errorMessage);

errorMessage.className = "errorMessage"


btn.addEventListener('click', function () {
    let passwordValue = password.value;
    let confirmPasswordValue =confirmPassword.value;
    console.log(passwordValue.length)

    if ( passwordValue !== confirmPasswordValue ) {
        errorMessage.className = "errorMessageVisible"
        errorMessage.textContent = "* Password does not match"
    }

        
    else if ( passwordValue.length < 7 || passwordValue.length > 12){
        errorMessage.className = "errorMessageVisible"
        errorMessage.textContent = "* Mix alphabets (not case-sensitive), and numbers.Total 7~12 words"
        console.log("Hello World")
        console.log("Good Night")
    }

    else { 
        console.log("Hurray")
        
    }

})

