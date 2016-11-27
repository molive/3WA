<?php

// Chargement du fichier d'autoload généré par Composer.
include __DIR__.'/../vendor/autoload.php';


// Annonce au PHP que la classe Application se trouve dans un namespace Silex
use Silex\Application;

// Instancie la classe Application (qui se trouve dans le namespace Silex)
$app = new Application();


/////////////////////////////////////////////////////////////////////////////////////////
// CONFIGURATION DE L'APPLICATION                                                      //
/////////////////////////////////////////////////////////////////////////////////////////

// Activation du mode debogage de Silex
$app['debug'] = true;

/*
 * Activation de Twig pour les templates.
 *
 * http://silex.sensiolabs.org/doc/providers/twig.html#registering
 */
$app->register
(
    new Silex\Provider\TwigServiceProvider(),
    [
        'twig.path' => __DIR__.'/View'
    ]
);

/*
 * Activation des fonctions de routing dans les templates.
 *
 * http://silex.sensiolabs.org/doc/providers/url_generator.html
 */
$app->register
(
    new Silex\Provider\UrlGeneratorServiceProvider()
);

// Code exécuté en cas d'erreur fatale PHP ou dans l'utilisation de Silex.
$app->error(function(Exception $exception, $httpStatusCode)
{
    /*
     * Si $httpStatusCode vaut 404 cela signifie qu'aucune route ne correspond
     * à l'URL spécifiée.
     */

    return "<h1>ERREUR $httpStatusCode !</h1>".$exception->getMessage();
});



/////////////////////////////////////////////////////////////////////////////////////////
// DECLARATION DES ROUTES                                                              //
/////////////////////////////////////////////////////////////////////////////////////////

$app->get
(
    '/',
    'MonProjet\Controller\HomepageController::showHome'
)
->bind('homepage');             // Nom de la route

$app->get
(
    '/customers',
    'MonProjet\Controller\CustomerController::showSearchForm'
)
->bind('customer_form');        // Nom de la route

$app->post
(
    '/customers',
    'MonProjet\Controller\CustomerController::handleSearchForm'
)
->bind('customer_list');        // Nom de la route

$app->get
(
    '/flickr',
    'MonProjet\Controller\FlickrController::showFlickrForm'
)
->bind('flickr_form');        // Nom de la route

$app->post
(
    '/flickr',
    'MonProjet\Controller\FlickrController::handleFlickrForm'
)
->bind('flickr_list');        // Nom de la route

$app->get
(
    '/hello',
    function()                  // Fonction anonyme avec le code du contrôleur
    {
        return 'Hello world !';
    }
);

$app->get
(
    '/bonjour/{firstName}/{age}',
    'MonProjet\Controller\BonjourController::sayHello'
)
->value('firstName', 'Tom')     // Valeur par défaut du paramètre d'URL {firstName}
->value('age', 20)              // Valeur par défaut du paramètre d'URL {age}
->assert('age', '\d+')          // Contrainte numérique sur le paramètre d'URL {age}
->bind('dire_bonjour');         // Nom de la route



/////////////////////////////////////////////////////////////////////////////////////////
// EXECUTION DE L'APPLICATION SILEX                                                    //
/////////////////////////////////////////////////////////////////////////////////////////

$app->run();