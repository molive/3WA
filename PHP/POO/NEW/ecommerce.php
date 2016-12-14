<?php
  function __autoload($class_name) 
	{
		require('classes/'.$class_name . '.php');
	}
	
	// Mes instances de la class User (objects client)
	$client1 = new User('MARTIN', 'OLIVIER');

	// Mes instances de la class Order (objects commande)
	$order1 = new Order('XLBFZ');
	$order2 = new Order('SGDJF');
	
	// Mes instances de la class Product (objects produits)
    $product1 = new Product('Iphone 6');
	$product2 = new Product('PS4');
	$product3 = new Product('NINTENDO DS');
	$product4 = new Product('CORBUSIER LC4');
	
	// On rajoute des objets produits dans un objet commande
	
	$order1->addProduct(   // j'atoute le produit 1 (Iphone 6);
	                       // j'ajoute le produi 2 (PS4)
						   
						   
	$echo $order->getUser()->getFirstname();
?>