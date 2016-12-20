<?php  namespace Projet\Model;

abstract class AbstractModel {

	public abstract function save();

	public static function find($id) {

		$db = Db::getInstance();
		
		$className = static::class;
		$tableName = strtolower($className).'s';
		
		// we make sure $id is an integer
		$id = intval($id);
		$query = $db->prepare('SELECT * FROM '.$tableName.' WHERE id = :id');
		// the query was prepared, now we replace :id with our actual $id value
		  
		//$query->bindValue(':fullname', $search);
		$query->execute(array('id' => $id));
		$data = $query->fetch();
		
		$instance = new $className;
		
		$instance->hydrate($data);  
		 
		return $instance;  
		  
	}
	
	public function hydrate(array $data) {
		if($data != null) {
			foreach ($data as $key => $value) {
				$this->$key = $value; 
			}
		}
	}
	
}