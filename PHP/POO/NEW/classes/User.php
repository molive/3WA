<?php class User

{	

	const COUNTRY = "france";
	protected $firstname;
	protected $lastname;
	protected $address;
	protected $city;
	protected $zip;

	protected $birthday;
	protected $competencies = [];
	
	protected $avatar;
	protected $email;
	protected $nbLikes;
	
	protected $gender;
	protected $visible;
	protected $basket=array();
	
	//On créer la méthode magique __construct qui va s'executer a chaque fois que l'on c
	public function __construct($firstname = null,$lastname= null)
	{
	
	$this->setFirstname($firstname);
	$this->setLastname($lastname);
	
	}
	

	
	public function addProduct(Product $product){
	
	$this->basket[] = $product;

	}
	
	
	public function setVisible($visible)
    {
    
		$this->visible = $visible;
    
    }
  
  
  public function getVisible()
  {
    return $this->gender;
  }
	
	  public function setGender($gender)
  {
    
    if($this->isValidGender($gender)) $this->gender = $gender;
    
  }
  
  
  public function getGender()
  {
    return $this->gender;
  }
  
  protected function isValidGender($gender){
    
    if($gender == 'm' || $gender == 'f') return true;
    else throw new Exception('Le genre est incorrecte');
    
  }
	
/*
	public function __construct($firstname=null , $lastname=null)
	{
	$this->firstname = $firstname;
	$this->setLastname($lastname);
	}
	*/
	public function getFirstname()
	{
		return $this->firstname ;
	}	

	public function  setFirstname($firstname)
	{
		$this ->firstname = $firstname;
	}

	public function setLastname($lastname)
	{
		$this ->lastname = $lastname;
	}

	public function getLastname()
	{
		return $this->lastname;
	}

	public function setAddress($address)
	{
		$this ->address = $address;
	}

	public function setCity ($city)
	{
		$this ->city = $city;
	}

	public function setZip($zip)
	{
		$this->zip = $zip;
	}

	public function getAddress()
	{
		return $this->adresse;
	}

	public function getCity()
	{
		return $this->city;
	}

	public function getZip()
	{
		return $this->zip;
  }
  
  	public function getBirthday()
	{
		return $this->birthday;
	}
  
    public function setBirthday ($birthday)
	{
		$this ->birthday = $birthday;
	}
	
	public function setCompetencies($competence)
	{
		$this->competencies[] = $competence;
	}
	
	public function getCompetencies()
	{
	
		return $this->competencies;
		
	}
	
  public function getFullAddress(){
    return 'J\'habite '.$this->address.' '.$this->zip.' '.$this->city.' '.self::COUNTRY;
  }
  
  
  
  
   public function getAge()
  
  {
		
        $from = new DateTime($this->birthday);
		$to   = new DateTime('NOW');
		return $from->diff($to)->y;
    
  }
  
  public function messageTo(User $user,$message){
  
  return $this->firstname.' a envoyé le message suivant à  '.$user->firstname.' : '.$message ;
  
  // Olivier a envoyer le message suivant à Sylvain : Hello !
  
  }
  
    // On créé une methode qui va permettre a un utilisateur de devenir amis avec un autre utilisateur
  // $user1->becomeFriend($user3);
  public function becomeFriend(User $user){
    // on veut rajouter l'objet $user3 dans la propriété $friends (qui est un array)
 // On va créer une condition qui va vérifier qu'un utilisateur ne devienne pas amis avec lui-même
    // Eviter $user1->becomeFriend($user1);
    if( $this != $user ) { 
	$this->addFriend($user); 
	
	
	return   '<br>'.$this->firstname  .' est devenu amis avec '. $user->firstname;
	}
    else throw new Exception('/!\ un utilisateur ne peux devenir amis avec un autre utilisateur'); 
    
  }
  
  protected function addFriend($user){
    
     $this->friends[] = $user;
    
  }
  
  	public function getFriends ()
	{
		return $this->friends;
	}
  
  public function setAvatar($avatar) {
  if($this->isValidAvatar($avatar)) $this->avatar = $avatar;
  }
  
  private function isValidAvatar($src){

  if(file_exists('img/'.$src)) return true;
  else throw new Exception('L\'image de l\'avatar est incorrecte'); 
  }
  
  public function getAvatar($width){
  
  return '<img width="'.$width.'" src="'.BASE_URL.'img/'.$this->avatar.'">';
 
  }
  
 
  
    // Email 
    public function setEmail ($email) {
    if( $this->isValidEmail($email)) $this ->email = $email;
      } 
    
	
	protected function isValidEmail($email){
	 if(preg_match("/^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/i", $email))  return true; 
     else throw new Exception('La valeur renseignée est incorrecte'); 
	}

    public function getEmail() {
    if($this->email =='') return 'L\'email est inexistant';
     else  return $this->email; 
    }  
	
	
	
	public function getNbLikes(){
	
	return $this->nbLikes;
	
	}
	
	   // $user1->likeTo($user2);
    public function likeTo(User $user){

         if( $this !=  $user) $user->increaseLikes();

    }
  
  protected function increaseLikes () {
    $this->nbLikes ++;
    
  }
  
  protected function addInterest($interest) {
  
    $this->interests[] = $interest;
  
  }
  
  protected function commonInterests($user){
  
	$common = array_diff($user->interests,$this->interests);
	return $common;
  
  }
 
  
} 








