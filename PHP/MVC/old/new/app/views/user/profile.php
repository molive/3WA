<?php echo '<h1> '.$title.'</h1>'; ?>
 
<h2>Posts de <?php echo $user->getUsername();?> :</h2>
 
 <?php foreach ($user->getPosts() as $post) {
 
 echo $post->getContent().'<hr>';
 }
 ?>