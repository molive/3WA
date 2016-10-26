$(function(){

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


});