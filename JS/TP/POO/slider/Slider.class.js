var Slider = function($slider) {  // La variable slider est un objet jQuery (div contenant les slides (balises img)

	this.slider = $slider;
	this.slides = this.slider.children();  // On récupère tout les enfants directs (donc toutes les images)	
	this.nbSlides = this.slides.length;  // Contient le nombre total de slides
	this.currentSlide = this.slides.first();  // Par défaut c'est la premère slide qui est visible
	this.isActive = false;  // Signifie que la lecture automùatique est inactive pour le moment
	this.timer = "";  // Cette propriété est destinée a contenir l'interval qui exécutera la méthode "gotoNextSlide" toute les 2 secondes
	
	// Propriétés relatives à la palette de contrôle du slider
	
	this.controls;	// Sera défini une fois la méthode generateControls déclenchée.
	this.playButton; // Idem
	this.nextButton; // Idem
	this.prevButton; // Idem
	this.randomButton; // Idem
	this.iconPlayButton; // Idem et contiendra l'élément html i avec l'icone play / stop qui sera modifiée ultérieument selon si le slider sera sur play ou pause.
	
	this.pages;  // Sera défini une fois la méthode generatePagination déclenchée. (contiendra les éléments de pagination span contenu dans la div .pagination
	
	this.init();  // Une fois l'objet slider instancié on appelle sa méthode init pour créer les boutons de contrôle, la pagination ainsi que les écouteurs d'événements.

}

Slider.prototype.generateControls = function (){  // Sert à générer le panel de control du slider (boutons suivant, précédant, play/pause et aléatoire)
		var $controls = $('<div class="control">\
		<div class="pagination"></div>\
			<button class="prev"><i class="fa fa-backward"></i></button>\
			<button class="play"><i class="fa fa-play"></i></button>\
			<button class="next"><i class="fa fa-forward"></i></button>\
			<button class="random" title="Sélectionner une image aléatoire"><i class="fa fa-random"></i></button>\
		</div>\
		');
		
		this.controls = $controls;
		
		// On stoque dans les proriétés de l'objet les différents éléments de la palette de contrôle (boutons play, précédent etc.)
		this.playButton = this.controls.find('.play');
		this.nextButton = this.controls.find('.next');
		this.prevButton = this.controls.find('.prev');
		this.randomButton = this.controls.find('.random');
		this.iconPlayButton = this.playButton.find('i');	
		
		this.slider.after($controls);  // on ajoute la palette de contrôle juste en dessous de la div du slider.
	
}
	
Slider.prototype.generatePagination = function(){  // Sert à générer les éléments de pagination pour choisir une slide bien précise. Il doit y avoir autant d'éléments de pagination que de slides.

		var htmlPages = '';
		
		for(var i = 1; i <= this.nbSlides; i++) {
		
			htmlPages += '<span>'+i+'</span>';	
		
		}
		
		this.controls.find('.pagination').html(htmlPages);  
		
		this.pages = this.controls.find('.pagination span');  // On stocke dans la propriété pages les éléments de paginations pour pouvoir ultérieurement interagir dessus lors du clic.

		this.updatePagination();  // Permettra d'attribuer la classe "active" sur l'élément de pagination correspondant à la slide visible.
		
}
	
Slider.prototype.updatePagination = function() {  // Sert à affecter la classe active sur l'élément de pagination correspondant à la slide visible
		// Si par exemple la slide 2 est visible alors on applique la classe active sur le 2ème élément de pagination
		this.pages.removeClass('active');
		var index = this.currentSlide.index();  // On récupère l'index de la slide active. Si c'est la 2ème qui est visible alors l'index sera égal à 1
		// var index = this.slides.index(this.currentSlide); // version longue de la ligne ci-dessus
		
		this.pages.eq(index).addClass('active');  // On sélectionne l'élément de pagination dont l'index est correspond à celui de la slide visible

}
	
Slider.prototype.clickOnPage = function(e){  // Se déclenche quand on clique sur un élément de pagination
	
	// Ici il est nécessaire de récupérer le paramètre relatif à l'événement car lorsqu'un élément de pagination sera cliqué, "this" ne devra plus faire référence à l'élément html cliqué mais à l'objet.
	// Grace à la propriété "target" de l'objet event (http://api.jquery.com/event.target/) il est possible de savoir quel élément html a été cliqué
	
	var indexPageClicked = $(e.target).index();  // On récupère l'index de l'élement de pagination cliqué. Si c'est la page n°3 qui a été cliqué l'index sera égale à 2.
	// var indexPageClicked = this.pages.index($(e.target));  // Version longue de la ligne ci-dessus
	this.gotoSlide(indexPageClicked);
	
}
	
Slider.prototype.gotoNextSlide = function(){ // Se déclenche quand on clique sur le bouton NEXT
			
		var indexSlideToShow = this.currentSlide.index() + 1;
		
		if(this.nbSlides == indexSlideToShow){  // On vérifie que la slide actuellement visible n'est pas la dernière. Dans quel cas il faudra afficher la première.
			indexSlideToShow = 0; 
		}
		
		this.gotoSlide(indexSlideToShow);
	
}	
	
Slider.prototype.gotoPrevSlide = function(){ // Se déclenche quand on clique sur le bouton PREV
			
		var indexSlideToShow = this.currentSlide.index() - 1;
		
		if(indexSlideToShow < 0) { // On vérifie si la slide actuellement visible n'est  pas la première. Dans quel cas il faudra afficher la dernière.
		
			indexSlideToShow = this.nbSlides - 1;   
			
		}
		
		this.gotoSlide(indexSlideToShow);

}
	
Slider.prototype.gotoSlide = function(index){  // Cette méthode sert à afficher la slide correpondant à l'index passé en paramètre. Si index vaut 1 c'est qu'on veut par exemple afficher la 2ème slide.
	
		var slideToShow = this.slides.eq(index);
		this.currentSlide.fadeOut(1000);
		slideToShow.fadeIn(1000);
		this.currentSlide = slideToShow;
		this.updatePagination();
		
		localStorage.setItem(this.slider.attr('id')+'_currentSlide', index);	// On garde en mémoire du navigateur l'index de la dernière slide affichée afin d'afficher celle-ci lors de la prochaine visite.
	
}
	
Slider.prototype.onMouseOver = function(){  // Si la lecture automatique du slider est en cours alors on la met sur pause lorsque que le slider est survolé.
	
		if(this.isActive) this.stop();
	
}
	
Slider.prototype.onMouseLeave = function(){  // Si l'icone du bouton PLAY en mode "lecture" (symbole stop) alors on relance la lecture automatique du slider.
	
		if(this.iconPlayButton.hasClass('fa-stop')) this.play();
	
}
	
Slider.prototype.autoPlay = function(e){  // Se déclenche quand on clique sur le bouton PLAY
	
		this.iconPlayButton.removeClass(); 
		
		if(this.isActive == false){  // Si le slider est sur pause alors on lance la lecture automatique
			this.play();
			this.iconPlayButton.addClass('fa fa-stop');  // On change le symbole du bouton PLAY pour afficher l'icone STOP
		}
		else { // Si la lecture automatique du slider est active alors on met le slide sur pause.
			this.stop();
			
			this.iconPlayButton.addClass('fa fa-play'); // On change le symbole du bouton PLAY pour afficher l'icone PLAY
		}
	
		
}
	
Slider.prototype.random = function(){ // Se déclenche quand on clique sur le bouton RANDOM
	
		var currentActiveSlidePosition = this.currentSlide.index();

		do  // Cette boucle sert à vérifier que l'image générer aléatorement n'est pas égale à celle déjà visible
		{
			var max = this.nbSlides - 1;
			var random = rand(0,max);
			
		} while (random == currentActiveSlidePosition)
		
		this.gotoSlide(random);  // On affiche la slide défiinie aléatoirement
	
}
	
Slider.prototype.play = function(){  // Sert à lancer la lecture automatique du slider
	
	this.timer = setInterval(this.gotoNextSlide.bind(this),2000);	
	this.isActive = true;
	
}
	
Slider.prototype.stop = function(){ // Sert à mettre sur pause la lecture automatique du slider
	
	this.isActive = false;
	clearInterval(this.timer);
	
}

Slider.prototype.init = function(){
		
		this.generateControls();  // On génère la palette de contrôle du slider et on définit dans la foulée à partir de celle-ci les propriétés nextButton,prevButton,playButton et randomButton)

		// On créé la pagination du slider:
		this.generatePagination();

		//Gestionnaire d'événements:
		
		this.nextButton.click(this.gotoNextSlide.bind(this));  
		// NOTA: Il faut utiliser la méthode bind sur la méthode gotoNextSlide pour changer le contexte de "this". Si on ne le fait pas alors "this" fera référence dans la méthode "gotoNextSlide" au bouton précédent (this.nextButton) car c'est sur cet élément html qu'est appliqué la méthode.
		//  Hors il faut faudra que this fasse référence à l'instance de l'objet Slider sans quoi il sera impossible d'appeler la méthode "gotoSlide" à l'intérieur de celle-ci.
		// Ce raisonnement est similaire pour l'application des écouteurs d'événement suivants:
		this.prevButton.click(this.gotoPrevSlide.bind(this));
		this.playButton.click(this.autoPlay.bind(this));
		this.randomButton.click(this.random.bind(this));

		this.slider.mouseover(this.onMouseOver.bind(this));
		this.slider.mouseleave(this.onMouseLeave.bind(this));
	
		this.pages.click(this.clickOnPage.bind(this));
		
		// On vérifie s'il n'y a pas en mémoire dans le navigateur un index de slide visualisée lors d'une précédente visite:
		var lastCurrentSlide = localStorage.getItem(this.slider.attr('id')+'_currentSlide');  
		// Si oui on affiche la slide correspondant a cet index mémorisé lors de la dernière visite:
		if(lastCurrentSlide != null) this.gotoSlide(lastCurrentSlide);
		
}
