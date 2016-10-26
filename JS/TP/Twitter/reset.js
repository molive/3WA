
// .submit() en savoir plus http://api.jquery.com/submit/

  var form = $('#twitterForm');  // On créé un objet jQuery qui contient notre formulaire
  var textareaTweet = $('#tweet');  // On place dans une variable l'objet jQuery contenant notre textaera servant à écrire les tweets
  var charCounterArea = $('#charCounter');   // doit contenir l'élément html <span id="charCounter">140</span>

  
    textareaTweet.on('keyup, keypress', function () {
   
     var tweet = $(this).val();   // je récupère le contenu du textarea (une chaine de caractères);
    var nbChars = tweet.length;  // on calcule le nombre caractère saisi
    // var nbChars = $(this).val().length;
    var charsRemaining = 140 - nbChars; // on calcule le nombre de caractères restants
    // on veut maintenant actualiser le contenu de l'élement html : <span id="charCounter">140</span>
    
    charCounterArea.html(charsRemaining);
   
   });
  
  
    //textareaTweet.on('keyup,  keypress',function(){
   /*
   textareaTweet.keyup(function(){
    var tweet = $(this).val();   // je récupère le contenu du textarea (une chaine de caractères);
    var nbChars = tweet.length;  // on calcule le nombre caractère saisi
    // var nbChars = $(this).val().length;
    var charsRemaining = 140 - nbChars; // on calcule le nombre de caractères restants
    // on veut maintenant actualiser le contenu de l'élement html : <span id="charCounter">140</span>
    
    charCounterArea.html(charsRemaining);
    // charCounterArea.text(charsRemaining);  // la méthode .text permet de rempalcer le contenu par du texte (mais pas du code html)
   });
  */
    /*
   textareaTweet.keypress(function () {
   
     var tweet = $(this).val();   // je récupère le contenu du textarea (une chaine de caractères);
    var nbChars = tweet.length;  // on calcule le nombre caractère saisi
    // var nbChars = $(this).val().length;
    var charsRemaining = 140 - nbChars; // on calcule le nombre de caractères restants
    // on veut maintenant actualiser le contenu de l'élement html : <span id="charCounter">140</span>
    
    charCounterArea.html(charsRemaining);
   
 });
 
 */
  
  /*
   $('button.delete').click(function(){
    
    $(this).parent().remove();
    
  });
  */
  
  /*
  var test = "text name ici et la firstname";
  var newV = test.replace('name','olivier');
  alert(newV);*/
   $('#thread').on('click','button.delete',function(){
    
   $(this).parent().fadeTo("slow",0.3).slideUp(1000);
    
  });
  
  
  form.submit(function(){
   
    // On créé un objet jQuery qui contient notre formulaire
   // var tweet = $('#tweet').attr('value');  //on créé une variable tweet qu iva contenir ce qu'on saisi dans le textarea
    var tweet = textareaTweet.val();  // synthaxe simplifié  qui permet de récupéré la valeur d'un attribut "value" d'un champs de formulaire
 // On veut ajouter le tweet posté dans notre div aillant l'id ="thread" en tête de liste
   
   // Pour empecher l'envois de plusieurs e
   
   

    if(tweet.length > 140) {
      alert('Vous avez tapé trop de caractères');
	  textareaTweet.addClass('error');
    }
    
   else if(tweet != '') {
      
    
    $('#thread').prepend('<div class="tweet">'+ tweet + '<br><button class="delete">supprimer</button><hr></div>');
    //$('.tweet').fadeIn(1000);  // on fait apparaitre le tweet avec un effet de fondu qui va durer 1s (1000 ms);
    $('#thread .tweet:first-child').slideDown(1000);  // on selectionne le dernier tweet posté et on l'affiche avec la méthide slideDown
	
	form.trigger('reset');
    charCounterArea.text(140);
	textareaTweet.removeClass('error');
    
    }  //  sur notre objet jQuery contenant la zone d'affiche de tweets on applique la méthode prepend pour ajouter le tweet en tête de liste
    
   //alert(tweet);
    
    // On va ensuite réinitiser notre textarea en supprimant ce qui a été écrit
    //textareaTweet.val('');

	
    return false;
    
  });

});










