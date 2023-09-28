<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Euskor&oacute;scopo</title>    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <!-- <link rel="stylesheet" href="style_index.css"> -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</head>
<body style="background-image: url('images/background.webp');
            background-size: cover; color: white;">
            <!-- images/background.jpg -->
    <div class="container-sm">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center me-md-auto link-body-emphasis text-decoration-none">
                <span class="fs-5" style="color:white">Euskor&oacute;scopo<?php if(isset($_SESSION['email'])){echo ": Bienvenido, $_SESSION[usuario]";}?></span>
            </a>
            <ul class="nav nav-pills">
                <?php
                if (isset($_SESSION['email'])) {
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
        </main>
        <footer>
        Zodiac Backgrounds@wallpaperuse.com
        </footer>
    </div>
</body>
</html>
