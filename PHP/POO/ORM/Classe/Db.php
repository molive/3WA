<?php
 class Db {
  
    private static $instance = NULL;

    public static function getInstance() {
      if (!isset(self::$instance)) {
        $pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
        self::$instance = new PDO('mysql:host=localhost;dbname=blog', 'root', '', $pdo_options);
      }
      return self::$instance;
    }
	
  }
  
  
?>