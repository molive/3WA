<?php
require('User.php');
/*$user = new User();
$user->setUsername('IronMan5');
$user->setPassword('jarvis');
$user->save();
*/

$user = User::find(5);

$users = User::findAll();

foreach($users as $user) {

'<br>-'.echo $user->getUsername();

}


echo $user->getUsername();




/*
if($user->checkPassword($_POST['password']) == $user->getPassword()) {
  
  echo 'BON MOT DE PASS';
}
else
{
  echo "MAUVAIS MOT DE PASSE";
}
*/
/*
$user = new User();
$user->setUsername('SuperDude');
$user->setPassword('bidon');
$user->save();



echo '<br>- ID : '.$user->getId();
echo '<br>- Username : '.$user->getUsername();
echo '<br>- Password : '.$user->getPassword();

*/



?>

<form method="post" >
  
  <input type="password" name="password">
  <input type="submit">
</form>