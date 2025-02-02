<!DOCTYPE html> <!-- Type '!'' and press tab -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Euskor&oacute;scopo</title>
    <link rel="stylesheet" href="styles.css"> <!-- Type 'link' and press tab -->
    <link rel="stylesheet" href="/icons/">
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.css" />
    <link rel="stylesheet" href="css/tabla_inicio.css" />

    <script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.js"></script>
    <script src="js/index.js"></script>
</head>

<body style="background-image: url('images/background.webp'); background-size: cover; color: white;">
    
    <!-- Navbar section -->
    <nav class="navbar">
        <div class="navbar_container"> 
            <ul class="navbar_menu">
                <li class="navbar_item"> 
                    <a href="/" class="navbar_links">Login</a>
                </li>

                <!--
                <li class="navbar_item"> 
                    <a href="/aboutUs.html" class="navbar_links">Sobre nosotros</a> 
                </li>

                <li class="navbar_item"> 
                    <a href="/" class="navbar_links">Cursos</a> 
                </li>

                <li class="navbar_button"> 
                    <a href="/" class="button">Inscripción</a>
                </li> -->
                
            </ul> 
        </div> 
    </nav>
    
            <div class="container-sm">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center me-md-auto link-body-emphasis text-decoration-none">
                <span class="fs-5" style="color:white">Euskor&oacute;scopo<?php if(isset($_SESSION['email'])){echo ": Bienvenido, $_SESSION[usuario]";}?></span>
            </a>
            <ul class="nav nav-pills">
                <?php
                if (isset($_SESSION['email'])) {
                    echo '<li class="nav-item"><a href="createEntry.php" class="nav-link" style="color:white">Crear entrada</a></li>';
                    echo '<li class="nav-item"><a href="modifyUserData.php" class="nav-link" style="color:white">Modificar datos</a></li>';
                    echo '<li class="nav-item"><a href="logout.php" class="btn btn-danger">Logout</a></li>';
                } else {
                    echo '<li class="nav-item"><a href="login.php" class="nav-link active">Login</a></li>';
                }
                ?>
            </ul>
        </header>
        <main>
            <h1>
                La mejor p&aacute;gina de hor&oacute;scopos de Euskadi
            </h1>
            <h2>
                Ahora con: 
                <?php
                 include "dbconn.php";

                 $query = mysqli_query($conn, "SELECT COUNT(dni) FROM usuarios")
                    or die (mysqli_error($conn));
                
                $row = mysqli_fetch_array($query);
                echo $row[0];
                ?> usuarios
            </h2>
            <br>
            <div>
                <table id="tablaHoroscopos" class="display">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Signo solar</th>
                            <th>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        $query = mysqli_query($conn, "SELECT id, nombre, signo_solar FROM horoscopos")
                            or die (mysqli_error($conn));
                        
                        while ($row = mysqli_fetch_array($query)) {
                            echo "<tr>";
                            echo "<td>$row[nombre]</td>";
                            echo "<td>$row[signo_solar]</td>";
                            echo "<td><button class='btn btn-danger' onclick='editEntry($row[id])'>Editar</button></td>";
                            echo "</tr>";
                        }
                        ?>
                    </tbody>
                    </thead>
                </table>
            </div>
        </main>
        <footer>
        Zodiac Backgrounds@wallpaperuse.com
        </footer>
    </div>
</body>
</html>
