'use strict';   // Mode strict du JavaScript



// Déclaration des variables.
var computer;
var choices = ['pierre','feuille','ciseaux'];
var player;
var win;  // NEW
var message; // NEW sert à afficher le détail du résultat (exemple: vous perdez car la pierre écrase les ciseaux)
var random;
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
var $playerImg =  // Image relative au choix du joueur
var $computerImg =  // Image relative au choix du computer
var $choices =  // Liste des miniatures des choix cliquables 
var $message =  // Zone où le contenu de la variable message s'affichera
var $historic =   //Lister les parties effectuées

// Scores
var $victories =   // Zone où s'affiche le nombre de victoire
var $looses =   //  Zone où s'affiche le nombre de défaite
var $equalities =   // Zone où s'affiche le nombre d'égalités