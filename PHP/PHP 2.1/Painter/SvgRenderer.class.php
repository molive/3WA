<?php

class SvgRenderer
{
    // Tableau de chaînes de caractères de balises SVG.
    private $results;

    // Tableau d'objets géométriques de la classe Shape ou de ses dérivés (= ses enfants).
    private $shapes;

    
	
    public function __construct()
    {
        $this->results = array();
        $this->shapes  = array();
    }

    public function addShape(Shape $shape)
    {
        // Ajout d'un objet géométrique au tableau d'objets.
        array_push($this->shapes, $shape);
    }

	public function drawCircle(Point $center, $color, $opacity, $radius)
	{
        // Création de variables intermédiaires.
        $x = $center->getX();
        $y = $center->getY();

        // Ajout d'une balise SVG <circle>
        array_push
		(
            $this->results,
			"<circle cx='$x' cy='$y' r='$radius' fill='$color' opacity='$opacity' />"
		);
	}

	public function drawEllipse(Point $center, $color, $opacity, $xRadius, $yRadius)
	{
        // Création de variables intermédiaires.
        $x = $center->getX();
        $y = $center->getY();

		// Ajout d'une balise SVG <ellipse>
        array_push
		(
            $this->results,
			"<ellipse cx='$x' cy='$y' rx='$xRadius' ry='$yRadius' fill='$color' opacity='$opacity' />"
		);
	}

	public function drawRectangle(Point $origin, $color, $opacity, $width, $height)
	{
        // Création de variables intermédiaires.
        $x = $origin->getX();
        $y = $origin->getY();

		// Ajout d'une balise SVG <rect>
        array_push
		(
            $this->results,
			"<rect x='$x' y='$y' width='$width' height='$height' fill='$color' opacity='$opacity' />"
		);
	}

	static function renderPoint($point){
	
		return $point->getX()." ".$point->getY();
	
	}
	
	public function getSvgTag($type,Shape $shape){
	
	  
		$points = implode(array_map('SELF::renderPoint', $shape->getPoints()),',');  // listera les coordonnées sous cette forme: "x1 y1, x2 y2, x3 y3"

	
		$opacity = $shape->getOpacity();
		$color = $shape->getColor();
		
		return "<$type points='$points' fill='$color' opacity='$opacity' />";
	
	}
	
	
    public function drawTriangle(Triangle $triangle)
    {

        // Ajout d'une balise SVG <polygon>
		
		$this->results[] = $this->getSvgTag('polygon',$triangle);
		

    }

	public function getResult()
	{
		// Ajout d'un conteneur SVG et concaténation de toutes les chaînes de balises SVG.
		$svgContainer  = '<svg height="600px" width="800px">';
		$svgContainer .= implode($this->results);
		$svgContainer .= '</svg>';

		return $svgContainer;
	}

    public function run()
    {
        // Boucle sur le tableau d'objets géométriques.
        foreach($this->shapes as $shape)
        {
            /** @type Shape $shape */

            // Chaque objet se dessine en utilisant nos propres méthodes (nous-même = this).
            $shape->draw($this);
        }
    }
}