
var startedCoding = 2015;
$('#codingYears').html(new Date().getFullYear() - startedCoding);

//create svg
var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('width', $(window).width());
svg.setAttribute('height', $(window).width());
$(svg).css({
	position: 'absolute',
	left: 0, top: 0,
});
$(svg).insertBefore($('#center-wrapper'));

var colours = ['#008000', '#800080'];	
requestAnimationFrame(particles);

function particles()
{
	var radius = chance.floating({min: 0.5, max: 5});
	var tmp = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	tmp.setAttribute('cx', -radius);
	tmp.setAttribute('cy', chance.floating({min: $(window).height()/2, max: $(window).height()}));
	tmp.setAttribute('r', radius);
	tmp.setAttribute('fill', chance.pickone(colours));
	$(svg).append($(tmp));

	var tl = new TimelineMax({onComplete: function(){$(tmp).remove()}});
	tl.to($(tmp), 3 * (radius/5), {x: $(window).width() + radius*2, ease: Sine.easeInOut});
	tl.to($(tmp), 3 * (radius/5), {y: -chance.floating({min: 0, max: $(window).height()/2}), ease: Sine.easeInOut}, 0);

	requestAnimationFrame(particles);
}
