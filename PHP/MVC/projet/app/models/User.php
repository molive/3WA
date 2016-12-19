<?php  
class User extends AbstractModel {

const TABLE = 'users';

static $compteur = 0;

protected $id;
protected $username;
protected $password;
protected $createAt;
protected $salt;

// initialisé les paramètres
public function __construct($username=null) {
$this->setUsername($username);
$this->setCreateAt(new Datetime('NOW'));
// chaque qu'on créé un objet user on veut incrémentteur la propriété $compteur de +1;
self::$compteur++;
    }


public static find($id){

echo 'ID :'.$id;

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

public function getSalt() {
return $this->salt;
}

public function setSalt($salt) {
$this->salt = $salt;
}
  
  private function saltGenerator (){
  $length = 10;
$randomString = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, $length);
return $randomString;
  }


function setPassword($data) {
$this->password = sha1($data);
}

function getCreateAt() {
return $this->createAt;
}

function setCreateAt($createAt) {
$this->createAt = $createAt->format('Y-m-d H:i:s');
}

function getId() {
return $this->id;
}


function getUrl(){
return BASE_URL.'user/profile/'.$this->id;
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