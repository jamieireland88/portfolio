
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

var defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
$(svg).append($(defs));

var filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
filter.setAttribute('id', 'goo');
$(defs).append($(filter));

var feGaussianBlur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
feGaussianBlur.setAttribute('in', 'SourceGraphic');
feGaussianBlur.setAttribute('stdDeviation', '3');
feGaussianBlur.setAttribute('result', 'blur');
$(filter).append($(feGaussianBlur));

var feColorMatrix = document.createElementNS('http://www.w3.org/2000/svg', 'feColorMatrix');
feColorMatrix.setAttribute('in', 'blur');
feColorMatrix.setAttribute('mode', 'matrix');
feColorMatrix.setAttribute('values', '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9');
feColorMatrix.setAttribute('result', 'goo');
$(filter).append($(feColorMatrix));

var feComposite = document.createElementNS('http://www.w3.org/2000/svg', 'feComposite');
feComposite.setAttribute('in', 'SourceGraphic');
feComposite.setAttribute('in2', 'goo');
feComposite.setAttribute('operator', 'atop');
$(filter).append($(feComposite));

var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
g.setAttribute('filter', 'url(#goo)');
$(svg).append($(g));

var colours = ['#008000', '#800080'];
var p = 0;	
requestAnimationFrame(particles);

function particles()
{
	var radius = chance.floating({min: 0.5, max: 8});
	var tmp = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	tmp.setAttribute('cx', -radius);
	tmp.setAttribute('cy', chance.floating({min: $(window).height()/2, max: $(window).height()}));
	tmp.setAttribute('r', radius);
	tmp.setAttribute('fill', chance.pickone(colours));	
	$(g).append($(tmp));

	var tl = new TimelineMax({onComplete: function(){$(tmp).remove()}});
	tl.to($(tmp), 3 * (radius/5), {x: $(window).width() + radius*2, ease: Expo.easeInOut});
	tl.to($(tmp), 3 * (radius/5), {y: -chance.floating({min: 0, max: $(window).height()/2}), ease: Expo.easeInOut}, 0);

	requestAnimationFrame(particles);
}
