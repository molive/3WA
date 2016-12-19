<?php namespace system;
use system\Db;

  class AbstractModel {
  

  public function getProperties(){
  $properties = get_object_vars( $this );

 foreach( $properties as $key => $value ) {
 if(is_numeric($key)) unset($properties[$key]);
 }
 return  $properties;
  }


	public function save() {
 
  $db = Db::getInstance();
  $data = $this->getProperties();
  $fields = array_keys($data);
 
      if(!isset($data['id'])) $query = $db->prepare("INSERT INTO ".static::TABLE." (".implode(',',$fields).") VALUES (".implode(',',array_map(function($v){ return ':'.$v ;},$fields)).")");
      //if(!isset($data['id'])) $req = $db->prepare("INSERT INTO users (username,password) VALUES (:username, :password)");
	  else $query = $db->prepare("UPDATE ".static::TABLE." SET ".implode(',',array_map(function($v){ return ''.$v.'=:'.$v ;},$fields))." WHERE id=:id");
	  //else $req = $db->prepare("UPDATE users SET username=:username,password=:password WHERE id=:id");
      foreach($data as $key => $value){
	  $query->bindValue(':'.$key.'', $value);
	  }
	  $query->execute($data);

	  if(!isset($data['id'])) $this->id =  $db->lastInsertId();
}

public static function find($id) {

$db = Db::getInstance();

      // we make sure $id is an integer
      $id = intval($id);
      $query = $db->prepare('SELECT * FROM '.static::TABLE.' WHERE id = :id');
      // the query was prepared, now we replace :id with our actual $id value
      
	  //$query->bindValue(':fullname', $search);
	  $query->execute(array('id' => $id));
      $data = $query->fetch();

      //$this->hydrate($data);
	  $class = get_called_class();
      $instance = new $class(); // Marche aussi très bien
    
	  $instance->hydrate($data);  
	 
	  return $instance;
	  
	  
}

public static function findOneByField($field,$value) {

$db = Db::getInstance();

      // we make sure $id is an integer
  
      $query = $db->prepare('SELECT * FROM '.static::TABLE.' WHERE '.$field.' = :'.$field.'');
      // the query was prepared, now we replace :id with our actual $id value
      
	  $query->bindValue(':'.$field.'', $value);
	  $query->execute();
      $data = $query->fetch();
if($data !=null){
      //$this->hydrate($data);
	  $class = get_called_class();
      $instance = new $class(); // Marche aussi très bien
    
	  $instance->hydrate($data);  
	 
	  return $instance;
	 } else return null; 
	  
}

public function hydrate(array $data) {
if($data != null) {
foreach ($data as $key => $value) {
    $this->$key = $value; 
}
}
}


public static function findAll() {
//$db = Db::getInstance();  
      $req = $db->prepare('SELECT * FROM '.static::TABLE.'');
      // the query was prepared, now we replace :id with our actual $id value
      $req->execute();
      $class = get_called_class();
foreach($req->fetchAll() as $data) {
    $instance = new $class();
    $instance->hydrate($data);  
	$collection[] = $instance;
	  }
	return $collection;
// return new Post($data); // Marche aussi très bien
}
	
  }
?>