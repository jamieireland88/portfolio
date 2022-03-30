$(document).ready(function(){
	//Handle turbulent displacement filter
	var bt = document.querySelectorAll('.navItem, .button');
	var turbVal;
	var turb = document.querySelectorAll('#filter feTurbulence')[0];

	var screenCenter = {x: window.outerWidth/2, y: window.outerHeight/2};
	var degrees = 2;

	for(var item of bt)
	{
		$(item).on('mouseover', function(){
			TweenMax.killTweensOf(turbVal);
			for(var innerloop of bt)
			{
				$(innerloop).css({
					'-webkit-filter': 'none',
					filter: 'none',
				});
			}
			$(this).css({
				'-webkit-filter': 'url(#filter)',
	  			filter: 'url(/#filter)',
			});

			turbVal = { val: 0.000001 };
			var btTl = new TimelineLite({paused: true, onUpdate: function() {
			  turb.setAttribute('baseFrequency', '0 ' + turbVal.val);
			} });
			btTl.to(turbVal, 0.2, { val: 0.3 });
			btTl.to(turbVal, 0.2, { val: 0.000001 });
			btTl.play();
		});
	}
	$(window).on('resize', function(){
		screenCenter.x = window.outerWidth/2;
		screenCenter.y = window.outerHeight/2;
	});
	$(window).on('mousemove', function(e){
		var dx = (e.clientX - screenCenter.x)/((window.outerWidth/2)/2);
		var dy = -(e.clientY - screenCenter.y)/((window.outerHeight/2)/2);
		if(dx < -1)
			dx = -1;
		if(dx > 1)
			dx = 1;
		if(dy < -1)
			dy = -1;
		if(dy > 1)
			dy = 1;
		$('#navContainer').css({
			transform: 'rotateY('+ (degrees * dx) +'deg) rotateX('+ (degrees * dy) +'deg)',
		});
	});
});
