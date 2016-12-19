<?php //dispatcher
session_start();

  const BASE_URL = "http://localhost/3WA/MVC/new/";
  
  /*
  require_once('system/db.php');
  require_once('system/Model.php');
  require_once('system/Controller.php');
  */
  
  
  
  
  function __autoload($class_name) 
	{
	echo $class_name;
		 require_once($class_name . '.php');
	}
  
  // Chargement des models
  /*
  require_once('app/models/Post.php');
  require_once('app/models/User.php');
*/
  // 
if(!isset($_GET['p'])) { $controller='default';  $parameters= null; }
else {
$url_array = array(); 
$url_array = explode("/",$_GET['p']);

$controller = isset($url_array[0]) ? $url_array[0] : ''; 

array_shift($url_array);
$action = isset($url_array[0]) ? $url_array[0] : 'index'; 

array_shift($url_array);
$parameters = $url_array;
  }


$controller = ucfirst(strtolower($controller)).'Controller';
require_once('app/controllers/'.$controller.'.php');


$controller = new $controller();
if(method_exists($controller, $action)){
   
    call_user_func_array(array($controller,$action),$parameters);
    //$controller->action($arg1,$arg2,...);
}
else $error404 = true;



if(isset($error404)) echo 'Error 404';
  
  /*
  $user = new User();
  $user->setUsername('Boy');
  $user->setPassword('ytreza');
  $user->save();
  */
  
  
  
/*
  $user = User::find(2);
  
  echo $user->getUsername();
  
  $post = new Post();
  $post->setContent('hukhukhuk');
  $post->setUser($user);
  //$post->save();
*/




?>