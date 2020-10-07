<?php
$_POST = json_decode(file_get_contents('php://input'), true);
$filetoremove = "../../" . $_POST["name"];

if (file_exists($filetoremove)) {    
    unlink($filetoremove);
} else {
    header("HTTP/1.0 404 File not found");
}