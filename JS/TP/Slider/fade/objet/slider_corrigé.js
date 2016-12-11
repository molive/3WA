"use strict";

var Slider = function($slider) {  // La variable slider est un objet jQuery

	this.slider = $slider;
	this.slides = this.slider.children();  // On récupère tout les enfants directs (donc toutes les images)	
	this.currentSlide = this.slides.first();
	this.isActive = false;
	this.timer = "";
	this.nbSlides = this.slides.length;

	
	
	this.init = function(){
		
		this.controls;	// Sera défini une fois la méthode generateControls déclenchée.
		this.generateControls();

		this.pagination = this.controls.find('.pagination');
		this.pages;  // Sera défini une fois la méthode generatePagination déclenchée.
	
		// On créé la pagination du slider:
		this.generatePagination();
		
		// Boutons:
		this.playButton = this.controls.find('.play');
		this.nextButton = this.controls.find('.next');
		this.prevButton = this.controls.find('.prev');
		this.randomButton = this.controls.find('.random');
		this.iconPlayButton = this.playButton.find('i');	

		//Gestionnaire d'événements:
		
		this.nextButton.click(this.gotoNextSlide.bind(this));
		this.prevButton.click(this.gotoPrevSlide.bind(this));
		this.playButton.click(this.autoPlay.bind(this));
		this.randomButton.click(this.random.bind(this));

		this.slider.mouseover(this.onMouseOver.bind(this));
		this.slider.mouseleave(this.onMouseLeave.bind(this));
	
		this.pages.click(this.clickOnPage.bind(this));
		
	};

	this.generateControls = function (){  // Sert à générer le panel de control du slider (boutons suivant, précédant, play/pause et aléatoire)
		var $controls = $('<div class="control">\
		<div class="pagination"></div>\
			<button class="prev"><i class="fa fa-backward"></i></button>\
			<button class="play"><i class="fa fa-play"></i></button>\
			<button class="next"><i class="fa fa-forward"></i></button>\
			<button class="random" title="Sélectionner une image aléatoire"><i class="fa fa-random"></i></button>\
		</div>\
		');
		
		this.controls = $controls;
		this.slider.after($controls);
	
	};
	
	this.generatePagination = function(){  // Sert à générer les éléments de pagination pour choisir une slide bien précise. Il doit y avoir autant d'éléments de pagination que de slides.

		var html = '';
		
		for(var i = 1; i <= this.nbSlides; i++) {
		
			html += '<span>'+i+'</span>';	
		
		}
		console.log(this.pagination);
		this.pagination.html(html);
		this.pages = this.pagination.find('span');
		console.log(this.pages);
		this.updatePagination();
		
	};
	
	this.updatePagination = function() {  // Sert à atffecter la classe active sur l'élément de pagination correspondant à la slide visible
		// Si par exemple la slide 2 est visible alors on applique la classe active sur le 2ème élément de pagination
		this.pages.removeClass('active');
		var index = this.currentSlide.index();  // On récupère l'index de la slide active. Si c'est la 2ème qui est visible alors l'index sera égal à 1
		this.pages.eq(index).addClass('active');

	};
	
	this.clickOnPage = function(e){  // Se déclenche quand on clique sur un élément de pagination
	
		this.gotoSlide($(e.target).index());
	
	}
	
	this.gotoNextSlide = function(){ // Se déclenche quand on clique sur le bouton NEXT
			
		var index = this.currentSlide.index() + 1;
		if(this.nbSlides == index) index = 0; 
		this.gotoSlide(index);
	
	};	
	
	this.gotoPrevSlide = function(){ // Se déclenche quand on clique sur le bouton PREV
			
		var index = this.currentSlide.index() - 1;
		if(index < 0) index = this.nbSlides - 1;
		this.gotoSlide(index);

	};	
	
	this.gotoSlide = function(index){
	
		var slideToShow = this.slides.eq(index);
		this.currentSlide.fadeOut(1000);
		slideToShow.fadeIn(1000);
		this.currentSlide = slideToShow;
		this.updatePagination();
	
	};
	
	this.onMouseOver = function(){  // Si la lecture automatique du slider est en cours alors on la met sur pause lorsque que le slider est survolé.
	
		if(this.isActive) this.stop();
	
	};
	
	this.onMouseLeave = function(){  // Si l'icone du bouton PLAY en mode "lecture" (symbole stop) alors on relance la lecture automatique du slider.
	
		if(this.iconPlayButton.hasClass('fa-stop')) this.play();
	
	};
	
	this.autoPlay = function(e){  // Se déclenche quand on clique sur le bouton PLAY
	

		this.iconPlayButton.removeClass(); 
		
		if(this.isActive == false){  // Si le slider est sur pause alors on lance la lecture automatique
			this.play();
			this.iconPlayButton.addClass('fa fa-stop');  // On change le symbole du bouton PLAY pour afficher l'icone STOP
		}
		else { // Si la lecture automatique du slider est active alors on met le slide sur pause.
			this.stop();
			this.iconPlayButton.addClass('fa fa-play'); // On change le symbole du bouton PLAY pour afficher l'icone PLAY
		}
	
		
	};
	
	this.random = function(){ // Se déclenche quand on clique sur le bouton RANDOM
	
		var currentActiveSlidePosition = this.currentSlide.index();

		do  // Cette boucle sert à vérifier que l'image générer aléatorement n'est pas égale à celle déjà visible
		{
			var max = this.nbSlides - 1;
			var random = rand(0,max);
			
		} while (random == currentActiveSlidePosition)
		
		this.gotoSlide(random);  // On affiche la slide défiinie aléatoirement
	
	};
	
	this.play = function(){  // Sert à lancer la lecture automatique du slider
	
		this.timer = setInterval(this.gotoNextSlide.bind(this),2000);	
		this.isActive = true;
	
	}
	
	this.stop = function(){ // Sert à mettre sur pause la lecture automatique du slider
	
		clearInterval(this.timer);
		this.isActive = false;
	
	}
	
	this.init();  // Une fois l'objet slider instancié on appelle sa méthode init pour créer les boutons de control, la pagination ainsi que les écouteurs d'événements.
	
	
}

var slider1 = new Slider($('#slider1'));  // On active le 1er slider

var slider2 = new Slider($('#slider2')); // On active le 2ème slider