<?php require_once('common.php');

// 1) Stocker le post dans la table "posts"

$query = $pdo->prepare('INSERT INTO posts(content, user_id) VALUES(?, ?)');
$query->execute([$_POST['content'], $_SESSION['user_id']]);

// 2) Rediriger l'utilisateur sur la page index.php
header('location: index.php');