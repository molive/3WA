<?php // Editer un post
require_once('commmon.php');
// Exemple: l'url "update.php?post_id=12" signifie qu'on souhaite éditer le post dont l'id est égal à 12

// Inclure les infos de connexion à la bdd


// 1) Vérifier avant toute chose que la valeur du champs caché du formulaire "csrf_token" est bien égale à celui du jeton de session $_SESSION['csrf_token']

// 2) Vérifier que l'auteur du post est bien celui qui cherche à l'éditer. Pour se faire comparer la valeur du champs de la clé étrangère "user_id" du post à éditer avec le contenu de la session "user_id".


/* SI LE FORMULAIRE (update.phtml) EST ENVOYE:

 3)Editer le post associé à la variable d'url "post_id".

 4) Rediriger l'utilisateur sur la page index.php

 SI LE FORMULAIRE (update.phtml) N'EST PAS ENVOYE:

 5) Récupérer le contenu du post a éditer et le mettre dans une variable $content

*/


// On vérifie que le formulaire n'est pas envoyé depuis un site malveillant:

if($_SESSION['csrf_token'] != $_POST['csrf_token']) exit;  // Si le jeton de session ne correspond pas alors on stoppe l'exécution du code PHP.


if(!empty($_POST)){  // Si le formulaire est envoyé
	// On veille à ne modifier que le post dont l'id correspond à celui de la variable d'url "post_id" en tenant également compte de la valeur de la clé étrangère "user_id" pour s'assurer que la personne procédant à l"édition est bien l'auteur du post.
	$query =
        '
            UPDATE
                posts
            SET
                content = :postContent,
				updated_at = NOW()
				
            WHERE
                id = :postId AND user_id = :authorId
        ';
        $resultSet = $pdo->prepare($query);
        $resultSet->execute(['postContent' => $_POST['content'], 
							 'postId' => $_GET['post_id'], 
							 'authorId' => $_SESSIOn['user_id']
							 ]);

	header('location: index.php');
	exit;
}
else  // Si le formulaire n'est pas envoyé alors on récupère les infos du pso à modifié et on les affiche dans le template "update-post.phtml"
{

	$query = $pdo->prepare('SELECT content FROM posts WHERE id = ? AND user_id = ?');
	$query->execute([$_GET['post_id'], $_SESSION['user_id']]);
	$post = $query->fetch(PDO::FETCH_ASSOC);

	$template = 'update-post.phtml';
	include('layout.phtml');
}