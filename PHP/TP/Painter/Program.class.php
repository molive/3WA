<?php

class Program
{
    public function run(SvgRenderer $renderer)
    {
        // Création et initialisation d'un rectangle.
        $rectangle1 = new Rectangle();
		$rectangle1->setLocation(50, 20);
        $rectangle1->setColor('firebrick');
        $rectangle1->setSize(200, 100);

		// Création et initialisation d'une ellipse.
		$ellipse1 = new Ellipse();
		$ellipse1->setLocation(600, 180);
        $ellipse1->setColor('seagreen');
		$ellipse1->setRadius(40, 80);

        // Création et initialisation d'un carré.
        $square1 = new Square();
		$square1->setLocation(400, 200);
        $square1->setColor('deepskyblue');
		$square1->setOpacity(0.5);
        $square1->setSize(100);

        // Création et initialisation d'un cercle.
        $circle1 = new Circle();
        $circle1->setLocation(300, 250);
        $circle1->setColor('gold');
		$circle1->setOpacity(0.33);
        $circle1->setRadius(180);

        // Création et initialisation d'un triangle.
        $triangle1 = new Triangle();
        $triangle1->setCoordinates(60, 60, 200, 250, 60, 250);
        $triangle1->setColor('purple');
        $triangle1->setOpacity(0.75);


        // Ajout des différents objets géométriques au moteur graphique.
        $renderer->addShape($rectangle1);
        $renderer->addShape($square1);
        $renderer->addShape($circle1);
        $renderer->addShape($ellipse1);
        $renderer->addShape($triangle1);

		// Exécution du moteur graphique.
        $renderer->run();
    }
}