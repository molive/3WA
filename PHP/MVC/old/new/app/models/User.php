<?php  
namespace app\models;
use system\AbstractModel as Model;
use system\Db;
class User extends Model {

const TABLE = 'users';


protected $id;
protected $username;
protected $password;


// initialisé les paramètres
public function __construct() {

    }


public function repond(User $user, $message = 'Aucun message')
{
return $this->prenom.' '.$this->nom.' a répondu à la réaction de '.$user->nom.' '.$user->prenom.': '.$message;
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
	  return $posts;
}




}

?>