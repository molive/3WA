<!DOCTYPE html>
<html>
    <head>
	
		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
		<link rel="stylesheet" href="styles.css">
        <meta charset="utf-8" />
        <title>Mon super site</title>
    </head>
 
    <body>
 
    <!-- L'en-tête -->
    
    <header>
       
		<nav class="navbar navbar-default">
		  <div class="container-fluid">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
			  <a class="navbar-brand" href="#">Site Awesome!</a>
			</div>
		
		  </div><!-- /.container-fluid -->
		</nav>
	   
    </header>
    <div class="row">
		<!-- Le menu -->
		
		<div id="menu" class="list-group col-md-4">
		  <a href="pages/accueil.php" class="list-group-item active">
			Acceuil
		  </a>
		  <a href="pages/photos.php" class="list-group-item">
			Photos
		  </a>
		  <a href="pages/contact.php" class="list-group-item">Contact</a>
		  <a href="pages/membres.php" class="list-group-item">Membres</a>

		</div>
		
		<!-- Le corps -->
		
		<div class="col-md-8" id="corps">
			<!-- remplacer l'intégralité du contenu html de cette div par celui des liens contenus dans la div "menu" -->
			<?php include('pages/accueil.php'); ?>
		</div>
    </div>
    <!-- Le pied de page -->
    
    <footer id="footer">
		
        <p>Copyright moi, tous droits réservés</p>
    </footer>
    
	<!-- Latest compiled jQuery -->
	<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
	<script src="main.js"></script>
		
    </body>
</html>