JS1.2 - Conditions - TP CHIFOUMI
Démo: http://conception.website/3wa/JS/TP/Chifoumi/V1.html

Lien utile:
https://openclassrooms.com/courses/dynamisez-vos-sites-web-avec-javascript/les-conditions-6

Enoncé:

1) Créer un fichier chifoumi.html que vous enregistrerez dans le dossier JS/JS1.2/TP/Chifoumi/ et ajoutez-y ce code:

<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <title>JS 1.2 - Chifoumi (Pierre Feuille Ciseau)</title>
<style>
<!-- classe permettant d'inverser horizontalement l'image relative au choix du CPU -->
.reverse {
        -moz-transform: scaleX(-1);
        -o-transform: scaleX(-1);
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        filter: FlipH;
        -ms-filter: "FlipH";
}
 </style>
  
 </head>

 <body>


 </body>
 
</html>

2) Enregistrer ces 3 images à la racine du dossier du tp (/!\ ne pas renommer le nom des images) :

  pierre: http://conception.website/3wa/images/pierre.png
  feuille: http://conception.website/3wa/images/feuille.png
  ciseaux : http://conception.website/3wa/images/ciseaux.png
  
NB: ces images serviront à représenter à la fois le choix du joueur et du CPU

3) Créer un fichier chifoumi.js que vous ferez pointer dans le fichier chifoumi.html. Déclarer dans ce fichier le mode strict ( juste mettre "use strict"; avant tout code JS):
   https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode

   Nous allons maintenant exclusivement travailler de le fichier chifoumi.js

4) Etape 1 | Déclaration des variables: 
   Déclarer les variables qui nous serviront pour le jeu (ne pas leur affecter de valeur par défaut):
   - player: contiendra ultérieurement le choix du joueur (sous forme de chaine de caractère "pierre", "feuille" ou "ciseau").
   - computer: contiendra ultérieurement le choix de l'ordinateur (sous forme de chaine de caractère "pierre", "feuille" ou "ciseau").
   - random: contiendra ultérieurement un entier compris entre 1 et 3 et qui conditionnera le choix de l'ordinateur
   - message: Contiendra un message indiquant s'il y a eu égalité, victoire ou défaite du joueur tout en expliquant pourquoi (ex: Vous gagnez car la pierre écrase les ciseaux)

5) Etape 2 | Choix du joeur :
   5.1 - Définir le choix du joueur via la méthode prompt de l'objet window (https://developer.mozilla.org/fr/docs/Web/API/Window/prompt) et le stoquer dans la variable "player"
  
   5.2 - Transformer cette chaine de caractère en minuscule avec la méthode toLowerCase (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/toLowerCase)
         Faite un affichage en console de la variable player pour voir si tout fonctionne

6) Etape 3 | Choix du CPU (Le début sera fait avec le professeur (étape 6.1 et 6.2):

   NB: Le choix du CPU sera conditionné par la génération d'un entier aléatoire comprise entre 1 et 3.
   
   6.1 - Générer dans un premier temps une valeur décimale comprise entre 0 et 1 non inclu avec la méthode random: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random
   
   6.2 - multiplier cette valeur par 3 puis l'arrondir à l'entier supérieur avec la méthode ceil de l'obejt Math: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/ceil
         Cela aura pour effet de ramener cette valeur a un entier compris entre 1 et 3. 
         NB: Il existe aussi la méthode floor pour arrondir à l'entier inférieur et round pour arrondir à l'entier le plus proche
   
   6.3 - A partir de cet entier déterminer le choix du CPU qui sera stocké dans la variable computer sous forme de chaine de caractère de sorte que:
         si random = 1 alors computer = "pierre"
            random = 2 alors computer = "feuille"
            random = 3 alors computer = "ciseaux"
            
7) Etape 4 | Afficher le choix du joeur et du CPU sous forme d'image
   7.1 - Afficher l'image relative au choix du joueur
         Exemple: si le joueur à choisi pierre alors il faudra afficher dynamiquement le code html suivant:
         <img src="pierre.png">
         
         Astuce: ici pas besoin d'avoir recours aux conditions. En vous basant sur le contenu de la variable player et en faisant de la concaténation vous serez en mesure de définir dynamiquement la source de cette image ;)
   
   7.2 - Faites de même pour afficher le choix du CPU
         Exemple si le CPU à choisi ciseaux alors il faudra afficher le code html suivant:
         <img class="reverse" src="ciseaux.png">
   
8) Etape 5 | Déterminer s'il y a eu égalité ou si le joueur à gagné ou perdu

   Pour étudier les 3 cas de figure il va falloir comparé les valeurs des variables player et computer. Le verdict sera stoqué dans la variable message qui sera affichée en toute fin.
   
   8.1 - Vérifier dans un premier temps s'il y eu égalité, c'est à dire si le choix du CPU est le même que celui deu joueur.
   
   8.2 - S'il n'y a pas d'égalité vérifier si le joueur a gagné ou perdu. Pour se faire nous utiliseront l'instruction switch pour une meilleur clareté du code:
         https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/switch
         
         Via cette instruction switch nous nous baseront sur le choix du joeur.
         
         Pour chacun des cas de figure nous vérifierons ensuite ce qu'a joué le CPU pour déterminer lequel des 2 l'emporte.
         
         Exemple:
         
         Le joueur à jouer pierre.
         
         Si le CPU à joué feuille alors il perd. Dans ce cas le contenu de la variable message sera égal à "Vous gagnez car la pierre écrase le ciseau".
         Autrement cela voudra dire que le CPU a joué feuille et c'est vous qui perdez. Le contenu de la variable message sera égal à "Vous perdez car la feuille enveloppe la pierre".
         
         NB: dans ce cas de figure il sera inutile de vérifier si le CPU à joué pierre car cette condition à été indirectement vérifié à dans la partie 8.1
         
         Pour rappel: Le papier l'emporte sur la pierre
                      La pierre l'emporte sur les ciseaux
                      Les ciseaux l'emporte sur le papier
        
    8.3 - Afficher le contenu de la variable message
    
    FIN
   
   