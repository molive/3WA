window.onload = function () {

	var imgs = document.querySelectorAll('.thumbs a');  // contient une collection d'objet html
	var mainImg = document.getElementById('mainImg'); // contient un objet html
	var infosArea = document.getElementById('infos');
	var container =  document.getElementById('container');
	var imgContainer =  document.querySelector('#container img');  // image contenu dans la div aillant pour id container
	
	console.log(imgs[0]);  // affiche <a alt="Description 1" href="1.jpg"><img src="images/thumb/1.jpg"></a> (/!\ objet HTML et non une chaine de caractère)

	
	function updateMainImg(data) { // data doit être un objet HTML <a alt="Description 1" href="1.jpg"><img src="images/thumb/1.jpg"></a> 

		var href = data.getAttribute('href');
		var description = data.getAttribute('alt');
		mainImg.setAttribute("src", "medium/"+href);
		infosArea.innerHTML = description;

	}
	
	
	for(let img of imgs) {
	
		// Gestion de l'événement au survole des miniatures
		img.addEventListener('mouseover', function() {
			
			var href = this.getAttribute('href');
			var description = this.getAttribute('alt');
			
			mainImg.setAttribute("src", "medium/"+href);
			infosArea.innerHTML = description;
			
			// On change l'état de la miniature
			
			
			
		});

		// Gestion de l'événement au clic sur les miniatures
		img.addEventListener('click', function(e) {
		
			var href = this.getAttribute('href');
			imgContainer.setAttribute("src", href);
			container.style.display = 'block';
			e.preventDefault(); // On bloque l'action par défaut de cet événement
			
		});
	
	}

	// faire disparaitre l'image aggrandie si on clique dessus
	
	
	container.addEventListener('click', function(e) {
	
		container.style.display = 'none';
	
	});
	

/*
getElementById
getElementByClassName
querySelectorAll()
querySelector()
*/



}


/*
  function httpGet(theUrl)
  {
    var xmlHttp = null;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
  }
  
  var url = httpGet("https://maps.googleapis.com/maps/api/geocode/json?address=Lyon%20France");
  */
  
  //$.get("https://maps.googleapis.com/maps/api/geocode/json?address=Lyon%20France",function(data){ url = data.html; alert(url);});
  
  //alert(url);
  
  //var url = JSON.parse(url);
 // alert(url["results"][0]["address_components"][0]['long_name']);  // Affiche Lyon
  
  
  /*

var imgs = document.querySelectorAll('.thumbs a');
mainImg = document.getElementById('mainImg');
infosArea = document.getElementById('infos');



console.log(typeof imgs[0]);  // affiche <a alt="Description 1" href="1.jpg"><img src="images/thumb/1.jpg"></a> (/!\ objet HTML et non une chaine de caractère)


function updateMainImg(data) { // data doit être un objet HTML <a alt="Description 1" href="1.jpg"><img src="images/thumb/1.jpg"></a> 

	    var href = data.getAttribute('href');
		var description = data.getAttribute('alt');
		mainImg.setAttribute("src", "images/medium/"+href);
        infosArea.innerHTML = description;

}

updateMainImg(imgs[0]);

//imgs.remove();

/*
getElementById
getElementByClassName
querySelectorAll()
querySelector()
*/

/*
for( var id in imgs) {

    imgs[id].addEventListener('mouseover', function(e) {
	    updateMainImg(this);
		e.preventDefault(); // On bloque l'action par défaut de cet événement
    });


}
*/
