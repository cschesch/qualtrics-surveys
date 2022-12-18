Qualtrics.SurveyEngine.addOnload(function()
{

	jQuery('#section${lm://CurrentLoopNumber}').nextAll('*').remove();
	
});

Qualtrics.SurveyEngine.addOnReady(function()
{
	
	jQuery('html, body').animate({scrollTop: jQuery('#section${lm://CurrentLoopNumber}').offset().top}, '10');
	
});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/

});