"use strict";
$(function(){  // Permet d'autoriser l'exécution du code uniquement lorsque l'intégralité du html est chargé (équivalent de document.addEventListener("DOMContentLoaded", function(event) { ...});
//$( document ).ready({ // version longue  ( https://learn.jquery.com/using-jquery-core/document-ready/ )

/*** ETAPE 1 ***/
// Créer une variable $thumbsLinks qui contiendra une collection d'objet jQuery relative à nos 4 liens dans la div ayant pour id="thumbs"

/*** ETAPE 2 ***/
// Créer une variable $mainImg qui contiendra un objet jQuery relatif à l'image ayant pour id="mainImg" (pour rappel cette image sert à donner un aperçu de l'image en taille moyenne lorsqu'une miniature est survolée).

/*** ETAPE 3 ***/
// Faire en sort que l'attribut "src" de l'image ayant pour id="mainImg" se mette à jour lorsque l'on survole l'une des 4 miniatures.
// NB: Les images de taille moyenne sont stockées dans le dossier "images/mediums"
// >>> http://api.jquery.com/hover/
// Exemple: Si je survole la deuxième miniature alors l'attribut src de l'image ayant pour id "mainImg" sera égal à "images/mediums/iron-man.jpg" car l'attribut href du lien de la miniature survolée est égal à "iron-man.jpg"
// Astuce 1: Basez-vous sur la valeur de l'url du lien de la miniature survolée pour récupérer la source de l'image.
// >>> http://api.jquery.com/attr/
// Astuce 2: Utiliser la méthode replace pour remplacer la racine du dossier images/ par images/mediums

/*

 Exemple d'utilisation de la méthode replace:
 
 var originalSrc = "images/ciel.jpg";
 var mediumSrc = originalSrc.replace('images/','images/mediums/');  // mediumSrc vaut images/mediums/ciel.jpg
*/

/*** ETAPE 4 ***/
// 1) Créer une variable $info qui contiendra un objet jQuery relatif à la span ayant pour id="infos" où doit s'afficher le contenu de l'attribut "alt" des miniatures survolées.
// 2) Remplacer le contenu html de la span ayant pour id="infos" par la description de l'image lorsqu'on survole une miniature.
// >>> http://api.jquery.com/html/

/*** ETAPE 5 ***/
// Ajouter la classe "current" sur la miniature survolée (/!\ sur la balise img et non sur la balise a). 
// >>> http://api.jquery.com/addClass/
// Faire en sorte que seules la miniature survolée aie la classe "current". 
// >>> http://api.jquery.com/removeClass/
// Cette classe doit persister même lorsque l'on ne survole plus cette miniature avec la souris, autrement cela ne servirait à rien d'utiliser du JS ;)
// Astuce: utiliser la méthode find: http://api.jquery.com/find/ ou children http://api.jquery.com/children/ pour cibler l'image entre les 2 balises <a></a> des liens des miniatures

/*** ETAPE 6 ***/
// 1)  Créer une variable $container qui contiendra un objet jQuery relatif à la div ayant pour id="container" qui s'affiche en recouvrant l'itégralité de la page lorsque l'utilisateur clique sur une des 4 miniatures pour aggrandir l'image 
// 2) Faire en sorte que la div ayant pour id="container" s'affiche avec un effet de fondu lorsque l'on clique sur une des 4 miniatures
// >>> http://api.jquery.com/fadeIn/
// >>> http://api.jquery.com/click/

// /!\ Il faudra bloquer la redirection du lien pour rester sur la même page. Pour se faire utilisez la méthode preventDefault sur l'objet event: https://api.jquery.com/event.preventdefault/

// 3) Mettre à jour l'attribut src de l'image contenue dans la div ayant pour id="container" en fonction de la valeur de l'attribut href du lien de la miniature cliquée.
// Exemple: si je clique sur la 3ème miniature alors l'attribut src sera égal à "images/grand-canyon.jpg" car c'est la valeur de l'attribut href du lien de la miniature cliquée.


/*** ETAPE 7 ***/
// Faire disparaitre la div ayant pour id="container" lorsque l'on clique n'importe où dans la div ayant pour id="container"
// >>> http://api.jquery.com/fadeOut/


/*** ETAPE 8  ***/
// Empêcher la disparition la div ayant pour id="container" si on clique sur l'image version aggrandie.
// Astuce: il est possible de savoir quel élément a été cliqué via la proprié "target" du paramètre "event" que l'on défini dans la fonction ayant pour rôle de fermer la div "container":https://api.jquery.com/event.target/
// Une autre méthode consiste à appliquer un événement lorsque l'on clique sur l'image dans la div "container" et stopper la propagation de l'événement quand on clique dessus et ainsi empêcher la fonction devant fermer la div "container" de se déclencher.
// https://api.jquery.com/event.stoppropagation/

/*** ETAPE 9 (BONUS) ***/
// Permettre le centrage automatique de l'image en taille aggrandie maximale dans la div "container" lors du chargement de la page mais aussi lors du redimentionement de la fenêtre

// Pour se faire il faut faire en sorte que la propriété css "line-height" de la div "container" soit exactement égale à la hauteur de la fenêtre.

// https://api.jquery.com/resize/

});