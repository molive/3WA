<?php

require_once __DIR__.'/../vendor/autoload.php';


function call($controller,$method = "index",$parameters = array()){

	$controller = "..\App\Controller\\".$controller;
	
	$controller = new $controller;
	
	if(method_exists($controller, $method)){
   
		call_user_func_array(array($controller,$method),$parameters);
	
	}
	else return '404 error';

}


$app = new Silex\Application();

/*
 * Activation de Twig pour les templates.
 *
 * http://silex.sensiolabs.org/doc/providers/twig.html#registering
 */
$app->register
(
    new Silex\Provider\TwigServiceProvider(),
    [
        'twig.path' => __DIR__.'/view'
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

$app->get('/hello', function () {

    return 'Hello!';
	
});

$app->get('/user/{id}', function ($id) {

    call('UserController','profile',[$id]);
	
});


$app->run();
