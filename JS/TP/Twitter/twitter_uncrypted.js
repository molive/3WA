"use strict";
$(function(){

	var $form = $('#twitterForm');  // On créé un objet jQuery qui contient notre formulaire
	var $textareaTweet = $('#tweet');  // On place dans une variable l'objet jQuery contenant notre textaera servant à écrire les tweets
	var $charCounterArea = $('#charCounter');   // doit contenir l'élément html <span id="charCounter">140</span>
	var $thread = $('#thread');   // contient la div "thread" où s'affichent les tweets

	  
	$textareaTweet.on('keyup,  keypress',function(){
	   
		var tweet = $(this).val();   // je récupère le contenu du textarea (une chaine de caractères);
		var nbChars = tweet.length;  // on calcule le nombre caractère saisi
		// var nbChars = $(this).val().length;
		var charsRemaining = 140 - nbChars; // on calcule le nombre de caractères restants
		// on veut maintenant actualiser le contenu de l'élement html : <span id="charCounter">140</span>

	    charCounterArea.text(charsRemaining);  // la méthode .text permet de rempalcer le contenu par du texte (mais pas du code html)
		
	});
	  
	// Suppresion des tweets lorsque l'on clique sur le bouton supprimer 
	$thread.on('click','button.delete',function(){
		
			$(this).parent().fadeTo("slow",0.3).slideUp(1000,function(){ $(this).remove(); });
		
	});
	  
	  
	$form.submit(function(e){
	   
	   e.preventDefault(); // on stop la redirection
	   // Pour empecher l'envois de plusieurs e
	   
	   var tweetValue = $textareaTweet.val();

		if(tweetValue.length > 140) {
		
		  alert('Vous avez tapé trop de caractères');
		  textareaTweet.addClass('error');
		  
		}
		
	    else if(tweetValue != '') {
		  	
			var tweet = $('<div class="tweet">\
			<img class="avatar" src="'+userData.avatar+'">\
			<div class="wrapper">\
			<strong>'+userData.firstname+' '+userData.lastname+'</strong> @'+userData.username+'<p>'+$textareaTweet.val()+'</p>\
			</div><button class="delete btn btn-danger btn-xs">Supprimer X</button>\
			<hr></div>');
			 
			// On veut ajouter le tweet posté dans notre div aillant l'id ="thread" en tête de liste
			$thread.prepend($tweet);
			$tweet.slideDown(1000);  // on selectionne le dernier tweet posté et on l'affiche avec la méthode slideDown
			$form.trigger('reset');  // On réinitialise le formulaire
			charCounterArea.text(140); // On remet le compteur de caractères restant à 140 caractères
			textareaTweet.removeClass('error');
		
		} 	 
		
	});

});