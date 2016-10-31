

var seconds = 0, minutes = 0, hours = 0;  // valeur à incrémentées
var $needleSecond = $('.second'), $needleMinute = $('.minute'), $needleHour = $('.hour');  // Objets jQuery relatif à nos aiguilles qui seront mises en rotations
var radiusForSeconds = 0,radiusForMinutes = 0, radiusForHours = 0 ;

var $showTime = $('#time');
var timer;

function pad(value){

	if(value == 0) return '00';
	else if(value < 10) return '0'+value;
	else return value;

}

function showTime(){
	
	$showTime.text(pad(hours)+'h'+pad(minutes)+'m'+pad(seconds));

}

function start(){
// On actualise la position des aiguilles chaque secondes
	timer = setInterval(function(){

		seconds++;
		
		
		if(seconds == 60) { seconds = 0;  minutes++ }
		if(minutes == 60) { minutes = 0; hours++;}
		if(hours == 12) hours = 0;	
			
		radiusForSeconds = seconds * 6;  // car 1s écoulée équivaut à 6° (360 / 60)

		
		
		radiusForMinutes +=  0.1;  // car 1s écoulée équivaut à 0.1° (360 / 3600)  (l'aiguille des minute fait un tour complet du cadran en 3600s  (60 minute x 60s)
		radiusForHours +=  30 / 3600;  // car 1s écoulée équivaut à 0.1° (360 / 3600)  (l'aiguille des minute fait un tour complet du cadran en 3600s  (60 minute x 60s)

		// en 1h l'aiguille des heures aprcours 1/12 du cadran soit 60° (360 / 12)
		// donc en 1s l'aiguille des heures parcours 60 / 3600
		
		$needleSecond.css('transform' , 'rotate(' + radiusForSeconds + 'deg)'); // bien mettre l'unité "deg" (degré)
		$needleMinute.css('transform' , 'rotate(' + radiusForMinutes + 'deg)'); // bien mettre l'unité "deg" (degré)
		$needleHour.css('transform' , 'rotate(' + radiusForHours + 'deg)'); // bien mettre l'unité "deg" (degré)
		
		showTime();
	
	
  }	, 100);
  console.log('START');
  
}
  
start();
 
 
function stop(){

	clearInterval(timer);
	console.log('STOP');
}
  
 $('#stop').click(function(){stop(); $(this).toggle(); $('#start').toggle();  });
 $('#start').click(function(){start(); $(this).toggle(); $('#stop').toggle();  });
 

/*
// S'excute toutes les 60s
var minute = setInterval(function(){

	minutes++;
	if(minutes == 60) minutes = 0;
	console.log(minutes);
	var radius = minutes * 6; // car 60s écoulées équivaut à 6° (360 / 60)
	$needleSecond.css('transform' , 'rotate(' + radius + 'deg)'); // bien mettre l'unité "deg" (degré)
  }	, 60000);

// S'excute toutes les 3600s
var hour = setInterval(function(){

	hours++;
	if(hours == 60) hours = 0;
	console.log(hours);
	var radius = seconds * 30;  // car 1s écoulée équivaut à 0.1° (360 / 3600)  vu que l'aiguille des minutes parcours 360° en 3600s
	$needleSecond.css('transform' , 'rotate(' + radius + 'deg)'); // bien mettre l'unité "deg" (degré)
  }	, 3600000);
  */