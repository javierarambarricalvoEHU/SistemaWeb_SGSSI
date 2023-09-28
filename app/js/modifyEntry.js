async function update(event){
    event.preventDefault();
    //if all the checks are true, submit the form via POST fetch to /api/signup_register.php
    sql = "UPDATE `horoscopos` SET ";
    sql = fill_fields(sql);
    if (sql == "UPDATE `horoscopos` SET "){
        alert("No se ha modificado ningún campo");
        return;
    }

    //FALTA QUE RECIBA EL ID CLAVE DEL HOROSCOPO A MODIFICAR
    sql = sql.slice(0,-1).concat(" WHERE id = 0;") //, document.getElementById("DNISignup").getAttribute("placeholder")).concat("'");
    res = await fetch('/api/update_entry.php', {
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
        sql = sql.concat(" nombre = '", document.signUp.name.value.trim()).concat("',");
        sql = sql.concat(" fecha_nacimiento = '", document.signUp.dob.value.trim()).concat("',");
        sql = sql.concat(" signo_solar = '", document.signUp.signosolar.value.trim()).concat("',");
        sql = sql.concat(" signo_lunar = '", document.signUp.signolunar.value.trim()).concat("',");
        
        if (document.signUp.retrogrado.value.trim() == 'Si'){result='1';}
        else{result='0';}
        sql = sql.concat(" mercurio_retrogrado = '", result).concat("',");
    }
    catch(err){
        console.log(err);
    }
    return sql;
}


document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("sendButton").addEventListener("click", update);
})