<?php
    include '../dbconn.php';
    
    $sql_string = file_get_contents('php://input');
    
    $result = mysqli_query($conn, $sql_string) or die("Error in Selecting " . mysqli_error($conn));
    if($result){
        echo "success";
    }else{
        echo "fail";
    }
?>