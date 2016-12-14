var Dice = function($dice){
// function Dice($dice) {

	this.dice = $dice;
	this.value = 1;


	
	this.changerFace();
	this.init();
}

// NB: il est possible d'ajouter dynamiquement une nouvelle méthode via l'objet prototype de l'objet Dice:
// https://www.grafikart.fr/formations/debuter-javascript/prototype
Dice.prototype.lancer = function(){
	
		this.value = rand(1,6);
		localStorage.setItem(this.dice.attr('id')+'_currentValue', this.value);
		this.changerFace();
	
};
	
Dice.prototype.changerFace = function(){

		this.dice.css('background-image','url("images/'+this.value+'.png")');
		
	
};



Dice.prototype.changer = function(v){
	
	
		
			this.value = v;
			this.changerFace();
		
	
	
}


Dice.prototype.init = function(){
	
		var currentDiceValue = localStorage.getItem(this.dice.attr('id')+'_currentValue');
		if(currentDiceValue != null) this.value = currentDiceValue;
		
		// Gestionnaire d'événements
		this.dice.click(this.lancer.bind(this));
	
		this.changerFace();
	
};


Array.prototype.add = function(val){

	this.push(val);

}




var notes = [5];

console.log(notes);


notes.add(8);

console.log(notes);
	
	
