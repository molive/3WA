"use strict";

var Slider = function(slider) {

	this.slider = slider;
	this.slides;	
	this.currentSlide = null;
	this.isActive = false,
	this.timer = "",
	this.controls;
	this.nbSlides;
	this.pages;
	this.pagination;
	
	this.init = function(){
		
		this.slides = this.slider.find('img');
		this.nbSlides = this.slides.length;
		this.currentSlide = this.slides.first();
		this.controls = slider.next();
		this.pagination = this.controls.find('.pagination');
	    
		this.playButton = this.controls.find('.play i');
		
		this.generatePagination();
		
		//Gestionnaire d'événements:
		this.controls.find('.next').click(this.gotoNextSlide.bind(this));
		this.controls.find('.prev').click(this.gotoPrevSlide.bind(this));
		this.controls.find('.play').click(this.autoPlay.bind(this));
		this.controls.find('.random').click(this.random.bind(this));	
		
		this.pages.click(this.clickOnPage.bind(this));
	
	
	};


	this.updatePagination = function() {
		
		this.pages.removeClass('active');
		var index = this.currentSlide.index();
		this.pages.eq(index).addClass('active');

	};
	
	this.generatePagination = function(){


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

	this.clickOnPage = function(e){
	
		this.gotoSlide($(e.target).index());
	
	}
	
	this.gotoNextSlide = function(){
			
		var index = this.currentSlide.index() + 1;
		if(this.nbSlides == index) index = 0;
		this.gotoSlide(index);
	
	};	
	
	this.gotoPrevSlide = function(){
			
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
	
	this.autoPlay = function(e){
		
		console.log(this.isActive);
		this.playButton.removeClass();
		if(this.isActive == false){ 
			this.play();
			this.playButton.addClass('fa fa-stop');
		}
		else {
			this.stop();
			this.playButton.addClass('fa fa-play');
		}
		// changement de class
		
		
		
	
	};
	
	this.random = function(){
	
		var currentActiveSlidePosition = this.currentSlide.index();

		do  // Cette boucle sert à vérifier que l'image générer aléatorement n'est pas égale à celle déjà visible
		{
			var max = this.nbSlides - 1;
			var random = rand(0,max);
			
		} while (random == currentActiveSlidePosition)
		
		this.gotoSlide(random);
	
	};
	
	this.play = function(){
	
		this.timer = setInterval(this.gotoNextSlide.bind(this),2000);	
		this.isActive = true;
	
	}
	
	this.stop = function(){
	
		clearInterval(this.timer);
		this.isActive = false;
	
	}
	
}

var slider = new Slider($('#slider'));
slider.init();

var slider2 = new Slider($('#slider2'));
slider2.init();