$('#container').append($('<div/>', {'id': 'colourBox'}));
TweenMax.set($('#colourBox'), {width: '100%', height: '100%'})
var tl = new TimelineMax({timeScale: 10, repeat: -1});
tl.fromTo($('#colourBox'), 5, {backgroundColor: '#cc0000'}, {backgroundColor: '#0000cc'});
tl.fromTo($('#colourBox'), 5, {backgroundColor: '#0000cc'}, {backgroundColor: '#cccc00'});
tl.fromTo($('#colourBox'), 5, {backgroundColor: '#cccc00'}, {backgroundColor: '#cc0000'});
