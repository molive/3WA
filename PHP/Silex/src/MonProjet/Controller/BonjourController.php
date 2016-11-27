<?php

namespace MonProjet\Controller;

use Silex\Application;


class BonjourController
{
    /*
     * Les arguments $firstName et $age ont exactement les mêmes noms que
     * les paramètres d'URL {firstName} et {age}.
     *
     * L'argument de la classe Application peut porter n'importe quel nom du moment
     * qu'il y a le type hint Application. Il peut se trouver n'importe où dans la
     * liste des arguments de la méthode.
     */
    public function sayHello(Application $app, $firstName, $age)
    {
        if($age < 18)
        {
            // Redirection HTTP.
            return $app->redirect('www.disney.fr');
        }

        // Modification de la première lettre en majuscule.
        $firstName = ucfirst($firstName);

        return "Bonjour $firstName, vous avez $age ans !";
    }
}