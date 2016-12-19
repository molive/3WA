<?php namespace Projet\Controller;

class UserController {

	public function profile($id){
	
		return $id;
	
	}
	
    function render($view,$data=null){
	
		extract($data);
		$template = $view.'.phtml';
		require_once('app/views/layout.phtml');	
		
    }

}


?>