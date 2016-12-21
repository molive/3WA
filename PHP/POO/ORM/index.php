<?php 
function generateRandomString($length) {  // Servira à générer le SALT de 22 caractères pour crypter le mot de passe lors de l'inscription et le jeton de session $_SESSION['csrf_token'] pour se protéger des attaques csrf
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

function __autoload($class)
{   
    include('app/'.$class . '.php');
}

/*
$user = new User;

$user->username = 'Momofhhh24';
$user->email = 'the.mooouuffuoolive@gmajil.com';
$user->password = 'lolojlol';
$user->birthday = "1988-9-21";
$user->save();


echo $user->id;

echo $user->salt;


*/

use Controller\UserController;
use Model\User;


$c = new UserController;

$c->index();

$user = User::find(2);

echo $user->username;

  
// Créer une classe User qui représentera la table users de la base de données projet.
  

/**** PHPMYADMIN table users ****/

// 1) Supprimer la colonne "salt" (on verra qu'elle n'est finalement pas obligatoire et qu'il est possible de retrouver le salt à partir du mot de passe crypté).

// 2) Ajouter une colonne "birthday" au format Date


/**** Classe User ****/

// Définir autant de propriétés en protected que de champs (colonnes) disponibles pour la table users (username, email etc.).


// 3) Intégrer les méthodes magiques __get et __set et la méthode getAge() définies dans le TP précédent
  
// 4) Développer la méthode static find qui prend en paramètre l'id de l'utilisateur dont on souhaite récupérer les infos
/*
  Exemple d'utilisation:
  
  $user = User::find(1);  // Renverra une instance de la classe User dont les valeurs des propriétés correspondront à celles récupérées en base de données
  
*/
// 5) Développer la méthode setPassword qui permettra de crypter le mot de passe en blowfish (ceci à déjà effectué dans le fichier register.php du TP Twitter)
  /*
  exemple:
	$user = new User; 
  $user->password = "azerty";
  
  echo $user->password; */ // Affichera quelque chose de similaire à $2a$07$usesomesillystringfore./U9C8sBjqp8I90dH6hi   (où $2a$07$usesomesillystringfore est le salt)
/*
  6) Créer une méthode getSalt qui récupérera le SALT contenu dans le passport.
  // RM: les 29 premiers caractères du mot de passe contiennent le salt (grain de sel)
  ASTUCE: utiliser la fonction substr: http://nl3.php.net/manual/fr/function.substr.php
  
  
  7) Développement de la méthode save()
  
  Cette méthode servira a enregistrer un nouvel utilisateur en base de données dans la table users, où mettre à jour ses données.
  
    Astuce pour récupérer l'id juste après avoir enregistrer une nouvelle entrée en base de donnée utiliser la méthode lastInsertId sur l'objet $pdo:
  http://nl3.php.net/manual/fr/pdo.lastinsertid.php
  
  // Mise à jour des données d'un utilisateur:
  
  $user = User::find(5);
  
  $user->username = "Anonymous";  //  On modifie la propriété username
  
  $user->save();
  
  8) Faire une classe Post (nouveau fichier Post.php dans le dossier Classes) puis faire le même travail (à l'exception de la méthode setpassword)
  
  9) On remarque que les classes User et Post possèdent 3 méthodes similaires:
  - save
  - find
  - hydrate
  
  NB: il y a également les méthodes magique __set et __get qui se répètent mais nous les traiterons ultérieurement.
  
  Pour éviter cette répétition nous allons créer dans un premier temps une classe dite "abstraite" qui s'appelera AbstractModel.
  En avoir plus sur les classe abstraites: http://php.net/manual/fr/language.oop5.abstract.php
  
  Le but final sera de faire en sorte que les classes User et Post héritent de classe abstraite  ModelAbstract afin de pouvoir bénéficier toutes deux des méthodes
  find et hydrate.
  
  NB: Pour des raison de mise en oeuvre seule la méthode "save" sera laissée en l'état dans les classes User et Post, tandis que les méthodes find et hydrate seront délocalisées dans la classe abstraite AbstractModel
  
  10) Créer un fichier ModelAbstract.php qui contiendra la classe abstraite AbstractModel:
  
  <?php abstract class AbstractModel
	{
  
  	// ...
  
  }
  
  11) Couper / Coller les méthodes find et hydrate dans la classe AbstractModel depuis la classe User.
  
  12) Faire hériter la classe User de la class AbstractModel:
  
  <?php class User extends AbstractModel {
  
  	  // ...
  
  }
  
  13) A ce stade là il est normal que la méthode find ne fonctionne pas car il va lui falloir quelques adaptations:
  
  Dans la requête SQL pour le moment la table cocnernée est "users". Il va donc falloir trouver un moyen pour que le nom de la table soit définit dynamiquement.
  Astuce:
  $className = static::class;  // Contiendra le nom de la class depuis laquelle la méthode a été appellé. 
  
  Exemple:
  
  class Foo {
  
  	public function getClassName(){
    
    	return static::class;
    
    }
  
  }
  
  $instance = new Foo;
  
  echo  $instance->getClassName()  // Renverra "User"
  
  Astuce 2
  Il faudra veiller à ce que le contenu de la variable  $className soit formaté en minuscule et mise au pluriel pour que celà cncorde avec le nom de la table (users ou posts)
  http://php.net/manual/fr/function.strtolower.php
  
  /!\ Veuillez également à ce que le nom de la classe instanciée soit définit dynamiquement
  
  14) Créer une méthode abstraite "save" dans la classe AbstractModel:
  
  <?php abstract class AbstractModel
	{
      public abstract function save();
  	  // ...
  
  }
  
  L'ajout de cette méthode abstraite save() obligera les classes qui hériteront de la classe AbstractModel à implémenter la méthode save() . 
  C'est déjà le cas pour la classe User et Post mais cette démarche s'inscrit dans une rigueur de conception.

  15) Supprimer les méthodes find et hydrate de la class Post puis la faire hériter de la classe AbstractModel.
  
  Faite ce test dans le fichier index.php :
  
  $post = Post::find(1);  // définir en paramètre un id existant dans la table posts
  
  echo $post->title;

  16) Nous avons vu plus haut que les méthodes magique __get et __set se répétaient dans la classe User et Post. Toutefois nous avons fait 
  le choix de ne pas les intégrer dans la AbstractModel. Nous aurions pu le faire mais celà aurait poser ce problème de logique:
  - Les méthodes __get et __set peuvent potentiellement être intégrées dans d'autres class PHP qui n'ont pas forcément de lien avec la base de données (comme les classes User et Post).
    Hors les seules classes pouvant hésiter de la classe AbstractModel ont vocation à établir un lien avec la base de données (la classe User fait le lien avec la table users et la class Post fait le lien avec la table posts).
    
  Il faudrait donc isoler ces méthodes de sortes que toutes nos classes PHP puissent en bénificier.
  
  L'héritage multiple n'étant guère possible en PHP, il va falloir avoir recours au Traits (utilisés massivement dans laravel alors mieux vaut s'y intéresser maintenant ;) )
  
  En savoir plus sur les traits: http://php.net/manual/fr/language.oop5.traits.php
  
  >> Créer un fichier MagicalTrait.php dans le dossier Classes et y mettre ce code:
  
  <?php trait MagicalTrait {
  
		public function __set($property){ ... mettre le même code que définit dans la méthode __set de la classe User }
    
		public function __set($property){ ... mettre le même code que définit dans la méthode __get de la classe User }

	}
  
  17) Supprimer les méthodes __get et __set de la classe User et Post
  
  18) Implémenter ce trait dans la classe User de cette manière:
  
  <?php class User extends AbstractModel {
  
  		use MagicalTrait;
      
      // ...
  
  }
  
  19) Faire de même pour la class Post
  
  */