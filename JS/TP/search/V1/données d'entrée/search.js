/* A travers ce TP nous allons apprendre à:

- Récupérer la valeur tapée dans un champs de formulaire grace à la propriété value
- Récupérer le texte brut situé dans un élément html gràce à la propriété textContent: https://developer.mozilla.org/fr/docs/Web/API/Node/textContent
- Ajouter ou supprimer une classe spécifique grace à la méthode toggle de la propriété classList: https://developer.mozilla.org/fr/docs/Web/API/Element/classList
- Vérifier si un mot est contenu dans une chaine de caractères gràce à la méthode indexOf: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/indexof 

*/


/*** ETAPE 1 ***/
// Dans le fichier style.css créer une classe "hide" qui permet de masquer un élément html sur lequel elle est appliquée

/*** Etape 2 ***/
// Ajouter un gestionnaire d'événement DOMContentLoaded sur l'objet document pour s'assurer que l'ensemble du DOM soit correctement chargé avant tout exécution de code JS:
// https://developer.mozilla.org/fr/docs/Web/Events/DOMContentLoaded

/*** Etape 3 ***/
// Déclarer une variable searchCategory qui contient un objet HTML relatif au champs de recherche (l'input ayant pour id="searchCategory")
// Déclarer une variable categories qui contient une collections d'objet HTML relative aux balises <li>

/*** Etape 4 ***/
// Appliquer un écouteur sur l'input "searchCategory" (le champs de recherche) qui déclenchera une fonction (anonyme ou déclarée en dehors) lorsqu'on écrira dedans. 
// NB: ous devrez définir en premier paramètre de la méthode addEventListener "keyup" 


// NB Les étapes suivantes devront être codées au sein de la fonction qui sera appelé lorsque l'on tapera dans le champs de recherche

/*** Etape 5 ***/
// Déclarer une variable locale searchText qui sera égal à ce qui a été tapé dans le champs de recherche
// Utiliser la propriété "value" pour récupérer le texte tapé dans le champs de recherche.

/*** Etape 6 ***/
// Parcourir l'ensemble des objets HTML de la variable categories 
// pour rappel vous pouvez au choix utiliser une de ces 3 solutions:
// - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for
// - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for...of
// - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach

/*** Etape 7 ***/
// Vérifier si ce qui a été tapé dans le champs de recherche est contenu dans l'une des catégories
// Exemple si je tape "juridique" il faudra rendre visible la catégorie en cours de traitement dans la boucle si elle contient ce terme.

/*

Pour se faire il faut d'abord procéder comme suit au sein de la boucle:

1) Récupérer le contenu textuel de la catégorie en cours de traitement: https://developer.mozilla.org/fr/docs/Web/API/Node/textContent
2) Vérifier si le text tapé dans le champs de recherche est contenu dans le texte brut de la catégorie:  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/indexof 
3) Si oui il faudra rajouter supprimer la classe "hide", autrement il faudra l'ajouter sur la catégorie correspondante

Aide:
<li>Coucou!</li>

<script>
var item = document.querySelector('li');

item.classList.toggle('hide',true);  // ajoute la classe hide de la balise li (equivalent item.classList.add('hide') )
item.classList.toggle('hide',false);  // supprime la classe hide de la balise li (equivalent item.classList.remove('hide') )

// Juste pour info:
item.classList.toggle('hide');  // ajoute la classe hide si elle n'y est pas, ou la supprime dans le cas contraire.

</script>


*/