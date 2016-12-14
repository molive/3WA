<?php

class Order {
	protected $produtcs = [];
  protected $ref;

  // $order1 = new Order('XLBLB');
  public function __construct($ref)
  {
    $this->ref = $ref;
    // $this->setRef($ref);
    
  }
  
  public function getRef(){
    
    return $this->ref;
    
  }
  
  public function setRef($ref){
    
   $this->ref = $ref;
    
  }
  
  public function getProducts(){
    
    return $this->ref;
    
  }
  
  public function addProduct(Product $product){
    
    $this->products[] = $product;
  
    
  }
  
}