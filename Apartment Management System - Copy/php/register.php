<?php
session_start();
include ("connection.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = $_POST["first_name"];
    $last_name = $_POST["last_name"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $confirm_password = $_POST["confirm_password"];

    if ($password != $confirm_password) {
        echo '<script>alert ("Password does not match!");</script>';
    }

    else {
        $email_check_sql = "SELECT * FROM tenants_tbl WHERE email = '$email'";
        $email_check_result = $conn->query($email_check_sql);

        if ($email_check_result === false) {
            echo '<script>alert ("Error: '. $conn->error .'");</script>';
        }

        elseif ($email_check_result->num_rows > 0) {
            echo '<script>alert ("Email Already Existed!")</script>;';
        }

        else {
            $hashed_password = password_hash ($password, PASSWORD_DEFAULT);
            $sql = "INSERT INTO tenants_tbl (first_name, last_name, email, password) VALUES ('$first_name', '$last_name', '$email', '$hashed_password')";
            $result = $conn->query($sql);

            if ($result === true) {
                echo '<script>
                alert ("User registration is successfull!");
                window.location = "../login.html";
                </script>';
            }

            else {
                echo '<script>alert ("Error: '. $conn->error .'"); </script>';
            }
        }
    }
}

$conn->close();

?>