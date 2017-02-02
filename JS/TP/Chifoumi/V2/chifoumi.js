'use strict';   // Mode strict du JavaScript

var player; // Choix du joeur (pierre, feuille ou ciseaux)
var computer; // Choix de l'ordinateur (pierre, feuille ou ciseaux)
var random; // entier aléatoire compris entre 0 et 2 pour déterminer le choix de l'ordinateur.
var choices = ['pierre','feuille','ciseaux'];
var message;  // Message qui sera affiché dans la div "message"


/* 1) Déclarer une variable playerImg qui contiendra un objet HTML relatif à l'image du choix du jouer (balise img ayant pour id = "player").
      Pour se faire utiliser la méthode getElementById de l'objet document: https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById */

/* 2) Déclarer une variable computerImg qui contiendra un objet HTML relatif à l'image du choix de l'ordinateur (balise img ayant pour id = "computer"). */

/* 3) Déclarer une variable choicesImg qui contiendra une collection d'objets HTML relatives aux 3 images cliquables pour faire son choix
      (images contenu dans la div ayant pour id "choices".
	  pour se faire utiliser la méthode querySelectorAll de l'objet document: https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll */
	  
/* 4) Déclarer une variable messageArea qui contiendra un objet HTML relatif à la div ayant pour id = "message".

	  	  
// NB Pour les étapes 1, 2, 3 et 4 vérifiez en console que vous avez bien "capturé" les bons éléments html en faisant par exemple console.log(choicesImg).


/* 5) Appliquer un écouteur d'événement qui surveillera les clics effectués sur les 3 images permettant au joeur de faire son choix.
      
	  Rappel: ces 3 images sont contenues dans la variable choicesImg.
	  
	  Pour se faire utiliser la méthode addEventListener applicable sur un objet HTML: https://openclassrooms.com/courses/dynamisez-vos-sites-web-avec-javascript/les-evenements-24#/id/r-1924970
	  
	  NB: Dans la documentation ci-dessus ne vous souciez que des 2 premiers paramètres de la méthode addEventListener:
	  element.addEventListener({{ déclencheur }}, {{ fonction à éxécuter }});
	  Détails:
	  - element >>> est un objet HTML (pouvant potentiellement être la variable computerImg par exemple).
	  - {{ déclencheur }} >>> est l'interaction effectué sur l'objet HTML: peut être égal à click, mouseover, mouseout etc. (Vori liste complète: https://openclassrooms.com/courses/dynamisez-vos-sites-web-avec-javascript/les-evenements-24#/id/r-1924846)
	  - {{ fonction à éxécuter }} >>> Il s'agit d'une fonction à exécuter lorsque l'événement surveiller se produit (exemple: le joueur clique sur une des 3 images pour lancer une partie).
	    NB: Cette fonction peut être une fonction anonyme ou une fonction déclarée ailleur dans le code.
		
	  Astuce 1: Déclarer une fonction game qui ne contiendra pour le moment aucune ligne de code mais qui permettra ultérieurement d'exécuter le code d'une partie de chifoumi.
	  Astuce 2: Faire une boucle pour parcourir la collection d'objet HTML contenue dans choicesImg (qui se résume en fait à un tableu contenant des objets HTML) 
	            afin d'appliquer l'écouteur d'écouteur au clic qui déclenchera la fonction game lorsqu'une des 3 miniatures sera cliquée.

/* 6) Contenue de la fonction "game"

   6.1) Récupérer le choix du joeur qu'on stockera dans la variable player.
        Pour se faire il faudra récupérer la valeur de l'attribut data-choice de l'image cliquée. 
		Vous devrez utuliser la méthode getAttribute sur l'objet HTML concernant l'image cliquée:
		https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
		
		Astuce: 
		Pour cibler précisément l'image qui a été cliqué vous pouvez utiliser le mot clé this au sein de la fonction game
		
		Exemple:
		<button id="clickme" title="Je suis un bouton">Cliquez ICI</button>
		<script>
		var button = document.getElementById('clickme');  // On capture le bouton via son id
		
		function codeToExecute(){
		
			var titleValue = this.getAttribute('title'); // this fait référence au bouton cliqué , la méthode getAttribute permet de récupérer la valeur d'un attribut, celle de "title" en l'occurence.
			alert(titleValue);  // affiche "Je suis un bouton"
		
		}
		
		button.addEventListener('click',codeToExecute);  // La fonction codeToExecute se déclenchera lorsque le bouton sera cliqué
		</script>
	
	6.2) Récupérer le choix de l'ordinateur qu'on stockera dans la variable computer. 
	     Procéder de la même façon que dans la V1 sauf que vous pouvez cette fois ci utiliser la fonction située dans le fichier utilities.js ;)
	
	6.3) Afficher le choix du joueur:
	     Pour se faire il faudra modifier dynamiquement l'attribut de l'image relative au choix du joueur (stockée dans la variable playerImg).
		 Utiliser la méthode setAttribute sur le bon objet HTML: https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute
		 
	6.4) Faire de même pour afficher le choix de l'ordinateur.

    6.5) Déterminer s'il y a égalité, victoire ou défaite du joueur. Le code a utilsier est exactement le même que celui fait dans la V1

	6.6) Afficher le contenu de la variable message à l'interieur de la div ayant pour id="message"
	     Pour se faire modifier la propriété innerHTML de l'objet HTML messageArea https://developer.mozilla.org/fr/docs/Web/API/Element/innertHTML
		 
	6.7) Changer dynamiquement la classe de la div contenant le message en fonction de l'issu de la partie:
	     Egalité: appliquer la classe "alert alert-info"
		 Victoire: appliquer la classe "alert alert-success"
		 Défaite: appliquer la classe "alert alert-danger"
		 
		 Aide:
		 https://developer.mozilla.org/fr/docs/Web/API/Element/className
		 ou 
		 https://developer.mozilla.org/fr/docs/Web/API/Element/classList
	
		
BONUS:
Créer des compteur de score comptabilisant le nombre de victoire, défaite ou égalité
Créer un historique de partie
	  