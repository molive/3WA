<?php  namespace Projet\Model;

use Db;
use Projet\Model\AbstractModel;
use Projet\Model\MagicalTrait;

class User extends AbstractModel {

	protected $id;
	protected $username;
	protected $email;
	protected $password;
	protected $birthday;

	use MagicalTrait;  // Implémente les méthodes magiques __get et __set
	
	public function save(){
	
		$pdo = Db::getInstance();
		if($this->id == null) {  // C'est qu'on cherche à créer un nouvel utilisateur
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
		else  //C'est qu'on cherche à mettre un jour un utilisateur
		{
			$query = $pdo->prepare('UPDATE posts
            SET
                content = :postContent,
				updated_at = NOW()
				
            WHERE
                id = :postId AND user_id = :authorId');
				
			$query->execute(['username' => $this->username, 
							 'email' => $this->email,
							 'password' => $this->password,
							 'birthday' => $this->birthday,
							 'id' => $this->id
							 ]);
		
		}
	
	}
	
	public function setPassword($password){
	
		$salt = '$2y$14$'.generateRandomString(22);
		$this->password = crypt($password, $salt);
	
	}
	
	public function getSalt(){
	
		// http://php.net/manual/fr/function.substr.php
		return substr($this->password, 0, 29);
	
	}
	
    // Renverra l'age de 'lutilisateur en fonctio nde sa date de naissance
  
    public function getAge()
    {

      // http://nl1.php.net/manual/fr/class.datetime.php
      $userBirthday = new DateTime($this->birthday);   // $userBirthday  contiendra une instance de la classe DateTime correspondant à la date d'anniversaire. Cette classe est nativement par PHP et permet de manipuler des dates
      $today = new DateTime("NOW"); // $today contiendra une instance de la classe DateTime correspondant à la date d'aujourd'hui
      
      // On va récupérer la différence en années entre la date d'aujourd'hui et la date d'anniversaire de l'utilisateur
      return $today->diff($userBirthday)->y;   // La propriété "y" signifie qu'on souhaite avoir le résultat de la différence en année
      
    }
	
    public function isAdult(){
    
		// $this->age provoquera l'appel de la méthode getAge grace à la méthode magique __get définit dans le trait MagicalTrait (fichier MagicalTrait.php)
		// NB: si la propriété age avait été difinit dans cette classe alors getAge n'aurait pas été appelé.
		if($this->age >= 18){
			return true;	
		}
		else
		{
			return  false;
		}
    
    }

}