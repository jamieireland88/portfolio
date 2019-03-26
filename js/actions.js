$('#container').append($('<div/>', {'id': 'colourBox'}));
TweenMax.set($('#colourBox'), {width: '400%', height: '100%', background: 'linear-gradient(to left, red, blue, red)'})
TweenMax.fromTo($('#colourBox'), 5, {x: '0%'}, {x: '-50%', repeat: -1});
