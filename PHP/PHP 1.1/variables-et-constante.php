<?php
    // $ + nom de la variable , opérateur d'affectation "=" , valeur à stoquer
	
	// Nota: La portée des variable en php sont toujours locale con trairement en JS
	
	$myVar = "Hello Word";
	
	$number = 5;  // Int
	$boolean = true; 
	$float = 41.5895;
	$null = null;
	
	
	
	// Affichage
	echo $myVar;
	
	// echo $myvar;  //Erreur car sensibilité à la casse (v minuscule)


?>

<?= $myVar;  // équivaut à echo $myVar; ?>


<?php  // Constantes


define('TEST2', 'TITI');  

// Mot clef "const" + nom en majuscule + opérateur d'affectation "=" + valeur

const TEST = "Coucou";  // Facon plus moderne de faire


echo TEST;
echo TEST2;


// Concaténation

$firstName = "Olivier";
$lastName = "Martin";
$age = 28;

echo "je m'appelle $firstName $lastName et j'ai $age";

// ou

echo "je m'appelle ".$firstName." ".$lastName." et j'ai ".$age;




?>
