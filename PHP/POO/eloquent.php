<?php class User {
	
	protected $attributes = ['username' => 'molive'];
	
	
	
	public function __get($name) {
	
	$methodeName = 'get'.ucfirst($name).'Attribute';
	if(method_exists ( $this ,$methodeName ) and isset($this->attributes[$name]) ){
	
	return $this->$methodeName($this->attributes[$name]);
	
	}
	else return $this->attributes[$name];
	
	}

	// Accessor
	private function getUsernameAttribute($value){
	
	return ucfirst($value);
	
	}
	
	// Mutator
	private function setUsernameAttribute($name,$value){
	
	$this->attributes[$name] = 'hap'.$value;
	
	}
	
	public function __set($name , $value) {
	
	$methodeName = 'set'.ucfirst($name).'Attribute';
	if(method_exists ( $this ,$methodeName ) and isset($this->attributes[$name]) ){
	
	return $this->$methodeName($name,$value);
	
	}
	else $this->attributes[$name] = $value;
	
	}
	
	

} 

$user = new User();
echo $user->username;

$user->username = 'test';
echo $user->username;


?>