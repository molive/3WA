Structure de l'application:

app/
	Controller/
		UserController.php
		PostController.php
	Model/
		Post.php
		User.php
	View/
		layout.phtml
		update-post.phtml
		register.phtml
		login.phtml
		posts.phtml
	Traits/
		MagicalMutatorTrait.php
		MagicalAccessorTrait.php
vendor/
	...
system/
	Db.php
	AbstractModel.php
	AbstractController.php
		
include/
	common.php
web/
	assets/
		twitter.css
		main.js
		
	index.php
composer.json
		
		

Consignes:

1) Inclure le fichier common.php en tête du fichier index.php situé dans le dossier web/

2) Dans l'objet JS contenu dans le fichier composer.json rajouter cette propriété:

"autoload":
    {
        "psr-4":
        {
            "App\\": "app/"
        }
    }
	
3) Exécuter sur votre terminal (depuis le dossier racine de votre projet) la commande suivant:

composer dump

Ceci aura pour effet de mettre à jour l'autoloader de l'application et de faire en sorte que le namespace App\ cible le dossier "app" à la racine du projet.

4) Créer la classe AbstractController qui contiendra une méthode "render". Cette méthode servira à afficher le template (la vue).

La méthode render prendra 2 paramètres: 

	le 1er sera le nom du template afficher, le 2 second sera un tableau associatif contenant les paramètres à transmètre à la vue.
	
	exemple : $this->render('register',$data);
	
	Ceci aura pour effet d'appeler le template register.phtml qui sera inclu dans le template parent layout.phtml. 
	Le tableau $data devra être transmé en "variables" grace à la fonction extract

4) Créer les fichier PostController.php et UserController.php qui contiendra respectivement la classe PostController et UserController. Faire hériter ces classe de la classe AbstractController

5) Dans la classe UserController ajouter le namespace App\Controller. Ajouter également une méthode register (laisser là vide pour le moment).

6) Dans le fichier index.php ajouter cette route:

$app->match('/register',
    'App\Controller\UserController::register');  // Appelera la méthode register de la classe UserController que le formulaire d'inscription soit envoyé ou non
	
7) Développement de la méthode register de la classe UserController:

	Cas où le formulaire d'inscription n'est pas envoyé:
	
	Appeler la méthode render pour afficher le template 'register'
	
	Il faudra faire une instance de la classe User puis renseigner ses propriétés "username", "email" et "password" selon ce qui a été renseigné dans le formulaire d'inscription. 
	NB: Le champs "borthday" peut être fait optionnellement ;)
	
	S'il n'y a pas d'erreur appliquer la méthode save pour sauvegarder l'utilisateur dans la table users, puis rediriger la page login.
	
/***** Toutes les parties qui suivent seront faites en bonus ******/

8) Faire la partie Login:

Créer une méthode statique check dans la classe User qui prendra en paramètre le nom d'utilisateur puis le mot de passe.

Cette méthode devra vérifier si le mot de passe correspond bien à l'username

Exemple :

$user = User::Check('Tony','azerty');

Si le mot de passe est bon alors on renverra une instance de l'utilisateur correspondant à ces indentifiants, autrement on renverra false


	
	


	







