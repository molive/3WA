<?php $pdo = new PDO('mysql:host=mysql5-20.perso;dbname=maphrasedata', 'maphrasedata', 'YBsouwNo666');
$query = $pdo->prepare('SELECT id, username , email FROM users WHERE username LIKE :keyword');
$query->execute(['keyword' => "%".$_GET['keyword']."%"]);


$users = $query->fetchAll(PDO::FETCH_ASSOC);
header('Content-type: text/javascript');
echo json_encode($users, JSON_PRETTY_PRINT);