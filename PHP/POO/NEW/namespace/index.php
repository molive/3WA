<?php // http://fr.php.net/manual/fr/function.spl-autoload-register.php

function cool (){

	echo 'Ca marche';

}


spl_autoload_register(function ($class) {

    require($class . '.php');
	
});


spl_autoload_register(function ($class) {
    include 'classes/' . $class . '.php';
});


$class= 'Classes\\Test';


$user = new User();

$user->test();
	
$test = new $class();

$test->test();


$user2 = &$user;

$user2->name = '^^';

echo $user->name;


$val = $val2 = 5;


$val2 = 4;

echo $val2;
