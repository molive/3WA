<?php

class Triangle extends Shape
{



    public function __construct()
    {
        // Appel le constructeur de la classe parent, la classe Shape.
        parent::__construct();

        $this->points = array(new Point(), new Point(), new Point());
    }
	
	
	
	public function getPoints(){
	
		return $this->points;
	
	}

    public function draw(SvgRenderer $renderer)
    {
        // Utilisation de l'objet renderer pour dessiner un triangle avec ses propriétés.
        $renderer->drawTriangle($this);
    }

    public function setCoordinates($x1, $y1, $x2, $y2, $x3, $y3)
    {
        $this->addPoint($x1, $y1);
        $this->addPoint($x2, $y2);
        $this->addPoint($x3, $y3);
    }
	
}