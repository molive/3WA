<?php //dispatcher
session_start();

  const BASE_URL = "http://localhost/3WA/MVC/projet/";
  
 /*
  require_once('system/db.php');
  require_once('system/AbstractModel.php');
  require_once('system/AbstractController.php');
  
  require_once('app/models/Post.php');
  require_once('app/models/User.php');
  */
  
    function __autoload($class_name) 
	{
	$paths = ['app/models/','app/controllers/','system/'];
	foreach($paths as $path) {
	if(file_exists($path.$class_name.'.php')) break;
	}
	/*
if(file_exists('app/models/'.$class_name.'.php')) $path = "app/models/";
if(file_exists('app/controllers/'.$class_name.'.php')) $path = "app/controllers/";
if(file_exists('system/'.$class_name.'.php')) $path = "app/controllers/";
	*/

	 require_once($path.$class_name . '.php');
	}
	$pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
    AbstractModel::$db = new PDO('mysql:host=localhost;dbname=MVC', 'root', '', $pdo_options);

/*
$url_array = array(); 
$url_array = explode("/",$_GET['p']);

$controller = isset($url_array[0]) ? $url_array[0] : ''; 

array_shift($url_array);
$action = isset($url_array[0]) ? $url_array[0] : 'index'; 

array_shift($url_array);
$parameters = $url_array;
*/


$controller = $_GET['controller'];
$controller = ucfirst(strtolower($controller)).'Controller';

$method = $_GET['method'];

if(isset($_GET['parameters'])) $parameters = explode('/',$_GET['parameters']);

require_once('app/controllers/'.$controller.'.php');


$controller = new $controller();
if(method_exists($controller, $method)){
   
    call_user_func_array(array($controller,$method),$parameters);
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