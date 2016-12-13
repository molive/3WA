$(function(){

  var okCity = false;
  var latArea = $('#lat');
  var lngArea = $('#lon');
  var formAjax = $('#ajaxForm');
  /*
    formAjax.submit(function(){
    
   var address = $("[name=request]").val();  // on veut cibler <input class="form-control" name="request" type="text" value="">

    console.log(address);
    
    return false;
    
  });
  */
  
  /*
  
 // jQuery.ajax() ; 
  $.ajax({
    url : "https://maps.googleapis.com/maps/api/geocode/json?address=fdfdgdgdgdgdgdgdgdgdg",
    dataType : "json",
    success : function (data) {  // data contient le contenu de la page défini dans la propriété "url" (ligne 58) encodé au format définit dans la propriété "dataType"
      
      if(data['results'].length != 0) {
    
      var lat = data['results'][0]['geometry']['location']['lat'];  // On récupère la latitude
      var lng = data['results'][0]['geometry']['location']['lng']; // On récupère la longitude
   // se référer à l'exercice JSON sur l'API googlemap
      
     latArea.text(lat);
     lngArea.text(lng);
        
      }
      else
      {
          $('#errorsArea').fadeIn(1000);  // http://api.jquery.com/fadeIn/
     
      } 
	  
    }
  });
*/


// http://api.jquery.com/jquery.ajax/

// google map  API en savoir plus https://developers.google.com/maps/tutorials/fundamentals/adding-a-google-map

  function initMap(latitude,longitude) {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: latitude, lng: longitude},
      zoom: 15
    });
  }

// fin API googleMaps //



/*
$.ajax({
url : "https://maps.googleapis.com/maps/api/geocode/json?address=Lyon%20France",
setting : {async : false },
dataType: "json",  // peut prendre html , json et bien d'autre format
success : function(data) {
alert(data['results'][0]['geometry']['location']['lat']);
}
});
*/
$('#ajaxForm').submit(function(e){

	$('#errorsArea').hide();
		$.ajax({
	method : "get",
	url : 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURIComponent($('[name=request]').val())+'&key=AIzaSyB2iTzI18MN-a1gUC2DGHMVP47dcFWwKrI',
	dataType: "json",  // peut prendre html , json et bien d'autre format
	success : function(data) {
	
		if(data['results'][0] != undefined ) {
		var lat = data['results'][0]['geometry']['location']['lat'];
		var lon = data['results'][0]['geometry']['location']['lng'];
		$('#lat').html(lat);
		$('#lon').html(lon);
		jsonString = JSON.stringify(data, null, "\t");
		$('#json').html(jsonString);
		initMap(lat,lon);
		
		
	
	}
	else
	{
		$('#errorsArea').fadeIn();
		$('#lat').html('XXX');
		$('#lon').html('XXX');
		

	}
	}
	});
	

			return false;

});



});