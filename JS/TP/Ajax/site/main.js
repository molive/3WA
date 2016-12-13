

$('#menu a').click(function(e){

	e.preventDefault();

	$.get($(this).attr('href'),function(data){
		
		$('#menu a').removeClass('active');
		$(this).addClass('active');
		$('#corps').html(data);
	
	}.bind(this));

});