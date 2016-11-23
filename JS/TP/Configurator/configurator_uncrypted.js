//jQuery(document).ready(function() {
$(function(){  // synthaxe simplifiée de la ligne n°1 passé en commentaire
var defaultColor = "";


var colors = [];
var accessories = [];

// Gestion des coloris
colors = [
{
title : 'Silver / Noir' , 
image : 'fauteuil-silver-noir.png',
LPPR : true,
price : 2700
},
{
title : 'Silver / Rouge' , 
image : 'fauteuil-silver-rouge.png',
LPPR : true,
price : 2800
},
{
title : 'Bleu / Noir' , 
image : 'fauteuil-bleu.png',
LPPR : true,
price : 2900
},
{
title : 'Rouge / Noir' , 
image : 'fauteuil-rouge-noir.png',
LPPR : true,
price : 2900
},
];

var formColorsArea = $('#form_colors');

for(var id in colors) {

  var inputRadio = '<input type="radio" name="accessoires" data-price="'+colors[id]['price']+'" data-image="'+colors[id]['image']+'" value = "'+colors[id]['title']+'"> '+colors[id]['title']+' ('+colors[id]['price']+'€)<br>';
  formColorsArea.append(inputRadio);  // on va venir rajouter le contenu html dans la variable "inputRadio" après les éléments déjà existant da,s notre div aillant pour id="form_colors"

}





// Gestion des accessoires
accessories = [
{
title : 'Adaptateur Chargeur Batterie' , 
image : 'adaptateur.png',
description : 'Permet d\'adapter le chargeur de la baterrie',
LPPR : true,
price : 40
},
{
title : '2 ème Batterie' , 
image : '2eme-batterie.png',
description : 'Batterie de rechange longue durée',
LPPR : false,
price : 400
},
{
title : 'Commande tiers Personne' , 
image : 'commande-tiers-personne.png',
description : '',
LPPR : false,
price : 70
},
{
title : 'Commande paramètrable' , 
image : 'commande-parametrage.png',
description : '',
LPPR : false,
price : 80
},
{
title : 'Kit Batterie All Inclusive' , 
image : 'kit-batterie-all-inclusive.png',
description : '',
LPPR : false,
price : 100
},
{
title : 'Appui tête' , 
image : 'appuie-tete.png',
description : '',
LPPR : false,
price : 60
},

{
title : 'Pantographe' , 
image : 'pantographe.png',
description : '',
LPPR : false,
price : 200
},
{
title : 'Repose Pieds XL' , 
image : 'repose-pieds-xl.png',
description : '',
LPPR : false,
price : 20
},
{
title: 'Roues avant Bandages Larges' , 
image : 'roues-avant-bandages.png',
description : '',
LPPR : false,
price : 80
},
{
title : 'Assise Réhaussée' , 
image : 'assise-rehaussee.png',
description : '',
LPPR : false,
price : 90
},
{
title : 'Assise Modulable' , 
image : 'assise-modulable.png',
description : '',
LPPR : false,
price : 90
},
{
title : 'Joystick Standard' , 
image : 'joystick-standard.png',
description : '',
LPPR : false,
price : 0
},
{
title : 'Porte Bagages' , 
image : 'porte-bagage.png',
description : '',
LPPR : false,
price : 300
},
{
title : 'Saccoche' , 
image : 'sacoche.png',
description : '',
LPPR : false,
price : 70
},
{
title : 'Porte Canne' , 
image : 'porte-canne.png',
description : '',
LPPR : false,
price : 70
}
,
{
title : 'Sac de transport' , 
image : 'sac-transport.png',
description : '',
LPPR : false,
price : 120
}


];


var formAccessoriesArea = $('#form_accessories');

for (var id in accessories) {
  
  var inputCheckbox = '<input type="checkbox" data-image="'+accessories[id]['image']+'" data-price="'+accessories[id]['price']+'" value = "'+accessories[id]['title']+'"> '+accessories[id]['title']+' ('+accessories[id]['price']+'€)<br>';
  formAccessoriesArea.append(inputCheckbox);
  
}

var total = 0;

var boutons = $('input[type = checkbox],input[type= radio]'); // je recupere un objet avec tous les boutons checkbox et radio
console.log(boutons.length);

var total = 0;

var boutons = $('input[type = checkbox],input[type= radio]'); // je recupere un objet avec tous les boutons checkbox et radio
console.log(boutons.length);

boutons.click(function() {
  
 var dataImage = $(this).attr('data-image');

  
  if($(this).is('[type=radio]') == true) {
  $('.color').attr('src', './images/'+dataImage);  // On créée l'objet jQuery relatif à l'image affichant la couleur (dont la class est égale à "color. On lui applique la méthode attr pour venir modifier son attribut source
  }
  else
  {
	 
	    // utiliser la methode .remove() pour supprimer l'image de l'accessoire correspondant à la checkbox décochée
    // Pour supprimer l'image associé à la deselection on utilisera le selecteur CSS img[src ="/images/test.png"]
    
    if($(this).is(':checked') ){  // on vérifie si la checkbox est cochée
      $('#viewer').append('<img class="accessory" src="images/' + dataImage + '">'); // On ajoute à la fin du conteneur <div id="viewer"></div> l'image correspondant à l'accessoire coché
    }
    else
    {
     $('img[src ="images/'+dataImage+'"]').remove();
    }
    /*
    <div id="viewer">
    <!-- Image affichant la couleur du fauteuil -->
    <img class="color" src="./images/fauteuil-rouge-noir.png">
    
    <!-- Actualisation des accessoires -->
    <img class="accessory" src="./images/repose-pieds-xl.png">
    <img class="accessory" src="./images/roues-avant-bandages.png">
    ect...  autant que de checkbox cochées
    </div>
    
    */
    /*
    <style>
    img[src ="/images/test.png"] {
    	width : 400px;
        }
    </style>
    <img src="/images/test.png">
      <img src="/images/test2.png">
        <img src="/images/test3.png">
    <src>
    */
		
  }
  
  
  
  var total = 0;
  
  boutons.each(function() {
  var price = parseInt($(this).attr('data-price')); 
  if($(this).is(':checked')) {
  total+= price;
  }
  
  
  
  // A faire : afficher le contenu de la variable total dans le span aillant pour id=""total 
  });
  
  console.log(total);  
  $('#total').html(total);
	
  });


/*
function calculator(){
var total=0;
var total_lppr=0;
$('input:checked').each(function(){
total += parseFloat($(this).attr('data-price'));
});
}*/

/*
for(var id in colors)
$('#form_colors').append('<div class="element"><input data-price="'+colors[id]['price']+'" data-lppr="'+colors[id]['LPPP']+'" id="color_'+id+'" type="radio" name="color" data-layer="'+colors[id]['image']+'" value="0"><label for="color_'+id+'">'+colors[id]['title']+'</label> <span class="price">'+colors[id]['price']+'€<span class="lppr">*</span></span></div>');	
*/

});