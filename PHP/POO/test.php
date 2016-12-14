<?php class User {
	
	protected $attributes = ['username' => 'molive'];
	
	
	
	public function __get($name) {
	
	$methodeName = 'get'.ucfirst($name).'Attribute';
	if(method_exists ( $this ,$methodeName ) and isset($this->attributes[$name]) ){
	
	return $this->$methodeName($this->attributes[$name]);
	
	}
	else return $this->attributes[$name];
	
	}

	private function getUsernameAttribute($value){
	
	return ucfirst($value);
	
	}
	
	public function __set($name , $value) {
	
	$methodeName = 'get'.ucfirst($name).'Attribute';
	if(method_exists ( $this ,$methodeName ) and isset($this->attributes[$name]) ){
	
	return $this->$methodeName($this->attributes[$name]);
	
	}
	else return $this->attributes[$name];
	
	}
	
	

} 

$user = new User();
echo $user->username;



?>