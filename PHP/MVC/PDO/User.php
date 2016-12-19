<?php  
	
class User  {

const TABLE = 'users';

static $compteur = 0;

protected $id;
protected $username;
protected $password;
protected $createAt;

// initialisé les paramètres
public function __construct($data=null) {

if($data != null) {
foreach ($data as $key => $value) {
    $this->$key = $value; 
}
}


$this->setCreateAt(new Datetime('NOW'));

    }

function getCreateAt() {
return $this->createAt;
}

function setCreateAt($createAt) {
$this->createAt = $createAt->format('Y-m-d H:i:s');
}

function getUsername() {
return ucfirst($this->username);
}

function setUsername($data) {
$this->username = $data;
}


function getPassword() {
return $this->password;
}

function setPassword($data) {
$this->password = sha1($data);
}

function getId() {
return $this->id;
}


function getUrl(){
return BASE_URL.'user/profile/'.$this->id;
}


  public function getProperties(){
  $properties = get_object_vars( $this );

 foreach( $properties as $key => $value ) {
 if(is_numeric($key)) unset($properties[$key]);
 }
 return  $properties;
  }

    public function checkPassword($password){
    
  $passwordToCheck = $password;   // $password est non crypté (exemple :PONEY);
  $salt  =  $this->getSalt();  // on récupère le grain de sel préalablement défini au moment de la création du password
  $passwordToCheck = sha1($salt.$passwordToCheck);
  
  return $this->password == $passwordToCheck;
  // if($passwordToCheck == $this->password) return true; else return false;
    
    /*
    // dsjghfkjhdsfjdf
    $password = 'PONEY';
    $salt = $this->saltGenerator(); 
    // $salt = 'kiomo^psd^566565';
    
    $passwordToCheck = sha1('PONEYkiomo^psd^566565');  // version cryp^té du mot de passe stockée en base
    
    $bonPassport = sha1('PONEYdsjghfkjhdsfjdf'); // version crypté du mot de pass testé au moment de la connexion
    
    return $bonPassport == $passwordToCheck;
    */
  }
  
	public function save() {
 
  $db = new PDO('mysql:host=localhost;dbname=MVC', 'root', '');
  $data = $this->getProperties();
  $fields = array_keys($data);

      if(!isset($data['id'])) $query = $db->prepare("INSERT INTO ".self::TABLE." (".implode(',',$fields).") VALUES (".implode(',',array_map(function($v){ return ':'.$v ;},$fields)).")");
      //if(!isset($data['id'])) $req = $db->prepare("INSERT INTO users (username,password) VALUES (:username, :password)");
	  else $query = $db->prepare("UPDATE ".self::TABLE." SET ".implode(',',array_map(function($v){ return ''.$v.'=:'.$v ;},$fields))." WHERE id=:id");
	  //else $req = $db->prepare("UPDATE users SET username=:username,password=:password WHERE id=:id");
      foreach($data as $key => $value){ 
	  $query->bindValue(':'.$key.'', $value);
	  }
	  $query->execute($data);

	  if(!isset($data['id'])) $this->id =  $db->lastInsertId();
}
/*
public static function find($id) {

      $db = new PDO('mysql:host=localhost;dbname=MVC', 'root', '');

      // we make sure $id is an integer
      $id = intval($id);
      $query = $db->prepare('SELECT * FROM '.self::TABLE.' WHERE id = :id');
      // the query was prepared, now we replace :id with our actual $id value
      
	  //$query->bindValue(':fullname', $search);
	  $query->execute(array('id' => $id));
      $data = $query->fetch();

      //$this->hydrate($data);
	  $class = get_called_class();
      $instance = new $class($data); // Marche aussi très bien
    
	 // $instance->hydrate($data);  
	 
	  return $instance;
	  
	  
}
*/

public function hydrate(array $data) {
if($data != null) {
foreach ($data as $key => $value) {
    $this->$key = $value; 
}
}
}

// divisé en 2 methodes récupérer (SIGLE RESPONSABILITE). une seule responsabilité par class
function getPosts(){
$db = Db::getInstance();
   $req = $db->prepare('SELECT * FROM posts WHERE user_id = :id');
      // the query was prepared, now we replace :id with our actual $id value
      $req->execute(array('id' => $this->id));

foreach($req->fetchAll() as $data) {

    $post= new Post();
    $post->hydrate($data);  
	$posts[] = $post;
	  }
	  if(isset($posts)) return $posts; else return null;
}




}


?>