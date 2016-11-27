<?php

namespace MonProjet\Controller;

use Silex\Application;


class HomepageController
{
    /*
     * L'argument de la classe Application peut porter n'importe quel nom du moment
     * qu'il y a le type hint Application. Il peut se trouver n'importe où dans la
     * liste des arguments de la méthode.
     */
    public function showHome(Application $app)
    {
        $fruits = [ 'babane' => 'jaune', 'abricot' => 'orange', 'fraise' => 'rouge' ];

        // Demande à Twig de générer la vue en partant du template homepage.html.twig.
        return $app['twig']->render
        (
            'homepage.html.twig',
            [   // Liste des variables Twig disponibles dans le template.
                'firstName' => 'Nicolas',
                'fruits'    => $fruits
            ]
        );
    }
}