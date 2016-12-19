

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
<?php

// POO
/*
>>> Permet de réutiliser l'existant, meilleur maintenabilité du code
>>> exemple du E-commerce avec les object client, objets produits , object commande
>>> Regrouper le code dans un object plus facile à manipuler
>>> Un object confine (encapsule) un ensemble de variable et de fonction et de variable qui ne rentre pas en conflict avec le reste de l'application
*/
try {

require_once('User.class.php');
require_once('Admin.class.php');

$user = new User('Olivier','Martin');
$user->setEmail('the.molive@gmail.com');
$user->setBirthday('21-9-1988');
$user->setGender('m');

$user2 =  new User('Julien','Boyer');
$user3 =  new User('Tony','Stark');
$user4 =  new User('Marion','Manzettie');
$user5 =  new User('Sandra','Gomez');
$user6 = new Admin('Big', 'Boss');


echo '<h1>Journal des interactions entre utilisateurs :</h1>';

echo $user->becomeFriend($user2);
echo $user->becomeFriend($user3);
echo $user->becomeFriend($user4);
echo $user2->becomeFriend($user3);


echo $user->messageTo($user2,'Salut mister !');
echo $user2->like($user);
echo $user3->like($user);

$nbUser = User::getNbUsers();
echo '<div class="alert alert-info">Il y a au total '.$nbUser.' utilisateur(s) de créé(s)</div>';
?>

<h1>Infos de <?php echo $user->getFirstname();?> <?php echo $user->getLastname();?></h1>
<ul>
<?php
if($user->isVisible()) $statut = 'Visible'; else $statut = 'Exclu';
echo '<li>Age : '.$user->getAge().' ans</li>';
echo '<li>Genre : '.$user->getGender().'</li>';
echo '<li>Date d\'enregistrement : '.$user->getCreateAt().'</li>';
echo '<li>Mentions "J\'aime" : '.$user->getNbLikes().'</li>';
echo '<li>Statut : '.$statut.'</li>';
?>
</ul>

<?php // Tkt je ne ferai pas faire cette boucle aux élèves mais juste du copier collé ;)
for($i = 1;$i < $nbUser ; $i++) {
if($i == 1) $j = ''; else $j = $i;
$instance = 'user'.$j.'';
$object = $$instance;
// ¨Pour les élèves mettre directement : $object = $user; 
if($object->getNbFriends() != 0) { ?>
<h2>Liste des amis de <?php echo $object->getFirstname();?> (<?php echo $object->getNbFriends();?>)</h2>
<ul>
<?php 
$friends = $object->getFriends();

foreach($friends as $friend) {
echo '<li>'.$friend->getFirstname().' '.$friend->getLastname().'</li>';
}
?>




</ul>

<?php
}
} 
?>


<?php 
}
 catch (Exception $e) {
    echo '<div class="alert alert-danger">Exception reçue : ',  $e->getMessage(), "</div>";
}
?>

  <body>
<html>