<?php
include "../dbconn.php";
$usuario = $_REQUEST['email'];
$contrasena = $_REQUEST['password'];

$query = "SELECT COUNT(dni) FROM usuarios WHERE usuario = '$usuario' OR email = '$usuario' AND contraseña = '$contrasena'";
$result = mysqli_query($conn, $query) or die (mysqli_error($conn));
$row = mysqli_fetch_array($result);
if ($row[0] == 1) {
    session_start();
    $_SESSION['username'] = $usuario;
    echo "Login correcto";
} else {
    echo "Login incorrecto";
}
?>