<?php 

define('WEBROOT',str_replace('index.php','',$_SERVER['SCRIPT_NAME']));
define('ROOT',str_replace('index.php','',$_SERVER['SCRIPT_FILENAME']));

require(ROOT.'system/model.php');
require(ROOT.'system/controller.php');
require(ROOT.'system/config.php');



if(file_exists(ROOT.'app/controllers/'.$_GET['controller'].'.php')) {
require(ROOT.'app/controllers/'.$_GET['controller'].'.php');


$url_array = array(); 
$url_array = explode("/",$_GET['url']);

$controller = isset($url_array[0]) ? $url_array[0] : ''; 
array_shift($url_array);
$action = isset($url_array[0]) ? $url_array[0] : ''; 
array_shift($url_array);
$parameters = $url_array;
/*
$controller = $_GET['controller'].'Controller';
$action = $_GET['action'].'Action';
$params = isset($_GET['params']) ? $_GET['params'] : array();
if(isset($_GET['params']))$params = explode('/',$_GET['params']);
*/


$controller = new $controller($config);
if(method_exists($controller, $action)){
   
    call_user_func_array(array($controller,$action),$parameters);
    //$controller->action($arg1,$arg2,...);
}
else $error404 = true;



if(isset($error404)) echo 'Error 404';

?>