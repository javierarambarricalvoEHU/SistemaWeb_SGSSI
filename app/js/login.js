function checkName(){
    var name= document.signUp.name.value.trim();

    for (let i = 0; i < name.length; i++){
        var ascii = name.charCodeAt(i);
        if (ascii < 65 || ascii > 122){
            return false;
        }
        
    }
    return true;
}

function checkSurname(){
    var surname= document.signUp.surname.value.trim();
    for (let i = 0; i < surname.length; i++){
        var ascii = surname.charCodeAt(i);
        if ((ascii < 65 || ascii > 122) && (ascii != 32)){
            return false;
        }
        
    }
    return true;
}

function checkDNI(){
    //Falta comprobar que el formato del DNI introducido sea correcto
    
    var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
    var dni=document.signUp.dni.value.trim();
    var letraInput=dni[9].toString().toUpperCase();
    var dniSinLetra=dni.slice(0,8);

    dniSinLetra=dniSinLetra%23;
    
    if (letras[dniSinLetra]!=letraInput){
        window.alert("Error DNI: no corresponde el número con la letra");
        return false;
    }
    return true;
}

function checkTel(){
    var tel= document.signUp.phone.value.trim();

    for (let i = 0; i < tel.length; i++) {
        var ascii = tel.charCodeAt(i);
        if (tel.length<9 || ascii < 48 || ascii > 57) {
           window.alert ("El número: "+tel+" es INCORRECTO");
           return false;
        }
     }

     return true;
}

function checkEmail(){
    var email= document.signUp.email.value.trim();
    var reg = RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$');

    if (!reg.test(email)){
        window.alert("Error email: formato incorrecto");
        return false;
    }
    return true;
}

function checkDate(){
    var date= document.signUp.DOBSignup.value;
    var reg = RegExp('^[0-9]{4}-[0-9]{2}-[0-9]{2}$');

    if (!reg.test(date)){
        window.alert("Error fecha: formato incorrecto");
        return false;
    }
    return true;
}

async function register(event){
    event.preventDefault();
    //if all the checks are true, submit the form via POST fetch to /api/signup_register.php
    try {
        if (!checkName() || !checkSurname() || !checkDNI() || !checkTel() || !checkDate()) {
            return;
        }
    } catch (error) {
        alert("Algo ha ido mal")
        console.log(error);
        return;
    }
    res = await fetch('/api/signup_register.php', {
        method: 'POST',
        body: new FormData(document.getElementById('signUpForm'))
    })
    res = await res.text();
    console.log(res)
    if (res != 'Usuario registrado correctamente') {
        alert(res);
    }else{
        alert(res);
        window.location.reload()
    }
}

function live_checkName(){
    if (checkName()){
        document.getElementById("wrong_name").style.display = "none";
    }else{
        document.getElementById("wrong_name").style.display = "block";
    }
}

function live_checkSurname(){
    if (checkSurname()){
        document.getElementById("wrong_surname").style.display = "none";
    }else{
        document.getElementById("wrong_surname").style.display = "block";
    }
}

async function login(event){
    event.preventDefault();
    //if all the checks are true, submit the form via POST fetch to /api/login.php
    fd = new FormData()
    fd.append('email', document.getElementById('InputEmail').value)
    fd.append('password', document.getElementById('InputPassword').value)
    res = await fetch('/api/login.php', {
        method: 'POST',
        body: fd
    })
    console.log(res)
    res = await res.text();
    console.log(res)
    if (res != 'Login correcto') {
        alert(res);
    }else{
        alert(res);
        window.location.reload()
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("SignUpButton").addEventListener("click", register);
    document.getElementById("LogInButton").addEventListener("click", login);
})