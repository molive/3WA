//  https://learn.jquery.com/plugins/basic-plugin-creation/
//https://codeshare.io/dY3IN
(function($) {
// ancien code
var tabs = $('ul li'); $('.nav li');

	tabs.click(function(){
	  
	  $('.tab-content').removeClass('active');   // toutes les divs aillant la class "tab-content" seront masquées
	  // On met jour le statuts des onglets
	  tabs.removeClass('active');  // on suprrimer toutes les class actives de nos onglets
	  $(this).addClass('active');  // On ajoute la classe "active" sur l'onglet cliqué
	  
	  
	  var tabData = $(this).attr('data-tab');  // On récupère la valeur de l'attribut "data-tab" de l'onglet cliqué
	  
	  $('#tab_'+tabData).addClass('active');  // J'ajoute la class "active" sur l'encart que je souhaite afficher (pour le cas de profil il s'agit de l'élement <div class="tab-content" id="tab_profile">...</div>
	  
	  
	  return false;
	  
	});

// fin ancien code



        // définition du plugin jQuery
        $.fn.tab = function( options ) {
 
			// This is the easiest way to have default options.
			var settings = $.extend({
				// These are the defaults.
				color: "#556b2f",
				backgroundColor: "white"
			}, options );
	
		return this;
		}
		
		})(jQuery);
		
		
		// faire démo avec user :
		/*
		User = {
		name : "Olivier",
		firstname : "Martin"
		}
		
		User.fullname = function () {
		
		 return this.firstname+' '+this.name;
		
		}
		
		alert(User.fullname());*/