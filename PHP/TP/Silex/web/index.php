<?php

require_once __DIR__.'/../vendor/autoload.php';

$app = new Silex\Application();


$app->get('/hello', function () {
    return 'Hello!';
});

$app->get('/posts',
    'Projet\Controller\PostController::index');

$app->get
(
    '/user/{id}',
    'Projet\Controller\UserController::profile'
);


$app->post('/register',
    'Projet\Controller\UserController::create');

$app->get('/register',
    'Projet\Controller\UserController::create');
	
$app->run();
