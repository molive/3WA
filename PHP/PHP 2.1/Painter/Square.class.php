<?php

class Square extends Rectangle
{
    /*
     * On veut surcharger la méthode setSize() du rectangle pour qu'elle fonctionne
     * différemment. Pour cela il suffit de la réécrire ici dans la classe Square.
     *
     * Problème : la surcharge en PHP oblige à respécifier tous les arguments de la
     * méthode originale, or on n'a besoin que d'un seul argument pour spécifier la
     * taille d'un carré.
     *
     * Si on ne fait rien cela oblige à écrire :
     * $square = new Square();
     * $square->setSize(100, 0); <==== le 0 est de trop mais obligatoire
     *
     * Alors que l'on voudrait pouvoir écrire :
     * $square->setSize(100);
     *
     *
     * Il faut donc rendre le deuxième argument optionnel, avec la syntaxe
     * ci-dessous.
     *
     * Note : les arguments optionnels existent autant en programmation procédurale
     * qu'en programmation orientée objet.
     *
     */
	public function setSize($size, $height = 0)
	{
		$this->height = $size;
		$this->width  = $size;
	}
}