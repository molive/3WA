<?php foreach ($tutos as $t): ?>
<h1><a href="<?php echo WEBROOT; ?>tutoriels/view/<?php echo $t['id']; ?>"><?php echo $t['titre']; ?></a></h1>
<?php endforeach; ?>