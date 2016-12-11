<?php  require_once('common.php');

/*

1)  Récupérer le mot de passe associé au nom d'utilisateur rentré dans le champs username

2) Vérifier si le mot de passe rentré dans le champs password est bien celui récupéré ci-dessus

3) Si le mot de passe est bon créer une session "user_id" qui contiendra son id et qui prouvera qu'il est connecté.

4) Rediriger sur la page index.php

*/

// 1
$error = false;

if(!empty($_POST))
{
    // On récupère l'id, le passport et le grain de sel de l'utilisateur cherchant à se connecter:
		$query = $pdo->prepare
	(
		'SELECT
		   id,password,salt
		 FROM users
		 WHERE username = ?'
	);

	$query->execute(array($_POST['username']));

	$user = $query->fetch(PDO::FETCH_ASSOC);
	if($user != null) {
	
		$userPassword = $user['password'];  // Mot de passe crypté en Blowfish
		$salt = $user['salt'];  // Grain de sel qui a permis le cryptage du passport en Blowfish
	
		
		// On crypte le mot de passe tapé par l'utilisateur en utilisant le même grain de sel qui avaiot servi au cryptage de son mot de passe lors de l'inscription
		$hashedPassword = crypt($_POST['password'],$salt);  
		
		// On vérifie si le passport est bon.
		if($hashedPassword == $userPassword) {
			
			$_SESSION['user_id'] = $user['id'];  // On créé une session user_id pour prouver que cet utilisateur est connecté. Cette session servira aussi à vérifier qu'il est bien l'auteur des posts qu'il cherche à supprimer / éditer.
			
		
			header('location: index.php'); // On redirigie sur l'accueil où son listé tous les posts
			
			exit;
		
		}
		else $error = true;
	
	}
	else $error = true;
	
}

$template = 'login.phtml';
include('layout.phtml');