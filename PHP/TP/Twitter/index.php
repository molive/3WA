<?php  include('common.php');
// On récupère tous les posts enregistrés ainsi que leurs auteurs
$query = $pdo->prepare('
SELECT user_id , posts.created_at, content, username, posts.id 
FROM posts 
INNER JOIN users ON users.id = posts.user_id 
ORDER BY posts.created_at DESC');

$query->execute();

$posts = $query->fetchAll(PDO::FETCH_ASSOC);

$template = 'posts.phtml';   
include('layout.phtml');

?>