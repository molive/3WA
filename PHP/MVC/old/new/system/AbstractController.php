<?php  // si on homogeneise comportement. Interface si on injecte un object 
namespace system;

abstract class AbstractController {

    public $user = null;


    function __construct(){
	/*
        if(isset($_POST)){
            $this->data = array_map(function($v){  }, $_POST);
        }
        if(isset($this->models)){
            foreach($this->models as $v){
                $this->loadModel($v); 
            }
        }*/
		
		if(isset($_SESSION['user_id'])) $this->user = User::find($_SESSION['user_id']);
    }



    function render($view,$data=null){
    extract($data);
	$include = 'app/views/'.$view.'.php';
    require_once('app/views/layout.php');	
    }
	
	
	

}
?>