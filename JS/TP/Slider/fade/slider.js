"use strict";

var preventFromPlay;
var autoPlay = false;
var $slider = $('#slider');
var $slides = $('#slider img');
// var $slides = $('#slide').find('img');
var $activeSlide = $('#slider img:first');
var $pages;
//var currentSlide = $('#slider .slide:first');

var interval;

// Codes des touches du clavier.
const TOUCHE_ESPACE = 32;
const TOUCHE_GAUCHE = 37;
const TOUCHE_DROITE = 39;


function play(){
	
	autoPlay = true;
	interval = setInterval(gotoNextSlide, 2000);

}

function stop(){

	autoPlay = false;
	clearInterval(interval);

}

function generatePagination(){

	var nbSlides = $slides.length;
	var html = '';
	
	for(var i = 1; i <= nbSlides; i++) {
	
		html += '<span>'+i+'</span>';	
	
	}
	
	$('#pagination').html(html);
	$pages = $('#pagination span');
	
}

function updatePagination() {
	
	$pages.removeClass('active');
	var index = $slides.index($activeSlide);
	$pages.eq(index).addClass('active');

}



function gotoNextSlide() {
	
	var currentActiveSlidePosition = $slides.index($activeSlide) + 1;
	var slideToDisplay = currentActiveSlidePosition + 1;
	
	if(currentActiveSlidePosition == $slides.length){
	
		slideToDisplay = 1;
	
	}
	
	gotoSlide(slideToDisplay);
	
}


function gotoPrevSlide(){

	var currentActiveSlidePosition = $slides.index($activeSlide) + 1;
	var slideToDisplay = currentActiveSlidePosition - 1;
	
	if(currentActiveSlidePosition == 1){
	
		slideToDisplay = $slides.length;
	
	}
	
	gotoSlide(slideToDisplay);

}


function gotoSlide(slideToDisplay){

	var index = slideToDisplay - 1;
	$activeSlide.fadeOut(1000);
	$slides.eq(index).fadeIn(1000);
	$activeSlide = $slides.eq(index);
	updatePagination();
	
}

jQuery('#slider').mouseover(function(){

	if(autoPlay){
		preventFromPlay = false;
		stop();
	}
	else
	{
	
		preventFromPlay = true;
	
	}

});


$slider.mouseleave(function(){

	if(!preventFromPlay){
		play();
	}

});

$('#prev').click(gotoPrevSlide);

$('#next').click(gotoNextSlide);


generatePagination();

$pages.click(function(){

	onProcess = true; 
	var index = $('.pagination span').index($(this));
	gotoSlide(index);
	
});


$('#play').click(function(){

	var $status = $(this).find('i');
	if(!autoPlay) {

		play();
		$status.removeClass().addClass('fa fa-stop');
	}
	else
	{
	
		stop();
		$status.removeClass().addClass('fa fa-play');
	}

});
   

$('#random').click(function(){

	var currentActiveSlidePosition = $slides.index($activeSlide) + 1;

	do  // Cette boucle sert à vérifier que l'image générer aléatorement n'est pas égale à celle déjà visible
	{
		var max = $slides.length;
		var random = rand(1,max);
		
	} while (random == currentActiveSlidePosition)
	
	
	gotoSlide(random);

});
   
   
$(document).keyup(function(event){

	switch(event.keyCode)
    {
        case TOUCHE_DROITE:
        // On passe à la slide suivante.
        gotoNextSlide();
        break;

        case TOUCHE_GAUCHE:
        // On passe à la slide précédente.
        gotoPrevSlide();
        break;
		
        case TOUCHE_ESPACE:
        // On passe à la slide précédente.
        $('#play').trigger('click');
        break;	
		
	}

});    
       

updatePagination();
