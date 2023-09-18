function checkName(){
    var name= document.signUp.name.value;

    for (let i = 0; i < name.length; i++){
        var ascii = name.charCodeAt(i);
        if (ascii < 65 || ascii > 122){
            window.alert ("Asegúrate de solo introducir texto: "+name);
            return false;
        }
        
    }
    return true;
        
    /*if (edad < 18) {
            window.alert ("Lo siento. Debes ser mayor de edad"); 
        }
        else{
            document.formulario.submit();
        }*/

    /*more info at https://www.w3resource.com/javascript/form/all-letters-field.php#:~:text=To%20get%20a%20string%20contains,%2F)%20which%20allows%20only%20letters.*/
}

function checkSurname(){
    var surname= document.signUp.surname.value;

    for (let i = 0; i < surname.length; i++){
        var ascii = surname.charCodeAt(i);
        if (ascii < 65 || ascii > 122){
            window.alert ("Asegúrate de solo introducir texto: "+surname);
            return false;
        }
        
    }
    return true;
}

function checkDNI(){
    //Falta comprobar que el formato del DNI introducido sea correcto
    
    var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
    var dni=document.signUp.dni.value;
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
    var tel= document.signUp.telephone.value;

    for (let i = 0; i < tel.length; i++) {
        var ascii = tel.charCodeAt(i);
        if (tel.length<9 || ascii < 48 || ascii > 57) {
           window.alert ("El número: "+tel+" es INCORRECTO");
           return false;
        }
     }

     return true;
    
}

function checkData(){
    checkName();
    checkSurname();
    checkDNI();
    checkTel();
}