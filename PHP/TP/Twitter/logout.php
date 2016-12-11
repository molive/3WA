<?php session_start();
session_destroy();  // On supprime toutes les variables de session lié à cet utilisateur
// NB: unset($_SESSION['user_id']) aurait aussi fait l'affaire.
header('location: login.php');  // On redirige sur la page de connection
exit;