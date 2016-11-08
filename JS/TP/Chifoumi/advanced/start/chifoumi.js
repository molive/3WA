'use strict';   // Mode strict du JavaScript

// Déclaration des variables.
var computer;
var choices = ['pierre','feuille','ciseaux'];
var player;
var images={
 
    pierre: "http://conception.website/3wa/images/pierre.png",
	feuille: "http://conception.website/3wa/images/feuille.png",
	ciseaux : "http://conception.website/3wa/images/ciseaux.png"
 
 };


var nbVictories = 0; // NEW
var nbLooses = 0; // NEW
var nbEqualities = 0; // NEW
var message;  // Message qui doit afficher "Egalité", "Victoire" ou "Perdu"
var classMessage;  // Classe de l'élément div où s'affiche le message ( victoire = "alert alert-success" , défaite = "alert alert-danger" , égalité = "alert alert-info"
 
// Objets Jquery:

var $playerImg = ;   // Image relative au choix du joueur
var $computerImg = ; // Image relative au choix du computer

var $choices = ; // Liste des miniatures des choix cliquables 

var $message = ;  // Zone où le contenu de la variable message s'affichera

var $victories = ;  // Zone où s'affiche le compteur de victoire
var $looses = ; // Zone où s'affiche le compteur de défaites
var $equalities = ;  // // Zone où s'affiche le compteur d'égalités


$choices.click(function(){


	// On met à jour le choix du joueur selon l'image sur laquelle il a cliqué (le choix est contenu dans l'attribut id)
	
	/**** CODER ICI ****/
	
	// On met à jour l'image relatif au choix du joueur
	
	/**** CODER ICI ****/
	
	// Choix du CPU (pierre, feuille ou ciseaux)
	
	/**** CODER ICI ****/
	
	// On met à jour l'image relatif au choix du CPU
	
	/**** CODER ICI ****/
	
	// On vérifie qui a gagné
	
	var victoryPierre = player == 'pierre' && computer == 'ciseaux';
	var victoryFeuille = player == 'feuille' && computer == 'pierre';
	var victoryCiseaux = player == 'ciseaux' && computer == 'feuille';
	
	if(computer == player){  // Il y a égalité
	
		// Mettre à jour la variable nbEqualities
		/**** CODER ICI ****/
		// Mettre à jour la variable classMessage 
		/**** CODER ICI ****/
		// Mettre à jour la varibale message
		/**** CODER ICI ****/
		// Afficher le contenu de la variable nbEqualities 
		/**** CODER ICI ****/
	
	}
	else if(victoryPierre || victoryFeuille || victoryCiseaux){  // Victoire du joueur
	
		// Mettre à jour la variable nbVictories
		/**** CODER ICI ****/
		// Mettre à jour la variable classMessage 
		/**** CODER ICI ****/
		// Mettre à jour la varibale message
		/**** CODER ICI ****/
		// Afficher le contenu de la variable nbVictories
		/**** CODER ICI ****/
	
	}
	else {  // Victoire du CPU
	
		// Mettre à jour la variable nbLooses
		/**** CODER ICI ****/
		// Mettre à jour la variable classMessage 
		/**** CODER ICI ****/
		// Mettre à jour la varibale message
		/**** CODER ICI ****/
		// Afficher le contenu de la variable nbLooses
		/**** CODER ICI ****/
	}
	
	
	
	// On met à jour le message ainsi que sa classe
	

});