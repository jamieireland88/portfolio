document.body.addEventListener('scroll', function(){
  var maxScroll = $('#container').height() - $(document.body).height();
  var currScroll = document.body.scrollTop;
  var percentage = currScroll/maxScroll;

  $('#container').css({
    'background':'rgba('+ 255 * (percentage) +', 0, '+ 255 * (1-percentage) +', 1)',
  });
});
