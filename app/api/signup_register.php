<?php
include "../dbconn.php";
$nombre = $_REQUEST['name'];
$apellido = $_REQUEST['surname'];
$usuario = $_REQUEST['username'];
$contrasena = $_REQUEST['password'];
$email = $_REQUEST['email'];
$telefono = $_REQUEST['phone'];
$fecha_nacimiento = $_REQUEST['dob'];
$dni = $_REQUEST['dni'];

$query = "INSERT INTO usuarios (dni, nombre, apellidos, usuario, contraseña, email, telefono, fecha_nacimiento) VALUES ('$dni', '$nombre', '$apellido', '$usuario', '$contrasena', '$email', '$telefono', '$fecha_nacimiento')";
$result = mysqli_query($conn, $query) or die (mysqli_error($conn));
if ($result) {
    echo "Usuario registrado correctamente";
} else {
    echo "Error al registrar el usuario";
}
?>