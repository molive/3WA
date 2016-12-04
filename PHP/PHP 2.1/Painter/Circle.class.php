<?php

class Circle extends Ellipse
{
	public function draw(SvgRenderer $renderer)
	{
		// Utilisation de l'objet renderer pour dessiner un cercle avec ses propriétés.
		$renderer->drawCircle
		(
			$this->location,
			$this->color,
			$this->opacity, 
			$this->xRadius
		);
	}

    /*
     * On veut surcharger la méthode setRadius() de l'ellipse pour qu'elle fonctionne
     * différemment. Pour cela il suffit de la réécrire ici dans la classe Circle.
     *
     * Problème : la surcharge en PHP oblige à respécifier tous les arguments de la
     * méthode originale, or on n'a besoin que d'un seul argument pour spécifier le
     * rayon d'un cercle.
     *
     * Si on ne fait rien cela oblige à écrire :
     * $circle = new Circle();
     * $circle->setCircle(100, 0); <==== le 0 est de trop mais obligatoire
     *
     * Alors que l'on voudrait pouvoir écrire :
     * $circle->setCircle(100);
     *
     *
     * Il faut donc rendre le deuxième argument optionnel, avec la syntaxe
     * ci-dessous.
     *
     * Note : les arguments optionnels existent autant en programmation procédurale
     * qu'en programmation orientée objet.
     *
     */
	public function setRadius($radius, $yRadius = 0)
	{
		$this->xRadius = $radius;
		$this->yRadius = $radius;
	}
}