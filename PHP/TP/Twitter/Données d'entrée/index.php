<?php // Inclure les infos de connexion à la bdd ?>
<!DOCTYPE html>
<html>
	<head>
	<meta charset="UTF-8">
			
		<link href="https://netdna.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
		<link href="https://netdna.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" rel="stylesheet">
		<link rel="stylesheet" href="twitter.css" type="text/css" media="screen" />    

	</head>

	<body>
		
		<div style="float:right;" class="btn-group"><a class="btn btn-lg btn-default" href="register.php">Inscription</a><a class="btn btn-lg btn-default" href="login.php">Connexion</a></div>
		<!-- Si l'utilisateur est connecté rempalcer le code HTML ci-dessus par:
		
		<div style="float:right;" class="btn-group"><span class="btn btn-lg btn-default">{{ username }}</span><a class="btn btn-lg btn-default" href="logout.php"><i class="glyphicon glyphicon-off"></i></a></div>

		-->
		<h1>TWITTER + !</h1>
		<div class="jumbotron">


			<form action="create.php" id="twitterForm" method="post">
			  <textarea id="tweet"  class="form-control" name="content"></textarea>

			  <p><input type="submit" class="btn btn-primary btn-lg" value="Tweet" role="button"></p>
			</form>


		</div>

		<div id="thread">

			<!-- Afficher tous les posts de la tables "posts" ainsi que leur auteurs respectifs (tables users):  -->

			<div class="tweet">
				<span class="author">{{ username }}</span> le {{ created_at }}:
				<p>{{ content }}</p>
				<a href="delete.php?post_id={{ id }}" class="delete btn btn-danger btn-xs">Supprimer X</a><a href="update.php?post_id={{ id }}" class="delete btn btn-info btn-xs">Editer</a>
			</div>

		</div>

	</body>
</html>