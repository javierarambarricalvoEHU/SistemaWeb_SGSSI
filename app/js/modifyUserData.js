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
    try {
        var letraInput=dni[9].toString().toUpperCase();
    } catch (error) {
        return false;
    }
    var dniSinLetra=dni.slice(0,8);

    dniSinLetra=dniSinLetra%23;
    
    if (letras[dniSinLetra]!=letraInput){
        return false;
    }
    return true;
}

function checkTel(){
    var tel= document.signUp.phone.value.trim();

    if (tel == ""){
        return false;
    }

    for (let i = 0; i < tel.length; i++) {
        var ascii = tel.charCodeAt(i);
        if (tel.length<9 || ascii < 48 || ascii > 57) {
           return false;
        }
     }

     return true;
}

function checkEmail(){
    var email= document.signUp.email.value.trim();
    var reg = RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');

    if (email == ""){
        return false;
    }

    if (!reg.test(email)){
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
        return false;
    }
    return true;
}

async function update(event){
    event.preventDefault();
    //if all the checks are true, submit the form via POST fetch to /api/signup_register.php
    sql = "UPDATE `usuarios` SET ";
    sql = fill_fields(sql);
    if (sql == "UPDATE `usuarios` SET "){
        alert("No se ha modificado ningún campo");
        return;
    }
    sql = sql.slice(0,-1).concat(" WHERE dni = '", document.getElementById("DNISignup").getAttribute("placeholder")).concat("'");
    res = await fetch('/api/update_data.php', {
        method: 'POST',
        body: sql
    })
    res = await res.text();
    if (res != 'success') {
        alert(res);
    }else{
        alert("Actualización realizada con éxito");
        window.location.reload();
    }
}

function fill_fields(sql){
    try{
        if (checkName()){
            sql = sql.concat(" nombre = '", document.signUp.name.value.trim()).concat("',");
        }
    }
    catch(err){
        console.log(err);
    }
    try{
        if (checkSurname()){
            sql = sql.concat(" apellidos = '", document.signUp.surname.value.trim()).concat("',");

        }
    }
    catch(err){
        console.log(err);
    }
    try{
        if (checkDNI()){
            sql = sql.concat(" dni = '", document.signUp.dni.value.trim()).concat("',");
        }
    }
    catch(err){
        console.log(err);
    }
    try{
        if (checkTel()){
            console.debug("telefono");
            sql = sql.concat(" telefono = '", document.signUp.phone.value.trim()).concat("',");
        }
    }
    catch(err){
        console.log(err);
    }
    try{
        if (checkEmail()){
            sql = sql.concat(" email = '", document.signUp.email.value.trim()).concat("',");
        }
    }
    catch(err){
        console.log(err);
    }
    try{
        if (checkDate()){
            sql = sql.concat(" fecha_nacimiento = '", document.signUp.DOBSignup.value.trim()).concat("',");
        }
    }
    catch(err){
        console.log(err);
    }
    try{
        usuario = document.getElementById("UsernameSignup").value.trim();
        if (usuario != ""){
            sql = sql.concat(" usuario = '", usuario).concat("',");
        }
    }
    catch(err){
        console.log(err);
    }
    try{
        contrasena = document.getElementById("InputPasswordSignup").value.trim();
        if (contrasena != ""){
            sql = sql.concat(" contraseña = '", contrasena).concat("',");
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

function live_checkDNI(){
    if (checkDNI()){
        document.getElementById("wrong_dni").style.display = "none";
    }else{
        document.getElementById("wrong_dni").style.display = "block";
    }
}

function live_checkTel(){
    if (checkTel()){
        document.getElementById("wrong_tel").style.display = "none";
    }else{
        document.getElementById("wrong_tel").style.display = "block";
    }
}

function live_checkEmail(){
    if (checkEmail()){
        console.log("email");
        document.getElementById("wrong_email").style.display = "none";
    }else{
        document.getElementById("wrong_email").style.display = "block";
    }
}

function live_checkDate(){
    if (checkDate()){
        document.getElementById("wrong_date").style.display = "none";
    }else{
        document.getElementById("wrong_date").style.display = "block";
    }
}


document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("SignUpButton").addEventListener("click", update);
})