(function($) {

        $.fn.dice = function( ) {
		
			this.each(function() {
      
            var diceValue = rand(6);  // On génère une valeur comprise entre 1 et 6 (car un dé a 6 faces)
            $(this).css('background-image', "url('images/"+diceValue+".jpg')");  // on modifie l'image de fond du dé selon la valeur de dicevalue générée

            
      });
		
		
		
		
		}



})(jQuery);