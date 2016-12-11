<?php $pdo = new PDO('mysql:host=localhost;dbname=blog', 'root', '');  // Conenction à la base de données blog
session_start(); // On lance la session
function generateRandomString($length) {  // Servira à générer le SALT de 22 caractères pour crypter le mot de passe lors de l'inscription et le jeton de session $_SESSION['csrf_token'] pour se protéger des attaques csrf
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}


// création du jeton de session csrf_token s'il n'existe pas:

if(!isset($_SESSION['csrf_token'])) {
	// On génère le jeton de session pour contrer les attaques csrf et qui sera incorporé dans les liens permettant de supprimer les articles.
			// NB: idéalement il faudrait aussi rajouté dans TOUS les formulaires du site un champs caché (de type hidden) contenant ce jeton de session:
			// Exemple: <input type="hidden" name="csrf_token" value="fsjf5fd4s8d456sg4s6g54sdg65ds4g6ds5g8">
			// Ceci permettrai également pêcher à un site malveillant de vous faire souemttre un de vos formualaire via son site.
	$_SESSION['csrf_token'] = generateRandomString(30);

}