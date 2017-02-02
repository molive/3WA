'use strict';   // Mode strict du JavaScript


var computer;
var choices = ['pierre','feuille','ciseaux'];
var player;
var random;
var message;  // Message qui sera affiché dans la div "message"
var status;  // egality, victory ou loose

// Objets HTML
var playerImg = document.getElementById('player');   // Image relative au choix du joueur
var computerImg = document.getElementById('computer');  // Image relative au choix du computer
var choicesImg = document.querySelectorAll('#choices img'); // Liste des miniatures des choix cliquables
var messageArea = document.getElementById('message');  // Zone où le contenu de la variable message s'affichera


function game(){

	player = this.getAttribute('data-choice');
	computer = choices[rand(0,2)];
	
	playerImg.setAttribute('src','img/'+player+'.png');
	computerImg.setAttribute('src','img/'+computer+'.png');	
	
	if(computer == player) {  // On vérifie si le CPU a joué la même chose que le joueur
	  
		message = 'Egalité!';
		status = 'egality';
	  
	}
	else  // S'il n'y a pas égalité on vérifie si le joueur a gagné ou perdu
	{
	  
		switch(computer){
			
		  case "pierre":  // cas de figure où l'ordinateur a joué pierre
			
		  if(player == "feuille") {
		  
			  message = 'Vous avez gagnez car la feuille enveloppe la pierre';
			  status = 'victory';
			
		  }
		  else  // Si le joueur n'a pas joué feuille c'est qu'il a joué ciseaux
		  {
			
			  message = 'Vous avez perdu car la pierre écrase les ciseaux';
			  status = 'loose';
		  }
		  
		  break;
			
		  case "feuille":  // cas de figure où l'ordinateur a joué feuille
			
		  if(player == "pierre") {
		  
			  message = 'Vous avez perdu car la feuille enveloppe la pierre';
			  status = 'loose';
			
		  }
		  else  // Si le joueur n'a pas joué pierre c'est qu'il a joué ciseaux
		  {
			
			  message = 'Vous avez gagné car les ciseaux découpe la feuille';
			  status = 'victory';
			
		  }
		  
		  break; 
			
		  case "ciseaux":  // cas de figure où l'ordinateur a joué ciseaux
			
		  if(player == "feuille") {
		  
			  message = 'Vous avez perdu car les ciseaux découpe la feuille';
			  status = 'loose';
			
		  }
		  else  // Si le joueur n'a pas joué feuille c'est qu'il a joué pierre
		  {
			
			  message = 'Vous avez gagnez car la pierre écrase les ciseaux';
			  status = 'victory';
			
		  }
		  
		  break;

			
		}
	  
	}
	
	messageArea.innerHTML = message;
	
	var classMessageArea;
	
	if(status == 'victory') classMessageArea = "alert alert-success";
	else if(status == 'loose') classMessageArea = "alert alert-danger";
	else classMessageArea = "alert alert-info";
	
	messageArea.className = classMessageArea;
	

}

choicesImg.forEach(function(choiceImg){


	choiceImg.addEventListener('click',game);


});
