'use strict';   // Mode strict du JavaScript

var player; // Choix du joueur (pierre, feuille ou ciseaux)
var computer; // Choix de l'ordinateur (pierre, feuille ou ciseaux)
var random; // entier aléatoire compris entre 0 et 2 pour déterminer le choix de l'ordinateur.
var availableChoices = ['pierre','feuille','ciseaux'];  // Cette variable servira à convertir la valeur de la variable random en pierre, feuille ou ciseaux
var message;  // Message qui sera affiché dans la div "message"

var classMessageArea;  // Contiendra "info" si il y a égalité, "success" si le joueur gagne ou  "danger" si le joueur perd. Le but final étant d'affecter à la div avec l'id "message" la classe "alert alert-info" ou "alert alert-success" ou "alert alert-danger" selon l'issu de la partie.
// var oldClassMessageArea = "alert-info";  // Variable necessaire dans le cas où on utilise la propriété classList ou lieu de className pour mettre à jour la classe de la div "message"

var playerImg = document.getElementById('player');  // playerImg contient cet objet HTML:	<img id="player" src="img/pierre.png">  (image relative au choix du joueur)
// var playerImg = document.querySelector('#player'); // equivalent ligne ci-dessus (https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector)
var computerImg = document.getElementById('computer');  // computer Img contient cet objet HTML: <img id="computer" class="reverse" src="img/pierre.png"> (image relative au choix de l'ordinateur)
var messageArea = document.getElementById('message');  /* 	<div class="alert alert-info" id="message">
	                                                               Cliquez sur une des 3 images ci-dessus pour commencer une partie.
	                                                          </div>  (zone où s'affichera le contenu de la variable message)   */ 

var choicesImg = document.querySelectorAll('#choices img');  // On capture less 3 images situées dans la div ayant pour id choices
// La variable choicesImg est un tableau contenant 3 objets HTML: [img,img,img] (collection d'objets HTML)  img étant une des 3 images clicable pour faire son choix

// Fonction contenant le code de notre jeu et qui s'exécutera à chaque fois que le joueur cliquera sur une des 3 images de la div "choices":
function game(){
    
    // On determine le choix du joueur selon l'image qu'il a cliqué:
	player = this.getAttribute('data-choice');  // SERA SOIT ÉGAL À pierre feuille ou ciseaux
	//player = this.dataset.choice;  // idem ligne ci-dessus (https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/dataset)
	// NB: la propriété dataset renvoi un tableau associatif listant tous les attributs de l'élément html préfixé de "data-" (exemple "data-choice")
    // Le mot this fait référence à l'image qui a été cliquée
    
    // On définit le choix de l'ordinateur
    random = rand(0,2);
    computer = availableChoices[random];  // La fontion rand est définie dans le fichier utilities.js
    // computer = availableChoices[rand(0,2)];  // factorisation des 2 lignes de code précédentes
  
    // On actualise l'image relative au choix du joueur:
    playerImg.setAttribute('src','img/'+player+'.png');
    // Le premier argument de la méthode setAttribute est l'attribut dont on souhaite modifier la valeur.
    // Le second argument est la valeur qu'on souhaite lui assigner
  
    // On actualise l'image relative au choix de l'ordinateur
    computerImg.setAttribute('src','img/'+computer+'.png');
  
    // On détermine s'il y a égalité ou si le joueur a gagné ou perdu:
  
    if(computer == player) {  // On vérifie si le CPU a joué la même chose que le joueur

        message = 'Egalité!';
        classMessageArea = "info"; // Permettra de faire en sorte que ma div "message" où s'affichera le contenu de la variable message ai la classe "alert alert-info"

    }
    else  // S'il n'y a pas égalité on vérifie si le joueur a gagné ou perdu
    {

        switch(computer){

          case "pierre":  // cas de figure où l'ordinateur a joué pierre

          if(player == "feuille") {

              message = 'Vous avez gagnez car la feuille enveloppe la pierre';
              classMessageArea = "success"; // Permettra de faire en sorte que ma div "message" où s'affichera le contenu de la variable message ai la classe "alert alert-success"

          }
          else  // Si le joueur n'a pas joué feuille c'est qu'il a joué ciseaux
          {

              message = 'Vous avez perdu car la pierre écrase les ciseaux';
              classMessageArea = "danger"; // Permettra de faire en sorte que ma div "message" où s'affichera le contenu de la variable message ai la classe "alert alert-danger"

          }

          break;

          case "feuille":  // cas de figure où l'ordinateur a joué feuille

          if(player == "pierre") {

              message = 'Vous avez perdu car la feuille enveloppe la pierre';
              classMessageArea = "danger";

          }
          else  // Si le joueur n'a pas joué pierre c'est qu'il a joué ciseaux
          {

              message = 'Vous avez gagné car les ciseaux découpe la feuille';
              classMessageArea = "success";

          }

          break; 

          case "ciseaux":  // cas de figure où l'ordinateur a joué ciseaux

          if(player == "feuille") {

              message = 'Vous avez perdu car les ciseaux découpe la feuille';
              classMessageArea = "danger";

          }
          else  // Si le joueur n'a pas joué feuille c'est qu'il a joué pierre
          {

              message = 'Vous avez gagnez car la pierre écrase les ciseaux';
              classMessageArea = "success";

          }

          break;

        }

    }
    
    // On va afficher le contenu de la variable message à l'intérieur de la div ayant pour id "message"
    messageArea.innerHTML = message;
    // On va modifier la class de la div "message" selon l'issu de la partie:
    messageArea.className = "alert alert-"+classMessageArea;
    
    // Code qu'il aurai fallut taper si on avait utiliser la propriété classList au lieu de classname de notre objet HTML messageArea:
    // https://developer.mozilla.org/fr/docs/Web/API/Element/classList
    /* 
    classMessageArea = "alert-"+classMessageArea;
    if(classMessageArea != oldClassMessageArea){
       
        messageArea.classList.remove(oldClassMessageArea);  // On supprime l'ancienne classe
        messageArea.classList.add(classMessageArea);  // On ajoute la nouvelle classe
        oldClassMessageArea = classMessageArea;  // On remplace l'ancienne classe par la nouvelle
        
    }
    
    */
  
}

// On applique l'écouteur d'événement sur les 3 images de la div "choices" qui déclenchera la fonction "game" lorsqu'on cliquera sur l'une d'elles:

// façon n°1 (déconseillée car généralement on ne connait pas à l'avance la quantité d'éléments contenu dans une collection d'objets HTML):
/*
choicesImg[0].addEventListener('click',game);
choicesImg[1].addEventListener('click',game);
choicesImg[3].addEventListener('click',game);
*/

// façon n°2 avec la structure de contrôle for:
/*
for(let i = 0, nbChoices = choicesImg.length; i < nbChoices ; i++){
  
  	choicesImg[i].addEventListener('click',game);
  
}
*/
/*  // façon n°3 avec la méthode forEach:
choicesImg.forEach(function(imgChoice){

		imgChoice.addEventListener('click',game);

});*/

// façon n°4 (la meilleur) avec la structure de contôle for...of: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for...of
for(let choiceImg of choicesImg){  
    // choiceImg fait référence à chaque entrée du tableau choicesImg  (sera d'abord égal à choicesImg[0] puis choicesImg[1] et pour finir choicesImg[2]).
  	choiceImg.addEventListener('click',game);

}