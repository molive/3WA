<?php namespace Projet\Controller;

class UserController {

	public function profile($id){
	
		return $id;
	
	}
	
	public function create(){
	
		return $this->render('register');
	
	}
	
	
    function render($view,$data=null){
		
		ob_start(); /* On initialise le tampon. */
		 
		if($data != null) extract($data);
		$template = $view.'.phtml';
		include(__DIR__.'/../View/layout.phtml');	
		
		return ob_end_flush(); /* On vide le tampon et on retourne le contenu au client. */
		
    }

}


?>