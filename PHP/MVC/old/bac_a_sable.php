<?php  

class Post {


public $id;
private $content;

public function __construct(array $data) {

foreach ($data as $key => $value) {
    $this->$key = $value;
}

    }


public static function find() {
$data['id'] = 1;
$data['content'] = 'Lorem ipsum dolor es';
return new SELF($data);
// return new Post($data); // Marche aussi très bien
}

function getContent() {
return $this->content;
}

}

//$test = Post::instance();


//echo $test->id;
$data['content'] = 'lol';
$data['user_id'] = 1;
$fields = array_keys($data);
$values = implode(',',array_keys($data));





print_r();
 ?>