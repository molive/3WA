// recap //

var users = ['olivier','thibault','Nico'];

for (var index in users){
	console.log(users[index]);
}

var user1 = users[0]; // user1 sera egal à olivier



var user = {
name : 'OLivier',
age : 27,
city : 'Lyon'

}

var age = user.age;   // va contenir 27
var age = user['age'];









//
// var menu = [{objet}, {objet},{objet}];
var menu = [
  // 1ère élément du menu qui est un objet litéral
{ 
category : 'Catégorie #1 :',
items : ['Item 1', 'Item 2', 'Item 3'] 
},
    // 2ème élément du menu qui est un objet litéral
{ 
category : 'Catégorie #2 :',
items : ['Item 4', 'Item 5', 'Item 6']
}
,
  // 3ème élément du menu qui est un objet litéral
{ 
category : 'Catégorie #3 :',
items : ['Item 7', 'Item 8', 'Item 9']
}
]


document.write('<ul>');
for (var index in menu) {
	document.write('<li>');
//var mainMenu = menu[index];

	document.write(menu[index].category+'</li>'+'<ul>');

  var items = menu[index].items;
  
  for(var id in items){
  document.write('<li>'+items[id]+'</li>');
	}
  
	document.write('</ul>');
  
}
  document.write('</ul>');
/*


<ul>
<! -- 1ère élément html généré lors de la 1ère exécution de la première boucle -->
<li>Categorie #1sult= a +b
<ul>
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
</ul>
<! -- fin de l'élément html généré lors de la 2ème exécution de la première boucle -->
</li>
<! -- 2ème élément html généré lors de la 1ère exécution de la première boucle  -->
<li>Categorie #2
<ul>
<li>Item 4</li>
<li>Item 5</li>
<li>Item 6</li>
</ul>

</li>


<li>Categorie #3
<ul>
<li>Item 7</li>
<li>Item 8</li>
<li>Item 9</li>sult= a +b
</ul>

</li>
</ul>






*/



/*
var menu1 = menu[0];
var itemsMenu1 = menu1.items  // ou menu1['items']   >>> contient le tableau associé à la propriété "items"  ( ['Item 1', 'Item 2', 'Item 3'] )
// >>>> itemsMenu1 =  ['Item 1', 'Item 2', 'Item 3'] ;
var item3 =  itemsMenu1[2];  // items = "Item 3";
*/

var item = menu.0.items.2;   // /!\ ne marche pas
var item = menu[0].items[2]; // façon n°1 
var item =menu[0]['items'][2]; // façon n°1 



// afficher l'élément "Item3"
// alert(**** solution ****);  
var Item3 = menu




/*

générer l'affichage suivant :


- Catégorie #1

  * Item 1
  * Item 2
  * Item 3

- Catégorie #2

  * Item 4
  * Item 5
  * Item 6

- Catégorie #3

  * Item 7
  * Item 8
  * Item 9


var user1 = {
'name' : "Martin",
'firstname' : "Olivier",
'city' : "Lyon"
// 'email' :  'the.molive@gmail.com'
}

console.log(user1.city);
console.log(user1['city']);


// console.log(user1['city']);

for (var index in user1) {
	// console.log(user1.index);  // On ne peut utiliser cette méthode là pour  récupérer la valeur des propriétés de mon objet user1
  console.log(user1[index]);
}



// etude de la fonction confirm() //

var confirmation = confirm('Souhaitez-vous continuer ?');  // confirmation sera soit egale à true (si l'utilsiateur clique sur OK) ou false (si l'utilsiateur clique sur ANNULER)


if( confirmation == true) {

alert('C\'est parti !');

}

if( confirmation ) {

alert('C\'est parti !');

}


if( confirmation == false) {

alert('Dommage...');   

}

if(!confirmation) {

alert('Dommage...');

}



http://www.slideshare.net/ConceptionWebsite/les-base-du-javascript


var reponse = 8;

var indexRep = reponse.indexOf(8);

console.log(indexRep);


var reponses = [42,'aucun','coder'];

console.log(reponses.indexOf(42));  // va afficher 0 car l'entier 42 est en 1ère position dans mon tableau
console.log(reponses.indexOf('42'));  // va afficher -1 car la chaine de caractère "42" n'existe pas dans mon tableau

["pekin", "beijing", "pékin"]
var question1 = {
question : "Quel est le sens de la vie ?",
reponse : 42
}

var question2 = {
question : "Combien font 0+0 ?",
reponse : 0
}

var questions = [question1 , question2];

//        CORRRIGE DU QUESTIONNAIRE    //

var questions = [
{
question : "Quel est le sens de la vie ?",
reponse : ['42','aucun','coder']
} ,
{
question : "Combien font 6 + 6 ?",
reponse : '12'

}
]
i

/*
for (var id in questions){
alert(questions[id]['question']);
}

for (var id in questions){
console.log(questions[id]['reponse'])
}
*/

var confirmation = confirm('Souhaitez-vous commencer une partie ?');  // confirmation sera soit egale à true (si l'utilsiateur clique sur OK) ou false (si l'utilsiateur clique sur ANNULER)

if(confirmation) {


for (var id in questions){

var reponseUser = prompt(questions[id]['question']);

var reponses =  questions[id]['reponse'];
// reponses = [42,'aucun','coder']  en 1ère exécution de boucle
// reponses = 12 en 2ème exécution de boucle


var indexRep = reponses.indexOf(reponseUser);  
// si l'utilisateur tape une mauvaise réponse, la variable indexRep sera égale à -1
// En 2ème exécutio nde boucle, si l'utilisateur tape 12 (qui est la bonne réponse), indexRep vaudra undifinded

//  || est l'operarateur de comparaison  "Ou"

if(indexRep != -1 || questions.reponse == reponseUser){
score++;
}

}

}




/*
if(reponse == questions[id].reponse) {
score++;
}
*/

}

document.write('Votre score est '+ score+' / ' + questions.length);

}
else
{

document.write('Dommage');

}




//  .indexOf()  //

var reponses = [42,'aucun','coder'];

alert(reponses.indexOf('aucun')); // va afficher "1" car "aucun" est en 2ème position dans mon tableau (array) "reponses"
alert(reponses.indexOf('drgrtseter')); // va renvoyer -1 car 'drgrtseter' n'existe dans mon tableau (array) "reponses"




/*
 var days = ['lundi','mardi','mecredi','jeudi','vendredi','samedi','dimanche']; 

for ( var id in days){
alert(days[id]);
}
*/








//   EXERCICE D'ENTRAINEMENT  //


var question1 = {
question : "Quel est le sens de la vie ?",
reponse : 42
}

var reponseUser = prompt(question1['question']);
if (reponseUser == question1['reponse']) {
	alert("Bonne Réponse");
  }
  
  




//     //


<!DOCTYPE html>
<html>
<body>


<script>


var value1 = 10;
var value2 = 10;


/// opérateur inferieur à "< "
if (value1 < value2) {

alert(value1 +' est plus petite que '+ value2);

}

else

{

alert(value1 +' est plus grande que '+ value2);

}

// opérateur inferieur ou égal à "<="

if (value1 <= value2) {

alert(value1 +' est plus petite ou égale à '+ value2);

}

/* Les opérateurs de comparaison existants :

==  // sert à définir si 2 valeurs sont égales


 
/*
var age = prompt('Quel est votre âge ?');

// sI L4UTILISATEUR RENTRE 25 COMME AGE 
if(age <= 18) {

document.write('ACCES REFUSE CAR VOUS ETES MINEUR');

}
else if(age >= 77) {

document.write('ACCES REFUSE CAR VOUS ETES TROP VIEUX');

}
else if(age == 45) {

document.write('ACCES REFUSE CAR VOUS AVEZ 45 ANS');

}

else
{

document.write('ACCES AUTORISE !');



}
*/
//( (age <= 18 || age >= 77 || age == 45) && age = 80)  
//  on veut que l'age soit à la supperieur à 18 ans  inférieur à 77 ans et pas égale à 45 ans  ou qu'il soit égale à 80 ans
//( (age > 18 && age < 77) && (age != 45 || age == 80) )  {

//( (age <= 18 || age >= 77 || age == 45) && age = 80)  

age = 17

if(age > 18 && age < 77)  {
  
  

/*

if ((age < 18 || age > 77 || age == 45) && age != 80) {
  
  document.write('Accès refsé');
  
}

else

{


}


  */
  
if(age >= 18 && age <= 77 && age != 45 || age == 80 ) {
 
   document.write ('Accès autorisé');

}
else
{
  
	document.write ('Accès refusé');
  
}

/*

// Faire un questionnaire de 5 questions

// A chaque fois utilisateur donne une bonne réponse il gagne point

// A la fin du questionnaire on affiche son score

*/



var score = 0;
var reponse = prompt('Combien font 0+0 ?');

if(reponse == 0) {
score++;
}
else
{

alert('Mauvaise réponse !!!!!');

}

reponse = prompt('Quel est le sens de la vie ?');

if(reponse == 42) {
score++;
}
else
{

alert('Mauvaise réponse !!!!!');

}

var reponse = prompt('Combien font 5+1 ?');

if(reponse == 6) {
score++;
}
else
{

alert('Mauvaise réponse !!!!!');

}

document.write('Votre score est '+ score+' / 3');




//    EXERCICE LOTERIE   //

// on va générer une valeur comprise entre 0 et 100;

var random = Math.random(); // la variable random sera un décimal compris entre 0 et 1 (exemple 0.155557878)
var number = random*20;  // la varibale number sera une valeur décimale comprise entre 0 et 100 (exemple 57,58545454)
number = Math.round(number); //la varibale number sera  un entier compris entre 0 et 100 Math.random()
console.log(number);


// &&  //
// ||  // opérareur OU

// On va développer une condition qui va vérifier que la variable "number" est comprise entre 50 et 80 ;

// on va créer une condition qui  va vérifier que number soit comprise entre 5 et 10  ou égale à 12;
//Pour afficher l'ennoncé appuyer sur (alt-F4) ou crtl+Q sur sublime




//if( number >= 50 && number <=80) {
// if( number == 2 || number == 6 ) {
number = 8;

var condition = number == 8;  // si number est égale à 8 alors la variable condition est égal à true;


if(condition) {
  
  alert('La valeur est bonne');
  
}



if( (number > 5 && number < 10)  || number == 12) {

  alert('Vous avez gagné !');
  
}

else
  
{
  
  alert('Vous avez perdu !');
  
}


do {
  
  var ask = prompt("Entrer une valeur");
  
} while (ask != 5);

 /*
  while (ask != 5){   // tant que la valeur de la variable ask n'est pas égale à 5 on éxécute les instructions contenues dans la boucle
     
       var ask = prompt('Entrer  une valeur');
     
   }*/
  
  /*
  
  1) On génère un entier compris entre 0 et 100 qu'on passe dans une varibale "number"
  
  2) on créé une condition qui vérifie que "number" est compris entre 50 et 70
  
  3) Si la condition n'est pas respecté, on propose au joueur de rejouer
  
  4) On créé un compteur de tentative 
  
  
  
  */
  


var random= Math.random();
var number = Math.round(random*100);
  
var compteur  =0;

var rep = confirm("Voulez vous jouer ?");

if (rep == true){



while((number < 50 || number > 70) && rep){	// si la valeur number n'est pas comprise entre 50 et  70

  
  // on demande à l'utilisateur de retenter sa chance
var rep = confirm("retentez votre chance :"+number+' Compteur '+compteur);  // rep sera égal à true ou false


//if(!rep) { reak; 
  
  

compteur++; 

  //pour retenter:
var random= Math.random();
var number = Math.round(random*100);	

  }
    
    
}

alert('vous avez gagné  le compteur est :'+compteur);

}else{
	alert( 'bye');
}
}

/////////////////////////////////////////////////////////////

// 1) faire un fichier fonctions.html;
// 2) faire un fichier fonctions.js;


/* pour mémé :
rajouter fonction calcul Aire permettant de calculer l'aire d'un carré ou d'un rectangle :  */


function myFunction() {
  
   myVar  = "TEST";
  
}

myFunction();

document.write(myVar);

|
|
  
  
|
 
  
 // 
function addition (value1 , value2) {
  
  var sum = value1 + value2;
  return sum;
}


alert(addition(10,30));  // afficher 40


var sumVar = addition(10,30);  // on injecte la valeur de sortie de la fonction addition dans une variable sumVar ;





function welcome(firstname = 'Anonymous', lastname = "Patate" ){    // lastname et firstname sont des variables appelées paramètres  
  
  document.write('Hello '+firstname+' '+lastname+'!');
  
}


welcome('0livier');  // Hello Olivier  Patate
welcome(); // Hello Anonymous Patate
welcome('Olivier' , 'Martin');  // Hello Olivier Martin

/* créer un fonction permettant d'additioner 2 valeurs entre elles

exemple :
addition(10,20);  >>> renvoi un frisbee  30 car 20 + 10 = 30
*/


/////////////////////////////////////////////////////////////

/* pour memo :
rajouter fonction calcul Aire permettant de calculer l'aire d'un carré ou d'un rectangle : */

function surface(height, width = height){  // attention ne fonctionne sur certaine version de chrome
  
  var aire = height * width;
  return aire;
  
}




surface(10,20) // renvoyer 200  
surface(10) // 100




function message(name,firstname = 'Anonymous'){  //
  
	return 'Bonjour '+name+' '+firstname;
 }



var myVar = message('Olivier','Martin'); // Vaut 'Bonjour Olivier Martin
var myVar = message('Olivier'); // Vaut 'Bonjour Olivier Anonymous

alert(myVar);


//   Exercices sur les conditions et les fonctions    //

// EXERCICE 1 )
/*
1) Faire un jeu où l'utilisater renseigne un nombre entre 0 et 50. Si ce nombre est
proche de la solution, c'est à dire inférieur à 10 ou supérieur à 10 du bon nombre alors on affiche "Vous êtes proche du résultat !"
sinon on affiche "Vous êtes loin du résultat". Dans les 2 cas le message doit être affiché avec la fonction alert.

2) A chaque tentative on incrémente un compteur de tentatives qu'on affiche une fois que le visiteur à trouver le bon nombre.

Exemple :
Le nombre à trouver est égale à 37. 
Si on tape 30 alors une boite de dialogue "Vous êtes proche du résultat !" doit s'afficher car 30 est compris entre 27 et 47

Compléter le code ci-dessous :
*/
￼


var goodValue = 17;  // Valeur que l'utilisateur doit  trouver

var compteur = 0; 


do {

  // créer une condition qui va vérifier que la valeur saisi est égaleme à la valeur à trouver +- 10  
  // par exemple je tape 30 la condition sera vrai car 27 < 30 < 47
   compteur ++;
 
  var valueMin = goodValue - 10;
  var valueMax = goodValue + 10;
  
  var userValue = parseInt(prompt("Veuiller indiquer un nombre entre 0 et 50"));  //  var userValue = "50";
  
  var condition = userValue != goodValue;
  
  
  if(userValue >= valueMin && userValue <= valueMax && condition) {
    alert('Vous êtes proche de la solution');
  }
 else {  alert('Vous êtes loin  de la solution'); }
  
  
} while(condition);
 

  

document.write(compteur);



 
      //bon courage pour les exos

// EXERCICE sur les fonctions

/*

3) créer une fonction appelée "rand" qui permet de générer un entier aléatoir dont la valeur maximale sera définie par un paramètre appelé "max" 
*/

function rand(max) {
  
var random= Math.random();  // random sera un décimal cmpris entre 0 et 1 (exempel 0.1545888)
var random = random*max;  // si max = 70 alors random sera u ndecomal compris entre 0 et  70 (exemple 50.256454)
var random = Math.round(random) // on arrondi la valeur à l'entier le plus proche (si random = 50.256454 alors sa nouvelle valeur sera 50)
  return random;
} 

console.log(rand(10));





console.log(rand(100)); // retournera un entier compris entre 0 et 100


/* 4) améliorer la fonction ci-dessus de sorte qu'on puisse définir une valeur min et maxi
vérifier dans cette fonction que le paramètre "min" est bien inférieur au paramètre "max"
*/

function rand(min,max) {
  
  
}

console.log(rand(10,100)); // retournera un entier compris entre 10 et 100
console.log(rand(100,10)); // retournera "error" car le paramètre min (100) est supérieur au paramètre max (10)








/* 
  6)  Créer une fonction qui génère une image aléatoire à partir d'un tableau contenant des liens d'images
*/
  
  
  var imgs = [
    'http://technologie-f-mauriac.jimdo.com/app/download/8664189394/bmp_oiseau004.bmp',
    'http://www.gettyimages.fr/gi-resources/images/frontdoor/creative/PanoramicImagesRM/FD_image.jpg',
    'http://referentiel.nouvelobs.com/file/13572027.jpg',
    'http://www.cotequimper.fr/files/2016/01/image-semaine-630x0.jpg',
    'http://parisregionentreprises.org/sites/default/files/numerique.png'
    ];
  
  


  function rand(max) {

  var random= Math.random();  // random sera un décimal cmpris entre 0 et 1 (exempel 0.1545888)
  var random = random*max;  // si max = 70 alors random sera u ndecomal compris entre 0 et  70 (exemple 50.256454)
  var random = Math.round(random) // on arrondi la valeur à l'entier le plus proche (si random = 50.256454 alors sa nouvelle valeur sera 50)
    return random;
  } 

  function randImg(images) {

  var randVar = rand(images.length - 1);  // randVar sera un entier compris entre 0 et 4 se qui reveint à invoqué la fonctio nrand(4)
  return '<img src="'+images[randVar]+'" >' ; 
    
    /*  coder les instructions  */
  }


// Les fonctions d'objet (méthodes)
// Exemple de methode native :
Math.round();
imgs.join(' / ');


// On va créer nos propre méthode :

var user = {
  firstname : "Olivier",
  lastname : "Martin",
  age : 27,
  competences : ['CSS','HTML', 'JS'],
  description : function () {
  
  document.write('Je m\'appelle '+this.firstname+' '+this.lastname+' et j\'ai '+this.age+' ans');
  
}
}

 user.description(); // Doit afficher "Je m'appelle Olivier Martin et j'ai 27 ans"

// créer une méthode "isAdult" qui va vérifier si l'utilisateur a bien plus de 18

console.log(user.isAdult());  // doit afficher true car la propriété "age" de l'objet user est égale à 27 donc superieur à 18


  
  document.write(randImg(imgs));  /* afficher à l'écan une image dont la source est un des liens d'image stockés dans le tableau "imgs" passé en paramètre
  exemple du code html généré par la fonction randImg : <img src="http://referentiel.nouvelobs.com/file/13572027.jpg"> */
  
  
  
  

  
  /*
  Pour mémo : 
  Voir brievement les fonctions d'objet (méthodes)
  
  var user = {
  firstname : "Olivier",
  lastname : "Martin",
  age : 27
  description : function (size=null) {
  if(size != 'short') 
  return 'Je m\'appelle '+this.firstname+' '+this.lastname+' et j\'ai '+this.age+' ans';
  else 
  return this.firstname+' '+this.lastname+' '+this.age+' ans';
  }

  }
  
  
  var userDescription = user.description();  // Je m'appelle Olivier Martin et j'ai 18 ans
  var userDescriptionShort = user.description('short');  // Olivier Martin 18 ans
  
  Exercice : rajouer une méthode isAdult qui renvoie true ou false selon si l'utilisateur a plus ou moins de 18ans
  
  
  
  */
  
  ///////   DEVOIR MAISON/////
  /*
1) Créer une  fonction prenant un paramètre (value) permettant de convertir des francs en euros arrondie à 2 décimales (rappel 1€ = 6.56 fr)
2) Vérifier que la valeur du paramètre transmis est bien une valeur numérique (exemple 5.68 ou encore 6)
*/

function francToEuro (value){   // le paramètre value est la valeur à convertir en € 
  /* coder une condition vérifiant que value est un entier ou un décimal 
  vous aurez besoin de l'opérateur "typeof" qui renvera le type de la variable
  
  exemple : 
  var test = 5;
  console.log(typeof test); affichera "number" dans la console
  */
  
  /*  coder le script permettant de convertir le paramètre "value" en €   */
  return result;  // result est la valeur passée en paramètre convertie en €
  
}
                           la fonction francToEuro doit être une valeur numérique
/*
2)  Améliorer cette fonction pour permettre de convertir une valeur en € en fr et inverssement avec une fonction prenant 3 paramètres : */

function converter(value,deviseInput,deviseOutput){  
/* le paramètre "value" est la somme a convertir  , 
   le paramètre "deviseInput" est la devise de la somme à convertir (valeur possible : € ou fr)
   le paramètre "deviseOuput" est la devise dans laquel la somme (value) devra être convertie (valeur possible : € ou fr)
   */
  
  return result;
  /*
  NOTA : la méthode ".toFixed(2)" permet d'arrondir par exemple un décimal à 2 chiffres après la virgule (le paramètre sert 
  à définir le nombre de chiffre à arrondir après la virgule)
  exemple :
  var number = 3.14159:
  number = number.toFixed(2);  // number vaut maintenant 3.14
  */
}

console.log(converter(100,'€','fr')); // affiche 15.24 car 100 fr =  100 / 6.56 = 15.24€ 
  // affiche 98 car 15 € =  15 * 6.56 = 98 fr

// Exercice facultatif : intégrer une 3ème devises possible : le dollar ($) où 1€ = 1.09$ 
  /*
5) Créer une fonction qui calcule une moyenne à partir d'un tableau (array) de notes qu'on lui passe en paramètre. 
Cette fonction doit également prendre un 2nd paramètre optionnel qu'on appelera "precision" et qui permettra de choisir à combien de chiffres après la virgule on souhaite arrondir le résultat
La valeur de sorti doit par défaut être arrondie à 1 chiffre après la virgule
Evidemment la fonction doit pouvoir calculer la moyenne quelque soit le nombre de notes contenues dans le tableau "notes" ;)
*/ 


var note = 0;
var note2 = 5;
var note =0, note2 =2;

//for (var id in notes){
for(var i=0 , sumNote = 0; i <= notes.length ; i++){
    
sumNote += notes[i]; 
// sumNote = sumNote + notes[id];
}

var moy = sumNote /  notes.length;
moy = moy.toFixed(1);



var notes = [10 , 15 , 18 , 17, 16 , 8];


function moy(data) {

var sumNote = 0;


for(var index in data){
    
sumNote += data[index]; 
// sumNote = sumNote + notes[id];
}

var moyenne = sumNote / data.length;
return moyenne.toFixed(2); 
  
}


console.log(moy(notes)); 
console.log(moy(notes)); 
console.log(moy(notes)); 
  /*
  if(precision=="undefined"){
   precision = 1;
  }
  for(var index in data){
  	sum+=data[index];
  }
  var moy = sum / data.lenght;
  moy = moy.tofixed(precision);
  return moy;
*/


function francToEuro (value){

if(typeof value == 'number') {   // on va vérifier que la valeur du paramètre value est bien une valeur numérique
var euro = value / 6.56;
return euro.toFixed(2);
}
  else
  {
    return false;
  }
  
}


console.log(francToEuro(100)); 15.24
console.log(francToEuro('rgdgdgs')); // error


  
console.log('le moyen est :'+moy(notes));
console.log('le moyen est :'+moy(notes),0);

  

  
console.log(moy(notes)); // affichera 15.2  car  (15 + 20 + 16 + 18 + 7) / 5 = 15.2 (arrondi à un chiffre après la virgule)
console.log(moy(notes,0)); // affichera 15  car  (15 + 20 + 16 + 18 + 7) / 5 = 15 (arrondi à 0 chiffre après la virgule donc l'entier le plus proche) 

  /*

  
</script>

</body>
</html>
*/
var notesClasse1 = [10 , 15 , 17.5 , 17, 16 , 8];
var notesClasse2 = [7 , 2 , 3, 5, 3 , 2];


function moy(data,precision=1) {

 var sumNote = 0;	
 for(var id in data) {
 	sumNote += data[id]; 
 }
  var moyenne = (sumNote / data.length).toFixed(precision);
  return moyenne;
}

console.log(moy(notesClasse1));
console.log(moy(notesClasse2, 0));  
console.log(moy(notesClasse1, 2)); 
console.log(moy(notesClasse2, 3));  
console.log(moy(notesClasse1, 0)); /  
  
  
  
  var notes = [10 , 15 , 18 , 17, 16 , 8];
  // Math.rand();
  // Notes.join(' / ');
  document.write(notes.join(' / '));  //  10 / 15 / 18 / 17 / 16 / 8
  

var user = {
  firstname : "Olivier",
  lastname : "Martin",
  age : 27,
  competencies : ['CSS','HTML', 'JS'],
  description : function () {  
  
  document.write('Je m\'appelle '+this.firstname+' '+this.lastname+' et j\'ai '+this.age+' ans');
  
  },
  isAdult : function () {
    
  if(this.age >= 18) {
    return true; }
    else
    {
    return false; 
    },
  hasCompetence : function (param) {
    var verif = this.competencies.indexOf(param);  // V
    if(verif >= 0) {
      return true;
    }
    else
    {
      return false;
    } 
    
  }
  
    
  }
  
}

 user.description(); // Je m\'appelle '+this.firstname+' '+this.lastname+' et j\'ai '+this.age+' ans
 user.isAdult();  // Sert à vérifier que l'utilisateur à bien 18 ans ou plus (doit retourner true ou false;
 console.log(user.hasCompetence('MYSQL'));  // sert à vérifier que l'utilisateur à bien la compétence passé en paramètre
 
