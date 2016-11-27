<?php

// Liste des classes dans l'ordre des dépendances.
include 'Point.class.php';

include 'Shape.class.php';

include 'Ellipse.class.php';
include 'Circle.class.php';
include 'Rectangle.class.php';
include 'Square.class.php';
include 'Triangle.class.php';

include 'SvgRenderer.class.php';

include 'Program.class.php';



/********** CODE PRINCIPAL **********/

// Création d'une instance de notre programme et du moteur SVG puis exécution.
$program  = new Program();
$renderer = new SvgRenderer();
$program->run($renderer);


// Inclusion du template.
include 'index.phtml';