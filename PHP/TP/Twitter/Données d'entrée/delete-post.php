<?php // Supprimer un post

require_once('common.php');

/* 1) Supprimer le post associé à la variable d'url "post_id".

Exemple: l'url "delete.php?post_id=12" signifie qu'on souhaite supprimer le post dont l'id est égal à 12

/!\ Vérifier que l'auteur du post est bien celui qui cherche à le supprimer. Pour se faire comparer la valeur du champs de la clé étrangère "user_id" du post à supprimer avec le contenu de la session "user_id".
/!\ Vérifier également que la variable d'url "token" est bien égal à celle de la session $_SESSION['csrf_token'].
*/

// 2) Rediriger l'utilisateur sur la page index.php