<?php  // On traite les données d'envoi du formulaire d'isncription pour ajouter un nouvel utilisateur dans la table users

// Inclure le fichier common.php pour avoir accès à la base de données et aux sessions

$errors = []; // On initialise

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





/* 2) S'il n'y a pas d'erreur on créer le SALT pour crypter le mot de passe
  Nota: le mot de passe sera crypté à l'aide la de la fonction crypt en blowfish(http://php.net/manual/en/function.crypt.php)

  Générer un grain de sel (salt) ayant cette structure: $2y$14$[22 caractères aléatoires]
  Exemple de salt valide: $2y$14$wHhBmAgOMZEld9iJtV./aq

*/


/* 3) Enregistrer les informations (username, email, password, salt) dans la base données.

   4) Rediriger l'utilisateur sur la page connexion.php


*/


$template = 'register.phtml';
include('layout.phtml');