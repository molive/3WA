<?php

namespace MonProjet\Controller;

use MonProjet\Infrastructure\FlickrService;
use MonProjet\Model\CustomerModel;

use Silex\Application;

use Symfony\Component\HttpFoundation\Request;


class FlickrController
{
    /*
     * L'argument de la classe Application peut porter n'importe quel nom du moment
     * qu'il y a le type hint Application. Il peut se trouver n'importe où dans la
     * liste des arguments de la méthode.
     *
     * L'argument de la classe Request peut porter n'importe quel nom du moment
     * qu'il y a le type hint Request. Il peut se trouver n'importe où dans la
     * liste des arguments de la méthode.
     */
    public function handleFlickrForm(Application $app, Request $request)
    {
        // Equivalent Silex à $_POST['tagList']
        $tagList = $request->request->get('tagList');

        // Recherche des photos utilisant la liste de tags spécifiée.
        $flickrService = new FlickrService();
        $flickrPhotos  = $flickrService->searchPhotos($tagList);

        // Demande à Twig de générer la vue en partant du template flickr.html.twig.
        return $app['twig']->render
        (
            'flickr.html.twig',
            [   // Liste des variables Twig disponibles dans le template.
                'flickrPhotos' => $flickrPhotos
            ]
        );
    }

    /*
     * L'argument de la classe Application peut porter n'importe quel nom du moment
     * qu'il y a le type hint Application. Il peut se trouver n'importe où dans la
     * liste des arguments de la méthode.
     */
    public function showFlickrForm(Application $app)
    {
        return $app['twig']->render('flickr.html.twig');
    }
}