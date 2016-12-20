<?php  namespace Projet\Controller;
 class Post extends AbstractModel {

	protected $id;
	protected $content;
	protected $user_id;
	protected $updated_at;
	protected $created_at;

	use MagicalTrait;
	
	public function save(){
	
		$pdo = Db::getInstance();
		
		$query = $pdo->prepare('INSERT INTO
					users
					(username,email, password, birthday)
				    VALUES
					(:username, :email, :password, :birthday)');
		
		$query->execute(['username' => $this->username, 
						 'email' => $this->email,
						 'password' => $this->password,
						 'birthday' => $this->birthday,
						 ]);
		
		$this->id = $pdo->lastInsertId();
	
	}
	
	public function setPassword($password){
	
		$salt = '$2y$14$'.generateRandomString(22);
		$this->password = crypt($password, $salt);
	
	}
	
	public function getSalt(){
	
		// http://php.net/manual/fr/function.substr.php
		return substr($this->password, 0, 29);
	
	}

}