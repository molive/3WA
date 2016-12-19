<?php 
function generateRandomString($length) {  // Servira à générer le SALT de 22 caractères pour crypter le mot de passe lors de l'inscription et le jeton de session $_SESSION['csrf_token'] pour se protéger des attaques csrf
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

function __autoload($class)
{   
    include('Classe/'.$class . '.php');
}

/*
$user = new User;

$user->username = 'Momofhhh24';
$user->email = 'the.mooouuffuoolive@gmajil.com';
$user->password = 'lolojlol';
$user->birthday = "1988-9-21";
$user->save();


echo $user->id;

echo $user->salt;
*/


$user = User::find(2);

echo $user->username;