<?php  $db = new PDO('mysql:host=localhost;dbname=mvc', 'root', ''); 
$req = $db->prepare("INSERT INTO users (username,password) VALUES (:username, :password)");
