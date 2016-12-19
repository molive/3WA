<?php  namespace app\models;
use system\AbstractModel as Model;
class Post extends Model{

const TABLE = 'posts';

// attributs correspondant à la base de données
public $id;
protected $user_id;
protected $content;

public function __construct() {

    }


public function getContent() {
return $this->content;
}

public function setContent($data) {
$this->content = $data;
}

public function getUser() {
return User::find($this->user_id);
}



function setUser(User $user) {
$this->user_id = $user->getId();
}


}

?>