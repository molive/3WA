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


// Met à jour l'image relative au choix du joeur
function updatePlayerImg(){
	

}


// Sert à changer le contenu de la variable globale computer
function generateComputerChoice(){
	

}

// Met à jour l'image relative au choix du computer
function updateComputerImg(){
	
	
}

/*

fonction devant mettre à jour le contenu des variables globales win et message

*/
function updateWinAndMessage(){



}

/*

fonction devant mettre à jour le champs réservé au message dont l'ID est égale à message (exemple: "La pierre écrase le ciseau: vous gagnez!") et adapté le style d'affiche en fonctio nde l'état de la varibale win:

si win = true alors la classe doit être égale à "alert alert-success"
si win = false alors la classe doit être égale à "alert alert-danger"
si win = equality alors la classe doit être égale à "alert alert-info"

*/
function displayMessage(){

	
}

// Sert à mettre à jour les variables nbVictories, nbLooses et nbEqualities
function updateScores(){


}

// Met à jour l'historic des parties en listant les parties avec le numéro (partie n°1, partie n°2 etc.) et en reprenant le contenu de la variable message
function updateHistoric(){

	
	
}

$choices.click(function(){

	// On met à jour le choix du joueur, donc la variable global player
	// La variable player doit correspondre à l'ID de la miniature cliquée.
	player = 
	
	
	//On met à jour l'image relative au choix du joueur
	updatePlayerImg();
	
	// On génère le choix du computer (pierre, fueille ou ciseaux) 
	generateComputerChoice();
	
	// On met à jour l'image relative au choix du computer
	updateComputerImg();
	
	// On vérifie si le joueur a gagné et on génère le message associé
	/*
		la variable win doit prendre 3 valeurs possible: 
		true si le joeur gagne
		false si le joeur perd
		equality s'il y a égalité
	
	*/
	updateWinAndMessage();
	
	// On met à jour le message ainsi que sa classe
	displayMessage();
	
	// On met à jour les variables nbVictories, nbLooses et nbEqualities
	updateScores();
	
	// Mise à jour de l'historic
	updateHistoric()

});