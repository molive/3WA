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
 
// Objets HTML:

var playerImg = ;   // Image relative au choix du joueur
var computerImg = ; // Image relative au choix du computer

var choicesImgs = ; // Liste des miniatures des choix cliquables 

var messageArea = ;  // Zone où le contenu de la variable message s'affichera

var victories = ;  // Zone où s'affiche le compteur de victoire
var looses = ; // Zone où s'affiche le compteur de défaites
var equalities = ;  // // Zone où s'affiche le compteur d'égalités






