<?php
require "./connect.php";


if ($_SERVER['REQUEST_METHOD'] === "POST") {

    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $retpass  = $_POST['rtpass'];
    $dob = $_POST['dob'];


    $hashedPassword = md5($password);

    $query = "INSERT INTO users (username, email, password, retypepass, dob) VALUES ('$username', '$email', '$hashedPassword', '$retpass', '$dob')";
    $result = $db->query($query);
    $db->close();

    if ($result) {
        $_SESSION["success_message"] = "Registration Success";
        header("Location: ../index.html");
    } else {
        $_SESSION["error_message"] = "Registration Failed";
        header("Location: ../signup-page.html");
    }

} else {
    header("Location: ../signup-page.php");
}
?>