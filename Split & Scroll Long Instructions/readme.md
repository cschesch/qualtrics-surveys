This template allows you to split and scroll long instructions, so that respondents are not discouraged and remain focussed on the current section, but can still go up to revisit previous explanations. This is also useful because many survey providers only allow comprehension questions if instructions appear on the same screen.

The template works using a single text question and a Loop & Merge, which avoids annoying and error-prone copy-pasting.

1. Write instructions and split them into N divs, tagged "section1", ..., "sectionN", like so:


<h1>Split & Scroll Long Instructions</h1><br />

<div id="section1">
<h3>First instruction section</h3><br />
...
</div>

<div id="section2">
<h3>Second instruction section</h3><br />
...
</div>

<div id="section3">
<h3>Third instruction section</h3><br />
...
</div>

<div id="section4">
<h3>Fourth instruction section</h3><br />
...
</div>

<div id="section5">
<h3>Fifth instruction section</h3><br />
...
</div>

2. Create an "Instructions" block with a single question. Enable Loop & Merge on the block and create N loops wihtout any field values. Make sure "Loop based off of a question" and "Randomize loop order" remain disabled.

3. Enable the question's Javascript and paste the following code into it:


Qualtrics.SurveyEngine.addOnload(function()
{

	jQuery('#section${lm://CurrentLoopNumber}').nextAll('*').remove();
	
});

Qualtrics.SurveyEngine.addOnReady(function()
{

	jQuery('html, body').animate({scrollTop: jQuery('#section${lm://CurrentLoopNumber}').offset().top}, '10');
	
});

Good luck!
