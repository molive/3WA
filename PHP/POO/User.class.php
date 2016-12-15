<?php
// Code en PHP procédural



// POO
/*
>>> Permet de réutiliser l'existant, meilleur maintenabilité du code
>>> exemple du E-commerce avec les object client, objets produits , object commande
>>> Regrouper le code dans un object plus facile à manipuler
>>> Un object confine (encapsule) un ensemble de variable et de fonction et de variable qui ne rentre pas en conflict avec le reste de l'application
*/

class User {

	const PAYS = 'fr';
	const LANGUE = 'Français';
	const FORMATION = '3W Academy';

	protected static $nbUsers = 0;
	
	protected $firstname;
	protected $lastname;
	protected $description;
	protected $password;
	protected $salt = null;
	protected $birthday;
	protected $createAt;
	protected $email;
	protected $avatar;
	protected $ville;
	protected $visible = true;
	protected $admin = false;
	protected $gender;
	protected $city;
	protected $zipcode;
	protected $nbLikes = 0;

	protected $friends = array ();
	protected $posts = array ();
	protected $nbFriends = 0;
	
	public function __construct($firstname,$lastname) 
	{
		$this->firstname = $firstname;
		$this->lastname = $lastname;
		$this->createAt = new DateTime('NOW');
		SELF::$nbUsers ++;  // On incrémente le compteur d'utilisateur créé à chaque instanciation de la class
        }
	
	public static function getLangue()
	{
		return 'Les utilisateurs sont '.SELF::$langue;
	}
	
	public static function getNbUsers()
	{
		return SELF::$nbUsers;
	}
	
	public function getFirstname () {
		return ucfirst($this->firstname);
	}
	
	public function getLastname () {
		return ucfirst($this->lastname);
	}
	
	public function setUsername ($username) {
		$this->username = $username;
	}
	
	public function setPassword ($password){
		$this->setSalt();
		$salt = $this->salt;
		$password = sha1($password.$salt);
		$this->password = $password;
	}
	
	public function setSalt(){
		$this->salt = random_bytes (15);
	}
	
	public function getUsername () {
		return ucfirst($this->username);
	}
	
	
    public function setEmail($email)
    {
        $this->email = $email;
		//throw new Exception('Error');
    }

    public function getEmail()
    {
        return $this->email;
		
    }
	
	private function isValideEmail($email) 
	{
	
	}
	
	public function setGender($gender) {
		if($gender !== 'm' and $gender !== 'f')  throw new Exception('La valeur renseignée est incorrecte'); 
		else $this->gender = $gender;
	}
	
	public function setBirthday($date)
	{
		$date = new DateTime($date);
		$this->birthday = $date;
	}
	
	
	public function getAge()
	{
		$from = $this->birthday;
		$to   = new DateTime('NOW');
		return $from->diff($to)->y;
	}
	
	public function getCreateAt()
	{
	return $this->createAt->format('d/m/Y à H:i');
	}
	
	public function becomeFriend (User $user){
		$this->addFriend($user);
		$user->addFriend($this);

		return '<p> <i class="glyphicon glyphicon-user"></i> '.$this->firstname .' est désormais ami avec '.$user->firstname.' </p>';
	}
	
	public function addFriend(User $user){
		$friends =  $this->friends; 
		$friends[] = $user; 
		$this->friends = 	$friends;
		// $this->friends[] = $user; //syntaxe plus courte
		$this->nbFriends ++;

	}
	
	public function removeFriend(User $user){
		if(($key = array_search($user, $this->friends, TRUE)) !== FALSE) {
			unset($this->friends[$user]);
		}
		
		$this->nbFriends --;
	}
	
	public function getFriends()
	{
		return $this->friends;
	
	}
	
	public function getNbFriends()
	{
	return $this->nbFriends;
	}
	
	public function like(User $user){
		
		$user->increaseLikes();

		return '<p><i class="glyphicon glyphicon-heart"></i> '.$this->firstname.' aime '.$user->firstname.'</p>';
	}
	
	public function disLike(User $user){
		
		$user->decreaseLike();
		return '<p>'.$this->firstname.' n\'aime plus '.$user->firstname.'</p>';
	}
	
	public function increaseLikes(){
		
		$this->nbLike ++;

	}
	
	public function decreaseLike(){
		
		$this->nbLike --;

	}
	
	public function getNbLikes(){
		
		return $this->nbLike;

	}
	public function getAvatar(){
		return '<img src="'.$this->avatar.'">';
	}
	
	public function setAvatar($avatar) {
		$this->avatar = $avatar;
	}
	
	public function isVisible(){
		return $this->visible;
	}

	public function messageTo(User $user,$message){
		return '<p> <i class="glyphicon glyphicon-send"></i> '.$this->firstname .' vient d\'envoyer le message suivant à '.$user->firstname.' : '.$message.'</p>';
	}
	
	public function getGender(){
		if($this->gender === 'm') return 'homme';
		else return 'femme';
	}
	
	
	public function __call($method,$arguments)
    {
		throw new Exception( 'Attention vous avez tenté d\'appeler une méthode inexistante :  '. $method. 'avec les arguments : '. implode(', ',$arguments));
    }
  
  
}

