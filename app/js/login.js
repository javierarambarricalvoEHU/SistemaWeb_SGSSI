function checkName(){
    var name= document.signUp.name.value;

    window.alert ("Su nombre: "+name); 
    

    
        
    /*if (edad < 18) {
            window.alert ("Lo siento. Debes ser mayor de edad"); 
        }
        else{
            document.formulario.submit();
        }*/

    /*more info at https://www.w3resource.com/javascript/form/all-letters-field.php#:~:text=To%20get%20a%20string%20contains,%2F)%20which%20allows%20only%20letters.*/
}

function checkDNI(){

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
     window.alert ("El número: "+tel+" es CORRECTO");
     return true;
    
}

function checkData(){
    checkName();
    //checkDNI();
    checkTel();
}