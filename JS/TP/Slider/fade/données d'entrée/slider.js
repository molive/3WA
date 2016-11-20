"use strict";
$(function(){

// NB: Dans ce TP quand on parlera de slide on fera régérence à une des 4 images contenu dans la div "slider".
// NB²: A titre d'exemple la formulation div "pagination" signifie "élément HTML div ayant pour id = "pagination".


/**** ETAPE 1 ****/
// Créer une variable $slides qui contiendra une collection d'objet jQuery relative aux images du slider contenues dans la div "slider".


/****  ETAPE 2 ****/
// Créer une variable $activeSlide qui contiendra un objet jQuery relatif à l'image visible du slider (au début ça sera la toute première image actuellement visible grace à la propriété style="display:block").

/**** ETAPE 3 ****/
// 1) Déclarer une variable $pages sans lui assigner de valeur.
// 2) Créer une fonction generatePagination dont le rôle sera de générer dynamiquement la pagnation en fonction du nombre de slide.
// Le code html à générer est celui-ci: <span class="active">1</span><span>2</span><span>3</span><span>4</span>
// Il devra ensuite être insérer dans la div "pagination".
// Une fois affiché il faudra mettre à jour le contenu de la variable $pages qui contiendra une collection d'objet jQuery relative aux  éléments span situés dans la div "pagination".

// 3) Appeler cette fonction pour générer la pagination et mettre à jour la variable $pages.


/**** ETAPE 4 ****/
/* Créer une fonction gotoSlide qui prend en paramètre le numéro de la slide a afficher.
 Exemple d'utilisation:
 gotoSlide(1)  // devra afficher la slide n°1 (la-haut.jpg) et masquer celle actuelement visible
 gotoSlide(3)  // devra afficher la slide n°3 (ville.jpg) et masquer celle actuelement visible 
 // Caractéristiques:
 // La slide visible devra disparaitre avec un effet de fondu en même temps que l'apparition de la slide voulue.
 // Astuce: Utiliser respectivement les méthodes fadeOut et fadeIn.
 // Il faudra aussi mettre à jour la pagination en appliquant la classe "active" sur la bonne span de la div "pagination"
 // Exemple: si c'est la deuxième slide qui est visible alors l'état de la pagination sera ainsi:
 // <div id="pagination"><span>1</span><span class="active">2</span><span>3</span><span>4</span></div>
 // Astuce: Pour une meilleurs organisation du code vous pouvez créer un fonction updatePagination() qui aura ce rôle et l'appelé à l'intérieur de la fonction gotoSlide une fois la slide visible.
 
 */
 
/**** ETAPE 5 ****/
// Créer une fonction gotoNextSlide() qui aura pour but d'afficher la slide suivante.

// Astuce: il faudra invoquer la fonction gotoSlide dans cette fonction.
// Astuce2: il faudra récupérer la position de la slide active grace à la méthode index() http://api.jquery.com/index/ (qui a le même fonctionnement que la méthode indexof en JS pur)
// console.log($slides.index($activeSlide))  // affichera 0, 1 , 2 ou 3
// IMPORTANT: Si c'est la dernière slide qui est visible (montagnes.jpg) alors il faudra afficher la première slide (la-haut.jpg).


/**** ETAPE 6 ****/
// Créer une fonction gotoPrevSlide() qui aura pour but d'afficher la slide précédente.

// IMPORTANT: Si c'est la première slide qui est visible (la-haut.jpg) alors il faudra afficher la dernière slide (montagnes.jpg).

/**** ETAPE 7 ****/

// 1) Faire en sorte que lorsque l'on clique sur le bouton suivant (#prev) la fonction gotoNextSlide se déclenche.
// 2) Faire en sorte que lorsque l'on clique sur le bouton précédent (#prev) la fonction gotoPrevSlide se déclenche.

/**** ETAPE 8 ****/
// 1) Faire en sorte que lorsque l'on clique sur un numéro de la pagination cela affiche la slide correspondante.


/**** ETAPE 9 ****/

// 1) Faire en sorte que lorsque l'on clique sur la flèche droite du clavier la fonction gotoNextSlide se déclenche.
// 2) Faire en sorte que lorsque l'on clique sur le flèche gauche du clavier la fonction gotoPrevSlide se déclenche
// Astuce: utiliser la méthode keyup sur l'objet jQuery $(document) : http://api.jquery.com/keyup/
// Dans le paramètre event de la fonction qui s'exécutera, il est possible de récupérer le code de la touche tapée  via event.keyCode
// La touche gauche renvera 37 et la touche droite 39


/**** ETAPE 10 ****/
// Faire en sorte que lorsque l'on clique sur le bouton random (#random), une slide s'affiche aléatoirement.
// Astuce: utiliser la fonction rand() contenu de le fichier utilities.js
// /!\ Veuiller à ce que l'entier aléatoire ne soit pas égale  celui de la slide actuellement visible ;)


/**** ETAPE 11 ****/
// Créer une fonction play() qui une fois appelée déclenchera un défilement automatique des slides toutes les 3s
// Déclarer une variable globale autoPlay qui sera initialement égale à false.
// Déclarer une variable globale interval qui sera initialement vide.
// NB: se référer au TP sur le timer pour se souvenir de l'intéret de ces 2 variables.
// Astuce: utiliser la méthode setInterval de l'objet window: https://developer.mozilla.org/fr/docs/Web/API/WindowTimers/setInterval
// Lorsque la fonction play() sera appelé la varibale interval devra prendre comme valeur setInterval(gotoNextSlide, 2000); ce qui aura pour effet de déclencher la lecture automatique du slider. La variable globale autoPlay devra prendre la valeur true


/**** ETAPE 12 ****/
// Créer une fonction stop() qui stopera la lecture automatique du slider
// Astuce: utiliser https://developer.mozilla.org/fr/docs/Web/API/WindowTimers/clearInterval
// Lorsque la fonction stop() sera appelé il faudra penser à passer la valeur autoPlay à false

/**** ETAPE 13 ****/
// 1) Faire en sorte que la fonction play se déclenche lorsqu'on clique sur le bouton play (#play) dans le cas où le slider est sur pause.
// L'élement html <i> contenu dans ce bouton devra prendre la classe "fa fa-stop" pour indiquer que la lecture automatique est en cours.

// 2) Faire en sorte que la fonction stop se déclenche lorsqu'on clique sur le bouton play (#play) et que le slider est en lecture automatique.
// L'élement html <i> contenu dans ce bouton devra prendre la classe "fa fa-play" pour indiquer que la lecture automatique est sur pause.

/**** ETAPE 14  ****/
// Faire sorte que le slider se met sur PLAY ou PAUSE si on tape sur la touche ESPACE du clavier
// Astuce: utiliser la méthode trigger: api.jquery.com/trigger/
// $('#play').trigger('click');  // simulera l'action d'un clic sur le bouton play

/**** ETAPE 15 ****/
// Faire en sorte que le slide se mette sur pause quand on survole le slider

/**** ETAPE 16 ****/
// Faire en sorte que la lecture automatique du slider reprenne quand on désurvole le slider UNIQUEMENT si la lecture automatique du slider est active
// Astuce: créer une variable globale "preventFormPlay" qui sera égale à true ou false. Si lors du désurvolage du slider la variable preventFormPlay est à false alors on empêchera la ficntion play de se déclencher.

/*** ETAPE 17 (BONUS) ****/
// Refaire cet exercice mais en procédant à un défilement des slides horizontalement au lieu de l'effet fadeIn / fadeOut (appeler le prof pour voir les différente stratégies de mise en oeuvre possibles).

});