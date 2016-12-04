<?php

$pdo = new PDO('mysql:host=localhost;dbname=3wa', 'root', '');



// Afficher le profil d'un utilsiateur
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
echo $user['username'];



// Afficher tous les utilisateurs
$query = $pdo->prepare
(
    'SELECT
       *
     FROM users'
);

$query->execute();

/*
 * Récupération de toutes les données renvoyées par MySQL.
 *
 * La méthode fetch() renvoie un tableau à une dimension :
 * - la première dimension représente les colonnes SQL de la ligne de données
 */
$users = $query->fetchAll();

foreach($users as $user){

	echo $user['username'];

}


// Afficher les posts avec leurs auteurs



// Afficher le profil d'un utilsiateur
$query = $pdo->prepare
(
    'SELECT
       *
     FROM posts
     JOIN users ON users.id = posts.user_id'
);

$query->execute();

/*
 * Récupération de toutes les données renvoyées par MySQL.
 *
 * La méthode fetch() renvoie un tableau à une dimension :
 * - la première dimension représente les colonnes SQL de la ligne de données
 */
$posts = $query->fetchAll(PDO::FETCH_ASSOC);

foreach($posts as $post){

	echo $post['title'].'<hr>';
	echo $post['username'];

}


