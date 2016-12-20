<?php trait MagicalTrait {


    // Cette méthode sera appelée si on cherche à afficher le contenu d'une propriété en protected ou non existante.
    public function __get($property){
		
		// Si on cherche à afficher la propriété firstName en dehors de la class (exemple $user1->firstName où $user1 est uen instance de la classe User)
		// et bien la méthode magique __get sera appelée set et son paramètre $property sera égale à firstName.
		
		$methodToCall = 'get'.ucfirst($property);  // Si property = 'firstName' alors $methodToCall = 'getFirstName' soit le nom du getter associé à la propriété firstname
		
		// On va vérifier si la méthode définie dans la varibale $methodToCall existe bien dans la class l'instance User
		
		// http://nl1.php.net/manual/fr/function.method-exists.php
		// Le premier paramètre est une instance de class et le second paramètre un nom de méthode
		if(method_exists($this, $methodToCall) == true){  // Si la méthode dans $method existe alors on appele dynamiquement le guetter associé à cette propriété ($property)
		  
		  return $this->$methodToCall();
		  
		}
		else // Autrement on récupère dynamiquement la valeur de la proprriété définie par défaut
		{
		  
			 return $this->$property;  
		  
		}
    
    }
  
    // Cette méthode sera appelée si on cherche à modifier le contenu d'une propriété en protected ou non existante.
    public function __set($property, $value){  
		// Le premier paramètre $property sera égale au nom de la propriété dont on souhaite modifier la valeur
		// Le second paramètre $value sera égale à la valeur qu'o nsouhaote assigner à cette propriété
		// Exemple si on fait $user1->firstName = "toto" (où $user1 est une instance de la classe User):
		// $property sera égale à firstName
		// $value sera égale à "toto" 
		
		$methodToCall = 'set'.ucfirst($property);  // dans le cas de l'exemple ci-dessus : setFirstName
		
		if(method_exists($this, $methodToCall )== true) {
		  
			$this->$methodToCall($value);  //  dans le cas de l'exemple ci-dessus ceci équivaut à appeler $this->setFirstName($value);
		  
		}
		else  // Si le getter associé à cette propriété n'existe pas alors on modifie cette propriéét par celle définit dans $value
		{
		   
			$this->$property = $value;
			 
		}
  
    }

}