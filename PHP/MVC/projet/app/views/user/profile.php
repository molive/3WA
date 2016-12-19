<?php echo '<h1> '.$title.'</h1>'; ?>
 
<h2>Posts de <?php echo $user->getUsername();?> :</h2>
 
 <?php $posts = $user->getPosts();
 if($posts != null) {
 foreach ($posts as $post) {
 
 echo $post->getContent().'<hr>';
 }
 }
 else echo '<div class="alert alert-info">Aucun post pour le moment</div>';
 ?>