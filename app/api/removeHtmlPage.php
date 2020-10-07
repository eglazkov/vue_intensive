<?php
$filetoremove = "../../" . $_POST["name"] . ".html";

if (file_exists($filetoremove)) {    
    unlink($filetoremove);
} else {
    header("HTTP/1.0 404 File not found");
}