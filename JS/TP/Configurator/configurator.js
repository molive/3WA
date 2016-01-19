var defaultColor = "";


var colors = [];
var formColors ='';
var accessories = [];
var formAccessories='';
var LPPR= '';

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
price : 2700
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

// Gestion des accessoires
accessories = [
{
title : 'Adaptateur Chargeur Batterie' , 
image : 'adaptateur.png',
description : '',
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