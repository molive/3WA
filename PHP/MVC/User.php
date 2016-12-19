<?php  

  class Db {
    private static $instance = NULL;


    public static function getInstance() {
      if (!isset(self::$instance)) {
        $pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
        self::$instance = new PDO('mysql:host=localhost;dbname=MVC', 'root', '', $pdo_options);
      }
      return self::$instance;
    }
	}
	
class User  {

const TABLE = 'users';


protected $id;
protected $username;
protected $password;
protected $createAt;

// initialisé les paramètres
public function __construct($username=null) {
$this->setUsername($username);
$createAt = new Datetime('NOW');
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