//$(document).ready(function(){
$(function(){

  //alert($(window).height());
  
  function resize(){
  
    $('#container').css('line-height' , $(window).height()+'px');   // pemet de centrer l'image verticalement quelque soit la hauteur de la fenètre

  
  }
  
  
  resize();
  
  $(window).resize(resize);

  var thumbsLinks = $('.thumbs a');  // thumbsLinks est un objet jQuery qui va contenir une collection d'objet jQuery ;
  // /!\ thumpbsLinks n'est pas un tableau (array);
 /* var thumbLink1 = thumbsLinks.eq(0);
  var urlImg1 = thumbLink1.attr('href')*/
  
  
  // facon plus rapide :
  var urlImg1 = thumbsLinks.eq(0).attr('href');  // equivalent de la ligne 354 + 355  
  console.log(urlImg1); // Doit afficher 1.jpg
  
  var imgMediumSize = $('#mainImg');  // imgMediumSize est un object jQuery qui contient l'image principal aillant pour id="mainImg" (<img id="mainImg" src="/images/medium/">
  imgMediumSize.attr('src','images/medium/'+urlImg1);


    var imgMediumSize = $('#mainImg');  // imgMediumSize est un object jQuery qui contient l'image principal aillant pour id="mainImg" (<img id="mainImg" src="/images/medium/">
	imgMediumSize.attr('src','images/medium/'+urlImg1);
  
  
  var descriptionArea = $('#infos');
  var descriptionImg1 =  thumbsLinks.eq(0).attr('alt');
  
  descriptionArea.html(descriptionImg1);  // en JS il aurait fallut utiliser la  objetHTML.innerHTML = descriptionImg1

  
  
  console.log(descriptionImg1);  // doit afficher dans la console 'Description 1'
  
  
    var container = $("#container");
  
  thumbsLinks.click(function(){
    
    var urlImg = $(this).attr('href');
    // <div id="container"> <img src="/images/1.jpg">  </div>
    container.children().attr('src','images/'+urlImg);
    
    container.fadeIn();
    
    return false;
  });
  

    
    container.click(function(e) {  // le paramètre e représente l'évènement
		
		// alert(e.target.getAttribute('src'));   // e.target correspondant à l'élément html cliqué dans la div du conténaire d'image grand format
		//alert($(e.target).attr('src'));
		// créer une condition qui va empêcher le masquage du conténaire d'image grand format si on clique sur l'image 
		//if($(e.target).is('#container'))
		$(this).fadeOut();
    
    });
    
     
	container.find('img').click(function(event){
	
		event.stopPropagation();

	});
	
  
    

  
  
  thumbsLinks.hover(function(){
    
	//var urlImg = this.getAttribute('href');
    var urlImg = $(this).attr('href');
    var descriptionImg = $(this).attr('alt');
    
    imgMediumSize.attr('src','images/medium/'+urlImg);  // On met à jour l'attribut src de l'image principale (id="mainImg")
    descriptionArea.html(descriptionImg);
    thumbsLinks.children().removeClass('current');
    $(this).children().addClass('current');
    
  });
  
  
  
  
  
});




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
