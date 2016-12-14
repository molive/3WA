<?php class BigBoss {

protected $status;
	
	public function ban(User $user){
		  if(isset($user->status)) {
		$user->setVisible(false);
		return ''.$this->firstname.' vient de bannir '.$user->firstname;
	   }
	   else throw new Exception('Un Admin ne peut pas bannir un autre admin !!!');
	}

	


}