<?php
class UserController {


	public function profileAction($id=null){
	
    $user = User::find($id);
	echo $user->getUsername();

	
	}


}

?>