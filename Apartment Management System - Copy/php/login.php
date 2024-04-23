<?php
session_start();
include("connection.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    $sql = "SELECT * FROM tenants_tbl WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result === false) {
        echo '<script>alert ("Error '. $conn->error .' ");</script>';
    }

    elseif ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $hashed_password = $row["password"];

        if (password_verify($password, $hashed_password)) {
            echo '<script>alert ("Login successfully!");</script>';
            
        }

        else {
            echo '<script>alert ("Invalid username or password");</script>';
        }
    }

    else {
        echo '<script>alert ("Invalid username or password");</script>';
    }
}

$conn->close();
?>