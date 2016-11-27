<?php

class Triangle extends Shape
{
    /** @type Point[] $points */
    private $points;


    public function __construct()
    {
        // Appel le constructeur de la classe parent, la classe Shape.
        parent::__construct();

        $this->points = array(new Point(), new Point(), new Point());
    }

    public function draw(SvgRenderer $renderer)
    {
        // Utilisation de l'objet renderer pour dessiner un triangle avec ses propriétés.
        $renderer->drawTriangle($this->points, $this->color, $this->opacity);
    }

    public function setCoordinates($x1, $y1, $x2, $y2, $x3, $y3)
    {
        $this->points[0]->moveTo($x1, $y1);
        $this->points[1]->moveTo($x2, $y2);
        $this->points[2]->moveTo($x3, $y3);
    }
}