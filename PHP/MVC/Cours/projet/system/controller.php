<?php
class Controller{

    public $vars = array();
    public $layout = 'default';
	
    function __construct($config){
        
		// autoload des models
        if(isset($config['autoload'])){
            foreach($config['autoload'] as $model){
                $this->loadModel($model); 
            }
        }
    }

    function set($d){
        $this->vars = array_merge($this->vars,$d);
    }
	
	function get($value){
	return htmlentities($_GET[$value], ENT_QUOTES);
	}
	
	function post(){
	return htmlentities($_POST[$value], ENT_QUOTES);
	}
	
    function render($filename){
        extract($this->vars);
        ob_start(); 
        require(ROOT.'views/'.get_class($this).'/'.$filename.'.php');
        $content_for_layout = ob_get_clean();
        if($this->layout==false){
            echo $content_for_layout;
        }else{
            require(ROOT.'views/layout/'.$this->layout.'.php');
        }
    }

    function loadModel($name){
        require_once(ROOT.'models/'.strtolower($name).'.php');
        $this->$name = new $name(); 
    }
	
	
}