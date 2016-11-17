<?php 

	// Array:
	$users = ['Olivier','Jerôme','Thibault','Jean'];
	
	echo $users[0] ;  // Olivier
	echo count($users);  // afficher 4
	
	$eleves[] = "Pierre";  // Ajoute un nouvel utilsateur dans le tableau users
	
	echo $eleves[4] ;  // Pierre
	
	
	
	
	
	// Tableaux associatif (équivalent des objets litéreaux en JS
	$user = ['firstName' => "Olivier" , 
			 'lastname' => "Martin",
			 'age' => 28 ];
			 
	echo $user['age'];  // 28
	
	$user['city'] = "lyon";
	

?>