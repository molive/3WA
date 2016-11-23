<?php 

	// Array:
	$users = ['Olivier','Jerôme','Thibault','Jean'];
	// $users = array('Olivier');
	
	
	echo $users[0] ;  // Olivier
	echo count($users);  // afficher 4
	
	$eleves[] = "Pierre";  // Ajoute un nouvel utilsateur dans le tableau users
	
	echo $eleves[4] ;  // Pierre
	
	
	
	
	
	// Tableaux associatif (équivalent des objets litéreaux en JS
	$user = ['firstName' => "Olivier" , 
			 'lastName' => "Martin",
			 'age' => 28 ];
			 
	echo $user['age'];  // 28
	
	$user['city'] = "lyon";
	array_search("Martin");  // Affiche lastName
	
	
	if(array_key_exists('firstName', $array)) echo "La clé firstName existe";
	if(in_array('Olivier', $array)) echo "La clé firstName existe";
	
	
	
	

?>