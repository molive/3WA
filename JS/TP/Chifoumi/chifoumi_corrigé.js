'use strict';   // Mode strict du JavaScript



// Déclaration des variables.
var computer;
var choices = ['pierre','feuille','ciseaux'];
var player;
var win;  // NEW
var message; // NEW sert à afficher le détail du résultat (exemple: vous perdez car la pierre écrase les ciseaux)
var isOkToPlay;
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
var $playerImg = $('#player');   // Image relative au choix du joueur
var $computerImg = $('#computer'); // Image relative au choix du computer
var $choices = $('#choices img'); // Liste des miniatures des choix cliquables 
var $message = $('#message');  // Zone où le contenu de la variable message s'affichera
var $historic = $('#historic');  //Lister les partie effectuées

// Scores
var $victories = $('#victories');
var $looses = $('#looses');
var $equalities = $('#equalities');

function updatePlayerImg(){
	
	$playerImg.attr('src',images[player]);

}

function updateComputerImg(){
	
	$computerImg.attr('src',images[computer]);

}

function generateComputerChoice(){
	
	// On met à jour le choix du computer
	random = rand(0,2);  // fonction contenu dans le fichier utilities.js
	computer = choices[random];

}

function updateWinAndMessage(){

	if(computer == player)
	{
		message = "Vous avez choisi la même chose il y'a donc égalité";
		win = "egality";
		
	}
	else
	{
		// Le joueur et l'ordinateur n'ont pas choisi la même chose, la bataille commence !

		switch(computer)
		{
			case 'ciseaux':
			if(player == 'pierre')
			{
				message = "La pierre écrase le ciseau : vous gagnez !";
				win = true;
			}
			else // player == 'feuille'
			{
				message = "La feuille est découpée par le ciseau : vous perdez !";
				win = false;
			}
			break;

			case 'feuille':
			if(player == 'pierre')
			{
				message = "La pierre est enveloppée par la feuille : vous perdez !";
				win = false;
			}
			else // player == 'ciseau'
			{
				message = "Le ciseau découpe la feuille : vous gagnez !";
				win = true;
			}
			break;

			case 'pierre':
			if(player == 'feuille')
			{
				message ="La feuille enveloppe la pierre : vous gagnez !";
				win = true;
			}
			else // player == 'ciseau'
			{
				message = "Le ciseau est écrasé par la pierre : vous perdez !";
				win = false;
			}
			break;
		}
	}
}


function displayMessage(){

	// mise à jour de la classe:
	var classMessage;
	if(win === true) classMessage = 'success';
	else if(win === false) classMessage = 'danger';
	else classMessage = "info";
	$message.removeClass();
	$message.addClass('alert alert-'+classMessage);
	$message.text(message);
	
}


function updateScore(){
	console.log(win);
	if(win === true) {
	
		nbVictories++;
		$('#victories').text(nbVictories);
	
	}
	else if(win === false) {
	
		nbLooses++;
		$('#looses').text(nbLooses);
	
	}
	else
	{
	
		nbEqualities++;
		$('#equalities').text(nbEqualities);
	
	}

}

function updateHistoric(){

	nbParties++;

	var party = "Partie n°"+nbParties+": "+ message+"<hr>";
	
	$historic.prepend(party);
	
}

$choices.click(function(){

	// On met à jour le choix du joueur
	player = $(this).attr('id');
	//On met à jour l'image
	updatePlayerImg();
	
	generateComputerChoice();
	updateComputerImg();
	
	// On vérifie qui a gagné
	updateWinAndMessage();
	
	// On met à jour le message ainsi que sa classe
	displayMessage();
	
	// On met à jour le score
	updateScore();
	
	// Mise à jour de l'historic
	updateHistoric()

});