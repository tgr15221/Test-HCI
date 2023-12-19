<?php
require "./connect.php";

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $hashedPassword = md5($password);

    $query = "SELECT * FROM users WHERE username='$username' AND password='$hashedPassword';";
    $result = $db->query($query);

    $db->close();

    if ($result->num_rows === 1) {
        $row = $result->fetch_assoc();
        header("Location: ../homepage.html");
        exit();
    } else {
        $_SESSION["error_message"] = "Login Failed";
        header("Location: ../index.html");
        exit();
    }
}
?>