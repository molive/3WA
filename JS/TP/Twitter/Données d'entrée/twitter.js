$(function(){

	/* A travers ce TP nous allons découvrir:
	>>> La méthode .submit() en savoir plus http://api.jquery.com/submit/  (pour exécuter une fonction lors d'un envoi de formulaire)
	>>> La délégation d'événement avec la méthode "on" en savoir plus http://api.jquery.com/on/  (pour mettre des écouteurs d'événements sur des éléments html déjà en place ou amenés à apparaitre sur la page).

	// Et en bonus:
	>>> La méthode .slideUp() en savoir plus http://api.jquery.com/slideup/  (pour cacher un élément html avec un effet de slide vertical)
	>>> La méthode .slideDown() en savoir plus http://api.jquery.com/slidedown/ (pour afficher un élément html avec un effet de slide vertical)
	>>> La méthode .fadeTo() en savoir plus http://api.jquery.com/fadeTo/ (pour modifier l'opacité d'un élément html avec un effet de fadeIn ou fadeOut)
	*/

  /*** ETAPE 1  ***/
  // 1) Déclarer une variable $form qui contient le formulaire sous forme d'objet jQuery
  // 2) Déclarer une variable $textareaTweet qui contiendra le champs textaera du forumulaire "twitterForm" sous forme d'objet jQuery
  // 3) Déclarer une variable $charCounterArea qui contiendra la span "charCounter" sous forme d'objet jQuery. Cet élément servira à afficher le nombre de caractères tapés par l'utilisateur
  // 4) Déclarer une variable $thread qui contiendra la div "thread" sous forme d'objet jQuery et servant à afficher les tweets postés

  
  /*** ETAPE 2 ***/
  // 1) Ajouter le contenu du tweet en tête de liste de la div "thread"
  // Astuce utiliser la méthode .submit() http://api.jquery.com/submit/ pour traiter l'envoi du formulaire et faire apparaitre le tweet avec la méthode .prepend()
  /*
	Pour rappel la structure html d'un tweet est celle-ci:
	<div class="tweet">
		{contenu du tweet (140 caractères max)}
		<button class="delete btn btn-danger btn-xs">Supprimer X</button>
	</div>
  */
  
  /*** Etape 3 ***/
  // NB: Il est prévu que cette étape soit faite avec le professeur.
  // Supprimer le tweet lorsque l'on clique sur le bouton "Supprimer X" qui lui est associé
  // Astuce: une fois le bouton cliqué il faudra ciblé son parent  (la div avec la classe "tweet") pour ensuite le supprimer avec la méthode remove
  // Astuce 2: Vous allez devoir utiliser la délégation d'événement à l'intérieur de la div "thread"
  
  /*** Etape 4 (BONUS) ***/
  // Actualiser le contenu de la div charCounter en faisant diminué le nombre de caractère restant. Si la valeur est négative (exempel -45) alors elle devra apapraitre en rouge.

  /*** Etape 5 (BONUS) ***/
  //  1) Bloquer l'envoi du formulaire sur le nombre de caractères tapé est supérieur à 140 et afficher un message d'erreur.

  /*** Etape 6 (BONUS) ***/ 
  // 1) Faire apparaitre les nouveau tweet avec un effet de slide vers le bas http://api.jquery.com/slidedown/
  // Astuce: vous devrez veuiller à ce que le tweet soit d'abord masqué pour avoir l'effet.

  /*** Etape 7 (BONUS) ***/ 
  // Faire disparaitre le tweet d'abord en réduisant son opacité jusqu'à 0.4 avec la méthode fadeTo http://api.jquery.com/fadeTo/  puis lui appliquer un effet de slide vers le haut avant de le faire disparaitre.
  // Astuce: Utiliser une fonction de rappel sur la méthode fadeTo pour éviter que les 2 effets gérant la disparition ne se produisent simultanément.
  
  
});







