<?php

class Ellipse extends Shape
{
	protected $xRadius;

	protected $yRadius;


	public function __construct()
	{
		// Appelle le constructeur de la classe parent, la classe Shape.
		parent::__construct();

		$this->xRadius = 0;
		$this->yRadius = 0;
	}

	public function draw(SvgRenderer $renderer)
	{
		// Utilisation de l'objet renderer pour dessiner une ellipse avec ses propriétés.
		$renderer->drawEllipse
		(
			$this->location,
			$this->color,
			$this->opacity, 
			$this->xRadius,
			$this->yRadius
		);
	}

	public function setRadius($xRadius, $yRadius)
	{
		$this->xRadius = $xRadius;
		$this->yRadius = $yRadius;
	}
}