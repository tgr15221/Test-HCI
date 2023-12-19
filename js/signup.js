const from = document.getElementById("form")

from.addEventListener("submit", (e) => {
    e.preventDefault()
    if(validateAll()){
        window.location.href = "homepage.html"
    }else{
        return
    }
})

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const rpassInput = document.getElementById("rtpass");


function validateUsername(){
    const username = usernameInput.value;
    if(username.split(' ').length > 1) return false;
    if(username.length < 8 || username.length > 16) return false;

    return true;
}

function validateEmail(){
    const email = emailInput.value;
    if(email.split('@').length != 2) return false;
    
    const right = email.split('@')[1];
    const rightside = right.split('.');

    if(rightside < 2) return false;

    for(const word of rightside){
        if(word === "") return false;
    }
    return true;
}

function validatePassword(){
    const pass = passInput.value;
    if(pass.length < 8 || pass.length > 16 || pass.length === 0) return false;
    let hasUpper = false;
    for(i=0;i<pass.length;i++){
        if(pass[i]>='A' && pass[i]<='Z'){
            hasUpper = true;
            break;
        }
    }
    if(!hasUpper) return false;

    let hasNum = false;
    for(i=0;i<pass.length;i++){
        if(pass[i]>='0' && pass[i]<='9'){
            hasNum = true;
            break;
        }
    }
    if(!hasNum) return false;

    return true;
}

function validateRPass(){
    const rpass = rpassInput.value;
    const pass = passInput.value;

    if(rpass !== pass) return false;

    return true;
}

const dateInput = document.getElementById("dob");
function validateDob(){
    const dob = dateInput.value;
    if(dob === "") return false;

    return true;
}

function showError(error){
    alert(error);
}

function validateAll(){
    if(!validateUsername()){
        showError("Username character must be between 8-16");
        return false;
    }
    if(!validateEmail()){
        showError("Invalid email");
        return false;
    }
    if(!validatePassword()){
        showError("Password Invalid");
        return false;
    }
    if(!validateRPass()){
        showError("Unmatched password");
        return false;
    }
    if(!validateDob()){
        showError("Date of Birth must be filled");
        return false;
    }
    return true;
}