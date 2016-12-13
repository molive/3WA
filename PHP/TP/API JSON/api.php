<!DOCTYPE html>
<html>
	<head>
	<meta charset="UTF-8">
	</head>

	<body>
		<h1>Rechercher un utilisateur</h1>
		<form id="searchForm" method="GET" action="users.php">
		
			<input type="text" name="keyword">
			<input type="submit" value="Rechercher">
		
		</form>
		<h2>Résultats:</h2>
		<div id="results">
		
			
		
		</div>

	</body>
</html>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script>
	// http://api.jquery.com/jquery.ajax/
	
	// L'url users.php?keyword=oine renverra une liste de tous les membres dont le champs "username" contient le terme "oine" sous form d'objet JSON:
	/*
	[ {"id" : "5",
	   "username" : "Antoine" ,
	   "email" : "antoine@gmail.com"},
	  {"id" : "7",
	   "username" : "MoineBouddhiste" ,
	   "email" : "antoine@gmail.com"}]
	 */
	
	// NB: L'envoi du formulaire affichera cet objet JSON
	
	/**** CONSIGNE ****/
	
	// 1)  Appliquer un écouteur d'événement sur le champs de recherche du formulaire qui déclenchera une fonction lorsqu'on tape du texte dedans.
	// ASTUCE: http://api.jquery.com/keyup/
	
	// 2) Dans cette fonction déclenché une requête AJAX (http://api.jquery.com/jquery.ajax/) qui charge l'url users.php?keyword={{ keyword }} où {{ keyword }} dépendra de ce qui a été tapé dans le champs de recherche
	
	
	// 3) A l'aide de la méthode forEach (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach) créer une variable "list" qui contiendra la liste des utilisateurs trouvés sous cette forme:
	
	/*
	
	Antoine
	_________________ (<hr>)
	
	MoineBouddhiste
	_________________ (<hr>)
	
	
	*/
	
	// 4) Afficher le contenu de cette variable dans la div "results"
	
	
	
	$('#searchForm [name=keyword]').keyup(function(){
	
		
		
		$.ajax({ url : "users.php?keyword="+$(this).val(),
				 dataType : "json",
				 success : function(data){
				 
					console.log(data);
					
					// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach
					
					var list = "";
					data.forEach(function(user){
					
						list += user.username+"<br>";
					
					});
					
					if(data.length == 0) list = "Aucun utilisateur trouvé.";
					
					
					$('#results').html(list);
				 
				 }
				 
				 
			   });
	
	});

</script>