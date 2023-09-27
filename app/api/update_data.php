<?php
$nombre = $_REQUEST['name'];
$apellido = $_REQUEST['surname'];
$usuario = $_REQUEST['username'];
$contrasena = $_REQUEST['password'];
$email = $_REQUEST['email'];
$telefono = $_REQUEST['phone'];
$fecha_nacimiento = $_REQUEST['dob'];
$dni = $_REQUEST['dni'];

if (!empty($nombre)){
    $query = "UPDATE usuarios SET nombre='$nombre' WHERE usuario='$row[3]'";
    $result = mysqli_query($conn, $query) or die (mysqli_error($conn));

    if ($result) {
        echo "Usuario modificado correctamente";
    } else {
        echo "Error al modificar el usuario";
    }
}



?>