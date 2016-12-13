/**** Création l'Objet Dice avec une fonction contructeur ****/

// Lien utile: https://developer.mozilla.org/fr/docs/Web/JavaScript/Introduction_%C3%A0_JavaScript_orient%C3%A9_objet


/* 
Caractrique de l'objet Dice:

2 propriétés:
- dice (contient un objet jQuery qui sera passé en paramètre de la fonction constructeur Dice)
- valeur (contiendra la valeur actuelle du dé (par défaut 1)


Un prototype ( https://www.grafikart.fr/formations/debuter-javascript/prototype ) contitué de 3 méthodes :

- lancer : Aura pour rôle de changer aléatoirement la valeur du dé (donc sa propriété valeur) entre 1 et 6. 
           Il faudra également garder en mémoire la valeur de CE dé dans le navigateur grace à la propriété localStorage de l'objet window (https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage)
		   >>> localStorage.setItem('{{ id_du_dé }}_valeur_actuelle', {{ valeur actuelle du dé }})

- changerFace : Aura pour rôle de changer la face du dé en modifiant la propriété css background-image du dé en fonction de sa valeur.
                Si la valeur du dé vaut 2 alors la propriété css 'background-image' sera égal à 'url("images/2.png")'.

- init : aura pour rôle:
			1) D'appliquer un écouteur d'événement qui déclenchera la méthode lancer du dé cliqué
			2) Vérifier localStorage.setItem('{{ id_du_dé }}_valeur_actuelle') contient une donnée. Si oui modifier la propriété "valeur" par celle-ci.
			3) Mettre à jour la face du dé en appelant la méthode "changerFace()".

*/