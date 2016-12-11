<?php  // On traite les données d'envoi du formulaire d'isncription pour ajouter un nouvel utilisateur dans la table users

require_once('common.php');


$errors = []; // On initialise un tableau d'erreurs vide qu ise remplira si l'utilisateur commet des erreurs lors de l'inscription

/* 1) On vérifie l'intégrité des données:

username:
  
  - Doit uniquement contenir de caractères alphanumériques: http://www.php.net/ctype_alpha
  - Minimum 5 caractères
  - Ne doit pas être pris par un autre utilisateur

email:

  - Vérifier que la structure est celle d'un email (http://php.net/manual/fr/filter.examples.validation.php)
  - Ne doit pas être pris par un autre utilisateur

password:

  - Minimum 8 caractères 


  
S'il y a des erreurs sauter l'étape 2, 3 et 4 et afficher les erreurs sur le fichier register.phtml
  
*/

if(!empty($_POST)){  // On vérifie si le formulaire d'inscription est envoyé

/**** VERIFICATION DU CHAMPS USERNAME ****/

$username = $_POST['username']; 
$password = $_POST['password'];
$email = $_POST['email'];

// On vérifie si le pseudo fait plus de 5 caractères.
if(strlen($username) < 5) $errors[] = "Le pseudo est trop court";

// On vérifie si le pseudo n'est pas déjà pris par un autre membre.
$query = $pdo->prepare('SELECT username FROM users WHERE username = ?');
$query->execute([$username]);
$result = $query->fetch(PDO::FETCH_ASSOC);

if($result != null) $errors[] = "Le nom d'utilisateur est déjà pris.";

// On vérifie si le pseudo contient uniquement des caractères alphanumérics:
if(!ctype_alpha($username)) $errors[] = "Le nom d'utilisateur ne doit contenir que des caractères alphanumériques.";

/**** VERIFICATION DU CHAMPS EMAIL ****/
// On vérifie si la syntaxe est correcte :
if(!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = "L'émail est incorrecte.";

// On vérifie si un membre ne c'est pas déjà isncrit avec cet email :
$query = $pdo->prepare('SELECT email FROM users WHERE email = ?');
$query->execute([$email]);
$result = $query->fetch(PDO::FETCH_ASSOC);

if($result != null) $errors[] = "L'émail est déjà pris.";


/**** VERIFICATION DU CHAMPS PASSWORD ****/

if(strlen($password) < 8) $errors[] = "Le mot de passe est trop court";


/* 2) S'il n'y a pas d'erreur on créer le SALT pour crypter le mot de passe
  Nota: le mot de passe sera crypté à l'aide la de la fonction crypt en blowfish(http://php.net/manual/en/function.crypt.php)

  Générer un grain de sel (salt) ayant cette structure: $2y$14$[22 caractères aléatoires]
  Exemple de salt valide: $2y$14$wHhBmAgOMZEld9iJtV./aq

*/
	if(empty($errors)){

		$salt = '$2y$14$'.generateRandomString(22);
		$password = crypt($password, $salt);


		/* 3) Enregistrer les informations (username, email, password, salt) dans la base données.

		   4) Rediriger l'utilisateur sur la page connexion.php


		*/

		$query =
			'
				INSERT INTO
					users
					(username,email, password,salt)
				VALUES
					(:username, :email, :password, :salt)
			';
		$resultSet = $pdo->prepare($query);
		$resultSet->execute([
			'username' => $username,
			'email' => $email,
			'password' => $password,
			'salt' => $salt]);

		header('Location: login.php');  // On redirige ensuite sur la page de connexion
	}
}

$template = 'register.phtml';
include('layout.phtml');