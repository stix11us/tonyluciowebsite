$( document ).ready(function() {
  // Handler for .ready() called.
  $("#skills, .info1, #footer").hide();
  //Skills toggle
	$("h3").on('click', function(){
        $("#skills").toggle(700);
    });
  //contact toggle
	$("h4").on('click', function(){
        $("#contactstuff > p, #footer").toggle(700);
    });
});
