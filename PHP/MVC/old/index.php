<?php 

// http://www.grafikart.fr/formations/programmation-objet-php/mvc-model-view-controller
//http://php.net/manual/fr/function.extract.php
/*
- Les modèls : va interagir avec la base de données >>> Uniquement récupération d'information
- Les vues : C'est ce que va voir l'utilisateur (code html)
   * très peux de code PHP
   * des affichage de variable
   * des boucles pour afficher du contenu extrait de la base de données
- Les controleurs : C'est la partie clef qui va faire la jonction entre les modèls et les vues

le fixier index.php à la racine >>> c'est le dispatcher qui va aiguiller la requête de l'utiliateur, c'es tle point d'entré systématique

Structure d'url : localhost/mvc/controller/action/parametres
   *
*/

/* ETAPE :

1) Créer dossier app/

2) Créer un dossier core/controller

3) Créer un fichier controller.php
?>