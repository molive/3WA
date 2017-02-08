document.addEventListener("DOMContentLoaded", function(event) {  // On s'assure que l'ensemble du code HTML se charge entièrement

    var items = document.querySelectorAll('#chooseCategory li');
	var searchInput = document.getElementById('searchCategory');
	
	var t = document.querySelector('#chooseCategory');
	
	var list = t.querySelectorAll('li:not(.hide)');
	
	console.log(list);
	
	searchInput.addEventListener('keyup',function(){
	
		var searchText = this.value.toLowerCase();

		for(item of items){
		
			let currentLiText = item.textContent.toLowerCase(),
			    showCurrentItem = currentLiText.indexOf(searchText) == -1;
					
				item.classList.toggle('hide',showCurrentItem);
		
		}
		
	
	});
	
});