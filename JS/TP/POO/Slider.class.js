/**** Création de l'objet Slider ****/

// Lien utile: https://developer.mozilla.org/fr/docs/Web/JavaScript/Introduction_%C3%A0_JavaScript_orient%C3%A9_objet


// Etape 1: Créer la focntion constructeur Slider prenant en paramètre un objet jQuery qui sera une div contenant des images (donc notre div "slider1" ou "slider2")

/* Caractéristiques de l'objet Slider:

	-> 12 propriétés :
	
	- slider : contient l'objet jQuery du slider (div "slider1" ou "slider2") transmis par le paramètre de la fonction constructeur Slider
	- slides : contient toutes les images du slider
	- nbSlides : contient le nombre total de slides
	- currentSlide : contient l'image courante (par défaut il s'agit de la première)
	- isActive : variable témoin servant à définir si le slider est en lecture automatique ou non.
	- timer : contiendra l'interval qui devra déclencher la méthode "gotoNextSlide" toutes les 2 secondes

	// IMPORTANT: les propriétés ci-dessous seront toutes intialement vides et définies ultérieurement lors de la phase d'initialisation de l'objet Slider
	
	- controls : contiendra un objet jQuery contenant les éléments d'interagir avec le slider (boutons précédent, play, suivant, aléatoire 
	             ainsi que le conteneur de pagination). 
				 NB: Cette propriété sera initialement vide et définit par la suite.
	
	- pages : contiendra une collection d'objet jQuery relative aux  éléments span situés dans la div .pagination
	- prevButton : bouton image précédante
	- nextButton : bouton image suivante
	- playButton : bouton play
	- randomButton : bouton image aléatoire
	
	-> Un prototype contenant XX méthodes:

			
	- generateControls : Aura pour rôle de définir la propriété "controls" contenant les éléments de contrôle du slider (boutons précédent, play, suivant, aléatoire 
	ainsi que le conteneur de pagination (vide dans un premier temps) définit dans cet objet jQuery: 
	*/

		var controls = $('<div class="control">\
		<div class="pagination"></div>\
			<button class="prev"><i class="fa fa-backward"></i></button>\
			<button class="play"><i class="fa fa-play"></i></button>\
			<button class="next"><i class="fa fa-forward"></i></button>\
			<button class="random" title="Sélectionner une image aléatoire"><i class="fa fa-random"></i></button>\
		</div>\
		');
	
/*	
	Une fois l'objet jQuery ci-dessus stocké dans la propriété "controls" de l'objet Slider, faire apparaître son contenu juste en dessous du slider.
	Astuce: http://api.jquery.com/after
	
	- generatePagination: Aura pour rôle de générer dynamiquement la pagnation en fonction du nombre de slide.
		1) Le code html à générer est celui-ci: <span class="active">1</span><span>2</span><span>3</span><span>4</span>
		2) Il devra ensuite être insérer dans la div ayant la class "pagination".
		3) Une fois affichés il faudra mettre à jour la propriété pages.
	
	- updatePagination : Sert à affecter la classe active sur l'élément de pagination correspondant à la slide visible
	// Si par exemple la slide 2 est visible alors on applique la classe active sur le 2ème élément de pagination
	Astuce: http://api.jquery.com/index/
	
	- gotoSlide : Prend en paramètre l'index de la slide a afficher. (0 = slide numéro une, 1 = slide numéro 2 etc.). Il faudra aussi mémoriser cette valeur dans le navigateur grace à la propriété localStorage de l'objet window (https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage)
	- gotoNextSlide : Servira à afficher la slide précédente
	- gotoPrevSlide : Servira à afficher la slide suivante
	
	- clickOnPage : Se déclenche quand on clique sur un élément de pagination. Cette méthode prend en paramètre l'évenement (event) et nous permettra de récupérer l'index de l'élément de pagination cliqué et ainsi afficher l'image correspondante
	Astuce: http://api.jquery.com/event.target/

	- autoPlay : Se déclenche quand on clique sur le bouton PLAY
	- play : Sert à lancer la lecture automatique du slider
	- stop : Sert à mettre sur pause la lecture automatique du slider
	- onMouseOver : Si la lecture automatique du slider est en cours alors on la met sur pause lorsque que le slider est survolé.
	- onMouseLeave : Si l'icone du bouton PLAY en mode "lecture" (symbole stop) alors on relance la lecture automatique du slider.
	
	- randomSlide :  Sert à afficher aléatoirement une slide
	
	- init : Sert à initialiser l'objet slider. Cette méthode devra être appelée à chaque fois que l'on fera une instance de l'objet Slider.
		1) exécuter la méthode generateControls()
		2) exécuter la méthode generatePagination()
		3) Définissez à partir de l'objet jQuery contenu dans la propriété "controls" les propriétés:
			* prevButton : bouton image précédante
			* nextButton : bouton image suivante
			* playButton : bouton play
			* randomButton : bouton image aléatoire
			
		4) Mettre en place les gestionaire d'événements permettant:
	        * D'afficher la slide suivante quand on clique sur le bouton suivant
	        * D'afficher la slide précédente quand on clique sur le bouton précédent		
	        * D'afficher une slide aléatoire quand on clique sur le bouton aléatoire
	        * D'afficher la slide correspondant à l'élément de pagination cliqué
	        * D'afficher la slide correspondant à l'élément de pagination cliqué	
			* Mettre sur pause le slider quand on le survole avec la souris
			* Relancer la lecture du slider quand on le désurvole (uniquement si l'état du bouton est en mode "play")
			
		5) Afficher par défaut la dernière slide consulté depuis la dernière consultation.
		
	
	Dans la fonction contructeur appelé en toute fin la méthode "init". Ceci permettra de la déclencher à chaque instanciation de l'objet Slider
	
	
	Etape 2:
	Faite deux instances de l'objet Slider à partir des div "slider1" et "slider2". stocké ces instances respectivement dans une variable slider1 et slider2
	
	THE END
*/