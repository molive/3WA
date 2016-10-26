'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

var shoppingList = new Array();



/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function addItem(item)
{
	// Ajoute le produit spécifié à la liste de courses.
	shoppingList.push(item);
}

function displayShoppingList()
{
	console.log('La liste contient ' + shoppingList.length + ' produit(s).');
	console.log(shoppingList);
}

function removeAllItems()
{
	// Remplacement de la liste de courses actuelle par une liste vide.
	shoppingList = new Array();
}

function removeItem(item)
{
	var index;

	// Recherche de l'emplacement (l'indice) du produit spécifié dans la liste de courses.
	index = shoppingList.indexOf(item);

	// Est-ce que le produit spécifié n'a pas été trouvé ?
	if(index == -1)
	{
		// Oui, affichage d'une erreur.
		console.log("ERREUR : le produit " + item + " n'existe dans la liste de courses");

		// Fin de la fonction removeItem(), il ne faut pas aller plus loin.
		return;
	}

	// Suppression du produit spécifié dans la liste de courses (le tableau diminue de taille).
	shoppingList.splice(index, 1);
}



/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

// Effacement du contenu de la console, au cas où.
console.clear();

// Etape 1.
addItem('Fraises');
addItem('Poulet');
addItem('Tournevis');
addItem('Artichaut');
displayShoppingList();

// Etape 2.
removeItem(window.prompt('Quel produit de la liste de courses souhaitez-vous supprimer ?'));
displayShoppingList();

// Etape 3.
removeAllItems();
displayShoppingList();