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

//Compteurs

var nbVictories = 0; // NEW
var nbLooses = 0; // NEW
var nbEqualities = 0; // NEW
var nbParties = 0; // NEW
 
// Jquery
var $playerImg = $('#player');   // Image relative au choix du joueur
var $computerImg = $('#computer'); // Image relative au choix du computer
var $choices = $('#choices img'); // Liste des miniatures des choix cliquables 
var $message = $('#message');  // Zone où le contenu de la variable message s'affichera

// Scores
var $victories = $('#victories');
var $looses = $('#looses');
var $equalities = $('#equalities');

$choices.click(function(){

	var message;
	var classMessage;

	// On met à jour le choix du joueur
	player = $(this).attr('id');
	//On met à jour l'image
	$playerImg.attr('src',images[player]);
	
	//Choix du CPU
	var random = rand(0,2);  // fonction contenu dans le fichier utilities.js
	computer = choices[random];
	
	// MAJ image CPU
	$computerImg.attr('src',images[computer]);
	
	// On vérifie qui a gagné
	
	var victoryPierre = player == 'pierre' && computer == 'ciseaux';
	var victoryFeuille = player == 'feuille' && computer == 'pierre';
	var victoryCiseaux = player == 'ciseaux' && computer == 'feuille';
	
	if(computer == player){  // Il y a égalité
	
		nbEqualities++;
		classMessage = 'alert alert-info';
		message = 'Vous avez fait égalité!';
		$equalities.text(nbEqualities);
	
	}
	else if(victoryPierre || victoryFeuille || victoryCiseaux){  // Victoire du joueur
	
		nbVictories++;
		classMessage = 'alert alert-success';
		message = 'Vous avez gagné!';
		$victories.text(nbVictories);
	
	}
	else {  // Victoire du CPU
	
		nbLooses++;
		classMessage = 'alert alert-danger';
		message = 'Vous avez perdu!';
		$looses.text(nbLooses);
	
	}
	
	nbParties++;
	
	// On met à jour le message ainsi que sa classe
	$message.removeClass();
	$message.text(message);
	$message.addClass(classMessage);
	


});