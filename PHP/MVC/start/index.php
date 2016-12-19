<?php
// http://monsite.com/index.php?controller=user&method=profile
/*
$controller = new UserController();
$controller->profileAction();
*/
   require_once('app/models/User.php');
  function __autoload($class_name) 
	{
   require_once('app/controllers/'.$class_name . '.php');
	}
/*
	$test = 5;
	$test2 = 8;
	
	$var = 'test2';
	
	echo $$var;
	*/
	// http://monsite.com/index.php?controller=user&method=profile&parameter=5;
$controllerName = ucfirst($_GET['controller']).'Controller'; // UserController
$controller = $controllerName();
$methodName = $_GET['method'].'Action';

call_user_func_array(array($controller,'profileAction'),array(5,'Hello'));
//

//call_user_func_array(array($controller,$action),$parameters);



//Route::get('user/profile/', 'UserController@profile');










?>