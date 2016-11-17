<?php   
// https://openclassrooms.com/courses/concevez-votre-site-web-avec-php-et-mysql/les-fonctions-32

/*

PHP inclu une importante quantité de fonction native: http://php.net/manual/fr/indexes.functions.php

*/


$phraze = "Je suis une phrase";
echo strlen($phraze);
echo str_shuffle($phraze);  // mélange les caractère

$phraze = str_replace("phrase", "patate", $phraze);
echo $phraze;



// Date:  http://php.net/manual/fr/function.date.php

$day = date('d');

echo $day;

$today = date("Y-m-d H:i:s");                     // 2001-03-10 17:16:18 (le format DATETIME de MySQL)
echo $today;

// Contrairement au JS on peut donnée à une variables et foctio npeuvent partager le mêem nom sans conflit

$test = "Hello";


function test(){

	return "Salut";

}

echo $test;
echo test();


// Autrement les règles sont les même qu'en JS


function sayHelloTo($name){

	echo "<h1>Bonjour ".$name."!</h1>";

}


function addition($value1 , $value2) {

	return $value1 + $value2;

}


sayHelloTo("Olivier");

echo addition(10,20);


// Portée des variables:

$var = "Test";

function check(){

	echo $var;  // afichera une erreur

}

$GLOBALS['var2'] = 'Test';

function check2(){

	echo $GLOBALS['var2']; 

}


check2();  

?>