$(document).ready(function(){
	//Set year
	var date = new Date();
	$('.year').text(date.getFullYear());
	$('.year-difference').text(date.getFullYear() - 2016);
});
