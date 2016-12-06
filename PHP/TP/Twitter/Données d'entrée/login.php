<?php  // Connecter un utilisateur

// Inclure les infos de connexion à la bdd


/*

1)  Récupérer le mot de passe associé au nom d'utilisateur rentré dans le champs username

2) Vérifier si le mot de passe rentré dans le champs password est bien celui récupéré ci-dessus

3) Si le mot de passe est bon créer une session "user_id" qui contiendra son id et qui prouvera qu'il est connecté.

4) Rediriger sur la page index.php

*/

$template = 'login.phtml';
include('layout.phtml');