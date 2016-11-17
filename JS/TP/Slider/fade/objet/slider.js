"use strict";

var slider = {

	slides : "",	
	currentSlide : null,
	autoPlay: false,
	timer : "",
	onProcess : false,
	init: function(slider){
		
		this.slides = this.slider.find('img');
		this.currentSlide = this.slides.first();
		this.timer = setInterval(this.gotoNextSlide.bind(this),1000);	
	
	},
	gotoPrevSlide: function(){
		
		if(this.currentSlide.prev().length != 1) return false;
		
		if(this.onProcess == false){
			
			this.onProcess = true;
			this.container.animate({'left':'+='+this.slideWidth},1000,function(){   
				
				this.currentSlide = this.currentSlide.prev(); 
				this.onProcess = false; 
				
			}.bind(this));
		
		}
	
	},
	gotoNextSlide: function(){
		
		
		if(this.currentSlide.next().length != 1) this.rewind();
		
		if(this.onProcess == false){
			
			this.onProcess = true;
			this.container.animate({'left':'-='+this.slideWidth},1000,function(){   
				
				this.currentSlide = this.currentSlide.next(); 
				this.onProcess = false; 
				
			}.bind(this));
		
		}
	
	},
	rewind : function(){
	
		var slides = this.slides.not(this.currentSlide);
		
		if(this.currentSlide.next().length != 1)
		{
			this.currentSlide.after(slides);	
		}
		else
		{
			this.currentSlide.before(slides);
		}
		this.container.css("left",0);
	}
	
}



var onProcess = false;
var autoPlay = false;
var $images = $('#slider img');
var $activeImage = $('#slider img:first');
//var currentSlide = $('#slider .slide:first');

var interval;

// Codes des touches du clavier.
const TOUCHE_ESPACE = 32;
const TOUCHE_GAUCHE = 37;
const TOUCHE_DROITE = 39;


function play(){
	
	if(autoPlay == true)
	interval = setInterval(gotoNextSlide, 2000);

}

function stop(){

	if(autoPlay == true)
	clearInterval(interval);

}

function generatePagination(){

	var nbSlides = $images.length;
	var html = '';
	
	for(var i = 1; i <= nbSlides; i++) {
	
		html += '<span>'+i+'</span>';
		
	
	}
	
	$('.pagination').html(html);
	
	
}

function updatePagination() {
	
	var $pagination = $('.pagination span');
	
	$pagination.removeClass('active');
	var index = $images.index($activeImage);
	console.log(index);
	$pagination.eq(index).addClass('active');

}



function gotoNextSlide() {

	var $nextImage = $activeImage.next();
	
	console.log($images.index($nextImage));
	
	
	if(onProcess == false){
		
		onProcess = true;
		$activeImage.fadeOut();
		
		if($nextImage.length != 1) {
		// if($images.index($nextImage) != -1)
		
			console.log($images.first().length);
			$activeImage = $images.first();
		
		}
		else
		{
		
			$activeImage = $nextImage;
		
		}
		
		
		$activeImage.fadeIn(function(){  onProcess = false; updatePagination();  });
		
	}

}


function gotoPrevSlide(){

	var $prevImage = $activeImage.prev();
	
	if(onProcess == false){
		
		onProcess = true;
		$activeImage.fadeOut();
		
		if($prevImage.length != 1) {
		
			$activeImage = $images.last();
		
		}
		else
		{

			$activeImage = $prevImage;
		
		}
		
		displayActiveImage()
		
	}

}

function displayActiveImage() {

	$activeImage.fadeIn(function(){  onProcess = false; updatePagination();  });

}

function gotoSlide(index){

	$activeImage.fadeOut();
	$activeImage = $images.eq(index);
	displayActiveImage();

}

jQuery('#slider').mouseover(function(){

	//hoverSlide = true;
	stop();

});


jQuery('#slider').mouseleave(function(){

	//hoverSlide = false;
	play();

});

jQuery('.prev').click(gotoPrevSlide);

jQuery('.next').click(gotoNextSlide);


generatePagination();

jQuery('.pagination span').click(function(){

	onProcess = true; 
	var index = $('.pagination span').index($(this));
	gotoSlide(index);
	
});


$('.play').click(function(){

	var $status = $(this).find('i');
	if($status.hasClass('fa-play')) {
		
		autoPlay = true;
		play();
		$status.removeClass();
		$status.addClass('fa fa-stop');
	
	}
	else
	{
	
		
		stop();
		autoPlay = false;
		$status.removeClass();
		$status.addClass('fa fa-play');
	
	}

});
   

$('.random').click(function(){

	var indexActiveImage = $images.index($activeImage);
	
	do  // Cette boucle sert à vérifier que l'image générer aléatorement n'est pas égale à celle déjà visible
	{
		var max = $images.length - 1;
		var random = rand(0,max);
		
	} while (random == indexActiveImage)
	
	
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
	}

});    
       

updatePagination();
