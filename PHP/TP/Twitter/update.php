<?php // Editer un post

// Exemple: l'url "update.php?post_id=12" signifie qu'on souhaite éditer le post dont l'id est égal à 12

// Inclure les infos de connexion à la bdd


// 1) Vérifier que l'auteur du post est bien celui qui cherche à l'éditer. Pour se faire comparer la valeur du champs de la clé étrangère "user_id" du post à éditer avec le contenu de la session "user_id".


/* SI LE FORMULAIRE (update.phtml) EST ENVOYE:

 2)Editer le post associé à la variable d'url "post_id".

 3) Rediriger l'utilisateur sur la page index.php

 SI LE FORMULAIRE (update.phtml) N'EST PAS ENVOYE:

 2) Récupérer le contenu du post a éditer et le mettre dans une variable $content

*/


include('update.phtml');