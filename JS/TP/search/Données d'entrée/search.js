/* A travers ce TP nous allons devoir utiliser ces méthodes :

http://api.jquery.com/val/    >>> Pour récupérer la valeur d'un champs de formulaire
http://api.jquery.com/keyup/  >>> Pour déclencher une fonction lorsqu'on tapera des caractère dans le champs de recherche
http://api.jquery.com/each/   >>> Pour parcours l'ensemble des catégories
http://api.jquery.com/toggle/ >>> Pour afficher ou masquer une catégories au cours de la recherche

http://api.jquery.com/next/   >>> Pour cibler l'élément html ul contenant situé juste après les balises span ayant pour classe "parent"
http://api.jquery.com/find/   >>> Pour récupérer les sous catégories visible de chaque catégories parents


https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/toLowerCase   >>> Pour formater en minuscule la recherche tapé ainsi que le nom des catégories
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/indexof   >>> Pour vérifier si une catégorie correspond à ce qui a été tapé dans le moteur de recherche

*/




/*** ETAPE 1 ***/
// Déclarer une variable $searchCategory qui contient un objet jQuery relatif au champs de recherche (l'input ayant pour id="searchCategory")
// Déclarer une variable $categories qui contient une collections d'objet jQuery relative aux balises <li> possédant une classe "selectable"
/

/*** Etape 2 ***/
// Appliquer un écouteur d'événement sur l'input "searchCategory" (le champs de recherche) qui déclenchera une fonction lorsqu'on écrira dedans. La fonction qu'on passera en apramètre de la méthode keyup sera anonyme car nous n'auront pas besoin de la réutiliser ailleurs.


// NB Les étapes suivantes devront être codées au sein de la fonction passée en paramètre de la méthode keyup ci-dessus

/*** Etape 3 ***/
// Déclarer une variable locale searchText qui sera égal à ce qui a été tapé dans le champs de recherche

/*** Etape 4 ***/
// Parcourir l'ensemble des objets jQuery de la variable $categories avec la méthode each

/*** Etape 5 ***/
// Vérifier si ce qui a été tapé dans le champs de recherche est contenu dans l'une des catégories// 
// Exemple si je tape "juridique" il faudra rendre visible la catégorie en cours de traitement dans la boucle si elle contient ce terme.