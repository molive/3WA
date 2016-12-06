<?php  $pdo = new PDO('mysql:host=localhost;dbname=blog', 'root', '');
	session_start();
	function generateRandomString($length) {  // Servira à générer le SALT de 22 caractère pour crypter le mot de passe
		$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		$charactersLength = strlen($characters);
		$randomString = '';
		for ($i = 0; $i < $length; $i++) {
			$randomString .= $characters[rand(0, $charactersLength - 1)];
		}
		return $randomString;
	}

	/*  Inscription
	$password = 'ytreza';
	
	$salt = '$2y$14$'.generateRandomString(22);
	
	$password = crypt($password, $salt);

     // Ajout d'un article du blog.
        $query =
        '
            INSERT INTO
                users
                (username,email, password,salt,created_at)
            VALUES
                (:username, :email, :password, :salt, NOW())
        ';
        $resultSet = $pdo->prepare($query);
        $resultSet->execute([
		'username' => 'molive',
		'email' => 'the.molive@gmail.com',
		'password' => $password,
		'salt' => $salt]);
		
	
	
	*/
	
	$query = $pdo->prepare
(
    'SELECT
       *
     FROM users
     WHERE id = ?'
);

$query->execute(array(1));

/*
 * Récupération de toutes les données renvoyées par MySQL.
 *
 * La méthode fetch() renvoie un tableau à une dimension :
 * - la première dimension représente les colonnes SQL de la ligne de données
 */
$user = $query->fetch(PDO::FETCH_ASSOC);

$password = $user['password'];
$salt = $user['salt'];

$hash = crypt('ytreza',$salt);

if($hash == $password) echo 'connecté';

$date = new DateTime($user['created_at']);
echo $date->format('Y m d');
	
	