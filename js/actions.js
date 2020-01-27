
$(document).ready(function(){
	var startedCoding = 2015;
	$('#codingYears').html(new Date().getFullYear() - startedCoding);

	$('#pageContainer h1').animate({opacity: 1}, 500);
	$('#pageContainer p').animate({opacity: 1}, 500);

	var showParticles = true;
	//create svg
	var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svg.setAttribute('width', $(window).width());
	svg.setAttribute('height', $(window).width());
	$(svg).css({
		position: 'fixed',
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
		if(!showParticles)
			return;		

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


	//set up particle switch
	document.getElementById('particleSwitch').addEventListener('change', function(){	
		showParticles = !showParticles;
		if(showParticles) requestAnimationFrame(particles);
	});
});

function showAbout()
{
	$('button').removeClass('active');
	$('#aboutButton').addClass('active');

	hidePageItems(function(){
		$('#pageContainer').append($('<h1/>', {text: 'Hello there', style: 'display: none'}));
		$('#pageContainer').append($('<p/>', {text: 'My name is Jamie, and welcome to my portfolio.', style: 'display: none'}));
		$('#pageContainer').append($('<p/>', {html: 'I have been coding professionally for '+ (new Date().getFullYear() - 2015) +' years so far. I started off at Edinburgh College studying <a href="http://www.edinburghcollege.ac.uk/courses/Computing/Computer%20Games%20Development%20HND/CR1CGD1B19">HND Computer Games Development</a> while also completing an internship in digital design at <a href="https://www.flowhospitalitytraining.co.uk/en/">Flow Hospitality Training Ltd.</a>', style: 'display: none'}));
		$('#pageContainer').append($('<p/>', {html: 'My current role as a Multimedia Digital Designer is one that is heavily focussed around creating high quality, robust, intuitive interactive educational content using <strong>HTML</strong>, <strong>CSS</strong> and <strong>JAVASCRIPT</strong>.', style: 'display: none'}));
		$('#pageContainer').append($('<p/>', {html: 'I have a keen interest in both playing and creating games, I particularly enjoy participating in the Global Game Jam, here you can see an example of my team\'s 2019 entry, <a href="https://globalgamejam.org/2019/games/home-high-seas">Home on the High Seas</a>, developed using assets created with <strong>ADOBE</strong> products and programmed entirely by myself in <strong>C#</strong> using <strong>UNITY</strong> over the course of two days.', style: 'display: none'}));
		$('#pageContainer').append($('<p/>', {html: 'I would love to <a href="#" onclick="showContact()">chat</a> about any job opportunities you might have available.', style: 'display: none'}));
		showPageItems();
	});	
}

function showAnimations()
{
	$('button').removeClass('active');
	$('#animationButton').addClass('active');

	hidePageItems(function(){

		$('#pageContainer').append($('<h2/>', {text: 'The Art of Bartending', style: 'display: none;'}));
		$('#pageContainer').append($('<p/>', {text: 'This was my first foray into 2D animation as part of my Games Development course at Edinburgh College, it contains about 500 hand drawn frames and unfortunately, is voiced by me.', style: 'display: none;'}));

		var video = document.createElement('iframe');
		video.setAttribute('width', 560);
		video.setAttribute('height', 315);
		video.setAttribute('src', 'https://www.youtube.com/embed/FV2P18_yZyU');
		video.setAttribute('frameborder', 0);
		video.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');

		$(video).css({
			position: 'relative',
			left: '50%',
			transform: 'translate(-50%, 0)',
			display: 'none',
		});

		$('#pageContainer').append($(video));

		$('#pageContainer').append($('<h2/>', {text: 'Around the World', style: 'display: none;'}));
		$('#pageContainer').append($('<p/>', {text: 'In my second year of Games Development, our assignment was to create a 3D animation by modelling and texturing everything in the scene.', style: 'display: none;'}));

		var video = document.createElement('iframe');
		video.setAttribute('width', 640);
		video.setAttribute('height', 360);
		video.setAttribute('src', 'https://player.vimeo.com/video/387555745');
		video.setAttribute('frameborder', 0);
		video.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');

		$(video).css({
			position: 'relative',
			left: '50%',
			transform: 'translate(-50%, 0)',
			display: 'none',
		});

		$('#pageContainer').append($(video));
		showPageItems();
	});
}

function showSideProjects()
{
	$('button').removeClass('active');
	$('#sideProjectButton').addClass('active');

	hidePageItems(function(){
		showPageItems();
	});	
}

function showGames()
{
	$('button').removeClass('active');
	$('#gameButton').addClass('active');

	hidePageItems(function(){
		showPageItems();
	});
}

function showContact()
{
	$('button').removeClass('active');
	$('#contactButton').addClass('active');
	
	hidePageItems(function(){

		$('#pageContainer').append($('<h2/>', {text: 'Contact', style: 'display: none'}));
		$('#pageContainer').append($('<p/>', {html: 'Email: <a href="mailto: jamieireland88@outlook.com">jamieireland88@outlook.com</a>', style: 'display: none'}));
		$('#pageContainer').append($('<p/>', {html: 'Mobile: 07825 210 053', style: 'display: none'}));

		var badge = document.createElement('div');
		$(badge).css({
			width: 50, height: 50,
			background: 'url(./img/linkedIn.svg) 50% 50% no-repeat',
			'background-size':'contain',
			cursor: 'pointer',
		});
		$('#pageContainer').append($(badge));
		$(badge).on('click', function(){
			window.open('https://www.linkedin.com/in/jamie-ireland/', '_blank');
		});

		showPageItems();
	});
}

function hidePageItems(callback)
{
	var c = document.getElementById('pageContainer').children;

	if(c.length <= 0)
	{
		callback();
		return;
	}

	for(var i = 0; i < c.length; i++)
	{
		$(c[i]).slideUp(300, function(){
			$('#pageContainer').html('');
			callback();
		});		
	}
}

function showPageItems()
{
	var c = document.getElementById('pageContainer').children;
	for(var i = 0; i < c.length; i++)
	{
		$(c[i]).slideDown(300);		
	}
}
