<?php 
define('BASE_URL', "http://localhost/3WA/POO/New/");
// http://codeshare.io/Redws


function __autoload($class_name) {
    require BASE_URL.'/classes/'.$class_name . '.php';
}

//require('classes/User.php');
//require('classes/BigBoss.php');

// On va créer un objet $user qui est l'instance de notre class User
$user = new User('Olivier','Martin');

echo $user->getFirstname();
echo $user->getLastname();

echo BASE_URL;




/*
$user->setLastname = 'Martin';

$user->setAddress('104 cours Emile Zola');
$user->setZip(69100);
$user->setCity('Villeurbanne');

$user->setBirthday('21-9-1988');


$user2 = new User('Florent');
echo $user2->getLastname();



echo $user->getBirthday();
echo '<br>';
echo $user->getAge();

$user->setCompetencies('PHP');

$user->setCompetencies('CSS');
$user->setCompetencies('HTML5');


//$competencies = array('MYSQL','SYMFONY');


//print_r($user->getCompetencies());  // array('PHP','CSS','HTML5');
echo '<p>Mes comp&eacute;tences : '.implode(' / ',$user->getCompetencies()).'</p>';

// PHP, CSS, HTML5

// en JS user.firstname


//echo $user->getFullAddress();

*/

?>