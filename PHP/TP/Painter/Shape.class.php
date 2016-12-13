<?php

abstract class Shape
{
	protected $color;


    protected $opacity;

	protected $points;
	
	
	abstract public function draw(SvgRenderer $renderer);


	public function __construct()
	{
		$this->points = [];
		$this->color    = 'black';
		$this->opacity  = 1;
	}

	
	public function addPoint($x,$y){
	
		$this->points[] = new Point($x,$y);
	
	}
	
	public function setColor($color)
	{
		$this->color = $color;
	}

	public function getColor(){
		return $this->color;
	}
	
    public function setLocation($x, $y)
    {
		$this->points =[]; // Signifiue que la géométrie n'a besoin que d'un point pour être localisée.
        $this->addPoint($x, $y);
    }
	
    public function getLocation($x, $y)
    {
        return $this->location;
    }
	

	public function setOpacity($opacity)
	{
		$this->opacity = $opacity;
	}
	
	public function getOpacity()
	{
		return $this->opacity;
	}
	
	
}