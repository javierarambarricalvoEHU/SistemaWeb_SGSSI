function checkName(){
    var name= document.signUp.name.value.trim();

    if (name == ""){
        return false;
    }

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

    if (surname == ""){
        return false;
    }

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

    console.debug(tel.length != 9);
    if (tel == ""){
        return false;
    }
    for (let i = 0; i < tel.length; i++) {
        var ascii = tel.charCodeAt(i);
        if (tel.length != 9 || ascii < 48 || ascii > 57) {
           window.alert ("El número: "+tel+" es INCORRECTO");
           return false;
        }
     }
     return true;
}

function checkEmail(){
    var email= document.signUp.email.value.trim();
    var reg = RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$');
    if (email == ""){
        return false;
    }
    if (!reg.test(email)){
        window.alert("Error email: formato incorrecto");
        return false;
    }
    return true;
}

function checkDate(){
    var date= document.signUp.DOBSignup.value;
    var reg = RegExp('^[0-9]{4}-[0-9]{2}-[0-9]{2}$');
    if (date == ""){
        return false;
    }
    if (!reg.test(date)){
        window.alert("Error fecha: formato incorrecto");
        return false;
    }
    return true;
}

async function update(event){
    event.preventDefault();
    //if all the checks are true, submit the form via POST fetch to /api/signup_register.php
    sql = "UPDATE `users` SET ";
    sql = fill_fields(sql);
    if (sql == "UPDATE `users` SET "){
        alert("No se ha modificado ningún campo");
        return;
    }
    sql = sql.concat(" WHERE dni = '", document.getElementById("DNISignup").getAttribute("placeholder")).concat("'");
    console.log(sql);
    // res = await fetch('/api/update_data.php', {
    //     method: 'POST',
    //     body: fd
    // })
    // res = await res.text();
    // console.log(res)
    // if (res != 'Usuario modificado correctamente') {
    //     alert(res);
    // }else{
    //     alert(res);
    //     window.location.reload()
    // }
}

function fill_fields(sql){
    try{
        if (checkName()){
            sql = sql.concat(" nombre = '", document.signUp.name.value.trim()).concat("'");
        }
    }
    catch(err){
        console.log(err);
    }
    try{
        if (checkSurname()){
            sql = sql.concat(" apellidos = '", document.signUp.surname.value.trim()).concat("'");

        }
    }
    catch(err){
        console.log(err);
    }
    try{
        if (checkDNI()){
            sql = sql.concat(" dni = '", document.signUp.dni.value.trim()).concat("'");
        }
    }
    catch(err){
        console.log(err);
    }
    try{
        if (checkTel()){
            console.debug("telefono");
            sql = sql.concat(" telefono = '", document.signUp.phone.value.trim()).concat("'");
        }
    }
    catch(err){
        console.log(err);
    }
    try{
        if (checkEmail()){
            sql = sql.concat(" email = '", document.signUp.email.value.trim()).concat("'");
        }
    }
    catch(err){
        console.log(err);
    }
    try{
        if (checkDate()){
            sql = sql.concat(" fecha_nacimiento = '", document.signUp.DOBSignup.value.trim()).concat("'");
        }
    }
    catch(err){
        console.log(err);
    }
    return sql;
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

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("SignUpButton").addEventListener("click", update);
})