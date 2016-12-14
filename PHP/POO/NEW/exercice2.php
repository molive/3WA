<?php 
define('BASE_URL', "http://localhost/3WA/POO/New/");
define('COUNTRY', "BELGIQUE");

/*
require('classes/User.php');
require('classes/Order.php');
require('classes/Product.php');
*/

function __autoload($class_name) 
	{
		require('classes/'.$class_name . '.php');
	}
	
	$user = new User('MARTIN', 'OLIVIER');

	$bigBoss = new BigBoss('Djamchid','Dalili');
 $bigBoss2 =  new BigBoss('Hulk','Hogan');
 
 $bigBoss->ban($bigBoss2);
 
 $bigBoss->setBirthday('15-10-1956');
 
 echo $bigBoss->getAge();
 
	exit;
	
	
	$order = new Order('XLBFZ');
?>
<DOCTYPE html>
<html>
  <head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
 <style>
 body {
margin:20px;
 }
 </style>
 </head>
  <body>
<?php try {

//require('classes/User.php');

// On va créer un objet $user qui est l'instance de notre class User
$user1 = new User('Olivier','Martin');
$user2 = new User('Adrien','Didier');
$user3 = new User('Said','Narco');
$user4 = new User('Marie','Boyer');
$bigBoss = new BigBoss("Djamchid","Dalili");



$user5 = new User ('Maxime','Perrier');
$user5->setZip(69100);
$user5->setAddress('104 cours Emile Zola');
$user5->setCity('Villeurbanne');

echo $user5->getFullAddress();

//echo $bigBoss->ban($user4);


echo $user1->becomeFriend($user3);
// du coup $user3->becomeFriend($user1); mais on va automatiser ce comportement


echo $user1->becomeFriend($user2);
echo $user1->becomeFriend($user4);

$friends = $user1->getFriends();
// array($user3,$user2,$user4);
foreach($friends as $friend){

echo '<br>'.$friend->getFirstname();

/*
- Said
- Adrien
- Marie

*/
}
// Olivier est devenu amis avec Adrien

/*
$product = new Product('Test');

$user1->addProduct($product);*/

/*
$users = array($user1,$user2,$user3,$user4);

foreach($users as $user){
echo '<br>'.$user->getFirstname();
}
*/

$user1->messageTo($user2,'Salut !');


$user1->setAvatar('avatar.png');
//echo $user1->getAvatar(500);

$user1->setEmail('the.moliveg@mail.com');



//echo $user1->messageTo($user3,'Quand est-ce que tu reviens en cours ?');

$user1->likeTo($user2);
$user3->likeTo($user2);
$user4->likeTo($user2);

$user2->likeTo($user2);


echo $user2->getNbLikes();


//$user1->like($user2);

/*
$bigBoss = new BigBoss('Hulk','Hogan');

echo $bigBoss->ban($user1);

echo $user1->getFirstname();
*/

//echo $user1->getEmail();
//$user1->isValidEmail('hdgjqd');



}
 catch (Exception $e) {
   echo '<div class="alert alert-danger">Exception reçue : '.  $e->getMessage(). "</div>";
}
?>

  <body>
<html>
